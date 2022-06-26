import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { NewGameComponent } from './new-game/new-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PlayComponent,
    }, {
      path: 'new-game',
      component: NewGameComponent,
    }, {
      path: 'join-game',
      component: JoinGameComponent
    }])
  ],
  declarations: [
    PlayComponent,
    NewGameComponent,
    JoinGameComponent
  ],
})
export class PlayModule {}
