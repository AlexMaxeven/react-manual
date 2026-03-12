import { InfoBlock, ContentRenderer } from "@/shared/content";
import { reactRoutingSections } from "../data/reactRouting.data";
import { PageToc } from "@/shared/ui";

const ReactRoutingPage = () => {
    return (
        <div>
            <h1>Routing</h1>

            <PageToc items={reactRoutingSections.map(({ id, title }) => ({ id, title }))} />

            {reactRoutingSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default ReactRoutingPage