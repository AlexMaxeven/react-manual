import { InfoBlock, ContentRenderer } from "@/shared/content";
import { typeScriptRoadmapSections } from "../data/typeScriptRoadmap.data";
import { PageToc } from "@/shared/ui";

const TypeScriptRoadmapPage = () => {
    return (
        <div >
          
            <h1>RoadMap</h1>
          
            <PageToc items={typeScriptRoadmapSections.map(({ id, title }) => ({ id, title }))} />

            {typeScriptRoadmapSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default TypeScriptRoadmapPage;