import { InfoBlock, ContentRenderer } from "@/shared/content";
import { jsFundamentalsSections } from "../data/jsFundamentals.data";
import { PageToc } from "@/shared/ui";

const JsFundamentalsPage = () => {
    return (
        <div>
            <h1>Fundamentals</h1>

            <PageToc items={jsFundamentalsSections.map(({ id, title }) => ({ id, title }))} />

            {jsFundamentalsSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default JsFundamentalsPage;