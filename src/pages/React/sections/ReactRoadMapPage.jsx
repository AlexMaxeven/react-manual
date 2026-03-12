import { InfoBlock, ContentRenderer } from "@/shared/content";
import { reactRoadMapSections } from "../data/reactRoadMap,data,js";
import { PageToc } from "@/shared/ui";

const ReactRoadMapPage = () => {

    return (
        <div>
            <h1>Roadmap</h1>

            <PageToc items={reactRoadMapSections.map(({ id, title }) => ({ id, title }))} />

            {reactRoadMapSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default ReactRoadMapPage