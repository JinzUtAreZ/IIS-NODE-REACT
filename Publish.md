#Setup IIS Configuration server
https://github.com/azure/iisnode/wiki/iisnode-releases

#Watch videos and read blogs
https://harveywilliams.net/blog/installing-iisnode
https://www.youtube.com/watch?v=JUYCDnqR8p0

#Download IIS Configuration server
#Url Rewrite
https://www.iis.net/downloads/microsoft/url-rewrite
#Request Routing
https://www.iis.net/downloads/microsoft/application-request-routing

#Webconfig in Node (Server)
<configuration>
<system.webServer>

        <!-- indicates that the server.js file is a node.js application
        to be handled by the iisnode module -->

        <handlers>
            <add name="iisnode" path="server.js" verb="*" modules="iisnode" />
        </handlers>

        <rewrite>
            <rules>
                <rule name="sendToNode">
                    <match url="/*" />
                    <action type="Rewrite" url="server.js" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>

</configuration>

#Webconfig in React (Application/Website) // put in public folder

<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Static Assets" stopProcessing="true">
          <match url="([\S]+[.](html|htm|svg|js|css|png|gif|jpg|jpeg))" />
          <action type="Rewrite" url="/{R:1}"/>
        </rule>
        <rule name="ReactRouter Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>

#Publish in Node doing IIS

1. create webconfig in root folder and copy codes for NODE above
2. set folder security to everyone
3. in IIS config manager set Sites -> Add Web Sites -> folder location

#Publish in React doing IIS

1. create webconfig in public folder and copy codes for REACT above.
2. go to REACT root folder, type in TERMINAL npm run build
3. in IIS config manager set Sites -> Add Web Sites -> go to BUILD folder location.
