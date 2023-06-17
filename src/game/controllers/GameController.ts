import { KeyDownEvent, KeyName, KeyboardController, MenuModel, MouseController, MouseDownEvent } from "../../library";
import { Controller } from "../../library/abstract/mvc/Controller";
import { ControllerResponse } from "../../library/abstract/mvc/Response";
import { GameModel } from "../models/GameModel";
import { GameView } from "../views/GameView";
import { MenuGroupModel } from "../../library/abstract/mvc/components/menu/MenuGroupModel";
import { Vector2D } from "../../library/math";

export class GameController implements Controller, KeyboardController, MouseController {

    public constructor(
        public model: GameModel,
    ) {
    }

    /**
     * Start a new game
     */
    public newGame(): ControllerResponse {
        return null;
    }

    public isGameOver(): boolean {
        return false;
    }

    public update(delta_seconds: number): ControllerResponse {
        this.model.update(delta_seconds);
        return null;
    }

    public onKeyDown(
        event: KeyDownEvent
    ): void {
        // if (this.model.menu.is_open) {
        //     switch (event.key.name) {
        //         case KeyName.Tab:
        //         case KeyName.ArrowDown:
        //             this.model.menu.next();
        //             break;
        //         case KeyName.ArrowUp:
        //             this.model.menu.previous();
        //             break;
        //         case KeyName.Escape:
        //         case KeyName.ArrowLeft:
        //             this.model.menu.escape();
        //             break;
        //         case KeyName.Enter:
        //             this.model.menu.select();
        //             break;
        //         case KeyName.ArrowRight: {
        //             const focus = this.model.menu.getFocusedMenuItem();
        //             if (focus instanceof MenuGroupModel) {
        //                 focus.open();
        //             }
        //         }
        //     }
        // } else if (event.key.name === KeyName.Escape) {
        //     this.model.menu.focus();
        //     this.model.menu.open();
        // }
    }

    public onMouseUp(event: MouseDownEvent): void {
        // const menu = this.model.menu;
        // const mouse = game.mouse;
        // const mouse_position = mouse.position.cpy();
        // this.checkMouseSelect(menu, mouse_position);
        
    }

    // @todo
    public checkMouseSelect(menu: MenuModel, mouse: Vector2D): void {
        // if (menu.area.contains(mouse)) {
        //     menu.select();
        // }
        // if (menu instanceof MenuGroupModel && menu.is_open) {
        //     mouse.sub({x:menu.child_area.left,y:menu.child_area.top});
        //     menu.children.forEach((child) => {
        //         this.checkMouseSelect(child, mouse);
        //     });
        // }
    }
}