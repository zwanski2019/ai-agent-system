from abc import ABC, abstractmethod
from typing import List, Dict, Any
from dataclasses import dataclass

@dataclass
class AgentConfig:
    name: str
    description: str
    api_keys: Dict[str, str]

class BaseAgent(ABC):
    def __init__(self, config: AgentConfig):
        self.config = config
        self.tools: List[BaseTool] = []

    @abstractmethod
    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        pass

    def add_tool(self, tool: 'BaseTool') -> None:
        self.tools.append(tool)
