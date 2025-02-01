# 🤖 AI Agent System - Your Personal AI Assistant Team

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-13.5-black)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.4-green)](https://www.prisma.io/)

<p align="center">
  <img src="docs/images/agent-system-architecture.png" alt="AI Agent System Architecture" width="800"/>
</p>

## 🌟 Overview

AI Agent System is an open-source project that creates a team of specialized AI agents working together to handle various tasks automatically. Think of it as your personal AI assistant team, where each agent has specific responsibilities and expertise.

### 🎯 Key Features

- **🎮 Executive Director Agent**: Main orchestrator that delegates tasks and makes high-level decisions
- **📱 Communication Manager**: Handles all communication channels (Email, Slack, WhatsApp, etc.)
- **📊 Project Manager**: Manages tasks, deadlines, and project organization
- **🔍 Research Manager**: Conducts various types of research including travel planning
- **📝 Content Manager**: Creates and manages content across different platforms
- **🤝 CRM Agent**: Manages customer relationships and lead processing

## 🏗️ Architecture

The system is built with a modular, hierarchical structure:

```mermaid title="Agent System Architecture" type="diagram"
graph TD
    A["Executive Director Agent"] --> B["Communication Manager"]
    A --> C["Project Manager"]
    A --> D["Research Manager"]
    A --> E["Content Manager"]
    B --> F["Email Agent"]
    B --> G["Slack Agent"]
    B --> H["WhatsApp Agent"]
    B --> I["Voice Agent"]
    D --> J["Travel Research"]
    D --> K["General Research"]
    E --> L["LinkedIn Agent"]
    E --> M["X Agent"]
    E --> N["Blog Agent"]
