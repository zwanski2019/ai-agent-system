```markdown
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

```mermaid
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
```

## 🚀 Features

### Communication Suite

- ✉️ Email management and automation
- 💬 WhatsApp integration
- 📱 Slack communication
- 🗣️ Voice calls
- 📅 Calendar management

<!-- Rest of your README content -->

```

By adding the closing triple backticks after the Mermaid diagram, we tell the parser that the code block has ended. This should resolve the rendering issue you're encountering.

Give that a try, and your README should display correctly now. Let me know if you run into any other issues!

### Content Management

- 📝 Multi-platform content creation
- 🔄 Social media automation
- 📊 Content calendar management
- 🎯 SEO optimization

### Research Capabilities

- ✈️ Travel planning and booking
- 🔍 Web research and data gathering
- 📊 Data analysis
- 🌐 Market research

### Project Management

- 📋 Task tracking
- 📅 Deadline management
- 📊 Progress monitoring
- 📑 Documentation

### CRM Features

- 👥 Contact management
- 📈 Lead scoring
- 🤝 Relationship tracking
- 📊 Analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5
- **Language**: TypeScript 5.2
- **Database**: PostgreSQL with Prisma
- **AI Integration**: OpenAI, LangChain
- **Testing**: Jest, React Testing Library
- **Monitoring**: Prometheus, Grafana
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/yourusername/ai-agent-system.git
   cd ai-agent-system
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Set up environment variables:

   ```shell
   cp .env.example .env
   ```

4. Initialize the database:

   ```shell
   npm run prisma:generate
   npm run prisma:migrate
   ```

5. Start the development server:

   ```shell
   npm run dev
   ```

## 🔧 Configuration

The system can be configured through environment variables:

```plaintext
DATABASE_URL=postgresql://user:password@localhost:5432/ai_agent_db
OPENAI_API_KEY=your-openai-key
# Additional API keys as needed
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for their AI models
- The open-source community
- All contributors who help improve this project

## 📞 Support

- 📚 [Documentation](docs/README.md)
- 💬 [Discussions](https://github.com/yourusername/ai-agent-system/discussions)
- 🐛 [Issue Tracker](https://github.com/yourusername/ai-agent-system/issues)

## 🗺️ Roadmap

- Additional AI model integrations
- Enhanced voice capabilities
- Mobile application
- Browser extension
- API marketplace

## 🌟 Star History

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=zwanski2019/ai-agent-system&type=Date)](https://star-history.com/#yourusername/ai-agent-system&Date)

<p align="center">Made with ❤️ by the AI Agent System Team</p>
```

Also, including your interactive architecture diagram can enhance your project. Here's the TypeScript code you can include in your project under `docs/diagrams/architecture.tsx`:

```tsx
// file: docs/diagrams/architecture.tsx

'use client'

import { useEffect, useRef } from 'react'

export default function ArchitectureDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 600

    // Drawing functions
    const drawAgent = (x: number, y: number, title: string, color: string) => {
      ctx.beginPath()
      ctx.fillStyle = color
      ctx.arc(x, y, 30, 0, Math.PI * 2)
      ctx.fill()
      
      ctx.fillStyle = 'white'
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(title, x, y + 4)
    }

    const drawConnection = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.beginPath()
      ctx.strokeStyle = '#666'
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    // Draw architecture
    // Executive Director
    drawAgent(400, 50, 'Executive', '#1a73e8')

    // Main Agents
    drawAgent(200, 150, 'Comms', '#ea4335')
    drawAgent(400, 150, 'Project', '#34a853')
    drawAgent(600, 150, 'Research', '#fbbc04')
    drawAgent(300, 150, 'Content', '#ff6f61')

    // Sub Agents
    drawAgent(100, 250, 'Email', '#4285f4')
    drawAgent(200, 250, 'Slack', '#4285f4')
    drawAgent(300, 250, 'WhatsApp', '#4285f4')
    drawAgent(500, 250, 'Travel', '#ea4335')
    drawAgent(600, 250, 'General', '#ea4335')
    drawAgent(700, 250, 'CRM', '#aa46bb')

    // Connections
    drawConnection(400, 80, 200, 120) // Executive to Comms
    drawConnection(400, 80, 400, 120) // Executive to Project
    drawConnection(400, 80, 600, 120) // Executive to Research
    drawConnection(400, 80, 300, 120) // Executive to Content

    // Comms connections
    drawConnection(200, 180, 100, 220)
    drawConnection(200, 180, 200, 220)
    drawConnection(200, 180, 300, 220)

    // Research connections
    drawConnection(600, 180, 500, 220)
    drawConnection(600, 180, 600, 220)

    // Content connections
    drawConnection(300, 180, 700, 220) // Content to CRM
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="w-full max-w-3xl mx-auto border rounded-lg shadow-lg"
    />
  )
}
```


# AI Agents System

A powerful, modular system for orchestrating AI agents and tools for automation of various tasks including social media management, email handling, and more.

[... Rest of our README content ...]
