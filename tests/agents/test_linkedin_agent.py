import pytest
from ...agents.linkedin_agent import LinkedInAgent
from ...agents.core.base_agent import AgentConfig

@pytest.mark.asyncio
async def test_linkedin_agent():
    config = AgentConfig(
        name="test_linkedin",
        description="Test LinkedIn Agent",
        api_keys={"linkedin_api_key": "test_key"}
    )
    agent = LinkedInAgent(config)
    result = await agent.execute({})
    assert isinstance(result, dict)
