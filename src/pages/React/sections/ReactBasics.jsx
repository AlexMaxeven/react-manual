import { InfoBlock, ContentRenderer } from "@/shared/content";
import { reactBasicsSections } from "../data/reactBasics.data";
import { PageToc } from "@/shared/ui";

const ReactBasicsPage = () => {
    return (
        <div>
            <h1>Basics</h1>

            <PageToc items={reactBasicsSections.map(({ id, title }) => ({ id, title }))} />

            {reactBasicsSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default ReactBasicsPage