import { InfoBlock, ContentRenderer } from "@/shared/content";
import { typeScriptInterfacesSections } from "../data/typeScriptInterfaces.data";
import { PageToc } from "@/shared/ui";

const TypeScriptInterfacesPage = () => {
    return (
        <div>
            <h1>Interfaces</h1>

            <PageToc items={typeScriptInterfacesSections.map(({ id, title }) => ({ id, title }))} />

            {typeScriptInterfacesSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default TypeScriptInterfacesPage;