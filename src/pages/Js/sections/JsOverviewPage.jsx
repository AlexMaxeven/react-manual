import { InfoBlock, ContentRenderer } from "@/shared/content";
import  jsOverviewSections  from "@/pages/Js/data/jsOverview.data";
import { PageToc } from "@/shared/ui";

const JsOverviewPage = () => {
    return (
        <div>
            <h1>Overview</h1>

            <PageToc items={jsOverviewSections.map(({ id, title }) => ({ id, title }))} />

            {jsOverviewSections.map((section) => (
                <InfoBlock key={section.id} id={section.id} title={section.title}>
                    <ContentRenderer blocks={section.blocks} />
                </InfoBlock>
            ))}
        </div>
    )
}

export default JsOverviewPage;