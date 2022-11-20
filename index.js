function draw() {
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(20, 20, 100, 100);
      ctx.strokeRect(20,20,100,100)
      ctx.clearRect(20, 20, 100, 100);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect(30, 30, 50, 50);
    }
  }