import { InfoBlock, ContentRenderer } from "@/shared/content";
import { reactHooksSections } from "../data/reactHooks.data";
import { PageToc } from "@/shared/ui";

const ReactHooksPage = () => {
    return (
        <div>
            <h1>Hooks </h1>

            <PageToc items={reactHooksSections.map(({ id, title }) => ({ id, title }))} />

            {reactHooksSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default ReactHooksPage