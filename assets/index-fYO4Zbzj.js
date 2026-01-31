(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Vc="182",Xr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vm=0,zu=1,Gm=2,Ta=1,sd=2,ys=3,Bi=0,an=1,Gn=2,pi=0,Yr=1,Hu=2,Vu=3,Gu=4,Wm=5,nr=100,Xm=101,Ym=102,qm=103,jm=104,$m=200,Km=201,Zm=202,Jm=203,wl=204,Cl=205,Qm=206,e_=207,t_=208,n_=209,i_=210,r_=211,s_=212,a_=213,o_=214,Rl=0,Pl=1,Dl=2,Zr=3,Ll=4,Il=5,Fl=6,Nl=7,ad=0,l_=1,c_=2,Kn=0,od=1,ld=2,cd=3,ud=4,hd=5,fd=6,dd=7,pd=300,dr=301,Jr=302,Ul=303,Ol=304,eo=306,kl=1e3,di=1001,Bl=1002,kt=1003,u_=1004,ea=1005,Wt=1006,uo=1007,rr=1008,xn=1009,md=1010,_d=1011,Ps=1012,Gc=1013,ei=1014,Xn=1015,_i=1016,Wc=1017,Xc=1018,Ds=1020,gd=35902,xd=35899,vd=1021,Sd=1022,On=1023,gi=1026,sr=1027,yd=1028,Yc=1029,Qr=1030,qc=1031,jc=1033,Aa=33776,wa=33777,Ca=33778,Ra=33779,zl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,Yl=37496,ql=37488,jl=37489,$l=37490,Kl=37491,Zl=37808,Jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,rc=37815,sc=37816,ac=37817,oc=37818,lc=37819,cc=37820,uc=37821,hc=36492,fc=36494,dc=36495,pc=36283,mc=36284,_c=36285,gc=36286,h_=3200,Md=0,f_=1,Pi="",Cn="srgb",es="srgb-linear",Ua="linear",st="srgb",Sr=7680,Wu=519,d_=512,p_=513,m_=514,$c=515,__=516,g_=517,Kc=518,x_=519,Xu=35044,Yu="300 es",Yn=2e3,Oa=2001;function Ed(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function v_(){const i=Ls("canvas");return i.style.display="block",i}const qu={};function ju(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ne(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ke(...i){const e="THREE."+i.shift();console.error(e,...i)}function Is(...i){const e=i.join(" ");e in qu||(qu[e]=!0,Ne(...i))}function S_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,xc=180/Math.PI;function qs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function y_(i,e){return(i%e+e)%e}function ho(i,e,t){return(1-t)*i+t*e}function ds(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const M_={DEG2RAD:Pa};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],p=s[a+1],x=s[a+2],g=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==x){let _=l*d+c*p+u*x+h*g;_<0&&(d=-d,p=-p,x=-x,g=-g,_=-_);let m=1-o;if(_<.9995){const M=Math.acos(_),T=Math.sin(M);m=Math.sin(m*M)/T,o=Math.sin(o*M)/T,l=l*m+d*o,c=c*m+p*o,u=u*m+x*o,h=h*m+g*o}else{l=l*m+d*o,c=c*m+p*o,u=u*m+x*o,h=h*m+g*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*p-c*d,e[t+1]=l*x+u*d+c*h-o*p,e[t+2]=c*x+u*p+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"YZX":this._x=d*u*h+c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h-d*p*x;break;case"XZY":this._x=d*u*h-c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h+d*p*x;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fo.copy(this).projectOnVector(e),this.sub(fo)}reflect(e){return this.sub(fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new j,$u=new pr;class Be{constructor(e,t,n,r,s,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],x=n[8],g=r[0],_=r[3],m=r[6],M=r[1],T=r[4],b=r[7],E=r[2],C=r[5],R=r[8];return s[0]=a*g+o*M+l*E,s[3]=a*_+o*T+l*C,s[6]=a*m+o*b+l*R,s[1]=c*g+u*M+h*E,s[4]=c*_+u*T+h*C,s[7]=c*m+u*b+h*R,s[2]=d*g+p*M+x*E,s[5]=d*_+p*T+x*C,s[8]=d*m+p*b+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,x=t*h+n*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Be,Ku=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){const i={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?Ua:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[es]:{primaries:e,whitePoint:n,transfer:Ua,toXYZ:Ku,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Ku,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}const Ze=E_();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yr;class b_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yr===void 0&&(yr=Ls("canvas")),yr.width=e.width,yr.height=e.height;const r=yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T_=0;class Zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(mo(r[a].image)):s.push(mo(r[a]))}else s=mo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?b_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let A_=0;const _o=new j;class Xt extends _r{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=di,r=di,s=Wt,a=rr,o=On,l=xn,c=Xt.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=qs(),this.name="",this.source=new Zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=pd;Xt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],x=l[9],g=l[2],_=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(x+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(p+1)/2,E=(m+1)/2,C=(u+d)/4,R=(h+g)/4,F=(x+_)/4;return T>b&&T>E?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=C/n,s=R/n):b>E?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=F/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=R/s,r=F/s),this.set(n,r,s,t),this}let M=Math.sqrt((_-x)*(_-x)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(_-x)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends _r{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Xt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends w_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bd extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C_ extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),na.subVectors(this.max,ps),Mr.subVectors(e.a,ps),Er.subVectors(e.b,ps),br.subVectors(e.c,ps),yi.subVectors(Er,Mr),Mi.subVectors(br,Er),qi.subVectors(Mr,br);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-qi.z,qi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,qi.z,0,-qi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-qi.y,qi.x,0];return!go(t,Mr,Er,br,na)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Mr,Er,br,na))?!1:(ia.crossVectors(yi,Mi),t=[ia.x,ia.y,ia.z],go(t,Mr,Er,br,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new j,new j,new j,new j,new j,new j,new j,new j],In=new j,ta=new js,Mr=new j,Er=new j,br=new j,yi=new j,Mi=new j,qi=new j,ps=new j,na=new j,ia=new j,ji=new j;function go(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ji.fromArray(i,s);const o=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=n.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const R_=new js,ms=new j,xo=new j;class Jc{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):R_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ms,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(xo)),this.expandByPoint(ms.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ai=new j,vo=new j,ra=new j,Ei=new j,So=new j,sa=new j,yo=new j;class Qc{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vo.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(vo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ra),o=Ei.dot(this.direction),l=-Ei.dot(ra),c=Ei.lengthSq(),u=Math.abs(1-a*a);let h,d,p,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vo).addScaledVector(ra,d),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){So.subVectors(t,e),sa.subVectors(n,e),yo.crossVectors(So,sa);let a=this.direction.dot(yo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(sa.crossVectors(Ei,sa));if(l<0)return null;const c=o*this.direction.dot(So.cross(Ei));if(c<0||l+c>a)return null;const u=-o*Ei.dot(yo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,n,r,s,a,o,l,c,u,h,d,p,x,g,_){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,p,x,g,_)}set(e,t,n,r,s,a,o,l,c,u,h,d,p,x,g,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=x,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,x=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,x=c*u,g=c*h;t[0]=d+g*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,x=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,x=o*u,g=o*h;t[0]=l*u,t[4]=x*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+x,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P_,e,D_)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),bi.crossVectors(n,pn),bi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),bi.crossVectors(n,pn)),bi.normalize(),aa.crossVectors(pn,bi),r[0]=bi.x,r[4]=aa.x,r[8]=pn.x,r[1]=bi.y,r[5]=aa.y,r[9]=pn.y,r[2]=bi.z,r[6]=aa.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],x=n[2],g=n[6],_=n[10],m=n[14],M=n[3],T=n[7],b=n[11],E=n[15],C=r[0],R=r[4],F=r[8],v=r[12],A=r[1],U=r[5],V=r[9],z=r[13],Y=r[2],te=r[6],Z=r[10],Q=r[14],q=r[3],pe=r[7],he=r[11],fe=r[15];return s[0]=a*C+o*A+l*Y+c*q,s[4]=a*R+o*U+l*te+c*pe,s[8]=a*F+o*V+l*Z+c*he,s[12]=a*v+o*z+l*Q+c*fe,s[1]=u*C+h*A+d*Y+p*q,s[5]=u*R+h*U+d*te+p*pe,s[9]=u*F+h*V+d*Z+p*he,s[13]=u*v+h*z+d*Q+p*fe,s[2]=x*C+g*A+_*Y+m*q,s[6]=x*R+g*U+_*te+m*pe,s[10]=x*F+g*V+_*Z+m*he,s[14]=x*v+g*z+_*Q+m*fe,s[3]=M*C+T*A+b*Y+E*q,s[7]=M*R+T*U+b*te+E*pe,s[11]=M*F+T*V+b*Z+E*he,s[15]=M*v+T*z+b*Q+E*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],x=e[3],g=e[7],_=e[11],m=e[15],M=l*p-c*d,T=o*p-c*h,b=o*d-l*h,E=a*p-c*u,C=a*d-l*u,R=a*h-o*u;return t*(g*M-_*T+m*b)-n*(x*M-_*E+m*C)+r*(x*T-g*E+m*R)-s*(x*b-g*C+_*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],x=e[12],g=e[13],_=e[14],m=e[15],M=h*_*c-g*d*c+g*l*p-o*_*p-h*l*m+o*d*m,T=x*d*c-u*_*c-x*l*p+a*_*p+u*l*m-a*d*m,b=u*g*c-x*h*c+x*o*p-a*g*p-u*o*m+a*h*m,E=x*h*l-u*g*l-x*o*d+a*g*d+u*o*_-a*h*_,C=t*M+n*T+r*b+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=M*R,e[1]=(g*d*s-h*_*s-g*r*p+n*_*p+h*r*m-n*d*m)*R,e[2]=(o*_*s-g*l*s+g*r*c-n*_*c-o*r*m+n*l*m)*R,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*p-n*l*p)*R,e[4]=T*R,e[5]=(u*_*s-x*d*s+x*r*p-t*_*p-u*r*m+t*d*m)*R,e[6]=(x*l*s-a*_*s-x*r*c+t*_*c+a*r*m-t*l*m)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*R,e[8]=b*R,e[9]=(x*h*s-u*g*s-x*n*p+t*g*p+u*n*m-t*h*m)*R,e[10]=(a*g*s-x*o*s+x*n*c-t*g*c-a*n*m+t*o*m)*R,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*R,e[12]=E*R,e[13]=(u*g*r-x*h*r+x*n*d-t*g*d-u*n*_+t*h*_)*R,e[14]=(x*o*r-a*g*r-x*n*l+t*g*l+a*n*_-t*o*_)*R,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,x=s*h,g=a*u,_=a*h,m=o*h,M=l*c,T=l*u,b=l*h,E=n.x,C=n.y,R=n.z;return r[0]=(1-(g+m))*E,r[1]=(p+b)*E,r[2]=(x-T)*E,r[3]=0,r[4]=(p-b)*C,r[5]=(1-(d+m))*C,r[6]=(_+M)*C,r[7]=0,r[8]=(x+T)*R,r[9]=(_-M)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Tr.set(r[0],r[1],r[2]).length();const a=Tr.set(r[4],r[5],r[6]).length(),o=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Fn.copy(this);const c=1/s,u=1/a,h=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Yn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let x,g;if(l)x=s/(a-s),g=a*s/(a-s);else if(o===Yn)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Oa)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Yn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,g;if(l)x=1/(a-s),g=a/(a-s);else if(o===Yn)x=-2/(a-s),g=-(a+s)/(a-s);else if(o===Oa)x=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Tr=new j,Fn=new Mt,P_=new j(0,0,0),D_=new j(1,1,1),bi=new j,aa=new j,pn=new j,Ju=new Mt,Qu=new pr;class ti{constructor(e=0,t=0,n=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L_=0;const eh=new j,Ar=new pr,oi=new Mt,oa=new j,_s=new j,I_=new j,F_=new pr,th=new j(1,0,0),nh=new j(0,1,0),ih=new j(0,0,1),rh={type:"added"},N_={type:"removed"},wr={type:"childadded",child:null},Mo={type:"childremoved",child:null};class Yt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new j,t=new ti,n=new pr,r=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Be}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(_s,oa,this.up):oi.lookAt(oa,_s,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(oi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),wr.child=e,this.dispatchEvent(wr),wr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N_),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,I_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new j(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new j,li=new j,Eo=new j,ci=new j,Cr=new j,Rr=new j,sh=new j,bo=new j,To=new j,Ao=new j,wo=new Tt,Co=new Tt,Ro=new Tt;class Un{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),li.subVectors(n,t),Eo.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(li),l=Nn.dot(Eo),c=li.dot(li),u=li.dot(Eo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return wo.setScalar(0),Co.setScalar(0),Ro.setScalar(0),wo.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wo,s.x),a.addScaledVector(Co,s.y),a.addScaledVector(Ro,s.z),a}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),li.subVectors(e,t),Nn.cross(li).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Cr.subVectors(r,n),Rr.subVectors(s,n),bo.subVectors(e,n);const l=Cr.dot(bo),c=Rr.dot(bo);if(l<=0&&c<=0)return t.copy(n);To.subVectors(e,r);const u=Cr.dot(To),h=Rr.dot(To);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Cr,a);Ao.subVectors(e,s);const p=Cr.dot(Ao),x=Rr.dot(Ao);if(x>=0&&p<=x)return t.copy(s);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Rr,o);const _=u*x-p*h;if(_<=0&&h-u>=0&&p-x>=0)return sh.subVectors(s,r),o=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(sh,o);const m=1/(_+g+d);return a=g*m,o=d*m,t.copy(n).addScaledVector(Cr,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},la={h:0,s:0,l:0};function Po(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=y_(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Po(a,s,e+1/3),this.g=Po(a,s,e),this.b=Po(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Ze.workingToColorSpace(Vt.copy(this),e),Math.round(We(Vt.r*255,0,255))*65536+Math.round(We(Vt.g*255,0,255))*256+Math.round(We(Vt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Cn){Ze.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(la);const n=ho(Ti.h,la.h,t),r=ho(Ti.s,la.s,t),s=ho(Ti.l,la.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new qe;qe.NAMES=Td;let U_=0;class $s extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Yr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Cl,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ad extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new j,ca=new Ue;let O_=0;class Jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),e}}class wd extends Jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cd extends Jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends Jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let k_=0;const An=new Mt,Do=new Yt,Pr=new j,mn=new js,gs=new js,Nt=new j;class kn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?Cd:wd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(mn.min,gs.min),mn.expandByPoint(Nt),Nt.addVectors(mn.max,gs.max),mn.expandByPoint(Nt)):(mn.expandByPoint(gs.min),mn.expandByPoint(gs.max))}mn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(e,c),Nt.add(Pr)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new j,l[F]=new j;const c=new j,u=new j,h=new j,d=new Ue,p=new Ue,x=new Ue,g=new j,_=new j;function m(F,v,A){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,A),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,v),x.fromBufferAttribute(s,A),u.sub(c),h.sub(c),p.sub(d),x.sub(d);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(U),_.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(U),o[F].add(g),o[v].add(g),o[A].add(g),l[F].add(_),l[v].add(_),l[A].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let F=0,v=M.length;F<v;++F){const A=M[F],U=A.start,V=A.count;for(let z=U,Y=U+V;z<Y;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new j,b=new j,E=new j,C=new j;function R(F){E.fromBufferAttribute(r,F),C.copy(E);const v=o[F];T.copy(v),T.sub(E.multiplyScalar(E.dot(v))).normalize(),b.crossVectors(C,v);const U=b.dot(l[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,U)}for(let F=0,v=M.length;F<v;++F){const A=M[F],U=A.start,V=A.count;for(let z=U,Y=U+V;z<Y;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,h=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),g=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let g=0,_=l.length;g<_;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let m=0;m<u;m++)d[x++]=c[p++]}return new Jn(d,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new Mt,$i=new Qc,ua=new Jc,oh=new j,ha=new j,fa=new j,da=new j,Lo=new j,pa=new j,lh=new j,ma=new j;class _t extends Yt{constructor(e=new kn,t=new Ad){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Lo.fromBufferAttribute(h,e),a?pa.addScaledVector(Lo,u):pa.addScaledVector(Lo.sub(t),u))}t.add(pa)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(ua.containsPoint($i.origin)===!1&&($i.intersectSphere(ua,oh)===null||$i.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(ah.copy(s).invert(),$i.copy(e.ray).applyMatrix4(ah),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const _=d[x],m=a[_.materialIndex],M=Math.max(_.start,p.start),T=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let b=M,E=T;b<E;b+=3){const C=o.getX(b),R=o.getX(b+1),F=o.getX(b+2);r=_a(this,m,e,n,c,u,h,C,R,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let _=x,m=g;_<m;_+=3){const M=o.getX(_),T=o.getX(_+1),b=o.getX(_+2);r=_a(this,a,e,n,c,u,h,M,T,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const _=d[x],m=a[_.materialIndex],M=Math.max(_.start,p.start),T=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let b=M,E=T;b<E;b+=3){const C=b,R=b+1,F=b+2;r=_a(this,m,e,n,c,u,h,C,R,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let _=x,m=g;_<m;_+=3){const M=_,T=_+1,b=_+2;r=_a(this,a,e,n,c,u,h,M,T,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function B_(i,e,t,n,r,s,a,o){let l;if(e.side===an?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Bi,o),l===null)return null;ma.copy(o),ma.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:i}}function _a(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ha),i.getVertexPosition(l,fa),i.getVertexPosition(c,da);const u=B_(i,e,t,n,ha,fa,da,lh);if(u){const h=new j;Un.getBarycoord(lh,ha,fa,da,h),r&&(u.uv=Un.getInterpolatedAttribute(r,o,l,c,h,new Ue)),s&&(u.uv1=Un.getInterpolatedAttribute(s,o,l,c,h,new Ue)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,l,c,h,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new j,materialIndex:0};Un.getNormal(ha,fa,da,d.normal),u.face=d,u.barycoord=h}return u}class Rn extends kn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function x(g,_,m,M,T,b,E,C,R,F,v){const A=b/R,U=E/F,V=b/2,z=E/2,Y=C/2,te=R+1,Z=F+1;let Q=0,q=0;const pe=new j;for(let he=0;he<Z;he++){const fe=he*U-z;for(let Pe=0;Pe<te;Pe++){const we=Pe*A-V;pe[g]=we*M,pe[_]=fe*T,pe[m]=Y,c.push(pe.x,pe.y,pe.z),pe[g]=0,pe[_]=0,pe[m]=C>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Pe/R),h.push(1-he/F),Q+=1}}for(let he=0;he<F;he++)for(let fe=0;fe<R;fe++){const Pe=d+fe+te*he,we=d+fe+te*(he+1),He=d+(fe+1)+te*(he+1),Te=d+(fe+1)+te*he;l.push(Pe,we,Te),l.push(we,He,Te),q+=6}o.addGroup(p,q,v),p+=q,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=ts(i[t]);for(const r in n)e[r]=n[r]}return e}function z_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const H_={clone:ts,merge:Kt};var V_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V_,this.fragmentShader=G_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pd extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new j,ch=new Ue,uh=new Ue;class Pn extends Pd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,ch,uh),t.subVectors(uh,ch)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Lr=1;class W_ extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Dr,Lr,e,t);r.layers=this.layers,this.add(r);const s=new Pn(Dr,Lr,e,t);s.layers=this.layers,this.add(s);const a=new Pn(Dr,Lr,e,t);a.layers=this.layers,this.add(a);const o=new Pn(Dr,Lr,e,t);o.layers=this.layers,this.add(o);const l=new Pn(Dr,Lr,e,t);l.layers=this.layers,this.add(l);const c=new Pn(Dr,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Dd extends Xt{constructor(e=[],t=dr,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ld extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Dd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rn(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:pi});s.uniforms.tEquirect.value=t;const a=new _t(r,s),o=t.minFilter;return t.minFilter===rr&&(t.minFilter=Wt),new W_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class fi extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X_={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),m=this._getHandJoint(c,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Y_ extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class q_ extends Xt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=kt,u=kt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fo=new j,j_=new j,$_=new Be;class Ri{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fo.subVectors(n,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$_.getNormalMatrix(e),r=this.coplanarPoint(Fo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Jc,K_=new Ue(.5,.5),ga=new j;class tu{constructor(e=new Ri,t=new Ri,n=new Ri,r=new Ri,s=new Ri,a=new Ri){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],x=s[8],g=s[9],_=s[10],m=s[11],M=s[12],T=s[13],b=s[14],E=s[15];if(r[0].setComponents(c-a,p-u,m-x,E-M).normalize(),r[1].setComponents(c+a,p+u,m+x,E+M).normalize(),r[2].setComponents(c+o,p+h,m+g,E+T).normalize(),r[3].setComponents(c-o,p-h,m-g,E-T).normalize(),n)r[4].setComponents(l,d,_,b).normalize(),r[5].setComponents(c-l,p-d,m-_,E-b).normalize();else if(r[4].setComponents(c-l,p-d,m-_,E-b).normalize(),t===Yn)r[5].setComponents(c+l,p+d,m+_,E+b).normalize();else if(t===Oa)r[5].setComponents(l,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);const t=K_.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ga.x=r.normal.x>0?e.max.x:e.min.x,ga.y=r.normal.y>0?e.max.y:e.min.y,ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fs extends Xt{constructor(e,t,n=ei,r,s,a,o=kt,l=kt,c,u=gi,h=1){if(u!==gi&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Z_ extends Fs{constructor(e,t=ei,n=dr,r,s,a=kt,o=kt,l,c=gi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Id extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zr extends kn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let x=0;const g=[],_=n/2;let m=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function M(){const b=new j,E=new j;let C=0;const R=(t-e)/n;for(let F=0;F<=s;F++){const v=[],A=F/s,U=A*(t-e)+e;for(let V=0;V<=r;V++){const z=V/r,Y=z*l+o,te=Math.sin(Y),Z=Math.cos(Y);E.x=U*te,E.y=-A*n+_,E.z=U*Z,h.push(E.x,E.y,E.z),b.set(te,R,Z).normalize(),d.push(b.x,b.y,b.z),p.push(z,1-A),v.push(x++)}g.push(v)}for(let F=0;F<r;F++)for(let v=0;v<s;v++){const A=g[v][F],U=g[v+1][F],V=g[v+1][F+1],z=g[v][F+1];(e>0||v!==0)&&(u.push(A,U,z),C+=3),(t>0||v!==s-1)&&(u.push(U,V,z),C+=3)}c.addGroup(m,C,0),m+=C}function T(b){const E=x,C=new Ue,R=new j;let F=0;const v=b===!0?e:t,A=b===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,_*A,0),d.push(0,A,0),p.push(.5,.5),x++;const U=x;for(let V=0;V<=r;V++){const Y=V/r*l+o,te=Math.cos(Y),Z=Math.sin(Y);R.x=v*Z,R.y=_*A,R.z=v*te,h.push(R.x,R.y,R.z),d.push(0,A,0),C.x=te*.5+.5,C.y=Z*.5*A+.5,p.push(C.x,C.y),x++}for(let V=0;V<r;V++){const z=E+V,Y=U+V;b===!0?u.push(Y,Y+1,z):u.push(Y+1,Y,z),F+=3}c.addGroup(m,F,b===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class or extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],x=[],g=[],_=[];for(let m=0;m<u;m++){const M=m*d-a;for(let T=0;T<c;T++){const b=T*h-s;x.push(b,-M,0),g.push(0,0,1),_.push(T/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const T=M+c*m,b=M+c*(m+1),E=M+1+c*(m+1),C=M+1+c*m;p.push(T,b,C),p.push(b,E,C)}this.setIndex(p),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}class nu extends kn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new j,d=new j,p=[],x=[],g=[],_=[];for(let m=0;m<=n;m++){const M=[],T=m/n;let b=0;m===0&&a===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const C=E/t;h.x=-e*Math.cos(r+C*s)*Math.sin(a+T*o),h.y=e*Math.cos(a+T*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+T*o),x.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),_.push(C+b,1-T),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const T=u[m][M+1],b=u[m][M],E=u[m+1][M],C=u[m+1][M+1];(m!==0||a>0)&&p.push(T,b,C),(m!==n-1||l<Math.PI)&&p.push(b,E,C)}this.setIndex(p),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class J_ extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ci extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Q_ extends Ci{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class eg extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const No={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ng{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ig=new ng;class iu{constructor(e){this.manager=e!==void 0?e:ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}iu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ir=new WeakMap;class rg extends iu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=No.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ir.get(a);h===void 0&&(h=[],Ir.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=Ls("img");function l(){u(),t&&t(this);const h=Ir.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Ir.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),No.remove(`image:${e}`);const d=Ir.get(this)||[];for(let p=0;p<d.length;p++){const x=d[p];x.onError&&x.onError(h)}Ir.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),No.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class sg extends iu{constructor(e){super(e)}load(e,t,n,r){const s=new Xt,a=new rg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Fd extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Uo=new Mt,hh=new j,fh=new j;class ag{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tu,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ru extends Pd{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class og extends ag{constructor(){super(new ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends Fd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new og}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cg extends Fd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ug extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dh=new Mt;class hg{constructor(e,t,n=0,r=1/0){this.ray=new Qc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dh),this}intersectObject(e,t=!0,n=[]){return vc(e,this,n,t),n.sort(ph),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)vc(e[r],this,n,t);return n.sort(ph),n}}function ph(i,e){return i.distance-e.distance}function vc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)vc(s[a],e,t,!0)}}class mh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fg extends _r{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _h(i,e,t,n){const r=dg(n);switch(t){case vd:return i*e;case yd:return i*e/r.components*r.byteLength;case Yc:return i*e/r.components*r.byteLength;case Qr:return i*e*2/r.components*r.byteLength;case qc:return i*e*2/r.components*r.byteLength;case Sd:return i*e*3/r.components*r.byteLength;case On:return i*e*4/r.components*r.byteLength;case jc:return i*e*4/r.components*r.byteLength;case Aa:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case zl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case Xl:case ql:case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hc:case fc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _c:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dg(i){switch(i){case xn:case md:return{byteLength:1,components:1};case Ps:case _d:case _i:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case ei:case Gc:case Xn:return{byteLength:4,components:1};case gd:case xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function Nd(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function pg(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],g=h[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const g=h[p];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:mg,alphahash_pars_fragment:_g,alphamap_fragment:gg,alphamap_pars_fragment:xg,alphatest_fragment:vg,alphatest_pars_fragment:Sg,aomap_fragment:yg,aomap_pars_fragment:Mg,batching_pars_vertex:Eg,batching_vertex:bg,begin_vertex:Tg,beginnormal_vertex:Ag,bsdfs:wg,iridescence_fragment:Cg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Ig,color_fragment:Fg,color_pars_fragment:Ng,color_pars_vertex:Ug,color_vertex:Og,common:kg,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:zg,displacementmap_pars_vertex:Hg,displacementmap_vertex:Vg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Wg,colorspace_fragment:Xg,colorspace_pars_fragment:Yg,envmap_fragment:qg,envmap_common_pars_fragment:jg,envmap_pars_fragment:$g,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:o0,envmap_vertex:Zg,fog_vertex:Jg,fog_pars_vertex:Qg,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:s0,lights_pars_begin:a0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:u0,lights_phong_pars_fragment:h0,lights_physical_fragment:f0,lights_physical_pars_fragment:d0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:_0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:S0,map_fragment:y0,map_pars_fragment:M0,map_particle_fragment:E0,map_particle_pars_fragment:b0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:A0,morphinstance_vertex:w0,morphcolor_vertex:C0,morphnormal_vertex:R0,morphtarget_pars_vertex:P0,morphtarget_vertex:D0,normal_fragment_begin:L0,normal_fragment_maps:I0,normal_pars_fragment:F0,normal_pars_vertex:N0,normal_vertex:U0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:H0,opaque_fragment:V0,packing:G0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:Y0,dithering_pars_fragment:q0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:Z0,shadowmap_vertex:J0,shadowmask_pars_fragment:Q0,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:rx,specularmap_pars_fragment:sx,tonemapping_fragment:ax,tonemapping_pars_fragment:ox,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:fx,worldpos_vertex:dx,background_vert:px,background_frag:mx,backgroundCube_vert:_x,backgroundCube_frag:gx,cube_vert:xx,cube_frag:vx,depth_vert:Sx,depth_frag:yx,distance_vert:Mx,distance_frag:Ex,equirect_vert:bx,equirect_frag:Tx,linedashed_vert:Ax,linedashed_frag:wx,meshbasic_vert:Cx,meshbasic_frag:Rx,meshlambert_vert:Px,meshlambert_frag:Dx,meshmatcap_vert:Lx,meshmatcap_frag:Ix,meshnormal_vert:Fx,meshnormal_frag:Nx,meshphong_vert:Ux,meshphong_frag:Ox,meshphysical_vert:kx,meshphysical_frag:Bx,meshtoon_vert:zx,meshtoon_frag:Hx,points_vert:Vx,points_frag:Gx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:Yx,sprite_frag:qx},ge={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Vn={basic:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Kt([ge.points,ge.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Kt([ge.common,ge.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Kt([ge.sprite,ge.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Kt([ge.common,ge.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Kt([ge.lights,ge.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Vn.physical={uniforms:Kt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const xa={r:0,b:0,g:0},Zi=new ti,jx=new Mt;function $x(i,e,t,n,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function x(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function g(T){let b=!1;const E=x(T);E===null?m(o,l):E&&E.isColor&&(m(E,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(T,b){const E=x(b);E&&(E.isCubeTexture||E.mapping===eo)?(u===void 0&&(u=new _t(new Rn(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ts(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zi.copy(b.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Zi)),u.material.toneMapped=Ze.getTransfer(E.colorSpace)!==st,(h!==E||d!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new _t(new or(2,2),new ni({name:"BackgroundMaterial",uniforms:ts(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,b){T.getRGB(xa,Rd(i)),n.buffers.color.setClear(xa.r,xa.g,xa.b,b,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(o,l)},render:g,addToRenderList:_,dispose:M}}function Kx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(A,U,V,z,Y){let te=!1;const Z=h(z,V,U);s!==Z&&(s=Z,c(s.object)),te=p(A,z,V,Y),te&&x(A,z,V,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,b(A,U,V,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function h(A,U,V){const z=V.wireframe===!0;let Y=n[A.id];Y===void 0&&(Y={},n[A.id]=Y);let te=Y[U.id];te===void 0&&(te={},Y[U.id]=te);let Z=te[z];return Z===void 0&&(Z=d(l()),te[z]=Z),Z}function d(A){const U=[],V=[],z=[];for(let Y=0;Y<t;Y++)U[Y]=0,V[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:z,object:A,attributes:{},index:null}}function p(A,U,V,z){const Y=s.attributes,te=U.attributes;let Z=0;const Q=V.getAttributes();for(const q in Q)if(Q[q].location>=0){const he=Y[q];let fe=te[q];if(fe===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),he===void 0||he.attribute!==fe||fe&&he.data!==fe.data)return!0;Z++}return s.attributesNum!==Z||s.index!==z}function x(A,U,V,z){const Y={},te=U.attributes;let Z=0;const Q=V.getAttributes();for(const q in Q)if(Q[q].location>=0){let he=te[q];he===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(he=A.instanceColor));const fe={};fe.attribute=he,he&&he.data&&(fe.data=he.data),Y[q]=fe,Z++}s.attributes=Y,s.attributesNum=Z,s.index=z}function g(){const A=s.newAttributes;for(let U=0,V=A.length;U<V;U++)A[U]=0}function _(A){m(A,0)}function m(A,U){const V=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;V[A]=1,z[A]===0&&(i.enableVertexAttribArray(A),z[A]=1),Y[A]!==U&&(i.vertexAttribDivisor(A,U),Y[A]=U)}function M(){const A=s.newAttributes,U=s.enabledAttributes;for(let V=0,z=U.length;V<z;V++)U[V]!==A[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function T(A,U,V,z,Y,te,Z){Z===!0?i.vertexAttribIPointer(A,U,V,Y,te):i.vertexAttribPointer(A,U,V,z,Y,te)}function b(A,U,V,z){g();const Y=z.attributes,te=V.getAttributes(),Z=U.defaultAttributeValues;for(const Q in te){const q=te[Q];if(q.location>=0){let pe=Y[Q];if(pe===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor)),pe!==void 0){const he=pe.normalized,fe=pe.itemSize,Pe=e.get(pe);if(Pe===void 0)continue;const we=Pe.buffer,He=Pe.type,Te=Pe.bytesPerElement,ae=He===i.INT||He===i.UNSIGNED_INT||pe.gpuType===Gc;if(pe.isInterleavedBufferAttribute){const ce=pe.data,Se=ce.stride,Fe=pe.offset;if(ce.isInstancedInterleavedBuffer){for(let Me=0;Me<q.locationSize;Me++)m(q.location+Me,ce.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Me=0;Me<q.locationSize;Me++)_(q.location+Me);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Me=0;Me<q.locationSize;Me++)T(q.location+Me,fe/q.locationSize,He,he,Se*Te,(Fe+fe/q.locationSize*Me)*Te,ae)}else{if(pe.isInstancedBufferAttribute){for(let ce=0;ce<q.locationSize;ce++)m(q.location+ce,pe.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ce=0;ce<q.locationSize;ce++)_(q.location+ce);i.bindBuffer(i.ARRAY_BUFFER,we);for(let ce=0;ce<q.locationSize;ce++)T(q.location+ce,fe/q.locationSize,He,he,fe*Te,fe/q.locationSize*ce*Te,ae)}}else if(Z!==void 0){const he=Z[Q];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(q.location,he);break;case 3:i.vertexAttrib3fv(q.location,he);break;case 4:i.vertexAttrib4fv(q.location,he);break;default:i.vertexAttrib1fv(q.location,he)}}}}M()}function E(){F();for(const A in n){const U=n[A];for(const V in U){const z=U[V];for(const Y in z)u(z[Y].object),delete z[Y];delete U[V]}delete n[A]}}function C(A){if(n[A.id]===void 0)return;const U=n[A.id];for(const V in U){const z=U[V];for(const Y in z)u(z[Y].object),delete z[Y];delete U[V]}delete n[A.id]}function R(A){for(const U in n){const V=n[U];if(V[A.id]===void 0)continue;const z=V[A.id];for(const Y in z)u(z[Y].object),delete z[Y];delete V[A.id]}}function F(){v(),a=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:_,disableUnusedAttributes:M}}function Zx(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let x=0;for(let g=0;g<h;g++)x+=u[g]*d[g];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==On&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Xn&&!F)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:E,samples:C}}function Qx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ri,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,m=i.get(h);if(!r||x===null||x.length===0||s&&!_)s?u(null):c();else{const M=s?0:n,T=M*4;let b=m.clippingState||null;l.value=b,b=u(x,d,T,p);for(let E=0;E!==T;++E)b[E]=t[E];m.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,x){const g=h!==null?h.length:0;let _=null;if(g!==0){if(_=l.value,x!==!0||_===null){const m=p+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(_===null||_.length<m)&&(_=new Float32Array(m));for(let T=0,b=p;T!==g;++T,b+=4)a.copy(h[T]).applyMatrix4(M,o),a.normal.toArray(_,b),_[b+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function ev(i){let e=new WeakMap;function t(a,o){return o===Ul?a.mapping=dr:o===Ol&&(a.mapping=Jr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ul||o===Ol)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ld(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Li=4,gh=[.125,.215,.35,.446,.526,.582],ir=20,tv=256,xs=new ru,xh=new qe;let Oo=null,ko=0,Bo=0,zo=!1;const nv=new j;class vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=nv}=s;Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,ko,Bo),this._renderer.xr.enabled=zo,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:_i,format:On,colorSpace:es,depthBuffer:!1},r=Sh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iv(s)),this._blurMaterial=sv(s,e,t),this._ggxMaterial=rv(s,e,t)}return r}_compileMaterial(e){const t=new _t(new kn,e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,r,s){const l=new Pn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(xh),h.toneMapping=Kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Rn,new Ad({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let m=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,m=!0):(_.color.copy(xh),m=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const E=this._cubeSize;Fr(r,b*E,T>2?E:0,E,E),h.setRenderTarget(r),m&&h.render(g,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===dr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:x}=this,g=this._sizeLods[n],_=3*g*(n>x-Li?n-x+Li:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Fr(s,_,m,3*g,2*g),r.setRenderTarget(s),r.render(o,xs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Fr(e,_,m,3*g,2*g),r.setRenderTarget(e),r.render(o,xs)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ir-1),g=s/x,_=isFinite(s)?1+Math.floor(u*g):ir;_>ir&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ir}`);const m=[];let M=0;for(let R=0;R<ir;++R){const F=R/g,v=Math.exp(-F*F/2);m.push(v),R===0?M+=v:R<_&&(M+=2*v)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-n;const b=this._sizeLods[r],E=3*b*(r>T-Li?r-T+Li:0),C=4*(this._cubeSize-b);Fr(t,E,C,3*b,2*b),l.setRenderTarget(t),l.render(h,xs)}}function iv(i){const e=[],t=[],n=[];let r=i;const s=i-Li+1+gh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Li?l=gh[a-i+Li-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,g=3,_=2,m=1,M=new Float32Array(g*x*p),T=new Float32Array(_*x*p),b=new Float32Array(m*x*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,F=C>2?0:-1,v=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];M.set(v,g*x*C),T.set(d,_*x*C);const A=[C,C,C,C,C,C];b.set(A,m*x*C)}const E=new kn;E.setAttribute("position",new Jn(M,g)),E.setAttribute("uv",new Jn(T,_)),E.setAttribute("faceIndex",new Jn(b,m)),n.push(new _t(E,null)),r>Li&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Sh(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function rv(i,e,t){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:to(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function sv(i,e,t){const n=new Float32Array(ir),r=new j(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function yh(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Mh(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function to(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function av(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ul||l===Ol,u=l===dr||l===Jr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new vh(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new vh(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ov(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Is("WebGLRenderer: "+n+" extension not supported."),r}}}function lv(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,x=h.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let T=0,b=M.length;T<b;T+=3){const E=M[T+0],C=M[T+1],R=M[T+2];d.push(E,C,C,R,R,E)}}else if(x!==void 0){const M=x.array;g=x.version;for(let T=0,b=M.length/3-1;T<b;T+=3){const E=T+0,C=T+1,R=T+2;d.push(E,C,C,R,R,E)}}else return;const _=new(Ed(d)?Cd:wd)(d,1);_.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,_)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function cv(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function c(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,d*a,x),t.update(p,n,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,x);let _=0;for(let m=0;m<x;m++)_+=p[m];t.update(_,n,1)}function h(d,p,x,g){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],g[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,x);let m=0;for(let M=0;M<x;M++)m+=p[M]*g[M];t.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function uv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hv(i,e,t){const n=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),x===!0&&(T=2),g===!0&&(T=3);let b=o.attributes.position.count*T,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*E*4*h),R=new bd(C,b,E,h);R.type=Xn,R.needsUpdate=!0;const F=T*4;for(let A=0;A<h;A++){const U=_[A],V=m[A],z=M[A],Y=b*E*4*A;for(let te=0;te<U.count;te++){const Z=te*F;p===!0&&(r.fromBufferAttribute(U,te),C[Y+Z+0]=r.x,C[Y+Z+1]=r.y,C[Y+Z+2]=r.z,C[Y+Z+3]=0),x===!0&&(r.fromBufferAttribute(V,te),C[Y+Z+4]=r.x,C[Y+Z+5]=r.y,C[Y+Z+6]=r.z,C[Y+Z+7]=0),g===!0&&(r.fromBufferAttribute(z,te),C[Y+Z+8]=r.x,C[Y+Z+9]=r.y,C[Y+Z+10]=r.z,C[Y+Z+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new Ue(b,E)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function fv(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const dv={[od]:"LINEAR_TONE_MAPPING",[ld]:"REINHARD_TONE_MAPPING",[cd]:"CINEON_TONE_MAPPING",[ud]:"ACES_FILMIC_TONE_MAPPING",[fd]:"AGX_TONE_MAPPING",[dd]:"NEUTRAL_TONE_MAPPING",[hd]:"CUSTOM_TONE_MAPPING"};function pv(i,e,t,n,r){const s=new Zn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new Zn(e,t,{type:_i,depthBuffer:!1,stencilBuffer:!1}),o=new kn;o.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new J_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new _t(o,l),u=new ru(-1,1,1,-1,0,1);let h=null,d=null,p=!1,x,g=null,_=[],m=!1;this.setSize=function(M,T){s.setSize(M,T),a.setSize(M,T);for(let b=0;b<_.length;b++){const E=_[b];E.setSize&&E.setSize(M,T)}},this.setEffects=function(M){_=M,m=_.length>0&&_[0].isRenderPass===!0;const T=s.width,b=s.height;for(let E=0;E<_.length;E++){const C=_[E];C.setSize&&C.setSize(T,b)}},this.begin=function(M,T){if(p||M.toneMapping===Kn&&_.length===0)return!1;if(g=T,T!==null){const b=T.width,E=T.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return m===!1&&M.setRenderTarget(s),x=M.toneMapping,M.toneMapping=Kn,!0},this.hasRenderPass=function(){return m},this.end=function(M,T){M.toneMapping=x,p=!0;let b=s,E=a;for(let C=0;C<_.length;C++){const R=_[C];if(R.enabled!==!1&&(R.render(M,E,b,T),R.needsSwap!==!1)){const F=b;b=E,E=F}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,l.defines={},Ze.getTransfer(h)===st&&(l.defines.SRGB_TRANSFER="");const C=dv[d];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(g),M.render(c,u),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ud=new Xt,Sc=new Fs(1,1),Od=new bd,kd=new C_,Bd=new Dd,Eh=[],bh=[],Th=new Float32Array(16),Ah=new Float32Array(9),wh=new Float32Array(4);function cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Eh[r];if(s===void 0&&(s=new Float32Array(r),Eh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function no(i,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function vv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(It(t,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),Ft(t,n)}}function Sv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(It(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),Ft(t,n)}}function yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(It(t,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),Ft(t,n)}}function Mv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function Av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function Pv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=t.isReversedDepthBuffer()?Kc:$c,s=Sc):s=Ud,t.setTexture2D(e||s,r)}function Dv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kd,r)}function Lv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bd,r)}function Iv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Od,r)}function Fv(i){switch(i){case 5126:return mv;case 35664:return _v;case 35665:return gv;case 35666:return xv;case 35674:return vv;case 35675:return Sv;case 35676:return yv;case 5124:case 35670:return Mv;case 35667:case 35671:return Ev;case 35668:case 35672:return bv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return wv;case 36295:return Cv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Nv(i,e){i.uniform1fv(this.addr,e)}function Uv(i,e){const t=cs(e,this.size,2);i.uniform2fv(this.addr,t)}function Ov(i,e){const t=cs(e,this.size,3);i.uniform3fv(this.addr,t)}function kv(i,e){const t=cs(e,this.size,4);i.uniform4fv(this.addr,t)}function Bv(i,e){const t=cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zv(i,e){const t=cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hv(i,e){const t=cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vv(i,e){i.uniform1iv(this.addr,e)}function Gv(i,e){i.uniform2iv(this.addr,e)}function Wv(i,e){i.uniform3iv(this.addr,e)}function Xv(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function qv(i,e){i.uniform2uiv(this.addr,e)}function jv(i,e){i.uniform3uiv(this.addr,e)}function $v(i,e){i.uniform4uiv(this.addr,e)}function Kv(i,e,t){const n=this.cache,r=e.length,s=no(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sc:a=Ud;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Zv(i,e,t){const n=this.cache,r=e.length,s=no(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||kd,s[a])}function Jv(i,e,t){const n=this.cache,r=e.length,s=no(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bd,s[a])}function Qv(i,e,t){const n=this.cache,r=e.length,s=no(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Od,s[a])}function eS(i){switch(i){case 5126:return Nv;case 35664:return Uv;case 35665:return Ov;case 35666:return kv;case 35674:return Bv;case 35675:return zv;case 35676:return Hv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return Yv;case 36294:return qv;case 36295:return jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fv(t.type)}}class nS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eS(t.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function Ch(i,e){i.seq.push(e),i.map[e.id]=e}function rS(i,e,t){const n=i.name,r=n.length;for(Ho.lastIndex=0;;){const s=Ho.exec(n),a=Ho.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ch(t,c===void 0?new tS(o,i,e):new nS(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new iS(o),Ch(t,h)),t=h}}}class Da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);rS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Rh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sS=37297;let aS=0;function oS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ph=new Be;function lS(i){Ze._getMatrix(Ph,Ze.workingColorSpace,i);const e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Ua:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+oS(i.getShaderSource(e),o)}else return s}function cS(i,e){const t=lS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const uS={[od]:"Linear",[ld]:"Reinhard",[cd]:"Cineon",[ud]:"ACESFilmic",[fd]:"AgX",[dd]:"Neutral",[hd]:"Custom"};function hS(i,e){const t=uS[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new j;function fS(){Ze.getLuminanceCoefficients(va);const i=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function pS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ms(i){return i!==""}function Lh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(_S,xS)}const gS=new Map;function xS(i,e){let t=ze[e];if(t===void 0){const n=gS.get(e);if(n!==void 0)t=ze[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const vS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(i){return i.replace(vS,SS)}function SS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yS={[Ta]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function MS(i){return yS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ES={[dr]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE_UV"};function bS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ES[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const TS={[Jr]:"ENVMAP_MODE_REFRACTION"};function AS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":TS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wS={[ad]:"ENVMAP_BLENDING_MULTIPLY",[l_]:"ENVMAP_BLENDING_MIX",[c_]:"ENVMAP_BLENDING_ADD"};function CS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wS[i.combine]||"ENVMAP_BLENDING_NONE"}function RS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function PS(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=MS(t),c=bS(t),u=AS(t),h=CS(t),d=RS(t),p=dS(t),x=pS(s),g=r.createProgram();let _,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ms).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ms).join(`
`),m.length>0&&(m+=`
`)):(_=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Kn?hS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,cS("linearToOutputTexel",t.outputColorSpace),fS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=yc(a),a=Lh(a,t),a=Ih(a,t),o=yc(o),o=Lh(o,t),o=Ih(o,t),a=Fh(a),o=Fh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=M+_+a,b=M+m+o,E=Rh(r,r.VERTEX_SHADER,T),C=Rh(r,r.FRAGMENT_SHADER,b);r.attachShader(g,E),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(U){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(g)||"",z=r.getShaderInfoLog(E)||"",Y=r.getShaderInfoLog(C)||"",te=V.trim(),Z=z.trim(),Q=Y.trim();let q=!0,pe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,E,C);else{const he=Dh(r,E,"vertex"),fe=Dh(r,C,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+te+`
`+he+`
`+fe)}else te!==""?Ne("WebGLProgram: Program Info Log:",te):(Z===""||Q==="")&&(pe=!1);pe&&(U.diagnostics={runnable:q,programLog:te,vertexShader:{log:Z,prefix:_},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(E),r.deleteShader(C),F=new Da(r,g),v=mS(r,g)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(g,sS)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=C,this}let DS=0;class LS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new IS(e),t.set(e,n)),n}}class IS{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}}function FS(i,e,t,n,r,s,a){const o=new eu,l=new LS,c=new Set,u=[],h=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,A,U,V,z){const Y=V.fog,te=z.geometry,Z=v.isMeshStandardMaterial?V.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),q=Q&&Q.mapping===eo?Q.image.height:null,pe=x[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const he=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,fe=he!==void 0?he.length:0;let Pe=0;te.morphAttributes.position!==void 0&&(Pe=1),te.morphAttributes.normal!==void 0&&(Pe=2),te.morphAttributes.color!==void 0&&(Pe=3);let we,He,Te,ae;if(pe){const it=Vn[pe];we=it.vertexShader,He=it.fragmentShader}else we=v.vertexShader,He=v.fragmentShader,l.update(v),Te=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const ce=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Fe=z.isInstancedMesh===!0,Me=z.isBatchedMesh===!0,Xe=!!v.map,dt=!!v.matcap,Ve=!!Q,$e=!!v.aoMap,Je=!!v.lightMap,Oe=!!v.bumpMap,pt=!!v.normalMap,O=!!v.displacementMap,mt=!!v.emissiveMap,Ye=!!v.metalnessMap,et=!!v.roughnessMap,Ee=v.anisotropy>0,P=v.clearcoat>0,y=v.dispersion>0,f=v.iridescence>0,D=v.sheen>0,N=v.transmission>0,B=Ee&&!!v.anisotropyMap,$=P&&!!v.clearcoatMap,S=P&&!!v.clearcoatNormalMap,I=P&&!!v.clearcoatRoughnessMap,W=f&&!!v.iridescenceMap,k=f&&!!v.iridescenceThicknessMap,H=D&&!!v.sheenColorMap,J=D&&!!v.sheenRoughnessMap,X=!!v.specularMap,ee=!!v.specularColorMap,re=!!v.specularIntensityMap,L=N&&!!v.transmissionMap,le=N&&!!v.thicknessMap,se=!!v.gradientMap,de=!!v.alphaMap,ue=v.alphaTest>0,oe=!!v.alphaHash,me=!!v.extensions;let ke=Kn;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ke=i.toneMapping);const ht={shaderID:pe,shaderType:v.type,shaderName:v.name,vertexShader:we,fragmentShader:He,defines:v.defines,customVertexShaderID:Te,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Me,batchingColor:Me&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:es,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:dt,envMap:Ve,envMapMode:Ve&&Q.mapping,envMapCubeUVHeight:q,aoMap:$e,lightMap:Je,bumpMap:Oe,normalMap:pt,displacementMap:O,emissiveMap:mt,normalMapObjectSpace:pt&&v.normalMapType===f_,normalMapTangentSpace:pt&&v.normalMapType===Md,metalnessMap:Ye,roughnessMap:et,anisotropy:Ee,anisotropyMap:B,clearcoat:P,clearcoatMap:$,clearcoatNormalMap:S,clearcoatRoughnessMap:I,dispersion:y,iridescence:f,iridescenceMap:W,iridescenceThicknessMap:k,sheen:D,sheenColorMap:H,sheenRoughnessMap:J,specularMap:X,specularColorMap:ee,specularIntensityMap:re,transmission:N,transmissionMap:L,thicknessMap:le,gradientMap:se,opaque:v.transparent===!1&&v.blending===Yr&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:ue,alphaHash:oe,combine:v.combine,mapUv:Xe&&g(v.map.channel),aoMapUv:$e&&g(v.aoMap.channel),lightMapUv:Je&&g(v.lightMap.channel),bumpMapUv:Oe&&g(v.bumpMap.channel),normalMapUv:pt&&g(v.normalMap.channel),displacementMapUv:O&&g(v.displacementMap.channel),emissiveMapUv:mt&&g(v.emissiveMap.channel),metalnessMapUv:Ye&&g(v.metalnessMap.channel),roughnessMapUv:et&&g(v.roughnessMap.channel),anisotropyMapUv:B&&g(v.anisotropyMap.channel),clearcoatMapUv:$&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:k&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:H&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:J&&g(v.sheenRoughnessMap.channel),specularMapUv:X&&g(v.specularMap.channel),specularColorMapUv:ee&&g(v.specularColorMap.channel),specularIntensityMapUv:re&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:le&&g(v.thicknessMap.channel),alphaMapUv:de&&g(v.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(pt||Ee),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(Xe||de),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:mt&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gn,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&v.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)A.push(U),A.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(M(A,v),T(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function M(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function T(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),v.push(o.mask)}function b(v){const A=x[v.type];let U;if(A){const V=Vn[A];U=H_.clone(V.uniforms)}else U=v.uniforms;return U}function E(v,A){let U=h.get(A);return U!==void 0?++U.usedTimes:(U=new PS(i,A,v,s),u.push(U),h.set(A,U)),U}function C(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function R(v){l.remove(v)}function F(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:E,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:F}}function NS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function US(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,p,x,g,_){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:g,group:_},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=x,m.renderOrder=h.renderOrder,m.z=g,m.group=_),e++,m}function o(h,d,p,x,g,_){const m=a(h,d,p,x,g,_);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):t.push(m)}function l(h,d,p,x,g,_){const m=a(h,d,p,x,g,_);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||US),n.length>1&&n.sort(d||Uh),r.length>1&&r.sort(d||Uh)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function OS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Oh,i.set(n,[a])):r>=s.length?(a=new Oh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new qe};break;case"SpotLight":t={position:new j,direction:new j,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function BS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zS=0;function HS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function VS(i){const e=new kS,t=BS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const r=new j,s=new Mt,a=new Mt;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,x=0,g=0,_=0,m=0,M=0,T=0,b=0,E=0,C=0,R=0;c.sort(HS);for(let v=0,A=c.length;v<A;v++){const U=c[v],V=U.color,z=U.intensity,Y=U.distance;let te=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Qr?te=U.shadow.map.texture:te=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=V.r*z,h+=V.g*z,d+=V.b*z;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(U.sh.coefficients[Z],z);R++}else if(U.isDirectionalLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,q=t.get(U);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=U.shadow.matrix,M++}n.directional[p]=Z,p++}else if(U.isSpotLight){const Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(V).multiplyScalar(z),Z.distance=Y,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,n.spot[g]=Z;const Q=U.shadow;if(U.map&&(n.spotLightMap[E]=U.map,E++,Q.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[g]=Q.matrix,U.castShadow){const q=t.get(U);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=te,b++}g++}else if(U.isRectAreaLight){const Z=e.get(U);Z.color.copy(V).multiplyScalar(z),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),n.rectArea[_]=Z,_++}else if(U.isPointLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const Q=U.shadow,q=t.get(U);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[x]=q,n.pointShadowMap[x]=te,n.pointShadowMatrix[x]=U.shadow.matrix,T++}n.point[x]=Z,x++}else if(U.isHemisphereLight){const Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(z),Z.groundColor.copy(U.groundColor).multiplyScalar(z),n.hemi[m]=Z,m++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==x||F.spotLength!==g||F.rectAreaLength!==_||F.hemiLength!==m||F.numDirectionalShadows!==M||F.numPointShadows!==T||F.numSpotShadows!==b||F.numSpotMaps!==E||F.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=_,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+E-C,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,F.directionalLength=p,F.pointLength=x,F.spotLength=g,F.rectAreaLength=_,F.hemiLength=m,F.numDirectionalShadows=M,F.numPointShadows=T,F.numSpotShadows=b,F.numSpotMaps=E,F.numLightProbes=R,n.version=zS++)}function l(c,u){let h=0,d=0,p=0,x=0,g=0;const _=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const T=c[m];if(T.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),h++}else if(T.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),p++}else if(T.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),a.identity(),s.copy(T.matrixWorld),s.premultiply(_),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),d++}else if(T.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(_),g++}}}return{setup:o,setupView:l,state:n}}function kh(i){const e=new VS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function GS(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new kh(i),e.set(r,[o])):s>=a.length?(o=new kh(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YS=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],qS=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Bh=new Mt,vs=new j,Vo=new j;function jS(i,e,t){let n=new tu;const r=new Ue,s=new Ue,a=new Tt,o=new eg,l=new tg,c={},u=t.maxTextureSize,h={[Bi]:an,[an]:Bi,[Gn]:Gn},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new kn;x.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _t(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let m=this.type;this.render=function(C,R,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;C.type===sd&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Ta);const v=i.getRenderTarget(),A=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(pi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=m!==this.type;z&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(te=>te.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,te=C.length;Y<te;Y++){const Z=C[Y],Q=Z.shadow;if(Q===void 0){Ne("WebGLShadowMap:",Z,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const q=Q.getFrameExtents();if(r.multiply(q),s.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,Q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,Q.mapSize.y=s.y)),Q.map===null||z===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ys){if(Z.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Zn(r.x,r.y,{format:Qr,type:_i,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),Q.map.texture.name=Z.name+".shadowMap",Q.map.depthTexture=new Fs(r.x,r.y,Xn),Q.map.depthTexture.name=Z.name+".shadowMapDepth",Q.map.depthTexture.format=gi,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=kt,Q.map.depthTexture.magFilter=kt}else{Z.isPointLight?(Q.map=new Ld(r.x),Q.map.depthTexture=new Z_(r.x,ei)):(Q.map=new Zn(r.x,r.y),Q.map.depthTexture=new Fs(r.x,r.y,ei)),Q.map.depthTexture.name=Z.name+".shadowMap",Q.map.depthTexture.format=gi;const he=i.state.buffers.depth.getReversed();this.type===Ta?(Q.map.depthTexture.compareFunction=he?Kc:$c,Q.map.depthTexture.minFilter=Wt,Q.map.depthTexture.magFilter=Wt):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=kt,Q.map.depthTexture.magFilter=kt)}Q.camera.updateProjectionMatrix()}const pe=Q.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<pe;he++){if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,he),i.clear();else{he===0&&(i.setRenderTarget(Q.map),i.clear());const fe=Q.getViewport(he);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),V.viewport(a)}if(Z.isPointLight){const fe=Q.camera,Pe=Q.matrix,we=Z.distance||fe.far;we!==fe.far&&(fe.far=we,fe.updateProjectionMatrix()),vs.setFromMatrixPosition(Z.matrixWorld),fe.position.copy(vs),Vo.copy(fe.position),Vo.add(YS[he]),fe.up.copy(qS[he]),fe.lookAt(Vo),fe.updateMatrixWorld(),Pe.makeTranslation(-vs.x,-vs.y,-vs.z),Bh.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Bh,fe.coordinateSystem,fe.reversedDepth)}else Q.updateMatrices(Z);n=Q.getFrustum(),b(R,F,Q.camera,Z,this.type)}Q.isPointLightShadow!==!0&&this.type===ys&&M(Q,F),Q.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(v,A,U)};function M(C,R){const F=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(r.x,r.y,{format:Qr,type:_i})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,F,d,g,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,F,p,g,null)}function T(C,R,F,v){let A=null;const U=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)A=U;else if(A=F.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=A.uuid,z=R.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let te=Y[z];te===void 0&&(te=A.clone(),Y[z]=te,R.addEventListener("dispose",E)),A=te}if(A.visible=R.visible,A.wireframe=R.wireframe,v===ys?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:h[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const V=i.properties.get(A);V.light=F}return A}function b(C,R,F,v,A){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===ys)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Y=C.material;if(Array.isArray(Y)){const te=z.groups;for(let Z=0,Q=te.length;Z<Q;Z++){const q=te[Z],pe=Y[q.materialIndex];if(pe&&pe.visible){const he=T(C,pe,v,A);C.onBeforeShadow(i,C,R,F,z,he,q),i.renderBufferDirect(F,null,z,he,C,q),C.onAfterShadow(i,C,R,F,z,he,q)}}}else if(Y.visible){const te=T(C,Y,v,A);C.onBeforeShadow(i,C,R,F,z,te,null),i.renderBufferDirect(F,null,z,te,C,null),C.onAfterShadow(i,C,R,F,z,te,null)}}const V=C.children;for(let z=0,Y=V.length;z<Y;z++)b(V[z],R,F,v,A)}function E(C){C.target.removeEventListener("dispose",E);for(const F in c){const v=c[F],A=C.target.uuid;A in v&&(v[A].dispose(),delete v[A])}}}const $S={[Rl]:Pl,[Dl]:Fl,[Ll]:Nl,[Zr]:Il,[Pl]:Rl,[Fl]:Dl,[Nl]:Ll,[Il]:Zr};function KS(i,e){function t(){let L=!1;const le=new Tt;let se=null;const de=new Tt(0,0,0,0);return{setMask:function(ue){se!==ue&&!L&&(i.colorMask(ue,ue,ue,ue),se=ue)},setLocked:function(ue){L=ue},setClear:function(ue,oe,me,ke,ht){ht===!0&&(ue*=ke,oe*=ke,me*=ke),le.set(ue,oe,me,ke),de.equals(le)===!1&&(i.clearColor(ue,oe,me,ke),de.copy(le))},reset:function(){L=!1,se=null,de.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,se=null,de=null,ue=null;return{setReversed:function(oe){if(le!==oe){const me=e.get("EXT_clip_control");oe?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),le=oe;const ke=ue;ue=null,this.setClear(ke)}},getReversed:function(){return le},setTest:function(oe){oe?ce(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(oe){se!==oe&&!L&&(i.depthMask(oe),se=oe)},setFunc:function(oe){if(le&&(oe=$S[oe]),de!==oe){switch(oe){case Rl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Fl:i.depthFunc(i.GREATER);break;case Nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=oe}},setLocked:function(oe){L=oe},setClear:function(oe){ue!==oe&&(le&&(oe=1-oe),i.clearDepth(oe),ue=oe)},reset:function(){L=!1,se=null,de=null,ue=null,le=!1}}}function r(){let L=!1,le=null,se=null,de=null,ue=null,oe=null,me=null,ke=null,ht=null;return{setTest:function(it){L||(it?ce(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(it){le!==it&&!L&&(i.stencilMask(it),le=it)},setFunc:function(it,Bn,ri){(se!==it||de!==Bn||ue!==ri)&&(i.stencilFunc(it,Bn,ri),se=it,de=Bn,ue=ri)},setOp:function(it,Bn,ri){(oe!==it||me!==Bn||ke!==ri)&&(i.stencilOp(it,Bn,ri),oe=it,me=Bn,ke=ri)},setLocked:function(it){L=it},setClear:function(it){ht!==it&&(i.clearStencil(it),ht=it)},reset:function(){L=!1,le=null,se=null,de=null,ue=null,oe=null,me=null,ke=null,ht=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],x=null,g=!1,_=null,m=null,M=null,T=null,b=null,E=null,C=null,R=new qe(0,0,0),F=0,v=!1,A=null,U=null,V=null,z=null,Y=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Q=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=Q>=2);let pe=null,he={};const fe=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),we=new Tt().fromArray(fe),He=new Tt().fromArray(Pe);function Te(L,le,se,de){const ue=new Uint8Array(4),oe=i.createTexture();i.bindTexture(L,oe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<se;me++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(le+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return oe}const ae={};ae[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Zr),Oe(!1),pt(zu),ce(i.CULL_FACE),$e(pi);function ce(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Se(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Fe(L,le){return h[L]!==le?(i.bindFramebuffer(L,le),h[L]=le,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Me(L,le){let se=p,de=!1;if(L){se=d.get(le),se===void 0&&(se=[],d.set(le,se));const ue=L.textures;if(se.length!==ue.length||se[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,me=ue.length;oe<me;oe++)se[oe]=i.COLOR_ATTACHMENT0+oe;se.length=ue.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function Xe(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const dt={[nr]:i.FUNC_ADD,[Xm]:i.FUNC_SUBTRACT,[Ym]:i.FUNC_REVERSE_SUBTRACT};dt[qm]=i.MIN,dt[jm]=i.MAX;const Ve={[$m]:i.ZERO,[Km]:i.ONE,[Zm]:i.SRC_COLOR,[wl]:i.SRC_ALPHA,[i_]:i.SRC_ALPHA_SATURATE,[t_]:i.DST_COLOR,[Qm]:i.DST_ALPHA,[Jm]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[n_]:i.ONE_MINUS_DST_COLOR,[e_]:i.ONE_MINUS_DST_ALPHA,[r_]:i.CONSTANT_COLOR,[s_]:i.ONE_MINUS_CONSTANT_COLOR,[a_]:i.CONSTANT_ALPHA,[o_]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(L,le,se,de,ue,oe,me,ke,ht,it){if(L===pi){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(ce(i.BLEND),g=!0),L!==Wm){if(L!==_||it!==v){if((m!==nr||b!==nr)&&(i.blendEquation(i.FUNC_ADD),m=nr,b=nr),it)switch(L){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hu:i.blendFunc(i.ONE,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",L);break}else switch(L){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vu:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",L);break}M=null,T=null,E=null,C=null,R.set(0,0,0),F=0,_=L,v=it}return}ue=ue||le,oe=oe||se,me=me||de,(le!==m||ue!==b)&&(i.blendEquationSeparate(dt[le],dt[ue]),m=le,b=ue),(se!==M||de!==T||oe!==E||me!==C)&&(i.blendFuncSeparate(Ve[se],Ve[de],Ve[oe],Ve[me]),M=se,T=de,E=oe,C=me),(ke.equals(R)===!1||ht!==F)&&(i.blendColor(ke.r,ke.g,ke.b,ht),R.copy(ke),F=ht),_=L,v=!1}function Je(L,le){L.side===Gn?Se(i.CULL_FACE):ce(i.CULL_FACE);let se=L.side===an;le&&(se=!se),Oe(se),L.blending===Yr&&L.transparent===!1?$e(pi):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){A!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),A=L)}function pt(L){L!==Vm?(ce(i.CULL_FACE),L!==U&&(L===zu?i.cullFace(i.BACK):L===Gm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),U=L}function O(L){L!==V&&(Z&&i.lineWidth(L),V=L)}function mt(L,le,se){L?(ce(i.POLYGON_OFFSET_FILL),(z!==le||Y!==se)&&(i.polygonOffset(le,se),z=le,Y=se)):Se(i.POLYGON_OFFSET_FILL)}function Ye(L){L?ce(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function et(L){L===void 0&&(L=i.TEXTURE0+te-1),pe!==L&&(i.activeTexture(L),pe=L)}function Ee(L,le,se){se===void 0&&(pe===null?se=i.TEXTURE0+te-1:se=pe);let de=he[se];de===void 0&&(de={type:void 0,texture:void 0},he[se]=de),(de.type!==L||de.texture!==le)&&(pe!==se&&(i.activeTexture(se),pe=se),i.bindTexture(L,le||ae[L]),de.type=L,de.texture=le)}function P(){const L=he[pe];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function f(){try{i.compressedTexImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function D(){try{i.texSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function N(){try{i.texSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function S(){try{i.texStorage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function I(){try{i.texStorage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function W(){try{i.texImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function k(){try{i.texImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function H(L){we.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),we.copy(L))}function J(L){He.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function X(L,le){let se=c.get(le);se===void 0&&(se=new WeakMap,c.set(le,se));let de=se.get(L);de===void 0&&(de=i.getUniformBlockIndex(le,L.name),se.set(L,de))}function ee(L,le){const de=c.get(le).get(L);l.get(le)!==de&&(i.uniformBlockBinding(le,de,L.__bindingPointIndex),l.set(le,de))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pe=null,he={},h={},d=new WeakMap,p=[],x=null,g=!1,_=null,m=null,M=null,T=null,b=null,E=null,C=null,R=new qe(0,0,0),F=0,v=!1,A=null,U=null,V=null,z=null,Y=null,we.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:Se,bindFramebuffer:Fe,drawBuffers:Me,useProgram:Xe,setBlending:$e,setMaterial:Je,setFlipSided:Oe,setCullFace:pt,setLineWidth:O,setPolygonOffset:mt,setScissorTest:Ye,activeTexture:et,bindTexture:Ee,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:f,texImage2D:W,texImage3D:k,updateUBOMapping:X,uniformBlockBinding:ee,texStorage2D:S,texStorage3D:I,texSubImage2D:D,texSubImage3D:N,compressedTexSubImage2D:B,compressedTexSubImage3D:$,scissor:H,viewport:J,reset:re}}function ZS(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,y){return p?new OffscreenCanvas(P,y):Ls("canvas")}function g(P,y,f){let D=1;const N=Ee(P);if((N.width>f||N.height>f)&&(D=f/Math.max(N.width,N.height)),D<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const B=Math.floor(D*N.width),$=Math.floor(D*N.height);h===void 0&&(h=x(B,$));const S=y?x(B,$):h;return S.width=B,S.height=$,S.getContext("2d").drawImage(P,0,0,B,$),Ne("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+B+"x"+$+")."),S}else return"data"in P&&Ne("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),P;return P}function _(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,y,f,D,N=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let B=y;if(y===i.RED&&(f===i.FLOAT&&(B=i.R32F),f===i.HALF_FLOAT&&(B=i.R16F),f===i.UNSIGNED_BYTE&&(B=i.R8)),y===i.RED_INTEGER&&(f===i.UNSIGNED_BYTE&&(B=i.R8UI),f===i.UNSIGNED_SHORT&&(B=i.R16UI),f===i.UNSIGNED_INT&&(B=i.R32UI),f===i.BYTE&&(B=i.R8I),f===i.SHORT&&(B=i.R16I),f===i.INT&&(B=i.R32I)),y===i.RG&&(f===i.FLOAT&&(B=i.RG32F),f===i.HALF_FLOAT&&(B=i.RG16F),f===i.UNSIGNED_BYTE&&(B=i.RG8)),y===i.RG_INTEGER&&(f===i.UNSIGNED_BYTE&&(B=i.RG8UI),f===i.UNSIGNED_SHORT&&(B=i.RG16UI),f===i.UNSIGNED_INT&&(B=i.RG32UI),f===i.BYTE&&(B=i.RG8I),f===i.SHORT&&(B=i.RG16I),f===i.INT&&(B=i.RG32I)),y===i.RGB_INTEGER&&(f===i.UNSIGNED_BYTE&&(B=i.RGB8UI),f===i.UNSIGNED_SHORT&&(B=i.RGB16UI),f===i.UNSIGNED_INT&&(B=i.RGB32UI),f===i.BYTE&&(B=i.RGB8I),f===i.SHORT&&(B=i.RGB16I),f===i.INT&&(B=i.RGB32I)),y===i.RGBA_INTEGER&&(f===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),f===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),f===i.UNSIGNED_INT&&(B=i.RGBA32UI),f===i.BYTE&&(B=i.RGBA8I),f===i.SHORT&&(B=i.RGBA16I),f===i.INT&&(B=i.RGBA32I)),y===i.RGB&&(f===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),f===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),y===i.RGBA){const $=N?Ua:Ze.getTransfer(D);f===i.FLOAT&&(B=i.RGBA32F),f===i.HALF_FLOAT&&(B=i.RGBA16F),f===i.UNSIGNED_BYTE&&(B=$===st?i.SRGB8_ALPHA8:i.RGBA8),f===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),f===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function b(P,y){let f;return P?y===null||y===ei||y===Ds?f=i.DEPTH24_STENCIL8:y===Xn?f=i.DEPTH32F_STENCIL8:y===Ps&&(f=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===Ds?f=i.DEPTH_COMPONENT24:y===Xn?f=i.DEPTH_COMPONENT32F:y===Ps&&(f=i.DEPTH_COMPONENT16),f}function E(P,y){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==kt&&P.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function C(P){const y=P.target;y.removeEventListener("dispose",C),F(y),y.isVideoTexture&&u.delete(y)}function R(P){const y=P.target;y.removeEventListener("dispose",R),A(y)}function F(P){const y=n.get(P);if(y.__webglInit===void 0)return;const f=P.source,D=d.get(f);if(D){const N=D[y.__cacheKey];N.usedTimes--,N.usedTimes===0&&v(P),Object.keys(D).length===0&&d.delete(f)}n.remove(P)}function v(P){const y=n.get(P);i.deleteTexture(y.__webglTexture);const f=P.source,D=d.get(f);delete D[y.__cacheKey],a.memory.textures--}function A(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(y.__webglFramebuffer[D]))for(let N=0;N<y.__webglFramebuffer[D].length;N++)i.deleteFramebuffer(y.__webglFramebuffer[D][N]);else i.deleteFramebuffer(y.__webglFramebuffer[D]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[D])}else{if(Array.isArray(y.__webglFramebuffer))for(let D=0;D<y.__webglFramebuffer.length;D++)i.deleteFramebuffer(y.__webglFramebuffer[D]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let D=0;D<y.__webglColorRenderbuffer.length;D++)y.__webglColorRenderbuffer[D]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[D]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const f=P.textures;for(let D=0,N=f.length;D<N;D++){const B=n.get(f[D]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),n.remove(f[D])}n.remove(P)}let U=0;function V(){U=0}function z(){const P=U;return P>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function Y(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function te(P,y){const f=n.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&f.__version!==P.version){const D=P.image;if(D===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(f,P,y);return}}else P.isExternalTexture&&(f.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,f.__webglTexture,i.TEXTURE0+y)}function Z(P,y){const f=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&f.__version!==P.version){ae(f,P,y);return}else P.isExternalTexture&&(f.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,f.__webglTexture,i.TEXTURE0+y)}function Q(P,y){const f=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&f.__version!==P.version){ae(f,P,y);return}t.bindTexture(i.TEXTURE_3D,f.__webglTexture,i.TEXTURE0+y)}function q(P,y){const f=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&f.__version!==P.version){ce(f,P,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,f.__webglTexture,i.TEXTURE0+y)}const pe={[kl]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},he={[kt]:i.NEAREST,[u_]:i.NEAREST_MIPMAP_NEAREST,[ea]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[rr]:i.LINEAR_MIPMAP_LINEAR},fe={[d_]:i.NEVER,[x_]:i.ALWAYS,[p_]:i.LESS,[$c]:i.LEQUAL,[m_]:i.EQUAL,[Kc]:i.GEQUAL,[__]:i.GREATER,[g_]:i.NOTEQUAL};function Pe(P,y){if(y.type===Xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===uo||y.magFilter===ea||y.magFilter===rr||y.minFilter===Wt||y.minFilter===uo||y.minFilter===ea||y.minFilter===rr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,pe[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,pe[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,pe[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,he[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===kt||y.minFilter!==ea&&y.minFilter!==rr||y.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const f=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function we(P,y){let f=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",C));const D=y.source;let N=d.get(D);N===void 0&&(N={},d.set(D,N));const B=Y(y);if(B!==P.__cacheKey){N[B]===void 0&&(N[B]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,f=!0),N[B].usedTimes++;const $=N[P.__cacheKey];$!==void 0&&(N[P.__cacheKey].usedTimes--,$.usedTimes===0&&v(y)),P.__cacheKey=B,P.__webglTexture=N[B].texture}return f}function He(P,y,f){return Math.floor(Math.floor(P/f)/y)}function Te(P,y,f,D){const B=P.updateRanges;if(B.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,f,D,y.data);else{B.sort((k,H)=>k.start-H.start);let $=0;for(let k=1;k<B.length;k++){const H=B[$],J=B[k],X=H.start+H.count,ee=He(J.start,y.width,4),re=He(H.start,y.width,4);J.start<=X+1&&ee===re&&He(J.start+J.count-1,y.width,4)===ee?H.count=Math.max(H.count,J.start+J.count-H.start):(++$,B[$]=J)}B.length=$+1;const S=i.getParameter(i.UNPACK_ROW_LENGTH),I=i.getParameter(i.UNPACK_SKIP_PIXELS),W=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let k=0,H=B.length;k<H;k++){const J=B[k],X=Math.floor(J.start/4),ee=Math.ceil(J.count/4),re=X%y.width,L=Math.floor(X/y.width),le=ee,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,re),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,re,L,le,se,f,D,y.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,S),i.pixelStorei(i.UNPACK_SKIP_PIXELS,I),i.pixelStorei(i.UNPACK_SKIP_ROWS,W)}}function ae(P,y,f){let D=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(D=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(D=i.TEXTURE_3D);const N=we(P,y),B=y.source;t.bindTexture(D,P.__webglTexture,i.TEXTURE0+f);const $=n.get(B);if(B.version!==$.__version||N===!0){t.activeTexture(i.TEXTURE0+f);const S=Ze.getPrimaries(Ze.workingColorSpace),I=y.colorSpace===Pi?null:Ze.getPrimaries(y.colorSpace),W=y.colorSpace===Pi||S===I?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let k=g(y.image,!1,r.maxTextureSize);k=et(y,k);const H=s.convert(y.format,y.colorSpace),J=s.convert(y.type);let X=T(y.internalFormat,H,J,y.colorSpace,y.isVideoTexture);Pe(D,y);let ee;const re=y.mipmaps,L=y.isVideoTexture!==!0,le=$.__version===void 0||N===!0,se=B.dataReady,de=E(y,k);if(y.isDepthTexture)X=b(y.format===sr,y.type),le&&(L?t.texStorage2D(i.TEXTURE_2D,1,X,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,X,k.width,k.height,0,H,J,null));else if(y.isDataTexture)if(re.length>0){L&&le&&t.texStorage2D(i.TEXTURE_2D,de,X,re[0].width,re[0].height);for(let ue=0,oe=re.length;ue<oe;ue++)ee=re[ue],L?se&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ee.width,ee.height,H,J,ee.data):t.texImage2D(i.TEXTURE_2D,ue,X,ee.width,ee.height,0,H,J,ee.data);y.generateMipmaps=!1}else L?(le&&t.texStorage2D(i.TEXTURE_2D,de,X,k.width,k.height),se&&Te(y,k,H,J)):t.texImage2D(i.TEXTURE_2D,0,X,k.width,k.height,0,H,J,k.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,X,re[0].width,re[0].height,k.depth);for(let ue=0,oe=re.length;ue<oe;ue++)if(ee=re[ue],y.format!==On)if(H!==null)if(L){if(se)if(y.layerUpdates.size>0){const me=_h(ee.width,ee.height,y.format,y.type);for(const ke of y.layerUpdates){const ht=ee.data.subarray(ke*me/ee.data.BYTES_PER_ELEMENT,(ke+1)*me/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,ke,ee.width,ee.height,1,H,ht)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ee.width,ee.height,k.depth,H,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,X,ee.width,ee.height,k.depth,0,ee.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ee.width,ee.height,k.depth,H,J,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,X,ee.width,ee.height,k.depth,0,H,J,ee.data)}else{L&&le&&t.texStorage2D(i.TEXTURE_2D,de,X,re[0].width,re[0].height);for(let ue=0,oe=re.length;ue<oe;ue++)ee=re[ue],y.format!==On?H!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ee.width,ee.height,H,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,X,ee.width,ee.height,0,ee.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ee.width,ee.height,H,J,ee.data):t.texImage2D(i.TEXTURE_2D,ue,X,ee.width,ee.height,0,H,J,ee.data)}else if(y.isDataArrayTexture)if(L){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,X,k.width,k.height,k.depth),se)if(y.layerUpdates.size>0){const ue=_h(k.width,k.height,y.format,y.type);for(const oe of y.layerUpdates){const me=k.data.subarray(oe*ue/k.data.BYTES_PER_ELEMENT,(oe+1)*ue/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,k.width,k.height,1,H,J,me)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,H,J,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,X,k.width,k.height,k.depth,0,H,J,k.data);else if(y.isData3DTexture)L?(le&&t.texStorage3D(i.TEXTURE_3D,de,X,k.width,k.height,k.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,H,J,k.data)):t.texImage3D(i.TEXTURE_3D,0,X,k.width,k.height,k.depth,0,H,J,k.data);else if(y.isFramebufferTexture){if(le)if(L)t.texStorage2D(i.TEXTURE_2D,de,X,k.width,k.height);else{let ue=k.width,oe=k.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,X,ue,oe,0,H,J,null),ue>>=1,oe>>=1}}else if(re.length>0){if(L&&le){const ue=Ee(re[0]);t.texStorage2D(i.TEXTURE_2D,de,X,ue.width,ue.height)}for(let ue=0,oe=re.length;ue<oe;ue++)ee=re[ue],L?se&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,H,J,ee):t.texImage2D(i.TEXTURE_2D,ue,X,H,J,ee);y.generateMipmaps=!1}else if(L){if(le){const ue=Ee(k);t.texStorage2D(i.TEXTURE_2D,de,X,ue.width,ue.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,H,J,k)}else t.texImage2D(i.TEXTURE_2D,0,X,H,J,k);_(y)&&m(D),$.__version=B.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ce(P,y,f){if(y.image.length!==6)return;const D=we(P,y),N=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+f);const B=n.get(N);if(N.version!==B.__version||D===!0){t.activeTexture(i.TEXTURE0+f);const $=Ze.getPrimaries(Ze.workingColorSpace),S=y.colorSpace===Pi?null:Ze.getPrimaries(y.colorSpace),I=y.colorSpace===Pi||$===S?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const W=y.isCompressedTexture||y.image[0].isCompressedTexture,k=y.image[0]&&y.image[0].isDataTexture,H=[];for(let oe=0;oe<6;oe++)!W&&!k?H[oe]=g(y.image[oe],!0,r.maxCubemapSize):H[oe]=k?y.image[oe].image:y.image[oe],H[oe]=et(y,H[oe]);const J=H[0],X=s.convert(y.format,y.colorSpace),ee=s.convert(y.type),re=T(y.internalFormat,X,ee,y.colorSpace),L=y.isVideoTexture!==!0,le=B.__version===void 0||D===!0,se=N.dataReady;let de=E(y,J);Pe(i.TEXTURE_CUBE_MAP,y);let ue;if(W){L&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,re,J.width,J.height);for(let oe=0;oe<6;oe++){ue=H[oe].mipmaps;for(let me=0;me<ue.length;me++){const ke=ue[me];y.format!==On?X!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,0,0,ke.width,ke.height,X,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,re,ke.width,ke.height,0,ke.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,0,0,ke.width,ke.height,X,ee,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,re,ke.width,ke.height,0,X,ee,ke.data)}}}else{if(ue=y.mipmaps,L&&le){ue.length>0&&de++;const oe=Ee(H[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,re,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(k){L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,H[oe].width,H[oe].height,X,ee,H[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,re,H[oe].width,H[oe].height,0,X,ee,H[oe].data);for(let me=0;me<ue.length;me++){const ht=ue[me].image[oe].image;L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,0,0,ht.width,ht.height,X,ee,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,re,ht.width,ht.height,0,X,ee,ht.data)}}else{L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,X,ee,H[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,re,X,ee,H[oe]);for(let me=0;me<ue.length;me++){const ke=ue[me];L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,0,0,X,ee,ke.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,re,X,ee,ke.image[oe])}}}_(y)&&m(i.TEXTURE_CUBE_MAP),B.__version=N.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Se(P,y,f,D,N,B){const $=s.convert(f.format,f.colorSpace),S=s.convert(f.type),I=T(f.internalFormat,$,S,f.colorSpace),W=n.get(y),k=n.get(f);if(k.__renderTarget=y,!W.__hasExternalTextures){const H=Math.max(1,y.width>>B),J=Math.max(1,y.height>>B);N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?t.texImage3D(N,B,I,H,J,y.depth,0,$,S,null):t.texImage2D(N,B,I,H,J,0,$,S,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,N,k.__webglTexture,0,O(y)):(N===i.TEXTURE_2D||N>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,D,N,k.__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(P,y,f){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){const D=y.depthTexture,N=D&&D.isDepthTexture?D.type:null,B=b(y.stencilBuffer,N),$=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(y),B,y.width,y.height):f?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(y),B,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,B,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,P)}else{const D=y.textures;for(let N=0;N<D.length;N++){const B=D[N],$=s.convert(B.format,B.colorSpace),S=s.convert(B.type),I=T(B.internalFormat,$,S,B.colorSpace);mt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(y),I,y.width,y.height):f?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(y),I,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,I,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(P,y,f){const D=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=n.get(y.depthTexture);if(N.__renderTarget=y,(!N.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D){if(N.__webglInit===void 0&&(N.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),N.__webglTexture===void 0){N.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,y.depthTexture);const W=s.convert(y.depthTexture.format),k=s.convert(y.depthTexture.type);let H;y.depthTexture.format===gi?H=i.DEPTH_COMPONENT24:y.depthTexture.format===sr&&(H=i.DEPTH24_STENCIL8);for(let J=0;J<6;J++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,H,y.width,y.height,0,W,k,null)}}else te(y.depthTexture,0);const B=N.__webglTexture,$=O(y),S=D?i.TEXTURE_CUBE_MAP_POSITIVE_X+f:i.TEXTURE_2D,I=y.depthTexture.format===sr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===gi)mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,S,B,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,I,S,B,0);else if(y.depthTexture.format===sr)mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,S,B,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,I,S,B,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const y=n.get(P),f=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const D=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),D){const N=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,D.removeEventListener("dispose",N)};D.addEventListener("dispose",N),y.__depthDisposeCallback=N}y.__boundDepthTexture=D}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(f)for(let D=0;D<6;D++)Me(y.__webglFramebuffer[D],P,D);else{const D=P.texture.mipmaps;D&&D.length>0?Me(y.__webglFramebuffer[0],P,0):Me(y.__webglFramebuffer,P,0)}else if(f){y.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[D]),y.__webglDepthbuffer[D]===void 0)y.__webglDepthbuffer[D]=i.createRenderbuffer(),Fe(y.__webglDepthbuffer[D],P,!1);else{const N=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=y.__webglDepthbuffer[D];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,B)}}else{const D=P.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Fe(y.__webglDepthbuffer,P,!1);else{const N=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,B)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(P,y,f){const D=n.get(P);y!==void 0&&Se(D.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),f!==void 0&&Xe(P)}function Ve(P){const y=P.texture,f=n.get(P),D=n.get(y);P.addEventListener("dispose",R);const N=P.textures,B=P.isWebGLCubeRenderTarget===!0,$=N.length>1;if($||(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=y.version,a.memory.textures++),B){f.__webglFramebuffer=[];for(let S=0;S<6;S++)if(y.mipmaps&&y.mipmaps.length>0){f.__webglFramebuffer[S]=[];for(let I=0;I<y.mipmaps.length;I++)f.__webglFramebuffer[S][I]=i.createFramebuffer()}else f.__webglFramebuffer[S]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){f.__webglFramebuffer=[];for(let S=0;S<y.mipmaps.length;S++)f.__webglFramebuffer[S]=i.createFramebuffer()}else f.__webglFramebuffer=i.createFramebuffer();if($)for(let S=0,I=N.length;S<I;S++){const W=n.get(N[S]);W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&mt(P)===!1){f.__webglMultisampledFramebuffer=i.createFramebuffer(),f.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let S=0;S<N.length;S++){const I=N[S];f.__webglColorRenderbuffer[S]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,f.__webglColorRenderbuffer[S]);const W=s.convert(I.format,I.colorSpace),k=s.convert(I.type),H=T(I.internalFormat,W,k,I.colorSpace,P.isXRRenderTarget===!0),J=O(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,H,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+S,i.RENDERBUFFER,f.__webglColorRenderbuffer[S])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(f.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(f.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,y);for(let S=0;S<6;S++)if(y.mipmaps&&y.mipmaps.length>0)for(let I=0;I<y.mipmaps.length;I++)Se(f.__webglFramebuffer[S][I],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+S,I);else Se(f.__webglFramebuffer[S],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+S,0);_(y)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let S=0,I=N.length;S<I;S++){const W=N[S],k=n.get(W);let H=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(H=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(H,k.__webglTexture),Pe(H,W),Se(f.__webglFramebuffer,P,W,i.COLOR_ATTACHMENT0+S,H,0),_(W)&&m(H)}t.unbindTexture()}else{let S=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(S=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(S,D.__webglTexture),Pe(S,y),y.mipmaps&&y.mipmaps.length>0)for(let I=0;I<y.mipmaps.length;I++)Se(f.__webglFramebuffer[I],P,y,i.COLOR_ATTACHMENT0,S,I);else Se(f.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,S,0);_(y)&&m(S),t.unbindTexture()}P.depthBuffer&&Xe(P)}function $e(P){const y=P.textures;for(let f=0,D=y.length;f<D;f++){const N=y[f];if(_(N)){const B=M(P),$=n.get(N).__webglTexture;t.bindTexture(B,$),m(B),t.unbindTexture()}}}const Je=[],Oe=[];function pt(P){if(P.samples>0){if(mt(P)===!1){const y=P.textures,f=P.width,D=P.height;let N=i.COLOR_BUFFER_BIT;const B=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(P),S=y.length>1;if(S)for(let W=0;W<y.length;W++)t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);const I=P.texture.mipmaps;I&&I.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let W=0;W<y.length;W++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(N|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(N|=i.STENCIL_BUFFER_BIT)),S){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[W]);const k=n.get(y[W]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,f,D,0,0,f,D,N,i.NEAREST),l===!0&&(Je.length=0,Oe.length=0,Je.push(i.COLOR_ATTACHMENT0+W),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(B),Oe.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),S)for(let W=0;W<y.length;W++){t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,$.__webglColorRenderbuffer[W]);const k=n.get(y[W]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function O(P){return Math.min(r.maxSamples,P.samples)}function mt(P){const y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ye(P){const y=a.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function et(P,y){const f=P.colorSpace,D=P.format,N=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||f!==es&&f!==Pi&&(Ze.getTransfer(f)===st?(D!==On||N!==xn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",f)),y}function Ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=te,this.setTexture2DArray=Z,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=dt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JS(i,e){function t(n,r=Pi){let s;const a=Ze.getTransfer(r);if(n===xn)return i.UNSIGNED_BYTE;if(n===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===md)return i.BYTE;if(n===_d)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Gc)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===_i)return i.HALF_FLOAT;if(n===vd)return i.ALPHA;if(n===Sd)return i.RGB;if(n===On)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===yd)return i.RED;if(n===Yc)return i.RED_INTEGER;if(n===Qr)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===Aa||n===wa||n===Ca||n===Ra)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Hl||n===Vl||n===Gl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===Yl||n===ql||n===jl||n===$l||n===Kl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wl||n===Xl)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ql)return s.COMPRESSED_R11_EAC;if(n===jl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$l)return s.COMPRESSED_RG11_EAC;if(n===Kl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===uc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===fc||n===dc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===hc)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===_c||n===gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ty{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Id(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:QS,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ny extends _r{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,x=null;const g=typeof XRWebGLBinding<"u",_=new ty,m={},M=t.getContextAttributes();let T=null,b=null;const E=[],C=[],R=new Ue;let F=null;const v=new Pn;v.viewport=new Tt;const A=new Pn;A.viewport=new Tt;const U=[v,A],V=new ug;let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ce=E[ae];return ce===void 0&&(ce=new Io,E[ae]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ae){let ce=E[ae];return ce===void 0&&(ce=new Io,E[ae]=ce),ce.getGripSpace()},this.getHand=function(ae){let ce=E[ae];return ce===void 0&&(ce=new Io,E[ae]=ce),ce.getHandSpace()};function te(ae){const ce=C.indexOf(ae.inputSource);if(ce===-1)return;const Se=E[ce];Se!==void 0&&(Se.update(ae.inputSource,ae.frame,c||a),Se.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",Q);for(let ae=0;ae<E.length;ae++){const ce=C[ae];ce!==null&&(C[ae]=null,E[ae].disconnect(ce))}z=null,Y=null,_.reset();for(const ae in m)delete m[ae];e.setRenderTarget(T),p=null,d=null,h=null,r=null,b=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?sr:gi,Fe=M.stencil?Ds:ei);const Xe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Xe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Zn(d.textureWidth,d.textureHeight,{format:On,type:xn,depthTexture:new Fs(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Zn(p.framebufferWidth,p.framebufferHeight,{format:On,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(ae){for(let ce=0;ce<ae.removed.length;ce++){const Se=ae.removed[ce],Fe=C.indexOf(Se);Fe>=0&&(C[Fe]=null,E[Fe].disconnect(Se))}for(let ce=0;ce<ae.added.length;ce++){const Se=ae.added[ce];let Fe=C.indexOf(Se);if(Fe===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=C.length){C.push(Se),Fe=Xe;break}else if(C[Xe]===null){C[Xe]=Se,Fe=Xe;break}if(Fe===-1)break}const Me=E[Fe];Me&&Me.connect(Se)}}const q=new j,pe=new j;function he(ae,ce,Se){q.setFromMatrixPosition(ce.matrixWorld),pe.setFromMatrixPosition(Se.matrixWorld);const Fe=q.distanceTo(pe),Me=ce.projectionMatrix.elements,Xe=Se.projectionMatrix.elements,dt=Me[14]/(Me[10]-1),Ve=Me[14]/(Me[10]+1),$e=(Me[9]+1)/Me[5],Je=(Me[9]-1)/Me[5],Oe=(Me[8]-1)/Me[0],pt=(Xe[8]+1)/Xe[0],O=dt*Oe,mt=dt*pt,Ye=Fe/(-Oe+pt),et=Ye*-Oe;if(ce.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(et),ae.translateZ(Ye),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Me[10]===-1)ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ee=dt+Ye,P=Ve+Ye,y=O-et,f=mt+(Fe-et),D=$e*Ve/P*Ee,N=Je*Ve/P*Ee;ae.projectionMatrix.makePerspective(y,f,D,N,Ee,P),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function fe(ae,ce){ce===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ce.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let ce=ae.near,Se=ae.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),V.near=A.near=v.near=ce,V.far=A.far=v.far=Se,(z!==V.near||Y!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,Y=V.far),V.layers.mask=ae.layers.mask|6,v.layers.mask=V.layers.mask&3,A.layers.mask=V.layers.mask&5;const Fe=ae.parent,Me=V.cameras;fe(V,Fe);for(let Xe=0;Xe<Me.length;Xe++)fe(Me[Xe],Fe);Me.length===2?he(V,v,A):V.projectionMatrix.copy(v.projectionMatrix),Pe(ae,V,Fe)};function Pe(ae,ce,Se){Se===null?ae.matrix.copy(ce.matrixWorld):(ae.matrix.copy(Se.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ce.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=xc*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ae){l=ae,d!==null&&(d.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(ae){return m[ae]};let we=null;function He(ae,ce){if(u=ce.getViewerPose(c||a),x=ce,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Fe=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,Fe=!0);for(let Ve=0;Ve<Se.length;Ve++){const $e=Se[Ve];let Je=null;if(p!==null)Je=p.getViewport($e);else{const pt=h.getViewSubImage(d,$e);Je=pt.viewport,Ve===0&&(e.setRenderTargetTextures(b,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(b))}let Oe=U[Ve];Oe===void 0&&(Oe=new Pn,Oe.layers.enable(Ve),Oe.viewport=new Tt,U[Ve]=Oe),Oe.matrix.fromArray($e.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray($e.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Je.x,Je.y,Je.width,Je.height),Ve===0&&(V.matrix.copy(Oe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Fe===!0&&V.cameras.push(Oe)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const Ve=h.getDepthInformation(Se[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(Ve,r.renderState)}if(Me&&Me.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<Se.length;Ve++){const $e=Se[Ve].camera;if($e){let Je=m[$e];Je||(Je=new Id,m[$e]=Je);const Oe=h.getCameraImage($e);Je.sourceTexture=Oe}}}}for(let Se=0;Se<E.length;Se++){const Fe=C[Se],Me=E[Se];Fe!==null&&Me!==void 0&&Me.update(Fe,ce,c||a)}we&&we(ae,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),x=null}const Te=new Nd;Te.setAnimationLoop(He),this.setAnimationLoop=function(ae){we=ae},this.dispose=function(){}}}const Ji=new ti,iy=new Mt;function ry(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Rd(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,M,T,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),h(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m)):m.isMeshStandardMaterial?(s(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,b)):m.isMeshMatcapMaterial?(s(_,m),x(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),g(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?l(_,m,M,T):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===an&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===an&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const M=e.get(m),T=M.envMap,b=M.envMapRotation;T&&(_.envMap.value=T,Ji.copy(b),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),_.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Ji)),_.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,M,T){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*M,_.scale.value=T*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function h(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,M){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){const M=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sy(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const b=T.program;n.uniformBlockBinding(M,b)}function c(M,T){let b=r[M.id];b===void 0&&(x(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",_));const E=T.program;n.updateUBOMapping(M,E);const C=e.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function u(M){const T=h();M.__bindingPointIndex=T;const b=i.createBuffer(),E=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const T=r[M.id],b=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,R=b.length;C<R;C++){const F=Array.isArray(b[C])?b[C]:[b[C]];for(let v=0,A=F.length;v<A;v++){const U=F[v];if(p(U,C,v,E)===!0){const V=U.__offset,z=Array.isArray(U.value)?U.value:[U.value];let Y=0;for(let te=0;te<z.length;te++){const Z=z[te],Q=g(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,V+Y,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,T,b,E){const C=M.value,R=T+"_"+b;if(E[R]===void 0)return typeof C=="number"||typeof C=="boolean"?E[R]=C:E[R]=C.clone(),!0;{const F=E[R];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return E[R]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function x(M){const T=M.uniforms;let b=0;const E=16;for(let R=0,F=T.length;R<F;R++){const v=Array.isArray(T[R])?T[R]:[T[R]];for(let A=0,U=v.length;A<U;A++){const V=v[A],z=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,te=z.length;Y<te;Y++){const Z=z[Y],Q=g(Z),q=b%E,pe=q%Q.boundary,he=q+pe;b+=pe,he!==0&&E-he<Q.storage&&(b+=E-he),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=Q.storage}}}const C=b%E;return C>0&&(b+=E-C),M.__size=b,M.__cache={},this}function g(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",M),T}function _(M){const T=M.target;T.removeEventListener("dispose",_);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const ay=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function oy(){return zn===null&&(zn=new q_(ay,16,16,Qr,_i),zn.name="DFG_LUT",zn.minFilter=Wt,zn.magFilter=Wt,zn.wrapS=di,zn.wrapT=di,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class ly{constructor(e={}){const{canvas:t=v_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=xn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const g=p,_=new Set([jc,qc,Yc]),m=new Set([xn,ei,Ps,Ds,Wc,Xc]),M=new Uint32Array(4),T=new Int32Array(4);let b=null,E=null;const C=[],R=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Cn;let U=0,V=0,z=null,Y=-1,te=null;const Z=new Tt,Q=new Tt;let q=null;const pe=new qe(0);let he=0,fe=t.width,Pe=t.height,we=1,He=null,Te=null;const ae=new Tt(0,0,fe,Pe),ce=new Tt(0,0,fe,Pe);let Se=!1;const Fe=new tu;let Me=!1,Xe=!1;const dt=new Mt,Ve=new j,$e=new Tt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function pt(){return z===null?we:1}let O=n;function mt(w,G){return t.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",it,!1),O===null){const G="webgl2";if(O=mt(G,w),O===null)throw mt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ke("WebGLRenderer: "+w.message),w}let Ye,et,Ee,P,y,f,D,N,B,$,S,I,W,k,H,J,X,ee,re,L,le,se,de,ue;function oe(){Ye=new ov(O),Ye.init(),se=new JS(O,Ye),et=new Jx(O,Ye,e,se),Ee=new KS(O,Ye),et.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),P=new uv(O),y=new NS,f=new ZS(O,Ye,Ee,y,et,se,P),D=new ev(v),N=new av(v),B=new pg(O),de=new Kx(O,B),$=new lv(O,B,P,de),S=new fv(O,$,B,P),re=new hv(O,et,f),J=new Qx(y),I=new FS(v,D,N,Ye,et,de,J),W=new ry(v,y),k=new OS,H=new GS(Ye),ee=new $x(v,D,N,Ee,S,x,l),X=new jS(v,S,et),ue=new sy(O,P,et,Ee),L=new Zx(O,Ye,P),le=new cv(O,Ye,P),P.programs=I.programs,v.capabilities=et,v.extensions=Ye,v.properties=y,v.renderLists=k,v.shadowMap=X,v.state=Ee,v.info=P}oe(),g!==xn&&(F=new pv(g,t.width,t.height,r,s));const me=new ny(v,O);this.xr=me,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(w){w!==void 0&&(we=w,this.setSize(fe,Pe,!1))},this.getSize=function(w){return w.set(fe,Pe)},this.setSize=function(w,G,ie=!0){if(me.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=w,Pe=G,t.width=Math.floor(w*we),t.height=Math.floor(G*we),ie===!0&&(t.style.width=w+"px",t.style.height=G+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(fe*we,Pe*we).floor()},this.setDrawingBufferSize=function(w,G,ie){fe=w,Pe=G,we=ie,t.width=Math.floor(w*ie),t.height=Math.floor(G*ie),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(g===xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,G,ie,ne){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,G,ie,ne),Ee.viewport(Z.copy(ae).multiplyScalar(we).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,G,ie,ne){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,G,ie,ne),Ee.scissor(Q.copy(ce).multiplyScalar(we).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){Ee.setScissorTest(Se=w)},this.setOpaqueSort=function(w){He=w},this.setTransparentSort=function(w){Te=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,ie=!0){let ne=0;if(w){let K=!1;if(z!==null){const _e=z.texture.format;K=_.has(_e)}if(K){const _e=z.texture.type,ye=m.has(_e),xe=ee.getClearColor(),be=ee.getClearAlpha(),Ae=xe.r,Ie=xe.g,De=xe.b;ye?(M[0]=Ae,M[1]=Ie,M[2]=De,M[3]=be,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=Ae,T[1]=Ie,T[2]=De,T[3]=be,O.clearBufferiv(O.COLOR,0,T))}else ne|=O.COLOR_BUFFER_BIT}G&&(ne|=O.DEPTH_BUFFER_BIT),ie&&(ne|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",it,!1),ee.dispose(),k.dispose(),H.dispose(),y.dispose(),D.dispose(),N.dispose(),S.dispose(),de.dispose(),ue.dispose(),I.dispose(),me.dispose(),me.removeEventListener("sessionstart",Iu),me.removeEventListener("sessionend",Fu),Xi.stop()};function ke(w){w.preventDefault(),ju("WebGLRenderer: Context Lost."),A=!0}function ht(){ju("WebGLRenderer: Context Restored."),A=!1;const w=P.autoReset,G=X.enabled,ie=X.autoUpdate,ne=X.needsUpdate,K=X.type;oe(),P.autoReset=w,X.enabled=G,X.autoUpdate=ie,X.needsUpdate=ne,X.type=K}function it(w){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Bn(w){const G=w.target;G.removeEventListener("dispose",Bn),ri(G)}function ri(w){Fm(w),y.remove(w)}function Fm(w){const G=y.get(w).programs;G!==void 0&&(G.forEach(function(ie){I.releaseProgram(ie)}),w.isShaderMaterial&&I.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,ie,ne,K,_e){G===null&&(G=Je);const ye=K.isMesh&&K.matrixWorld.determinant()<0,xe=Um(w,G,ie,ne,K);Ee.setMaterial(ne,ye);let be=ie.index,Ae=1;if(ne.wireframe===!0){if(be=$.getWireframeAttribute(ie),be===void 0)return;Ae=2}const Ie=ie.drawRange,De=ie.attributes.position;let Ge=Ie.start*Ae,at=(Ie.start+Ie.count)*Ae;_e!==null&&(Ge=Math.max(Ge,_e.start*Ae),at=Math.min(at,(_e.start+_e.count)*Ae)),be!==null?(Ge=Math.max(Ge,0),at=Math.min(at,be.count)):De!=null&&(Ge=Math.max(Ge,0),at=Math.min(at,De.count));const Et=at-Ge;if(Et<0||Et===1/0)return;de.setup(K,ne,xe,ie,be);let bt,lt=L;if(be!==null&&(bt=B.get(be),lt=le,lt.setIndex(bt)),K.isMesh)ne.wireframe===!0?(Ee.setLineWidth(ne.wireframeLinewidth*pt()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(K.isLine){let Le=ne.linewidth;Le===void 0&&(Le=1),Ee.setLineWidth(Le*pt()),K.isLineSegments?lt.setMode(O.LINES):K.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else K.isPoints?lt.setMode(O.POINTS):K.isSprite&&lt.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))lt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Le=K._multiDrawStarts,rt=K._multiDrawCounts,Qe=K._multiDrawCount,fn=be?B.get(be).bytesPerElement:1,vr=y.get(ne).currentProgram.getUniforms();for(let dn=0;dn<Qe;dn++)vr.setValue(O,"_gl_DrawID",dn),lt.render(Le[dn]/fn,rt[dn])}else if(K.isInstancedMesh)lt.renderInstances(Ge,Et,K.count);else if(ie.isInstancedBufferGeometry){const Le=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,rt=Math.min(ie.instanceCount,Le);lt.renderInstances(Ge,Et,rt)}else lt.render(Ge,Et)};function Lu(w,G,ie){w.transparent===!0&&w.side===Gn&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Qs(w,G,ie),w.side=Bi,w.needsUpdate=!0,Qs(w,G,ie),w.side=Gn):Qs(w,G,ie)}this.compile=function(w,G,ie=null){ie===null&&(ie=w),E=H.get(ie),E.init(G),R.push(E),ie.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),w!==ie&&w.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights();const ne=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const _e=K.material;if(_e)if(Array.isArray(_e))for(let ye=0;ye<_e.length;ye++){const xe=_e[ye];Lu(xe,ie,K),ne.add(xe)}else Lu(_e,ie,K),ne.add(_e)}),E=R.pop(),ne},this.compileAsync=function(w,G,ie=null){const ne=this.compile(w,G,ie);return new Promise(K=>{function _e(){if(ne.forEach(function(ye){y.get(ye).currentProgram.isReady()&&ne.delete(ye)}),ne.size===0){K(w);return}setTimeout(_e,10)}Ye.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let oo=null;function Nm(w){oo&&oo(w)}function Iu(){Xi.stop()}function Fu(){Xi.start()}const Xi=new Nd;Xi.setAnimationLoop(Nm),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(w){oo=w,me.setAnimationLoop(w),w===null?Xi.stop():Xi.start()},me.addEventListener("sessionstart",Iu),me.addEventListener("sessionend",Fu),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const ie=me.enabled===!0&&me.isPresenting===!0,ne=F!==null&&(z===null||ie)&&F.begin(v,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(G),G=me.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,G,z),E=H.get(w,R.length),E.init(G),R.push(E),dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Fe.setFromProjectionMatrix(dt,Yn,G.reversedDepth),Xe=this.localClippingEnabled,Me=J.init(this.clippingPlanes,Xe),b=k.get(w,C.length),b.init(),C.push(b),me.enabled===!0&&me.isPresenting===!0){const ye=v.xr.getDepthSensingMesh();ye!==null&&lo(ye,G,-1/0,v.sortObjects)}lo(w,G,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(He,Te),Oe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Oe&&ee.addToRenderList(b,w),this.info.render.frame++,Me===!0&&J.beginShadows();const K=E.state.shadowsArray;if(X.render(K,w,G),Me===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){const ye=b.opaque,xe=b.transmissive;if(E.setupLights(),G.isArrayCamera){const be=G.cameras;if(xe.length>0)for(let Ae=0,Ie=be.length;Ae<Ie;Ae++){const De=be[Ae];Uu(ye,xe,w,De)}Oe&&ee.render(w);for(let Ae=0,Ie=be.length;Ae<Ie;Ae++){const De=be[Ae];Nu(b,w,De,De.viewport)}}else xe.length>0&&Uu(ye,xe,w,G),Oe&&ee.render(w),Nu(b,w,G)}z!==null&&V===0&&(f.updateMultisampleRenderTarget(z),f.updateRenderTargetMipmap(z)),ne&&F.end(v),w.isScene===!0&&w.onAfterRender(v,w,G),de.resetDefaultState(),Y=-1,te=null,R.pop(),R.length>0?(E=R[R.length-1],Me===!0&&J.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?b=C[C.length-1]:b=null};function lo(w,G,ie,ne){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Fe.intersectsSprite(w)){ne&&$e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const ye=S.update(w),xe=w.material;xe.visible&&b.push(w,ye,xe,ie,$e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Fe.intersectsObject(w))){const ye=S.update(w),xe=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$e.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),$e.copy(ye.boundingSphere.center)),$e.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(xe)){const be=ye.groups;for(let Ae=0,Ie=be.length;Ae<Ie;Ae++){const De=be[Ae],Ge=xe[De.materialIndex];Ge&&Ge.visible&&b.push(w,ye,Ge,ie,$e.z,De)}}else xe.visible&&b.push(w,ye,xe,ie,$e.z,null)}}const _e=w.children;for(let ye=0,xe=_e.length;ye<xe;ye++)lo(_e[ye],G,ie,ne)}function Nu(w,G,ie,ne){const{opaque:K,transmissive:_e,transparent:ye}=w;E.setupLightsView(ie),Me===!0&&J.setGlobalState(v.clippingPlanes,ie),ne&&Ee.viewport(Z.copy(ne)),K.length>0&&Js(K,G,ie),_e.length>0&&Js(_e,G,ie),ye.length>0&&Js(ye,G,ie),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Uu(w,G,ie,ne){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ne.id]===void 0){const Ge=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ne.id]=new Zn(1,1,{generateMipmaps:!0,type:Ge?_i:xn,minFilter:rr,samples:et.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const _e=E.state.transmissionRenderTarget[ne.id],ye=ne.viewport||Z;_e.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const xe=v.getRenderTarget(),be=v.getActiveCubeFace(),Ae=v.getActiveMipmapLevel();v.setRenderTarget(_e),v.getClearColor(pe),he=v.getClearAlpha(),he<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&ee.render(ie);const Ie=v.toneMapping;v.toneMapping=Kn;const De=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),E.setupLightsView(ne),Me===!0&&J.setGlobalState(v.clippingPlanes,ne),Js(w,ie,ne),f.updateMultisampleRenderTarget(_e),f.updateRenderTargetMipmap(_e),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let at=0,Et=G.length;at<Et;at++){const bt=G[at],{object:lt,geometry:Le,material:rt,group:Qe}=bt;if(rt.side===Gn&&lt.layers.test(ne.layers)){const fn=rt.side;rt.side=an,rt.needsUpdate=!0,Ou(lt,ie,ne,Le,rt,Qe),rt.side=fn,rt.needsUpdate=!0,Ge=!0}}Ge===!0&&(f.updateMultisampleRenderTarget(_e),f.updateRenderTargetMipmap(_e))}v.setRenderTarget(xe,be,Ae),v.setClearColor(pe,he),De!==void 0&&(ne.viewport=De),v.toneMapping=Ie}function Js(w,G,ie){const ne=G.isScene===!0?G.overrideMaterial:null;for(let K=0,_e=w.length;K<_e;K++){const ye=w[K],{object:xe,geometry:be,group:Ae}=ye;let Ie=ye.material;Ie.allowOverride===!0&&ne!==null&&(Ie=ne),xe.layers.test(ie.layers)&&Ou(xe,G,ie,be,Ie,Ae)}}function Ou(w,G,ie,ne,K,_e){w.onBeforeRender(v,G,ie,ne,K,_e),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(v,G,ie,ne,w,_e),K.transparent===!0&&K.side===Gn&&K.forceSinglePass===!1?(K.side=an,K.needsUpdate=!0,v.renderBufferDirect(ie,G,ne,K,w,_e),K.side=Bi,K.needsUpdate=!0,v.renderBufferDirect(ie,G,ne,K,w,_e),K.side=Gn):v.renderBufferDirect(ie,G,ne,K,w,_e),w.onAfterRender(v,G,ie,ne,K,_e)}function Qs(w,G,ie){G.isScene!==!0&&(G=Je);const ne=y.get(w),K=E.state.lights,_e=E.state.shadowsArray,ye=K.state.version,xe=I.getParameters(w,K.state,_e,G,ie),be=I.getProgramCacheKey(xe);let Ae=ne.programs;ne.environment=w.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(w.isMeshStandardMaterial?N:D).get(w.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",Bn),Ae=new Map,ne.programs=Ae);let Ie=Ae.get(be);if(Ie!==void 0){if(ne.currentProgram===Ie&&ne.lightsStateVersion===ye)return Bu(w,xe),Ie}else xe.uniforms=I.getUniforms(w),w.onBeforeCompile(xe,v),Ie=I.acquireProgram(xe,be),Ae.set(be,Ie),ne.uniforms=xe.uniforms;const De=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=J.uniform),Bu(w,xe),ne.needsLights=km(w),ne.lightsStateVersion=ye,ne.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.directionalShadowMap.value=K.state.directionalShadowMap,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotShadowMap.value=K.state.spotShadowMap,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMap.value=K.state.pointShadowMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=Ie,ne.uniformsList=null,Ie}function ku(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Da.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Bu(w,G){const ie=y.get(w);ie.outputColorSpace=G.outputColorSpace,ie.batching=G.batching,ie.batchingColor=G.batchingColor,ie.instancing=G.instancing,ie.instancingColor=G.instancingColor,ie.instancingMorph=G.instancingMorph,ie.skinning=G.skinning,ie.morphTargets=G.morphTargets,ie.morphNormals=G.morphNormals,ie.morphColors=G.morphColors,ie.morphTargetsCount=G.morphTargetsCount,ie.numClippingPlanes=G.numClippingPlanes,ie.numIntersection=G.numClipIntersection,ie.vertexAlphas=G.vertexAlphas,ie.vertexTangents=G.vertexTangents,ie.toneMapping=G.toneMapping}function Um(w,G,ie,ne,K){G.isScene!==!0&&(G=Je),f.resetTextureUnits();const _e=G.fog,ye=ne.isMeshStandardMaterial?G.environment:null,xe=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:es,be=(ne.isMeshStandardMaterial?N:D).get(ne.envMap||ye),Ae=ne.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ie=!!ie.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),De=!!ie.morphAttributes.position,Ge=!!ie.morphAttributes.normal,at=!!ie.morphAttributes.color;let Et=Kn;ne.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Et=v.toneMapping);const bt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,lt=bt!==void 0?bt.length:0,Le=y.get(ne),rt=E.state.lights;if(Me===!0&&(Xe===!0||w!==te)){const $t=w===te&&ne.id===Y;J.setState(ne,w,$t)}let Qe=!1;ne.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==rt.state.version||Le.outputColorSpace!==xe||K.isBatchedMesh&&Le.batching===!1||!K.isBatchedMesh&&Le.batching===!0||K.isBatchedMesh&&Le.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Le.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Le.instancing===!1||!K.isInstancedMesh&&Le.instancing===!0||K.isSkinnedMesh&&Le.skinning===!1||!K.isSkinnedMesh&&Le.skinning===!0||K.isInstancedMesh&&Le.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Le.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Le.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Le.instancingMorph===!1&&K.morphTexture!==null||Le.envMap!==be||ne.fog===!0&&Le.fog!==_e||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==J.numPlanes||Le.numIntersection!==J.numIntersection)||Le.vertexAlphas!==Ae||Le.vertexTangents!==Ie||Le.morphTargets!==De||Le.morphNormals!==Ge||Le.morphColors!==at||Le.toneMapping!==Et||Le.morphTargetsCount!==lt)&&(Qe=!0):(Qe=!0,Le.__version=ne.version);let fn=Le.currentProgram;Qe===!0&&(fn=Qs(ne,G,K));let vr=!1,dn=!1,fs=!1;const ft=fn.getUniforms(),en=Le.uniforms;if(Ee.useProgram(fn.program)&&(vr=!0,dn=!0,fs=!0),ne.id!==Y&&(Y=ne.id,dn=!0),vr||te!==w){Ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(O,"projectionMatrix",w.projectionMatrix),ft.setValue(O,"viewMatrix",w.matrixWorldInverse);const tn=ft.map.cameraPosition;tn!==void 0&&tn.setValue(O,Ve.setFromMatrixPosition(w.matrixWorld)),et.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&ft.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),te!==w&&(te=w,dn=!0,fs=!0)}if(Le.needsLights&&(rt.state.directionalShadowMap.length>0&&ft.setValue(O,"directionalShadowMap",rt.state.directionalShadowMap,f),rt.state.spotShadowMap.length>0&&ft.setValue(O,"spotShadowMap",rt.state.spotShadowMap,f),rt.state.pointShadowMap.length>0&&ft.setValue(O,"pointShadowMap",rt.state.pointShadowMap,f)),K.isSkinnedMesh){ft.setOptional(O,K,"bindMatrix"),ft.setOptional(O,K,"bindMatrixInverse");const $t=K.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),ft.setValue(O,"boneTexture",$t.boneTexture,f))}K.isBatchedMesh&&(ft.setOptional(O,K,"batchingTexture"),ft.setValue(O,"batchingTexture",K._matricesTexture,f),ft.setOptional(O,K,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",K._indirectTexture,f),ft.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",K._colorsTexture,f));const Tn=ie.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&re.update(K,ie,fn),(dn||Le.receiveShadow!==K.receiveShadow)&&(Le.receiveShadow=K.receiveShadow,ft.setValue(O,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(en.envMap.value=be,en.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&G.environment!==null&&(en.envMapIntensity.value=G.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=oy()),dn&&(ft.setValue(O,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&Om(en,fs),_e&&ne.fog===!0&&W.refreshFogUniforms(en,_e),W.refreshMaterialUniforms(en,ne,we,Pe,E.state.transmissionRenderTarget[w.id]),Da.upload(O,ku(Le),en,f)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Da.upload(O,ku(Le),en,f),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&ft.setValue(O,"center",K.center),ft.setValue(O,"modelViewMatrix",K.modelViewMatrix),ft.setValue(O,"normalMatrix",K.normalMatrix),ft.setValue(O,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const $t=ne.uniformsGroups;for(let tn=0,co=$t.length;tn<co;tn++){const Yi=$t[tn];ue.update(Yi,fn),ue.bind(Yi,fn)}}return fn}function Om(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function km(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,G,ie){const ne=y.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),y.get(w.texture).__webglTexture=G,y.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ie,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const ie=y.get(w);ie.__webglFramebuffer=G,ie.__useDefaultFramebuffer=G===void 0};const Bm=O.createFramebuffer();this.setRenderTarget=function(w,G=0,ie=0){z=w,U=G,V=ie;let ne=null,K=!1,_e=!1;if(w){const xe=y.get(w);if(xe.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(O.FRAMEBUFFER,xe.__webglFramebuffer),Z.copy(w.viewport),Q.copy(w.scissor),q=w.scissorTest,Ee.viewport(Z),Ee.scissor(Q),Ee.setScissorTest(q),Y=-1;return}else if(xe.__webglFramebuffer===void 0)f.setupRenderTarget(w);else if(xe.__hasExternalTextures)f.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(xe.__boundDepthTexture!==Ie){if(Ie!==null&&y.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");f.setupDepthRenderbuffer(w)}}const be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);const Ae=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[G])?ne=Ae[G][ie]:ne=Ae[G],K=!0):w.samples>0&&f.useMultisampledRTT(w)===!1?ne=y.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?ne=Ae[ie]:ne=Ae,Z.copy(w.viewport),Q.copy(w.scissor),q=w.scissorTest}else Z.copy(ae).multiplyScalar(we).floor(),Q.copy(ce).multiplyScalar(we).floor(),q=Se;if(ie!==0&&(ne=Bm),Ee.bindFramebuffer(O.FRAMEBUFFER,ne)&&Ee.drawBuffers(w,ne),Ee.viewport(Z),Ee.scissor(Q),Ee.setScissorTest(q),K){const xe=y.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe.__webglTexture,ie)}else if(_e){const xe=G;for(let be=0;be<w.textures.length;be++){const Ae=y.get(w.textures[be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+be,Ae.__webglTexture,ie,xe)}}else if(w!==null&&ie!==0){const xe=y.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,ie)}Y=-1},this.readRenderTargetPixels=function(w,G,ie,ne,K,_e,ye,xe=0){if(!(w&&w.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){Ee.bindFramebuffer(O.FRAMEBUFFER,be);try{const Ae=w.textures[xe],Ie=Ae.format,De=Ae.type;if(!et.textureFormatReadable(Ie)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(De)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-ne&&ie>=0&&ie<=w.height-K&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe),O.readPixels(G,ie,ne,K,se.convert(Ie),se.convert(De),_e))}finally{const Ae=z!==null?y.get(z).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,G,ie,ne,K,_e,ye,xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be)if(G>=0&&G<=w.width-ne&&ie>=0&&ie<=w.height-K){Ee.bindFramebuffer(O.FRAMEBUFFER,be);const Ae=w.textures[xe],Ie=Ae.format,De=Ae.type;if(!et.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ge),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe),O.readPixels(G,ie,ne,K,se.convert(Ie),se.convert(De),0);const at=z!==null?y.get(z).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,at);const Et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await S_(O,Et,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ge),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.deleteBuffer(Ge),O.deleteSync(Et),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,ie=0){const ne=Math.pow(2,-ie),K=Math.floor(w.image.width*ne),_e=Math.floor(w.image.height*ne),ye=G!==null?G.x:0,xe=G!==null?G.y:0;f.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,ie,0,0,ye,xe,K,_e),Ee.unbindTexture()};const zm=O.createFramebuffer(),Hm=O.createFramebuffer();this.copyTextureToTexture=function(w,G,ie=null,ne=null,K=0,_e=null){_e===null&&(K!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=K,K=0):_e=0);let ye,xe,be,Ae,Ie,De,Ge,at,Et;const bt=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(ie!==null)ye=ie.max.x-ie.min.x,xe=ie.max.y-ie.min.y,be=ie.isBox3?ie.max.z-ie.min.z:1,Ae=ie.min.x,Ie=ie.min.y,De=ie.isBox3?ie.min.z:0;else{const Tn=Math.pow(2,-K);ye=Math.floor(bt.width*Tn),xe=Math.floor(bt.height*Tn),w.isDataArrayTexture?be=bt.depth:w.isData3DTexture?be=Math.floor(bt.depth*Tn):be=1,Ae=0,Ie=0,De=0}ne!==null?(Ge=ne.x,at=ne.y,Et=ne.z):(Ge=0,at=0,Et=0);const lt=se.convert(G.format),Le=se.convert(G.type);let rt;G.isData3DTexture?(f.setTexture3D(G,0),rt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(f.setTexture2DArray(G,0),rt=O.TEXTURE_2D_ARRAY):(f.setTexture2D(G,0),rt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Qe=O.getParameter(O.UNPACK_ROW_LENGTH),fn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),vr=O.getParameter(O.UNPACK_SKIP_PIXELS),dn=O.getParameter(O.UNPACK_SKIP_ROWS),fs=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,bt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,De);const ft=w.isDataArrayTexture||w.isData3DTexture,en=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const Tn=y.get(w),$t=y.get(G),tn=y.get(Tn.__renderTarget),co=y.get($t.__renderTarget);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,co.__webglFramebuffer);for(let Yi=0;Yi<be;Yi++)ft&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,y.get(w).__webglTexture,K,De+Yi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,y.get(G).__webglTexture,_e,Et+Yi)),O.blitFramebuffer(Ae,Ie,ye,xe,Ge,at,ye,xe,O.DEPTH_BUFFER_BIT,O.NEAREST);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||y.has(w)){const Tn=y.get(w),$t=y.get(G);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,zm),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,Hm);for(let tn=0;tn<be;tn++)ft?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tn.__webglTexture,K,De+tn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Tn.__webglTexture,K),en?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$t.__webglTexture,_e,Et+tn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$t.__webglTexture,_e),K!==0?O.blitFramebuffer(Ae,Ie,ye,xe,Ge,at,ye,xe,O.COLOR_BUFFER_BIT,O.NEAREST):en?O.copyTexSubImage3D(rt,_e,Ge,at,Et+tn,Ae,Ie,ye,xe):O.copyTexSubImage2D(rt,_e,Ge,at,Ae,Ie,ye,xe);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else en?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(rt,_e,Ge,at,Et,ye,xe,be,lt,Le,bt.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(rt,_e,Ge,at,Et,ye,xe,be,lt,bt.data):O.texSubImage3D(rt,_e,Ge,at,Et,ye,xe,be,lt,Le,bt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,Ge,at,ye,xe,lt,Le,bt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,Ge,at,bt.width,bt.height,lt,bt.data):O.texSubImage2D(O.TEXTURE_2D,_e,Ge,at,ye,xe,lt,Le,bt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Qe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,vr),O.pixelStorei(O.UNPACK_SKIP_ROWS,dn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fs),_e===0&&G.generateMipmaps&&O.generateMipmap(rt),Ee.unbindTexture()},this.initRenderTarget=function(w){y.get(w).__webglFramebuffer===void 0&&f.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?f.setTextureCube(w,0):w.isData3DTexture?f.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?f.setTexture2DArray(w,0):f.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){U=0,V=0,z=null,Ee.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const zh={type:"change"},su={type:"start"},zd={type:"end"},Sa=new Qc,Hh=new Ri,cy=Math.cos(70*M_.DEG2RAD),Dt=new j,rn=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Go=1e-6;class uy extends fg{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new pr,this._lastTargetPosition=new j,this._quat=new pr().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mh,this._sphericalDelta=new mh,this._scale=1,this._panOffset=new j,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new j,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fy.bind(this),this._onPointerDown=hy.bind(this),this._onPointerUp=dy.bind(this),this._onContextMenu=Sy.bind(this),this._onMouseWheel=_y.bind(this),this._onKeyDown=gy.bind(this),this._onTouchStart=xy.bind(this),this._onTouchMove=vy.bind(this),this._onMouseDown=py.bind(this),this._onMouseMove=my.bind(this),this._interceptControlDown=yy.bind(this),this._interceptControlUp=My.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zh),this.update(),this.state=ot.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),r<-Math.PI?r+=rn:r>Math.PI&&(r-=rn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Dt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new j(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Sa.origin.copy(this.object.position),Sa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sa.direction))<cy?this.object.lookAt(this.target):(Hh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sa.intersectPlane(Hh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Go||this._lastTargetPosition.distanceToSquared(this.target)>Go?(this.dispatchEvent(zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function py(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ot.DOLLY;break;case Xr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}break;case Xr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(su)}function my(i){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _y(i){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(i.preventDefault(),this.dispatchEvent(su),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zd))}function gy(i){this.enabled!==!1&&this._handleKeyDown(i)}function xy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ot.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ot.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(su)}function vy(i){switch(this._trackPointer(i),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ot.NONE}}function Sy(i){this.enabled!==!1&&i.preventDefault()}function yy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function My(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ey{constructor(){this.scene=new Y_,this.scene.background=new qe(14541287),this.renderer=new ly({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sd,document.body.appendChild(this.renderer.domElement),this.camera=new Pn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(10,8,12),this.controls=new uy(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this._addLights(),window.addEventListener("resize",()=>this.onWindowResize())}_addLights(){this.scene.add(new cg(16777215,.5));const e=new lg(16777215,1.2);e.position.set(5,15,10),e.castShadow=!0,this.scene.add(e)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}update(){this.controls.update(),this.renderer.render(this.scene,this.camera)}}const by=""+new URL("../bildschirm-foto.jpg",import.meta.url).href;class Ty{constructor(e){this.scene=e,this.textureLoader=new sg,this.legMat=new Ci({color:1118481}),this.createFloor(),this.createDesk(),this.createMonitor(),this.createChair(),this.createPlant()}createFloor(){const e=new _t(new or(30,30),new Ci({color:12303291}));e.rotation.x=-Math.PI/2,e.position.y=-2.5,e.receiveShadow=!0,this.scene.add(e)}createFloor(){const e=new _t(new or(30,30),new Ci({color:12303291}));e.rotation.x=-Math.PI/2,e.position.y=-2.5,e.receiveShadow=!0,this.scene.add(e)}createDesk(){const e=new fi,t=new _t(new Rn(5,.15,2.5),new Ci({color:4073251}));t.castShadow=!0,t.receiveShadow=!0,e.add(t);const n=new Rn(.15,2.5,.15);[[-2.3,-1.25,-1.1],[2.3,-1.25,-1.1],[-2.3,-1.25,1.1],[2.3,-1.25,1.1]].forEach(s=>{const a=new _t(n,this.legMat);a.position.set(s[0],s[1],s[2]),a.castShadow=!0,e.add(a)}),this.scene.add(e)}createMonitor(){const e=new fi,t=this.textureLoader.load(by),n=new _t(new Rn(.8,.05,.5),this.legMat);n.position.y=.1;const r=new _t(new Rn(.15,.8,.1),this.legMat);r.position.y=.5;const s=new _t(new Rn(2.4,1.4,.1),this.legMat);s.position.y=1.2;const a=new _t(new or(2.3,1.3),new Ci({map:t,emissive:16777215,emissiveIntensity:.1,emissiveMap:t}));a.position.set(0,1.2,.06),a.userData={id:"monitor"},e.add(n,r,s,a),e.position.set(0,0,-.8),this.scene.add(e)}createChair(){const e=new fi,t=new Ci({color:2236962}),n=new _t(new Rn(1.1,.2,1.1),t);n.position.y=-.4;const r=new _t(new Rn(1,1.5,.15),t);r.position.set(0,.4,.5);const s=new _t(new zr(.08,.08,1.2),this.legMat);s.position.y=-1.1;const a=new _t(new zr(.7,.7,.1,5),this.legMat);a.position.y=-1.7,e.add(n,r,s,a),e.position.set(0,-.6,2.2),this.scene.add(e)}createPlant(){const e=new fi,t=new _t(new zr(.6,.5,1),new Ci({color:6111287}));t.position.y=-2,e.add(t);const n=new Q_({color:1793568,side:Gn,roughness:.7});for(let r=0;r<10;r++){const s=r/10*Math.PI*2,a=3+Math.random()*2,o=new _t(new zr(.03,.05,a),n);o.position.y=-2+a/2,o.rotation.z=(Math.random()-.5)*.4;const l=new _t(new nu(.6,12,12),n);l.scale.set(1,.02,3.5),l.position.y=a/2,l.rotation.x=.4;const c=new fi;c.add(o,l),c.rotation.y=s,e.add(c)}e.position.set(-4.5,0,.5),this.scene.add(e)}}function ui(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Hd(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var Mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ns={duration:.5,overwrite:!1,delay:0},au,Bt,gt,Dn=1e8,ut=1/Dn,Mc=Math.PI*2,Ay=Mc/4,wy=0,Vd=Math.sqrt,Cy=Math.cos,Ry=Math.sin,Ut=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},xi=function(e){return typeof e=="number"},ou=function(e){return typeof e>"u"},ii=function(e){return typeof e=="object"},on=function(e){return e!==!1},lu=function(){return typeof window<"u"},ya=function(e){return At(e)||Ut(e)},Gd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qt=Array.isArray,Py=/random\([^)]+\)/g,Dy=/,\s*/g,Vh=/(?:-?\.?\d|\.)+/gi,Wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xd=/[+-]=-?[.\d]+/,Ly=/[^,'"\[\]\s]+/gi,Iy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,St,Hn,Ec,cu,En={},ka={},Yd,qd=function(e){return(ka=is(e,En))&&hn},uu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ns=function(e,t){return!t&&console.warn(e)},jd=function(e,t){return e&&(En[e]=t)&&ka&&(ka[e]=t)||En},Us=function(){return 0},Fy={suppressEvents:!0,isStart:!0,kill:!1},La={suppressEvents:!0,kill:!1},Ny={suppressEvents:!0},hu={},Ui=[],bc={},$d,_n={},Xo={},Gh=30,Ia=[],fu="",du=function(e){var t=e[0],n,r;if(ii(t)||At(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ia.length;r--&&!Ia[r].targetTest(t););n=Ia[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new vp(e[r],n)))||e.splice(r,1);return e},lr=function(e){return e._gsap||du(Ln(e))[0]._gsap},Kd=function(e,t,n){return(n=e[t])&&At(n)?e[t]():ou(n)&&e.getAttribute&&e.getAttribute(t)||n},ln=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},vt=function(e){return Math.round(e*1e7)/1e7||0},jr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Uy=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ba=function(){var e=Ui.length,t=Ui.slice(0),n,r;for(bc={},Ui.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},pu=function(e){return!!(e._initted||e._startAt||e.add)},Zd=function(e,t,n,r){Ui.length&&!Bt&&Ba(),e.render(t,n,!!(Bt&&t<0&&pu(e))),Ui.length&&!Bt&&Ba()},Jd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ly).length<2?t:Ut(e)?e.trim():e},Qd=function(e){return e},bn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oy=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},is=function(e,t){for(var n in t)e[n]=t[n];return e},Wh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ii(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},za=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},As=function(e){var t=e.parent||St,n=e.keyframes?Oy(qt(e.keyframes)):bn;if(on(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ky=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ep=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},io=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},By=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Tc=function(e,t,n,r){return e._startAt&&(Bt?e._startAt.revert(La):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},zy=function i(e){return!e||e._ts&&i(e.parent)},Xh=function(e){return e._repeat?rs(e._tTime,e=e.duration()+e._rDelay)*e:0},rs=function(e,t){var n=Math.floor(e=vt(e/t));return e&&n===e?n-1:n},Ha=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ro=function(e){return e._end=vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},so=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ro(e),n._dirty||cr(n,e)),e},tp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ha(e.rawTime(),t),(!t._dur||Ks(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},Wn=function(e,t,n,r){return t.parent&&zi(t),t._start=vt((xi(n)?n:n||e!==St?wn(e,n,t):e._time)+t._delay),t._end=vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ep(e,t,"_first","_last",e._sort?"_start":0),Ac(t)||(e._recent=t),r||tp(e,t),e._ts<0&&so(e,e._tTime),e},np=function(e,t){return(En.ScrollTrigger||uu("scrollTrigger",t))&&En.ScrollTrigger.create(t,e)},ip=function(e,t,n,r,s){if(_u(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$d!==vn.frame)return Ui.push(e),e._lazy=[s,r],1},Hy=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ac=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vy=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Hy(e)&&!(!e._initted&&Ac(e))||(e._ts<0||e._dp._ts<0)&&!Ac(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ks(0,e._tDur,t),u=rs(l,o),e._yoyo&&u&1&&(a=1-a),u!==rs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Bt||r||e._zTime===ut||!t&&e._zTime){if(!e._initted&&ip(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Tc(e,t,n,!0),e._onUpdate&&!n&&Sn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&zi(e,1),!n&&!Bt&&(Sn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gy=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ss=function(e,t,n,r){var s=e._repeat,a=vt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:vt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&so(e,e._tTime=e._tDur*o),e.parent&&ro(e),n||cr(e.parent,e),e},Yh=function(e){return e instanceof Zt?cr(e):ss(e,e._dur)},Wy={_start:0,endTime:Us,totalDuration:Us},wn=function i(e,t,n){var r=e.labels,s=e._recent||Wy,a=e.duration()>=Dn?s.endTime(!1):e._dur,o,l,c;return Ut(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(qt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ws=function(e,t,n){var r=xi(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=on(l.vars.inherit)&&l.parent;a.immediateRender=on(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Rt(t[0],a,t[s+1])},Wi=function(e,t){return e||e===0?t(e):t},Ks=function(e,t,n){return n<e?e:n>t?t:n},Gt=function(e,t){return!Ut(e)||!(t=Iy.exec(e))?"":t[1]},Xy=function(e,t,n){return Wi(n,function(r){return Ks(e,t,r)})},wc=[].slice,rp=function(e,t){return e&&ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ii(e[0]))&&!e.nodeType&&e!==Hn},Yy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ut(r)&&!t||rp(r,1)?(s=n).push.apply(s,Ln(r)):n.push(r)})||n},Ln=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Ut(e)&&!n&&(Ec||!as())?wc.call((t||cu).querySelectorAll(e),0):qt(e)?Yy(e,n):rp(e)?wc.call(e,0):e?[e]:[]},Cc=function(e){return e=Ln(e)[0]||Ns("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ln(t,n.querySelectorAll?n:n===e?Ns("Invalid scope")||cu.createElement("div"):e)}},sp=function(e){return e.sort(function(){return .5-Math.random()})},ap=function(e){if(At(e))return e;var t=ii(e)?e:{each:e},n=ur(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return Ut(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,p,x){var g=(x||t).length,_=a[g],m,M,T,b,E,C,R,F,v;if(!_){if(v=t.grid==="auto"?0:(t.grid||[1,Dn])[1],!v){for(R=-Dn;R<(R=x[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(_=a[g]=[],m=l?Math.min(v,g)*u-.5:r%v,M=v===Dn?0:l?g*h/v-.5:r/v|0,R=0,F=Dn,C=0;C<g;C++)T=C%v-m,b=M-(C/v|0),_[C]=E=c?Math.abs(c==="y"?b:T):Vd(T*T+b*b),E>R&&(R=E),E<F&&(F=E);r==="random"&&sp(_),_.max=R-F,_.min=F,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(r==="edges"?-1:1),_.b=g<0?s-g:s,_.u=Gt(t.amount||t.each)||0,n=n&&g<0?_p(n):n}return g=(_[d]-_.min)/_.max||0,vt(_.b+(n?n(g):g)*_.v)+_.u}},Rc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=vt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(xi(n)?0:Gt(n))}},op=function(e,t){var n=qt(e),r,s;return!n&&ii(e)&&(r=n=e.radius||Dn,e.values?(e=Ln(e.values),(s=!xi(e[0]))&&(r*=r)):e=Rc(e.increment)),Wi(t,n?At(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Dn,u=0,h=e.length,d,p;h--;)s?(d=e[h].x-o,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:a,s||u===a||xi(a)?u:u+Gt(a)}:Rc(e))},lp=function(e,t,n,r){return Wi(qt(e)?!t:n===!0?!!(n=0):!r,function(){return qt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},qy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},jy=function(e,t){return function(n){return e(parseFloat(n))+(t||Gt(n))}},$y=function(e,t,n){return up(e,t,0,1,n)},cp=function(e,t,n){return Wi(n,function(r){return e[~~t(r)]})},Ky=function i(e,t,n){var r=t-e;return qt(e)?cp(e,i(0,e.length),t):Wi(n,function(s){return(r+(s-e)%r)%r+e})},Zy=function i(e,t,n){var r=t-e,s=r*2;return qt(e)?cp(e,i(0,e.length-1),t):Wi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Os=function(e){return e.replace(Py,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Dy);return lp(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},up=function(e,t,n,r,s){var a=t-e,o=r-n;return Wi(s,function(l){return n+((l-e)/a*o||0)})},Jy=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Ut(e),o={},l,c,u,h,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(qt(e)&&!qt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(x){x*=h;var g=Math.min(d,~~x);return u[g](x-g)},n=t}else r||(e=is(qt(e)?[]:{},e));if(!u){for(l in t)mu.call(o,e,l,"get",t[l]);s=function(x){return vu(x,o)||(a?e.p:e)}}}return Wi(n,s)},qh=function(e,t,n){var r=e.labels,s=Dn,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Sn=function(e,t,n){var r=e.vars,s=r[t],a=gt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ui.length&&Ba(),o&&(gt=o),u=l?s.apply(c,l):s.call(c),gt=a,u},Es=function(e){return zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&Sn(e,"onInterrupt"),e},Vr,hp=[],fp=function(e){if(e)if(e=!e.name&&e.default||e,lu()||e.headless){var t=e.name,n=At(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Us,render:vu,add:mu,kill:pM,modifier:dM,rawVars:0},a={targetTest:0,get:0,getSetter:xu,aliases:{},register:0};if(as(),e!==r){if(_n[t])return;bn(r,bn(za(e,s),a)),is(r.prototype,is(s,za(e,a))),_n[r.prop=t]=r,e.targetTest&&(Ia.push(r),hu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jd(t,r),e.register&&e.register(hn,r,cn)}else hp.push(e)},ct=255,bs={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Yo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},dp=function(e,t,n){var r=e?xi(e)?[e>>16,e>>8&ct,e&ct]:0:bs.black,s,a,o,l,c,u,h,d,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),bs[e])r=bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ct,r&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(Vh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Yo(l+1/3,s,a),r[1]=Yo(l,s,a),r[2]=Yo(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Wd),n&&r.length<4&&(r[3]=1),r}else r=e.match(Vh)||bs.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/ct,a=r[1]/ct,o=r[2]/ct,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},pp=function(e){var t=[],n=[],r=-1;return e.split(Oi).forEach(function(s){var a=s.match(Hr)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},jh=function(e,t,n){var r="",s=(e+r).match(Oi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=dp(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=pp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Oi,"1").split(Hr),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Oi),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Oi=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in bs)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Qy=/hsl[a]?\(/,mp=function(e){var t=e.join(" "),n;if(Oi.lastIndex=0,Oi.test(t))return n=Qy.test(t),e[1]=jh(e[1],n),e[0]=jh(e[0],n,pp(e[1])),!0},ks,vn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,d,p,x=function g(_){var m=i()-r,M=_===!0,T,b,E,C;if((m>e||m<0)&&(n+=m-t),r+=m,E=r-n,T=E-a,(T>0||M)&&(C=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,a+=T+(T>=s?4:s-T),b=1),M||(l=c(g)),b)for(p=0;p<o.length;p++)o[p](E,d,C,_)};return h={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Yd&&(!Ec&&lu()&&(Hn=Ec=window,cu=Hn.document||{},En.gsap=hn,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(hn.version),qd(ka||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),hp.forEach(fp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(_){return setTimeout(_,a-h.time*1e3+1|0)},ks=1,x(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ks=0,c=Us},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),a=h.time*1e3+s},add:function(_,m,M){var T=m?function(b,E,C,R){_(b,E,C,R),h.remove(T)}:_;return h.remove(_),o[M?"unshift":"push"](T),as(),T},remove:function(_,m){~(m=o.indexOf(_))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},h})(),as=function(){return!ks&&vn.wake()},je={},eM=/^[\d.\-M][\d.\-,\s]/,tM=/["']/g,nM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(tM,"").trim():+c,r=l.substr(o+1).trim();return t},iM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},rM=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nM(t[1])]:iM(e).split(",").map(Jd)):je._CE&&eM.test(e)?je._CE("",e):n},_p=function(e){return function(t){return 1-e(1-t)}},gp=function i(e,t){for(var n=e._first,r;n;)n instanceof Zt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ur=function(e,t){return e&&(At(e)?e:je[e]||rM(e))||t},gr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return ln(e,function(o){je[o]=En[o]=s,je[a=o.toLowerCase()]=n;for(var l in s)je[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[o+"."+l]=s[l]}),s},xp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qo=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Mc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ry((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:xp(o);return s=Mc/s,l.config=function(c,u){return i(e,c,u)},l},jo=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:xp(n);return r.config=function(s){return i(e,s)},r};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;gr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;gr("Elastic",qo("in"),qo("out"),qo());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);gr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});gr("Circ",function(i){return-(Vd(1-i*i)-1)});gr("Sine",function(i){return i===1?1:-Cy(i*Ay)+1});gr("Back",jo("in"),jo("out"),jo());je.SteppedEase=je.steps=En.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-ut;return function(o){return((r*Ks(0,a,o)|0)+s)*n}}};ns.ease=je["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return fu+=i+","+i+"Params,"});var vp=function(e,t){this.id=wy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kd,this.set=t?t.getSetter:xu},Bs=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ss(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),ks||vn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ss(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(as(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(so(this,n),!s._dp||s.parent||tp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ut||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?rs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ha(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(Ks(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ro(this),By(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(as(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=vt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(on(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ha(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ny);var r=Bt;return Bt=n,pu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Bt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Yh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(wn(this,n),on(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,on(r)),this._dur||(this._zTime=-ut),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ut)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=At(n)?n:Qd,l=function(){var u=r.then;r.then=null,s&&s(),At(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Es(this)},i})();bn(Bs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var Zt=(function(i){Hd(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=on(n.sortChildren),St&&Wn(n.parent||St,ui(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&np(ui(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return ws(0,arguments,this),this},t.from=function(r,s,a){return ws(1,arguments,this),this},t.fromTo=function(r,s,a,o){return ws(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,As(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,wn(this,a),1),this},t.call=function(r,s,a){return Wn(this,Rt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Rt(r,a,wn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,As(a).immediateRender=on(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,As(o).immediateRender=on(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:vt(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,p,x,g,_,m,M,T,b,E,C,R;if(this!==St&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,b=this._start,T=this._ts,m=!T,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,a);if(d=vt(u%_),u===l?(g=this._repeat,d=c):(E=vt(u/_),g=~~E,g&&g===E&&(d=c,g--),d>c&&(d=c)),E=rs(this._tTime,_),!o&&this._tTime&&E!==g&&this._tTime-E*_-this._dur<=0&&(E=g),C&&g&1&&(d=c-d,R=1),g!==E&&!this._lock){var F=C&&E&1,v=F===(C&&g&1);if(g<E&&(F=!F),o=F?0:u%c?c:u,this._lock=1,this.render(o||(R?0:vt(g*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Sn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,E=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=F?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;gp(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Gy(this,vt(o),vt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!E&&(Sn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||d>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!m){M=0,x&&(u+=this._zTime=-ut);break}}p=x}else{p=this._last;for(var A=r<0?r:d;p;){if(x=p._prev,(p._act||A<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,a||Bt&&pu(p)),d!==this._time||!this._ts&&!m){M=0,x&&(u+=this._zTime=A?-ut:ut);break}}p=x}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-ut)._zTime=d>=o?1:-1,this._ts))return this._start=b,ro(this),this.render(r,s,a);this._onUpdate&&!s&&Sn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zi(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Sn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(xi(s)||(s=wn(this,s,r)),!(r instanceof Bs)){if(qt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ut(r))return this.addLabel(r,s);if(At(r))r=Rt.delayedCall(0,r);else return this}return this!==r?Wn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Dn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Rt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Ut(r)?this.removeLabel(r):At(r)?this.killTweensOf(r):(r.parent===this&&io(this,r),r===this._recent&&(this._recent=this._last),cr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vt(vn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Rt.delayedCall(0,s||Us,a);return o.data="isPause",this._hasPause=1,Wn(this,o,wn(this,r))},t.removePause=function(r){var s=this._first;for(r=wn(this,r);s;)s._start===r&&s.data==="isPause"&&zi(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ii!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Ln(r),l=this._first,c=xi(s),u;l;)l instanceof Rt?Uy(l._targets,o)&&(c?(!Ii||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=wn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,x=Rt.to(a,bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ut,onStart:function(){if(a.pause(),!p){var _=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());x._dur!==_&&ss(x,_,0,1).render(x._time,!0,!0),p=1}u&&u.apply(x,h||[])}},s));return d?x.render(0):x},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,bn({startAt:{time:wn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),qh(this,wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),qh(this,wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=vt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return cr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),cr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Dn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Wn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=vt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ss(a,a===St&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(St._ts&&(Zd(St,Ha(r,St)),$d=vn.frame),vn.frame>=Gh){Gh+=Mn.autoSleep||120;var s=St._first;if((!s||!s._ts)&&Mn.autoSleep&&vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vn.sleep()}}},e})(Bs);bn(Zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var sM=function(e,t,n,r,s,a,o){var l=new cn(this._pt,e,t,0,1,Tp,null,s),c=0,u=0,h,d,p,x,g,_,m,M;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Os(r)),a&&(M=[n,r],a(M,e,t),n=M[0],r=M[1]),d=n.match(Wo)||[];h=Wo.exec(r);)x=h[0],g=r.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),x!==d[u++]&&(_=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:x.charAt(1)==="="?jr(_,x)-_:parseFloat(x)-_,m:p&&p<4?Math.round:0},c=Wo.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Xd.test(r)||m)&&(l.e=0),this._pt=l,l},mu=function(e,t,n,r,s,a,o,l,c,u){At(r)&&(r=r(s||0,e,a));var h=e[t],d=n!=="get"?n:At(h)?c?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=At(h)?c?uM:Ep:gu,x;if(Ut(r)&&(~r.indexOf("random(")&&(r=Os(r)),r.charAt(1)==="="&&(x=jr(d,r)+(Gt(d)||0),(x||x===0)&&(r=x))),!u||d!==r||Pc)return!isNaN(d*r)&&r!==""?(x=new cn(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?fM:bp,0,p),c&&(x.fp=c),o&&x.modifier(o,this,e),this._pt=x):(!h&&!(t in e)&&uu(t,r),sM.call(this,e,t,d,r,p,l||Mn.stringFilter,c))},aM=function(e,t,n,r,s){if(At(e)&&(e=Cs(e,s,t,n,r)),!ii(e)||e.style&&e.nodeType||qt(e)||Gd(e))return Ut(e)?Cs(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Cs(e[o],s,t,n,r);return a},Sp=function(e,t,n,r,s,a){var o,l,c,u;if(_n[e]&&(o=new _n[e]).init(s,o.rawVars?t[e]:aM(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new cn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Vr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ii,Pc,_u=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,p=r.autoRevert,x=e._dur,g=e._startAt,_=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:_,T=e._overwrite==="auto"&&!au,b=e.timeline,E,C,R,F,v,A,U,V,z,Y,te,Z,Q;if(b&&(!d||!s)&&(s="none"),e._ease=ur(s,ns.ease),e._yEase=h?_p(ur(h===!0?s:h,ns.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!r.runBackwards,!b||d&&!r.stagger){if(V=_[0]?lr(_[0]).harness:0,Z=V&&r[V.prop],E=za(r,hu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&x?La:Fy),g._lazy=0),a){if(zi(e._startAt=Rt.set(_,bn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&on(l),startAt:null,delay:0,onUpdate:c&&function(){return Sn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!o&&!p)&&e._startAt.revert(La),o&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&x&&!g){if(t&&(o=!1),R=bn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&on(l),immediateRender:o,stagger:0,parent:m},E),Z&&(R[V.prop]=Z),zi(e._startAt=Rt.set(_,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(La):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&on(l)||l&&!x,C=0;C<_.length;C++){if(v=_[C],U=v._gsap||du(_)[C]._gsap,e._ptLookup[C]=Y={},bc[U.id]&&Ui.length&&Ba(),te=M===_?C:M.indexOf(v),V&&(z=new V).init(v,Z||E,e,te,M)!==!1&&(e._pt=F=new cn(e._pt,v,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(q){Y[q]=F}),z.priority&&(A=1)),!V||Z)for(R in E)_n[R]&&(z=Sp(R,E,e,te,v,M))?z.priority&&(A=1):Y[R]=F=mu.call(e,v,R,"get",E[R],te,M,0,r.stringFilter);e._op&&e._op[C]&&e.kill(v,e._op[C]),T&&e._pt&&(Ii=e,St.killTweensOf(v,Y,e.globalTime(t)),Q=!e.parent,Ii=0),e._pt&&l&&(bc[U.id]=1)}A&&Ap(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,d&&t<=0&&b.render(Dn,!0,!0)},oM=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(u=d[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Pc=1,e.vars[t]="+=0",_u(e,o),Pc=0,l?Ns(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=wt(n)+Gt(h.e)),h.b&&(h.b=u.s+Gt(h.b))},lM=function(e,t){var n=e[0]?lr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=is({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},cM=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(qt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Cs=function(e,t,n,r,s){return At(e)?e.call(t,n,r,s):Ut(e)&&~e.indexOf("random(")?Os(e):e},yp=fu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mp={};ln(yp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Mp[i]=1});var Rt=(function(i){Hd(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:As(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,x=l.keyframes,g=l.defaults,_=l.scrollTrigger,m=l.yoyoEase,M=r.parent||St,T=(qt(n)||Gd(n)?xi(n[0]):"length"in r)?[n]:Ln(n),b,E,C,R,F,v,A,U;if(o._targets=T.length?du(T):Ns("GSAP target "+n+" not found. https://gsap.com",!Mn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,x||d||ya(c)||ya(u)){if(r=o.vars,b=o.timeline=new Zt({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:T}),b.kill(),b.parent=b._dp=ui(o),b._start=0,d||ya(c)||ya(u)){if(R=T.length,A=d&&ap(d),ii(d))for(F in d)~yp.indexOf(F)&&(U||(U={}),U[F]=d[F]);for(E=0;E<R;E++)C=za(r,Mp),C.stagger=0,m&&(C.yoyoEase=m),U&&is(C,U),v=T[E],C.duration=+Cs(c,ui(o),E,v,T),C.delay=(+Cs(u,ui(o),E,v,T)||0)-o._delay,!d&&R===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),b.to(v,C,A?A(E,v,T):0),b._ease=je.none;b.duration()?c=u=0:o.timeline=0}else if(x){As(bn(b.vars.defaults,{ease:"none"})),b._ease=ur(x.ease||r.ease||"none");var V=0,z,Y,te;if(qt(x))x.forEach(function(Z){return b.to(T,Z,">")}),b.duration();else{C={};for(F in x)F==="ease"||F==="easeEach"||cM(F,x[F],C,x.easeEach);for(F in C)for(z=C[F].sort(function(Z,Q){return Z.t-Q.t}),V=0,E=0;E<z.length;E++)Y=z[E],te={ease:Y.e,duration:(Y.t-(E?z[E-1].t:0))/100*c},te[F]=Y.v,b.to(T,te,V),V+=te.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return p===!0&&!au&&(Ii=ui(o),St.killTweensOf(T),Ii=0),Wn(M,ui(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!x&&o._start===vt(M._time)&&on(h)&&zy(ui(o))&&M.data!=="nested")&&(o._tTime=-ut,o.render(Math.max(0,-u)||0)),_&&np(ui(o),_),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ut&&!u?l:r<ut?0:r,d,p,x,g,_,m,M,T,b;if(!c)Vy(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(d=vt(h%g),h===l?(x=this._repeat,d=c):(_=vt(h/g),x=~~_,x&&x===_?(d=c,x--):d>c&&(d=c)),m=this._yoyo&&x&1,m&&(b=this._yEase,d=c-d),_=rs(this._tTime,g),d===o&&!a&&this._initted&&x===_)return this._tTime=h,this;x!==_&&(T&&this._yEase&&gp(T,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(vt(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(ip(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&x!==_))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!o&&h&&!s&&!_&&(Sn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;T&&T.render(r<0?r:T._dur*T._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Tc(this,r,s,a),Sn(this,"onUpdate")),this._repeat&&x!==_&&this.vars.onRepeat&&!s&&this.parent&&Sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Tc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zi(this,1),!s&&!(u&&!o)&&(h||o||m)&&(Sn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){ks||vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||_u(this,c),u=this._ease(c/this._dur),oM(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(so(this,0),this.parent||ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Es(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ii&&Ii.vars.overwrite!==!0)._first||Es(this),this.parent&&a!==this.timeline.totalDuration()&&ss(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Ln(r):o,c=this._ptLookup,u=this._pt,h,d,p,x,g,_,m;if((!s||s==="all")&&ky(o,l))return s==="all"&&(this._pt=0),Es(this);for(h=this._op=this._op||[],s!=="all"&&(Ut(s)&&(g={},ln(s,function(M){return g[M]=1}),s=g),s=lM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(h[m]=s,x=d,p={}):(p=h[m]=h[m]||{},x=s);for(g in x)_=d&&d[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&io(this,_,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Es(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ws(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ws(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return St.killTweensOf(r,s,a)},e})(Bs);bn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(i){Rt[i]=function(){var e=new Zt,t=wc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var gu=function(e,t,n){return e[t]=n},Ep=function(e,t,n){return e[t](n)},uM=function(e,t,n,r){return e[t](r.fp,n)},hM=function(e,t,n){return e.setAttribute(t,n)},xu=function(e,t){return At(e[t])?Ep:ou(e[t])&&e.setAttribute?hM:gu},bp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Tp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},vu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dM=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},pM=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?io(this,t,"_pt"):t.dep||(n=1),t=r;return!n},mM=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Ap=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},cn=(function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||bp,this.d=l||this,this.set=c||gu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=mM,this.m=n,this.mt=s,this.tween=r},i})();ln(fu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return hu[i]=1});En.TweenMax=En.TweenLite=Rt;En.TimelineLite=En.TimelineMax=Zt;St=new Zt({sortChildren:!1,defaults:ns,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mn.stringFilter=mp;var hr=[],Fa={},_M=[],$h=0,gM=0,$o=function(e){return(Fa[e]||_M).map(function(t){return t()})},Dc=function(){var e=Date.now(),t=[];e-$h>2&&($o("matchMediaInit"),hr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Hn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),$o("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),$h=e,$o("matchMedia"))},wp=(function(){function i(t,n){this.selector=n&&Cc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gM++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){At(n)&&(s=r,r=n,n=At);var a=this,o=function(){var c=gt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Cc(s)),gt=a,h=r.apply(a,arguments),At(h)&&a._r.push(h),gt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===At?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=gt;gt=null,n(this),gt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Rt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=hr.length;a--;)hr[a].id===this.id&&hr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),xM=(function(){function i(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ii(n)||(n={matches:n});var a=new wp(0,s||this.scope),o=a.conditions={},l,c,u;gt&&!a.selector&&(a.selector=gt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Hn.matchMedia(n[c]),l&&(hr.indexOf(a)<0&&hr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Dc):l.addEventListener("change",Dc)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Va={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return fp(r)})},timeline:function(e){return new Zt(e)},getTweensOf:function(e,t){return St.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ut(e)&&(e=Ln(e)[0]);var s=lr(e||{}).get,a=n?Qd:Jd;return n==="native"&&(n=""),e&&(t?a((_n[t]&&_n[t].get||s)(e,t,n,r)):function(o,l,c){return a((_n[o]&&_n[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ln(e),e.length>1){var r=e.map(function(u){return hn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=_n[t],o=lr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Vr._pt=0,h.init(e,n?u+n:u,Vr,0,[e]),h.render(1,h),Vr._pt&&vu(1,Vr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=hn.to(e,bn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return St.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ur(e.ease,ns.ease)),Wh(ns,e||{})},config:function(e){return Wh(Mn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!_n[o]&&!En[o]&&Ns(t+" effect requires "+o+" plugin.")}),Xo[t]=function(o,l,c){return n(Ln(o),bn(l||{},s),c)},a&&(Zt.prototype[t]=function(o,l,c){return this.add(Xo[t](o,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){je[e]=ur(t)},parseEase:function(e,t){return arguments.length?ur(e,t):je},getById:function(e){return St.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Zt(e),r,s;for(n.smoothChildTiming=on(e.smoothChildTiming),St.remove(n),n._dp=0,n._time=n._tTime=St._time,r=St._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&Wn(n,r,r._start-r._delay),r=s;return Wn(St,n,0),n},context:function(e,t){return e?new wp(e,t):gt},matchMedia:function(e){return new xM(e)},matchMediaRefresh:function(){return hr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Dc()},addEventListener:function(e,t){var n=Fa[e]||(Fa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fa[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ky,wrapYoyo:Zy,distribute:ap,random:lp,snap:op,normalize:$y,getUnit:Gt,clamp:Xy,splitColor:dp,toArray:Ln,selector:Cc,mapRange:up,pipe:qy,unitize:jy,interpolate:Jy,shuffle:sp},install:qd,effects:Xo,ticker:vn,updateRoot:Zt.updateRoot,plugins:_n,globalTimeline:St,core:{PropTween:cn,globals:jd,Tween:Rt,Timeline:Zt,Animation:Bs,getCache:lr,_removeLinkedListItem:io,reverting:function(){return Bt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return au=e}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Va[i]=Rt[i]});vn.add(Zt.updateRoot);Vr=Va.to({},{duration:0});var vM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},SM=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=vM(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Ko=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ut(s)&&(l={},ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}SM(o,s)}}}},hn=Va.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Bt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ko("roundProps",Rc),Ko("modifiers"),Ko("snap",op))||Va;Rt.version=Zt.version=hn.version="3.14.2";Yd=1;lu()&&as();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;var Kh,Fi,$r,Su,ar,Zh,yu,yM=function(){return typeof window<"u"},vi={},tr=180/Math.PI,Kr=Math.PI/180,Nr=Math.atan2,Jh=1e8,Mu=/([A-Z])/g,MM=/(left|right|width|margin|padding|x)/i,EM=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CM=function(e,t,n){return e.style[t]=n},RM=function(e,t,n){return e.style.setProperty(t,n)},PM=function(e,t,n){return e._gsap[t]=n},DM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},LM=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},IM=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},yt="transform",un=yt+"Origin",FM=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in vi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=hi(r,o)}):this.tfm[e]=a.x?a[e]:hi(r,e),e===un&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(yt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(un,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},Pp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},NM=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Mu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=yu(),(!s||!s.isStart)&&!n[yt]&&(Pp(n),r.zOrigin&&n[un]&&(n[un]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Dp=function(e,t){var n={target:e,props:[],revert:NM,save:FM};return e._gsap||hn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Lp,Ic=function(e,t){var n=Fi.createElementNS?Fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fi.createElement(e);return n&&n.style?n:Fi.createElement(e)},yn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Mu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,os(t)||t,1)||""},Qh="O,Moz,ms,Ms,Webkit".split(","),os=function(e,t,n){var r=t||ar,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Qh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Qh[a]:"")+e},Fc=function(){yM()&&window.document&&(Kh=window,Fi=Kh.document,$r=Fi.documentElement,ar=Ic("div")||{style:{}},Ic("div"),yt=os(yt),un=yt+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lp=!!os("perspective"),yu=hn.core.reverting,Su=1)},ef=function(e){var t=e.ownerSVGElement,n=Ic("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),$r.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),$r.removeChild(n),s},tf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ip=function(e){var t,n;try{t=e.getBBox()}catch{t=ef(e),n=1}return t&&(t.width||t.height)||n||(t=ef(e)),t&&!t.width&&!t.x&&!t.y?{x:+tf(e,["x","cx","x1"])||0,y:+tf(e,["y","cy","y1"])||0,width:0,height:0}:t},Fp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ip(e))},Hi=function(e,t){if(t){var n=e.style,r;t in vi&&t!==un&&(t=yt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Mu,"-$1").toLowerCase())):n.removeAttribute(t)}},Ni=function(e,t,n,r,s,a){var o=new cn(e._pt,t,n,0,1,a?Rp:Cp);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},nf={deg:1,rad:1,turn:1},UM={grid:1,flex:1},Vi=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ar.style,l=MM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",p=r==="%",x,g,_,m;if(r===a||!s||nf[r]||nf[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),m=e.getCTM&&Fp(e),(p||a==="%")&&(vi[t]||~t.indexOf("adius")))return x=m?e.getBBox()[l?"width":"height"]:e[u],wt(p?s/x*h:s/100*x);if(o[l?"width":"height"]=h+(d?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Fi||!g.appendChild)&&(g=Fi.body),_=g._gsap,_&&p&&_.width&&l&&_.time===vn.time&&!_.uncache)return wt(s/_.width*h);if(p&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+r,x=e[u],M?e.style[t]=M:Hi(e,t)}else(p||a==="%")&&!UM[yn(g,"display")]&&(o.position=yn(e,"position")),g===e&&(o.position="static"),g.appendChild(ar),x=ar[u],g.removeChild(ar),o.position="absolute";return l&&p&&(_=lr(g),_.time=vn.time,_.width=g[u]),wt(d?x*s/h:x&&s?h/x*s:0)},hi=function(e,t,n,r){var s;return Su||Fc(),t in qn&&t!=="transform"&&(t=qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),vi[t]&&t!=="transform"?(s=Hs(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wa(yn(e,un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ga[t]&&Ga[t](e,t,n)||yn(e,t)||Kd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Vi(e,t,s,n)+n:s},OM=function(e,t,n,r){if(!n||n==="none"){var s=os(t,e,1),a=s&&yn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=yn(e,"borderTopColor"))}var o=new cn(this._pt,e.style,t,0,1,Tp),l=0,c=0,u,h,d,p,x,g,_,m,M,T,b,E;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=yn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=yn(e,t)||r,g?e.style[t]=g:Hi(e,t)),u=[n,r],mp(u),n=u[0],r=u[1],d=n.match(Hr)||[],E=r.match(Hr)||[],E.length){for(;h=Hr.exec(r);)_=h[0],M=r.substring(l,h.index),x?x=(x+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(x=1),_!==(g=d[c++]||"")&&(p=parseFloat(g)||0,b=g.substr((p+"").length),_.charAt(1)==="="&&(_=jr(p,_)+b),m=parseFloat(_),T=_.substr((m+"").length),l=Hr.lastIndex-T.length,T||(T=T||Mn.units[t]||b,l===r.length&&(r+=T,o.e+=T)),b!==T&&(p=Vi(e,t,g,T)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:m-p,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Rp:Cp;return Xd.test(r)&&(o.e=0),this._pt=o,o},rf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kM=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=rf[n]||n,t[1]=rf[r]||r,t.join(" ")},BM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],vi[o]&&(l=1,o=o==="transformOrigin"?un:yt),Hi(n,o);l&&(Hi(n,yt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Hs(n,1),a.uncache=1,Pp(r)))}},Ga={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new cn(e._pt,t,n,0,0,BM);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},zs=[1,0,0,1,0,0],Np={},Up=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},sf=function(e){var t=yn(e,yt);return Up(t)?zs:t.substr(7).match(Wd).map(wt)},Eu=function(e,t){var n=e._gsap||lr(e),r=e.style,s=sf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?zs:s):(s===zs&&!e.offsetParent&&e!==$r&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,$r.appendChild(e)),s=sf(e),l?r.display=l:Hi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):$r.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nc=function(e,t,n,r,s,a){var o=e._gsap,l=s||Eu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,p=l[0],x=l[1],g=l[2],_=l[3],m=l[4],M=l[5],T=t.split(" "),b=parseFloat(T[0])||0,E=parseFloat(T[1])||0,C,R,F,v;n?l!==zs&&(R=p*_-x*g)&&(F=b*(_/R)+E*(-g/R)+(g*M-_*m)/R,v=b*(-x/R)+E*(p/R)-(p*M-x*m)/R,b=F,E=v):(C=Ip(e),b=C.x+(~T[0].indexOf("%")?b/100*C.width:b),E=C.y+(~(T[1]||T[0]).indexOf("%")?E/100*C.height:E)),r||r!==!1&&o.smooth?(m=b-c,M=E-u,o.xOffset=h+(m*p+M*g)-m,o.yOffset=d+(m*x+M*_)-M):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=E,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[un]="0px 0px",a&&(Ni(a,o,"xOrigin",c,b),Ni(a,o,"yOrigin",u,E),Ni(a,o,"xOffset",h,o.xOffset),Ni(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},Hs=function(e,t){var n=e._gsap||new vp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=yn(e,un)||"0",u,h,d,p,x,g,_,m,M,T,b,E,C,R,F,v,A,U,V,z,Y,te,Z,Q,q,pe,he,fe,Pe,we,He,Te;return u=h=d=g=_=m=M=T=b=0,p=x=1,n.svg=!!(e.getCTM&&Fp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),r.scale=r.rotate=r.translate="none"),R=Eu(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),Nc(e,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,R)),E=n.xOrigin||0,C=n.yOrigin||0,R!==zs&&(U=R[0],V=R[1],z=R[2],Y=R[3],u=te=R[4],h=Z=R[5],R.length===6?(p=Math.sqrt(U*U+V*V),x=Math.sqrt(Y*Y+z*z),g=U||V?Nr(V,U)*tr:0,M=z||Y?Nr(z,Y)*tr+g:0,M&&(x*=Math.abs(Math.cos(M*Kr))),n.svg&&(u-=E-(E*U+C*z),h-=C-(E*V+C*Y))):(Te=R[6],we=R[7],he=R[8],fe=R[9],Pe=R[10],He=R[11],u=R[12],h=R[13],d=R[14],F=Nr(Te,Pe),_=F*tr,F&&(v=Math.cos(-F),A=Math.sin(-F),Q=te*v+he*A,q=Z*v+fe*A,pe=Te*v+Pe*A,he=te*-A+he*v,fe=Z*-A+fe*v,Pe=Te*-A+Pe*v,He=we*-A+He*v,te=Q,Z=q,Te=pe),F=Nr(-z,Pe),m=F*tr,F&&(v=Math.cos(-F),A=Math.sin(-F),Q=U*v-he*A,q=V*v-fe*A,pe=z*v-Pe*A,He=Y*A+He*v,U=Q,V=q,z=pe),F=Nr(V,U),g=F*tr,F&&(v=Math.cos(F),A=Math.sin(F),Q=U*v+V*A,q=te*v+Z*A,V=V*v-U*A,Z=Z*v-te*A,U=Q,te=q),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,m=180-m),p=wt(Math.sqrt(U*U+V*V+z*z)),x=wt(Math.sqrt(Z*Z+Te*Te)),F=Nr(te,Z),M=Math.abs(F)>2e-4?F*tr:0,b=He?1/(He<0?-He:He):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Up(yn(e,yt)),Q&&e.setAttribute("transform",Q))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=wt(p),n.scaleY=wt(x),n.rotation=wt(g)+o,n.rotationX=wt(_)+o,n.rotationY=wt(m)+o,n.skewX=M+o,n.skewY=T+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[un]=Wa(c)),n.xOffset=n.yOffset=0,n.force3D=Mn.force3D,n.renderTransform=n.svg?HM:Lp?Op:zM,n.uncache=0,n},Wa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zo=function(e,t,n){var r=Gt(t);return wt(parseFloat(t)+parseFloat(Vi(e,"x",n+"px",r)))+r},zM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Op(e,t)},Qi="0deg",Ss="0px",er=") ",Op=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,x=n.scaleX,g=n.scaleY,_=n.transformPerspective,m=n.force3D,M=n.target,T=n.zOrigin,b="",E=m==="auto"&&e&&e!==1||m===!0;if(T&&(h!==Qi||u!==Qi)){var C=parseFloat(u)*Kr,R=Math.sin(C),F=Math.cos(C),v;C=parseFloat(h)*Kr,v=Math.cos(C),a=Zo(M,a,R*v*-T),o=Zo(M,o,-Math.sin(C)*-T),l=Zo(M,l,F*v*-T+T)}_!==Ss&&(b+="perspective("+_+er),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(E||a!==Ss||o!==Ss||l!==Ss)&&(b+=l!==Ss||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+er),c!==Qi&&(b+="rotate("+c+er),u!==Qi&&(b+="rotateY("+u+er),h!==Qi&&(b+="rotateX("+h+er),(d!==Qi||p!==Qi)&&(b+="skew("+d+", "+p+er),(x!==1||g!==1)&&(b+="scale("+x+", "+g+er),M.style[yt]=b||"translate(0, 0)"},HM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,x=n.xOrigin,g=n.yOrigin,_=n.xOffset,m=n.yOffset,M=n.forceCSS,T=parseFloat(a),b=parseFloat(o),E,C,R,F,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Kr,c*=Kr,E=Math.cos(l)*h,C=Math.sin(l)*h,R=Math.sin(l-c)*-d,F=Math.cos(l-c)*d,c&&(u*=Kr,v=Math.tan(c-u),v=Math.sqrt(1+v*v),R*=v,F*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),E*=v,C*=v)),E=wt(E),C=wt(C),R=wt(R),F=wt(F)):(E=h,F=d,C=R=0),(T&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=Vi(p,"x",a,"px"),b=Vi(p,"y",o,"px")),(x||g||_||m)&&(T=wt(T+x-(x*E+g*R)+_),b=wt(b+g-(x*C+g*F)+m)),(r||s)&&(v=p.getBBox(),T=wt(T+r/100*v.width),b=wt(b+s/100*v.height)),v="matrix("+E+","+C+","+R+","+F+","+T+","+b+")",p.setAttribute("transform",v),M&&(p.style[yt]=v)},VM=function(e,t,n,r,s){var a=360,o=Ut(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?tr:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Jh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Jh)%a-~~(c/a)*a)),e._pt=d=new cn(e._pt,t,n,r,c,bM),d.e=u,d.u="deg",e._props.push(n),d},af=function(e,t){for(var n in t)e[n]=t[n];return e},GM=function(e,t,n){var r=af({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,p,x;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[yt]=t,o=Hs(n,1),Hi(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],a[yt]=t,o=Hs(n,1),a[yt]=c);for(l in vi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Gt(c),x=Gt(u),h=p!==x?Vi(n,l,c,x):parseFloat(c),d=parseFloat(u),e._pt=new cn(e._pt,o,l,h,d-h,Lc),e._pt.u=x||0,e._props.push(l));af(o,r)};ln("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Ga[e>1?"border"+i:i]=function(o,l,c,u,h){var d,p;if(arguments.length<4)return d=a.map(function(x){return hi(o,x,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},a.forEach(function(x,g){return p[x]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,h)}});var kp={name:"css",register:Fc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,p,x,g,_,m,M,T,b,E,C,R,F,v;Su||Fc(),this.styles=this.styles||Dp(e),F=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(_n[g]&&Sp(g,t,n,r,e,s)))){if(p=typeof u,x=Ga[g],p==="function"&&(u=u.call(n,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Os(u)),x)x(this,e,g,u,n)&&(R=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Oi.lastIndex=0,Oi.test(c)||(_=Gt(c),m=Gt(u),m?_!==m&&(c=Vi(e,g,c,m)+m):_&&(u+=_)),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),F.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Ut(c)&&~c.indexOf("random(")&&(c=Os(c)),Gt(c+"")||c==="auto"||(c+=Mn.units[g]||Gt(hi(e,g))||""),(c+"").charAt(1)==="="&&(c=hi(e,g))):c=hi(e,g),d=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in qn&&(g==="autoAlpha"&&(d===1&&hi(e,"visibility")==="hidden"&&h&&(d=0),F.push("visibility",0,o.visibility),Ni(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=qn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in vi,T){if(this.styles.save(g),v=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=yn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=yn(e,"perspective"),A?e.style.perspective=A:Hi(e,"perspective")}h=parseFloat(u)}if(b||(E=e._gsap,E.renderTransform&&!t.parseTransform||Hs(e,t.parseTransform),C=t.smoothOrigin!==!1&&E.smooth,b=this._pt=new cn(this._pt,o,yt,0,1,E.renderTransform,E,0,-1),b.dep=1),g==="scale")this._pt=new cn(this._pt,E,"scaleY",E.scaleY,(M?jr(E.scaleY,M+h):h)-E.scaleY||0,Lc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){F.push(un,0,o[un]),u=kM(u),E.svg?Nc(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Ni(this,E,"zOrigin",E.zOrigin,m),Ni(this,o,g,Wa(c),Wa(u)));continue}else if(g==="svgOrigin"){Nc(e,u,1,C,0,this);continue}else if(g in Np){VM(this,E,g,d,M?jr(d,M+u):u);continue}else if(g==="smoothOrigin"){Ni(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){GM(this,u,e);continue}}else g in o||(g=os(g)||g);if(T||(h||h===0)&&(d||d===0)&&!EM.test(u)&&g in o)_=(c+"").substr((d+"").length),h||(h=0),m=Gt(u)||(g in Mn.units?Mn.units[g]:_),_!==m&&(d=Vi(e,g,c,m)),this._pt=new cn(this._pt,T?E:o,g,d,(M?jr(d,M+h):h)-d,!T&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?wM:Lc),this._pt.u=m||0,T&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=AM):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=TM);else if(g in o)OM.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,r,s);else if(g!=="parseTransform"){uu(g,u);continue}T||(g in o?F.push(g,0,o[g]):typeof e[g]=="function"?F.push(g,2,e[g]()):F.push(g,1,c||e[g])),a.push(g)}}R&&Ap(this)},render:function(e,t){if(t.tween._time||!yu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hi,aliases:qn,getSetter:function(e,t,n){var r=qn[t];return r&&r.indexOf(",")<0&&(t=r),t in vi&&t!==un&&(e._gsap.x||hi(e,"x"))?n&&Zh===n?t==="scale"?DM:PM:(Zh=n||{})&&(t==="scale"?LM:IM):e.style&&!ou(e.style[t])?CM:~t.indexOf("-")?RM:xu(e,t)},core:{_removeProperty:Hi,_getMatrix:Eu}};hn.utils.checkPrefix=os;hn.core.getStyleSaver=Dp;(function(i,e,t,n){var r=ln(i+","+e+","+t,function(s){vi[s]=1});ln(e,function(s){Mn.units[s]="deg",Np[s]=1}),qn[r[13]]=i+","+e,ln(n,function(s){var a=s.split(":");qn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Mn.units[i]="px"});hn.registerPlugin(kp);var Di=hn.registerPlugin(kp)||hn;Di.core.Tween;class WM{constructor(e,t,n){this.camera=e,this.scene=t,this.controls=n,this.zoomLevel=1,this.isCameraMoving=!1,this.mouseStartX=0,this.mouseStartY=0,this.CAMERA_STATES={1:{pos:{x:10,y:8,z:12},target:{x:0,y:0,z:0}},2:{pos:{x:6,y:5,z:8},target:{x:0,y:.5,z:0}},3:{pos:{x:0,y:2,z:3.5},target:{x:0,y:1,z:-.5}},4:{pos:{x:0,y:1.2,z:.05},target:{x:0,y:1.2,z:-.8}}},this._initEvents()}_initEvents(){window.addEventListener("mousedown",e=>{this.mouseStartX=e.clientX,this.mouseStartY=e.clientY}),window.addEventListener("mouseup",e=>this.handleMouseUp(e)),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.zoomLevel>1&&(this.zoomLevel--,this.updateCamera())})}handleMouseUp(e){if(e.target.closest("#monitor-ui"))return;const t=Math.abs(e.clientX-this.mouseStartX),n=Math.abs(e.clientY-this.mouseStartY);if(t<5&&n<5){const r=new Ue(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),s=new hg;s.setFromCamera(r,this.camera);const a=s.intersectObjects(this.scene.children,!0),o=a[0]?.object.userData.id;this.zoomLevel===1&&a.length>0?this.zoomLevel=2:this.zoomLevel===2&&a.length>0?this.zoomLevel=3:this.zoomLevel===3&&o==="monitor"?this.zoomLevel=4:a.length===0&&this.zoomLevel>1&&this.zoomLevel--,this.updateCamera()}}updateCamera(){this.isCameraMoving=!0;const e=this.CAMERA_STATES[this.zoomLevel];Di.to(this.camera.position,{...e.pos,duration:1.2,ease:"power2.inOut",onComplete:()=>{this.isCameraMoving=!1}}),Di.to(this.controls.target,{...e.target,duration:1.2})}checkMonitorFocus(e){const t=new j(0,1.2,-.74),n=this.camera.position.distanceTo(t),r=new j;this.camera.getWorldDirection(r);const s=r.dot(new j(0,0,1));this.zoomLevel===4&&!this.isCameraMoving&&s<-.98&&n<1?e.showMonitorUI(t,this.camera):e.hideMonitorUI()}}const XM=`---
title: "Hybrid Recommendation System (Collaborative & Content-based Filtering) "
date: "2026-01-30"
thumbnail: "icon-pen"
github_link: "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME"
---
- **Modeling**: A hybrid architecture to resolve the cold-start problem utilizing scikit-learn. Implicit feedback through ALS, NLP & Similarity via TF-IDF, Cosine similarity and Clustering (unsupervised learning)  
- **Engineering**: Efficient preprocessing-pipeline to process CSR/CSC Sparse Matrices (memory and computational cost optimization) and usage of MiniBatchKMeans for performance 
- **Validation**: Model evaluation with, recall @ k, coverage, PCA, Silhouette Score and Calinski-Harabasz Index
- **Tech-Stack**: Python, Scikit-Learn, Scipy, Plotly, Streamlit

#### 🚀 Quick Links
- [GitHub Repository](https://github.com/knanw/YOUR_REPO_NAME)
- [Live Demo (Streamlit)](#)
`,YM=Object.freeze(Object.defineProperty({__proto__:null,default:XM},Symbol.toStringTag,{value:"Module"})),qM=`---
title: "Cloud-Native E-Commerce Engine with Intelligent Price Optimization and UX"
date: "2021-01-20"
thumbnail: "icon-pen"
---
- **Frontend**: UX with Nuxt.js (Vue 3), Vuetify und TypeScript. State Management via Pinia.
- **Backend**: robust cloud-native architecture wit Quarkus (Java), Jakarta EE and Panache. data storage in  MS SQL Server running in docker container.
- **Logic**: implemenation of a complex algorithm for optimal price calculation in shopping basket 
- **Validation & Quality**: backend test coverage with JUnit and Mockito; frontend: TypeScript type safety
- **Tech-Stack**: Backend: Java, Quarkus, Hibernate, MS SQL, Docker, Frontend: Vue 3, Nuxt.js, Vuetify.

#### 🚀 Quick Links
- [GitHub Repository](https://github.com/knanw/shop)
- [Live Demo](#)`,jM=Object.freeze(Object.defineProperty({__proto__:null,default:qM},Symbol.toStringTag,{value:"Module"})),$M=`---
title: "SpeeTato"
date: "2015-06-13"
thumbnail: "icon-docker"
---
SpeeTato is a maniac speedy potato whos only goal is to destroy the world of fast food. He has to evade the arch enemy of every potato: frying pans, cooking pots and ovens.

SpeeTato is implemented using the game engine Unity, a cross-platform game engine. Within a weekend during an hackathon, we created a fully working 2D game that implements several stages and worlds. We won the 3rd price for our fully working solution.

In this project I gained experience with game development, design and associated technologies, including C#/.NET for programming and the Github version control system for DevOps support. Among others working with music, assets and in a team under time pressure.

#### 🚀 Quick Links
- [GitHub Repository](https://github.com/knanw/SpeeTato)`,KM=Object.freeze(Object.defineProperty({__proto__:null,default:$M},Symbol.toStringTag,{value:"Module"})),ZM=`---
title: "Docker & Three.js"
date: "2024-01-20"
thumbnail: "icon-docker"
---
# Das ist mein Projekt
Hier folgt die Beschreibung in Markdown...`,JM=Object.freeze(Object.defineProperty({__proto__:null,default:ZM},Symbol.toStringTag,{value:"Module"}));function Bp(i){return typeof i>"u"||i===null}function QM(i){return typeof i=="object"&&i!==null}function eE(i){return Array.isArray(i)?i:Bp(i)?[]:[i]}function tE(i,e){var t,n,r,s;if(e)for(s=Object.keys(e),t=0,n=s.length;t<n;t+=1)r=s[t],i[r]=e[r];return i}function nE(i,e){var t="",n;for(n=0;n<e;n+=1)t+=i;return t}function iE(i){return i===0&&Number.NEGATIVE_INFINITY===1/i}var rE=Bp,sE=QM,aE=eE,oE=nE,lE=iE,cE=tE,Lt={isNothing:rE,isObject:sE,toArray:aE,repeat:oE,isNegativeZero:lE,extend:cE};function zp(i,e){var t="",n=i.reason||"(unknown reason)";return i.mark?(i.mark.name&&(t+='in "'+i.mark.name+'" '),t+="("+(i.mark.line+1)+":"+(i.mark.column+1)+")",!e&&i.mark.snippet&&(t+=`

`+i.mark.snippet),n+" "+t):n}function Vs(i,e){Error.call(this),this.name="YAMLException",this.reason=i,this.mark=e,this.message=zp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Vs.prototype=Object.create(Error.prototype);Vs.prototype.constructor=Vs;Vs.prototype.toString=function(e){return this.name+": "+zp(this,e)};var Jt=Vs;function Jo(i,e,t,n,r){var s="",a="",o=Math.floor(r/2)-1;return n-e>o&&(s=" ... ",e=n-o+s.length),t-n>o&&(a=" ...",t=n+o-a.length),{str:s+i.slice(e,t).replace(/\t/g,"→")+a,pos:n-e+s.length}}function Qo(i,e){return Lt.repeat(" ",e-i.length)+i}function uE(i,e){if(e=Object.create(e||null),!i.buffer)return null;e.maxLength||(e.maxLength=79),typeof e.indent!="number"&&(e.indent=1),typeof e.linesBefore!="number"&&(e.linesBefore=3),typeof e.linesAfter!="number"&&(e.linesAfter=2);for(var t=/\r?\n|\r|\0/g,n=[0],r=[],s,a=-1;s=t.exec(i.buffer);)r.push(s.index),n.push(s.index+s[0].length),i.position<=s.index&&a<0&&(a=n.length-2);a<0&&(a=n.length-1);var o="",l,c,u=Math.min(i.line+e.linesAfter,r.length).toString().length,h=e.maxLength-(e.indent+u+3);for(l=1;l<=e.linesBefore&&!(a-l<0);l++)c=Jo(i.buffer,n[a-l],r[a-l],i.position-(n[a]-n[a-l]),h),o=Lt.repeat(" ",e.indent)+Qo((i.line-l+1).toString(),u)+" | "+c.str+`
`+o;for(c=Jo(i.buffer,n[a],r[a],i.position,h),o+=Lt.repeat(" ",e.indent)+Qo((i.line+1).toString(),u)+" | "+c.str+`
`,o+=Lt.repeat("-",e.indent+u+3+c.pos)+`^
`,l=1;l<=e.linesAfter&&!(a+l>=r.length);l++)c=Jo(i.buffer,n[a+l],r[a+l],i.position-(n[a]-n[a+l]),h),o+=Lt.repeat(" ",e.indent)+Qo((i.line+l+1).toString(),u)+" | "+c.str+`
`;return o.replace(/\n$/,"")}var hE=uE,fE=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],dE=["scalar","sequence","mapping"];function pE(i){var e={};return i!==null&&Object.keys(i).forEach(function(t){i[t].forEach(function(n){e[String(n)]=t})}),e}function mE(i,e){if(e=e||{},Object.keys(e).forEach(function(t){if(fE.indexOf(t)===-1)throw new Jt('Unknown option "'+t+'" is met in definition of "'+i+'" YAML type.')}),this.options=e,this.tag=i,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=pE(e.styleAliases||null),dE.indexOf(this.kind)===-1)throw new Jt('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}var zt=mE;function of(i,e){var t=[];return i[e].forEach(function(n){var r=t.length;t.forEach(function(s,a){s.tag===n.tag&&s.kind===n.kind&&s.multi===n.multi&&(r=a)}),t[r]=n}),t}function _E(){var i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},e,t;function n(r){r.multi?(i.multi[r.kind].push(r),i.multi.fallback.push(r)):i[r.kind][r.tag]=i.fallback[r.tag]=r}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return i}function Uc(i){return this.extend(i)}Uc.prototype.extend=function(e){var t=[],n=[];if(e instanceof zt)n.push(e);else if(Array.isArray(e))n=n.concat(e);else if(e&&(Array.isArray(e.implicit)||Array.isArray(e.explicit)))e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(n=n.concat(e.explicit));else throw new Jt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(s){if(!(s instanceof zt))throw new Jt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(s.loadKind&&s.loadKind!=="scalar")throw new Jt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(s.multi)throw new Jt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(s){if(!(s instanceof zt))throw new Jt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Uc.prototype);return r.implicit=(this.implicit||[]).concat(t),r.explicit=(this.explicit||[]).concat(n),r.compiledImplicit=of(r,"implicit"),r.compiledExplicit=of(r,"explicit"),r.compiledTypeMap=_E(r.compiledImplicit,r.compiledExplicit),r};var Hp=Uc,Vp=new zt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(i){return i!==null?i:""}}),Gp=new zt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(i){return i!==null?i:[]}}),Wp=new zt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(i){return i!==null?i:{}}}),Xp=new Hp({explicit:[Vp,Gp,Wp]});function gE(i){if(i===null)return!0;var e=i.length;return e===1&&i==="~"||e===4&&(i==="null"||i==="Null"||i==="NULL")}function xE(){return null}function vE(i){return i===null}var Yp=new zt("tag:yaml.org,2002:null",{kind:"scalar",resolve:gE,construct:xE,predicate:vE,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function SE(i){if(i===null)return!1;var e=i.length;return e===4&&(i==="true"||i==="True"||i==="TRUE")||e===5&&(i==="false"||i==="False"||i==="FALSE")}function yE(i){return i==="true"||i==="True"||i==="TRUE"}function ME(i){return Object.prototype.toString.call(i)==="[object Boolean]"}var qp=new zt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:SE,construct:yE,predicate:ME,represent:{lowercase:function(i){return i?"true":"false"},uppercase:function(i){return i?"TRUE":"FALSE"},camelcase:function(i){return i?"True":"False"}},defaultStyle:"lowercase"});function EE(i){return 48<=i&&i<=57||65<=i&&i<=70||97<=i&&i<=102}function bE(i){return 48<=i&&i<=55}function TE(i){return 48<=i&&i<=57}function AE(i){if(i===null)return!1;var e=i.length,t=0,n=!1,r;if(!e)return!1;if(r=i[t],(r==="-"||r==="+")&&(r=i[++t]),r==="0"){if(t+1===e)return!0;if(r=i[++t],r==="b"){for(t++;t<e;t++)if(r=i[t],r!=="_"){if(r!=="0"&&r!=="1")return!1;n=!0}return n&&r!=="_"}if(r==="x"){for(t++;t<e;t++)if(r=i[t],r!=="_"){if(!EE(i.charCodeAt(t)))return!1;n=!0}return n&&r!=="_"}if(r==="o"){for(t++;t<e;t++)if(r=i[t],r!=="_"){if(!bE(i.charCodeAt(t)))return!1;n=!0}return n&&r!=="_"}}if(r==="_")return!1;for(;t<e;t++)if(r=i[t],r!=="_"){if(!TE(i.charCodeAt(t)))return!1;n=!0}return!(!n||r==="_")}function wE(i){var e=i,t=1,n;if(e.indexOf("_")!==-1&&(e=e.replace(/_/g,"")),n=e[0],(n==="-"||n==="+")&&(n==="-"&&(t=-1),e=e.slice(1),n=e[0]),e==="0")return 0;if(n==="0"){if(e[1]==="b")return t*parseInt(e.slice(2),2);if(e[1]==="x")return t*parseInt(e.slice(2),16);if(e[1]==="o")return t*parseInt(e.slice(2),8)}return t*parseInt(e,10)}function CE(i){return Object.prototype.toString.call(i)==="[object Number]"&&i%1===0&&!Lt.isNegativeZero(i)}var jp=new zt("tag:yaml.org,2002:int",{kind:"scalar",resolve:AE,construct:wE,predicate:CE,represent:{binary:function(i){return i>=0?"0b"+i.toString(2):"-0b"+i.toString(2).slice(1)},octal:function(i){return i>=0?"0o"+i.toString(8):"-0o"+i.toString(8).slice(1)},decimal:function(i){return i.toString(10)},hexadecimal:function(i){return i>=0?"0x"+i.toString(16).toUpperCase():"-0x"+i.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),RE=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function PE(i){return!(i===null||!RE.test(i)||i[i.length-1]==="_")}function DE(i){var e,t;return e=i.replace(/_/g,"").toLowerCase(),t=e[0]==="-"?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),e===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:e===".nan"?NaN:t*parseFloat(e,10)}var LE=/^[-+]?[0-9]+e/;function IE(i,e){var t;if(isNaN(i))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===i)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===i)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Lt.isNegativeZero(i))return"-0.0";return t=i.toString(10),LE.test(t)?t.replace("e",".e"):t}function FE(i){return Object.prototype.toString.call(i)==="[object Number]"&&(i%1!==0||Lt.isNegativeZero(i))}var $p=new zt("tag:yaml.org,2002:float",{kind:"scalar",resolve:PE,construct:DE,predicate:FE,represent:IE,defaultStyle:"lowercase"}),Kp=Xp.extend({implicit:[Yp,qp,jp,$p]}),Zp=Kp,Jp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Qp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function NE(i){return i===null?!1:Jp.exec(i)!==null||Qp.exec(i)!==null}function UE(i){var e,t,n,r,s,a,o,l=0,c=null,u,h,d;if(e=Jp.exec(i),e===null&&(e=Qp.exec(i)),e===null)throw new Error("Date resolve error");if(t=+e[1],n=+e[2]-1,r=+e[3],!e[4])return new Date(Date.UTC(t,n,r));if(s=+e[4],a=+e[5],o=+e[6],e[7]){for(l=e[7].slice(0,3);l.length<3;)l+="0";l=+l}return e[9]&&(u=+e[10],h=+(e[11]||0),c=(u*60+h)*6e4,e[9]==="-"&&(c=-c)),d=new Date(Date.UTC(t,n,r,s,a,o,l)),c&&d.setTime(d.getTime()-c),d}function OE(i){return i.toISOString()}var em=new zt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:NE,construct:UE,instanceOf:Date,represent:OE});function kE(i){return i==="<<"||i===null}var tm=new zt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:kE}),bu=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function BE(i){if(i===null)return!1;var e,t,n=0,r=i.length,s=bu;for(t=0;t<r;t++)if(e=s.indexOf(i.charAt(t)),!(e>64)){if(e<0)return!1;n+=6}return n%8===0}function zE(i){var e,t,n=i.replace(/[\r\n=]/g,""),r=n.length,s=bu,a=0,o=[];for(e=0;e<r;e++)e%4===0&&e&&(o.push(a>>16&255),o.push(a>>8&255),o.push(a&255)),a=a<<6|s.indexOf(n.charAt(e));return t=r%4*6,t===0?(o.push(a>>16&255),o.push(a>>8&255),o.push(a&255)):t===18?(o.push(a>>10&255),o.push(a>>2&255)):t===12&&o.push(a>>4&255),new Uint8Array(o)}function HE(i){var e="",t=0,n,r,s=i.length,a=bu;for(n=0;n<s;n++)n%3===0&&n&&(e+=a[t>>18&63],e+=a[t>>12&63],e+=a[t>>6&63],e+=a[t&63]),t=(t<<8)+i[n];return r=s%3,r===0?(e+=a[t>>18&63],e+=a[t>>12&63],e+=a[t>>6&63],e+=a[t&63]):r===2?(e+=a[t>>10&63],e+=a[t>>4&63],e+=a[t<<2&63],e+=a[64]):r===1&&(e+=a[t>>2&63],e+=a[t<<4&63],e+=a[64],e+=a[64]),e}function VE(i){return Object.prototype.toString.call(i)==="[object Uint8Array]"}var nm=new zt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:BE,construct:zE,predicate:VE,represent:HE}),GE=Object.prototype.hasOwnProperty,WE=Object.prototype.toString;function XE(i){if(i===null)return!0;var e=[],t,n,r,s,a,o=i;for(t=0,n=o.length;t<n;t+=1){if(r=o[t],a=!1,WE.call(r)!=="[object Object]")return!1;for(s in r)if(GE.call(r,s))if(!a)a=!0;else return!1;if(!a)return!1;if(e.indexOf(s)===-1)e.push(s);else return!1}return!0}function YE(i){return i!==null?i:[]}var im=new zt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:XE,construct:YE}),qE=Object.prototype.toString;function jE(i){if(i===null)return!0;var e,t,n,r,s,a=i;for(s=new Array(a.length),e=0,t=a.length;e<t;e+=1){if(n=a[e],qE.call(n)!=="[object Object]"||(r=Object.keys(n),r.length!==1))return!1;s[e]=[r[0],n[r[0]]]}return!0}function $E(i){if(i===null)return[];var e,t,n,r,s,a=i;for(s=new Array(a.length),e=0,t=a.length;e<t;e+=1)n=a[e],r=Object.keys(n),s[e]=[r[0],n[r[0]]];return s}var rm=new zt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:jE,construct:$E}),KE=Object.prototype.hasOwnProperty;function ZE(i){if(i===null)return!0;var e,t=i;for(e in t)if(KE.call(t,e)&&t[e]!==null)return!1;return!0}function JE(i){return i!==null?i:{}}var sm=new zt("tag:yaml.org,2002:set",{kind:"mapping",resolve:ZE,construct:JE}),Tu=Zp.extend({implicit:[em,tm],explicit:[nm,im,rm,sm]}),Gi=Object.prototype.hasOwnProperty,Xa=1,am=2,om=3,Ya=4,el=1,QE=2,lf=3,eb=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,tb=/[\x85\u2028\u2029]/,nb=/[,\[\]\{\}]/,lm=/^(?:!|!!|![a-z\-]+!)$/i,cm=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function cf(i){return Object.prototype.toString.call(i)}function Qn(i){return i===10||i===13}function fr(i){return i===9||i===32}function sn(i){return i===9||i===32||i===10||i===13}function Gr(i){return i===44||i===91||i===93||i===123||i===125}function ib(i){var e;return 48<=i&&i<=57?i-48:(e=i|32,97<=e&&e<=102?e-97+10:-1)}function rb(i){return i===120?2:i===117?4:i===85?8:0}function sb(i){return 48<=i&&i<=57?i-48:-1}function uf(i){return i===48?"\0":i===97?"\x07":i===98?"\b":i===116||i===9?"	":i===110?`
`:i===118?"\v":i===102?"\f":i===114?"\r":i===101?"\x1B":i===32?" ":i===34?'"':i===47?"/":i===92?"\\":i===78?"":i===95?" ":i===76?"\u2028":i===80?"\u2029":""}function ab(i){return i<=65535?String.fromCharCode(i):String.fromCharCode((i-65536>>10)+55296,(i-65536&1023)+56320)}function um(i,e,t){e==="__proto__"?Object.defineProperty(i,e,{configurable:!0,enumerable:!0,writable:!0,value:t}):i[e]=t}var hm=new Array(256),fm=new Array(256);for(var Ur=0;Ur<256;Ur++)hm[Ur]=uf(Ur)?1:0,fm[Ur]=uf(Ur);function ob(i,e){this.input=i,this.filename=e.filename||null,this.schema=e.schema||Tu,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=i.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function dm(i,e){var t={name:i.filename,buffer:i.input.slice(0,-1),position:i.position,line:i.line,column:i.position-i.lineStart};return t.snippet=hE(t),new Jt(e,t)}function Ce(i,e){throw dm(i,e)}function qa(i,e){i.onWarning&&i.onWarning.call(null,dm(i,e))}var hf={YAML:function(e,t,n){var r,s,a;e.version!==null&&Ce(e,"duplication of %YAML directive"),n.length!==1&&Ce(e,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),r===null&&Ce(e,"ill-formed argument of the YAML directive"),s=parseInt(r[1],10),a=parseInt(r[2],10),s!==1&&Ce(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=a<2,a!==1&&a!==2&&qa(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var r,s;n.length!==2&&Ce(e,"TAG directive accepts exactly two arguments"),r=n[0],s=n[1],lm.test(r)||Ce(e,"ill-formed tag handle (first argument) of the TAG directive"),Gi.call(e.tagMap,r)&&Ce(e,'there is a previously declared suffix for "'+r+'" tag handle'),cm.test(s)||Ce(e,"ill-formed tag prefix (second argument) of the TAG directive");try{s=decodeURIComponent(s)}catch{Ce(e,"tag prefix is malformed: "+s)}e.tagMap[r]=s}};function ki(i,e,t,n){var r,s,a,o;if(e<t){if(o=i.input.slice(e,t),n)for(r=0,s=o.length;r<s;r+=1)a=o.charCodeAt(r),a===9||32<=a&&a<=1114111||Ce(i,"expected valid JSON character");else eb.test(o)&&Ce(i,"the stream contains non-printable characters");i.result+=o}}function ff(i,e,t,n){var r,s,a,o;for(Lt.isObject(t)||Ce(i,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(t),a=0,o=r.length;a<o;a+=1)s=r[a],Gi.call(e,s)||(um(e,s,t[s]),n[s]=!0)}function Wr(i,e,t,n,r,s,a,o,l){var c,u;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),c=0,u=r.length;c<u;c+=1)Array.isArray(r[c])&&Ce(i,"nested arrays are not supported inside keys"),typeof r=="object"&&cf(r[c])==="[object Object]"&&(r[c]="[object Object]");if(typeof r=="object"&&cf(r)==="[object Object]"&&(r="[object Object]"),r=String(r),e===null&&(e={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(s))for(c=0,u=s.length;c<u;c+=1)ff(i,e,s[c],t);else ff(i,e,s,t);else!i.json&&!Gi.call(t,r)&&Gi.call(e,r)&&(i.line=a||i.line,i.lineStart=o||i.lineStart,i.position=l||i.position,Ce(i,"duplicated mapping key")),um(e,r,s),delete t[r];return e}function Au(i){var e;e=i.input.charCodeAt(i.position),e===10?i.position++:e===13?(i.position++,i.input.charCodeAt(i.position)===10&&i.position++):Ce(i,"a line break is expected"),i.line+=1,i.lineStart=i.position,i.firstTabInLine=-1}function Pt(i,e,t){for(var n=0,r=i.input.charCodeAt(i.position);r!==0;){for(;fr(r);)r===9&&i.firstTabInLine===-1&&(i.firstTabInLine=i.position),r=i.input.charCodeAt(++i.position);if(e&&r===35)do r=i.input.charCodeAt(++i.position);while(r!==10&&r!==13&&r!==0);if(Qn(r))for(Au(i),r=i.input.charCodeAt(i.position),n++,i.lineIndent=0;r===32;)i.lineIndent++,r=i.input.charCodeAt(++i.position);else break}return t!==-1&&n!==0&&i.lineIndent<t&&qa(i,"deficient indentation"),n}function ao(i){var e=i.position,t;return t=i.input.charCodeAt(e),!!((t===45||t===46)&&t===i.input.charCodeAt(e+1)&&t===i.input.charCodeAt(e+2)&&(e+=3,t=i.input.charCodeAt(e),t===0||sn(t)))}function wu(i,e){e===1?i.result+=" ":e>1&&(i.result+=Lt.repeat(`
`,e-1))}function lb(i,e,t){var n,r,s,a,o,l,c,u,h=i.kind,d=i.result,p;if(p=i.input.charCodeAt(i.position),sn(p)||Gr(p)||p===35||p===38||p===42||p===33||p===124||p===62||p===39||p===34||p===37||p===64||p===96||(p===63||p===45)&&(r=i.input.charCodeAt(i.position+1),sn(r)||t&&Gr(r)))return!1;for(i.kind="scalar",i.result="",s=a=i.position,o=!1;p!==0;){if(p===58){if(r=i.input.charCodeAt(i.position+1),sn(r)||t&&Gr(r))break}else if(p===35){if(n=i.input.charCodeAt(i.position-1),sn(n))break}else{if(i.position===i.lineStart&&ao(i)||t&&Gr(p))break;if(Qn(p))if(l=i.line,c=i.lineStart,u=i.lineIndent,Pt(i,!1,-1),i.lineIndent>=e){o=!0,p=i.input.charCodeAt(i.position);continue}else{i.position=a,i.line=l,i.lineStart=c,i.lineIndent=u;break}}o&&(ki(i,s,a,!1),wu(i,i.line-l),s=a=i.position,o=!1),fr(p)||(a=i.position+1),p=i.input.charCodeAt(++i.position)}return ki(i,s,a,!1),i.result?!0:(i.kind=h,i.result=d,!1)}function cb(i,e){var t,n,r;if(t=i.input.charCodeAt(i.position),t!==39)return!1;for(i.kind="scalar",i.result="",i.position++,n=r=i.position;(t=i.input.charCodeAt(i.position))!==0;)if(t===39)if(ki(i,n,i.position,!0),t=i.input.charCodeAt(++i.position),t===39)n=i.position,i.position++,r=i.position;else return!0;else Qn(t)?(ki(i,n,r,!0),wu(i,Pt(i,!1,e)),n=r=i.position):i.position===i.lineStart&&ao(i)?Ce(i,"unexpected end of the document within a single quoted scalar"):(i.position++,r=i.position);Ce(i,"unexpected end of the stream within a single quoted scalar")}function ub(i,e){var t,n,r,s,a,o;if(o=i.input.charCodeAt(i.position),o!==34)return!1;for(i.kind="scalar",i.result="",i.position++,t=n=i.position;(o=i.input.charCodeAt(i.position))!==0;){if(o===34)return ki(i,t,i.position,!0),i.position++,!0;if(o===92){if(ki(i,t,i.position,!0),o=i.input.charCodeAt(++i.position),Qn(o))Pt(i,!1,e);else if(o<256&&hm[o])i.result+=fm[o],i.position++;else if((a=rb(o))>0){for(r=a,s=0;r>0;r--)o=i.input.charCodeAt(++i.position),(a=ib(o))>=0?s=(s<<4)+a:Ce(i,"expected hexadecimal character");i.result+=ab(s),i.position++}else Ce(i,"unknown escape sequence");t=n=i.position}else Qn(o)?(ki(i,t,n,!0),wu(i,Pt(i,!1,e)),t=n=i.position):i.position===i.lineStart&&ao(i)?Ce(i,"unexpected end of the document within a double quoted scalar"):(i.position++,n=i.position)}Ce(i,"unexpected end of the stream within a double quoted scalar")}function hb(i,e){var t=!0,n,r,s,a=i.tag,o,l=i.anchor,c,u,h,d,p,x=Object.create(null),g,_,m,M;if(M=i.input.charCodeAt(i.position),M===91)u=93,p=!1,o=[];else if(M===123)u=125,p=!0,o={};else return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=o),M=i.input.charCodeAt(++i.position);M!==0;){if(Pt(i,!0,e),M=i.input.charCodeAt(i.position),M===u)return i.position++,i.tag=a,i.anchor=l,i.kind=p?"mapping":"sequence",i.result=o,!0;t?M===44&&Ce(i,"expected the node content, but found ','"):Ce(i,"missed comma between flow collection entries"),_=g=m=null,h=d=!1,M===63&&(c=i.input.charCodeAt(i.position+1),sn(c)&&(h=d=!0,i.position++,Pt(i,!0,e))),n=i.line,r=i.lineStart,s=i.position,ls(i,e,Xa,!1,!0),_=i.tag,g=i.result,Pt(i,!0,e),M=i.input.charCodeAt(i.position),(d||i.line===n)&&M===58&&(h=!0,M=i.input.charCodeAt(++i.position),Pt(i,!0,e),ls(i,e,Xa,!1,!0),m=i.result),p?Wr(i,o,x,_,g,m,n,r,s):h?o.push(Wr(i,null,x,_,g,m,n,r,s)):o.push(g),Pt(i,!0,e),M=i.input.charCodeAt(i.position),M===44?(t=!0,M=i.input.charCodeAt(++i.position)):t=!1}Ce(i,"unexpected end of the stream within a flow collection")}function fb(i,e){var t,n,r=el,s=!1,a=!1,o=e,l=0,c=!1,u,h;if(h=i.input.charCodeAt(i.position),h===124)n=!1;else if(h===62)n=!0;else return!1;for(i.kind="scalar",i.result="";h!==0;)if(h=i.input.charCodeAt(++i.position),h===43||h===45)el===r?r=h===43?lf:QE:Ce(i,"repeat of a chomping mode identifier");else if((u=sb(h))>=0)u===0?Ce(i,"bad explicit indentation width of a block scalar; it cannot be less than one"):a?Ce(i,"repeat of an indentation width identifier"):(o=e+u-1,a=!0);else break;if(fr(h)){do h=i.input.charCodeAt(++i.position);while(fr(h));if(h===35)do h=i.input.charCodeAt(++i.position);while(!Qn(h)&&h!==0)}for(;h!==0;){for(Au(i),i.lineIndent=0,h=i.input.charCodeAt(i.position);(!a||i.lineIndent<o)&&h===32;)i.lineIndent++,h=i.input.charCodeAt(++i.position);if(!a&&i.lineIndent>o&&(o=i.lineIndent),Qn(h)){l++;continue}if(i.lineIndent<o){r===lf?i.result+=Lt.repeat(`
`,s?1+l:l):r===el&&s&&(i.result+=`
`);break}for(n?fr(h)?(c=!0,i.result+=Lt.repeat(`
`,s?1+l:l)):c?(c=!1,i.result+=Lt.repeat(`
`,l+1)):l===0?s&&(i.result+=" "):i.result+=Lt.repeat(`
`,l):i.result+=Lt.repeat(`
`,s?1+l:l),s=!0,a=!0,l=0,t=i.position;!Qn(h)&&h!==0;)h=i.input.charCodeAt(++i.position);ki(i,t,i.position,!1)}return!0}function df(i,e){var t,n=i.tag,r=i.anchor,s=[],a,o=!1,l;if(i.firstTabInLine!==-1)return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=s),l=i.input.charCodeAt(i.position);l!==0&&(i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,Ce(i,"tab characters must not be used in indentation")),!(l!==45||(a=i.input.charCodeAt(i.position+1),!sn(a))));){if(o=!0,i.position++,Pt(i,!0,-1)&&i.lineIndent<=e){s.push(null),l=i.input.charCodeAt(i.position);continue}if(t=i.line,ls(i,e,om,!1,!0),s.push(i.result),Pt(i,!0,-1),l=i.input.charCodeAt(i.position),(i.line===t||i.lineIndent>e)&&l!==0)Ce(i,"bad indentation of a sequence entry");else if(i.lineIndent<e)break}return o?(i.tag=n,i.anchor=r,i.kind="sequence",i.result=s,!0):!1}function db(i,e,t){var n,r,s,a,o,l,c=i.tag,u=i.anchor,h={},d=Object.create(null),p=null,x=null,g=null,_=!1,m=!1,M;if(i.firstTabInLine!==-1)return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=h),M=i.input.charCodeAt(i.position);M!==0;){if(!_&&i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,Ce(i,"tab characters must not be used in indentation")),n=i.input.charCodeAt(i.position+1),s=i.line,(M===63||M===58)&&sn(n))M===63?(_&&(Wr(i,h,d,p,x,null,a,o,l),p=x=g=null),m=!0,_=!0,r=!0):_?(_=!1,r=!0):Ce(i,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),i.position+=1,M=n;else{if(a=i.line,o=i.lineStart,l=i.position,!ls(i,t,am,!1,!0))break;if(i.line===s){for(M=i.input.charCodeAt(i.position);fr(M);)M=i.input.charCodeAt(++i.position);if(M===58)M=i.input.charCodeAt(++i.position),sn(M)||Ce(i,"a whitespace character is expected after the key-value separator within a block mapping"),_&&(Wr(i,h,d,p,x,null,a,o,l),p=x=g=null),m=!0,_=!1,r=!1,p=i.tag,x=i.result;else if(m)Ce(i,"can not read an implicit mapping pair; a colon is missed");else return i.tag=c,i.anchor=u,!0}else if(m)Ce(i,"can not read a block mapping entry; a multiline key may not be an implicit key");else return i.tag=c,i.anchor=u,!0}if((i.line===s||i.lineIndent>e)&&(_&&(a=i.line,o=i.lineStart,l=i.position),ls(i,e,Ya,!0,r)&&(_?x=i.result:g=i.result),_||(Wr(i,h,d,p,x,g,a,o,l),p=x=g=null),Pt(i,!0,-1),M=i.input.charCodeAt(i.position)),(i.line===s||i.lineIndent>e)&&M!==0)Ce(i,"bad indentation of a mapping entry");else if(i.lineIndent<e)break}return _&&Wr(i,h,d,p,x,null,a,o,l),m&&(i.tag=c,i.anchor=u,i.kind="mapping",i.result=h),m}function pb(i){var e,t=!1,n=!1,r,s,a;if(a=i.input.charCodeAt(i.position),a!==33)return!1;if(i.tag!==null&&Ce(i,"duplication of a tag property"),a=i.input.charCodeAt(++i.position),a===60?(t=!0,a=i.input.charCodeAt(++i.position)):a===33?(n=!0,r="!!",a=i.input.charCodeAt(++i.position)):r="!",e=i.position,t){do a=i.input.charCodeAt(++i.position);while(a!==0&&a!==62);i.position<i.length?(s=i.input.slice(e,i.position),a=i.input.charCodeAt(++i.position)):Ce(i,"unexpected end of the stream within a verbatim tag")}else{for(;a!==0&&!sn(a);)a===33&&(n?Ce(i,"tag suffix cannot contain exclamation marks"):(r=i.input.slice(e-1,i.position+1),lm.test(r)||Ce(i,"named tag handle cannot contain such characters"),n=!0,e=i.position+1)),a=i.input.charCodeAt(++i.position);s=i.input.slice(e,i.position),nb.test(s)&&Ce(i,"tag suffix cannot contain flow indicator characters")}s&&!cm.test(s)&&Ce(i,"tag name cannot contain such characters: "+s);try{s=decodeURIComponent(s)}catch{Ce(i,"tag name is malformed: "+s)}return t?i.tag=s:Gi.call(i.tagMap,r)?i.tag=i.tagMap[r]+s:r==="!"?i.tag="!"+s:r==="!!"?i.tag="tag:yaml.org,2002:"+s:Ce(i,'undeclared tag handle "'+r+'"'),!0}function mb(i){var e,t;if(t=i.input.charCodeAt(i.position),t!==38)return!1;for(i.anchor!==null&&Ce(i,"duplication of an anchor property"),t=i.input.charCodeAt(++i.position),e=i.position;t!==0&&!sn(t)&&!Gr(t);)t=i.input.charCodeAt(++i.position);return i.position===e&&Ce(i,"name of an anchor node must contain at least one character"),i.anchor=i.input.slice(e,i.position),!0}function _b(i){var e,t,n;if(n=i.input.charCodeAt(i.position),n!==42)return!1;for(n=i.input.charCodeAt(++i.position),e=i.position;n!==0&&!sn(n)&&!Gr(n);)n=i.input.charCodeAt(++i.position);return i.position===e&&Ce(i,"name of an alias node must contain at least one character"),t=i.input.slice(e,i.position),Gi.call(i.anchorMap,t)||Ce(i,'unidentified alias "'+t+'"'),i.result=i.anchorMap[t],Pt(i,!0,-1),!0}function ls(i,e,t,n,r){var s,a,o,l=1,c=!1,u=!1,h,d,p,x,g,_;if(i.listener!==null&&i.listener("open",i),i.tag=null,i.anchor=null,i.kind=null,i.result=null,s=a=o=Ya===t||om===t,n&&Pt(i,!0,-1)&&(c=!0,i.lineIndent>e?l=1:i.lineIndent===e?l=0:i.lineIndent<e&&(l=-1)),l===1)for(;pb(i)||mb(i);)Pt(i,!0,-1)?(c=!0,o=s,i.lineIndent>e?l=1:i.lineIndent===e?l=0:i.lineIndent<e&&(l=-1)):o=!1;if(o&&(o=c||r),(l===1||Ya===t)&&(Xa===t||am===t?g=e:g=e+1,_=i.position-i.lineStart,l===1?o&&(df(i,_)||db(i,_,g))||hb(i,g)?u=!0:(a&&fb(i,g)||cb(i,g)||ub(i,g)?u=!0:_b(i)?(u=!0,(i.tag!==null||i.anchor!==null)&&Ce(i,"alias node should not have any properties")):lb(i,g,Xa===t)&&(u=!0,i.tag===null&&(i.tag="?")),i.anchor!==null&&(i.anchorMap[i.anchor]=i.result)):l===0&&(u=o&&df(i,_))),i.tag===null)i.anchor!==null&&(i.anchorMap[i.anchor]=i.result);else if(i.tag==="?"){for(i.result!==null&&i.kind!=="scalar"&&Ce(i,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+i.kind+'"'),h=0,d=i.implicitTypes.length;h<d;h+=1)if(x=i.implicitTypes[h],x.resolve(i.result)){i.result=x.construct(i.result),i.tag=x.tag,i.anchor!==null&&(i.anchorMap[i.anchor]=i.result);break}}else if(i.tag!=="!"){if(Gi.call(i.typeMap[i.kind||"fallback"],i.tag))x=i.typeMap[i.kind||"fallback"][i.tag];else for(x=null,p=i.typeMap.multi[i.kind||"fallback"],h=0,d=p.length;h<d;h+=1)if(i.tag.slice(0,p[h].tag.length)===p[h].tag){x=p[h];break}x||Ce(i,"unknown tag !<"+i.tag+">"),i.result!==null&&x.kind!==i.kind&&Ce(i,"unacceptable node kind for !<"+i.tag+'> tag; it should be "'+x.kind+'", not "'+i.kind+'"'),x.resolve(i.result,i.tag)?(i.result=x.construct(i.result,i.tag),i.anchor!==null&&(i.anchorMap[i.anchor]=i.result)):Ce(i,"cannot resolve a node with !<"+i.tag+"> explicit tag")}return i.listener!==null&&i.listener("close",i),i.tag!==null||i.anchor!==null||u}function gb(i){var e=i.position,t,n,r,s=!1,a;for(i.version=null,i.checkLineBreaks=i.legacy,i.tagMap=Object.create(null),i.anchorMap=Object.create(null);(a=i.input.charCodeAt(i.position))!==0&&(Pt(i,!0,-1),a=i.input.charCodeAt(i.position),!(i.lineIndent>0||a!==37));){for(s=!0,a=i.input.charCodeAt(++i.position),t=i.position;a!==0&&!sn(a);)a=i.input.charCodeAt(++i.position);for(n=i.input.slice(t,i.position),r=[],n.length<1&&Ce(i,"directive name must not be less than one character in length");a!==0;){for(;fr(a);)a=i.input.charCodeAt(++i.position);if(a===35){do a=i.input.charCodeAt(++i.position);while(a!==0&&!Qn(a));break}if(Qn(a))break;for(t=i.position;a!==0&&!sn(a);)a=i.input.charCodeAt(++i.position);r.push(i.input.slice(t,i.position))}a!==0&&Au(i),Gi.call(hf,n)?hf[n](i,n,r):qa(i,'unknown document directive "'+n+'"')}if(Pt(i,!0,-1),i.lineIndent===0&&i.input.charCodeAt(i.position)===45&&i.input.charCodeAt(i.position+1)===45&&i.input.charCodeAt(i.position+2)===45?(i.position+=3,Pt(i,!0,-1)):s&&Ce(i,"directives end mark is expected"),ls(i,i.lineIndent-1,Ya,!1,!0),Pt(i,!0,-1),i.checkLineBreaks&&tb.test(i.input.slice(e,i.position))&&qa(i,"non-ASCII line breaks are interpreted as content"),i.documents.push(i.result),i.position===i.lineStart&&ao(i)){i.input.charCodeAt(i.position)===46&&(i.position+=3,Pt(i,!0,-1));return}if(i.position<i.length-1)Ce(i,"end of the stream or a document separator is expected");else return}function pm(i,e){i=String(i),e=e||{},i.length!==0&&(i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i.charCodeAt(0)===65279&&(i=i.slice(1)));var t=new ob(i,e),n=i.indexOf("\0");for(n!==-1&&(t.position=n,Ce(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)gb(t);return t.documents}function xb(i,e,t){e!==null&&typeof e=="object"&&typeof t>"u"&&(t=e,e=null);var n=pm(i,t);if(typeof e!="function")return n;for(var r=0,s=n.length;r<s;r+=1)e(n[r])}function vb(i,e){var t=pm(i,e);if(t.length!==0){if(t.length===1)return t[0];throw new Jt("expected a single document in the stream, but found more")}}var Sb=xb,yb=vb,mm={loadAll:Sb,load:yb},_m=Object.prototype.toString,gm=Object.prototype.hasOwnProperty,Cu=65279,Mb=9,Gs=10,Eb=13,bb=32,Tb=33,Ab=34,Oc=35,wb=37,Cb=38,Rb=39,Pb=42,xm=44,Db=45,ja=58,Lb=61,Ib=62,Fb=63,Nb=64,vm=91,Sm=93,Ub=96,ym=123,Ob=124,Mm=125,jt={};jt[0]="\\0";jt[7]="\\a";jt[8]="\\b";jt[9]="\\t";jt[10]="\\n";jt[11]="\\v";jt[12]="\\f";jt[13]="\\r";jt[27]="\\e";jt[34]='\\"';jt[92]="\\\\";jt[133]="\\N";jt[160]="\\_";jt[8232]="\\L";jt[8233]="\\P";var kb=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Bb=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function zb(i,e){var t,n,r,s,a,o,l;if(e===null)return{};for(t={},n=Object.keys(e),r=0,s=n.length;r<s;r+=1)a=n[r],o=String(e[a]),a.slice(0,2)==="!!"&&(a="tag:yaml.org,2002:"+a.slice(2)),l=i.compiledTypeMap.fallback[a],l&&gm.call(l.styleAliases,o)&&(o=l.styleAliases[o]),t[a]=o;return t}function Hb(i){var e,t,n;if(e=i.toString(16).toUpperCase(),i<=255)t="x",n=2;else if(i<=65535)t="u",n=4;else if(i<=4294967295)t="U",n=8;else throw new Jt("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+Lt.repeat("0",n-e.length)+e}var Vb=1,Ws=2;function Gb(i){this.schema=i.schema||Tu,this.indent=Math.max(1,i.indent||2),this.noArrayIndent=i.noArrayIndent||!1,this.skipInvalid=i.skipInvalid||!1,this.flowLevel=Lt.isNothing(i.flowLevel)?-1:i.flowLevel,this.styleMap=zb(this.schema,i.styles||null),this.sortKeys=i.sortKeys||!1,this.lineWidth=i.lineWidth||80,this.noRefs=i.noRefs||!1,this.noCompatMode=i.noCompatMode||!1,this.condenseFlow=i.condenseFlow||!1,this.quotingType=i.quotingType==='"'?Ws:Vb,this.forceQuotes=i.forceQuotes||!1,this.replacer=typeof i.replacer=="function"?i.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function pf(i,e){for(var t=Lt.repeat(" ",e),n=0,r=-1,s="",a,o=i.length;n<o;)r=i.indexOf(`
`,n),r===-1?(a=i.slice(n),n=o):(a=i.slice(n,r+1),n=r+1),a.length&&a!==`
`&&(s+=t),s+=a;return s}function kc(i,e){return`
`+Lt.repeat(" ",i.indent*e)}function Wb(i,e){var t,n,r;for(t=0,n=i.implicitTypes.length;t<n;t+=1)if(r=i.implicitTypes[t],r.resolve(e))return!0;return!1}function $a(i){return i===bb||i===Mb}function Xs(i){return 32<=i&&i<=126||161<=i&&i<=55295&&i!==8232&&i!==8233||57344<=i&&i<=65533&&i!==Cu||65536<=i&&i<=1114111}function mf(i){return Xs(i)&&i!==Cu&&i!==Eb&&i!==Gs}function _f(i,e,t){var n=mf(i),r=n&&!$a(i);return(t?n:n&&i!==xm&&i!==vm&&i!==Sm&&i!==ym&&i!==Mm)&&i!==Oc&&!(e===ja&&!r)||mf(e)&&!$a(e)&&i===Oc||e===ja&&r}function Xb(i){return Xs(i)&&i!==Cu&&!$a(i)&&i!==Db&&i!==Fb&&i!==ja&&i!==xm&&i!==vm&&i!==Sm&&i!==ym&&i!==Mm&&i!==Oc&&i!==Cb&&i!==Pb&&i!==Tb&&i!==Ob&&i!==Lb&&i!==Ib&&i!==Rb&&i!==Ab&&i!==wb&&i!==Nb&&i!==Ub}function Yb(i){return!$a(i)&&i!==ja}function Ts(i,e){var t=i.charCodeAt(e),n;return t>=55296&&t<=56319&&e+1<i.length&&(n=i.charCodeAt(e+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function Em(i){var e=/^\n* /;return e.test(i)}var bm=1,Bc=2,Tm=3,Am=4,kr=5;function qb(i,e,t,n,r,s,a,o){var l,c=0,u=null,h=!1,d=!1,p=n!==-1,x=-1,g=Xb(Ts(i,0))&&Yb(Ts(i,i.length-1));if(e||a)for(l=0;l<i.length;c>=65536?l+=2:l++){if(c=Ts(i,l),!Xs(c))return kr;g=g&&_f(c,u,o),u=c}else{for(l=0;l<i.length;c>=65536?l+=2:l++){if(c=Ts(i,l),c===Gs)h=!0,p&&(d=d||l-x-1>n&&i[x+1]!==" ",x=l);else if(!Xs(c))return kr;g=g&&_f(c,u,o),u=c}d=d||p&&l-x-1>n&&i[x+1]!==" "}return!h&&!d?g&&!a&&!r(i)?bm:s===Ws?kr:Bc:t>9&&Em(i)?kr:a?s===Ws?kr:Bc:d?Am:Tm}function jb(i,e,t,n,r){i.dump=(function(){if(e.length===0)return i.quotingType===Ws?'""':"''";if(!i.noCompatMode&&(kb.indexOf(e)!==-1||Bb.test(e)))return i.quotingType===Ws?'"'+e+'"':"'"+e+"'";var s=i.indent*Math.max(1,t),a=i.lineWidth===-1?-1:Math.max(Math.min(i.lineWidth,40),i.lineWidth-s),o=n||i.flowLevel>-1&&t>=i.flowLevel;function l(c){return Wb(i,c)}switch(qb(e,o,i.indent,a,l,i.quotingType,i.forceQuotes&&!n,r)){case bm:return e;case Bc:return"'"+e.replace(/'/g,"''")+"'";case Tm:return"|"+gf(e,i.indent)+xf(pf(e,s));case Am:return">"+gf(e,i.indent)+xf(pf($b(e,a),s));case kr:return'"'+Kb(e)+'"';default:throw new Jt("impossible error: invalid scalar style")}})()}function gf(i,e){var t=Em(i)?String(e):"",n=i[i.length-1]===`
`,r=n&&(i[i.length-2]===`
`||i===`
`),s=r?"+":n?"":"-";return t+s+`
`}function xf(i){return i[i.length-1]===`
`?i.slice(0,-1):i}function $b(i,e){for(var t=/(\n+)([^\n]*)/g,n=(function(){var c=i.indexOf(`
`);return c=c!==-1?c:i.length,t.lastIndex=c,vf(i.slice(0,c),e)})(),r=i[0]===`
`||i[0]===" ",s,a;a=t.exec(i);){var o=a[1],l=a[2];s=l[0]===" ",n+=o+(!r&&!s&&l!==""?`
`:"")+vf(l,e),r=s}return n}function vf(i,e){if(i===""||i[0]===" ")return i;for(var t=/ [^ ]/g,n,r=0,s,a=0,o=0,l="";n=t.exec(i);)o=n.index,o-r>e&&(s=a>r?a:o,l+=`
`+i.slice(r,s),r=s+1),a=o;return l+=`
`,i.length-r>e&&a>r?l+=i.slice(r,a)+`
`+i.slice(a+1):l+=i.slice(r),l.slice(1)}function Kb(i){for(var e="",t=0,n,r=0;r<i.length;t>=65536?r+=2:r++)t=Ts(i,r),n=jt[t],!n&&Xs(t)?(e+=i[r],t>=65536&&(e+=i[r+1])):e+=n||Hb(t);return e}function Zb(i,e,t){var n="",r=i.tag,s,a,o;for(s=0,a=t.length;s<a;s+=1)o=t[s],i.replacer&&(o=i.replacer.call(t,String(s),o)),(Si(i,e,o,!1,!1)||typeof o>"u"&&Si(i,e,null,!1,!1))&&(n!==""&&(n+=","+(i.condenseFlow?"":" ")),n+=i.dump);i.tag=r,i.dump="["+n+"]"}function Sf(i,e,t,n){var r="",s=i.tag,a,o,l;for(a=0,o=t.length;a<o;a+=1)l=t[a],i.replacer&&(l=i.replacer.call(t,String(a),l)),(Si(i,e+1,l,!0,!0,!1,!0)||typeof l>"u"&&Si(i,e+1,null,!0,!0,!1,!0))&&((!n||r!=="")&&(r+=kc(i,e)),i.dump&&Gs===i.dump.charCodeAt(0)?r+="-":r+="- ",r+=i.dump);i.tag=s,i.dump=r||"[]"}function Jb(i,e,t){var n="",r=i.tag,s=Object.keys(t),a,o,l,c,u;for(a=0,o=s.length;a<o;a+=1)u="",n!==""&&(u+=", "),i.condenseFlow&&(u+='"'),l=s[a],c=t[l],i.replacer&&(c=i.replacer.call(t,l,c)),Si(i,e,l,!1,!1)&&(i.dump.length>1024&&(u+="? "),u+=i.dump+(i.condenseFlow?'"':"")+":"+(i.condenseFlow?"":" "),Si(i,e,c,!1,!1)&&(u+=i.dump,n+=u));i.tag=r,i.dump="{"+n+"}"}function Qb(i,e,t,n){var r="",s=i.tag,a=Object.keys(t),o,l,c,u,h,d;if(i.sortKeys===!0)a.sort();else if(typeof i.sortKeys=="function")a.sort(i.sortKeys);else if(i.sortKeys)throw new Jt("sortKeys must be a boolean or a function");for(o=0,l=a.length;o<l;o+=1)d="",(!n||r!=="")&&(d+=kc(i,e)),c=a[o],u=t[c],i.replacer&&(u=i.replacer.call(t,c,u)),Si(i,e+1,c,!0,!0,!0)&&(h=i.tag!==null&&i.tag!=="?"||i.dump&&i.dump.length>1024,h&&(i.dump&&Gs===i.dump.charCodeAt(0)?d+="?":d+="? "),d+=i.dump,h&&(d+=kc(i,e)),Si(i,e+1,u,!0,h)&&(i.dump&&Gs===i.dump.charCodeAt(0)?d+=":":d+=": ",d+=i.dump,r+=d));i.tag=s,i.dump=r||"{}"}function yf(i,e,t){var n,r,s,a,o,l;for(r=t?i.explicitTypes:i.implicitTypes,s=0,a=r.length;s<a;s+=1)if(o=r[s],(o.instanceOf||o.predicate)&&(!o.instanceOf||typeof e=="object"&&e instanceof o.instanceOf)&&(!o.predicate||o.predicate(e))){if(t?o.multi&&o.representName?i.tag=o.representName(e):i.tag=o.tag:i.tag="?",o.represent){if(l=i.styleMap[o.tag]||o.defaultStyle,_m.call(o.represent)==="[object Function]")n=o.represent(e,l);else if(gm.call(o.represent,l))n=o.represent[l](e,l);else throw new Jt("!<"+o.tag+'> tag resolver accepts not "'+l+'" style');i.dump=n}return!0}return!1}function Si(i,e,t,n,r,s,a){i.tag=null,i.dump=t,yf(i,t,!1)||yf(i,t,!0);var o=_m.call(i.dump),l=n,c;n&&(n=i.flowLevel<0||i.flowLevel>e);var u=o==="[object Object]"||o==="[object Array]",h,d;if(u&&(h=i.duplicates.indexOf(t),d=h!==-1),(i.tag!==null&&i.tag!=="?"||d||i.indent!==2&&e>0)&&(r=!1),d&&i.usedDuplicates[h])i.dump="*ref_"+h;else{if(u&&d&&!i.usedDuplicates[h]&&(i.usedDuplicates[h]=!0),o==="[object Object]")n&&Object.keys(i.dump).length!==0?(Qb(i,e,i.dump,r),d&&(i.dump="&ref_"+h+i.dump)):(Jb(i,e,i.dump),d&&(i.dump="&ref_"+h+" "+i.dump));else if(o==="[object Array]")n&&i.dump.length!==0?(i.noArrayIndent&&!a&&e>0?Sf(i,e-1,i.dump,r):Sf(i,e,i.dump,r),d&&(i.dump="&ref_"+h+i.dump)):(Zb(i,e,i.dump),d&&(i.dump="&ref_"+h+" "+i.dump));else if(o==="[object String]")i.tag!=="?"&&jb(i,i.dump,e,s,l);else{if(o==="[object Undefined]")return!1;if(i.skipInvalid)return!1;throw new Jt("unacceptable kind of an object to dump "+o)}i.tag!==null&&i.tag!=="?"&&(c=encodeURI(i.tag[0]==="!"?i.tag.slice(1):i.tag).replace(/!/g,"%21"),i.tag[0]==="!"?c="!"+c:c.slice(0,18)==="tag:yaml.org,2002:"?c="!!"+c.slice(18):c="!<"+c+">",i.dump=c+" "+i.dump)}return!0}function eT(i,e){var t=[],n=[],r,s;for(zc(i,t,n),r=0,s=n.length;r<s;r+=1)e.duplicates.push(t[n[r]]);e.usedDuplicates=new Array(s)}function zc(i,e,t){var n,r,s;if(i!==null&&typeof i=="object")if(r=e.indexOf(i),r!==-1)t.indexOf(r)===-1&&t.push(r);else if(e.push(i),Array.isArray(i))for(r=0,s=i.length;r<s;r+=1)zc(i[r],e,t);else for(n=Object.keys(i),r=0,s=n.length;r<s;r+=1)zc(i[n[r]],e,t)}function tT(i,e){e=e||{};var t=new Gb(e);t.noRefs||eT(i,t);var n=i;return t.replacer&&(n=t.replacer.call({"":n},"",n)),Si(t,0,n,!0,!0)?t.dump+`
`:""}var nT=tT,iT={dump:nT};function Ru(i,e){return function(){throw new Error("Function yaml."+i+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var rT=zt,sT=Hp,aT=Xp,oT=Kp,lT=Zp,cT=Tu,uT=mm.load,hT=mm.loadAll,fT=iT.dump,dT=Jt,pT={binary:nm,float:$p,map:Wp,null:Yp,pairs:rm,set:sm,timestamp:em,bool:qp,int:jp,merge:tm,omap:im,seq:Gp,str:Vp},mT=Ru("safeLoad","load"),_T=Ru("safeLoadAll","loadAll"),gT=Ru("safeDump","dump"),xT={Type:rT,Schema:sT,FAILSAFE_SCHEMA:aT,JSON_SCHEMA:oT,CORE_SCHEMA:lT,DEFAULT_SCHEMA:cT,load:uT,loadAll:hT,dump:fT,YAMLException:dT,types:pT,safeLoad:mT,safeLoadAll:_T,safeDump:gT};function Pu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let xr=Pu();function wm(i){xr=i}const Cm=/[&<>"']/,vT=new RegExp(Cm.source,"g"),Rm=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ST=new RegExp(Rm.source,"g"),yT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Mf=i=>yT[i];function gn(i,e){if(e){if(Cm.test(i))return i.replace(vT,Mf)}else if(Rm.test(i))return i.replace(ST,Mf);return i}const MT=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ET(i){return i.replace(MT,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const bT=/(^|[^\[])\^/g;function nt(i,e){i=typeof i=="string"?i:i.source,e=e||"";const t={replace:(n,r)=>(r=typeof r=="object"&&"source"in r?r.source:r,r=r.replace(bT,"$1"),i=i.replace(n,r),t),getRegex:()=>new RegExp(i,e)};return t}function Ef(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const Ka={exec:()=>null};function bf(i,e){const t=i.replace(/\|/g,(s,a,o)=>{let l=!1,c=a;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function Ma(i,e,t){const n=i.length;if(n===0)return"";let r=0;for(;r<n&&i.charAt(n-r-1)===e;)r++;return i.slice(0,n-r)}function TT(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return-1}function Tf(i,e,t,n){const r=e.href,s=e.title?gn(e.title):null,a=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:r,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:r,title:s,text:gn(a)}}function AT(i,e){const t=i.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[a]=s;return a.length>=n.length?r.slice(n.length):r}).join(`
`)}class Za{options;rules;lexer;constructor(e){this.options=e||xr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ma(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=AT(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const r=Ma(n,"#");(this.options.pedantic||!r||/ $/.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=Ma(t[0].replace(/^ *>[ \t]?/gm,""),`
`),r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const a=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",c=!1;for(;e;){let u=!1;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let h=t[2].split(`
`,1)[0].replace(/^\t+/,m=>" ".repeat(3*m.length)),d=e.split(`
`,1)[0],p=0;this.options.pedantic?(p=2,l=h.trimStart()):(p=t[2].search(/[^ ]/),p=p>4?1:p,l=h.slice(p),p+=t[1].length);let x=!1;if(!h&&/^ *$/.test(d)&&(o+=d+`
`,e=e.substring(d.length+1),u=!0),!u){const m=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),M=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),b=new RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;e;){const E=e.split(`
`,1)[0];if(d=E,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),T.test(d)||b.test(d)||m.test(d)||M.test(e))break;if(d.search(/[^ ]/)>=p||!d.trim())l+=`
`+d.slice(p);else{if(x||h.search(/[^ ]/)>=4||T.test(h)||b.test(h)||M.test(h))break;l+=`
`+d}!x&&!d.trim()&&(x=!0),o+=E+`
`,e=e.substring(E.length+1),h=d.slice(p)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(o)&&(c=!0));let g=null,_;this.options.gfm&&(g=/^\[[ xX]\] /.exec(l),g&&(_=g[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:o,task:!!g,checked:_,loose:!1,text:l,tokens:[]}),s.raw+=o}s.items[s.items.length-1].raw=o.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const h=s.items[u].tokens.filter(p=>p.type==="space"),d=h.length>0&&h.some(p=>/\n.*\n/.test(p.raw));s.loose=d}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(t){if(!/[:|]/.test(t[2]))return;const n={type:"table",raw:t[0],header:bf(t[1]).map(r=>({text:r,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){let r=n.align.length,s,a,o,l;for(s=0;s<r;s++){const c=n.align[s];c&&(/^ *-+: *$/.test(c)?n.align[s]="right":/^ *:-+: *$/.test(c)?n.align[s]="center":/^ *:-+ *$/.test(c)?n.align[s]="left":n.align[s]=null)}for(r=n.rows.length,s=0;s<r;s++)n.rows[s]=bf(n.rows[s],n.header.length).map(c=>({text:c,tokens:[]}));for(r=n.header.length,a=0;a<r;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);for(r=n.rows.length,a=0;a<r;a++)for(l=n.rows[a],o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:gn(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=Ma(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=TT(t[2],"()");if(a>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);a&&(r=a[1],s=a[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(n)?r=r.slice(1):r=r.slice(1,-1)),Tf(t,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=(n[2]||n[1]).replace(/\s+/g," ");if(r=t[r.toLowerCase()],!r){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return Tf(n,r,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const a=[...r[0]].length-1;let o,l,c=a,u=0;const h=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+a);(r=h.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(l=[...o].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const d=[...r[0]][0].length,p=e.slice(0,a+r.index+d+l);if(Math.min(a,l)%2){const g=p.slice(1,-1);return{type:"em",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}const x=p.slice(2,-2);return{type:"strong",raw:p,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const r=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return r&&s&&(n=n.substring(1,n.length-1)),n=gn(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=gn(t[1]),r="mailto:"+n):(n=gn(t[1]),r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,r;if(t[2]==="@")n=gn(t[0]),r="mailto:"+n;else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(s!==t[0]);n=gn(t[0]),t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=gn(t[0]),{type:"text",raw:t[0],text:n}}}}const Re={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ka,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};Re._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;Re._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;Re.def=nt(Re.def).replace("label",Re._label).replace("title",Re._title).getRegex();Re.bullet=/(?:[*+-]|\d{1,9}[.)])/;Re.listItemStart=nt(/^( *)(bull) */).replace("bull",Re.bullet).getRegex();Re.list=nt(Re.list).replace(/bull/g,Re.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Re.def.source+")").getRegex();Re._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";Re._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;Re.html=nt(Re.html,"i").replace("comment",Re._comment).replace("tag",Re._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();Re.lheading=nt(Re.lheading).replace(/bull/g,Re.bullet).getRegex();Re.paragraph=nt(Re._paragraph).replace("hr",Re.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Re._tag).getRegex();Re.blockquote=nt(Re.blockquote).replace("paragraph",Re.paragraph).getRegex();Re.normal={...Re};Re.gfm={...Re.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};Re.gfm.table=nt(Re.gfm.table).replace("hr",Re.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Re._tag).getRegex();Re.gfm.paragraph=nt(Re._paragraph).replace("hr",Re.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Re.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Re._tag).getRegex();Re.pedantic={...Re.normal,html:nt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Re._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ka,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:nt(Re.normal._paragraph).replace("hr",Re.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Re.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const ve={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ka,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ka,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};ve._punctuation="\\p{P}$+<=>`^|~";ve.punctuation=nt(ve.punctuation,"u").replace(/punctuation/g,ve._punctuation).getRegex();ve.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;ve.anyPunctuation=/\\[punct]/g;ve._escapes=/\\([punct])/g;ve._comment=nt(Re._comment).replace("(?:-->|$)","-->").getRegex();ve.emStrong.lDelim=nt(ve.emStrong.lDelim,"u").replace(/punct/g,ve._punctuation).getRegex();ve.emStrong.rDelimAst=nt(ve.emStrong.rDelimAst,"gu").replace(/punct/g,ve._punctuation).getRegex();ve.emStrong.rDelimUnd=nt(ve.emStrong.rDelimUnd,"gu").replace(/punct/g,ve._punctuation).getRegex();ve.anyPunctuation=nt(ve.anyPunctuation,"gu").replace(/punct/g,ve._punctuation).getRegex();ve._escapes=nt(ve._escapes,"gu").replace(/punct/g,ve._punctuation).getRegex();ve._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;ve._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;ve.autolink=nt(ve.autolink).replace("scheme",ve._scheme).replace("email",ve._email).getRegex();ve._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;ve.tag=nt(ve.tag).replace("comment",ve._comment).replace("attribute",ve._attribute).getRegex();ve._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;ve._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;ve._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;ve.link=nt(ve.link).replace("label",ve._label).replace("href",ve._href).replace("title",ve._title).getRegex();ve.reflink=nt(ve.reflink).replace("label",ve._label).replace("ref",Re._label).getRegex();ve.nolink=nt(ve.nolink).replace("ref",Re._label).getRegex();ve.reflinkSearch=nt(ve.reflinkSearch,"g").replace("reflink",ve.reflink).replace("nolink",ve.nolink).getRegex();ve.normal={...ve};ve.pedantic={...ve.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:nt(/^!?\[(label)\]\((.*?)\)/).replace("label",ve._label).getRegex(),reflink:nt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ve._label).getRegex()};ve.gfm={...ve.normal,escape:nt(ve.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};ve.gfm.url=nt(ve.gfm.url,"i").replace("email",ve.gfm._extended_email).getRegex();ve.breaks={...ve.gfm,br:nt(ve.br).replace("{2,}","*").getRegex(),text:nt(ve.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class jn{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xr,this.options.tokenizer=this.options.tokenizer||new Za,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Re.normal,inline:ve.normal};this.options.pedantic?(t.block=Re.pedantic,t.inline=ve.pedantic):this.options.gfm&&(t.block=Re.gfm,this.options.breaks?t.inline=ve.breaks:t.inline=ve.gfm),this.tokenizer.rules=t}static get rules(){return{block:Re,inline:ve}}static lex(e,t){return new jn(t).lex(e)}static lexInline(e,t){return new jn(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,c)=>l+"    ".repeat(c.length));let n,r,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){r=t[t.length-1],a&&r.type==="paragraph"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),a=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,s,a=e,o,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)u.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,o.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(p=>{d=p.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),l=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Ja{options;constructor(e){this.options=e||xr}code(e,t,n){const r=(t||"").match(/^\S*/)?.[0];return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+gn(r)+'">'+(n?e:gn(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:gn(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const r=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+r+s+`>
`+e+"</"+r+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const r=Ef(e);if(r===null)return n;e=r;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){const r=Ef(e);if(r===null)return n;e=r;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class Du{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class $n{options;renderer;textRenderer;constructor(e){this.options=e||xr,this.options.renderer=this.options.renderer||new Ja,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Du}static parse(e,t){return new $n(t).parse(e)}static parseInline(e,t){return new $n(t).parseInline(e)}parse(e,t=!0){let n="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const a=s,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){n+=o||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const a=s;n+=this.renderer.heading(this.parseInline(a.tokens),a.depth,ET(this.parseInline(a.tokens,this.textRenderer)));continue}case"code":{const a=s;n+=this.renderer.code(a.text,a.lang,!!a.escaped);continue}case"table":{const a=s;let o="",l="";for(let u=0;u<a.header.length;u++)l+=this.renderer.tablecell(this.parseInline(a.header[u].tokens),{header:!0,align:a.align[u]});o+=this.renderer.tablerow(l);let c="";for(let u=0;u<a.rows.length;u++){const h=a.rows[u];l="";for(let d=0;d<h.length;d++)l+=this.renderer.tablecell(this.parseInline(h[d].tokens),{header:!1,align:a.align[d]});c+=this.renderer.tablerow(l)}n+=this.renderer.table(o,c);continue}case"blockquote":{const a=s,o=this.parse(a.tokens);n+=this.renderer.blockquote(o);continue}case"list":{const a=s,o=a.ordered,l=a.start,c=a.loose;let u="";for(let h=0;h<a.items.length;h++){const d=a.items[h],p=d.checked,x=d.task;let g="";if(d.task){const _=this.renderer.checkbox(!!p);c?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=_+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=_+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:_+" "}):g+=_+" "}g+=this.parse(d.tokens,c),u+=this.renderer.listitem(g,x,!!p)}n+=this.renderer.list(u,o,l);continue}case"html":{const a=s;n+=this.renderer.html(a.text,a.block);continue}case"paragraph":{const a=s;n+=this.renderer.paragraph(this.parseInline(a.tokens));continue}case"text":{let a=s,o=a.tokens?this.parseInline(a.tokens):a.text;for(;r+1<e.length&&e[r+1].type==="text";)a=e[++r],o+=`
`+(a.tokens?this.parseInline(a.tokens):a.text);n+=t?this.renderer.paragraph(o):o;continue}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=a||"";continue}}switch(s.type){case"escape":{const a=s;n+=t.text(a.text);break}case"html":{const a=s;n+=t.html(a.text);break}case"link":{const a=s;n+=t.link(a.href,a.title,this.parseInline(a.tokens,t));break}case"image":{const a=s;n+=t.image(a.href,a.title,a.text);break}case"strong":{const a=s;n+=t.strong(this.parseInline(a.tokens,t));break}case"em":{const a=s;n+=t.em(this.parseInline(a.tokens,t));break}case"codespan":{const a=s;n+=t.codespan(a.text);break}case"br":{n+=t.br();break}case"del":{const a=s;n+=t.del(this.parseInline(a.tokens,t));break}case"text":{const a=s;n+=t.text(a.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}}class Na{options;constructor(e){this.options=e||xr}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}class wT{defaults=Pu();options=this.setOptions;parse=this.#e(jn.lex,$n.parse);parseInline=this.#e(jn.lexInline,$n.parseInline);Parser=$n;Renderer=Ja;TextRenderer=Du;Lexer=jn;Tokenizer=Za;Hooks=Na;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const s=r;for(const a of s.header)n=n.concat(this.walkTokens(a.tokens,t));for(const a of s.rows)for(const o of a)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{const s=r;n=n.concat(this.walkTokens(s.items,t));break}default:{const s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(a=>{n=n.concat(this.walkTokens(s[a],t))}):s.tokens&&(n=n.concat(this.walkTokens(s.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const a=t.renderers[s.name];a?t.renderers[s.name]=function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=a.apply(this,o)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=t[s.level];a?a.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),n.renderer){const s=this.defaults.renderer||new Ja(this.defaults);for(const a in n.renderer){const o=n.renderer[a],l=a,c=s[l];s[l]=(...u)=>{let h=o.apply(s,u);return h===!1&&(h=c.apply(s,u)),h||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new Za(this.defaults);for(const a in n.tokenizer){const o=n.tokenizer[a],l=a,c=s[l];s[l]=(...u)=>{let h=o.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Na;for(const a in n.hooks){const o=n.hooks[a],l=a,c=s[l];Na.passThroughHooks.has(a)?s[l]=u=>{if(this.defaults.async)return Promise.resolve(o.call(s,u)).then(d=>c.call(s,d));const h=o.call(s,u);return c.call(s,h)}:s[l]=(...u)=>{let h=o.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,a=n.walkTokens;r.walkTokens=function(o){let l=[];return l.push(a.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return jn.lex(e,t??this.defaults)}parser(e,t){return $n.parse(e,t??this.defaults)}#e(e,t){return(n,r)=>{const s={...r},a={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(a.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),a.async=!0);const o=this.#t(!!a.silent,!!a.async);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(a.hooks&&(a.hooks.options=a),a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(n):n).then(l=>e(l,a)).then(l=>a.walkTokens?Promise.all(this.walkTokens(l,a.walkTokens)).then(()=>l):l).then(l=>t(l,a)).then(l=>a.hooks?a.hooks.postprocess(l):l).catch(o);try{a.hooks&&(n=a.hooks.preprocess(n));const l=e(n,a);a.walkTokens&&this.walkTokens(l,a.walkTokens);let c=t(l,a);return a.hooks&&(c=a.hooks.postprocess(c)),c}catch(l){return o(l)}}}#t(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+gn(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}}const mr=new wT;function tt(i,e){return mr.parse(i,e)}tt.options=tt.setOptions=function(i){return mr.setOptions(i),tt.defaults=mr.defaults,wm(tt.defaults),tt};tt.getDefaults=Pu;tt.defaults=xr;tt.use=function(...i){return mr.use(...i),tt.defaults=mr.defaults,wm(tt.defaults),tt};tt.walkTokens=function(i,e){return mr.walkTokens(i,e)};tt.parseInline=mr.parseInline;tt.Parser=$n;tt.parser=$n.parse;tt.Renderer=Ja;tt.TextRenderer=Du;tt.Lexer=jn;tt.lexer=jn.lex;tt.Tokenizer=Za;tt.Hooks=Na;tt.parse=tt;tt.options;tt.setOptions;tt.use;tt.walkTokens;tt.parseInline;$n.parse;jn.lex;function CT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ea={exports:{}},xt={},Or={},wi={},Af;function us(){if(Af)return wi;Af=1;function i(a){return typeof a>"u"||a===null}function e(a){return typeof a=="object"&&a!==null}function t(a){return Array.isArray(a)?a:i(a)?[]:[a]}function n(a,o){var l,c,u,h;if(o)for(h=Object.keys(o),l=0,c=h.length;l<c;l+=1)u=h[l],a[u]=o[u];return a}function r(a,o){var l="",c;for(c=0;c<o;c+=1)l+=a;return l}function s(a){return a===0&&Number.NEGATIVE_INFINITY===1/a}return wi.isNothing=i,wi.isObject=e,wi.toArray=t,wi.repeat=r,wi.isNegativeZero=s,wi.extend=n,wi}var tl,wf;function Zs(){if(wf)return tl;wf=1;function i(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.toString=function(t){var n=this.name+": ";return n+=this.reason||"(unknown reason)",!t&&this.mark&&(n+=" "+this.mark.toString()),n},tl=i,tl}var nl,Cf;function RT(){if(Cf)return nl;Cf=1;var i=us();function e(t,n,r,s,a){this.name=t,this.buffer=n,this.position=r,this.line=s,this.column=a}return e.prototype.getSnippet=function(n,r){var s,a,o,l,c;if(!this.buffer)return null;for(n=n||4,r=r||75,s="",a=this.position;a>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(a-1))===-1;)if(a-=1,this.position-a>r/2-1){s=" ... ",a+=5;break}for(o="",l=this.position;l<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(l))===-1;)if(l+=1,l-this.position>r/2-1){o=" ... ",l-=5;break}return c=this.buffer.slice(a,l),i.repeat(" ",n)+s+c+o+`
`+i.repeat(" ",n+this.position-a+s.length)+"^"},e.prototype.toString=function(n){var r,s="";return this.name&&(s+='in "'+this.name+'" '),s+="at line "+(this.line+1)+", column "+(this.column+1),n||(r=this.getSnippet(),r&&(s+=`:
`+r)),s},nl=e,nl}var il,Rf;function Ot(){if(Rf)return il;Rf=1;var i=Zs(),e=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function n(s){var a={};return s!==null&&Object.keys(s).forEach(function(o){s[o].forEach(function(l){a[String(l)]=o})}),a}function r(s,a){if(a=a||{},Object.keys(a).forEach(function(o){if(e.indexOf(o)===-1)throw new i('Unknown option "'+o+'" is met in definition of "'+s+'" YAML type.')}),this.tag=s,this.kind=a.kind||null,this.resolve=a.resolve||function(){return!0},this.construct=a.construct||function(o){return o},this.instanceOf=a.instanceOf||null,this.predicate=a.predicate||null,this.represent=a.represent||null,this.defaultStyle=a.defaultStyle||null,this.styleAliases=n(a.styleAliases||null),t.indexOf(this.kind)===-1)throw new i('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}return il=r,il}var rl,Pf;function hs(){if(Pf)return rl;Pf=1;var i=us(),e=Zs(),t=Ot();function n(a,o,l){var c=[];return a.include.forEach(function(u){l=n(u,o,l)}),a[o].forEach(function(u){l.forEach(function(h,d){h.tag===u.tag&&h.kind===u.kind&&c.push(d)}),l.push(u)}),l.filter(function(u,h){return c.indexOf(h)===-1})}function r(){var a={scalar:{},sequence:{},mapping:{},fallback:{}},o,l;function c(u){a[u.kind][u.tag]=a.fallback[u.tag]=u}for(o=0,l=arguments.length;o<l;o+=1)arguments[o].forEach(c);return a}function s(a){this.include=a.include||[],this.implicit=a.implicit||[],this.explicit=a.explicit||[],this.implicit.forEach(function(o){if(o.loadKind&&o.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=n(this,"implicit",[]),this.compiledExplicit=n(this,"explicit",[]),this.compiledTypeMap=r(this.compiledImplicit,this.compiledExplicit)}return s.DEFAULT=null,s.create=function(){var o,l;switch(arguments.length){case 1:o=s.DEFAULT,l=arguments[0];break;case 2:o=arguments[0],l=arguments[1];break;default:throw new e("Wrong number of arguments for Schema.create function")}if(o=i.toArray(o),l=i.toArray(l),!o.every(function(c){return c instanceof s}))throw new e("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!l.every(function(c){return c instanceof t}))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new s({include:o,explicit:l})},rl=s,rl}var sl,Df;function PT(){if(Df)return sl;Df=1;var i=Ot();return sl=new i("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),sl}var al,Lf;function DT(){if(Lf)return al;Lf=1;var i=Ot();return al=new i("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),al}var ol,If;function LT(){if(If)return ol;If=1;var i=Ot();return ol=new i("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),ol}var ll,Ff;function Hc(){if(Ff)return ll;Ff=1;var i=hs();return ll=new i({explicit:[PT(),DT(),LT()]}),ll}var cl,Nf;function IT(){if(Nf)return cl;Nf=1;var i=Ot();function e(r){if(r===null)return!0;var s=r.length;return s===1&&r==="~"||s===4&&(r==="null"||r==="Null"||r==="NULL")}function t(){return null}function n(r){return r===null}return cl=new i("tag:yaml.org,2002:null",{kind:"scalar",resolve:e,construct:t,predicate:n,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),cl}var ul,Uf;function FT(){if(Uf)return ul;Uf=1;var i=Ot();function e(r){if(r===null)return!1;var s=r.length;return s===4&&(r==="true"||r==="True"||r==="TRUE")||s===5&&(r==="false"||r==="False"||r==="FALSE")}function t(r){return r==="true"||r==="True"||r==="TRUE"}function n(r){return Object.prototype.toString.call(r)==="[object Boolean]"}return ul=new i("tag:yaml.org,2002:bool",{kind:"scalar",resolve:e,construct:t,predicate:n,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"}),ul}var hl,Of;function NT(){if(Of)return hl;Of=1;var i=us(),e=Ot();function t(l){return 48<=l&&l<=57||65<=l&&l<=70||97<=l&&l<=102}function n(l){return 48<=l&&l<=55}function r(l){return 48<=l&&l<=57}function s(l){if(l===null)return!1;var c=l.length,u=0,h=!1,d;if(!c)return!1;if(d=l[u],(d==="-"||d==="+")&&(d=l[++u]),d==="0"){if(u+1===c)return!0;if(d=l[++u],d==="b"){for(u++;u<c;u++)if(d=l[u],d!=="_"){if(d!=="0"&&d!=="1")return!1;h=!0}return h&&d!=="_"}if(d==="x"){for(u++;u<c;u++)if(d=l[u],d!=="_"){if(!t(l.charCodeAt(u)))return!1;h=!0}return h&&d!=="_"}for(;u<c;u++)if(d=l[u],d!=="_"){if(!n(l.charCodeAt(u)))return!1;h=!0}return h&&d!=="_"}if(d==="_")return!1;for(;u<c;u++)if(d=l[u],d!=="_"){if(d===":")break;if(!r(l.charCodeAt(u)))return!1;h=!0}return!h||d==="_"?!1:d!==":"?!0:/^(:[0-5]?[0-9])+$/.test(l.slice(u))}function a(l){var c=l,u=1,h,d,p=[];return c.indexOf("_")!==-1&&(c=c.replace(/_/g,"")),h=c[0],(h==="-"||h==="+")&&(h==="-"&&(u=-1),c=c.slice(1),h=c[0]),c==="0"?0:h==="0"?c[1]==="b"?u*parseInt(c.slice(2),2):c[1]==="x"?u*parseInt(c,16):u*parseInt(c,8):c.indexOf(":")!==-1?(c.split(":").forEach(function(x){p.unshift(parseInt(x,10))}),c=0,d=1,p.forEach(function(x){c+=x*d,d*=60}),u*c):u*parseInt(c,10)}function o(l){return Object.prototype.toString.call(l)==="[object Number]"&&l%1===0&&!i.isNegativeZero(l)}return hl=new e("tag:yaml.org,2002:int",{kind:"scalar",resolve:s,construct:a,predicate:o,represent:{binary:function(l){return l>=0?"0b"+l.toString(2):"-0b"+l.toString(2).slice(1)},octal:function(l){return l>=0?"0"+l.toString(8):"-0"+l.toString(8).slice(1)},decimal:function(l){return l.toString(10)},hexadecimal:function(l){return l>=0?"0x"+l.toString(16).toUpperCase():"-0x"+l.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),hl}var fl,kf;function UT(){if(kf)return fl;kf=1;var i=us(),e=Ot(),t=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function n(l){return!(l===null||!t.test(l)||l[l.length-1]==="_")}function r(l){var c,u,h,d;return c=l.replace(/_/g,"").toLowerCase(),u=c[0]==="-"?-1:1,d=[],"+-".indexOf(c[0])>=0&&(c=c.slice(1)),c===".inf"?u===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:c===".nan"?NaN:c.indexOf(":")>=0?(c.split(":").forEach(function(p){d.unshift(parseFloat(p,10))}),c=0,h=1,d.forEach(function(p){c+=p*h,h*=60}),u*c):u*parseFloat(c,10)}var s=/^[-+]?[0-9]+e/;function a(l,c){var u;if(isNaN(l))switch(c){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===l)switch(c){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===l)switch(c){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(i.isNegativeZero(l))return"-0.0";return u=l.toString(10),s.test(u)?u.replace("e",".e"):u}function o(l){return Object.prototype.toString.call(l)==="[object Number]"&&(l%1!==0||i.isNegativeZero(l))}return fl=new e("tag:yaml.org,2002:float",{kind:"scalar",resolve:n,construct:r,predicate:o,represent:a,defaultStyle:"lowercase"}),fl}var dl,Bf;function Pm(){if(Bf)return dl;Bf=1;var i=hs();return dl=new i({include:[Hc()],implicit:[IT(),FT(),NT(),UT()]}),dl}var pl,zf;function Dm(){if(zf)return pl;zf=1;var i=hs();return pl=new i({include:[Pm()]}),pl}var ml,Hf;function OT(){if(Hf)return ml;Hf=1;var i=Ot(),e=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function n(a){return a===null?!1:e.exec(a)!==null||t.exec(a)!==null}function r(a){var o,l,c,u,h,d,p,x=0,g=null,_,m,M;if(o=e.exec(a),o===null&&(o=t.exec(a)),o===null)throw new Error("Date resolve error");if(l=+o[1],c=+o[2]-1,u=+o[3],!o[4])return new Date(Date.UTC(l,c,u));if(h=+o[4],d=+o[5],p=+o[6],o[7]){for(x=o[7].slice(0,3);x.length<3;)x+="0";x=+x}return o[9]&&(_=+o[10],m=+(o[11]||0),g=(_*60+m)*6e4,o[9]==="-"&&(g=-g)),M=new Date(Date.UTC(l,c,u,h,d,p,x)),g&&M.setTime(M.getTime()-g),M}function s(a){return a.toISOString()}return ml=new i("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:n,construct:r,instanceOf:Date,represent:s}),ml}var _l,Vf;function kT(){if(Vf)return _l;Vf=1;var i=Ot();function e(t){return t==="<<"||t===null}return _l=new i("tag:yaml.org,2002:merge",{kind:"scalar",resolve:e}),_l}function Lm(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gl,Gf;function BT(){if(Gf)return gl;Gf=1;var i;try{var e=Lm;i=e("buffer").Buffer}catch{}var t=Ot(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function r(l){if(l===null)return!1;var c,u,h=0,d=l.length,p=n;for(u=0;u<d;u++)if(c=p.indexOf(l.charAt(u)),!(c>64)){if(c<0)return!1;h+=6}return h%8===0}function s(l){var c,u,h=l.replace(/[\r\n=]/g,""),d=h.length,p=n,x=0,g=[];for(c=0;c<d;c++)c%4===0&&c&&(g.push(x>>16&255),g.push(x>>8&255),g.push(x&255)),x=x<<6|p.indexOf(h.charAt(c));return u=d%4*6,u===0?(g.push(x>>16&255),g.push(x>>8&255),g.push(x&255)):u===18?(g.push(x>>10&255),g.push(x>>2&255)):u===12&&g.push(x>>4&255),i?i.from?i.from(g):new i(g):g}function a(l){var c="",u=0,h,d,p=l.length,x=n;for(h=0;h<p;h++)h%3===0&&h&&(c+=x[u>>18&63],c+=x[u>>12&63],c+=x[u>>6&63],c+=x[u&63]),u=(u<<8)+l[h];return d=p%3,d===0?(c+=x[u>>18&63],c+=x[u>>12&63],c+=x[u>>6&63],c+=x[u&63]):d===2?(c+=x[u>>10&63],c+=x[u>>4&63],c+=x[u<<2&63],c+=x[64]):d===1&&(c+=x[u>>2&63],c+=x[u<<4&63],c+=x[64],c+=x[64]),c}function o(l){return i&&i.isBuffer(l)}return gl=new t("tag:yaml.org,2002:binary",{kind:"scalar",resolve:r,construct:s,predicate:o,represent:a}),gl}var xl,Wf;function zT(){if(Wf)return xl;Wf=1;var i=Ot(),e=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function n(s){if(s===null)return!0;var a=[],o,l,c,u,h,d=s;for(o=0,l=d.length;o<l;o+=1){if(c=d[o],h=!1,t.call(c)!=="[object Object]")return!1;for(u in c)if(e.call(c,u))if(!h)h=!0;else return!1;if(!h)return!1;if(a.indexOf(u)===-1)a.push(u);else return!1}return!0}function r(s){return s!==null?s:[]}return xl=new i("tag:yaml.org,2002:omap",{kind:"sequence",resolve:n,construct:r}),xl}var vl,Xf;function HT(){if(Xf)return vl;Xf=1;var i=Ot(),e=Object.prototype.toString;function t(r){if(r===null)return!0;var s,a,o,l,c,u=r;for(c=new Array(u.length),s=0,a=u.length;s<a;s+=1){if(o=u[s],e.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;c[s]=[l[0],o[l[0]]]}return!0}function n(r){if(r===null)return[];var s,a,o,l,c,u=r;for(c=new Array(u.length),s=0,a=u.length;s<a;s+=1)o=u[s],l=Object.keys(o),c[s]=[l[0],o[l[0]]];return c}return vl=new i("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:n}),vl}var Sl,Yf;function VT(){if(Yf)return Sl;Yf=1;var i=Ot(),e=Object.prototype.hasOwnProperty;function t(r){if(r===null)return!0;var s,a=r;for(s in a)if(e.call(a,s)&&a[s]!==null)return!1;return!0}function n(r){return r!==null?r:{}}return Sl=new i("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:n}),Sl}var yl,qf;function Ys(){if(qf)return yl;qf=1;var i=hs();return yl=new i({include:[Dm()],implicit:[OT(),kT()],explicit:[BT(),zT(),HT(),VT()]}),yl}var Ml,jf;function GT(){if(jf)return Ml;jf=1;var i=Ot();function e(){return!0}function t(){}function n(){return""}function r(s){return typeof s>"u"}return Ml=new i("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:e,construct:t,predicate:r,represent:n}),Ml}var El,$f;function WT(){if($f)return El;$f=1;var i=Ot();function e(s){if(s===null||s.length===0)return!1;var a=s,o=/\/([gim]*)$/.exec(s),l="";return!(a[0]==="/"&&(o&&(l=o[1]),l.length>3||a[a.length-l.length-1]!=="/"))}function t(s){var a=s,o=/\/([gim]*)$/.exec(s),l="";return a[0]==="/"&&(o&&(l=o[1]),a=a.slice(1,a.length-l.length-1)),new RegExp(a,l)}function n(s){var a="/"+s.source+"/";return s.global&&(a+="g"),s.multiline&&(a+="m"),s.ignoreCase&&(a+="i"),a}function r(s){return Object.prototype.toString.call(s)==="[object RegExp]"}return El=new i("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:e,construct:t,predicate:r,represent:n}),El}var bl,Kf;function XT(){if(Kf)return bl;Kf=1;var i;try{var e=Lm;i=e("esprima")}catch{typeof window<"u"&&(i=window.esprima)}var t=Ot();function n(o){if(o===null)return!1;try{var l="("+o+")",c=i.parse(l,{range:!0});return!(c.type!=="Program"||c.body.length!==1||c.body[0].type!=="ExpressionStatement"||c.body[0].expression.type!=="ArrowFunctionExpression"&&c.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function r(o){var l="("+o+")",c=i.parse(l,{range:!0}),u=[],h;if(c.type!=="Program"||c.body.length!==1||c.body[0].type!=="ExpressionStatement"||c.body[0].expression.type!=="ArrowFunctionExpression"&&c.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return c.body[0].expression.params.forEach(function(d){u.push(d.name)}),h=c.body[0].expression.body.range,c.body[0].expression.body.type==="BlockStatement"?new Function(u,l.slice(h[0]+1,h[1]-1)):new Function(u,"return "+l.slice(h[0],h[1]))}function s(o){return o.toString()}function a(o){return Object.prototype.toString.call(o)==="[object Function]"}return bl=new t("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:n,construct:r,predicate:a,represent:s}),bl}var Tl,Zf;function Qa(){if(Zf)return Tl;Zf=1;var i=hs();return Tl=i.DEFAULT=new i({include:[Ys()],explicit:[GT(),WT(),XT()]}),Tl}var Jf;function YT(){if(Jf)return Or;Jf=1;var i=us(),e=Zs(),t=RT(),n=Ys(),r=Qa(),s=Object.prototype.hasOwnProperty,a=1,o=2,l=3,c=4,u=1,h=2,d=3,p=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,x=/[\x85\u2028\u2029]/,g=/[,\[\]\{\}]/,_=/^(?:!|!!|![a-z\-]+!)$/i,m=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function M(f){return Object.prototype.toString.call(f)}function T(f){return f===10||f===13}function b(f){return f===9||f===32}function E(f){return f===9||f===32||f===10||f===13}function C(f){return f===44||f===91||f===93||f===123||f===125}function R(f){var D;return 48<=f&&f<=57?f-48:(D=f|32,97<=D&&D<=102?D-97+10:-1)}function F(f){return f===120?2:f===117?4:f===85?8:0}function v(f){return 48<=f&&f<=57?f-48:-1}function A(f){return f===48?"\0":f===97?"\x07":f===98?"\b":f===116||f===9?"	":f===110?`
`:f===118?"\v":f===102?"\f":f===114?"\r":f===101?"\x1B":f===32?" ":f===34?'"':f===47?"/":f===92?"\\":f===78?"":f===95?" ":f===76?"\u2028":f===80?"\u2029":""}function U(f){return f<=65535?String.fromCharCode(f):String.fromCharCode((f-65536>>10)+55296,(f-65536&1023)+56320)}function V(f,D,N){D==="__proto__"?Object.defineProperty(f,D,{configurable:!0,enumerable:!0,writable:!0,value:N}):f[D]=N}for(var z=new Array(256),Y=new Array(256),te=0;te<256;te++)z[te]=A(te)?1:0,Y[te]=A(te);function Z(f,D){this.input=f,this.filename=D.filename||null,this.schema=D.schema||r,this.onWarning=D.onWarning||null,this.legacy=D.legacy||!1,this.json=D.json||!1,this.listener=D.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=f.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function Q(f,D){return new e(D,new t(f.filename,f.input,f.position,f.line,f.position-f.lineStart))}function q(f,D){throw Q(f,D)}function pe(f,D){f.onWarning&&f.onWarning.call(null,Q(f,D))}var he={YAML:function(D,N,B){var $,S,I;D.version!==null&&q(D,"duplication of %YAML directive"),B.length!==1&&q(D,"YAML directive accepts exactly one argument"),$=/^([0-9]+)\.([0-9]+)$/.exec(B[0]),$===null&&q(D,"ill-formed argument of the YAML directive"),S=parseInt($[1],10),I=parseInt($[2],10),S!==1&&q(D,"unacceptable YAML version of the document"),D.version=B[0],D.checkLineBreaks=I<2,I!==1&&I!==2&&pe(D,"unsupported YAML version of the document")},TAG:function(D,N,B){var $,S;B.length!==2&&q(D,"TAG directive accepts exactly two arguments"),$=B[0],S=B[1],_.test($)||q(D,"ill-formed tag handle (first argument) of the TAG directive"),s.call(D.tagMap,$)&&q(D,'there is a previously declared suffix for "'+$+'" tag handle'),m.test(S)||q(D,"ill-formed tag prefix (second argument) of the TAG directive"),D.tagMap[$]=S}};function fe(f,D,N,B){var $,S,I,W;if(D<N){if(W=f.input.slice(D,N),B)for($=0,S=W.length;$<S;$+=1)I=W.charCodeAt($),I===9||32<=I&&I<=1114111||q(f,"expected valid JSON character");else p.test(W)&&q(f,"the stream contains non-printable characters");f.result+=W}}function Pe(f,D,N,B){var $,S,I,W;for(i.isObject(N)||q(f,"cannot merge mappings; the provided source object is unacceptable"),$=Object.keys(N),I=0,W=$.length;I<W;I+=1)S=$[I],s.call(D,S)||(V(D,S,N[S]),B[S]=!0)}function we(f,D,N,B,$,S,I,W){var k,H;if(Array.isArray($))for($=Array.prototype.slice.call($),k=0,H=$.length;k<H;k+=1)Array.isArray($[k])&&q(f,"nested arrays are not supported inside keys"),typeof $=="object"&&M($[k])==="[object Object]"&&($[k]="[object Object]");if(typeof $=="object"&&M($)==="[object Object]"&&($="[object Object]"),$=String($),D===null&&(D={}),B==="tag:yaml.org,2002:merge")if(Array.isArray(S))for(k=0,H=S.length;k<H;k+=1)Pe(f,D,S[k],N);else Pe(f,D,S,N);else!f.json&&!s.call(N,$)&&s.call(D,$)&&(f.line=I||f.line,f.position=W||f.position,q(f,"duplicated mapping key")),V(D,$,S),delete N[$];return D}function He(f){var D;D=f.input.charCodeAt(f.position),D===10?f.position++:D===13?(f.position++,f.input.charCodeAt(f.position)===10&&f.position++):q(f,"a line break is expected"),f.line+=1,f.lineStart=f.position}function Te(f,D,N){for(var B=0,$=f.input.charCodeAt(f.position);$!==0;){for(;b($);)$=f.input.charCodeAt(++f.position);if(D&&$===35)do $=f.input.charCodeAt(++f.position);while($!==10&&$!==13&&$!==0);if(T($))for(He(f),$=f.input.charCodeAt(f.position),B++,f.lineIndent=0;$===32;)f.lineIndent++,$=f.input.charCodeAt(++f.position);else break}return N!==-1&&B!==0&&f.lineIndent<N&&pe(f,"deficient indentation"),B}function ae(f){var D=f.position,N;return N=f.input.charCodeAt(D),!!((N===45||N===46)&&N===f.input.charCodeAt(D+1)&&N===f.input.charCodeAt(D+2)&&(D+=3,N=f.input.charCodeAt(D),N===0||E(N)))}function ce(f,D){D===1?f.result+=" ":D>1&&(f.result+=i.repeat(`
`,D-1))}function Se(f,D,N){var B,$,S,I,W,k,H,J,X=f.kind,ee=f.result,re;if(re=f.input.charCodeAt(f.position),E(re)||C(re)||re===35||re===38||re===42||re===33||re===124||re===62||re===39||re===34||re===37||re===64||re===96||(re===63||re===45)&&($=f.input.charCodeAt(f.position+1),E($)||N&&C($)))return!1;for(f.kind="scalar",f.result="",S=I=f.position,W=!1;re!==0;){if(re===58){if($=f.input.charCodeAt(f.position+1),E($)||N&&C($))break}else if(re===35){if(B=f.input.charCodeAt(f.position-1),E(B))break}else{if(f.position===f.lineStart&&ae(f)||N&&C(re))break;if(T(re))if(k=f.line,H=f.lineStart,J=f.lineIndent,Te(f,!1,-1),f.lineIndent>=D){W=!0,re=f.input.charCodeAt(f.position);continue}else{f.position=I,f.line=k,f.lineStart=H,f.lineIndent=J;break}}W&&(fe(f,S,I,!1),ce(f,f.line-k),S=I=f.position,W=!1),b(re)||(I=f.position+1),re=f.input.charCodeAt(++f.position)}return fe(f,S,I,!1),f.result?!0:(f.kind=X,f.result=ee,!1)}function Fe(f,D){var N,B,$;if(N=f.input.charCodeAt(f.position),N!==39)return!1;for(f.kind="scalar",f.result="",f.position++,B=$=f.position;(N=f.input.charCodeAt(f.position))!==0;)if(N===39)if(fe(f,B,f.position,!0),N=f.input.charCodeAt(++f.position),N===39)B=f.position,f.position++,$=f.position;else return!0;else T(N)?(fe(f,B,$,!0),ce(f,Te(f,!1,D)),B=$=f.position):f.position===f.lineStart&&ae(f)?q(f,"unexpected end of the document within a single quoted scalar"):(f.position++,$=f.position);q(f,"unexpected end of the stream within a single quoted scalar")}function Me(f,D){var N,B,$,S,I,W;if(W=f.input.charCodeAt(f.position),W!==34)return!1;for(f.kind="scalar",f.result="",f.position++,N=B=f.position;(W=f.input.charCodeAt(f.position))!==0;){if(W===34)return fe(f,N,f.position,!0),f.position++,!0;if(W===92){if(fe(f,N,f.position,!0),W=f.input.charCodeAt(++f.position),T(W))Te(f,!1,D);else if(W<256&&z[W])f.result+=Y[W],f.position++;else if((I=F(W))>0){for($=I,S=0;$>0;$--)W=f.input.charCodeAt(++f.position),(I=R(W))>=0?S=(S<<4)+I:q(f,"expected hexadecimal character");f.result+=U(S),f.position++}else q(f,"unknown escape sequence");N=B=f.position}else T(W)?(fe(f,N,B,!0),ce(f,Te(f,!1,D)),N=B=f.position):f.position===f.lineStart&&ae(f)?q(f,"unexpected end of the document within a double quoted scalar"):(f.position++,B=f.position)}q(f,"unexpected end of the stream within a double quoted scalar")}function Xe(f,D){var N=!0,B,$=f.tag,S,I=f.anchor,W,k,H,J,X,ee={},re,L,le,se;if(se=f.input.charCodeAt(f.position),se===91)k=93,X=!1,S=[];else if(se===123)k=125,X=!0,S={};else return!1;for(f.anchor!==null&&(f.anchorMap[f.anchor]=S),se=f.input.charCodeAt(++f.position);se!==0;){if(Te(f,!0,D),se=f.input.charCodeAt(f.position),se===k)return f.position++,f.tag=$,f.anchor=I,f.kind=X?"mapping":"sequence",f.result=S,!0;N||q(f,"missed comma between flow collection entries"),L=re=le=null,H=J=!1,se===63&&(W=f.input.charCodeAt(f.position+1),E(W)&&(H=J=!0,f.position++,Te(f,!0,D))),B=f.line,O(f,D,a,!1,!0),L=f.tag,re=f.result,Te(f,!0,D),se=f.input.charCodeAt(f.position),(J||f.line===B)&&se===58&&(H=!0,se=f.input.charCodeAt(++f.position),Te(f,!0,D),O(f,D,a,!1,!0),le=f.result),X?we(f,S,ee,L,re,le):H?S.push(we(f,null,ee,L,re,le)):S.push(re),Te(f,!0,D),se=f.input.charCodeAt(f.position),se===44?(N=!0,se=f.input.charCodeAt(++f.position)):N=!1}q(f,"unexpected end of the stream within a flow collection")}function dt(f,D){var N,B,$=u,S=!1,I=!1,W=D,k=0,H=!1,J,X;if(X=f.input.charCodeAt(f.position),X===124)B=!1;else if(X===62)B=!0;else return!1;for(f.kind="scalar",f.result="";X!==0;)if(X=f.input.charCodeAt(++f.position),X===43||X===45)u===$?$=X===43?d:h:q(f,"repeat of a chomping mode identifier");else if((J=v(X))>=0)J===0?q(f,"bad explicit indentation width of a block scalar; it cannot be less than one"):I?q(f,"repeat of an indentation width identifier"):(W=D+J-1,I=!0);else break;if(b(X)){do X=f.input.charCodeAt(++f.position);while(b(X));if(X===35)do X=f.input.charCodeAt(++f.position);while(!T(X)&&X!==0)}for(;X!==0;){for(He(f),f.lineIndent=0,X=f.input.charCodeAt(f.position);(!I||f.lineIndent<W)&&X===32;)f.lineIndent++,X=f.input.charCodeAt(++f.position);if(!I&&f.lineIndent>W&&(W=f.lineIndent),T(X)){k++;continue}if(f.lineIndent<W){$===d?f.result+=i.repeat(`
`,S?1+k:k):$===u&&S&&(f.result+=`
`);break}for(B?b(X)?(H=!0,f.result+=i.repeat(`
`,S?1+k:k)):H?(H=!1,f.result+=i.repeat(`
`,k+1)):k===0?S&&(f.result+=" "):f.result+=i.repeat(`
`,k):f.result+=i.repeat(`
`,S?1+k:k),S=!0,I=!0,k=0,N=f.position;!T(X)&&X!==0;)X=f.input.charCodeAt(++f.position);fe(f,N,f.position,!1)}return!0}function Ve(f,D){var N,B=f.tag,$=f.anchor,S=[],I,W=!1,k;for(f.anchor!==null&&(f.anchorMap[f.anchor]=S),k=f.input.charCodeAt(f.position);k!==0&&!(k!==45||(I=f.input.charCodeAt(f.position+1),!E(I)));){if(W=!0,f.position++,Te(f,!0,-1)&&f.lineIndent<=D){S.push(null),k=f.input.charCodeAt(f.position);continue}if(N=f.line,O(f,D,l,!1,!0),S.push(f.result),Te(f,!0,-1),k=f.input.charCodeAt(f.position),(f.line===N||f.lineIndent>D)&&k!==0)q(f,"bad indentation of a sequence entry");else if(f.lineIndent<D)break}return W?(f.tag=B,f.anchor=$,f.kind="sequence",f.result=S,!0):!1}function $e(f,D,N){var B,$,S,I,W=f.tag,k=f.anchor,H={},J={},X=null,ee=null,re=null,L=!1,le=!1,se;for(f.anchor!==null&&(f.anchorMap[f.anchor]=H),se=f.input.charCodeAt(f.position);se!==0;){if(B=f.input.charCodeAt(f.position+1),S=f.line,I=f.position,(se===63||se===58)&&E(B))se===63?(L&&(we(f,H,J,X,ee,null),X=ee=re=null),le=!0,L=!0,$=!0):L?(L=!1,$=!0):q(f,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),f.position+=1,se=B;else if(O(f,N,o,!1,!0))if(f.line===S){for(se=f.input.charCodeAt(f.position);b(se);)se=f.input.charCodeAt(++f.position);if(se===58)se=f.input.charCodeAt(++f.position),E(se)||q(f,"a whitespace character is expected after the key-value separator within a block mapping"),L&&(we(f,H,J,X,ee,null),X=ee=re=null),le=!0,L=!1,$=!1,X=f.tag,ee=f.result;else if(le)q(f,"can not read an implicit mapping pair; a colon is missed");else return f.tag=W,f.anchor=k,!0}else if(le)q(f,"can not read a block mapping entry; a multiline key may not be an implicit key");else return f.tag=W,f.anchor=k,!0;else break;if((f.line===S||f.lineIndent>D)&&(O(f,D,c,!0,$)&&(L?ee=f.result:re=f.result),L||(we(f,H,J,X,ee,re,S,I),X=ee=re=null),Te(f,!0,-1),se=f.input.charCodeAt(f.position)),f.lineIndent>D&&se!==0)q(f,"bad indentation of a mapping entry");else if(f.lineIndent<D)break}return L&&we(f,H,J,X,ee,null),le&&(f.tag=W,f.anchor=k,f.kind="mapping",f.result=H),le}function Je(f){var D,N=!1,B=!1,$,S,I;if(I=f.input.charCodeAt(f.position),I!==33)return!1;if(f.tag!==null&&q(f,"duplication of a tag property"),I=f.input.charCodeAt(++f.position),I===60?(N=!0,I=f.input.charCodeAt(++f.position)):I===33?(B=!0,$="!!",I=f.input.charCodeAt(++f.position)):$="!",D=f.position,N){do I=f.input.charCodeAt(++f.position);while(I!==0&&I!==62);f.position<f.length?(S=f.input.slice(D,f.position),I=f.input.charCodeAt(++f.position)):q(f,"unexpected end of the stream within a verbatim tag")}else{for(;I!==0&&!E(I);)I===33&&(B?q(f,"tag suffix cannot contain exclamation marks"):($=f.input.slice(D-1,f.position+1),_.test($)||q(f,"named tag handle cannot contain such characters"),B=!0,D=f.position+1)),I=f.input.charCodeAt(++f.position);S=f.input.slice(D,f.position),g.test(S)&&q(f,"tag suffix cannot contain flow indicator characters")}return S&&!m.test(S)&&q(f,"tag name cannot contain such characters: "+S),N?f.tag=S:s.call(f.tagMap,$)?f.tag=f.tagMap[$]+S:$==="!"?f.tag="!"+S:$==="!!"?f.tag="tag:yaml.org,2002:"+S:q(f,'undeclared tag handle "'+$+'"'),!0}function Oe(f){var D,N;if(N=f.input.charCodeAt(f.position),N!==38)return!1;for(f.anchor!==null&&q(f,"duplication of an anchor property"),N=f.input.charCodeAt(++f.position),D=f.position;N!==0&&!E(N)&&!C(N);)N=f.input.charCodeAt(++f.position);return f.position===D&&q(f,"name of an anchor node must contain at least one character"),f.anchor=f.input.slice(D,f.position),!0}function pt(f){var D,N,B;if(B=f.input.charCodeAt(f.position),B!==42)return!1;for(B=f.input.charCodeAt(++f.position),D=f.position;B!==0&&!E(B)&&!C(B);)B=f.input.charCodeAt(++f.position);return f.position===D&&q(f,"name of an alias node must contain at least one character"),N=f.input.slice(D,f.position),s.call(f.anchorMap,N)||q(f,'unidentified alias "'+N+'"'),f.result=f.anchorMap[N],Te(f,!0,-1),!0}function O(f,D,N,B,$){var S,I,W,k=1,H=!1,J=!1,X,ee,re,L,le;if(f.listener!==null&&f.listener("open",f),f.tag=null,f.anchor=null,f.kind=null,f.result=null,S=I=W=c===N||l===N,B&&Te(f,!0,-1)&&(H=!0,f.lineIndent>D?k=1:f.lineIndent===D?k=0:f.lineIndent<D&&(k=-1)),k===1)for(;Je(f)||Oe(f);)Te(f,!0,-1)?(H=!0,W=S,f.lineIndent>D?k=1:f.lineIndent===D?k=0:f.lineIndent<D&&(k=-1)):W=!1;if(W&&(W=H||$),(k===1||c===N)&&(a===N||o===N?L=D:L=D+1,le=f.position-f.lineStart,k===1?W&&(Ve(f,le)||$e(f,le,L))||Xe(f,L)?J=!0:(I&&dt(f,L)||Fe(f,L)||Me(f,L)?J=!0:pt(f)?(J=!0,(f.tag!==null||f.anchor!==null)&&q(f,"alias node should not have any properties")):Se(f,L,a===N)&&(J=!0,f.tag===null&&(f.tag="?")),f.anchor!==null&&(f.anchorMap[f.anchor]=f.result)):k===0&&(J=W&&Ve(f,le))),f.tag!==null&&f.tag!=="!")if(f.tag==="?"){for(f.result!==null&&f.kind!=="scalar"&&q(f,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+f.kind+'"'),X=0,ee=f.implicitTypes.length;X<ee;X+=1)if(re=f.implicitTypes[X],re.resolve(f.result)){f.result=re.construct(f.result),f.tag=re.tag,f.anchor!==null&&(f.anchorMap[f.anchor]=f.result);break}}else s.call(f.typeMap[f.kind||"fallback"],f.tag)?(re=f.typeMap[f.kind||"fallback"][f.tag],f.result!==null&&re.kind!==f.kind&&q(f,"unacceptable node kind for !<"+f.tag+'> tag; it should be "'+re.kind+'", not "'+f.kind+'"'),re.resolve(f.result)?(f.result=re.construct(f.result),f.anchor!==null&&(f.anchorMap[f.anchor]=f.result)):q(f,"cannot resolve a node with !<"+f.tag+"> explicit tag")):q(f,"unknown tag !<"+f.tag+">");return f.listener!==null&&f.listener("close",f),f.tag!==null||f.anchor!==null||J}function mt(f){var D=f.position,N,B,$,S=!1,I;for(f.version=null,f.checkLineBreaks=f.legacy,f.tagMap={},f.anchorMap={};(I=f.input.charCodeAt(f.position))!==0&&(Te(f,!0,-1),I=f.input.charCodeAt(f.position),!(f.lineIndent>0||I!==37));){for(S=!0,I=f.input.charCodeAt(++f.position),N=f.position;I!==0&&!E(I);)I=f.input.charCodeAt(++f.position);for(B=f.input.slice(N,f.position),$=[],B.length<1&&q(f,"directive name must not be less than one character in length");I!==0;){for(;b(I);)I=f.input.charCodeAt(++f.position);if(I===35){do I=f.input.charCodeAt(++f.position);while(I!==0&&!T(I));break}if(T(I))break;for(N=f.position;I!==0&&!E(I);)I=f.input.charCodeAt(++f.position);$.push(f.input.slice(N,f.position))}I!==0&&He(f),s.call(he,B)?he[B](f,B,$):pe(f,'unknown document directive "'+B+'"')}if(Te(f,!0,-1),f.lineIndent===0&&f.input.charCodeAt(f.position)===45&&f.input.charCodeAt(f.position+1)===45&&f.input.charCodeAt(f.position+2)===45?(f.position+=3,Te(f,!0,-1)):S&&q(f,"directives end mark is expected"),O(f,f.lineIndent-1,c,!1,!0),Te(f,!0,-1),f.checkLineBreaks&&x.test(f.input.slice(D,f.position))&&pe(f,"non-ASCII line breaks are interpreted as content"),f.documents.push(f.result),f.position===f.lineStart&&ae(f)){f.input.charCodeAt(f.position)===46&&(f.position+=3,Te(f,!0,-1));return}if(f.position<f.length-1)q(f,"end of the stream or a document separator is expected");else return}function Ye(f,D){f=String(f),D=D||{},f.length!==0&&(f.charCodeAt(f.length-1)!==10&&f.charCodeAt(f.length-1)!==13&&(f+=`
`),f.charCodeAt(0)===65279&&(f=f.slice(1)));var N=new Z(f,D),B=f.indexOf("\0");for(B!==-1&&(N.position=B,q(N,"null byte is not allowed in input")),N.input+="\0";N.input.charCodeAt(N.position)===32;)N.lineIndent+=1,N.position+=1;for(;N.position<N.length-1;)mt(N);return N.documents}function et(f,D,N){D!==null&&typeof D=="object"&&typeof N>"u"&&(N=D,D=null);var B=Ye(f,N);if(typeof D!="function")return B;for(var $=0,S=B.length;$<S;$+=1)D(B[$])}function Ee(f,D){var N=Ye(f,D);if(N.length!==0){if(N.length===1)return N[0];throw new e("expected a single document in the stream, but found more")}}function P(f,D,N){return typeof D=="object"&&D!==null&&typeof N>"u"&&(N=D,D=null),et(f,D,i.extend({schema:n},N))}function y(f,D){return Ee(f,i.extend({schema:n},D))}return Or.loadAll=et,Or.load=Ee,Or.safeLoadAll=P,Or.safeLoad=y,Or}var ba={},Qf;function qT(){if(Qf)return ba;Qf=1;var i=us(),e=Zs(),t=Qa(),n=Ys(),r=Object.prototype.toString,s=Object.prototype.hasOwnProperty,a=9,o=10,l=13,c=32,u=33,h=34,d=35,p=37,x=38,g=39,_=42,m=44,M=45,T=58,b=61,E=62,C=63,R=64,F=91,v=93,A=96,U=123,V=124,z=125,Y={};Y[0]="\\0",Y[7]="\\a",Y[8]="\\b",Y[9]="\\t",Y[10]="\\n",Y[11]="\\v",Y[12]="\\f",Y[13]="\\r",Y[27]="\\e",Y[34]='\\"',Y[92]="\\\\",Y[133]="\\N",Y[160]="\\_",Y[8232]="\\L",Y[8233]="\\P";var te=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function Z(S,I){var W,k,H,J,X,ee,re;if(I===null)return{};for(W={},k=Object.keys(I),H=0,J=k.length;H<J;H+=1)X=k[H],ee=String(I[X]),X.slice(0,2)==="!!"&&(X="tag:yaml.org,2002:"+X.slice(2)),re=S.compiledTypeMap.fallback[X],re&&s.call(re.styleAliases,ee)&&(ee=re.styleAliases[ee]),W[X]=ee;return W}function Q(S){var I,W,k;if(I=S.toString(16).toUpperCase(),S<=255)W="x",k=2;else if(S<=65535)W="u",k=4;else if(S<=4294967295)W="U",k=8;else throw new e("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+W+i.repeat("0",k-I.length)+I}function q(S){this.schema=S.schema||t,this.indent=Math.max(1,S.indent||2),this.noArrayIndent=S.noArrayIndent||!1,this.skipInvalid=S.skipInvalid||!1,this.flowLevel=i.isNothing(S.flowLevel)?-1:S.flowLevel,this.styleMap=Z(this.schema,S.styles||null),this.sortKeys=S.sortKeys||!1,this.lineWidth=S.lineWidth||80,this.noRefs=S.noRefs||!1,this.noCompatMode=S.noCompatMode||!1,this.condenseFlow=S.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function pe(S,I){for(var W=i.repeat(" ",I),k=0,H=-1,J="",X,ee=S.length;k<ee;)H=S.indexOf(`
`,k),H===-1?(X=S.slice(k),k=ee):(X=S.slice(k,H+1),k=H+1),X.length&&X!==`
`&&(J+=W),J+=X;return J}function he(S,I){return`
`+i.repeat(" ",S.indent*I)}function fe(S,I){var W,k,H;for(W=0,k=S.implicitTypes.length;W<k;W+=1)if(H=S.implicitTypes[W],H.resolve(I))return!0;return!1}function Pe(S){return S===c||S===a}function we(S){return 32<=S&&S<=126||161<=S&&S<=55295&&S!==8232&&S!==8233||57344<=S&&S<=65533&&S!==65279||65536<=S&&S<=1114111}function He(S){return we(S)&&!Pe(S)&&S!==65279&&S!==l&&S!==o}function Te(S,I){return we(S)&&S!==65279&&S!==m&&S!==F&&S!==v&&S!==U&&S!==z&&S!==T&&(S!==d||I&&He(I))}function ae(S){return we(S)&&S!==65279&&!Pe(S)&&S!==M&&S!==C&&S!==T&&S!==m&&S!==F&&S!==v&&S!==U&&S!==z&&S!==d&&S!==x&&S!==_&&S!==u&&S!==V&&S!==b&&S!==E&&S!==g&&S!==h&&S!==p&&S!==R&&S!==A}function ce(S){var I=/^\n* /;return I.test(S)}var Se=1,Fe=2,Me=3,Xe=4,dt=5;function Ve(S,I,W,k,H){var J,X,ee,re=!1,L=!1,le=k!==-1,se=-1,de=ae(S.charCodeAt(0))&&!Pe(S.charCodeAt(S.length-1));if(I)for(J=0;J<S.length;J++){if(X=S.charCodeAt(J),!we(X))return dt;ee=J>0?S.charCodeAt(J-1):null,de=de&&Te(X,ee)}else{for(J=0;J<S.length;J++){if(X=S.charCodeAt(J),X===o)re=!0,le&&(L=L||J-se-1>k&&S[se+1]!==" ",se=J);else if(!we(X))return dt;ee=J>0?S.charCodeAt(J-1):null,de=de&&Te(X,ee)}L=L||le&&J-se-1>k&&S[se+1]!==" "}return!re&&!L?de&&!H(S)?Se:Fe:W>9&&ce(S)?dt:L?Xe:Me}function $e(S,I,W,k){S.dump=(function(){if(I.length===0)return"''";if(!S.noCompatMode&&te.indexOf(I)!==-1)return"'"+I+"'";var H=S.indent*Math.max(1,W),J=S.lineWidth===-1?-1:Math.max(Math.min(S.lineWidth,40),S.lineWidth-H),X=k||S.flowLevel>-1&&W>=S.flowLevel;function ee(re){return fe(S,re)}switch(Ve(I,X,S.indent,J,ee)){case Se:return I;case Fe:return"'"+I.replace(/'/g,"''")+"'";case Me:return"|"+Je(I,S.indent)+Oe(pe(I,H));case Xe:return">"+Je(I,S.indent)+Oe(pe(pt(I,J),H));case dt:return'"'+mt(I)+'"';default:throw new e("impossible error: invalid scalar style")}})()}function Je(S,I){var W=ce(S)?String(I):"",k=S[S.length-1]===`
`,H=k&&(S[S.length-2]===`
`||S===`
`),J=H?"+":k?"":"-";return W+J+`
`}function Oe(S){return S[S.length-1]===`
`?S.slice(0,-1):S}function pt(S,I){for(var W=/(\n+)([^\n]*)/g,k=(function(){var L=S.indexOf(`
`);return L=L!==-1?L:S.length,W.lastIndex=L,O(S.slice(0,L),I)})(),H=S[0]===`
`||S[0]===" ",J,X;X=W.exec(S);){var ee=X[1],re=X[2];J=re[0]===" ",k+=ee+(!H&&!J&&re!==""?`
`:"")+O(re,I),H=J}return k}function O(S,I){if(S===""||S[0]===" ")return S;for(var W=/ [^ ]/g,k,H=0,J,X=0,ee=0,re="";k=W.exec(S);)ee=k.index,ee-H>I&&(J=X>H?X:ee,re+=`
`+S.slice(H,J),H=J+1),X=ee;return re+=`
`,S.length-H>I&&X>H?re+=S.slice(H,X)+`
`+S.slice(X+1):re+=S.slice(H),re.slice(1)}function mt(S){for(var I="",W,k,H,J=0;J<S.length;J++){if(W=S.charCodeAt(J),W>=55296&&W<=56319&&(k=S.charCodeAt(J+1),k>=56320&&k<=57343)){I+=Q((W-55296)*1024+k-56320+65536),J++;continue}H=Y[W],I+=!H&&we(W)?S[J]:H||Q(W)}return I}function Ye(S,I,W){var k="",H=S.tag,J,X;for(J=0,X=W.length;J<X;J+=1)f(S,I,W[J],!1,!1)&&(J!==0&&(k+=","+(S.condenseFlow?"":" ")),k+=S.dump);S.tag=H,S.dump="["+k+"]"}function et(S,I,W,k){var H="",J=S.tag,X,ee;for(X=0,ee=W.length;X<ee;X+=1)f(S,I+1,W[X],!0,!0)&&((!k||X!==0)&&(H+=he(S,I)),S.dump&&o===S.dump.charCodeAt(0)?H+="-":H+="- ",H+=S.dump);S.tag=J,S.dump=H||"[]"}function Ee(S,I,W){var k="",H=S.tag,J=Object.keys(W),X,ee,re,L,le;for(X=0,ee=J.length;X<ee;X+=1)le="",X!==0&&(le+=", "),S.condenseFlow&&(le+='"'),re=J[X],L=W[re],f(S,I,re,!1,!1)&&(S.dump.length>1024&&(le+="? "),le+=S.dump+(S.condenseFlow?'"':"")+":"+(S.condenseFlow?"":" "),f(S,I,L,!1,!1)&&(le+=S.dump,k+=le));S.tag=H,S.dump="{"+k+"}"}function P(S,I,W,k){var H="",J=S.tag,X=Object.keys(W),ee,re,L,le,se,de;if(S.sortKeys===!0)X.sort();else if(typeof S.sortKeys=="function")X.sort(S.sortKeys);else if(S.sortKeys)throw new e("sortKeys must be a boolean or a function");for(ee=0,re=X.length;ee<re;ee+=1)de="",(!k||ee!==0)&&(de+=he(S,I)),L=X[ee],le=W[L],f(S,I+1,L,!0,!0,!0)&&(se=S.tag!==null&&S.tag!=="?"||S.dump&&S.dump.length>1024,se&&(S.dump&&o===S.dump.charCodeAt(0)?de+="?":de+="? "),de+=S.dump,se&&(de+=he(S,I)),f(S,I+1,le,!0,se)&&(S.dump&&o===S.dump.charCodeAt(0)?de+=":":de+=": ",de+=S.dump,H+=de));S.tag=J,S.dump=H||"{}"}function y(S,I,W){var k,H,J,X,ee,re;for(H=W?S.explicitTypes:S.implicitTypes,J=0,X=H.length;J<X;J+=1)if(ee=H[J],(ee.instanceOf||ee.predicate)&&(!ee.instanceOf||typeof I=="object"&&I instanceof ee.instanceOf)&&(!ee.predicate||ee.predicate(I))){if(S.tag=W?ee.tag:"?",ee.represent){if(re=S.styleMap[ee.tag]||ee.defaultStyle,r.call(ee.represent)==="[object Function]")k=ee.represent(I,re);else if(s.call(ee.represent,re))k=ee.represent[re](I,re);else throw new e("!<"+ee.tag+'> tag resolver accepts not "'+re+'" style');S.dump=k}return!0}return!1}function f(S,I,W,k,H,J){S.tag=null,S.dump=W,y(S,W,!1)||y(S,W,!0);var X=r.call(S.dump);k&&(k=S.flowLevel<0||S.flowLevel>I);var ee=X==="[object Object]"||X==="[object Array]",re,L;if(ee&&(re=S.duplicates.indexOf(W),L=re!==-1),(S.tag!==null&&S.tag!=="?"||L||S.indent!==2&&I>0)&&(H=!1),L&&S.usedDuplicates[re])S.dump="*ref_"+re;else{if(ee&&L&&!S.usedDuplicates[re]&&(S.usedDuplicates[re]=!0),X==="[object Object]")k&&Object.keys(S.dump).length!==0?(P(S,I,S.dump,H),L&&(S.dump="&ref_"+re+S.dump)):(Ee(S,I,S.dump),L&&(S.dump="&ref_"+re+" "+S.dump));else if(X==="[object Array]"){var le=S.noArrayIndent&&I>0?I-1:I;k&&S.dump.length!==0?(et(S,le,S.dump,H),L&&(S.dump="&ref_"+re+S.dump)):(Ye(S,le,S.dump),L&&(S.dump="&ref_"+re+" "+S.dump))}else if(X==="[object String]")S.tag!=="?"&&$e(S,S.dump,I,J);else{if(S.skipInvalid)return!1;throw new e("unacceptable kind of an object to dump "+X)}S.tag!==null&&S.tag!=="?"&&(S.dump="!<"+S.tag+"> "+S.dump)}return!0}function D(S,I){var W=[],k=[],H,J;for(N(S,W,k),H=0,J=k.length;H<J;H+=1)I.duplicates.push(W[k[H]]);I.usedDuplicates=new Array(J)}function N(S,I,W){var k,H,J;if(S!==null&&typeof S=="object")if(H=I.indexOf(S),H!==-1)W.indexOf(H)===-1&&W.push(H);else if(I.push(S),Array.isArray(S))for(H=0,J=S.length;H<J;H+=1)N(S[H],I,W);else for(k=Object.keys(S),H=0,J=k.length;H<J;H+=1)N(S[k[H]],I,W)}function B(S,I){I=I||{};var W=new q(I);return W.noRefs||D(S,W),f(W,0,S,!0,!0)?W.dump+`
`:""}function $(S,I){return B(S,i.extend({schema:n},I))}return ba.dump=B,ba.safeDump=$,ba}var ed;function jT(){if(ed)return xt;ed=1;var i=YT(),e=qT();function t(n){return function(){throw new Error("Function "+n+" is deprecated and cannot be used.")}}return xt.Type=Ot(),xt.Schema=hs(),xt.FAILSAFE_SCHEMA=Hc(),xt.JSON_SCHEMA=Pm(),xt.CORE_SCHEMA=Dm(),xt.DEFAULT_SAFE_SCHEMA=Ys(),xt.DEFAULT_FULL_SCHEMA=Qa(),xt.load=i.load,xt.loadAll=i.loadAll,xt.safeLoad=i.safeLoad,xt.safeLoadAll=i.safeLoadAll,xt.dump=e.dump,xt.safeDump=e.safeDump,xt.YAMLException=Zs(),xt.MINIMAL_SCHEMA=Hc(),xt.SAFE_SCHEMA=Ys(),xt.DEFAULT_SCHEMA=Qa(),xt.scan=t("scan"),xt.parse=t("parse"),xt.compose=t("compose"),xt.addConstructor=t("addConstructor"),xt}var Al,td;function $T(){if(td)return Al;td=1;var i=jT();return Al=i,Al}var nd;function KT(){if(nd)return Ea.exports;nd=1;var i=$T(),e="\\ufeff?",t=typeof process<"u"?process.platform:"",n="^("+e+"(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$"+(t==="win32"?"\\r?":"")+"(?:\\n)?)",r=new RegExp(n,"m");Ea.exports=s,Ea.exports.test=l;function s(c,u){c=c||"";var h={allowUnsafe:!1};u=u instanceof Object?{...h,...u}:h,u.allowUnsafe=!!u.allowUnsafe;var d=c.split(/(\r?\n)/);return d[0]&&/= yaml =|---/.test(d[0])?o(c,u.allowUnsafe):{attributes:{},body:c,bodyBegin:1}}function a(c,u){for(var h=1,d=u.indexOf(`
`),p=c.index+c[0].length;d!==-1;){if(d>=p)return h;h++,d=u.indexOf(`
`,d+1)}return h}function o(c,u){var h=r.exec(c);if(!h)return{attributes:{},body:c,bodyBegin:1};var d=u?i.load:i.safeLoad,p=h[h.length-1].replace(/^\s+|\s+$/g,""),x=d(p)||{},g=c.replace(h[0],""),_=a(h,c);return{attributes:x,body:g,bodyBegin:_,frontmatter:p}}function l(c){return c=c||"",r.test(c)}return Ea.exports}var ZT=KT();const id=CT(ZT),JT=`<div class="about-container">
    <h1>{{title}}</h1>
    <h3>Welcome, my name is {{name}}</h3>
    <hr>
    <div class="bio-content">
        {{bio}}
    </div>
</div>`,QT=`<div class="contact-card text-shadow-box">
    <h1>Contact</h1>
    <p><b>Name:</b> {{name}}</p>
    <p><b>Role:</b> {{title}}</p>
    <h1>Connect with me</h1>
    <div class="icon-grid">
        <a href="{{github}}" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="{{linkedin}}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="{{firefox}}" target="_blank"><i class="fa-brands fa-firefox"></i></a>
<a href="mailto:{{email}}" target="_blank"><i class="fa-solid fa-at"></i></a>    </div>
</div>`,eA=`<div class="project-tile-large">
    <div class="project-header">
        <h2>{{title}}</h2>
        <span class="project-date">{{date}}</span>
    </div>
    <div class="project-body">
        {{content}} </div>
</div>`,tA=`name: "Wolfram KNan"
title: "Certified Machine Learning Engineer | Senior SW Consultant"
location: "Germany"
github: "https://github.com/knanw"
linkedin: "https://linkedin.com/in/knan"
firefox: "knanw@outlook.com"`,nA=`---
title: "About me"
name: "Wolfram!"
---

## Machine Learning Engineer | Senior SW Consultant

### PROFESSIONAL SUMMARY  
  
Senior Software Consultant with 10+ years of experience in Go, Java, and Cloud-native infrastructures, specializing in the transition to Machine Learning Engineering. Certified by Sorbonne University, I combine deep expertise in scalable backend systems with advanced knowledge in MLOps, RAG architectures, and Computer Vision. Proven track record in automating complex development lifecycles, now focused on deploying high-performance AI models and robust data pipelines.

### WORK EXPERIENCE  
  
Professional Sabbatical & AI Transformation  
Liora (Certified by Sorbonne University) Paris (Remote) | 10.024 - 03.2026  
- Deep Learning & CV: Engineered Object Detection and Classification models using CNNs, RNNs, PyTorch, and TensorFlow/Keras.
- Data Science: Developed a Hybrid Recommendation System; drove end-to-end data preprocessing and feature engineering.
- Evaluation & Viz: Analyzed performance via Precision-Recall, F1-Score, and Confusion Matrices; visualized complex training dynamics.
- MLOps & GenAI: Deployed RAG architectures, LLM pipelines, and Agentic AI (LangChain) using MLFlow, ZenML, and Vector DBs.

Senior Software Consultant  
Geek In Business Karlshuld, Germany | 09.2021 - 09.2025  
- Platform Engineering (Go/Backstage.io): Engineered self-service ootstrapping tool using Go (Gin) and GitHub Actions to automate standardized microservice generation, eliminating manual infrastructure setup and standardizing CI/CD provisioning (Tekton/K8s).
- Legacy Modernization & Cloud-Native Full-Stack Development: Implemented a Costume Rental Management system and manufacturing order processing system as well as creating frontends using Vue.js, JakartaEE (Quarkus), complete replacement of a legacy system with a new platform into a modern and scalable Docker/Linux environment.
- Data & Legacy Migration: Led a database migration from PostgreSQL to SQL Server and refactored core Product Information Systems, achieving measurable gains in data processing speed and reducing operational costs for data managers.
- Observability & Data Visualization: Developed custom Backstage.io plugins (React/Node.js) to automate Scrum reporting and interactive Technology Radars (D3.js), centralizing data from Jira, Prometheus, and NexusIQ to enhance cross-team transparency and reducing manaul reporting effort for stakeholders.

SAP SW Engineer (EWM, SD/MM, IS-H, FI) | 01.2017 - 03.2021
- ProSiebenSat.1, Munich, Germany
- Swisslog(KUKA), Buchs, Switzerland
- Oettinger Davidoff, Basel, Switzerland
- Cerner(Oracle), Berlin, Germany

Various internships during the study of Applied Informatics (programming)  
03.2013 - 09.2016
- Microsoft NAV, Hermes, Shanghai, China (3-months)
- MS Microsoft, QUIBIQ, Stuttgart
- Microsoft IoT, QUIBIQ, Stuttgart
- SAP Consulting, Ageto, Leipzig
- Java (eSecurity), Ageto, Jena

Java- Student Trainee  
Webtrekk, Berlin, Germany | 10.2013 - 05.2014

Customer Experience Representative  
CA Technologies (Broadcom), Barcelona, Spain | 10.2011 - 05.2012

Webdesign Internship and language study  
Machinas, Barcelona, Spain | 06.2010 - 09.2011

Civilian service   
Clinical Center, Regensburg | 08.2004 - 04.2005
  
  
### EDUCATION  
Machine Learning Engineering Diploma  
Liora & Sorbonne University, Paris | 10.2025 - 04.2026
- Focus: Data Science, Deep Learning and MLOps

B.Sc. Applied Informatics  
University of Applied Sciences, Berlin | 04.2013 - 11.2016
- Focus: Software Engineering, Distributed Systems
- Scholarship Polytechnic University Porto, Portugal
- 3.price Microsoft Hackathon

Diplom Visual Arts (Univ.)  
Academy of Fine Arts, Nuremberg | 10.2006 - 03.2009
- Scholarships University of Applied Arts Vienna, Austria

Art Academy Regensburg, Germany | 09.2003 - 08.2004
- Screen video on short film week Regensburg

Fachhochschulreife (Abitur) | Fachoberschule Regensburg | 09.2001 - 07.2003
  
  
### TECHNICAL SKILLS  
- AI & Machine Learning  
    - Deep Learning: Generative AI, LLMs (RAG), LangChain, AI Agents, PyTorch, TensorFlow, Keras.
    - Data Science: Scikit-Learn, OpenCV, NumPy, Pandas, Matplotlib, Seaborn, Plotly
    - Deployment: FastAPI, Streamlit, Model Optimization.  

- MLOps & Data Engineering  
    - Lifecycle: MLOps/LLMOps, MLFlow, ZenML, Airflow, DagsHub.
    - Data Ops: PySpark, ElasticSearch, Vector Databases (ChromaDB/Pinecone), NGINX.
    - Cloud ML: AWS MLOps (SageMaker), Scalable Inference Pipelines.  

- Backend & Infrastructure  
    - Languages: Python, Java (Quarkus, JakartaEE), Go (Gin), Node.js (Express.js), TypeScript (Vue.js, React), Rust, ABAP
    - Cloud & DevOps: AWS (Certified Cloud Practitioner), Kubernetes (K8s), Docker, Tekton, GitHub Actions, Jenkins, AWS.
    - SRE & Observability: Prometheus, Grafana, NexusIQ, Bash-Scripting, Kafka. 

- Databases & Enterprise Ecosystem   
    - Databases: PostgreSQL, MS SQL Server, MongoDB, Cassandra, SAP HANA.
    - SAP Ecosystem: EWM, FI/CO, SD/MM, Fiori/UI5, ABAP OO.  

- Languages  
    - English (C2), Spanish (B2), Portuguese (Basic), Chinese (Basic), German (Native).
    
#
-


`,rd=Object.assign({"../data/projects/project1.md":YM,"../data/projects/project2.md":jM,"../data/projects/project3.md":KM,"../data/projects/project4.md":JM});class iA{constructor(){this.monitorUI=document.getElementById("monitor-ui"),this.container=document.getElementById("app-content"),this.monitorUI.addEventListener("mousedown",e=>e.stopPropagation()),this.monitorUI.addEventListener("mouseup",e=>e.stopPropagation()),this.monitorUI.addEventListener("click",e=>e.stopPropagation()),window.renderAppContent=e=>this.renderAppContent(e),window.showDetails=e=>this.showDetails(e),window.showMenu=()=>this.showMenu(),this.initClock()}render(e,t){return e.replace(/{{([\w.-]+)}}/g,(n,r)=>t[r]!==void 0?t[r]:"")}renderAppContent(e){let t="";if(e==="about"){const n=id(nA),r=tt.parse(n.body);t=this.render(JT,{...n.attributes,bio:r})}else if(e==="contact"){const n=xT.load(tA);t=this.render(QT,n)}else if(e==="projects"){const n=Object.keys(rd);console.log("Gefundene Pfade:",n),t=`<h1 class="text-shadow-box">Projects</h1><div class="projects-list">${n.map(s=>{const a=rd[s],o=a.default||a,{attributes:l,body:c}=id(o);return this.render(eA,{...l,content:tt.parse(c)})}).join("")}</div>`}this.container.innerHTML=t,this.container.scrollTop=0,Di.fromTo(this.container,{opacity:0,y:15},{opacity:1,y:0,duration:.4})}showDetails(e){const t=document.getElementById("ui-menu"),n=document.getElementById("ui-details"),r=document.getElementById("detail-title"),s=document.getElementById("detail-content"),a={about:{t:"ABOUT ME",c:"Ich bin ein kreativer Entwickler mit Leidenschaft für 3D-Web-Erlebnisse."},projects:{t:"PROJECTS",c:"Hier findest du meine neuesten Three.js Experimente und Web-Apps."},contact:{t:"CONTACT",c:"Schreib mir eine Mail an: hello@example.com"}};r.innerText=a[e].t,s.innerText=a[e].c,Di.to(t,{opacity:0,duration:.2,onComplete:()=>{t.style.display="none",n.style.display="block",Di.fromTo(n,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.4})}})}showMenu(){const e=document.getElementById("ui-menu"),t=document.getElementById("ui-details");Di.to(t,{opacity:0,duration:.2,onComplete:()=>{t.style.display="none",e.style.display="block",Di.to(e,{opacity:1,duration:.4})}})}showMonitorUI(e,t){const n=e.clone();n.project(t);const r=(n.x*.5+.5)*window.innerWidth,s=(n.y*-.5+.5)*window.innerHeight;this.monitorUI.style.display="block",this.monitorUI.style.left=`${r}px`,this.monitorUI.style.top=`${s}px`,this.monitorUI.style.opacity="1"}hideMonitorUI(){this.monitorUI.style.opacity="0",setTimeout(()=>{this.monitorUI.style.opacity==="0"&&(this.monitorUI.style.display="none")},300)}initClock(){setInterval(()=>{const t=new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"});document.getElementById("live-clock").innerText=t},1e3)}}const Rs=new Ey;new Ty(Rs.scene);const rA=new iA,sA=new WM(Rs.camera,Rs.scene,Rs.controls);function Im(){requestAnimationFrame(Im),Rs.update(),sA.checkMonitorFocus(rA)}Im();
