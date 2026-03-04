interface AU_Color {
    rgb: number[];
    class_name: string;
}
interface TextWithAttr {
    fg: AU_Color;
    bg: AU_Color;
    bold: boolean;
    faint: boolean;
    italic: boolean;
    underline: boolean;
    text: string;
}
type RenderNode = {
    type: 'text';
    text: string;
} | {
    type: 'styled';
    attrs: TextWithAttr;
    children: RenderNode[];
} | {
    type: 'link';
    url: string;
    children: RenderNode[];
};
export declare class AnsiUp {
    VERSION: string;
    private ansi_colors;
    private palette_256;
    private fg;
    private bg;
    private bold;
    private faint;
    private italic;
    private underline;
    private url;
    private _use_classes;
    private _csi_regex;
    private _osc_st;
    private _osc_regex;
    private _url_allowlist;
    private _escape_html;
    private _buffer;
    private _boldStyle;
    private _faintStyle;
    private _italicStyle;
    private _underlineStyle;
    constructor();
    set use_classes(arg: boolean);
    get use_classes(): boolean;
    set url_allowlist(arg: {});
    get url_allowlist(): {};
    set escape_html(arg: boolean);
    get escape_html(): boolean;
    set boldStyle(arg: string);
    get boldStyle(): string;
    set faintStyle(arg: string);
    get faintStyle(): string;
    set italicStyle(arg: string);
    get italicStyle(): string;
    set underlineStyle(arg: string);
    get underlineStyle(): string;
    private setup_palettes;
    private escape_txt_for_html;
    private append_buffer;
    private get_next_packet;
    ansi_to_html(txt: string): string;
    ansi_to_structured(txt: string): RenderNode[];
    private flush_text;
    private update_style_stack;
    private close_url_frame;
    private render_nodes_to_html;
    private render_node_to_html;
    private render_styled_node;
    private process_ansi;
}
export {};
