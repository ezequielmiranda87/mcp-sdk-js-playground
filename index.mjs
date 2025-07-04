import {
    McpServer,
    ResourceTemplate,
  } from "@modelcontextprotocol/sdk/server/mcp.js";
  import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  import { z } from "zod";

  const server = new McpServer({
    name: "weather-service",
    version: "1.0.0",
    description: "A demo weather service MCP server",
  });


  server.tool("get-weather", {location: z.string()}, async ({location}) => {
    return {
      content:[
          {
              type:"text",
              text: `The weather in ${location} is sunny and 70 degrees.`
          }
      ]
    };
  });

  server.resource(
    "weather",
    new ResourceTemplate("weather://{location}", { list: undefined }),
    async (uri, { location }) => ({
      contents: [
        {
          uri: uri.href,
          text: `Weather data for ${location}: Sunny, 72°F`,
        },
      ],
    })
  );

  // Create a communication channel using stdin/stdout
  const transport = new StdioServerTransport();

  // Connect the server to the transport and start listening for requests
  await server.connect(transport);