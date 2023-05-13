import { Options } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const customRenderConfig: Partial<Options> = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => PARAGRAPH(children(node.content)),
    [BLOCKS.OL_LIST]: (node, children) => OL_LIST(children(node.content)),
    [BLOCKS.LIST_ITEM]: (node, children) => LIST_ITEM(children(node.content)),
  },
};

// ------------------ CUSTOM COMPONENTS FABRIC BELOW  ------------------------

const OL_LIST = (node_children: string): string => {
  return `
    <ol class="list-decimal">
      ${node_children}
    </ol>
  `;
};

const PARAGRAPH = (node_children: string): string => {
  return `
    <p class="text-zinc-800 mb-6">
      ${node_children}
    </p>
  `;
};

const LIST_ITEM = (node_children: string): string => {
  return `
    <li class="mb-6 text-zinc-800">
      ${node_children}
    </li>
  `;
};
