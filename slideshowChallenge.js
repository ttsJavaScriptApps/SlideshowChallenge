var slideshow = {
  photoList: ["beach","ball", "tree", "train"],
  currentPhotoindex: 0,
  nextPhoto: function() {
    this.currentPhotoindex++;
    if(this.currentPhotoindex < this.photoList.length) {
      console.log(this.photoList[this.currentPhotoindex], this.currentPhotoindex);
    } else {
      console.log("end of slideshow.");
    }
  },
  prevPhoto: function() {
    this.currentPhotoindex--;
    if(this.currentPhotoindex >= 0) {
      console.log(this.photoList[this.currentPhotoindex], this.currentPhotoindex);
    } else {
      console.log("beginning of slideshow.");
    }
  },
  getCurrentPhoto: function() {
    return console.log(this.photoList[this.currentPhotoindex]);
  }
}
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();
slideshow.getCurrentPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();
