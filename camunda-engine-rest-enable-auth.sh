#!/bin/bash
set -Eeu

if [ $# -ne 3 ] ; then
	echo "SYNTAX: $0 path/to/web /path/to/xsl /path/to/xml"
	exit 1
fi
WEB_CONF=$1
XSL_FILE=$2
XML_CONF=$3

check() {
	local xml_file=$1
	local xpath_prefix=$2

	local xpath_base="$xpath_prefix/x:plugin[x:class='io.digitalstate.camunda.plugins.AdministrativeUserPlugin']/x:properties"
	local XML_USERNAME="$xpath_base/x:property[@name='administratorUserName']"
	local XML_PASSWORD="$xpath_base/x:property[@name='administratorPassword']"
	local XML_FIRSTNAME="$xpath_base/x:property[@name='administratorFirstName']"
	local XML_LASTNAME="$xpath_base/x:property[@name='administratorLastName']"
	local XML_EMAIL="$xpath_base/x:property[@name='administratorEmail']"
	local tmp
	# Checks
	tmp=$(xmlstarlet \
		sel \
		-N x=http://www.camunda.org/schema/1.0/BpmPlatform \
		-t -v \
		"${XML_USERNAME}" $xml_file)
	if [ "$tmp" != "$ADMIN_USERNAME" ] ; then
		echo "ERROR: $xml_conf administratorUserName does not match env ADMIN_USERNAME"
		exit 1
	fi
	tmp=$(xmlstarlet \
		sel \
		-N x=http://www.camunda.org/schema/1.0/BpmPlatform \
		-t -v \
		"${XML_PASSWORD}" $xml_file)
	if [ "$tmp" != "$ADMIN_PASSWORD" ] ; then
		echo "ERROR: $xml_conf administratorPassword does not match env ADMIN_PASSWORD"
		exit 1
	fi
	tmp=$(xmlstarlet \
		sel \
		-N x=http://www.camunda.org/schema/1.0/BpmPlatform \
		-t -v \
		"${XML_FIRSTNAME}" $xml_file)
	if [ "$tmp" != "$ADMIN_FIRSTNAME" ] ; then
		echo "ERROR: $xml_conf administratorFirstName does not match env ADMIN_FIRSTNAME"
		exit 1
	fi
	tmp=$(xmlstarlet \
		sel \
		-N x=http://www.camunda.org/schema/1.0/BpmPlatform \
		-t -v \
		"${XML_LASTNAME}" $xml_file)
	if [ "$tmp" != "$ADMIN_LASTNAME" ] ; then
		echo "ERROR: $xml_conf administratorLastNAme does not match env ADMIN_LASTNAME"
		exit 1
	fi
	tmp=$(xmlstarlet \
		sel \
		-N x=http://www.camunda.org/schema/1.0/BpmPlatform \
		-t -v \
		"${XML_PASSWORD}" $xml_file)
	if [ "$tmp" != "$ADMIN_PASSWORD" ] ; then
		echo "ERROR: $xml_conf administratorPassword does not match env ADMIN_PASSWORD"
		exit 1
	fi
}

update_conf() {
	local conf=$1
	local xsl_file=$2
	local xml_conf=$3

	local file_bck=${conf}.backup_auth_rest
	local file_tmp=${conf}.tmp
	local tmp

	# check if exists
	local xpath='/x:web-app/x:filter[x:filter-name="camunda-auth"]'
	tmp=$(xmlstarlet \
		sel \
                -N x=http://java.sun.com/xml/ns/javaee \
		-t -v \
		"count(${xpath})" $conf)
	if [ "$tmp" -eq 1 ] ; then
		echo "INFO engine-rest conf found, do not add"
		cp $conf $file_tmp
	else
		echo "INFO engine-rest conf not found, adding"
		cp $conf $file_bck
		xsltproc \
			-stringparam xml_conf $xml_conf \
			$xsl_file \
			$file_bck > $file_tmp
		if [ $? -ne 0 ] ; then
			echo "ERROR: failed modify $conf"
			return -1
		fi
	fi
	# Check
	tmp=$(xmlstarlet \
		sel \
		-N x=http://java.sun.com/xml/ns/javaee \
		-t -v \
		'/x:web-app/x:filter[x:filter-name="camunda-auth"]/x:filter-name' $file_tmp)
	if [ "$tmp" != "camunda-auth" ] ; then
		echo "ERROR: failed to find filter[filter-name=camunda-auth] in $file_tmp"
		return 1
	fi
	# Check
	tmp=$(xmlstarlet \
		sel \
		-N x=http://java.sun.com/xml/ns/javaee \
		-t -v \
		'/x:web-app/x:filter-mapping[x:filter-name="camunda-auth"]/x:url-pattern' $file_tmp)
	if [ "$tmp" != "/*" ] ; then
		echo "ERROR: failed to find filter-mapping[filter-name=camunda-auth] in $file_tmp"
		return 1
	fi
	mv $file_tmp $conf
	return 0
}	

if [ "${ENGINE_REST_AUTH_ENABLE:-0}" -eq 1 ] ; then
	echo "Enabling engine-rest auth"	
	update_conf $WEB_CONF $XSL_FILE $XML_CONF
	echo "Enabled engine-rest auth"	
else
	echo "Do not enable engine-rest auth"
fi


