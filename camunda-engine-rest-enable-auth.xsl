<xsl:stylesheet
 version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:nsSrc="http://java.sun.com/xml/ns/javaee"
>

<!-- add camunda.administrativeuser.plugin config -->
<xsl:template match="nsSrc:web-app">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()" />
    <xsl:variable name="match" select="document($xml_conf)/data/*"/>
    <xsl:copy-of select="$match"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="@*|node()">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>
</xsl:stylesheet>
