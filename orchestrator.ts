import { ExecutiveDirectorAgent } from "./agents/executive-director"
import { ContentManager } from "./agents/content/content-manager"
import { ProjectManager } from "./agents/project-manager"
import type { ContentItem } from "./types/content"

export class AgentOrchestrator {
  private executiveDirector: ExecutiveDirectorAgent
  private contentManager: ContentManager
  private projectManager: ProjectManager

  constructor() {
    this.executiveDirector = new ExecutiveDirectorAgent()
    this.contentManager = new ContentManager()
    this.projectManager = new ProjectManager()

    // Set up agent hierarchy
    this.executiveDirector.addSubagent(this.contentManager)
    this.executiveDirector.addSubagent(this.projectManager)
  }

  async createContent(content: ContentItem): Promise<void> {
    await this.contentManager.createContent(content)
    await this.projectManager.updateContentCalendar(content.platform, {
      content,
      status: "scheduled",
    })
  }
}

