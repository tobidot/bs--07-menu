import { MenuGroupModel } from "../../library/abstract/mvc/components/menu/MenuGroupModel";
import { MenuButtonModel, MenuGenerator, MenuGlobals, MenuModel, assert } from "../../library";
import { Assets } from "../base/Assets";

export class GameModel {
    public menu_globals: MenuGlobals;
    public menu!: MenuGroupModel;
    public current_selection: MenuModel | null = null;


    public constructor(
        public context: CanvasRenderingContext2D
    ) {
        this.menu_globals = {
            next_id: 1,
            // style
            primary_color: "#FF2222",
            background_color: "#22CC22",
            // Visual settings
            asset_manager: game.assets,
            // Audio settings
            audio_player: game.audio,
            select_sound: Assets.sounds.select,
            //
        };
        this.restart();
    }

    public restart() {
        const generator = new MenuGenerator(this.menu_globals);
        const menu = generator
            .set("x", 10)
            .set("y", 10)
            .compile({
                name: "MM",
                width: 50,
                children: [
                    {
                        name: "Menu Colors",
                        width: 200,
                        children: [
                            {
                                name: "Red",
                            },
                            {
                                name: "Green",
                            },
                            {
                                name: "Blue",
                            },
                        ]
                    },
                    {
                        name: "Menu Sounds",
                        children: [
                            {
                                name: "Select",
                            },
                            {
                                name: "Cancel",
                            },
                            {
                                name: "Open",
                            },
                            {
                                name: "Close",
                            },
                        ]
                    },
                    {
                        name: "Menu Images",
                        children: [
                            {
                                name: "Select",
                            },
                            {
                                name: "Cancel",
                            },
                            {
                                name: "Open",
                            },
                            {
                                name: "Close",
                            },
                        ]
                    },
                ],
            });
        assert(menu instanceof MenuGroupModel);
        this.menu = menu;
        this.menu.refresh();
        this.menu.onSelect((item: MenuModel) => {
            this.current_selection = item;
        });
    }

    public update(delta_seconds: number) {
        this.menu.update(delta_seconds, game.mouse);
    }
}