   class Rainbow {
     constructor(s) {
       this.r = s.r
       this.g = s.g
       this.b = s.b
       this.n = s.n
       this.neutro = s.neutro

       this.ini = s.ini
       this.ini3 = (Math.PI * 2 * s.neutro[0]) / 3
       this.T1 = s.ini
       this.T2 = s.ini + this.ini3
       this.T3 = s.ini + this.ini3 * 2
       this.mod = 1 / (s.n * s.frec)
       this.modsin = Math.PI / s.n
       this.modColor = (Math.PI * 2 * s.frec) / s.n


       this.R = 0
       this.G = 0
       this.B = 0
       this.inc = 0
       this.incsin = 0
       this.countsin = 0
       this.count = 0
       this.color = [0, 0, 0]

     }
     updateNeutro() {
       var ntr = lerpe(this.neutro[1], this.neutro[0], this.count)
       this.modColor = ntr
       //console.log(ntr)
       //this.ini3 = (TWO_PI*ntr) / 3
       //this.T1 = this.ini
       //this.T2 = this.ini + this.ini3
       //this.T3 = this.ini + this.ini3 * 2
     }
     RGB() {

       var r = mape(Math.sin(this.T1), -1, 1, this.r[0] * this.r[1], this.r[0] * this.r[2])
       //var r = Math.sin(this.T1)*this.r[0]
       //var dr = (this.r[0] - r) * 1
       this.R =parseInt(r); // - dr
       //this.T1 += TWO_PI / this.mR
       this.T1 += this.modColor

       var g = mape(Math.sin(this.T2), -1, 1, this.g[0] * this.g[1], this.g[0] * this.g[2])
       //var g=Math.sin(this.T2)*this.g[0]
       //var dg = (this.g[0] - g) * 1
       this.G = parseInt(g); //- dg
       //this.T2 += TWO_PI / this.mG
       this.T2 += this.modColor

       var b = mape(Math.sin(this.T3), -1, 1, this.b[0] * this.b[1], this.b[0] * this.b[2])
       //var b =Math.sin(this.T3)*this.b[0]
       //var db = (this.b[0] - b) * 1
       this.B = parseInt(b); //- db
       //this.T3 += TWO_PI / this.mB
       this.T3 += this.modColor

       this.inc += this.mod;
       this.incsin += this.modsin
       this.countsin = mape(Math.sin(this.incsin), -1, 1, 0, 1)
       if (this.inc > 1) {
         this.reset()
       }
       this.count = this.inc
       this.color = [this.R, this.G, this.B]

     }
     reset() {

       if (this.neutro[0] <= 0.9) {
         this.neutro[0] += 0.0006
         this.ini -= 0.01
         this.r[0] += 0.1
         this.g[0] += 0.1
         this.b[0] += 0.1
       }

       this.ini3 = (Math.PI * 2 * this.neutro[0]) / 3
       this.T1 = this.ini
       this.T2 = this.ini + this.ini3
       this.T3 = this.ini + this.ini3 * 2
       this.count = 0
       this.inc = 0;
       this.incsin = 0;

     }

   }

   class RainbowGradient {
     constructor(s) {
       this.r1 = s.r1
       this.g1 = s.g1
       this.b1 = s.b1
       this.r2 = s.r2
       this.g2 = s.g2
       this.b2 = s.b2
       this.r = s.r1
       this.g = s.g1
       this.b = s.b1
       this.n = s.n
       this.neutro = s.neutro
       this.listcolor = []
       this.ini = s.ini
       this.ini3 = (Math.PI * 2 * s.neutro[0]) / 3
       this.T1 = s.ini
       this.T2 = s.ini + this.ini3
       this.T3 = s.ini + this.ini3 * 2
       this.mod = 1 / (s.n * s.frec)
       this.modsin = Math.PI / s.n
       this.modColor = (Math.PI * 2 * s.frec) / s.n


       this.R = 0
       this.G = 0
       this.B = 0
       this.inc = 0
       this.incsin = 0
       this.countsin = 0
       this.count = 0
       this.color = [0, 0, 0]
       //console.log(4)
     }
     updateNeutro() {
       var ntr = lerpe(this.neutro[1], this.neutro[0], this.count)
       this.modColor = ntr
     }
     allColors(n) {
       this.listcolor = []
       var moda = 1 / n
       var mmcont = 0
       for (var a = 0; a < n; a++) {
         this.r[0] = parseInt(lerpe(this.r1[0], this.r2[0], moda * a))
         this.g[0] = parseInt(lerpe(this.g1[0], this.g2[0], moda * a))
         this.b[0] = parseInt(lerpe(this.b1[0], this.b2[0], moda * a))
         this.RGB()
         this.listcolor[a] = this.color
       }
       //console.log(this.listcolor.length)
       return this.listcolor

     }
     RGB() {
       var r = mape(Math.sin(this.T1), -1, 1, this.r[0] * this.r[1], this.r[0] * this.r[2])
       //var r = Math.sin(this.T1)*this.r[0]
       //var dr = (this.r[0] - r) * 1
       this.R = parseInt(r); // - dr
       //this.T1 += TWO_PI / this.mR
       this.T1 += this.modColor

       var g = mape(Math.sin(this.T2), -1, 1, this.g[0] * this.g[1], this.g[0] * this.g[2])
       //var g=Math.sin(this.T2)*this.g[0]
       //var dg = (this.g[0] - g) * 1
       this.G = parseInt(g); //- dg
       //this.T2 += TWO_PI / this.mG
       this.T2 += this.modColor

       var b = mape(Math.sin(this.T3), -1, 1, this.b[0] * this.b[1], this.b[0] * this.b[2])
       //var b =Math.sin(this.T3)*this.b[0]
       //var db = (this.b[0] - b) * 1
       this.B = parseInt(b); //- db
       //this.T3 += TWO_PI / this.mB
       this.T3 += this.modColor

       this.inc += this.mod;
       this.incsin += this.modsin
       this.countsin = mape(Math.sin(this.incsin), -1, 1, 0, 1)
       if (this.inc > 1) {
         this.reset()
       }
       this.count = this.inc
       this.color = [this.R, this.G, this.B]

     }
     reset() {

       if (this.neutro[0] <= 0.9) {
         this.neutro[0] += 0.0006
         this.ini -= 0.01
         this.r[0] += 0.1
         this.g[0] += 0.1
         this.b[0] += 0.1
       }

       this.ini3 = (Math.PI * 2 * this.neutro[0]) / 3
       this.T1 = this.ini
       this.T2 = this.ini + this.ini3
       this.T3 = this.ini + this.ini3 * 2
       this.count = 0
       this.inc = 0;
       this.incsin = 0;

     }

   }
