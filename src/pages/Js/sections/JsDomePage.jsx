import { InfoBlock, ContentRenderer } from "@/shared/content";
import { jsDomSections } from "../data/jsDom.data";
import { PageToc } from "@/shared/ui";

const JsDomePage = () => {
    return (
        <div>
            <h1>DOM</h1>
            <PageToc items={jsDomSections.map(({ id, title }) => ({ id, title }))} />

            {jsDomSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default JsDomePage;