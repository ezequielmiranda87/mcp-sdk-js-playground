# Tiny Agents

A collection of lightweight, composable AI applications built on Hugging Face's Inference Client and the Model Context Protocol (MCP) stack. These agents are designed to be simple, efficient, and easy to integrate into your workflows.

## Overview

Tiny Agents provides a framework for creating AI-powered applications that can:
- Execute specific tasks with minimal overhead
- Compose together to create complex workflows
- Leverage Hugging Face's powerful inference capabilities
- Integrate seamlessly with the MCP ecosystem

## Resources

- **NPM Package**: [https://www.npmjs.com/package/@huggingface/tiny-agents](https://www.npmjs.com/package/@huggingface/tiny-agents)
- **Documentation**: [https://huggingface.co/blog/tiny-agents](https://huggingface.co/blog/tiny-agents)

## Prerequisites

Before running any agent, you'll need:
- Node.js (version 14 or higher)
- A Hugging Face account and API token
- Access to the models you want to use

## Setup

### 1. Obtain Your Hugging Face Token

First, you'll need to get your Hugging Face API token:
1. Visit [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
2. Create a new token with appropriate permissions
3. Copy the token for use in the next step

### 2. Configure Environment

Set your Hugging Face token as an environment variable:

```bash
# Replace 'yourToken' with your actual Hugging Face API token
export HF_TOKEN=yourToken
```

**Note**: For production use, consider storing this token in a secure environment configuration file rather than exporting it directly.

## Running an Agent

### Basic Usage

Once your environment is configured, you can run any Tiny Agent using npx:

```bash
# Run the playwright agent example
npx @huggingface/tiny-agents run ./agent-playwright
```

### Command Breakdown

- `npx @huggingface/tiny-agents`: Downloads and executes the Tiny Agents CLI
- `run`: Command to execute an agent
- `./agent-playwright`: Path to the agent configuration directory

## Agent Configuration

Each agent is defined by its configuration directory (e.g., `./agent-playwright`) which typically contains:
- `agent.json`: Agent configuration and settings
- Additional files specific to the agent's functionality

## Next Steps

- Explore the `agent-playwright` directory to understand the agent structure
- Check the official documentation for creating custom agents
- Experiment with different agent configurations and capabilities