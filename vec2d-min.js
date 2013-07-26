!function(){function t(t){return 2===t.length?new Array(t[0],t[1]):"[object Array]"===Object.prototype.toString.call(t[0])?t[0]:"object"==typeof t[0]?[t[0].x,t[0].y]:[0,0]}var e=!1,s=Array,n=function(t){this._axes="Float32Array"===s.name?new s([t[0],t[1]]):new s(t[0],t[1])};n.prototype={setAxes:function(t,e){this._axes[0]=t,this._axes[1]=e},getX:function(){return this._axes[0]},setX:function(t){this._axes[0]=t},getY:function(){return this._axes[1]},setY:function(t){this._axes[1]=t},toString:function(t){return t?"("+Math.round(this.getX())+", "+Math.round(this.getY())+")":"("+this.getX()+", "+this.getY()+")"},toArray:function(){return new Array(this.getX(),this.getY())},toObject:function(){return{x:this.getX(),y:this.getY()}},add:function(t){return this._axes[0]+=t._axes[0],this._axes[1]+=t._axes[1],this},subtract:function(t){return this._axes[0]-=t._axes[0],this._axes[1]-=t._axes[1],this},equals:function(t){return t._axes[0]==this._axes[0]&&t._axes[1]==this._axes[1]},multiplyByVector:function(t){return this._axes[0]*=t._axes[0],this._axes[1]*=t._axes[1],this},divideByVector:function(t){return this._axes[0]/=t._axes[0],this._axes[1]/=t._axes[1],this},multiplyByScalar:function(t){return this._axes[0]*=t,this._axes[1]*=t,this},divideByScalar:function(t){return this._axes[0]/=t,this._axes[1]/=t,this},normalise:function(){return this.multiplyByScalar(1/this.magnitude())},normalize:function(){return this.normalise()},unit:function(){return this.normalise()},magnitude:function(){return Math.sqrt(this._axes[0]*this._axes[0]+this._axes[1]*this._axes[1])},length:function(){return this.magnitude()},dot:function(t){return t._axes[0]*this._axes[0]+t._axes[1]*this._axes[1]},cross:function(t){return this._axes[0]*t._axes[1]-this._axes[1]*t._axes[0]},reverse:function(){return this._axes[0]=-this._axes[0],this._axes[1]=-this._axes[1],this},clone:function(){return new n([this._axes[0],this._axes[1]])}};var i=function(t){this._axes={x:t[0],y:t[1]}};i.prototype={setAxes:function(t,e){this._axes.x=t,this._axes.y=e},getX:function(){return this._axes.x},setX:function(t){this._axes.x=t},getY:function(){return this._axes.y},setY:function(t){this._axes.y=t},toString:function(t){return t?"("+Math.round(this.getX())+", "+Math.round(this.getY())+")":"("+this.getX()+", "+this.getY()+")"},toArray:function(){return new Array(this.getX(),this.getY())},toObject:function(){return{x:this.getX(),y:this.getY()}},add:function(t){return this._axes.x+=t._axes.x,this._axes.y+=t._axes.y,this},subtract:function(t){return this._axes.x-=t._axes.x,this._axes.y-=t._axes.y,this},equals:function(t){return t._axes.x==this._axes.x&&t._axes.y==this._axes.y},multiplyByVector:function(t){return this._axes.x*=t._axes.x,this._axes.y*=t._axes.y,this},divideByVector:function(t){return this._axes.x/=t._axes.x,this._axes.y/=t._axes.y,this},multiplyByScalar:function(t){return this._axes.x*=t,this._axes.y*=t,this},divideByScalar:function(t){return this._axes.x/=t,this._axes.y/=t,this},normalise:function(){return this.multiplyByScalar(1/this.magnitude())},normalize:function(){return this.normalise()},unit:function(){return this.normalise()},magnitude:function(){return Math.sqrt(this._axes.x*this._axes.x+this._axes.y*this._axes.y)},length:function(){return this.magnitude()},dot:function(t){return t._axes.x*this._axes.x+t._axes.y*this._axes.y},cross:function(t){return this._axes.x*t._axes.y-this._axes.y*t._axes.x},reverse:function(){return this._axes.x=-this._axes.x,this._axes.y=-this._axes.y,this},clone:function(){return new i([this._axes.x,this._axes.y])}};var r=function(){};r.prototype={Vector:n,ObjectVector:i,create:function(){return e?new this.ObjectVector(t(arguments)):new this.Vector(t(arguments))},useStandardArrays:function(){e=!1,s=Array},useFloat32Arrays:function(){e=!1,s=Float32Array},useObjects:function(){e=!0},add:function(t,e){return this.create(t.getX()+e.getX(),t.getY()+e.getY())},subtract:function(t,e){return this.create(t.getX()-e.getX(),t.getY()-e.getY())},equals:function(t,e){return t.equals(e)},vectorTimesVector:function(t,e){return this.create(t.getX()*e.getX(),t.getY()*e.getY())},vectorTimesScalar:function(t,e){return this.create(t.getX()*e,t.getY()*e)},nomalise:function(t){return this.timesScalar(t,1/t.magnitude())},normalize:function(t){return this.normalise(t)},unit:function(t){return this.normalise(t)},dot:function(t,e){return t.getX()*e.getX()+t.getY()*e.getY()},cross:function(t,e){return t.getX()*e.getY()-t.getY()*e.getX()},magnitude:function(t){return t.magnitude()},length:function(t){return t.magnitude()},distance:function(t,e){return Math.sqrt((t.getX()-e.getX())*(t.getX()-e.getX())+(t.getY()-e.getY())*(t.getY()-e.getY()))},reverse:function(t){return this.create(-t.getX(),-t.getY())}},"undefined"!=typeof window?window.Vec2D=new r:module.exports=new r}();