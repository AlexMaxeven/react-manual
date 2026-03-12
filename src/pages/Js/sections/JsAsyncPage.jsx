import { InfoBlock, ContentRenderer } from "@/shared/content";
import { jsAsyncSections } from "../data/jsAsync.data";
import { PageToc } from "@/shared/ui";

const JsAsyncPage = () => {
    return (
        <div>
            <h1>Js Async</h1>
            <PageToc items={jsAsyncSections.map(({ id, title }) => ({ id, title }))} />

            {jsAsyncSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default JsAsyncPage;