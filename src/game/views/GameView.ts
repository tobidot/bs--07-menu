import { GameModel } from "../models/GameModel";
import { View } from "../../library/abstract/mvc/View";
import { MenuView } from "../../library/abstract/mvc/components/menu/MenuView";
import { ViewSettings } from "./ViewSettings";
import { MenuModel } from "../../library";
import { Rect } from "../../library/math/Rect";

export class GameView implements View {
    public menu: MenuView;
    public settings: ViewSettings = {
        // font settings
        font_size_text: 16,
        font_family: "monospace",
        // color settings
        color_primary: "#2f2",
        color_secondary: "#222",
        color_tertiary: "#c11",
    };

    public constructor(
        public context: CanvasRenderingContext2D,
    ) {
        this.menu = new MenuView(context, this.settings);
    }

    public update(delta_ms: number): void {
        // do nothing
    }

    public render(model: GameModel): void {
        this.resetCanvasState();
        this.menu.render(model.menu);
        if (model.current_selection) {
            this.renderText(
                this.getFullName(model.current_selection) + ' #' + model.current_selection.id,
                new Rect(0, 0, 800, 600),
            );
        }
    }

    /**
     * Get the full name with path of a menu element
     * @param menu 
     * @returns 
     */
    public getFullName(menu: MenuModel): string {
        const parent = menu.parent;
        if (parent) {
            return this.getFullName(parent) + " > " + menu.name;
        }
        return menu.name;
    }


    public renderText(
        text: string,
        rect: Rect,
        font: string = this.settings.font_size_text + "px" + " " + this.settings.font_family,
        color: string = this.settings.color_primary,
        alignment: CanvasTextAlign = "center",
        baseline: CanvasTextBaseline = "middle"
    ): void {
        this.context.fillStyle = color;
        this.context.font = font;
        this.context.textAlign = alignment;
        this.context.textBaseline = baseline;
        this.context.fillText(text, rect.center.x, rect.center.y);
    }

    /**
     * Reset default canvas state and paint the background
     */
    protected resetCanvasState() {
        this.context.fillStyle = "#000";
        this.context.fillRect(0, 0, 800, 600);
        this.context.fillStyle = "#fff";
        this.context.font = "16px monospace";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.imageSmoothingEnabled = false;
    }
}