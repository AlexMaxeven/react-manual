import { InfoBlock, ContentRenderer } from "@/shared/content";
import { jsRoadmapSections } from "../data/jsRoadMap.data";
import { PageToc } from "@/shared/ui";

const JsRoadmapPage = () => {
    return (
        <div>
            <h1>Roadmap</h1>
            <PageToc items={jsRoadmapSections.map(({ id, title }) => ({ id, title }))} />

            {jsRoadmapSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default JsRoadmapPage;