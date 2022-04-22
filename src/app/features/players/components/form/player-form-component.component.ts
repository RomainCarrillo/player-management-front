import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player/player';
import { PlayerServiceService } from 'src/app/features/players/service/player-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-player-form-component',
  templateUrl: './player-form-component.component.html',
  styleUrls: ['./player-form-component.component.css']
})
export class PlayerFormComponentComponent implements OnInit {

  player: Player;
  uploadedImage: File;
  image: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerServiceService,
  ) {
    this.player = new Player();
  }
  ngOnInit(): void {
  }

  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
    this.player.playerPic = imageFormData;
  }

  onSubmit() {
    this.imageUploadAction();
    this.playerService.addPlayer(this.player).subscribe(result => this.goToPlayersList());
  }

  goToPlayersList() {
    this.router.navigate(['/players']);
  }

}
