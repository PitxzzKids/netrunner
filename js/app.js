(()=>{var Bu=0,Wc=1,zu=2;var as=1,Gu=2,js=3,Bn=0,Ne=1,mi=2,vn=0,Qs=1,yi=2,$c=3,Xc=4,Hu=5;var os=100,Vu=101,Wu=102,$u=103,Xu=104,qu=200,Yu=201,Ku=202,Ju=203,qc=204,Yc=205,Zu=206,ju=207,Qu=208,td=209,ed=210,id=211,nd=212,sd=213,rd=214,co=0,ho=1,uo=2,Os=3,fo=4,po=5,mo=6,go=7,Yo=0,ad=1,od=2,en=0,ia=1,na=2,sa=3,ls=4,ra=5,aa=6,oa=7;var Kc=300,cs=301,tr=302,Ko=303,Jo=304,Bs=1e3,Zi=1001,xo=1002,We=1003,ld=1004;var la=1005;var fi=1006,Zo=1007;var _n=1008;var bi=1009,Jc=1010,Zc=1011,er=1012,jo=1013,Xi=1014,Ui=1015,Fe=1016,Qo=1017,tl=1018,hs=1020,jc=35902,Qc=35899,th=1021,eh=1022,qi=1023,pn=1026,yn=1027,el=1028,il=1029,zn=1030,nl=1031;var sl=1033,ca=33776,ha=33777,ua=33778,da=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37488,fl=37489,fa=37490,pl=37491,ml=37808,gl=37809,xl=37810,vl=37811,_l=37812,yl=37813,bl=37814,Sl=37815,Ml=37816,wl=37817,Tl=37818,El=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Il=36495,Ll=36283,Dl=36284,pa=36285,kl=36286;var Rr=2300,vo=2301,oo=2302,kc=2303,Nc=2400,Fc=2401,Uc=2402;var cd=3200;var ma=0,hd=1,bn="",Ke="srgb",Cr="srgb-linear",Pr="linear",re="srgb";var lo=7680;var ud=519,dd=512,fd=513,pd=514,ih=515,md=516,gd=517,nh=518,sh=519,rh=35044;var ah="300 es",Ii=2e3,zs=2001;function Pf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function If(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xd(){let r=Ir("canvas");return r.style.display="block",r}var tu={},Gs=null;function Lr(...r){let t="THREE."+r.shift();Gs?Gs("log",t,...r):console.log(t,...r)}function vd(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Dt(...r){r=vd(r);let t="THREE."+r.shift();if(Gs)Gs("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Bt(...r){r=vd(r);let t="THREE."+r.shift();if(Gs)Gs("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Tr(...r){let t=r.join(" ");t in tu||(tu[t]=!0,Dt(...r))}function _d(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var yd={[co]:co,[uo]:mo,[fo]:fo,[Os]:po,[ho]:ho,[mo]:uo,[go]:go,[po]:Os},ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oc=Math.PI/180,_o=180/Math.PI;function us(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ni[r&255]+ni[r>>8&255]+ni[r>>16&255]+ni[r>>24&255]+"-"+ni[t&255]+ni[t>>8&255]+"-"+ni[t>>16&15|64]+ni[t>>24&255]+"-"+ni[e&63|128]+ni[e>>8&255]+"-"+ni[e>>16&255]+ni[e>>24&255]+ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]).toLowerCase()}function Qt(r,t,e){return Math.max(t,Math.min(e,r))}function Lf(r,t){return(r%t+t)%t}function lc(r,t,e){return(1-e)*r+e*t}function bd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Nl(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sd(r,t){if(t.constructor===Float32Array)return r;let e=Nl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function Md(r,t){if(t.constructor===Float32Array)return r;let e=Nl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var dh=class dh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;var pt=dh,Li=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],f=s[a+1],m=s[a+2],x=s[a+3];if(d!==x||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*x;p<0&&(u=-u,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),w=Math.sin(v);g=Math.sin(g*v)/w,o=Math.sin(o*v)/w,l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+x*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],f=s[a+2],m=s[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fh=class fh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),d=2*(s*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fh.prototype.isVector3=!0;var L=fh,cc=new L,eu=new Li,ph=class ph{constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],x=n[0],p=n[3],g=n[6],v=n[1],w=n[4],b=n[7],E=n[2],T=n[5],_=n[8];return s[0]=a*x+o*v+l*E,s[3]=a*p+o*w+l*T,s[6]=a*g+o*b+l*_,s[1]=c*x+h*v+d*E,s[4]=c*p+h*w+d*T,s[7]=c*g+h*b+d*_,s[2]=u*x+f*v+m*E,s[5]=u*p+f*w+m*T,s[8]=u*g+f*b+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,m=e*d+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ph.prototype.isMatrix3=!0;var Ht=ph,hc=new Ht,iu=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Df(){let r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===re&&(n.r=fn(n.r),n.g=fn(n.g),n.b=fn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(n.r=Us(n.r),n.g=Us(n.g),n.b=Us(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===bn?Pr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Cr]:{primaries:t,whitePoint:i,transfer:Pr,toXYZ:iu,fromXYZ:nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:re,toXYZ:iu,fromXYZ:nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),r}var jt=Df();function fn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var _s,yo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{_s===void 0&&(_s=Ir("canvas")),_s.width=t.width,_s.height=t.height;let n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=_s}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=fn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fn(e[i]/255)*255):e[i]=fn(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,Hs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(uc(n[a].image)):s.push(uc(n[a]))}else s=uc(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function uc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var Nf=0,dc=new L,pi=class r extends ji{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Zi,n=Zi,s=fi,a=_n,o=qi,l=bi,c=r.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=us(),this.name="",this.source=new Hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=Kc;pi.DEFAULT_ANISOTROPY=1;var mh=class mh{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,b=(f+1)/2,E=(g+1)/2,T=(h+u)/4,_=(d+x)/4,M=(m+p)/4;return w>b&&w>E?w<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(w),n=T/i,s=_/i):b>E?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=T/n,s=M/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=_/s,n=M/s),this.set(i,n,s,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mh.prototype.isVector4=!0;var be=mh,bo=class extends ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new pi({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Hs(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ce=class extends bo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Dr=class extends pi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=We,this.minFilter=We,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends pi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=We,this.minFilter=We,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qo=class qo{constructor(t,e,i,n,s,a,o,l,c,h,d,u,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,d,u,f,m,x,p)}set(t,e,i,n,s,a,o,l,c,h,d,u,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/ys.setFromMatrixColumn(t,0).length(),s=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Uf)}lookAt(t,e,i){let n=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Rn.crossVectors(i,Mi),Rn.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Rn.crossVectors(i,Mi)),Rn.normalize(),Da.crossVectors(Mi,Rn),n[0]=Rn.x,n[4]=Da.x,n[8]=Mi.x,n[1]=Rn.y,n[5]=Da.y,n[9]=Mi.y,n[2]=Rn.z,n[6]=Da.z,n[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],x=i[6],p=i[10],g=i[14],v=i[3],w=i[7],b=i[11],E=i[15],T=n[0],_=n[4],M=n[8],D=n[12],C=n[1],N=n[5],U=n[9],H=n[13],I=n[2],V=n[6],X=n[10],W=n[14],it=n[3],q=n[7],tt=n[11],et=n[15];return s[0]=a*T+o*C+l*I+c*it,s[4]=a*_+o*N+l*V+c*q,s[8]=a*M+o*U+l*X+c*tt,s[12]=a*D+o*H+l*W+c*et,s[1]=h*T+d*C+u*I+f*it,s[5]=h*_+d*N+u*V+f*q,s[9]=h*M+d*U+u*X+f*tt,s[13]=h*D+d*H+u*W+f*et,s[2]=m*T+x*C+p*I+g*it,s[6]=m*_+x*N+p*V+g*q,s[10]=m*M+x*U+p*X+g*tt,s[14]=m*D+x*H+p*W+g*et,s[3]=v*T+w*C+b*I+E*it,s[7]=v*_+w*N+b*V+E*q,s[11]=v*M+w*U+b*X+E*tt,s[15]=v*D+w*H+b*W+E*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],v=l*f-c*u,w=o*f-c*d,b=o*u-l*d,E=a*f-c*h,T=a*u-l*h,_=a*d-o*h;return e*(x*v-p*w+g*b)-i*(m*v-p*E+g*T)+n*(m*w-x*E+g*_)-s*(m*b-x*T+p*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],v=e*o-i*a,w=e*l-n*a,b=e*c-s*a,E=i*l-n*o,T=i*c-s*o,_=n*c-s*l,M=h*x-d*m,D=h*p-u*m,C=h*g-f*m,N=d*p-u*x,U=d*g-f*x,H=u*g-f*p,I=v*H-w*U+b*N+E*C-T*D+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(o*H-l*U+c*N)*V,t[1]=(n*U-i*H-s*N)*V,t[2]=(x*_-p*T+g*E)*V,t[3]=(u*T-d*_-f*E)*V,t[4]=(l*C-a*H-c*D)*V,t[5]=(e*H-n*C+s*D)*V,t[6]=(p*b-m*_-g*w)*V,t[7]=(h*_-u*b+f*w)*V,t[8]=(a*U-o*C+c*M)*V,t[9]=(i*C-e*U-s*M)*V,t[10]=(m*T-x*b+g*v)*V,t[11]=(d*b-h*T-f*v)*V,t[12]=(o*D-a*N-l*M)*V,t[13]=(e*N-i*D+n*M)*V,t[14]=(x*w-m*E-p*v)*V,t[15]=(h*E-d*w+u*v)*V,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,m=s*d,x=a*h,p=a*d,g=o*d,v=l*c,w=l*h,b=l*d,E=i.x,T=i.y,_=i.z;return n[0]=(1-(x+g))*E,n[1]=(f+b)*E,n[2]=(m-w)*E,n[3]=0,n[4]=(f-b)*T,n[5]=(1-(u+g))*T,n[6]=(p+v)*T,n[7]=0,n[8]=(m+w)*_,n[9]=(p-v)*_,n[10]=(1-(u+x))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=ys.set(n[0],n[1],n[2]).length(),o=ys.set(n[4],n[5],n[6]).length(),l=ys.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Gi.copy(this);let c=1/a,h=1/o,d=1/l;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=h,Gi.elements[5]*=h,Gi.elements[6]*=h,Gi.elements[8]*=d,Gi.elements[9]*=d,Gi.elements[10]*=d,e.setFromRotationMatrix(Gi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=Ii,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===Ii)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===zs)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Ii,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===Ii)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===zs)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};qo.prototype.isMatrix4=!0;var ie=qo,ys=new L,Gi=new ie,Ff=new L(0,0,0),Uf=new L(1,1,1),Rn=new L,Da=new L,Mi=new L,su=new ie,ru=new Li,Di=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(su,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Of=0,au=new L,bs=new Li,on=new ie,ka=new L,mr=new L,Bf=new L,zf=new Li,ou=new L(1,0,0),lu=new L(0,1,0),cu=new L(0,0,1),hu={type:"added"},Gf={type:"removed"},Ss={type:"childadded",child:null},fc={type:"childremoved",child:null},Pe=class r extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new L,e=new Di,i=new Li,n=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(ou,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(cu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ou,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ka.copy(t):ka.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(mr,ka,this.up):on.lookAt(ka,mr,this.up),this.quaternion.setFromRotationMatrix(on),n&&(on.extractRotation(n.matrixWorld),bs.setFromRotationMatrix(on),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gf),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,Bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new L(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hf={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Na={h:0,s:0,l:0};function pc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=jt.workingColorSpace){if(t=Lf(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=pc(a,s,t+1/3),this.g=pc(a,s,t),this.b=pc(a,s,t-1/3)}return jt.colorSpaceToWorking(this,n),this}setStyle(t,e=Ke){function i(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let i=wd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fn(t.r),this.g=fn(t.g),this.b=fn(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return jt.workingToColorSpace(si.copy(this),t),Math.round(Qt(si.r*255,0,255))*65536+Math.round(Qt(si.g*255,0,255))*256+Math.round(Qt(si.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(si.copy(this),e);let i=si.r,n=si.g,s=si.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(si.copy(this),e),t.r=si.r,t.g=si.g,t.b=si.b,t}getStyle(t=Ke){jt.workingToColorSpace(si.copy(this),t);let e=si.r,i=si.g,n=si.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Na);let i=lc(Cn.h,Na.h,e),n=lc(Cn.s,Na.s,e),s=lc(Cn.l,Na.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},si=new Rt;Rt.NAMES=wd;var kr=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zn=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hi=new L,ln=new L,mc=new L,cn=new L,Ms=new L,ws=new L,uu=new L,gc=new L,xc=new L,vc=new L,_c=new be,yc=new be,bc=new be,dn=class r{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Hi.subVectors(t,e),n.cross(Hi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Hi.subVectors(n,e),ln.subVectors(i,e),mc.subVectors(t,e);let a=Hi.dot(Hi),o=Hi.dot(ln),l=Hi.dot(mc),c=ln.dot(ln),h=ln.dot(mc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return _c.setScalar(0),yc.setScalar(0),bc.setScalar(0),_c.fromBufferAttribute(t,e),yc.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(_c,s.x),a.addScaledVector(yc,s.y),a.addScaledVector(bc,s.z),a}static isFrontFacing(t,e,i,n){return Hi.subVectors(i,e),ln.subVectors(t,e),Hi.cross(ln).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Hi.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;Ms.subVectors(n,i),ws.subVectors(s,i),gc.subVectors(t,i);let l=Ms.dot(gc),c=ws.dot(gc);if(l<=0&&c<=0)return e.copy(i);xc.subVectors(t,n);let h=Ms.dot(xc),d=ws.dot(xc);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Ms,a);vc.subVectors(t,s);let f=Ms.dot(vc),m=ws.dot(vc);if(m>=0&&f<=m)return e.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(ws,o);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return uu.subVectors(s,n),o=(d-h)/(d-h+(f-m)),e.copy(n).addScaledVector(uu,o);let g=1/(p+x+u);return a=x*g,o=u*g,e.copy(i).addScaledVector(Ms,a).addScaledVector(ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vi):Vi.fromBufferAttribute(s,a),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(t.matrixWorld),this.union(Fa)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),Ua.subVectors(this.max,gr),Ts.subVectors(t.a,gr),Es.subVectors(t.b,gr),As.subVectors(t.c,gr),Pn.subVectors(Es,Ts),In.subVectors(As,Es),qn.subVectors(Ts,As);let e=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-qn.z,qn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,qn.z,0,-qn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-qn.y,qn.x,0];return!Sc(e,Ts,Es,As,Ua)||(e=[1,0,0,0,1,0,0,0,1],!Sc(e,Ts,Es,As,Ua))?!1:(Oa.crossVectors(Pn,In),e=[Oa.x,Oa.y,Oa.z],Sc(e,Ts,Es,As,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hn=[new L,new L,new L,new L,new L,new L,new L,new L],Vi=new L,Fa=new Qi,Ts=new L,Es=new L,As=new L,Pn=new L,In=new L,qn=new L,gr=new L,Ua=new L,Oa=new L,Yn=new L;function Sc(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Yn.fromArray(r,s);let o=n.x*Math.abs(Yn.x)+n.y*Math.abs(Yn.y)+n.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=i.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Le=new L,Ba=new pt,Vf=0,Je=class extends ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=rh,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=t!==void 0?Nl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Sd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Md(t,this.array)}};var Nr=class extends Je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Fr=class extends Je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Xt=class extends Je{constructor(t,e,i){super(new Float32Array(t),e,i)}},Wf=new Qi,xr=new L,Mc=new L,tn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Wf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);let e=xr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(xr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Mc)),this.expandByPoint(xr.copy(t.center).sub(Mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$f=0,Pi=new ie,wc=new Pe,Rs=new L,wi=new Qi,vr=new Qi,Ve=new L,ce=class r extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pf(t)?Fr:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,i){return Pi.makeTranslation(t,e,i),this.applyMatrix4(Pi),this}scale(t,e,i){return Pi.makeScale(t,e,i),this.applyMatrix4(Pi),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];wi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(wi.min,vr.min),wi.expandByPoint(Ve),Ve.addVectors(wi.max,vr.max),wi.expandByPoint(Ve)):(wi.expandByPoint(vr.min),wi.expandByPoint(vr.max))}wi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(t,c),Ve.add(Rs)),n=Math.max(n,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Je(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new L,l[D]=new L;let h=new L,d=new L,u=new L,f=new pt,m=new pt,x=new pt,p=new L,g=new L;function v(D,C,N){c[D]=c[C]=c[N]=1,h.fromBufferAttribute(i,D),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,N),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,N),d.sub(h),u.sub(h),m.sub(f),x.sub(f);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(U),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(U),o[D].add(p),o[C].add(p),o[N].add(p),l[D].add(g),l[C].add(g),l[N].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,C=w.length;D<C;++D){let N=w[D],U=N.start,H=N.count;for(let I=U,V=U+H;I<V;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let b=new L,E=new L,T=new L,_=new L;function M(D){T.fromBufferAttribute(n,D),_.copy(T);let C=o[D];b.copy(C),b.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(_,C);let U=E.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,U)}for(let D=0,C=i.count;D<C;++D)c[D]&&M(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Je(u,h,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ur=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=us()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=du(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=du(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function du(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=us()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var di=new L,$s=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Nl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyMatrix4(t),this.setXYZ(e,di.x,di.y,di.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyNormalMatrix(t),this.setXYZ(e,di.x,di.y,di.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.transformDirection(t),this.setXYZ(e,di.x,di.y,di.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Sd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Md(t,this.data.array)}},Tc=new L,Xf=new L,qf=new Ht,Wi=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Tc.subVectors(i,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||qf.getNormalMatrix(t),n=this.coplanarPoint(Tc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Yf=0,ki=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Qs,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Wi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ti=class extends ki{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cs,_r=new L,Ps=new L,Is=new L,Ls=new pt,yr=new pt,Td=new ie,za=new L,br=new L,Ga=new L,fu=new pt,Ec=new pt,pu=new pt,Ni=class extends Pe{constructor(t=new Ti){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ur(e,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new $s(i,3,0,!1)),Cs.setAttribute("uv",new $s(i,2,3,!1))}this.geometry=Cs,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),Td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Is.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Ha(za.set(-.5,-.5,0),Is,a,Ps,n,s),Ha(br.set(.5,-.5,0),Is,a,Ps,n,s),Ha(Ga.set(.5,.5,0),Is,a,Ps,n,s),fu.set(0,0),Ec.set(1,0),pu.set(1,1);let o=t.ray.intersectTriangle(za,br,Ga,!1,_r);if(o===null&&(Ha(br.set(-.5,.5,0),Is,a,Ps,n,s),Ec.set(0,1),o=t.ray.intersectTriangle(za,Ga,br,!1,_r),o===null))return;let l=t.ray.origin.distanceTo(_r);l<t.near||l>t.far||e.push({distance:l,point:_r.clone(),uv:dn.getInterpolation(_r,za,br,Ga,fu,Ec,pu,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Ha(r,t,e,i,n,s){Ls.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(yr.x=s*Ls.x-n*Ls.y,yr.y=n*Ls.x+s*Ls.y):yr.copy(Ls),r.copy(t),r.x+=yr.x,r.y+=yr.y,r.applyMatrix4(Td)}var un=new L,Ac=new L,Va=new L,Wa=new L,jn=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ac.copy(t).add(e).multiplyScalar(.5),Va.copy(e).sub(t).normalize(),Wa.copy(this.origin).sub(Ac);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Va),o=Wa.dot(this.direction),l=-Wa.dot(Va),c=Wa.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ac).addScaledVector(Va,u),f}intersectSphere(t,e){if(t.radius<0)return null;un.subVectors(t.center,this.origin);let i=un.dot(this.direction),n=un.dot(un)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,p=e.z-a.z,g=i.x-a.x,v=i.y-a.y,w=i.z-a.z,b=Math.abs(l),E=Math.abs(c),T=Math.abs(h),_,M,D,C,N,U,H,I,V,X,W,it;if(b>=E&&b>=T?(D=l,U=d,V=m,it=g,l>=0?(_=c,M=h,C=u,N=f,H=x,I=p,X=v,W=w):(_=h,M=c,C=f,N=u,H=p,I=x,X=w,W=v)):E>=T?(D=c,U=u,V=x,it=v,c>=0?(_=h,M=l,C=f,N=d,H=p,I=m,X=w,W=g):(_=l,M=h,C=d,N=f,H=m,I=p,X=g,W=w)):(D=h,U=f,V=p,it=w,h>=0?(_=l,M=c,C=d,N=u,H=m,I=x,X=g,W=v):(_=c,M=l,C=u,N=d,H=x,I=m,X=v,W=g)),D===0)return null;let q=_/D,tt=M/D,et=1/D,St=C-q*U,kt=N-tt*U,J=H-q*V,gt=I-tt*V,bt=X-q*it,It=W-tt*it,xt=bt*gt-It*J,Vt=St*It-kt*bt,Se=J*kt-gt*St;if(n){if(xt<0||Vt<0||Se<0)return null}else if((xt<0||Vt<0||Se<0)&&(xt>0||Vt>0||Se>0))return null;let Nt=xt+Vt+Se;if(Nt===0)return null;let oe=et*(xt*U+Vt*V+Se*it);return(Nt>0?oe<0:oe>0)?null:this.at(oe/Nt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mu=new ie,Kn=new jn,$a=new tn,gu=new L,Xa=new L,qa=new L,Ya=new L,Rc=new L,Ka=new L,xu=new L,Ja=new L,Ot=class extends Pe{constructor(t=new ce,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Rc.fromBufferAttribute(d,t),a?Ka.addScaledVector(Rc,h):Ka.addScaledVector(Rc.sub(e),h))}e.add(Ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),Kn.copy(t.ray).recast(t.near),!($a.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere($a,gu)===null||Kn.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(s).invert(),Kn.copy(t.ray).applyMatrix4(mu),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=v,E=w;b<E;b+=3){let T=o.getX(b),_=o.getX(b+1),M=o.getX(b+2);n=Za(this,g,t,i,c,h,d,T,_,M),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=o.getX(p),w=o.getX(p+1),b=o.getX(p+2);n=Za(this,a,t,i,c,h,d,v,w,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=v,E=w;b<E;b+=3){let T=b,_=b+1,M=b+2;n=Za(this,g,t,i,c,h,d,T,_,M),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=p,w=p+1,b=p+2;n=Za(this,a,t,i,c,h,d,v,w,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function Kf(r,t,e,i,n,s,a,o){let l;if(t.side===Ne?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Bn,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ja);return c<e.near||c>e.far?null:{distance:c,point:Ja.clone(),object:r}}function Za(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Xa),r.getVertexPosition(l,qa),r.getVertexPosition(c,Ya);let h=Kf(r,t,e,i,Xa,qa,Ya,xu);if(h){let d=new L;dn.getBarycoord(xu,Xa,qa,Ya,d),n&&(h.uv=dn.getInterpolatedAttribute(n,o,l,c,d,new pt)),s&&(h.uv1=dn.getInterpolatedAttribute(s,o,l,c,d,new pt)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};dn.getNormal(Xa,qa,Ya,u.normal),h.face=u,h.barycoord=d}return h}var Or=class extends pi{constructor(t=null,e=1,i=1,n,s,a,o,l,c=We,h=We,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class extends Je{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new ie,vu=new ie,ja=[],_u=new Qi,Jf=new ie,Sr=new Ot,Mr=new tn,Br=class extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Jf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),_u.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(_u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),Mr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),t.ray.intersectsSphere(Mr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Ds),vu.multiplyMatrices(i,Ds),Sr.matrixWorld=vu,Sr.raycast(t,ja);for(let a=0,o=ja.length;a<o;a++){let l=ja[a];l.instanceId=s,l.object=this,e.push(l)}ja.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(n*this.count),n,this.count,el,Ui));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jn=new tn,Zf=new pt(.5,.5),Qa=new L,Dn=class{constructor(t=new Wi,e=new Wi,i=new Wi,n=new Wi,s=new Wi,a=new Wi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii,i=!1){let n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],x=s[9],p=s[10],g=s[11],v=s[12],w=s[13],b=s[14],E=s[15];if(n[0].setComponents(c-a,f-h,g-m,E-v).normalize(),n[1].setComponents(c+a,f+h,g+m,E+v).normalize(),n[2].setComponents(c+o,f+d,g+x,E+w).normalize(),n[3].setComponents(c-o,f-d,g-x,E-w).normalize(),i)n[4].setComponents(l,u,p,b).normalize(),n[5].setComponents(c-l,f-u,g-p,E-b).normalize();else if(n[4].setComponents(c-l,f-u,g-p,E-b).normalize(),e===Ii)n[5].setComponents(c+l,f+u,g+p,E+b).normalize();else if(e===zs)n[5].setComponents(l,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){Jn.center.set(0,0,0);let e=Zf.distanceTo(t.center);return Jn.radius=.7071067811865476+e,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Qa.x=n.normal.x>0?t.max.x:t.min.x,Qa.y=n.normal.y>0?t.max.y:t.min.y,Qa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yu=new ie,Mo=class r{constructor(){this.coordinateSystem=Ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];yu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Dn),i[n].setFromProjectionMatrix(yu,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Dn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Qn=class extends ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wo=new L,To=new L,bu=new ie,wr=new jn,to=new tn,Cc=new L,Su=new L,Eo=class extends Pe{constructor(t=new ce,e=new Qn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)wo.fromBufferAttribute(e,n-1),To.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=wo.distanceTo(To);t.setAttribute("lineDistance",new Xt(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(n),to.radius+=s,t.ray.intersectsSphere(to)===!1)return;bu.copy(n).invert(),wr.copy(t.ray).applyMatrix4(bu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=h.getX(x),v=h.getX(x+1),w=eo(this,t,wr,l,g,v,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=eo(this,t,wr,l,x,p,m-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=eo(this,t,wr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=eo(this,t,wr,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function eo(r,t,e,i,n,s,a){let o=r.geometry.attributes.position;if(wo.fromBufferAttribute(o,n),To.fromBufferAttribute(o,s),e.distanceSqToSegment(wo,To,Cc,Su)>i)return;Cc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Cc);if(!(c<t.near||c>t.far))return{distance:c,point:Su.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Mu=new L,wu=new L,qs=class extends Eo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Mu.fromBufferAttribute(e,n),wu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Mu.distanceTo(wu);t.setAttribute("lineDistance",new Xt(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ts=class extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tu=new ie,Oc=new jn,io=new tn,no=new L,es=class extends Pe{constructor(t=new ce,e=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(n),io.radius+=s,t.ray.intersectsSphere(io)===!1)return;Tu.copy(n).invert(),Oc.copy(t.ray).applyMatrix4(Tu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,x=f;m<x;m++){let p=c.getX(m);no.fromBufferAttribute(d,p),Eu(no,p,l,n,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,x=f;m<x;m++)no.fromBufferAttribute(d,m),Eu(no,m,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Eu(r,t,e,i,n,s,a){let o=Oc.distanceSqToPoint(r);if(o<e){let l=new L;Oc.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var zr=class extends pi{constructor(t=[],e=cs,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kn=class extends pi{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mn=class extends pi{constructor(t,e,i=Xi,n,s,a,o=We,l=We,c,h=pn,d=1){if(h!==pn&&h!==yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gr=class extends mn{constructor(t,e=Xi,i=cs,n,s,a=We,o=We,l,c=pn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hr=class extends pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_i=class r extends ce{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,a,s,0),m("z","y","x",1,-1,i,e,-t,a,s,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function m(x,p,g,v,w,b,E,T,_,M,D){let C=b/_,N=E/M,U=b/2,H=E/2,I=T/2,V=_+1,X=M+1,W=0,it=0,q=new L;for(let tt=0;tt<X;tt++){let et=tt*N-H;for(let St=0;St<V;St++){let kt=St*C-U;q[x]=kt*v,q[p]=et*w,q[g]=I,c.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[g]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(St/_),d.push(1-tt/M),W+=1}}for(let tt=0;tt<M;tt++)for(let et=0;et<_;et++){let St=u+et+V*tt,kt=u+et+V*(tt+1),J=u+(et+1)+V*(tt+1),gt=u+(et+1)+V*tt;l.push(St,kt,gt),l.push(kt,J,gt),it+=6}o.addGroup(f,it,D),f+=it,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var is=class r extends ce{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],f=[],m=0,x=[],p=i/2,g=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function v(){let b=new L,E=new L,T=0,_=(e-t)/i;for(let M=0;M<=s;M++){let D=[],C=M/s,N=C*(e-t)+t;for(let U=0;U<=n;U++){let H=U/n,I=H*l+o,V=Math.sin(I),X=Math.cos(I);E.x=N*V,E.y=-C*i+p,E.z=N*X,d.push(E.x,E.y,E.z),b.set(V,_,X).normalize(),u.push(b.x,b.y,b.z),f.push(H,1-C),D.push(m++)}x.push(D)}for(let M=0;M<n;M++)for(let D=0;D<s;D++){let C=x[D][M],N=x[D+1][M],U=x[D+1][M+1],H=x[D][M+1];(t>0||D!==0)&&(h.push(C,N,H),T+=3),(e>0||D!==s-1)&&(h.push(N,U,H),T+=3)}c.addGroup(g,T,0),g+=T}function w(b){let E=m,T=new pt,_=new L,M=0,D=b===!0?t:e,C=b===!0?1:-1;for(let U=1;U<=n;U++)d.push(0,p*C,0),u.push(0,C,0),f.push(.5,.5),m++;let N=m;for(let U=0;U<=n;U++){let I=U/n*l+o,V=Math.cos(I),X=Math.sin(I);_.x=D*X,_.y=p*C,_.z=D*V,d.push(_.x,_.y,_.z),u.push(0,C,0),T.x=V*.5+.5,T.y=X*.5*C+.5,f.push(T.x,T.y),m++}for(let U=0;U<n;U++){let H=E+U,I=N+U;b===!0?h.push(I,I+1,H):h.push(I+1,I,H),M+=3}c.addGroup(g,M,b===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Vr=class r extends ce{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(s.slice(),3)),this.setAttribute("uv",new Xt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new L,b=new L,E=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],w),f(e[T+1],b),f(e[T+2],E),l(w,b,E,v)}function l(v,w,b,E){let T=E+1,_=[];for(let M=0;M<=T;M++){_[M]=[];let D=v.clone().lerp(b,M/T),C=w.clone().lerp(b,M/T),N=T-M;for(let U=0;U<=N;U++)U===0&&M===T?_[M][U]=D:_[M][U]=D.clone().lerp(C,U/N)}for(let M=0;M<T;M++)for(let D=0;D<2*(T-M)-1;D++){let C=Math.floor(D/2);D%2===0?(u(_[M][C+1]),u(_[M+1][C]),u(_[M][C])):(u(_[M][C+1]),u(_[M+1][C+1]),u(_[M+1][C]))}}function c(v){let w=new L;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(v),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function h(){let v=new L;for(let w=0;w<s.length;w+=3){v.x=s[w+0],v.y=s[w+1],v.z=s[w+2];let b=p(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;a.push(b,1-E)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let w=a[v+0],b=a[v+2],E=a[v+4],T=Math.max(w,b,E),_=Math.min(w,b,E);T>.9&&_<.1&&(w<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function f(v,w){let b=v*3;w.x=t[b+0],w.y=t[b+1],w.z=t[b+2]}function m(){let v=new L,w=new L,b=new L,E=new L,T=new pt,_=new pt,M=new pt;for(let D=0,C=0;D<s.length;D+=9,C+=6){v.set(s[D+0],s[D+1],s[D+2]),w.set(s[D+3],s[D+4],s[D+5]),b.set(s[D+6],s[D+7],s[D+8]),T.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),E.copy(v).add(w).add(b).divideScalar(3);let N=p(E);x(T,C+0,v,N),x(_,C+2,w,N),x(M,C+4,b,N)}}function x(v,w,b,E){E<0&&v.x===1&&(a[w]=v.x-1),b.x===0&&b.z===0&&(a[w]=E/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],u=i[n+1]-h,f=(a-h)/u;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new pt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new L,n=[],s=[],a=[],o=new L,l=new ie;for(let f=0;f<=t;f++){let m=f/t;n[f]=this.getTangentAt(m,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Qt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Qt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(n[m],f*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Wr=class extends Fi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ao=class extends Wr{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function oh(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,n(a,o,u,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var Au=new L,Ru=new L,Pc=new oh,Ic=new oh,Lc=new oh,gn=class extends Fi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new L){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(Ru.subVectors(n[0],n[1]).add(n[0]),c=Ru);let d=n[o%s],u=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(Au.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Au),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Pc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,p),Ic.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,p),Lc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ic.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Lc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Pc.calc(l),Ic.calc(l),Lc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new L().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cu(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function jf(r,t){let e=1-r;return e*e*t}function Qf(r,t){return 2*(1-r)*r*t}function tp(r,t){return r*r*t}function Er(r,t,e,i){return jf(r,t)+Qf(r,e)+tp(r,i)}function ep(r,t){let e=1-r;return e*e*e*t}function ip(r,t){let e=1-r;return 3*e*e*r*t}function np(r,t){return 3*(1-r)*r*r*t}function sp(r,t){return r*r*r*t}function Ar(r,t,e,i,n){return ep(r,t)+ip(r,e)+np(r,i)+sp(r,n)}var Ro=class extends Fi{constructor(t=new pt,e=new pt,i=new pt,n=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new pt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ar(t,n.x,s.x,a.x,o.x),Ar(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends Fi{constructor(t=new L,e=new L,i=new L,n=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new L){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ar(t,n.x,s.x,a.x,o.x),Ar(t,n.y,s.y,a.y,o.y),Ar(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends Fi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Fi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Fi{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Er(t,n.x,s.x,a.x),Er(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends Fi{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Er(t,n.x,s.x,a.x),Er(t,n.y,s.y,a.y),Er(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Cu(o,l.x,c.x,h.x,d.x),Cu(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new pt().fromArray(n))}return this}},rp=Object.freeze({__proto__:null,ArcCurve:Ao,CatmullRomCurve3:gn,CubicBezierCurve:Ro,CubicBezierCurve3:Co,EllipseCurve:Wr,LineCurve:Po,LineCurve3:Io,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:$r,SplineCurve:Do});var Xr=class r extends Vr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},$i=class r extends ce{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let v=g*u-a;for(let w=0;w<c;w++){let b=w*d-s;m.push(b,-v,0),x.push(0,0,1),p.push(w/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let w=v+c*g,b=v+c*(g+1),E=v+1+c*(g+1),T=v+1+c*g;f.push(w,b,T),f.push(b,E,T)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},ns=class r extends ce{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/n,f=new L,m=new pt;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let g=s+p/i*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<n;x++){let p=x*(i+1);for(let g=0;g<i;g++){let v=g+p,w=v,b=v+i+1,E=v+i+2,T=v+1;o.push(w,b,T),o.push(b,E,T)}}this.setIndex(o),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var xn=class r extends ce{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let v=[],w=g/i,b=a+w*o,E=t*Math.cos(b),T=Math.sqrt(t*t-E*E),_=0;g===0&&a===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let D=M/e,C=n+D*s;d.x=-T*Math.cos(C),d.y=E,d.z=T*Math.sin(C),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(D+_,1-w),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let w=h[g][v+1],b=h[g][v],E=h[g+1][v],T=h[g+1][v+1];(g!==0||a>0)&&f.push(w,b,T),(g!==i-1||l<Math.PI)&&f.push(b,E,T)}this.setIndex(f),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},qr=class r extends Vr{constructor(t=1,e=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Ys=class r extends ce{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new L,f=new L,m=new L;for(let x=0;x<=i;x++){let p=a+x/i*o;for(let g=0;g<=n;g++){let v=g/n*s;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(g/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=n;p++){let g=(n+1)*x+p-1,v=(n+1)*(x-1)+p-1,w=(n+1)*(x-1)+p,b=(n+1)*x+p;l.push(g,v,b),l.push(v,w,b)}this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ss=class r extends ce{constructor(t=new $r(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new pt,h=new L,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function x(){for(let w=0;w<e;w++)p(w);p(s===!1?e:0),v(),g()}function p(w){h=t.getPointAt(w/e,h);let b=a.normals[w],E=a.binormals[w];for(let T=0;T<=n;T++){let _=T/n*Math.PI*2,M=Math.sin(_),D=-Math.cos(_);l.x=D*b.x+M*E.x,l.y=D*b.y+M*E.y,l.z=D*b.z+M*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let w=1;w<=e;w++)for(let b=1;b<=n;b++){let E=(n+1)*(w-1)+(b-1),T=(n+1)*w+(b-1),_=(n+1)*w+b,M=(n+1)*(w-1)+b;m.push(E,T,M),m.push(T,_,M)}}function v(){for(let w=0;w<=e;w++)for(let b=0;b<=n;b++)c.x=w/e,c.y=b/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new rp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ds(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(Pu(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Pu(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ai(r){let t={};for(let e=0;e<r.length;e++){let i=ds(r[e]);for(let n in i)t[n]=i[n]}return t}function Pu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ap(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function lh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Sn={clone:ds,merge:ai},op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Rt().setHex(n.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new L().fromArray(n.value);break;case"v4":this.uniforms[i].value=new be().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ie().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ks=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ei=class extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Yr=class extends ki{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ko=class extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},No=class extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ks(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function so(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Nn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fo=class extends Nn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fc:s=t,o=2*e-i;break;case Uc:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fc:a=t,l=2*i-e;break;case Uc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(n-e),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,w=(-1-f)*p+(1.5+f)*x+.5*m,b=f*p-f*x;for(let E=0;E!==o;++E)s[E]=g*a[h+E]+v*a[c+E]+w*a[l+E]+b*a[d+E];return s}},Uo=class extends Nn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Oo=class extends Nn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Bo=class extends Nn{interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(n-e),x=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*x+a[l+p]*m;return s}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=f*u+m*2,v=d[g],w=d[g+1],b=t*u+m*2,E=h[b],T=h[b+1],_=hp(i,e,v,E,n);s[m]=Ed(_,x,w,T,p)}return s}};function Ed(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function cp(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function hp(r,t,e,i,n){let s=(r-t)/(n-t);for(let a=0;a<8;a++){let o=Ed(s,t,e,i,n)-r;if(Math.abs(o)<1e-10)break;let l=cp(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Ai=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),so(t.settings)&&(i.settings={inTangents:ks(t.settings.inTangents,Array),outTangents:ks(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Bo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Rr:e=this.InterpolantFactoryMethodDiscrete;break;case vo:e=this.InterpolantFactoryMethodLinear;break;case oo:e=this.InterpolantFactoryMethodSmooth;break;case kc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return oo;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;so(this.settings)&&(Iu(this.settings.inTangents,t),Iu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;so(this.settings)&&(Lu(this.settings.inTangents,t),Lu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&If(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===oo,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,so(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Iu(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function Lu(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=vo;var Fn=class extends Ai{constructor(t,e,i){super(t,e,i)}};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=Rr;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends Ai{constructor(t,e,i,n){super(t,e,i,n)}};zo.prototype.ValueTypeName="color";var Go=class extends Ai{constructor(t,e,i,n){super(t,e,i,n)}};Go.prototype.ValueTypeName="number";var Ho=class extends Nn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Li.slerpFlat(s,0,a,c-o,a,c,l);return s}},Kr=class extends Ai{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Ho(this.times,this.values,this.getValueSize(),t)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Un=class extends Ai{constructor(t,e,i){super(t,e,i)}};Un.prototype.ValueTypeName="string";Un.prototype.ValueBufferType=Array;Un.prototype.DefaultInterpolation=Rr;Un.prototype.InterpolantFactoryMethodLinear=void 0;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Ai{constructor(t,e,i,n){super(t,e,i,n)}};Vo.prototype.ValueTypeName="vector";var Wo=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ad=new Wo,$o=class{constructor(t){this.manager=t!==void 0?t:Ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};$o.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends Pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Jr=class extends Js{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dc=new ie,Du=new L,ku=new L,Zr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dn,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Dc,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===zs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ro=new L,ao=new Li,Ji=new L,jr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ro,ao,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,ao,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ro,ao,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,ao,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ln=new L,Nu=new pt,Fu=new pt,ri=class extends jr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,Nu,Fu),e.subVectors(Fu,Nu)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(oc*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Bc=class extends Zr{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}},On=class extends Js{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Bc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},rs=class extends jr{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zc=class extends Zr{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new zc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ns=-90,Fs=1,Zs=class extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ri(Ns,Fs,t,e);n.layers=this.layers,this.add(n);let s=new ri(Ns,Fs,t,e);s.layers=this.layers,this.add(s);let a=new ri(Ns,Fs,t,e);a.layers=this.layers,this.add(a);let o=new ri(Ns,Fs,t,e);o.layers=this.layers,this.add(o);let l=new ri(Ns,Fs,t,e);l.layers=this.layers,this.add(l);let c=new ri(Ns,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Xo=class extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},ta=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=up.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function up(){this._document.hidden===!1&&this.reset()}var ch="\\[\\]\\.:\\/",dp=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",fp="[^"+ch.replace("\\.","")+"]",pp=/((?:WC+[\/:])*)/.source.replace("WC",hh),mp=/(WCOD+)?/.source.replace("WCOD",fp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),vp=new RegExp("^"+pp+mp+gp+xp+"$"),_p=["material","materials","bones","map"],Gc=class{constructor(t,e,i){let n=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dp,"")}static parseTrackName(t){let e=vp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);_p.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Gc;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rv=new Float32Array(1);var Uu=new ie,ea=class{constructor(t,e,i=0,n=1/0){this.ray=new jn(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uu),this}intersectObject(t,e=!0,i=[]){return Hc(t,this,i,e),i.sort(Ou),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Hc(t[n],this,i,e);return i.sort(Ou),i}};function Ou(r,t){return r.distance-t.distance}function Hc(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Hc(s[a],t,e,!0)}}var gh=class gh{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};gh.prototype.isMatrix2=!0;var Vc=gh;function uh(r,t,e,i){let n=yp(i);switch(e){case th:return r*t;case el:return r*t/n.components*n.byteLength;case il:return r*t/n.components*n.byteLength;case zn:return r*t*2/n.components*n.byteLength;case nl:return r*t*2/n.components*n.byteLength;case eh:return r*t*3/n.components*n.byteLength;case qi:return r*t*4/n.components*n.byteLength;case sl:return r*t*4/n.components*n.byteLength;case ca:case ha:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ua:case da:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case al:case ll:return Math.max(r,16)*Math.max(t,8)/4;case rl:case ol:return Math.max(r,8)*Math.max(t,8)/2;case cl:case hl:case dl:case fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ul:case fa:case pl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cl:case Pl:case Il:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ll:case Dl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case pa:case kl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yp(r){switch(r){case bi:case Jc:return{byteLength:1,components:1};case er:case Zc:case Fe:return{byteLength:2,components:1};case Qo:case tl:return{byteLength:2,components:4};case Xi:case jo:case Ui:return{byteLength:4,components:1};case jc:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Kd(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ep(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,vm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,wm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,Tm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,u0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
void main() {
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
#include <envmap_physical_pars_fragment>
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
}`,W0=`#define MATCAP
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
}`,$0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,K0=`#define PHONG
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
#include <envmap_physical_pars_fragment>
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
}`,J0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,j0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,ng=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Ip,alphatest_pars_fragment:Lp,aomap_fragment:Dp,aomap_pars_fragment:kp,batching_pars_vertex:Np,batching_vertex:Fp,begin_vertex:Up,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:$p,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Kp,common:Jp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:im,colorspace_pars_fragment:nm,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:vm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:xm,lights_toon_fragment:_m,lights_toon_pars_fragment:ym,lights_phong_fragment:bm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Mm,lights_physical_pars_fragment:wm,lights_fragment_begin:Tm,lights_fragment_maps:Em,lights_fragment_end:Am,lightprobes_pars_fragment:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:km,map_particle_fragment:Nm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:$m,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:t0,packing:e0,premultiplied_alpha_fragment:i0,project_vertex:n0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:h0,shadowmask_pars_fragment:u0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:x0,tonemapping_fragment:v0,tonemapping_pars_fragment:_0,transmission_fragment:y0,transmission_pars_fragment:b0,uv_pars_fragment:S0,uv_pars_vertex:M0,uv_vertex:w0,worldpos_vertex:T0,background_vert:E0,background_frag:A0,backgroundCube_vert:R0,backgroundCube_frag:C0,cube_vert:P0,cube_frag:I0,depth_vert:L0,depth_frag:D0,distance_vert:k0,distance_frag:N0,equirect_vert:F0,equirect_frag:U0,linedashed_vert:O0,linedashed_frag:B0,meshbasic_vert:z0,meshbasic_frag:G0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:W0,meshmatcap_frag:$0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:K0,meshphysical_vert:J0,meshphysical_frag:Z0,meshtoon_vert:j0,meshtoon_frag:Q0,points_vert:tg,points_frag:eg,shadow_vert:ig,shadow_frag:ng,sprite_vert:sg,sprite_frag:rg},_t={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},sn={basic:{uniforms:ai([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:ai([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:ai([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:ai([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:ai([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:ai([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:ai([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:ai([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:ai([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:ai([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:ai([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:ai([_t.common,_t.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:ai([_t.lights,_t.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};sn.physical={uniforms:ai([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Fl={r:0,b:0,g:0},ag=new ie,Jd=new Ht;Jd.set(-1,0,0,0,1,0,0,0,1);function og(r,t,e,i,n,s){let a=new Rt(0),o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let b=v.backgroundBlurriness>0;w=t.get(w,b)}return w}function m(v){let w=!1,b=f(v);b===null?p(a,o):b&&b.isColor&&(p(b,1),w=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,w){let b=f(w);b&&b.isCubeTexture?(c===void 0&&(c=new Ot(new _i(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:ds(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=jt.getTransfer(b.colorSpace)!==re,(h!==b||d!==b.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ot(new $i(2,2),new $e({name:"BackgroundMaterial",uniforms:ds(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=jt.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,w){v.getRGB(Fl,lh(r)),e.buffers.color.setClear(Fl.r,Fl.g,Fl.b,w,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:x,dispose:g}}function lg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,a=!1;function o(N,U,H,I,V){let X=!1,W=d(N,I,H,U);s!==W&&(s=W,c(s.object)),X=f(N,I,H,V),X&&m(N,I,H,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(N,U,H,I),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,U,H,I){let V=I.wireframe===!0,X=i[U.id];X===void 0&&(X={},i[U.id]=X);let W=N.isInstancedMesh===!0?N.id:0,it=X[W];it===void 0&&(it={},X[W]=it);let q=it[H.id];q===void 0&&(q={},it[H.id]=q);let tt=q[V];return tt===void 0&&(tt=u(l()),q[V]=tt),tt}function u(N){let U=[],H=[],I=[];for(let V=0;V<e;V++)U[V]=0,H[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,U,H,I){let V=s.attributes,X=U.attributes,W=0,it=H.getAttributes();for(let q in it)if(it[q].location>=0){let et=V[q],St=X[q];if(St===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;W++}return s.attributesNum!==W||s.index!==I}function m(N,U,H,I){let V={},X=U.attributes,W=0,it=H.getAttributes();for(let q in it)if(it[q].location>=0){let et=X[q];et===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(et=N.instanceColor));let St={};St.attribute=et,et&&et.data&&(St.data=et.data),V[q]=St,W++}s.attributes=V,s.attributesNum=W,s.index=I}function x(){let N=s.newAttributes;for(let U=0,H=N.length;U<H;U++)N[U]=0}function p(N){g(N,0)}function g(N,U){let H=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;H[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),V[N]!==U&&(r.vertexAttribDivisor(N,U),V[N]=U)}function v(){let N=s.newAttributes,U=s.enabledAttributes;for(let H=0,I=U.length;H<I;H++)U[H]!==N[H]&&(r.disableVertexAttribArray(H),U[H]=0)}function w(N,U,H,I,V,X,W){W===!0?r.vertexAttribIPointer(N,U,H,V,X):r.vertexAttribPointer(N,U,H,I,V,X)}function b(N,U,H,I){x();let V=I.attributes,X=H.getAttributes(),W=U.defaultAttributeValues;for(let it in X){let q=X[it];if(q.location>=0){let tt=V[it];if(tt===void 0&&(it==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),it==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor)),tt!==void 0){let et=tt.normalized,St=tt.itemSize,kt=t.get(tt);if(kt===void 0)continue;let J=kt.buffer,gt=kt.type,bt=kt.bytesPerElement,It=gt===r.INT||gt===r.UNSIGNED_INT||tt.gpuType===jo;if(tt.isInterleavedBufferAttribute){let xt=tt.data,Vt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,Se=tt.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Nt=0;Nt<q.locationSize;Nt++)g(q.location+Nt,xt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Nt=0;Nt<q.locationSize;Nt++)p(q.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,J);for(let Nt=0;Nt<q.locationSize;Nt++)w(q.location+Nt,St/q.locationSize,gt,et,Vt*bt,(Se+St/q.locationSize*Nt)*bt,It)}else{if(tt.isInstancedBufferAttribute){for(let xt=0;xt<q.locationSize;xt++)g(q.location+xt,tt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let xt=0;xt<q.locationSize;xt++)p(q.location+xt);r.bindBuffer(r.ARRAY_BUFFER,J);for(let xt=0;xt<q.locationSize;xt++)w(q.location+xt,St/q.locationSize,gt,et,St*bt,St/q.locationSize*xt*bt,It)}}else if(W!==void 0){let et=W[it];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(q.location,et);break;case 3:r.vertexAttrib3fv(q.location,et);break;case 4:r.vertexAttrib4fv(q.location,et);break;default:r.vertexAttrib1fv(q.location,et)}}}}v()}function E(){D();for(let N in i){let U=i[N];for(let H in U){let I=U[H];for(let V in I){let X=I[V];for(let W in X)h(X[W].object),delete X[W];delete I[V]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let U=i[N.id];for(let H in U){let I=U[H];for(let V in I){let X=I[V];for(let W in X)h(X[W].object),delete X[W];delete I[V]}}delete i[N.id]}function _(N){for(let U in i){let H=i[U];for(let I in H){let V=H[I];if(V[N.id]===void 0)continue;let X=V[N.id];for(let W in X)h(X[W].object),delete X[W];delete V[N.id]}}}function M(N){for(let U in i){let H=i[U],I=N.isInstancedMesh===!0?N.id:0,V=H[I];if(V!==void 0){for(let X in V){let W=V[X];for(let it in W)h(W[it].object),delete W[it];delete V[X]}delete H[I],Object.keys(H).length===0&&delete i[U]}}}function D(){C(),a=!0,s!==n&&(s=n,c(s.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function cg(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function hg(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==qi&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Fe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==bi&&_!==Ui&&!M&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:b,maxSamples:E,samples:T}}function ug(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Wi,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!n||m===null||m.length===0||s&&!p)s?h(null):c();else{let v=s?0:i,w=v*4,b=g.clippingState||null;l.value=b,b=h(m,u,w,f);for(let E=0;E!==w;++E)b[E]=e[E];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,b=f;w!==x;++w,b+=4)a.copy(d[w]).applyMatrix4(v,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var va=class extends Ce{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new zr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new _i(5,5,5),s=new $e({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:vn});s.uniforms.tEquirect.value=e;let a=new Ot(n,s),o=e.minFilter;return e.minFilter===_n&&(e.minFilter=fi),new Zs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Rd=256,dg=3,fg=20,Zd=256,jd=16,pg=3,mg=new L,gg=new Rt,nr=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Zs(1,10,null),this._boxMesh=new Ot(new _i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:a=256,position:o=mg}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(gg));let p=new Zs(i,n,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Rd,bd(t))}_fromTexture(t,e){t.mapping===cs||t.mapping===tr?this._setSize(t.image.length===0?Rd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Cd(t,!1,!1),i=Math.log2(t)-dg;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Cd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===cs||t.mapping===tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Pd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=xg(),this._integrationMaterial=vg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/jd);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-pg)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Zd*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=_g());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function Cd(r,t,e){return new va(r,{minFilter:_n,generateMipmaps:t,type:Fe,colorSpace:Cr,depthBuffer:e})}function _a(r,t,e){return new $e({name:r,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:Ne,blending:vn,depthTest:!1,depthWrite:!1})}function xg(){return _a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vg(){return _a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _g(){return _a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Pd(){return _a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Id(){return _a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function yg(r){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ko||f===Jo)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new va(m.height);return x.fromEquirectangularTexture(r,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Ko||f===Jo,x=f===cs||f===tr;if(m||x){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new nr(r)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new nr(r)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ko?u.mapping=cs:f===Jo&&(u.mapping=tr),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function bg(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Tr("WebGLRenderer: "+i+" extension not supported."),n}}}function Sg(r,t,e,i){let n={},s=new WeakMap,a=new FinalizationRegistry(m=>delete n[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete n[m.id],a.unregister(m);let x=s.get(m);x&&(t.remove(x),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)t.update(x[p],r.ARRAY_BUFFER)}function d(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,w=p.count>=65535?Fr:Nr,b=new w(Math.ceil(v/3)*6,1),E=b.array;if(x!==null){let _=x.array;g=x.version;for(let M=0,D=0;M<v;M+=3){let C=_[M+0],N=_[M+1],U=_[M+2];E[D++]=C,E[D++]=N,E[D++]=N,E[D++]=U,E[D++]=U,E[D++]=C}}else{g=p.version;for(let _=0,M=0;_<v;_+=3){let D=_+0,C=_+1,N=_+2;E[M++]=D,E[M++]=C,E[M++]=C,E[M++]=N,E[M++]=N,E[M++]=D}}b.version=g;let T=s.get(m);T&&t.remove(T),s.set(m,b)}function u(m){let x=s.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return s.get(m)}function f(){for(let m in n){let x=n[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Mg(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function wg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Tg(r,t,e){let i=new WeakMap,n=new be;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let D=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let b=o.attributes.position.count*w,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*E*4*d),_=new Dr(T,b,E,d);_.type=Ui,_.needsUpdate=!0;let M=w*4;for(let C=0;C<d;C++){let N=p[C],U=g[C],H=v[C],I=b*E*4*C;for(let V=0;V<N.count;V++){let X=V*M;f===!0&&(n.fromBufferAttribute(N,V),T[I+X+0]=n.x,T[I+X+1]=n.y,T[I+X+2]=n.z,T[I+X+3]=0),m===!0&&(n.fromBufferAttribute(U,V),T[I+X+4]=n.x,T[I+X+5]=n.y,T[I+X+6]=n.z,T[I+X+7]=0),x===!0&&(n.fromBufferAttribute(H,V),T[I+X+8]=n.x,T[I+X+9]=n.y,T[I+X+10]=n.z,T[I+X+11]=H.itemSize===4?n.w:1)}}u={count:d,texture:_,size:new pt(b,E)},i.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Eg(r,t,e,i,n){let s=new WeakMap;function a(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ag={[ia]:"LINEAR_TONE_MAPPING",[na]:"REINHARD_TONE_MAPPING",[sa]:"CINEON_TONE_MAPPING",[ls]:"ACES_FILMIC_TONE_MAPPING",[aa]:"AGX_TONE_MAPPING",[oa]:"NEUTRAL_TONE_MAPPING",[ra]:"CUSTOM_TONE_MAPPING"};function Rg(r,t,e,i,n,s){let a=new Ce(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new ce;h.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let d=new Ks({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ot(h,d),f=new rs(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,w=[],b=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),l!==null&&l.setSize(E,T);for(let _=0;_<w.length;_++){let M=w[_];M.setSize&&M.setSize(E,T)}},this.setEffects=function(E){w=E,b=w.length>0&&w[0].isRenderPass===!0;let T=a.width,_=a.height;w.length>0&&o===null&&(o=new Ce(T,_,{type:Fe,depthBuffer:!1,stencilBuffer:!1}),l=new Ce(T,_,{type:Fe,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&w.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new mn(T,_),s===!0&&(c.format=yn,c.type=hs)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<w.length;D++){let C=w[D];C.setSize&&C.setSize(T,_),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,T){if(p||E.toneMapping===en&&w.length===0)return!1;if(v=T,T!==null){let _=T.width,M=T.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return b===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=en,!0},this.hasRenderPass=function(){return b},this.end=function(E,T){E.toneMapping=g,p=!0;let _=a,M=o;for(let D=0;D<w.length;D++){let C=w[D];C.enabled!==!1&&(C.render(E,M,_,T),C.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(m!==E.outputColorSpace||x!==E.toneMapping){m=E.outputColorSpace,x=E.toneMapping,d.defines={},jt.getTransfer(m)===re&&(d.defines.SRGB_TRANSFER="");let D=Ag[x];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(v),E.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Qd=new pi,tf=new mn(1,1),ef=new Gr(1),nf=new Dr,sf=new So,rf=new zr,Ld=[],Dd=[],kd=new Float32Array(16),Nd=new Float32Array(9),Fd=new Float32Array(4);function sr(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Ld[n];if(s===void 0&&(s=new Float32Array(n),Ld[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ue(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Oe(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Bl(r,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Cg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2fv(this.addr,t),Oe(e,t)}}function Ig(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;r.uniform3fv(this.addr,t),Oe(e,t)}}function Lg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4fv(this.addr,t),Oe(e,t)}}function Dg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;Fd.set(i),r.uniformMatrix2fv(this.addr,!1,Fd),Oe(e,i)}}function kg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;Nd.set(i),r.uniformMatrix3fv(this.addr,!1,Nd),Oe(e,i)}}function Ng(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,i))return;kd.set(i),r.uniformMatrix4fv(this.addr,!1,kd),Oe(e,i)}}function Fg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ug(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2iv(this.addr,t),Oe(e,t)}}function Og(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;r.uniform3iv(this.addr,t),Oe(e,t)}}function Bg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4iv(this.addr,t),Oe(e,t)}}function zg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2uiv(this.addr,t),Oe(e,t)}}function Hg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;r.uniform3uiv(this.addr,t),Oe(e,t)}}function Vg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4uiv(this.addr,t),Oe(e,t)}}function zl(r){return r.version===0&&(r.compareFunction=sh,r.needsUpdate=!0),r}function Wg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=zl(tf):s=Qd,e.setTexture2D(t||s,n)}function $g(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||sf,n)}function Xg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=zl(ef):s=rf,e.setTextureCube(t||s,n)}function qg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||nf,n)}function Yg(r){switch(r){case 5126:return Cg;case 35664:return Pg;case 35665:return Ig;case 35666:return Lg;case 35674:return Dg;case 35675:return kg;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return Gg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function Kg(r,t){r.uniform1fv(this.addr,t)}function Jg(r,t){let e=sr(t,this.size,2);r.uniform2fv(this.addr,e)}function Zg(r,t){let e=sr(t,this.size,3);r.uniform3fv(this.addr,e)}function jg(r,t){let e=sr(t,this.size,4);r.uniform4fv(this.addr,e)}function Qg(r,t){let e=sr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tx(r,t){let e=sr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ex(r,t){let e=sr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ix(r,t){r.uniform1iv(this.addr,t)}function nx(r,t){r.uniform2iv(this.addr,t)}function sx(r,t){r.uniform3iv(this.addr,t)}function rx(r,t){r.uniform4iv(this.addr,t)}function ax(r,t){r.uniform1uiv(this.addr,t)}function ox(r,t){r.uniform2uiv(this.addr,t)}function lx(r,t){r.uniform3uiv(this.addr,t)}function cx(r,t){r.uniform4uiv(this.addr,t)}function hx(r,t,e){let i=this.cache,n=t.length,s=Bl(e,n);Ue(i,s)||(r.uniform1iv(this.addr,s),Oe(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=zl(tf):a=Qd;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function ux(r,t,e){let i=this.cache,n=t.length,s=Bl(e,n);Ue(i,s)||(r.uniform1iv(this.addr,s),Oe(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||sf,s[a])}function dx(r,t,e){let i=this.cache,n=t.length,s=Bl(e,n);Ue(i,s)||(r.uniform1iv(this.addr,s),Oe(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=zl(ef):a=rf;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,s[o])}function fx(r,t,e){let i=this.cache,n=t.length,s=Bl(e,n);Ue(i,s)||(r.uniform1iv(this.addr,s),Oe(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||nf,s[a])}function px(r){switch(r){case 5126:return Kg;case 35664:return Jg;case 35665:return Zg;case 35666:return jg;case 35674:return Qg;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return ix;case 35667:case 35671:return nx;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}var _h=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}},yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=px(e.type)}},bh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},xh=/(\w+)(\])?(\[|\.)?/g;function Ud(r,t){r.seq.push(t),r.map[t.id]=t}function mx(r,t,e){let i=r.name,n=i.length;for(xh.lastIndex=0;;){let s=xh.exec(i),a=xh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Ud(e,c===void 0?new _h(o,r,t):new yh(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new bh(o),Ud(e,d)),e=d}}}var ir=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);mx(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Od(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var gx=37297,xx=0;function vx(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Bd=new Ht;function _x(r){jt._getMatrix(Bd,jt.workingColorSpace,r);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(r)){case Pr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function zd(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+vx(r.getShaderSource(t),o)}else return s}function yx(r,t){let e=_x(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var bx={[ia]:"Linear",[na]:"Reinhard",[sa]:"Cineon",[ls]:"ACESFilmic",[aa]:"AgX",[oa]:"Neutral",[ra]:"Custom"};function Sx(r,t){let e=bx[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new L;function Mx(){jt.getLuminanceCoefficients(Ul);let r=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Tx(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ex(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function xa(r){return r!==""}function Gd(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Hd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(r){return r.replace(Ax,Rx)}function Rx(r,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Sh(e)}var Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(r){return r.replace(Cx,Px)}function Px(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Wd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ix={[as]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function Lx(r){return Ix[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dx={[tr]:"ENVMAP_MODE_REFRACTION"};function kx(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Dx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nx={[Yo]:"ENVMAP_BLENDING_MULTIPLY",[ad]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function Fx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Nx[r.combine]||"ENVMAP_BLENDING_NONE"}function Ux(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Lx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=kx(e),d=Fx(e),u=wx(e),f=Tx(s),m=n.createProgram(),x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xa).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(x=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==en?"#define TONE_MAPPING":"",e.toneMapping!==en?Kt.tonemapping_pars_fragment:"",e.toneMapping!==en?Sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,yx("linearToOutputTexel",e.outputColorSpace),Mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xa).join(`
`)),a=Sh(a),a=Gd(a,e),a=Hd(a,e),o=Sh(o),o=Gd(o,e),o=Hd(o,e),a=Vd(a),o=Vd(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+a,w=g+p+o,b=Od(n,n.VERTEX_SHADER,v),E=Od(n,n.FRAGMENT_SHADER,w);n.attachShader(m,b),n.attachShader(m,E),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function T(C){if(r.debug.checkShaderErrors){let N=n.getProgramInfoLog(m)||"",U=n.getShaderInfoLog(b)||"",H=n.getShaderInfoLog(E)||"",I=N.trim(),V=U.trim(),X=H.trim(),W=!0,it=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,b,E);else{let q=zd(n,b,"vertex"),tt=zd(n,E,"fragment");Bt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+q+`
`+tt)}else I!==""?Dt("WebGLProgram: Program Info Log:",I):(V===""||X==="")&&(it=!1);it&&(C.diagnostics={runnable:W,programLog:I,vertexShader:{log:V,prefix:x},fragmentShader:{log:X,prefix:p}})}n.deleteShader(b),n.deleteShader(E),_=new ir(n,m),M=Ex(n,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=n.getProgramParameter(m,gx)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}var Ox=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new wh(t),e.set(t,i)),i}},wh=class{constructor(t){this.id=Ox++,this.code=t,this.usedTimes=0}};function Bx(r){return r===zn||r===fa||r===pa}function zx(r,t,e,i,n,s){let a=new Vs,o=new Mh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,D,C,N,U){let H=C.fog,I=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=t.get(_.envMap||V,X),it=u[_.type],q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Dt("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=tt!==void 0?tt.length:0,St=0;I.morphAttributes.position!==void 0&&(St=1),I.morphAttributes.normal!==void 0&&(St=2),I.morphAttributes.color!==void 0&&(St=3);let kt,J,gt,bt;if(it){let vt=sn[it];kt=vt.vertexShader,J=vt.fragmentShader}else{kt=_.vertexShader,J=_.fragmentShader;let vt=o.getVertexShaderStage(_),ue=o.getFragmentShaderStage(_);o.update(_,vt,ue),gt=vt.id,bt=ue.id}let It=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Vt=N.isInstancedMesh===!0,Se=N.isBatchedMesh===!0,Nt=!!_.map,oe=!!_.matcap,he=!!W,Zt=he&&W.isPMREMTexture===!0,De=!!_.aoMap,Ae=!!_.lightMap,je=!!_.bumpMap&&_.wireframe===!1,Pt=!!_.normalMap,Qe=!!_.displacementMap,Re=!!_.emissiveMap,ti=!!_.metalnessMap,Ft=!!_.roughnessMap,Me=_.anisotropy>0,F=_.clearcoat>0,qe=_.diffuseRoughness>0,_e=_.dispersion>0,ye=_.retroreflectivity>0,mt=_.iridescence>0,ke=_.sheen>0,Ut=_.transmission>0,Wt=Me&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,y=F&&!!_.clearcoatNormalMap,z=F&&!!_.clearcoatRoughnessMap,nt=qe&&!!_.diffuseRoughnessMap,Q=mt&&!!_.iridescenceMap,at=mt&&!!_.iridescenceThicknessMap,dt=ke&&!!_.sheenColorMap,K=ke&&!!_.sheenRoughnessMap,Z=!!_.specularMap,lt=!!_.specularColorMap,P=!!_.specularIntensityMap,j=Ut&&!!_.transmissionMap,Y=Ut&&!!_.thicknessMap,ct=!!_.gradientMap,rt=!!_.alphaMap,ot=_.alphaTest>0,Ct=!!_.alphaHash,Yt=!!_.extensions,st=en;_.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(st=r.toneMapping);let Lt=Zt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,qt={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:J,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:bt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:Se,batchingColor:Se&&N._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&N.instanceColor!==null,instancingMorph:Vt&&N.morphTexture!==null,outputColorSpace:It===null?r.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:oe,envMap:he,envMapMode:he&&W.mapping,envMapPMREM:Zt,envMapMaxLod:Zt?Lt.length-1:null,envMapSize:Zt?Lt[0].width:null,aoMap:De,lightMap:Ae,bumpMap:je,normalMap:Pt,displacementMap:Qe,emissiveMap:Re,normalMapObjectSpace:Pt&&_.normalMapType===hd,normalMapTangentSpace:Pt&&_.normalMapType===ma,packedNormalMap:Pt&&_.normalMapType===ma&&Bx(_.normalMap.format),metalnessMap:ti,roughnessMap:Ft,anisotropy:Me,anisotropyMap:Wt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:z,diffuseRoughness:qe,diffuseRoughnessMap:nt,dispersion:_e,retroreflection:ye,iridescence:mt,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:ke,sheenColorMap:dt,sheenRoughnessMap:K,specularMap:Z,specularColorMap:lt,specularIntensityMap:P,transmission:Ut,transmissionMap:j,thicknessMap:Y,gradientMap:ct,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:ot,alphaHash:Ct,combine:_.combine,mapUv:Nt&&f(_.map.channel),aoMapUv:De&&f(_.aoMap.channel),lightMapUv:Ae&&f(_.lightMap.channel),bumpMapUv:je&&f(_.bumpMap.channel),normalMapUv:Pt&&f(_.normalMap.channel),displacementMapUv:Qe&&f(_.displacementMap.channel),emissiveMapUv:Re&&f(_.emissiveMap.channel),metalnessMapUv:ti&&f(_.metalnessMap.channel),roughnessMapUv:Ft&&f(_.roughnessMap.channel),anisotropyMapUv:Wt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:lt&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:rt&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Pt||Me),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Nt||rt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:St,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(vt=>vt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===re,decodeVideoTextureEmissive:Re&&_.emissiveMap.isVideoTexture===!0&&jt.getTransfer(_.emissiveMap.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mi,flipSided:_.side===Ne,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(M,_),g(M,_),M.push(r.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let M=u[_.type],D;if(M){let C=sn[M];D=Sn.clone(C.uniforms)}else D=_.uniforms;return D}function w(_,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new Ux(r,M,_,n),c.push(D),h.set(M,D)),D}function b(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:T}}function Gx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Hx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function $d(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Xd(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,p,g){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},r[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=p,v.group=g),t++,v}function l(u,f,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let w=o(u,f,m,x,p,g);m.transmission>0?i.push(w):m.transparent===!0?n.push(w):e.push(w)}function c(u,f,m,x,p,g){let v=o(u,f,m,x,p,g);m.transmission>0?i.unshift(v):m.transparent===!0?n.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Hx),i.length>1&&i.sort(f||$d),n.length>1&&n.sort(f||$d)}function d(){for(let u=t,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function Vx(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new Xd,r.set(i,[a])):n>=s.length?(a=new Xd,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Wx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Rt};break;case"SpotLight":e={position:new L,direction:new L,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function $x(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Xx=0;function qx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Yx(r){let t=new Wx,e=$x(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let n=new L,s=new ie,a=new ie;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,v=0,w=0,b=0,E=0,T=0,_=0,M=0,D=0,C=0;c.sort(qx);for(let U=0,H=c.length;U<H;U++){let I=c[U],V=I.color,X=I.intensity,W=I.distance,it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zn?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*X,d+=V.g*X,u+=V.b*X;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],X);C++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[m]=et,i.sunShadowMap[m]=it;let St=tt.getViewportCount();for(let kt=0;kt<St;kt++)i.sunShadowMatrix[x+kt]=tt.getMatrix(kt),i.sunShadowCascade[x+kt]=tt._cascadeData[kt];x+=St,m++}i.sun[f]=q,f++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,i.directionalShadow[p]=et,i.directionalShadowMap[p]=it,i.directionalShadowMatrix[p]=I.shadow.matrix,E++}i.directional[p]=q,p++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(X),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[v]=q;let tt=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,tt.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[v]=tt.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,i.spotShadow[v]=et,i.spotShadowMap[v]=it,_++}v++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(V).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=q,w++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let tt=I.shadow,et=e.get(I);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,i.pointShadow[g]=et,i.pointShadowMap[g]=it,i.pointShadowMatrix[g]=I.shadow.matrix,T++}i.point[g]=q,g++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(X),q.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[b]=q,b++}}w>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==b||N.numSunShadows!==m||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==M||N.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=v,i.rectArea.length=w,i.point.length=g,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-D,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=b,N.numSunShadows=m,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=M,N.numLightProbes=C,i.version=Xx++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let b=c[v];if(b.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(g),u++}else if(b.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function qd(r){let t=new Yx(r),e=[],i=[],n=[];function s(d){h.camera=d,e.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kx(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new qd(r),t.set(n,[o])):s>=a.length?(o=new qd(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`,jx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Qx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Yd=new ie,ga=new L,vh=new L;function tv(r,t,e){let i=new Dn,n=new pt,s=new pt,a=new be,o=new ko,l=new No,c={},h=e.maxTextureSize,d={[Bn]:Ne,[Ne]:Bn,[mi]:mi},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Jx,fragmentShader:Zx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ce;m.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ot(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let g=this.type;this.render=function(T,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Gu&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);let D=r.getRenderTarget(),C=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),U=r.state;U.setBlending(vn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=T.length;I<V;I++){let X=T[I],W=X.shadow;if(W===void 0){Dt("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let it=W.getFrameExtents();n.multiply(it),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/it.x),n.x=s.x*it.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/it.y),n.y=s.y*it.y,W.mapSize.y=s.y));let q=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===js){if(X.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ce(n.x,n.y,{format:zn,type:Fe,minFilter:fi,magFilter:fi,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new mn(n.x,n.y,Ui),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=pn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=We,W.map.depthTexture.magFilter=We}else X.isPointLight?(W.map=new va(n.x),W.map.depthTexture=new Gr(n.x,Xi)):(W.map=new Ce(n.x,n.y),W.map.depthTexture=new mn(n.x,n.y,Xi)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=pn,this.type===as?(W.map.depthTexture.compareFunction=q?nh:ih,W.map.depthTexture.minFilter=fi,W.map.depthTexture.magFilter=fi):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=We,W.map.depthTexture.magFilter=We);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);let tt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,M);let et=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:M.layers;for(let St=0;St<tt;St++){let kt=W.getCamera(St);if(X.isPointLight){let J=W.camera,gt=W.matrix,bt=X.distance||J.far;bt!==J.far&&(J.far=bt,J.updateProjectionMatrix()),ga.setFromMatrixPosition(X.matrixWorld),J.position.copy(ga),vh.copy(J.position),vh.add(jx[St]),J.up.copy(Qx[St]),J.lookAt(vh),J.updateMatrixWorld(),gt.makeTranslation(-ga.x,-ga.y,-ga.z),Yd.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Yd,J.coordinateSystem,J.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,St),r.clear();else{St===0&&(r.setRenderTarget(W.map),r.clear());let J=W.getViewport(St);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),U.viewport(a)}i=W.getFrustum(St),b(_,M,kt,X,et,this.type)}W.isPointLightShadow!==!0&&this.type===js&&v(W,M),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(D,C,N)};function v(T,_){let M=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ce(n.x,n.y,{format:zn,type:Fe}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(_,null,M,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(_,null,M,f,x,null)}function w(T,_,M,D){let C=null,N=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=C.uuid,H=_.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let V=I[H];V===void 0&&(V=C.clone(),I[H]=V,_.addEventListener("dispose",E)),C=V}if(C.visible=_.visible,C.wireframe=_.wireframe,D===js?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=r.properties.get(C);U.light=M}return C}function b(T,_,M,D,C,N){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===js)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let I=t.update(T),V=T.material;if(Array.isArray(V)){let X=I.groups;for(let W=0,it=X.length;W<it;W++){let q=X[W],tt=V[q.materialIndex];if(tt&&tt.visible){let et=w(T,tt,D,N);T.onBeforeShadow(r,T,_,M,I,et,q),r.renderBufferDirect(M,null,I,et,T,q),T.onAfterShadow(r,T,_,M,I,et,q)}}}else if(V.visible){let X=w(T,V,D,N);T.onBeforeShadow(r,T,_,M,I,X,null),r.renderBufferDirect(M,null,I,X,T,null),T.onAfterShadow(r,T,_,M,I,X,null)}}let H=T.children;for(let I=0,V=H.length;I<V;I++)b(H[I],_,M,D,C,N)}function E(T){T.target.removeEventListener("dispose",E);for(let M in c){let D=c[M],C=T.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function ev(r,t){function e(){let P=!1,j=new be,Y=null,ct=new be(0,0,0,0);return{setMask:function(rt){Y!==rt&&!P&&(r.colorMask(rt,rt,rt,rt),Y=rt)},setLocked:function(rt){P=rt},setClear:function(rt,ot,Ct,Yt,st){st===!0&&(rt*=Yt,ot*=Yt,Ct*=Yt),j.set(rt,ot,Ct,Yt),ct.equals(j)===!1&&(r.clearColor(rt,ot,Ct,Yt),ct.copy(j))},reset:function(){P=!1,Y=null,ct.set(-1,0,0,0)}}}function i(){let P=!1,j=!1,Y=null,ct=null,rt=null;return{setReversed:function(ot){if(j!==ot){let Ct=t.get("EXT_clip_control");ot?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),j=ot;let Yt=rt;rt=null,this.setClear(Yt)}},getReversed:function(){return j},setTest:function(ot){ot?xt(r.DEPTH_TEST):Vt(r.DEPTH_TEST)},setMask:function(ot){Y!==ot&&!P&&(r.depthMask(ot),Y=ot)},setFunc:function(ot){if(j&&(ot=yd[ot]),ct!==ot){switch(ot){case co:r.depthFunc(r.NEVER);break;case ho:r.depthFunc(r.ALWAYS);break;case uo:r.depthFunc(r.LESS);break;case Os:r.depthFunc(r.LEQUAL);break;case fo:r.depthFunc(r.EQUAL);break;case po:r.depthFunc(r.GEQUAL);break;case mo:r.depthFunc(r.GREATER);break;case go:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=ot}},setLocked:function(ot){P=ot},setClear:function(ot){rt!==ot&&(rt=ot,j&&(ot=1-ot),r.clearDepth(ot))},reset:function(){P=!1,Y=null,ct=null,rt=null,j=!1}}}function n(){let P=!1,j=null,Y=null,ct=null,rt=null,ot=null,Ct=null,Yt=null,st=null;return{setTest:function(Lt){P||(Lt?xt(r.STENCIL_TEST):Vt(r.STENCIL_TEST))},setMask:function(Lt){j!==Lt&&!P&&(r.stencilMask(Lt),j=Lt)},setFunc:function(Lt,qt,vt){(Y!==Lt||ct!==qt||rt!==vt)&&(r.stencilFunc(Lt,qt,vt),Y=Lt,ct=qt,rt=vt)},setOp:function(Lt,qt,vt){(ot!==Lt||Ct!==qt||Yt!==vt)&&(r.stencilOp(Lt,qt,vt),ot=Lt,Ct=qt,Yt=vt)},setLocked:function(Lt){P=Lt},setClear:function(Lt){st!==Lt&&(r.clearStencil(Lt),st=Lt)},reset:function(){P=!1,j=null,Y=null,ct=null,rt=null,ot=null,Ct=null,Yt=null,st=null}}}let s=new e,a=new i,o=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,w=null,b=null,E=null,T=null,_=null,M=new Rt(0,0,0),D=0,C=!1,N=null,U=null,H=null,I=null,V=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=it>=2);let tt=null,et={},St=r.getParameter(r.SCISSOR_BOX),kt=r.getParameter(r.VIEWPORT),J=new be().fromArray(St),gt=new be().fromArray(kt);function bt(P,j,Y,ct){let rt=new Uint8Array(4),ot=r.createTexture();r.bindTexture(P,ot),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ct=0;Ct<Y;Ct++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(j,0,r.RGBA,1,1,ct,0,r.RGBA,r.UNSIGNED_BYTE,rt):r.texImage2D(j+Ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,rt);return ot}let It={};It[r.TEXTURE_2D]=bt(r.TEXTURE_2D,r.TEXTURE_2D,1),It[r.TEXTURE_CUBE_MAP]=bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[r.TEXTURE_2D_ARRAY]=bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),It[r.TEXTURE_3D]=bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(r.DEPTH_TEST),a.setFunc(Os),je(!1),Pt(Wc),xt(r.CULL_FACE),De(vn);function xt(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Vt(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Se(P,j){return u[P]!==j?(r.bindFramebuffer(P,j),u[P]=j,P===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=j),P===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=j),!0):!1}function Nt(P,j){let Y=m,ct=!1;if(P){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));let rt=P.textures;if(Y.length!==rt.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ot=0,Ct=rt.length;ot<Ct;ot++)Y[ot]=r.COLOR_ATTACHMENT0+ot;Y.length=rt.length,ct=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ct=!0);ct&&r.drawBuffers(Y)}function oe(P){return x!==P?(r.useProgram(P),x=P,!0):!1}let he={[os]:r.FUNC_ADD,[Vu]:r.FUNC_SUBTRACT,[Wu]:r.FUNC_REVERSE_SUBTRACT};he[$u]=r.MIN,he[Xu]=r.MAX;let Zt={[qu]:r.ZERO,[Yu]:r.ONE,[Ku]:r.SRC_COLOR,[qc]:r.SRC_ALPHA,[ed]:r.SRC_ALPHA_SATURATE,[Qu]:r.DST_COLOR,[Zu]:r.DST_ALPHA,[Ju]:r.ONE_MINUS_SRC_COLOR,[Yc]:r.ONE_MINUS_SRC_ALPHA,[td]:r.ONE_MINUS_DST_COLOR,[ju]:r.ONE_MINUS_DST_ALPHA,[id]:r.CONSTANT_COLOR,[nd]:r.ONE_MINUS_CONSTANT_COLOR,[sd]:r.CONSTANT_ALPHA,[rd]:r.ONE_MINUS_CONSTANT_ALPHA};function De(P,j,Y,ct,rt,ot,Ct,Yt,st,Lt){if(P===vn){p===!0&&(Vt(r.BLEND),p=!1);return}if(p===!1&&(xt(r.BLEND),p=!0),P!==Hu){if(P!==g||Lt!==C){if((v!==os||E!==os)&&(r.blendEquation(r.FUNC_ADD),v=os,E=os),Lt)switch(P){case Qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yi:r.blendFunc(r.ONE,r.ONE);break;case $c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Bt("WebGLState: Invalid blending: ",P);break}else switch(P){case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $c:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",P);break}w=null,b=null,T=null,_=null,M.set(0,0,0),D=0,g=P,C=Lt}return}rt=rt||j,ot=ot||Y,Ct=Ct||ct,(j!==v||rt!==E)&&(r.blendEquationSeparate(he[j],he[rt]),v=j,E=rt),(Y!==w||ct!==b||ot!==T||Ct!==_)&&(r.blendFuncSeparate(Zt[Y],Zt[ct],Zt[ot],Zt[Ct]),w=Y,b=ct,T=ot,_=Ct),(Yt.equals(M)===!1||st!==D)&&(r.blendColor(Yt.r,Yt.g,Yt.b,st),M.copy(Yt),D=st),g=P,C=!1}function Ae(P,j){P.side===mi?Vt(r.CULL_FACE):xt(r.CULL_FACE);let Y=P.side===Ne;j&&(Y=!Y),je(Y),P.blending===Qs&&P.transparent===!1?De(vn):De(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);let ct=P.stencilWrite;o.setTest(ct),ct&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xt(r.SAMPLE_ALPHA_TO_COVERAGE):Vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function je(P){N!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),N=P)}function Pt(P){P!==Bu?(xt(r.CULL_FACE),P!==U&&(P===Wc?r.cullFace(r.BACK):P===zu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Vt(r.CULL_FACE),U=P}function Qe(P){P!==H&&(W&&r.lineWidth(P),H=P)}function Re(P,j,Y){P?(xt(r.POLYGON_OFFSET_FILL),(I!==j||V!==Y)&&(I=j,V=Y,a.getReversed()&&(j=-j,Y=-Y),r.polygonOffset(j,Y))):Vt(r.POLYGON_OFFSET_FILL)}function ti(P){P?xt(r.SCISSOR_TEST):Vt(r.SCISSOR_TEST)}function Ft(P){P===void 0&&(P=r.TEXTURE0+X-1),tt!==P&&(r.activeTexture(P),tt=P)}function Me(P,j,Y){Y===void 0&&(tt===null?Y=r.TEXTURE0+X-1:Y=tt);let ct=et[Y];ct===void 0&&(ct={type:void 0,texture:void 0},et[Y]=ct),(ct.type!==P||ct.texture!==j)&&(tt!==Y&&(r.activeTexture(Y),tt=Y),r.bindTexture(P,j||It[P]),ct.type=P,ct.texture=j)}function F(){let P=et[tt];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function qe(){try{r.compressedTexImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function _e(){try{r.compressedTexImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function ye(){try{r.texSubImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function mt(){try{r.texSubImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function ke(){try{r.compressedTexSubImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function Ut(){try{r.compressedTexSubImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function Wt(){try{r.texStorage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function A(){try{r.texStorage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function y(){try{r.texImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function z(){try{r.texImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function nt(P){return d[P]!==void 0?d[P]:r.getParameter(P)}function Q(P,j){d[P]!==j&&(r.pixelStorei(P,j),d[P]=j)}function at(P){J.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function dt(P){gt.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),gt.copy(P))}function K(P,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let ct=Y.get(P);ct===void 0&&(ct=r.getUniformBlockIndex(j,P.name),r.uniformBlockBinding(j,ct,ct),Y.set(P,ct))}function Z(P,j,Y){let rt=c.get(j).get(P);l[rt]!==Y&&(r.bindBufferBase(r.UNIFORM_BUFFER,rt,Y),l[rt]=Y)}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,et={},u={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,w=null,b=null,E=null,T=null,_=null,M=new Rt(0,0,0),D=0,C=!1,N=null,U=null,H=null,I=null,V=null,J.set(0,0,r.canvas.width,r.canvas.height),gt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:xt,disable:Vt,bindFramebuffer:Se,drawBuffers:Nt,useProgram:oe,setBlending:De,setMaterial:Ae,setFlipSided:je,setCullFace:Pt,setLineWidth:Qe,setPolygonOffset:Re,setScissorTest:ti,activeTexture:Ft,bindTexture:Me,unbindTexture:F,compressedTexImage2D:qe,compressedTexImage3D:_e,texImage2D:y,texImage3D:z,pixelStorei:Q,getParameter:nt,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Wt,texStorage3D:A,texSubImage2D:ye,texSubImage3D:mt,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ut,scissor:at,viewport:dt,reset:lt}}function iv(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):Ir("canvas")}function v(A,y,z){let nt=1,Q=Wt(A);if((Q.width>z||Q.height>z)&&(nt=z/Math.max(Q.width,Q.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let at=Math.floor(nt*Q.width),dt=Math.floor(nt*Q.height);u===void 0&&(u=g(at,dt));let K=y?g(at,dt):u;return K.width=at,K.height=dt,K.getContext("2d").drawImage(A,0,0,at,dt),Dt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+at+"x"+dt+")."),K}else return"data"in A&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function w(A){return A.generateMipmaps}function b(A){r.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(A,y,z,nt,Q,at=!1){if(A!==null){if(r[A]!==void 0)return r[A];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt;nt&&(dt=t.get("EXT_texture_norm16"),dt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===r.RED&&(z===r.FLOAT&&(K=r.R32F),z===r.HALF_FLOAT&&(K=r.R16F),z===r.UNSIGNED_BYTE&&(K=r.R8),z===r.UNSIGNED_SHORT&&dt&&(K=dt.R16_EXT),z===r.SHORT&&dt&&(K=dt.R16_SNORM_EXT)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.R8UI),z===r.UNSIGNED_SHORT&&(K=r.R16UI),z===r.UNSIGNED_INT&&(K=r.R32UI),z===r.BYTE&&(K=r.R8I),z===r.SHORT&&(K=r.R16I),z===r.INT&&(K=r.R32I)),y===r.RG&&(z===r.FLOAT&&(K=r.RG32F),z===r.HALF_FLOAT&&(K=r.RG16F),z===r.UNSIGNED_BYTE&&(K=r.RG8),z===r.UNSIGNED_SHORT&&dt&&(K=dt.RG16_EXT),z===r.SHORT&&dt&&(K=dt.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RG8UI),z===r.UNSIGNED_SHORT&&(K=r.RG16UI),z===r.UNSIGNED_INT&&(K=r.RG32UI),z===r.BYTE&&(K=r.RG8I),z===r.SHORT&&(K=r.RG16I),z===r.INT&&(K=r.RG32I)),y===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGB8UI),z===r.UNSIGNED_SHORT&&(K=r.RGB16UI),z===r.UNSIGNED_INT&&(K=r.RGB32UI),z===r.BYTE&&(K=r.RGB8I),z===r.SHORT&&(K=r.RGB16I),z===r.INT&&(K=r.RGB32I)),y===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),z===r.UNSIGNED_INT&&(K=r.RGBA32UI),z===r.BYTE&&(K=r.RGBA8I),z===r.SHORT&&(K=r.RGBA16I),z===r.INT&&(K=r.RGBA32I)),y===r.RGB&&(z===r.UNSIGNED_SHORT&&dt&&(K=dt.RGB16_EXT),z===r.SHORT&&dt&&(K=dt.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),y===r.RGBA){let Z=at?Pr:jt.getTransfer(Q);z===r.FLOAT&&(K=r.RGBA32F),z===r.HALF_FLOAT&&(K=r.RGBA16F),z===r.UNSIGNED_BYTE&&(K=Z===re?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&dt&&(K=dt.RGBA16_EXT),z===r.SHORT&&dt&&(K=dt.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,y){let z;return A?y===null||y===Xi||y===hs?z=r.DEPTH24_STENCIL8:y===Ui?z=r.DEPTH32F_STENCIL8:y===er&&(z=r.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xi||y===hs?z=r.DEPTH_COMPONENT24:y===Ui?z=r.DEPTH_COMPONENT32F:y===er&&(z=r.DEPTH_COMPONENT16),z}function M(A,y){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==fi?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function D(A){let y=new WeakRef(A);i.get(A).__ref=y,m.add(y),x.register(A,y,y)}function C(A){let y=i.get(A).__ref;y!==void 0&&(m.delete(y),x.unregister(y))}function N(A){H(A.target)}function U(A){I(A.target)}function H(A){A.removeEventListener("dispose",N),C(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",U),C(A),it(A)}function V(){for(let A of m){let y=A.deref();y!==void 0&&(y.isRenderTarget===!0?I(y):H(y))}m.clear(),d.clear()}function X(A){let y=i.get(A);if(y.__webglInit===void 0)return;let z=A.source,nt=f.get(z);if(nt){let Q=nt[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&W(A),Object.keys(nt).length===0&&f.delete(z)}i.remove(A)}function W(A){let y=i.get(A);r.deleteTexture(y.__webglTexture);let z=A.source,nt=f.get(z);delete nt[y.__cacheKey],a.memory.textures--}function it(A){let y=i.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&H(z),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let at=0;at<y.__webglFramebuffer[Q].length;at++)r.deleteFramebuffer(y.__webglFramebuffer[Q][at]);else r.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[Q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let nt=A.textures;for(let Q=0,at=nt.length;Q<at;Q++){let dt=i.get(nt[Q]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(nt[Q])}i.remove(A)}let q=0;function tt(){q=0}function et(){return q}function St(A){q=A}function kt(){let A=q;return A>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,A}function J(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function gt(A,y){let z=i.get(A);if(A.isVideoTexture&&ke(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let nt=A.image;if(nt===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(z,A,y);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function bt(A,y){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ae(z,A,y);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function It(A,y){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ae(z,A,y);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function xt(A,y){let z=i.get(A);if(A.version>0&&z.__version!==A.version){je(z,A,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}let Vt={[Bs]:r.REPEAT,[Zi]:r.CLAMP_TO_EDGE,[xo]:r.MIRRORED_REPEAT},Se={[We]:r.NEAREST,[ld]:r.NEAREST_MIPMAP_NEAREST,[la]:r.NEAREST_MIPMAP_LINEAR,[fi]:r.LINEAR,[Zo]:r.LINEAR_MIPMAP_NEAREST,[_n]:r.LINEAR_MIPMAP_LINEAR},Nt={[dd]:r.NEVER,[sh]:r.ALWAYS,[fd]:r.LESS,[ih]:r.LEQUAL,[pd]:r.EQUAL,[nh]:r.GEQUAL,[md]:r.GREATER,[gd]:r.NOTEQUAL};function oe(A,y){if(y.type===Ui&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===fi||y.magFilter===Zo||y.magFilter===la||y.magFilter===_n||y.minFilter===fi||y.minFilter===Zo||y.minFilter===la||y.minFilter===_n)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Vt[y.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Vt[y.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Vt[y.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,Se[y.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===We||y.minFilter!==la&&y.minFilter!==_n||y.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function he(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",N),D(y));let nt=y.source,Q=f.get(nt);Q===void 0&&(Q={},f.set(nt,Q));let at=J(y);if(at!==A.__cacheKey){Q[at]===void 0&&(Q[at]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[at].usedTimes++;let dt=Q[A.__cacheKey];dt!==void 0&&(Q[A.__cacheKey].usedTimes--,dt.usedTimes===0&&W(y)),A.__cacheKey=at,A.__webglTexture=Q[at].texture}return z}function Zt(A,y,z){return Math.floor(Math.floor(A/z)/y)}function De(A,y,z,nt){let at=A.updateRanges;if(at.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,z,nt,y.data);else{at.sort((P,j)=>P.start-j.start);let dt=0;for(let P=1;P<at.length;P++){let j=at[dt],Y=at[P],ct=j.start+j.count,rt=Zt(Y.start,y.width,4),ot=Zt(j.start,y.width,4);Y.start<=ct+1&&rt===ot&&Zt(Y.start+Y.count-1,y.width,4)===rt?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++dt,at[dt]=Y)}at.length=dt+1;let K=e.getParameter(r.UNPACK_ROW_LENGTH),Z=e.getParameter(r.UNPACK_SKIP_PIXELS),lt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let P=0,j=at.length;P<j;P++){let Y=at[P],ct=Math.floor(Y.start/4),rt=Math.ceil(Y.count/4),ot=ct%y.width,Ct=Math.floor(ct/y.width),Yt=rt,st=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(r.UNPACK_SKIP_ROWS,Ct),e.texSubImage2D(r.TEXTURE_2D,0,ot,Ct,Yt,st,z,nt,y.data)}A.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,K),e.pixelStorei(r.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(r.UNPACK_SKIP_ROWS,lt)}}function Ae(A,y,z){let nt=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=r.TEXTURE_3D);let Q=he(A,y),at=y.source;e.bindTexture(nt,A.__webglTexture,r.TEXTURE0+z);let dt=i.get(at);if(at.version!==dt.__version||Q===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let st=jt.getPrimaries(jt.workingColorSpace),Lt=y.colorSpace===bn?null:jt.getPrimaries(y.colorSpace),qt=y.colorSpace===bn||st===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let Z=v(y.image,!1,n.maxTextureSize);Z=Ut(y,Z);let lt=s.convert(y.format,y.colorSpace),P=s.convert(y.type),j=T(y.internalFormat,lt,P,y.normalized,y.colorSpace,y.isVideoTexture);oe(nt,y);let Y,ct=y.mipmaps,rt=y.isVideoTexture!==!0,ot=dt.__version===void 0||Q===!0,Ct=at.dataReady,Yt=M(y,Z);if(y.isDepthTexture)j=_(y.format===yn,y.type),ot&&(rt?e.texStorage2D(r.TEXTURE_2D,1,j,Z.width,Z.height):e.texImage2D(r.TEXTURE_2D,0,j,Z.width,Z.height,0,lt,P,null));else if(y.isDataTexture)if(ct.length>0){rt&&ot&&e.texStorage2D(r.TEXTURE_2D,Yt,j,ct[0].width,ct[0].height);for(let st=0,Lt=ct.length;st<Lt;st++)Y=ct[st],rt?Ct&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,Y.width,Y.height,lt,P,Y.data):e.texImage2D(r.TEXTURE_2D,st,j,Y.width,Y.height,0,lt,P,Y.data);y.generateMipmaps=!1}else rt?(ot&&e.texStorage2D(r.TEXTURE_2D,Yt,j,Z.width,Z.height),Ct&&De(y,Z,lt,P)):e.texImage2D(r.TEXTURE_2D,0,j,Z.width,Z.height,0,lt,P,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){rt&&ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Yt,j,ct[0].width,ct[0].height,Z.depth);for(let st=0,Lt=ct.length;st<Lt;st++)if(Y=ct[st],y.format!==qi)if(lt!==null)if(rt){if(Ct)if(y.layerUpdates.size>0){let qt=uh(Y.width,Y.height,y.format,y.type);for(let vt of y.layerUpdates){let ue=Y.data.subarray(vt*qt/Y.data.BYTES_PER_ELEMENT,(vt+1)*qt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,vt,Y.width,Y.height,1,lt,ue)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,Z.depth,lt,Y.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,j,Y.width,Y.height,Z.depth,0,Y.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Ct&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,Z.depth,lt,P,Y.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,j,Y.width,Y.height,Z.depth,0,lt,P,Y.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{rt&&ot&&e.texStorage2D(r.TEXTURE_2D,Yt,j,ct[0].width,ct[0].height);for(let st=0,Lt=ct.length;st<Lt;st++)Y=ct[st],y.format!==qi?lt!==null?rt?Ct&&e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,Y.width,Y.height,lt,Y.data):e.compressedTexImage2D(r.TEXTURE_2D,st,j,Y.width,Y.height,0,Y.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Ct&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,Y.width,Y.height,lt,P,Y.data):e.texImage2D(r.TEXTURE_2D,st,j,Y.width,Y.height,0,lt,P,Y.data)}else if(y.isDataArrayTexture)if(rt){if(ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Yt,j,Z.width,Z.height,Z.depth),Ct)if(y.layerUpdates.size>0){let st=uh(Z.width,Z.height,y.format,y.type);for(let Lt of y.layerUpdates){let qt=Z.data.subarray(Lt*st/Z.data.BYTES_PER_ELEMENT,(Lt+1)*st/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Lt,Z.width,Z.height,1,lt,P,qt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,lt,P,Z.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,j,Z.width,Z.height,Z.depth,0,lt,P,Z.data);else if(y.isData3DTexture)rt?(ot&&e.texStorage3D(r.TEXTURE_3D,Yt,j,Z.width,Z.height,Z.depth),Ct&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,lt,P,Z.data)):e.texImage3D(r.TEXTURE_3D,0,j,Z.width,Z.height,Z.depth,0,lt,P,Z.data);else if(y.isFramebufferTexture){if(ot)if(rt)e.texStorage2D(r.TEXTURE_2D,Yt,j,Z.width,Z.height);else{let st=Z.width,Lt=Z.height;for(let qt=0;qt<Yt;qt++)e.texImage2D(r.TEXTURE_2D,qt,j,st,Lt,0,lt,P,null),st>>=1,Lt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let st=r.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),Z.parentNode!==st){st.appendChild(Z),d.add(y),st.onpaint=Lt=>{let qt=Lt.changedElements;for(let vt of d)qt.includes(vt.image)&&(vt.needsUpdate=!0)},st.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Z);else{let qt=r.RGBA,vt=r.RGBA,ue=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,qt,vt,ue,Z)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ct.length>0){if(rt&&ot){let st=Wt(ct[0]);e.texStorage2D(r.TEXTURE_2D,Yt,j,st.width,st.height)}for(let st=0,Lt=ct.length;st<Lt;st++)Y=ct[st],rt?Ct&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,lt,P,Y):e.texImage2D(r.TEXTURE_2D,st,j,lt,P,Y);y.generateMipmaps=!1}else if(rt){if(ot){let st=Wt(Z);e.texStorage2D(r.TEXTURE_2D,Yt,j,st.width,st.height)}Ct&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,P,Z)}else e.texImage2D(r.TEXTURE_2D,0,j,lt,P,Z);w(y)&&y.mipmapsAutoUpdate===!0&&b(nt),dt.__version=at.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function je(A,y,z){if(y.image.length!==6)return;let nt=he(A,y),Q=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+z);let at=i.get(Q);if(Q.version!==at.__version||nt===!0){e.activeTexture(r.TEXTURE0+z);let dt=jt.getPrimaries(jt.workingColorSpace),K=y.colorSpace===bn?null:jt.getPrimaries(y.colorSpace),Z=y.colorSpace===bn||dt===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let lt=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,j=[];for(let vt=0;vt<6;vt++)!lt&&!P?j[vt]=v(y.image[vt],!0,n.maxCubemapSize):j[vt]=P?y.image[vt].image:y.image[vt],j[vt]=Ut(y,j[vt]);let Y=j[0],ct=s.convert(y.format,y.colorSpace),rt=s.convert(y.type),ot=T(y.internalFormat,ct,rt,y.normalized,y.colorSpace),Ct=y.isVideoTexture!==!0,Yt=at.__version===void 0||nt===!0,st=Q.dataReady,Lt=M(y,Y);oe(r.TEXTURE_CUBE_MAP,y);let qt;if(y.isDepthTexture){if(ot=_(y.format===yn,y.type),Yt)if(Ct)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,ot,Y.width,Y.height);else for(let vt=0;vt<6;vt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ot,Y.width,Y.height,0,ct,rt,null)}else if(lt){Ct&&Yt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ot,Y.width,Y.height);for(let vt=0;vt<6;vt++){qt=j[vt].mipmaps;for(let ue=0;ue<qt.length;ue++){let Ge=qt[ue];y.format!==qi?ct!==null?Ct?st&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,0,0,Ge.width,Ge.height,ct,Ge.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,ot,Ge.width,Ge.height,0,Ge.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,0,0,Ge.width,Ge.height,ct,rt,Ge.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,ot,Ge.width,Ge.height,0,ct,rt,Ge.data)}}}else{if(qt=y.mipmaps,Ct&&Yt){qt.length>0&&Lt++;let vt=Wt(j[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ot,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(P){Ct?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,j[vt].width,j[vt].height,ct,rt,j[vt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ot,j[vt].width,j[vt].height,0,ct,rt,j[vt].data);for(let ue=0;ue<qt.length;ue++){let En=qt[ue].image[vt].image;Ct?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,0,0,En.width,En.height,ct,rt,En.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,ot,En.width,En.height,0,ct,rt,En.data)}}else{Ct?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ct,rt,j[vt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ot,ct,rt,j[vt]);for(let ue=0;ue<qt.length;ue++){let Ge=qt[ue];Ct?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,0,0,ct,rt,Ge.image[vt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,ot,ct,rt,Ge.image[vt])}}}w(y)&&y.mipmapsAutoUpdate===!0&&b(r.TEXTURE_CUBE_MAP),at.__version=Q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Pt(A,y,z,nt,Q,at){let dt=s.convert(z.format,z.colorSpace),K=s.convert(z.type),Z=T(z.internalFormat,dt,K,z.normalized,z.colorSpace),lt=i.get(y),P=i.get(z);if(P.__renderTarget=y,!lt.__hasExternalTextures){let j=Math.max(1,y.width>>at),Y=Math.max(1,y.height>>at);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,at,Z,j,Y,y.depth,0,dt,K,null):e.texImage2D(Q,at,Z,j,Y,0,dt,K,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),mt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,Q,P.__webglTexture,0,ye(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,Q,P.__webglTexture,at),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(A,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,A),y.depthBuffer){let nt=y.depthTexture,Q=nt&&nt.isDepthTexture?nt.type:null,at=_(y.stencilBuffer,Q),dt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye(y),at,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye(y),at,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,at,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,A)}else{let nt=y.textures;for(let Q=0;Q<nt.length;Q++){let at=nt[Q],dt=s.convert(at.format,at.colorSpace),K=s.convert(at.type),Z=T(at.internalFormat,dt,K,at.normalized,at.colorSpace);mt(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye(y),Z,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye(y),Z,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Z,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(A,y,z){let nt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(y.depthTexture);Q.__renderTarget=y;let at=nt?y.depthTexture.image[0]:y.depthTexture.image;(!Q.__webglTexture||at.width!==y.width||at.height!==y.height)&&(at.width=y.width,at.height=y.height,y.depthTexture.needsUpdate=!0),nt?xt(y.depthTexture,0):gt(y.depthTexture,0);let dt=Q.__webglTexture,K=ye(y),Z=nt?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,lt=y.depthTexture.format===yn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===pn)mt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,Z,dt,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,lt,Z,dt,0);else if(y.depthTexture.format===yn)mt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,Z,dt,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,lt,Z,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ti(A){let y=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let nt=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",Q)};nt.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=nt}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)Re(y.__webglFramebuffer[nt],A,nt);else A.texture.mipmaps.length>0?Re(y.__webglFramebuffer[0],A,0):Re(y.__webglFramebuffer,A,0);else if(z){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=r.createRenderbuffer(),Qe(y.__webglDepthbuffer[nt],A,!1);else{let Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,at),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,at)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Qe(y.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,at),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,at)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(A,y,z){let nt=i.get(A);y!==void 0&&Pt(nt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&ti(A)}function Me(A){let y=A.texture,z=i.get(A),nt=i.get(y);A.addEventListener("dispose",U),D(A);let Q=A.textures,at=A.isWebGLCubeRenderTarget===!0,dt=Q.length>1;if(dt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=y.version,a.memory.textures++),at){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let Z=0;Z<y.mipmaps.length;Z++)z.__webglFramebuffer[K][Z]=r.createFramebuffer()}else z.__webglFramebuffer[K]=r.createFramebuffer()}else{if(y.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)z.__webglFramebuffer[K]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(dt)for(let K=0,Z=Q.length;K<Z;K++){let lt=i.get(Q[K]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){let Z=Q[K];z.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let lt=s.convert(Z.format,Z.colorSpace),P=s.convert(Z.type),j=T(Z.internalFormat,lt,P,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),Y=ye(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,j,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,z.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Qe(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(at){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),oe(r.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)Pt(z.__webglFramebuffer[K][Z],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else Pt(z.__webglFramebuffer[K],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(y)?b(r.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let K=0,Z=Q.length;K<Z;K++){let lt=Q[K],P=i.get(lt),j=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,P.__webglTexture),oe(j,lt),Pt(z.__webglFramebuffer,A,lt,r.COLOR_ATTACHMENT0+K,j,0),w(lt)&&b(j)}e.unbindTexture()}else{let K=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(K,nt.__webglTexture),oe(K,y),y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)Pt(z.__webglFramebuffer[Z],A,y,r.COLOR_ATTACHMENT0,K,Z);else Pt(z.__webglFramebuffer,A,y,r.COLOR_ATTACHMENT0,K,0);w(y)?b(K):y.mipmaps.length>0&&r.texParameteri(K,r.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ti(A)}function F(A){let y=A.textures;for(let z=0,nt=y.length;z<nt;z++){let Q=y[z];if(w(Q)&&Q.mipmapsAutoUpdate===!0){let at=E(A),dt=i.get(Q).__webglTexture;e.bindTexture(at,dt),b(at),e.unbindTexture()}}}let qe=[];function _e(A){if(A.samples>0){if(mt(A)===!1){let y=A.textures,z=A.width,nt=A.height,Q=r.COLOR_BUFFER_BIT,at=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=i.get(A),K=y.length>1;if(K)for(let lt=0;lt<y.length;lt++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let lt=0;lt<y.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[lt]);let P=i.get(y[lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,P,0)}r.blitFramebuffer(0,0,z,nt,0,0,z,nt,Q,r.NEAREST),l===!0&&(qe.length=0,qe.push(r.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&qe.push(at),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let lt=0;lt<y.length;lt++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,dt.__webglColorRenderbuffer[lt]);let P=i.get(y[lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,P,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ye(A){return Math.min(n.maxSamples,A.samples)}function mt(A){let y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ke(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Ut(A,y){let z=A.colorSpace,nt=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Cr&&z!==bn&&(jt.getTransfer(z)===re?(nt!==qi||Q!==bi)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",z)),y}function Wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=tt,this.getTextureUnits=et,this.setTextureUnits=St,this.setTexture2D=gt,this.setTexture2DArray=bt,this.setTexture3D=It,this.setTextureCube=xt,this.rebindTextures=Ft,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ti,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=mt,this.dispose=V}function nv(r,t){function e(i,n=bn){let s,a=jt.getTransfer(n);if(i===bi)return r.UNSIGNED_BYTE;if(i===Qo)return r.UNSIGNED_SHORT_4_4_4_4;if(i===tl)return r.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Qc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jc)return r.BYTE;if(i===Zc)return r.SHORT;if(i===er)return r.UNSIGNED_SHORT;if(i===jo)return r.INT;if(i===Xi)return r.UNSIGNED_INT;if(i===Ui)return r.FLOAT;if(i===Fe)return r.HALF_FLOAT;if(i===th)return r.ALPHA;if(i===eh)return r.RGB;if(i===qi)return r.RGBA;if(i===pn)return r.DEPTH_COMPONENT;if(i===yn)return r.DEPTH_STENCIL;if(i===el)return r.RED;if(i===il)return r.RED_INTEGER;if(i===zn)return r.RG;if(i===nl)return r.RG_INTEGER;if(i===sl)return r.RGBA_INTEGER;if(i===ca||i===ha||i===ua||i===da)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===al||i===ol||i===ll)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===hl||i===ul||i===dl||i===fl||i===fa||i===pl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cl||i===hl)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ul)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===dl)return s.COMPRESSED_R11_EAC;if(i===fl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===fa)return s.COMPRESSED_RG11_EAC;if(i===pl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ml||i===gl||i===xl||i===vl||i===_l||i===yl||i===bl||i===Sl||i===Ml||i===wl||i===Tl||i===El||i===Al||i===Rl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ml)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Al)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cl||i===Pl||i===Il)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Cl)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ll||i===Dl||i===pa||i===kl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ll)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new $e({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends ji{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new Th,g={},v=e.getContextAttributes(),w=null,b=null,E=[],T=[],_=new pt,M=null,D=null,C=new ri;C.viewport=new be;let N=new ri;N.viewport=new be;let U=[C,N],H=new Xo,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let gt=E[J];return gt===void 0&&(gt=new Ws,E[J]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(J){let gt=E[J];return gt===void 0&&(gt=new Ws,E[J]=gt),gt.getGripSpace()},this.getHand=function(J){let gt=E[J];return gt===void 0&&(gt=new Ws,E[J]=gt),gt.getHandSpace()};function X(J){let gt=T.indexOf(J.inputSource);if(gt===-1)return;let bt=E[gt];bt!==void 0&&(bt.update(J.inputSource,J.frame,c||a),bt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",it);for(let J=0;J<E.length;J++){let gt=T[J];gt!==null&&(T[J]=null,E[J].disconnect(gt))}I=null,V=null,p.reset();for(let J in g)delete g[J];if(t.setRenderTarget(w),f=null,u=null,d=null,n=null,b=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),D!==null){let J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(w=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",W),n.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,It=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=v.stencil?yn:pn,It=v.stencil?hs:Xi);let Vt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Vt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Ce(u.textureWidth,u.textureHeight,{format:qi,type:bi,depthTexture:new mn(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,bt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ce(f.framebufferWidth,f.framebufferHeight,{format:qi,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),kt.setContext(n),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function it(J){for(let gt=0;gt<J.removed.length;gt++){let bt=J.removed[gt],It=T.indexOf(bt);It>=0&&(T[It]=null,E[It].disconnect(bt))}for(let gt=0;gt<J.added.length;gt++){let bt=J.added[gt],It=T.indexOf(bt);if(It===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=T.length){T.push(bt),It=Vt;break}else if(T[Vt]===null){T[Vt]=bt,It=Vt;break}if(It===-1)break}let xt=E[It];xt&&xt.connect(bt)}}function q(J,gt){gt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(gt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let gt=J.near,bt=J.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(bt=p.depthFar)),H.near=N.near=C.near=gt,H.far=N.far=C.far=bt,(I!==H.near||V!==H.far)&&(n.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,V=H.far),H.layers.mask=J.layers.mask|6,C.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let It=J.parent,xt=H.cameras;q(H,It);for(let Vt=0;Vt<xt.length;Vt++)q(xt[Vt],It);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),tt(J,H,It)};function tt(J,gt,bt){bt===null?J.matrix.copy(gt.matrixWorld):(J.matrix.copy(bt.matrixWorld),J.matrix.invert(),J.matrix.multiply(gt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_o*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(J){return g[J]};let et=null;function St(J,gt){if(h=gt.getViewerPose(c||a),m=gt,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let It=!1;bt.length!==H.cameras.length&&(H.cameras.length=0,It=!0);for(let Nt=0;Nt<bt.length;Nt++){let oe=bt[Nt],he=null;if(f!==null)he=f.getViewport(oe);else{let De=d.getViewSubImage(u,oe);he=De.viewport,Nt===0&&(t.setRenderTargetTextures(b,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(b))}let Zt=U[Nt];Zt===void 0&&(Zt=new ri,Zt.layers.enable(Nt),Zt.viewport=new be,U[Nt]=Zt),Zt.matrix.fromArray(oe.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(oe.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(he.x,he.y,he.width,he.height),Nt===0&&(H.matrix.copy(Zt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),It===!0&&H.cameras.push(Zt)}let xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Nt=d.getDepthInformation(bt[0]);Nt&&Nt.isValid&&Nt.texture&&p.init(Nt,n.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Nt=0;Nt<bt.length;Nt++){let oe=bt[Nt].camera;if(oe){let he=g[oe];he||(he=new Hr,g[oe]=he);let Zt=d.getCameraImage(oe);he.sourceTexture=Zt}}}}for(let bt=0;bt<E.length;bt++){let It=T[bt],xt=E[bt];It!==null&&xt!==void 0&&xt.update(It,gt,c||a)}et&&et(J,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),m=null}let kt=new Kd;kt.setAnimationLoop(St),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}},av=new ie,af=new Ht;af.set(-1,0,0,0,1,0,0,0,1);function ov(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,lh(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,v,w,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,w):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ne&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ne&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),w=v.envMap,b=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(af),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=w*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ne&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function lv(r,t,e,i){let n={},s={};function a(v,w){let b=w.program;i.uniformBlockBinding(v,b,n[v.id])}function o(v,w){let b=n[v.id];b===void 0&&(m(v),b=l(v),n[v.id]=b,v.addEventListener("dispose",p));let E=w.program;i.updateUBOMapping(v,E);let T=t.render.frame;s[v.id]!==T&&(c(v),s[v.id]=T)}function l(v){let w=r.createBuffer(),b=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,b,E),r.bindBuffer(r.UNIFORM_BUFFER,null),w}function c(v){let w=n[v.id],b=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let T=0,_=b.length;T<_;T++){let M=b[T];if(Array.isArray(M))for(let D=0,C=M.length;D<C;D++)h(M[D],T,D,E);else h(M,T,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,w,b,E){if(u(v,w,b,E)===!0){let T=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let D=0;D<_.length;D++){let C=_[D],N=x(C,!0);d(C,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,v.__data)}}function d(v,w,b){typeof v=="number"||typeof v=="boolean"?w[b]=v:v.isMatrix3?(w[b]=v.elements[0],w[b+1]=v.elements[1],w[b+2]=v.elements[2],w[b+3]=0,w[b+4]=v.elements[3],w[b+5]=v.elements[4],w[b+6]=v.elements[5],w[b+7]=0,w[b+8]=v.elements[6],w[b+9]=v.elements[7],w[b+10]=v.elements[8],w[b+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-b),b):v.toArray(w,b)}function u(v,w,b,E){let T=v.value,_=w+"_"+b;if(Array.isArray(T)){E[_]===void 0&&(E[_]=[]);let M=E[_],D=!1;for(let C=0;C<T.length;C++)f(T[C],M,C)===!0&&(D=!0);return D}return f(T,E,_)}function f(v,w,b){if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{let E=w[b];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function m(v){let w=v.uniforms,b=0,E=16;for(let _=0,M=w.length;_<M;_++){let D=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,N=D.length;C<N;C++){let U=D[C],H=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(w[_])||Array.isArray(U.value),V=b;for(let W=0,it=H.length;W<it;W++){let q=H[W],tt=x(q,I),et=b%E,St=et%tt.boundary,kt=et+St;b+=St,kt!==0&&E-kt<tt.storage&&(b+=E-kt),W===0&&(V=b),b+=tt.storage}let X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((b-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let T=b%E;return T>0&&(b+=E-T),v.__size=b,v.__cache={},this}function x(v,w){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(v){let w=v.target;w.removeEventListener("dispose",p),r.deleteBuffer(n[w.id]),delete n[w.id],delete s[w.id]}function g(){for(let v in n)r.deleteBuffer(n[v]);n={},s={}}return{bind:a,update:o,dispose:g}}var cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nn=null;function hv(){return nn===null&&(nn=new Or(cv,16,16,zn,Fe),nn.name="DFG_LUT",nn.minFilter=fi,nn.magFilter=fi,nn.wrapS=Zi,nn.wrapT=Zi,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}var Ol=class{constructor(t={}){let{canvas:e=xd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=bi}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let x=f,p=new Set([sl,nl,il]),g=new Set([bi,Xi,er,hs,Qo,tl]),v=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},E=null,T=null,_=[],M=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,U=null,H=null,I=null,V=null;this._outputColorSpace=Ke;let X=0,W=0,it=null,q=-1,tt=null,et=new be,St=new be,kt=null,J=new Rt(0),gt=0,bt=e.width,It=e.height,xt=1,Vt=null,Se=null,Nt=new be(0,0,bt,It),oe=new be(0,0,bt,It),he=!1,Zt=new Dn,De=new Mo,Ae=!1,je=!1,Pt=new ie,Qe=new L,Re=new be,ti={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Me(){return it===null?xt:1}let F=i;function qe(S,k){return e.getContext(S,k)}let _e,ye,mt,ke,Ut,Wt,A,y,z,nt,Q,at,dt,K,Z,lt,P,j,Y,ct,rt,ot,Ct;try{let S={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),F===null){let k="webgl2";if(F=qe(k,S),F===null)throw qe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(S){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Bt("WebGLRenderer: "+S.message),S}function Yt(){_e=new bg(F),_e.init(),rt=new nv(F,_e),ye=new hg(F,_e,t,rt),mt=new ev(F,_e),ye.reversedDepthBuffer&&u&&mt.buffers.depth.setReversed(!0),H=F.createFramebuffer(),I=F.createFramebuffer(),V=F.createFramebuffer(),ke=new wg(F),Ut=new Gx,Wt=new iv(F,_e,mt,Ut,ye,rt,ke),A=new yg(C),y=new Ep(F),ot=new lg(F,y),z=new Sg(F,y,ke,ot),nt=new Eg(F,z,y,ot,ke),j=new Tg(F,ye,Wt),Z=new ug(Ut),Q=new zx(C,A,_e,ye,ot,Z),at=new ov(C,Ut),dt=new Vx,K=new Kx(_e),P=new og(C,A,mt,nt,m,l),lt=new tv(C,nt,ye),Ct=new lv(F,ke,ye,mt),Y=new cg(F,_e,ke),ct=new Mg(F,_e,ke),ke.programs=Q.programs,C.capabilities=ye,C.extensions=_e,C.properties=Ut,C.renderLists=dt,C.shadowMap=lt,C.state=mt,C.info=ke}x!==bi&&(D=new Rg(x,e.width,e.height,o,n,s));let st=new Eh(C,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(S){S!==void 0&&(xt=S,this.setSize(bt,It,!1))},this.getSize=function(S){return S.set(bt,It)},this.setSize=function(S,k,$=!0){if(st.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=S,It=k,e.width=Math.floor(S*xt),e.height=Math.floor(k*xt),$===!0&&(e.style.width=S+"px",e.style.height=k+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(bt*xt,It*xt).floor()},this.setDrawingBufferSize=function(S,k,$){bt=S,It=k,xt=$,e.width=Math.floor(S*$),e.height=Math.floor(k*$),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(x===bi){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(Nt)},this.setViewport=function(S,k,$,B){S.isVector4?Nt.set(S.x,S.y,S.z,S.w):Nt.set(S,k,$,B),mt.viewport(et.copy(Nt).multiplyScalar(Me()).round())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,k,$,B){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,k,$,B),mt.scissor(St.copy(oe).multiplyScalar(Me()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){mt.setScissorTest(he=S)},this.setOpaqueSort=function(S){Vt=S},this.setTransparentSort=function(S){Se=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,$=!0){let B=0;if(S){let G=!1;if(it!==null){let ft=it.texture.format;G=p.has(ft)}if(G){let ft=it.texture.type,Mt=g.has(ft),ht=P.getClearColor(),yt=P.getClearAlpha(),At=ht.r,$t=ht.g,te=ht.b;Mt?(v[0]=At,v[1]=$t,v[2]=te,v[3]=yt,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=At,w[1]=$t,w[2]=te,w[3]=yt,F.clearBufferiv(F.COLOR,0,w))}else B|=F.COLOR_BUFFER_BIT}k&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),P.dispose(),dt.dispose(),K.dispose(),Wt.dispose(),Ut.dispose(),A.dispose(),nt.dispose(),z.dispose(),ot.dispose(),Ct.dispose(),Q.dispose(),st.dispose(),st.removeEventListener("sessionstart",Wh),st.removeEventListener("sessionend",$h),Wn.stop()};function Lt(S){S.preventDefault(),Lr("WebGLRenderer: Context Lost."),N=!0}function qt(){Lr("WebGLRenderer: Context Restored."),N=!1;let S=ke.autoReset,k=lt.enabled,$=lt.autoUpdate,B=lt.needsUpdate,G=lt.type;Yt(),ke.autoReset=S,lt.enabled=k,lt.autoUpdate=$,lt.needsUpdate=B,lt.type=G}function vt(S){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ue(S){let k=S.target;k.removeEventListener("dispose",ue),Ge(k)}function Ge(S){En(S),Ut.remove(S)}function En(S){let k=Ut.get(S).programs;k!==void 0&&(k.forEach(function($){Q.releaseProgram($)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,$,B,G,ft){k===null&&(k=ti);let Mt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ht=Af(S,k,$,B,G);mt.setMaterial(B,Mt);let yt=$.index,At=1;if(B.wireframe===!0){if(yt=z.getWireframeAttribute($),yt===void 0)return;At=2}let $t=$.drawRange,te=$.attributes.position,Tt=$t.start*At,ee=($t.start+$t.count)*At;ft!==null&&(Tt=Math.max(Tt,ft.start*At),ee=Math.min(ee,(ft.start+ft.count)*At)),yt!==null?(Tt=Math.max(Tt,0),ee=Math.min(ee,yt.count)):te!=null&&(Tt=Math.max(Tt,0),ee=Math.min(ee,te.count));let Ie=ee-Tt;if(Ie<0||Ie===1/0)return;ot.setup(G,B,ht,$,yt);let ge,fe=Y;if(yt!==null&&(ge=y.get(yt),fe=ct,fe.setIndex(ge)),G.isMesh)B.wireframe===!0?(mt.setLineWidth(B.wireframeLinewidth*Me()),fe.setMode(F.LINES)):fe.setMode(F.TRIANGLES);else if(G.isLine){let ei=B.linewidth;ei===void 0&&(ei=1),mt.setLineWidth(ei*Me()),G.isLineSegments?fe.setMode(F.LINES):G.isLineLoop?fe.setMode(F.LINE_LOOP):fe.setMode(F.LINE_STRIP)}else G.isPoints?fe.setMode(F.POINTS):G.isSprite&&fe.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))fe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ei=G._multiDrawStarts,Et=G._multiDrawCounts,ui=G._multiDrawCount,le=yt?y.get(yt).bytesPerElement:1,$n=Ut.get(B).currentProgram.getUniforms();for(let ii=0;ii<ui;ii++)$n.setValue(F,"_gl_DrawID",ii),fe.render(ei[ii]/le,Et[ii])}else if(G.isInstancedMesh)fe.renderInstances(Tt,Ie,G.count);else if($.isInstancedBufferGeometry){let ei=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Et=Math.min($.instanceCount,ei);fe.renderInstances(Tt,Ie,Et)}else fe.render(Tt,Ie)};function Vh(S,k,$,B){U!==null&&S.isNodeMaterial&&U.setObject(B,S),Ae===!0&&Z.setState(S,$,!1),S.transparent===!0&&S.side===mi&&S.forceSinglePass===!1?(S.side=Ne,S.needsUpdate=!0,pr(S,k,B),S.side=Bn,S.needsUpdate=!0,pr(S,k,B),S.side=mi):pr(S,k,B)}this.compile=function(S,k,$=null){$===null&&($=S),U!==null&&U.renderStart(S,k,$),T=K.get($),T.init(k),M.push(T),$.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),S!==$&&S.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),je=this.localClippingEnabled,Ae=Z.init(this.clippingPlanes,je),Ae===!0&&Z.setGlobalState(this.clippingPlanes,k),U!==null&&lt.render(T.state.shadowsArray,$,k);let B=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ft=G.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){let ht=ft[Mt];Vh(ht,$,k,G),B.add(ht)}else Vh(ft,$,k,G),B.add(ft)}),T=M.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(S,k,$=null){let B=this.compile(S,k,$);return new Promise(G=>{function ft(){if(B.forEach(function(Mt){let yt=Ut.get(Mt).currentProgram;(yt===void 0||yt.isReady())&&B.delete(Mt)}),B.size===0){G(S);return}setTimeout(ft,10)}_e.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let rc=null;function Tf(S){rc&&rc(S)}function Wh(){Wn.stop()}function $h(){Wn.start()}let Wn=new Kd;Wn.setAnimationLoop(Tf),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(S){rc=S,st.setAnimationLoop(S),S===null?Wn.stop():Wn.start()},st.addEventListener("sessionstart",Wh),st.addEventListener("sessionend",$h),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(S,k);let $=st.enabled===!0&&st.isPresenting===!0,B=D!==null&&(it===null||$)&&D.begin(C,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(k),k=st.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,k,it),T=K.get(S,M.length),T.init(k),T.state.textureUnits=Wt.getTextureUnits(),M.push(T),Pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?De.setFromArrayCamera(k):Zt.setFromProjectionMatrix(Pt,Ii,k.reversedDepth),je=this.localClippingEnabled,Ae=Z.init(this.clippingPlanes,je),E=dt.get(S,_.length),E.init(),_.push(E),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Mt=C.xr.getDepthSensingMesh();Mt!==null&&ac(Mt,k,-1/0,C.sortObjects)}ac(S,k,0,C.sortObjects),E.finish(),U!==null&&U.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(Vt,Se),Ft=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ft&&P.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Z.beginShadows();let G=T.state.shadowsArray;if(lt.render(G,S,k),Ae===!0&&Z.endShadows(),(B&&D.hasRenderPass())===!1){let Mt=E.opaque,ht=E.transmissive;if(T.setupLights(),k.isArrayCamera){let yt=k.cameras;if(ht.length>0)for(let At=0,$t=yt.length;At<$t;At++){let te=yt[At];qh(Mt,ht,S,te)}Ft&&P.render(S);for(let At=0,$t=yt.length;At<$t;At++){let te=yt[At];Xh(E,S,te,te.viewport)}}else ht.length>0&&qh(Mt,ht,S,k),Ft&&P.render(S),Xh(E,S,k)}it!==null&&W===0&&(Wt.updateMultisampleRenderTarget(it),Wt.updateRenderTargetMipmap(it)),B&&D.end(C),S.isScene===!0&&S.onAfterRender(C,S,k),ot.resetDefaultState(),q=-1,tt=null,M.pop(),M.length>0?(T=M[M.length-1],Wt.setTextureUnits(T.state.textureUnits),Ae===!0&&Z.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,U!==null&&U.renderEnd()};function ac(S,k,$,B){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){let Mt=k.isArrayCamera?De:Zt;if(!S.frustumCulled||S.intersectsFrustum(Mt)){B&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);let ht=nt.update(S),yt=S.material;yt.visible&&E.push(S,ht,yt,$,Re.z,null,k)}}else if(S.isMesh||S.isLine||S.isPoints){let Mt=k.isArrayCamera?De:Zt;if(!S.frustumCulled||S.intersectsFrustum(Mt)){let ht=nt.update(S),yt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Re.copy(ht.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(yt)){let At=ht.groups;for(let $t=0,te=At.length;$t<te;$t++){let Tt=At[$t],ee=yt[Tt.materialIndex];ee&&ee.visible&&E.push(S,ht,ee,$,Re.z,Tt,k)}}else yt.visible&&E.push(S,ht,yt,$,Re.z,null,k)}}}let ft=S.children;for(let Mt=0,ht=ft.length;Mt<ht;Mt++)ac(ft[Mt],k,$,B)}function Xh(S,k,$,B){let{opaque:G,transmissive:ft,transparent:Mt}=S;T.setupLightsView($),Ae===!0&&Z.setGlobalState(C.clippingPlanes,$),B&&mt.viewport(et.copy(B)),G.length>0&&Ia(G,k,$),ft.length>0&&Ia(ft,k,$),Mt.length>0&&Ia(Mt,k,$),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function qh(S,k,$,B){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Tt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new Ce(1,1,{generateMipmaps:!0,type:Tt?Fe:bi,minFilter:_n,samples:Math.max(4,ye.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let ft=T.state.transmissionRenderTarget[B.id],Mt=B.viewport||et;ft.setSize(Mt.z*C.transmissionResolutionScale,Mt.w*C.transmissionResolutionScale);let ht=C.getRenderTarget(),yt=C.getActiveCubeFace(),At=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(J),gt=C.getClearAlpha(),gt<1&&C.setClearColor(16777215,.5),C.clear(),Ft&&P.render($);let $t=C.toneMapping;C.toneMapping=en;let te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),Ae===!0&&Z.setGlobalState(C.clippingPlanes,B),Ia(S,$,B),Wt.updateMultisampleRenderTarget(ft),Wt.updateRenderTargetMipmap(ft),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ee=0,Ie=k.length;ee<Ie;ee++){let ge=k[ee],{object:fe,geometry:ei,material:Et,group:ui}=ge;if(Et.side===mi&&fe.layers.test(B.layers)){let le=Et.side;Et.side=Ne,Et.needsUpdate=!0,Yh(fe,$,B,ei,Et,ui),Et.side=le,Et.needsUpdate=!0,Tt=!0}}Tt===!0&&(Wt.updateMultisampleRenderTarget(ft),Wt.updateRenderTargetMipmap(ft))}C.setRenderTarget(ht,yt,At),C.setClearColor(J,gt),te!==void 0&&(B.viewport=te),C.toneMapping=$t}function Ia(S,k,$){let B=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ft=S.length;G<ft;G++){let Mt=S[G],{object:ht,geometry:yt,group:At}=Mt,$t=Mt.material;$t.allowOverride===!0&&B!==null&&($t=B),ht.layers.test($.layers)&&Yh(ht,k,$,yt,$t,At)}}function Yh(S,k,$,B,G,ft){U!==null&&G.isNodeMaterial&&U.setObject(S,G),S.onBeforeRender(C,k,$,B,G,ft),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,k,$,B,S,ft),G.transparent===!0&&G.side===mi&&G.forceSinglePass===!1?(G.side=Ne,G.needsUpdate=!0,C.renderBufferDirect($,k,B,G,S,ft),G.side=Bn,G.needsUpdate=!0,C.renderBufferDirect($,k,B,G,S,ft),G.side=mi):C.renderBufferDirect($,k,B,G,S,ft),S.onAfterRender(C,k,$,B,G,ft)}function Kh(S){let k=0;for(let $ of S)$.texture!==null&&k++;return k}function pr(S,k,$){k.isScene!==!0&&(k=ti);let B=Ut.get(S),G=T.state.lights,ft=T.state.shadowsArray,Mt=G.state.version,ht=Q.getParameters(S,G.state,ft,k,$,T.state.lightProbeGridArray),yt=Q.getProgramCacheKey(ht),At=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,B.fog=k.fog;let $t=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=A.get(S.envMap||B.environment,$t),B.envMapRotation=B.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",ue),At=new Map,B.programs=At,B.programVariants=new Map);let te=At.get(yt);if(te!==void 0){if(B.currentProgram===te&&B.lightsStateVersion===Mt)return Zh(S,ht),te}else ht.uniforms=Q.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,$,ht),S.onBeforeCompile(ht,C),te=Q.acquireProgram(ht,yt),At.set(yt,te),B.uniforms=ht.uniforms;let Tt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=Z.uniform),Zh(S,ht),B.needsLights=Cf(S),B.lightsStateVersion=Mt,B.needsLights&&(Tt.ambientLightColor.value=G.state.ambient,Tt.lightProbe.value=G.state.probe,Tt.sunLights.value=G.state.sun,Tt.sunLightShadows.value=G.state.sunShadow,Tt.directionalLights.value=G.state.directional,Tt.directionalLightShadows.value=G.state.directionalShadow,Tt.spotLights.value=G.state.spot,Tt.spotLightShadows.value=G.state.spotShadow,Tt.rectAreaLights.value=G.state.rectArea,Tt.ltc_1.value=G.state.rectAreaLTC1,Tt.ltc_2.value=G.state.rectAreaLTC2,Tt.pointLights.value=G.state.point,Tt.pointLightShadows.value=G.state.pointShadow,Tt.hemisphereLights.value=G.state.hemi,Tt.sunShadowMatrix.value=G.state.sunShadowMatrix,Tt.sunShadowCascade.value=G.state.sunShadowCascade,Tt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Tt.spotLightMatrix.value=G.state.spotLightMatrix,Tt.spotLightMap.value=G.state.spotLightMap,Tt.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=Kh(T.state.lightProbeGridArray),B.currentProgram=te,B.uniformsList=null,te}function Ef(S,k,$,B,G){let ft=Ut.get(S),Mt=ft.currentProgram.id+","+B+","+G,ht=ft.programVariants.get(Mt);return ht===void 0?(ht=pr(S,k,$),ft.programVariants.set(Mt,ht)):(ft.currentProgram=ht,ft.uniformsList=null,ft.outputColorSpace=B,ft.toneMapping=G),ht}function Jh(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=ir.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Zh(S,k){let $=Ut.get(S);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Af(S,k,$,B,G){k.isScene!==!0&&(k=ti),Wt.resetTextureUnits();let ft=k.fog,Mt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?k.environment:null,ht=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:jt.workingColorSpace,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,At=A.get(B.envMap||Mt,yt),$t=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,te=!!$.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!$.morphAttributes.position,ee=!!$.morphAttributes.normal,Ie=!!$.morphAttributes.color,ge=en;B.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ge=C.toneMapping);let fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ei=fe!==void 0?fe.length:0,Et=Ut.get(B),ui=T.state.lights;if(Ae===!0&&(je===!0||S!==tt)){let we=S===tt&&B.id===q;Z.setState(B,S,we)}let le=!1,$n=!1;B.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==ui.state.version||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==At||B.fog===!0&&Et.fog!==ft||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Z.numPlanes||Et.numIntersection!==Z.numIntersection)||Et.vertexAlphas!==$t||Et.vertexTangents!==te||Et.morphTargets!==Tt||Et.morphNormals!==ee||Et.morphColors!==Ie||Et.morphTargetsCount!==ei||Et.numLightProbeGrids!==Kh(T.state.lightProbeGridArray)?le=!0:(Et.outputColorSpace!==ht||Et.toneMapping!==ge)&&($n=!0):(le=!0,Et.__version=B.version);let ii=Et.currentProgram;(le===!0||$n===!0)&&(ii=$n===!0?Ef(B,k,G,ht,ge):pr(B,k,G),U&&B.isNodeMaterial&&U.onUpdateProgram(B,ii,Et));let La=!1,An=!1,Xn=!1,se=ii.getUniforms(),Ye=Et.uniforms;if(mt.useProgram(ii.program)&&(La=!0,An=!0,Xn=!0),B.id!==q&&(q=B.id,An=!0),La||tt!==S){mt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),se.setValue(F,"projectionMatrix",S.projectionMatrix),se.setValue(F,"viewMatrix",S.matrixWorldInverse);let He=se.map.cameraPosition;He!==void 0&&He.setValue(F,Qe.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&se.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&se.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,An=!0,Xn=!0)}if(Et.needsLights&&(ui.state.sunShadowMap.length>0&&se.setValue(F,"sunShadowMap",ui.state.sunShadowMap,Wt),ui.state.directionalShadowMap.length>0&&se.setValue(F,"directionalShadowMap",ui.state.directionalShadowMap,Wt),ui.state.spotShadowMap.length>0&&se.setValue(F,"spotShadowMap",ui.state.spotShadowMap,Wt),ui.state.pointShadowMap.length>0&&se.setValue(F,"pointShadowMap",ui.state.pointShadowMap,Wt)),G.isSkinnedMesh){se.setOptional(F,G,"bindMatrix"),se.setOptional(F,G,"bindMatrixInverse");let we=G.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),se.setValue(F,"boneTexture",we.boneTexture,Wt))}G.isBatchedMesh&&(se.setOptional(F,G,"batchingTexture"),se.setValue(F,"batchingTexture",G._matricesTexture,Wt),se.setOptional(F,G,"batchingIdTexture"),se.setValue(F,"batchingIdTexture",G._indirectTexture,Wt),se.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&se.setValue(F,"batchingColorTexture",G._colorsTexture,Wt));let zi=$.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&j.update(G,$,ii),(An||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,se.setValue(F,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&k.environment!==null&&(Ye.envMapIntensity.value=k.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=hv()),An){if(se.setValue(F,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&Rf(Ye,Xn),ft&&B.fog===!0&&at.refreshFogUniforms(Ye,ft),at.refreshMaterialUniforms(Ye,B,xt,It,T.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.numLightProbeGrids>0){let we=b,He=0;for(let an of T.state.lightProbeGridArray)an.texture!==null&&(we.textures[He]=an.texture,we.min[He]=an.boundingBox.min,we.max[He]=an.boundingBox.max,we.resolution[He]=an.resolution,He++);for(let an in we)we[an].length=He;Ye.probesSH.value=we.textures,Ye.probesMin.value=we.min,Ye.probesMax.value=we.max,Ye.probesResolution.value=we.resolution}ir.upload(F,Jh(Et),Ye,Wt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ir.upload(F,Jh(Et),Ye,Wt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&se.setValue(F,"center",G.center),se.setValue(F,"modelViewMatrix",G.modelViewMatrix),se.setValue(F,"normalMatrix",G.normalMatrix),se.setValue(F,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){let we=B.uniformsGroups;for(let He=0,an=we.length;He<an;He++){let Qh=we[He];Ct.update(Qh,ii),Ct.bind(Qh,ii)}}return ii}function Rf(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Cf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,k,$){let B=Ut.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ut.get(S.texture).__webglTexture=k,Ut.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:$,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let $=Ut.get(S);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,$=0){it=S,X=k,W=$;let B=null,G=!1,ft=!1;if(S){let ht=Ut.get(S);if(ht.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(F.FRAMEBUFFER,ht.__webglFramebuffer),et.copy(S.viewport),St.copy(S.scissor),kt=S.scissorTest,mt.viewport(et),mt.scissor(St),mt.setScissorTest(kt),q=-1;return}else if(ht.__webglFramebuffer===void 0)Wt.setupRenderTarget(S);else if(ht.__hasExternalTextures)Wt.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let $t=S.depthTexture;if(ht.__boundDepthTexture!==$t){if($t!==null&&Ut.has($t)&&(S.width!==$t.image.width||S.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(S)}}let yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ft=!0);let At=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[k])?B=At[k][$]:B=At[k],G=!0):S.samples>0&&Wt.useMultisampledRTT(S)===!1?B=Ut.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?B=At[$]:B=At,et.copy(S.viewport),St.copy(S.scissor),kt=S.scissorTest}else et.copy(Nt).multiplyScalar(xt).floor(),St.copy(oe).multiplyScalar(xt).floor(),kt=he;if($!==0&&(B=H),mt.bindFramebuffer(F.FRAMEBUFFER,B)&&mt.drawBuffers(S,B),mt.viewport(et),mt.scissor(St),mt.setScissorTest(kt),G){let ht=Ut.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,ht.__webglTexture,$)}else if(ft){let ht=k;for(let yt=0;yt<S.textures.length;yt++){let At=Ut.get(S.textures[yt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,At.__webglTexture,$,ht)}}else if(S!==null&&$!==0){let ht=Ut.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ht.__webglTexture,$)}q=-1};function jh(S){let k=Ut.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=ye.textureFormatReadable(S.format),k.__typeReadable=ye.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,$,B,G,ft,Mt,ht=0){if(!(S&&S.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(yt=yt[Mt],Array.isArray(yt)&&(yt=yt[0])),yt){mt.bindFramebuffer(F.FRAMEBUFFER,yt);try{let At=S.textures[ht],$t=At.format,te=At.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ht);let Tt=jh(At);if(Tt.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-B&&$>=0&&$<=S.height-G&&F.readPixels(k,$,B,G,rt.convert($t),rt.convert(te),ft)}finally{let At=it!==null?Ut.get(it).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,k,$,B,G,ft,Mt,ht=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(yt=yt[Mt],Array.isArray(yt)&&(yt=yt[0])),yt)if(k>=0&&k<=S.width-B&&$>=0&&$<=S.height-G){mt.bindFramebuffer(F.FRAMEBUFFER,yt);let At=S.textures[ht],$t=At.format,te=At.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ht);let Tt=jh(At);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,ft.byteLength,F.STREAM_READ),F.readPixels(k,$,B,G,rt.convert($t),rt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ie=it!==null?Ut.get(it).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,Ie);let ge=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await _d(F,ge,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ft),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(ge),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,$=0){let B=Math.pow(2,-$),G=Math.floor(S.image.width*B),ft=Math.floor(S.image.height*B),Mt=k!==null?k.x:0,ht=k!==null?k.y:0;Wt.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Mt,ht,G,ft),mt.unbindTexture()},this.copyTextureToTexture=function(S,k,$=null,B=null,G=0,ft=0){let Mt,ht,yt,At,$t,te,Tt,ee,Ie,ge=S.isCompressedTexture?S.mipmaps[ft]:S.image;if($!==null)Mt=$.max.x-$.min.x,ht=$.max.y-$.min.y,yt=$.isBox3?$.max.z-$.min.z:1,At=$.min.x,$t=$.min.y,te=$.isBox3?$.min.z:0;else{let se=Math.pow(2,-G);Mt=Math.floor(ge.width*se),ht=Math.floor(ge.height*se),S.isDataArrayTexture?yt=ge.depth:S.isData3DTexture?yt=Math.floor(ge.depth*se):yt=1,At=0,$t=0,te=0}B!==null?(Tt=B.x,ee=B.y,Ie=B.z):(Tt=0,ee=0,Ie=0);let fe=rt.convert(k.format),ei=rt.convert(k.type),Et;k.isData3DTexture?(Wt.setTexture3D(k,0),Et=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Wt.setTexture2DArray(k,0),Et=F.TEXTURE_2D_ARRAY):(Wt.setTexture2D(k,0),Et=F.TEXTURE_2D),mt.activeTexture(F.TEXTURE0),mt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),mt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),mt.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let ui=mt.getParameter(F.UNPACK_ROW_LENGTH),le=mt.getParameter(F.UNPACK_IMAGE_HEIGHT),$n=mt.getParameter(F.UNPACK_SKIP_PIXELS),ii=mt.getParameter(F.UNPACK_SKIP_ROWS),La=mt.getParameter(F.UNPACK_SKIP_IMAGES);mt.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,At),mt.pixelStorei(F.UNPACK_SKIP_ROWS,$t),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let An=S.isDataArrayTexture||S.isData3DTexture,Xn=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let se=Ut.get(S),Ye=Ut.get(k),zi=Ut.get(se.__renderTarget),we=Ut.get(Ye.__renderTarget);mt.bindFramebuffer(F.READ_FRAMEBUFFER,zi.__webglFramebuffer),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let He=0;He<yt;He++)An&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(S).__webglTexture,G,te+He),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(k).__webglTexture,ft,Ie+He)),F.blitFramebuffer(At,$t,At+Mt,$t+ht,Tt,ee,Tt+Mt,ee+ht,F.DEPTH_BUFFER_BIT,F.NEAREST);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Ut.has(S)){let se=Ut.get(S),Ye=Ut.get(k);mt.bindFramebuffer(F.READ_FRAMEBUFFER,I),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let zi=0;zi<yt;zi++)An?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,se.__webglTexture,G,te+zi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,se.__webglTexture,G),Xn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,ft,Ie+zi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,ft),G!==0?F.blitFramebuffer(At,$t,At+Mt,$t+ht,Tt,ee,Tt+Mt,ee+ht,F.COLOR_BUFFER_BIT,F.NEAREST):Xn?F.copyTexSubImage3D(Et,ft,Tt,ee,Ie+zi,At,$t,Mt,ht):F.copyTexSubImage2D(Et,ft,Tt,ee,At,$t,Mt,ht);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Xn?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Et,ft,Tt,ee,Ie,Mt,ht,yt,fe,ei,ge.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,ft,Tt,ee,Ie,Mt,ht,yt,fe,ge.data):F.texSubImage3D(Et,ft,Tt,ee,Ie,Mt,ht,yt,fe,ei,ge):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ft,Tt,ee,Mt,ht,fe,ei,ge.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ft,Tt,ee,ge.width,ge.height,fe,ge.data):F.texSubImage2D(F.TEXTURE_2D,ft,Tt,ee,Mt,ht,fe,ei,ge);mt.pixelStorei(F.UNPACK_ROW_LENGTH,ui),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,$n),mt.pixelStorei(F.UNPACK_SKIP_ROWS,ii),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,La),ft===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&F.generateMipmap(Et),mt.unbindTexture()},this.initRenderTarget=function(S){Ut.get(S).__webglFramebuffer===void 0&&Wt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){X=0,W=0,it=null,mt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ri=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uv=new rs(-1,1,1,-1,0,1),Ah=class extends ce{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},dv=new Ah,Gn=class{constructor(t){this._mesh=new Ot(dv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,uv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hl=class extends Ri{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Sn.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Gn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ya=class extends Ri{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Vl=class extends Ri{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Wl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new pt);this._width=i.width,this._height=i.height,e=new Ce(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hl(rr),this.copyPass.material.blending=vn,this.timer=new ta}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ya!==void 0&&(a instanceof ya?i=!0:a instanceof Vl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $l=class extends Ri{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Rt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var of={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ar=class r extends Ri{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ce(s,a,{type:Fe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ce(s,a,{type:Fe,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ce(s,a,{type:Fe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}let o=of;this.highPassUniforms=Sn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Sn.clone(rr.uniforms),this.blendMaterial=new $e({uniforms:this.copyUniforms,vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader,premultipliedAlpha:!0,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new Ee,this._fsQuad=new Gn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new pt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],s=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),s.push(c)}return new $e({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new $e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ar.BlurDirectionX=new pt(1,0);ar.BlurDirectionY=new pt(0,1);var ba={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Xl=class extends Ri{constructor(){super(),this.isOutputPass=!0,this.uniforms=Sn.clone(ba.uniforms),this.material=new Ks({name:ba.name,uniforms:this.uniforms,vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader}),this._fsQuad=new Gn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ia?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===na?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ra&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Mn="ff:ff:ff:ff:ff:ff";var pe=r=>typeof r=="string"&&/^\d{1,3}(\.\d{1,3}){3}$/.test(r)&&r.split(".").every(t=>+t<=255),oi=r=>r.split(".").reduce((t,e)=>(t<<8|+e)>>>0,0)>>>0,or=r=>[r>>>24&255,r>>>16&255,r>>>8&255,r&255].join("."),Xe=r=>{if(!pe(r))return!1;let t=oi(r);if(!t)return!1;let e=~t>>>0;return(e+1&e)===0},li=r=>{let t=oi(r),e=0;for(;t;)e+=t&1,t>>>=1;return e},gi=(r,t,e)=>pe(r)&&pe(t)&&pe(e)&&(oi(r)&oi(e))>>>0===(oi(t)&oi(e))>>>0,lr=(r,t)=>or((oi(r)&oi(t))>>>0),fv=(r,t)=>or((oi(r)&oi(t)|~oi(t))>>>0),cr=r=>r.replace(/:/g,"").replace(/(.{4})(.{4})(.{4})/,"$1.$2.$3"),ci=r=>r.replace(/^Fa(?=\d)/,"FastEthernet").replace(/^Gi(?=\d)/,"GigabitEthernet").replace(/^Lo(?=\d)/,"Loopback"),Rh=r=>{let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0},ql=r=>r.type!=="switch"&&r.type!=="walljack";function fs(r){if(r.type==="ARP"){let n=r.arp;return n.op===1?{proto:"ARP",src:r.src,dst:"Broadcast",info:n.spa===n.tpa?`Gratuitous ARP for ${n.spa}`:`Who has ${n.tpa}? Tell ${n.spa}`}:{proto:"ARP",src:r.src,dst:r.dst,info:`${n.spa} is at ${n.sha}`}}let t=r.ip,e=t.proto,i="";if(t.proto==="ICMP"){let n=t.icmp;i=n.type==="echo-request"?`Echo (ping) request  id=${n.id} seq=${n.seq} ttl=${t.ttl}`:n.type==="echo-reply"?`Echo (ping) reply    id=${n.id} seq=${n.seq} ttl=${t.ttl}`:n.type==="ttl-exceeded"?"Time-to-live exceeded (TTL habis saat transit)":n.code===3?"Destination unreachable (Port unreachable)":"Destination unreachable (Host unreachable)"}else if(t.dhcp){e="DHCP";let n=t.dhcp;i=`DHCP ${n.op[0]+n.op.slice(1).toLowerCase()}  xid=0x${n.xid.toString(16)}`+(n.yiaddr?`  ip=${n.yiaddr}`:"")+(n.giaddr?`  relay=${n.giaddr}`:"")}else if(t.dns){e="DNS";let n=t.dns;i=n.qr?`Standard query response A ${n.q} ${n.a?"→ "+n.a:"NXDOMAIN (No such name)"}`:`Standard query A ${n.q}`}else i=`${t.udp.sport} → ${t.udp.dport}`;return{proto:e,src:t.src,dst:t.dst,info:i}}var Yl=class{constructor(t){this.t=0,this.q=[],this.uid=1,this.speed=1,this.devices=t.devices,this.cables=t.cables,this.byId=new Map,this.capture=[],this.capN=0,this.logs=[],this.on={transit:null,change:null,log:null,link:null};for(let e of this.devices)this.initDev(e);this.refreshLinks(!0);for(let e of this.devices)e.monitor&&this.at(3+Math.random(),()=>this.monitorTick(e,0))}initDev(t){this.byId.set(t.id,t),t.arp=new Map,t.mac=new Map,t.pend=new Map,t.wait=new Map,t.seen=new Map,t.leases=t.leases||[],t.pingOk=t.pingOk||[],t.traceOk=t.traceOk||[],t.routes=t.routes||[],t.forward=t.type==="router"||t.type==="firewall",t.ttl=t.type==="pc"?128:t.forward?255:64,t.monStat={};for(let e of t.ifaces)e._link=!1,e._dhcp=null}dev(t){return this.byId.get(t)}ifc(t,e){if(!t||!e)return null;let n=String(e).toLowerCase().replace(/\s+/g,"").match(/^([a-z]+)([\d/]*)$/);return n&&t.ifaces.find(s=>{let a=s.name.toLowerCase().match(/^([a-z]+)([\d/]*)$/);return a[2]!==n[2]?!1:({fa:"fastethernet",gi:"gigabitethernet",eth:"ethernet",front:"front",back:"back"}[a[1]]||a[1]).startsWith(n[1])||a[1]===n[1]||a[1]==="eth"&&"eth".startsWith(n[1])})||null}at(t,e){let i={t,fn:e,n:this.uid++},n=this.q,s=n.length;for(;s>0&&n[s-1].t>t;)s--;return n.splice(s,0,i),i}update(t){this.t+=t*this.speed;let e=0;for(;this.q.length&&this.q[0].t<=this.t&&e++<4e3;)this.q.shift().fn()}log(t,e){let i={t:this.t,kind:t,text:e};this.logs.push(i),this.logs.length>250&&this.logs.shift(),this.on.log&&this.on.log(i)}drop(t,e,i){let n=e&&e.type?fs(e):null;this.log("drop",`${t.name}: DROP ${n?n.proto+" "+n.src+" → "+n.dst+" — ":""}${i}`),this.on.drop&&this.on.drop(t,e,i)}frame(t,e,i,n){return{uid:this.uid++,src:t,dst:e,type:i,vlan:null,...n}}cableOn(t,e){return this.cables.find(i=>i.a.dev===t&&i.a.port===e||i.b.dev===t&&i.b.port===e)||null}other(t,e,i){return t.a.dev===e&&t.a.port===i?t.b:t.a}path(t,e){let i=[],n={dev:t,port:e},s=null;for(let a=0;a<8;a++){let o=this.cableOn(n.dev,n.port);if(!o)return{segs:i,end:null,fault:s};let l=this.other(o,n.dev,n.port);i.push({cable:o,from:n,to:l}),o.fault&&(s=o.fault);let c=this.dev(l.dev);if(!c)return{segs:i,end:null,fault:s};if(c.type==="walljack"){n={dev:l.dev,port:l.port==="front"?"back":"front"};continue}return{segs:i,end:l,fault:s}}return{segs:i,end:null,fault:s}}computeLink(t,e){if(!e.up)return!1;let i=this.path(t.id,e.name);if(!i.end||i.fault)return!1;let n=this.ifc(this.dev(i.end.dev),i.end.port);return!!(n&&n.up)}refreshLinks(t){for(let e of this.devices)if(e.type!=="walljack")for(let i of e.ifaces){let n=this.computeLink(e,i);n!==i._link&&(i._link=n,this.linkChange(e,i,n,t))}}linkChange(t,e,i,n){if(n||(this.log("link",`${t.name}: %LINK-3-UPDOWN: Interface ${ci(e.name)}, changed state to ${i?"up":"down"}`),this.on.link&&this.on.link(t,e,i)),i)e.dhcp&&this.at(this.t+.5,()=>this.dhcpStart(t,e));else{if(t.type==="switch")for(let[s,a]of t.mac)a.port===e.name&&t.mac.delete(s);else for(let[s,a]of t.arp)a.ifc===e.name&&t.arp.delete(s);e.dhcp&&(e._dhcp=null,e.ip="",e.mask="",t.gateway="",t.dns="")}}cableState(t){let e=d=>{let u=t[d],f=t;for(let m=0;m<8;m++){let x=this.dev(u.dev);if(!x)return null;if(x.type!=="walljack")return u;let p=this.cableOn(u.dev,u.port==="front"?"back":"front");if(!p)return null;u=this.other(p,u.dev,u.port==="front"?"back":"front"),f=p}return null};if(t.fault)return{st:"fault",why:t.fault==="open"?"Kabel rusak — pair 3/6 putus (open)":"Kabel rusak — urutan pin salah (miswire)"};let i=e("a"),n=e("b");if(!i||!n)return{st:"open",why:"Ujung kabel belum tersambung ke perangkat aktif"};let s=this.dev(i.dev),a=this.dev(n.dev),o=this.ifc(s,i.port),l=this.ifc(a,n.port);if(!o||!l)return{st:"open",why:"Port tidak dikenal"};if(!o.up)return{st:"down",why:`${s.name} ${o.name} administratively down (shutdown)`};if(!l.up)return{st:"down",why:`${a.name} ${l.name} administratively down (shutdown)`};if(!o._link)return{st:"down",why:"Tidak ada sinyal link (cek segmen kabel lain di jalur ini)"};let c=/^Fa/.test(o.name)||/^Fa/.test(l.name)?100:1e3,h=`Link Up ${c}Mbps Full-Duplex`;if(s.type==="switch"&&a.type==="switch"){if(o.mode!==l.mode)return{st:"warn",why:`${h} — mode tidak cocok (${o.mode} ↔ ${l.mode})`,spd:c};if(o.mode==="access"&&o.vlan!==l.vlan)return{st:"warn",why:`${h} — VLAN mismatch (${o.vlan} ↔ ${l.vlan})`,spd:c}}return ql(s)&&ql(a)&&o.ip&&l.ip&&Xe(o.mask)&&!gi(o.ip,l.ip,o.mask)?{st:"warn",why:`${h} — subnet tidak sama (${o.ip} ↔ ${l.ip})`,spd:c}:{st:"up",why:h,spd:c}}addCable(t,e,i={}){let n={id:"cab-"+this.uid+++"-"+Math.floor(this.t*10),a:t,b:e,...i};return this.cables.push(n),this.changed(),n}removeCable(t){let e=this.cables.findIndex(i=>i.id===t);return e>=0?(this.cables.splice(e,1),this.changed(),!0):!1}changed(){this.refreshLinks(),this.on.change&&this.on.change()}tx(t,e,i){if(!e._link)return this.drop(t,i,`link ${e.name} down`),!1;let n=this.path(t.id,e.name),s=this.dev(n.end.dev),a=this.ifc(s,n.end.port),o=n.segs.length*.11,l={n:++this.capN,t:this.t,a:t.name,ap:e.name,b:s.name,bp:a.name,f:i};return this.capture.push(l),this.capture.length>500&&this.capture.shift(),this.on.transit&&this.on.transit({frame:i,segs:n.segs,t0:this.t,dur:o,rec:l}),this.at(this.t+o,()=>{a._link&&(s.type==="switch"?this.swRx(s,a,i):this.hostRx(s,a,i))}),!0}swRx(t,e,i){let n;if(e.mode==="trunk"){if(n=i.vlan??(e.native||1),!e.allowed.includes(n))return this.drop(t,i,`VLAN ${n} tidak diizinkan pada trunk ${e.name}`)}else{if(i.vlan!=null&&i.vlan!==e.vlan)return this.drop(t,i,`frame ber-tag VLAN ${i.vlan} masuk ke port access ${e.name} (VLAN ${e.vlan})`);n=e.vlan}if(!t.vlans[n])return this.drop(t,i,`VLAN ${n} belum dibuat di database VLAN`);let s=i.uid+"|"+n;if(t.seen.has(s))return this.drop(t,i,"loop Layer-2 terdeteksi, frame duplikat diblok (STP)");if(t.seen.set(s,this.t),t.seen.size>600){let l=0;for(let c of t.seen.keys())if(t.seen.delete(c),++l>300)break}t.mac.set(n+"|"+i.src,{port:e.name,t:this.t,vlan:n,mac:i.src});let a=i.dst!==Mn?t.mac.get(n+"|"+i.dst):null,o;if(a&&this.t-a.t<300){if(a.port===e.name)return;o=[this.ifc(t,a.port)]}else o=t.ifaces.filter(l=>l!==e);this.at(this.t+.012,()=>{for(let l of o)!l||!l._link||(l.mode==="trunk"?l.allowed.includes(n)&&this.tx(t,l,{...i,vlan:n===(l.native||1)?null:n}):l.vlan===n&&this.tx(t,l,{...i,vlan:null}))})}hostRx(t,e,i){if(i.vlan!=null)return this.drop(t,i,`frame 802.1Q (VLAN ${i.vlan}) tidak dikenali ${t.name} ${e.name}`);if(!(i.dst!==Mn&&i.dst!==e.mac)){if(i.type==="ARP")return this.arpRx(t,e,i.arp);this.ipRx(t,e,i.ip,i)}}arpRx(t,e,i){if(!e.ip)return;let n=i.tpa===e.ip;(n&&i.spa!==e.ip||t.arp.has(i.spa))&&this.learn(t,e,i.spa,i.sha),n&&i.op===1&&i.spa!==e.ip&&this.at(this.t+.012,()=>this.tx(t,e,this.frame(e.mac,i.sha,"ARP",{arp:{op:2,sha:e.mac,spa:e.ip,tha:i.sha,tpa:i.spa}})))}learn(t,e,i,n){t.arp.set(i,{mac:n,ifc:e.name,t:this.t});let s=t.pend.get(i);if(s){t.pend.delete(i);for(let a of s.pkts)this.tx(t,e,this.frame(e.mac,n,"IP",{ip:a.pkt}))}}isMine(t,e,i){return t.ifaces.some(n=>n.ip===e&&(!i||n._link))||(t.loopbacks||[]).some(n=>n.ip===e)}route(t,e){let i=t.ifaces.filter(a=>a.ip&&Xe(a.mask)&&a._link);if(!t.forward){for(let a of i)if(gi(a.ip,e,a.mask))return{ifc:a,nh:e};if(pe(t.gateway)){for(let a of i)if(gi(a.ip,t.gateway,a.mask))return{ifc:a,nh:t.gateway}}return null}let n=null,s=-1;for(let a of i){let o=li(a.mask);o>s&&gi(a.ip,e,a.mask)&&(n={ifc:a,nh:e},s=o)}for(let a of t.routes){let o=a.mask==="0.0.0.0"?0:li(a.mask);if(o<=s||o>0&&!gi(a.net,e,a.mask))continue;let l=i.find(c=>gi(c.ip,a.via,c.mask));l&&(n={ifc:l,nh:a.via},s=o)}return n}send(t,e,i={}){if(e.ttl=e.ttl||t.ttl,e.id=this.uid++,this.isMine(t,e.dst))return e.src=e.src||e.dst,this.at(this.t+.01,()=>this.deliver(t,null,e)),{ok:!0};let n=this.route(t,e.dst);return n?(e.src=e.src||n.ifc.ip,this.l2out(t,n.ifc,n.nh,e,i)):{ok:!1,why:"noroute"}}l2out(t,e,i,n,s){if(!e._link)return{ok:!1,why:"linkdown"};let a=t.arp.get(i);if(a&&this.t-a.t<600)return this.tx(t,e,this.frame(e.mac,a.mac,"IP",{ip:n})),{ok:!0};let o=t.pend.get(i);return o||(o={pkts:[],tries:0},t.pend.set(i,o),this.arpReq(t,e,i,o)),t.forward?this.drop(t,{type:"IP",ip:n},`ARP ${i} belum ter-resolve → paket pertama dibuang (perilaku normal router Cisco)`):o.pkts.length<6&&o.pkts.push({pkt:n,onFail:s.onFail}),{ok:!0,arp:!0}}arpReq(t,e,i,n){n.tries++,this.tx(t,e,this.frame(e.mac,Mn,"ARP",{arp:{op:1,sha:e.mac,spa:e.ip,tha:"00:00:00:00:00:00",tpa:i}})),this.at(this.t+1,()=>{if(t.pend.get(i)===n){if(n.tries<2&&e._link)return this.arpReq(t,e,i,n);t.pend.delete(i);for(let s of n.pkts)s.onFail&&s.onFail("arp")}})}garp(t,e){e._link&&e.ip&&this.tx(t,e,this.frame(e.mac,Mn,"ARP",{arp:{op:1,sha:e.mac,spa:e.ip,tha:"00:00:00:00:00:00",tpa:e.ip}}))}ipRx(t,e,i,n){if(i.dst==="255.255.255.255"||e.ip&&Xe(e.mask)&&i.dst===fv(e.ip,e.mask)||this.isMine(t,i.dst,!0)||i.dhcp&&i.udp.dport===68&&e.dhcp&&i.dhcp.chaddr===e.mac)return this.deliver(t,e,i);if(!t.forward)return;if(i.ttl<=1)return this.drop(t,n,"TTL habis (Time-to-live exceeded)"),this.icmpErr(t,e,i,"ttl-exceeded",0);let a=this.route(t,i.dst);if(!a)return this.drop(t,n,`tidak ada rute ke ${i.dst} di tabel routing`),this.icmpErr(t,e,i,"unreachable",1);let o={...i,ttl:i.ttl-1};this.at(this.t+.012,()=>this.l2out(t,a.ifc,a.nh,o,{}))}icmpErr(t,e,i,n,s){if(i.proto==="ICMP"&&i.icmp.type!=="echo-request")return;let a={dst:i.dst,id:i.icmp&&i.icmp.id,seq:i.icmp&&i.icmp.seq,sport:i.udp&&i.udp.sport,dport:i.udp&&i.udp.dport};this.at(this.t+.012,()=>this.send(t,{src:e&&e.ip,dst:i.src,proto:"ICMP",icmp:{type:n,code:s,orig:a}}))}deliver(t,e,i){if(i.proto==="ICMP"){let a=i.icmp;if(a.type==="echo-request"){let o=this.isMine(t,i.dst)?i.dst:e&&e.ip;this.at(this.t+.012,()=>this.send(t,{src:o,dst:i.src,proto:"ICMP",icmp:{type:"echo-reply",id:a.id,seq:a.seq}}))}else if(a.type==="echo-reply"){let o=t.wait.get("icmp:"+a.id+":"+a.seq);o&&o(i)}else if(a.orig){let o=a.orig.id!=null?t.wait.get("icmp:"+a.orig.id+":"+a.orig.seq):t.wait.get("udp:"+a.orig.sport);o&&o(i)}return}let n=i.udp;if(n.dport===67)return this.dhcpSrvRx(t,e,i);if(n.dport===68)return this.dhcpCliRx(t,e,i);if(n.dport===53)return this.dnsSrvRx(t,e,i);let s=t.wait.get("udp:"+n.dport);s&&s(i)}rtt(t){return Math.max(.2,(this.t-t)/.11*.43+Rh(""+this.uid)%40/100)}echo(t,e,i,n){let s=t._pid=(t._pid||0)+1,a="icmp:"+s+":1",o=this.t,l=!1,c=d=>{l||(l=!0,t.wait.delete(a),n(d))};t.wait.set(a,d=>{let u=this.rtt(o);d.icmp.type==="echo-reply"?c({ok:!0,from:d.src,ttl:d.ttl,ms:u}):c({ok:!1,why:d.icmp.type,from:d.src,ms:u})});let h=this.send(t,{dst:e,proto:"ICMP",ttl:i.ttl,icmp:{type:"echo-request",id:s,seq:1}},{onFail:()=>c({ok:!1,why:"arp"})});return h.ok?this.at(this.t+(i.timeout||2.6),()=>c({ok:!1,why:"timeout"})):this.at(this.t+.15,()=>c({ok:!1,why:h.why})),()=>c({ok:!1,why:"cancel"})}resolve(t,e,i){if(e=String(e).toLowerCase(),pe(e))return i(e);if(e==="localhost")return i("127.0.0.1");if(!pe(t.dns)){this.at(this.t+.1,()=>i(null,"nodns"));return}let n=0,s=!1,a=49152+this.uid%9e3,o="udp:"+a,l=(h,d)=>{s||(s=!0,t.wait.delete(o),i(h,d))};t.wait.set(o,h=>{if(h.proto==="ICMP")return l(null,"refused");l(h.dns.a||null,h.dns.a?null:"nxdomain")});let c=()=>{if(s)return;if(n++>=3)return l(null,"timeout");if(!this.send(t,{dst:t.dns,proto:"UDP",udp:{sport:a,dport:53},dns:{id:this.uid&65535,q:e}},{onFail:()=>l(null,"unreach")}).ok)return this.at(this.t+.1,()=>l(null,"unreach"));this.at(this.t+1.8,c)};c()}dnsSrvRx(t,e,i){if(!t.svc||!t.svc.dns)return this.log("drop",`${t.name}: port UDP/53 tertutup — layanan DNS tidak aktif (ICMP port unreachable dikirim)`),this.at(this.t+.012,()=>this.send(t,{dst:i.src,proto:"ICMP",icmp:{type:"unreachable",code:3,orig:{sport:i.udp.sport,dport:53}}}));let n=(t.dnsRecords||{})[i.dns.q]||null;this.at(this.t+.012,()=>this.send(t,{dst:i.src,proto:"UDP",udp:{sport:53,dport:i.udp.sport},dns:{id:i.dns.id,q:i.dns.q,qr:!0,a:n}}))}bcast(t,e,i){return i.id=this.uid++,i.ttl=i.ttl||t.ttl,this.tx(t,e,this.frame(e.mac,Mn,"IP",{ip:i}))}dhcpStart(t,e){if(!e.dhcp||!e._link)return;let i=e._dhcp={state:"DISCOVER",xid:Rh(e.mac+this.uid)&16777215,tries:0};this.dhcpDiscover(t,e,i)}dhcpDiscover(t,e,i){if(e._dhcp!==i||!e._link||!e.dhcp)return;i.tries++,i.state="DISCOVER",this.bcast(t,e,{src:"0.0.0.0",dst:"255.255.255.255",proto:"UDP",udp:{sport:68,dport:67},dhcp:{op:"DISCOVER",xid:i.xid,chaddr:e.mac,host:t.name,giaddr:""}});let n=()=>{if(!(e._dhcp!==i||i.state==="BOUND")){if(i.state==="REQUEST"&&this.t-i.reqT<2.6-.01)return this.at(i.reqT+2.6,n);if(i.tries<3)return this.dhcpDiscover(t,e,i);if(i.state!=="APIPA"&&!/^169\.254\./.test(e.ip)){let s=Rh(e.mac);e.ip=`169.254.${1+s%254}.${1+(s>>>8)%254}`,e.mask="255.255.0.0",t.gateway="",t.dns="",this.log("dhcp",`${t.name}: tidak ada DHCP server yang menjawab → alamat APIPA ${e.ip}`),this.changed()}i.state="APIPA",this.at(this.t+7,()=>{e._dhcp===i&&e.dhcp&&(i.tries=2,this.dhcpDiscover(t,e,i))})}};this.at(this.t+2.6,n)}dhcpCliRx(t,e,i){let n=i.dhcp,s=e&&e._dhcp;!n||!s||n.xid!==s.xid||n.chaddr!==e.mac||(n.op==="OFFER"&&(s.state==="DISCOVER"||s.state==="APIPA")?(s.state="REQUEST",s.reqT=this.t,this.at(this.t+.012,()=>this.bcast(t,e,{src:"0.0.0.0",dst:"255.255.255.255",proto:"UDP",udp:{sport:68,dport:67},dhcp:{op:"REQUEST",xid:s.xid,chaddr:e.mac,host:t.name,giaddr:"",yiaddr:n.yiaddr,server:n.server}}))):n.op==="ACK"&&s.state==="REQUEST"&&(s.state="BOUND",s.server=n.server,s.t=this.t,e.ip=n.yiaddr,e.mask=n.mask,t.gateway=n.router||"",t.dns=n.dns||"",t.arp.clear(),this.log("dhcp",`${t.name}: DHCPACK — mendapat ${e.ip}/${li(e.mask)} gw ${t.gateway} dns ${t.dns} dari ${n.server}`),this.changed(),this.at(this.t+.05,()=>this.garp(t,e))))}dhcpSrvRx(t,e,i){let n=i.dhcp;if(!n)return;let s=n.op==="DISCOVER"||n.op==="REQUEST";if(t.forward&&!s){let c=t.ifaces.find(h=>h.ip===n.giaddr&&h._link);c&&this.tx(t,c,this.frame(c.mac,n.chaddr,"IP",{ip:{id:this.uid++,src:c.ip,dst:n.yiaddr,ttl:255,proto:"UDP",udp:{sport:67,dport:68},dhcp:n}}));return}if(!s||!e)return;if(t.forward&&pe(e.helper)&&!n.giaddr){this.log("dhcp",`${t.name}: DHCP relay ${n.op} dari ${n.chaddr} → ${e.helper} (giaddr ${e.ip})`),this.send(t,{src:e.ip,dst:e.helper,proto:"UDP",udp:{sport:67,dport:67},dhcp:{...n,giaddr:e.ip}});return}if(!t.svc||!t.svc.dhcp||!t.pool)return;let a=t.pool,o=n.giaddr||e.ip;if(!o||!gi(o,a.network,a.mask)){this.log("dhcp",`${t.name}: DHCP ${n.op} diabaikan — tidak ada pool untuk subnet ${o||"?"}`);return}let l=(c,h)=>{let d={op:c,xid:n.xid,chaddr:n.chaddr,yiaddr:h,giaddr:n.giaddr,server:e.ip,mask:a.mask,router:a.router,dns:a.dns};this.at(this.t+.012,()=>{n.giaddr?this.send(t,{dst:n.giaddr,proto:"UDP",udp:{sport:67,dport:67},dhcp:d}):this.tx(t,e,this.frame(e.mac,n.chaddr,"IP",{ip:{id:this.uid++,src:e.ip,dst:h,ttl:t.ttl,proto:"UDP",udp:{sport:67,dport:68},dhcp:d}}))})};if(n.op==="DISCOVER"){let c=this.dhcpAlloc(t,n.chaddr);if(!c)return this.log("dhcp",`${t.name}: pool ${a.name} habis`);l("OFFER",c)}else{if(n.server&&n.server!==e.ip)return;let c=n.yiaddr||this.dhcpAlloc(t,n.chaddr);t.leases=t.leases.filter(h=>h.mac!==n.chaddr&&h.ip!==c),t.leases.push({ip:c,mac:n.chaddr,host:n.host||"",t:this.t}),this.log("dhcp",`${t.name}: DHCPACK ${c} → ${n.host||n.chaddr}`),l("ACK",c)}}dhcpAlloc(t,e){let i=t.pool,n=t.leases.find(o=>o.mac===e);if(n&&gi(n.ip,i.network,i.mask))return n.ip;let s=oi(i.start),a=oi(i.end);for(let o=s;o<=a;o++){let l=or(o);if(l!==i.router&&!t.leases.some(c=>c.ip===l))return l}return null}dhcpRelease(t,e){e._dhcp=null,e.dhcp&&(e.ip="",e.mask="",t.gateway="",t.dns="",t.arp.clear()),this.changed()}setIp(t,e,i,n){e.ip=i,e.mask=n,e.dhcp=!1,e._dhcp=null,t.arp.clear(),t.pend.clear(),this.changed(),i&&this.at(this.t+.05,()=>this.garp(t,e))}setDhcpClient(t,e){e.dhcp=!0,e.ip="",e.mask="",t.gateway="",t.dns="",e._dhcp=null,t.arp.clear(),this.changed(),e._link&&this.dhcpStart(t,e)}monitorTick(t,e){let i=t.monitor;if(!i||!i.length)return;let n=i[e%i.length];this.echo(t,n.ip,{timeout:2.2},s=>{t.monStat[n.ip]={ok:s.ok,ms:s.ms,t:this.t,name:n.name}}),this.at(this.t+3.2,()=>this.monitorTick(t,e+1))}snapshot(){return{cables:this.cables.map(t=>({...t})),devices:this.devices.map(t=>({id:t.id,name:t.name,vlans:t.vlans,gateway:t.gateway,dns:t.dns,routes:t.routes,svc:t.svc,pool:t.pool,dnsRecords:t.dnsRecords,pingOk:t.pingOk,traceOk:t.traceOk,ifaces:t.ifaces.map(e=>({name:e.name,up:e.up,ip:e.dhcp?"":e.ip,mask:e.dhcp?"":e.mask,dhcp:e.dhcp,mode:e.mode,vlan:e.vlan,allowed:e.allowed,native:e.native,helper:e.helper,desc:e.desc}))}))}}};function lf(r,t){if(!t||!Array.isArray(t.devices))return r;for(let e of t.devices){let i=r.devices.find(n=>n.id===e.id);if(i){for(let n of["name","vlans","gateway","dns","routes","svc","pool","dnsRecords","pingOk","traceOk"])e[n]!==void 0&&e[n]!==null&&(i[n]=e[n]);for(let n of e.ifaces||[]){let s=i.ifaces.find(a=>a.name===n.name);s&&Object.assign(s,n)}}}return Array.isArray(t.cables)&&(r.cables=t.cables.filter(e=>r.devices.some(i=>i.id===e.a.dev)&&r.devices.some(i=>i.id===e.b.dev))),r}function ut(r,t){let e=t.split(" "),i=[],n=0;for(let s of e){if(s==="*"){i.push(r.slice(n).join(" ")),n=r.length;break}let a=s[0]==="[",o=a?s.slice(1,-1):s,l=r[n];if(l===void 0){if(a)continue;return null}if(o[0]===":"){i.push(l),n++;continue}let[c,h]=o.split("/");if(c.startsWith(l.toLowerCase())&&l.length>=(h?+h:1)){n++;continue}if(!a)return null}return n===r.length?i:null}var Sa=(r,t)=>{r.includes(t)||r.push(t)},Ch=r=>r<1?"<1ms":`${Math.round(r)}ms`,ae=(r,t)=>String(r).padEnd(t),Kl=class{constructor(t,e,i){this.sim=t,this.d=e,this.io=i,this.mode="user",this.cur=null,this.busy=null,this.kind=e.type==="pc"?"win":e.type==="server"||e.type==="ap"?"nix":"ios"}p(...t){for(let e of t)this.io.print(e)}prompt(){let t=this.d.name;return this.kind==="win"?"C:\\Users\\netrunner>":this.kind==="nix"?`root@${t.toLowerCase()}:~#`:t+{user:">",priv:"#",config:"(config)#",if:"(config-if)#",vlan:"(config-vlan)#",dhcp:"(dhcp-config)#"}[this.mode]}banner(){let t=this.d;return this.kind==="win"?["Microsoft Windows [Version 10.0.22631.3737]","(c) NetRunner Corp. Simulasi Command Prompt.","",'Ketik "help" untuk daftar perintah.']:this.kind==="nix"?[`${t.name} — ${t.type==="ap"?"BusyBox v1.36 (AP firmware 7.2)":"Ubuntu Server 22.04.4 LTS (GNU/Linux 5.15 x86_64)"}`,'Ketik "help" untuk daftar perintah.']:[`${t.name} con0 is now available`,"",'Press RETURN to get started. Ketik "?" untuk bantuan perintah.',t.locked?"*** PERANGKAT MILIK ISP — akses konfigurasi dibatasi ***":""]}interrupt(){if(this.busy){let t=this.busy;return this.busy=null,t(),!0}return!1}exec(t){if(this.busy)return;let e=t.trim();if(!e)return;let i=e.split(/\s+/);try{this.kind==="ios"?this.ios(i,e):this.kind==="win"?this.win(i,e):this.nix(i,e)}catch(n){this.p("% Internal error: "+n.message)}}done(){this.busy=null,this.io.done&&this.io.done()}touch(){this.sim.changed()}ping(t,e,i){let n=this.sim,s=this.d,a=!1,o=null;this.busy=()=>{a=!0,o&&o()},i==="ios"&&this.p("Type escape sequence to abort."),n.resolve(s,t,(l,c)=>{if(a)return this.done();if(!l){let g={nodns:"tidak ada DNS server yang dikonfigurasi",timeout:"DNS server tidak menjawab (timeout)",nxdomain:"nama tidak ditemukan (NXDOMAIN)",refused:"port 53 tertutup — layanan DNS di server belum aktif",unreach:"DNS server tidak terjangkau"}[c]||c;return i==="win"?this.p(`Ping request could not find host ${t}. Please check the name and try again.`,`  (i) ${g}`):i==="ios"?this.p(`Translating "${t}"...domain server (${s.dns||"255.255.255.255"})`,`% Unrecognized host or address, or protocol not running.  (${g})`):this.p(`ping: ${t}: Temporary failure in name resolution  (${g})`),this.done()}let h=l!==t.toLowerCase(),d=0,u=0,f=[],m=(s.ifaces.find(g=>g.ip)||{}).ip||"0.0.0.0";i==="win"?this.p("",`Pinging ${h?`${t} [${l}]`:l} with 32 bytes of data:`):i==="ios"?(this.p(`Sending ${e}, 100-byte ICMP Echos to ${l}, timeout is 2 seconds:`),this.p("")):this.p(`PING ${t} (${l}) 56(84) bytes of data.`);let x=()=>{let g=d?Math.round((d-u)/d*100):0,v=Math.min(...f),w=Math.max(...f),b=f.reduce((E,T)=>E+T,0)/(f.length||1);i==="win"?(this.p("",`Ping statistics for ${l}:`,`    Packets: Sent = ${d}, Received = ${u}, Lost = ${d-u} (${g}% loss),`),u&&this.p("Approximate round trip times in milli-seconds:",`    Minimum = ${Math.round(v)}ms, Maximum = ${Math.round(w)}ms, Average = ${Math.round(b)}ms`)):i==="ios"?this.p(`Success rate is ${100-g} percent (${u}/${d})`+(u?`, round-trip min/avg/max = ${Math.max(1,Math.round(v))}/${Math.max(1,Math.round(b))}/${Math.max(1,Math.round(w))} ms`:"")):this.p(`--- ${t} ping statistics ---`,`${d} packets transmitted, ${u} received, ${g}% packet loss`),!u&&!a?this.p("  (i) Semua paket gagal. Paket pertama wajar hilang saat tiap hop me-resolve ARP — ulangi sekali lagi.","      Jika tetap gagal: Laptop NetScope [L] → tab Log menunjukkan di hop mana paket dibuang."):u<d&&!a&&this.p("  (i) Paket awal hilang selagi router di jalur me-resolve ARP hop berikutnya — perilaku normal."),this.done()},p=()=>{if(a||d>=e)return x();d++;let g=d;o=n.echo(s,l,{},v=>{if(v.why==="cancel")return x();v.ok?(u++,f.push(v.ms),Sa(s.pingOk,t.toLowerCase()),Sa(s.pingOk,l),n.on.change&&n.on.change(),this.io.ping&&this.io.ping(!0)):this.io.ping&&this.io.ping(!1),i==="win"?this.p(v.ok?`Reply from ${v.from}: bytes=32 time${v.ms<1?"<1ms":"="+Math.round(v.ms)+"ms"} TTL=${v.ttl}`:v.why==="timeout"?"Request timed out.":v.why==="arp"?`Reply from ${m}: Destination host unreachable.`:v.why==="unreachable"?`Reply from ${v.from}: Destination host unreachable.`:v.why==="ttl-exceeded"?`Reply from ${v.from}: TTL expired in transit.`:"PING: transmit failed. General failure."):i==="ios"?this.io.append(v.ok?"!":v.why==="unreachable"?"U":"."):this.p(v.ok?`64 bytes from ${v.from}: icmp_seq=${g} ttl=${v.ttl} time=${v.ms.toFixed(2)} ms`:v.why==="timeout"?`Request timeout for icmp_seq ${g}`:v.why==="arp"||v.why==="unreachable"?`From ${v.from||m} icmp_seq=${g} Destination Host Unreachable`:v.why==="ttl-exceeded"?`From ${v.from} icmp_seq=${g} Time to live exceeded`:"ping: sendmsg: Network is unreachable"),n.at(n.t+(v.ok?.4:.12),p)})};p()})}trace(t,e){let i=this.sim,n=this.d,s=!1,a=null;this.busy=()=>{s=!0,a&&a()},i.resolve(n,t,(o,l)=>{if(s)return this.done();if(!o)return this.p(e==="win"?`Unable to resolve target system name ${t}.`:`traceroute: unknown host ${t}`),this.done();e==="win"?this.p("",`Tracing route to ${t}${o!==t.toLowerCase()?` [${o}]`:""} over a maximum of 15 hops:`,""):e==="ios"?this.p("Type escape sequence to abort.",`Tracing the route to ${o}`,""):this.p(`traceroute to ${t} (${o}), 15 hops max, 60 byte packets`);let c=0,h=0,d=f=>{f&&this.p(f),e==="win"&&this.p("","Trace complete."),this.done()},u=f=>{if(s||(f||c++,c>15))return d();a=i.echo(n,o,{ttl:c,timeout:2.2},m=>{if(m.why==="cancel")return d();let x=String(c).padStart(3);if(m.ok||m.why==="ttl-exceeded")return h=0,this.p(`${x}   ${Ch(m.ms).padStart(6)}   ${Ch(m.ms*.9).padStart(6)}   ${Ch(m.ms*1.1).padStart(6)}   ${m.from}`),m.ok?(Sa(n.traceOk,t.toLowerCase()),Sa(n.traceOk,o),i.on.change&&i.on.change(),d()):i.at(i.t+.15,()=>u(!1));if(m.why==="timeout"&&!f)return u(!0);if(m.why==="unreachable")return d(`${x}   ${m.from}  !H  (Destination host unreachable — router ini tidak punya rute)`);if(m.why==="noroute"||m.why==="linkdown"||m.why==="arp")return d(`${x}   Transmit failed: ${m.why==="arp"?"next-hop tidak menjawab ARP":"tidak ada rute / link down"}.`);if(this.p(`${x}        *        *        *     Request timed out.`),++h>=3)return d("  (trace dihentikan setelah 3 hop tanpa jawaban)");i.at(i.t+.1,()=>u(!1))})};u(!1)})}nslookup(t){let e=this.sim,i=this.d,n=!1;if(this.busy=()=>{n=!0},!t)return this.p("Usage: nslookup <nama-host>"),this.done();this.p(`Server:  ${i.dns||"(tidak ada)"}`,`Address: ${i.dns||"-"}#53`,""),e.resolve(i,t,(s,a)=>{if(n)return this.done();s?(this.p(`Name:    ${t}`,`Address: ${s}`),Sa(i.pingOk,"ns:"+t.toLowerCase()),e.on.change&&e.on.change()):this.p({nodns:"*** Tidak ada DNS server yang dikonfigurasi pada host ini.",timeout:`*** Request to ${i.dns} timed-out`,nxdomain:`*** ${i.dns} can't find ${t}: Non-existent domain (NXDOMAIN)`,refused:`*** ${i.dns}: connection refused — port 53 tertutup (layanan DNS mati)`,unreach:`*** DNS server ${i.dns} tidak terjangkau (cek gateway / kabel)`}[a]||"*** gagal"),this.done()})}win(t,e){let i=this.d,n=this.sim,s=i.ifaces[0],a=t[0].toLowerCase(),o;if(a==="help"||a==="?")return this.p("Perintah yang tersedia:","  ipconfig [/all | /release | /renew]   Lihat / perbarui konfigurasi IP","  ping [-n jumlah] <ip|host>            Uji konektivitas (ICMP echo)","  tracert <ip|host>                     Telusuri rute hop demi hop (TTL)","  nslookup <host>                       Query DNS","  arp -a | arp -d                       Lihat / hapus cache ARP","  getmac | hostname | cls",'  netsh interface ip set address "Ethernet" static <ip> <mask> [gw]','  netsh interface ip set address "Ethernet" dhcp','  netsh interface ip set dns "Ethernet" static <ip>',"Pintasan: ip address <ip> <mask> | ip default-gateway <ip> | ip name-server <ip> | ip dhcp",'Ctrl+C membatalkan perintah yang berjalan. Tab "Konfigurasi" menyediakan form IPv4.');if(a==="cls"||a==="clear")return this.io.clear();if(a==="hostname")return this.p(i.name);if(a==="getmac")return this.p("","Physical Address    Transport Name","=================== ==========================",`${s.mac.toUpperCase().replace(/:/g,"-")}   \\Device\\Tcpip_{Ethernet}`);if(a==="ipconfig"||a==="ifconfig"){let l=(t[1]||"").toLowerCase();if(l==="/release")return s.dhcp?(n.dhcpRelease(i,s),this.p("","Windows IP Configuration","","IP address successfully released.")):this.p("The operation failed as no adapter is in the state permissible for this operation. (adapter memakai IP statis)");if(l==="/renew"){if(!s.dhcp)return this.p("The operation failed as no adapter is in the state permissible for this operation. (adapter memakai IP statis)");if(!s._link)return this.p("No operation can be performed on Ethernet while it has its media disconnected.");this.p("","Windows IP Configuration","","Mengirim DHCP Discover (broadcast)..."),s.ip="",s.mask="",n.dhcpStart(i,s);let u=0,f=!1;this.busy=()=>{f=!0};let m=()=>{if(f)return this.done();let x=s._dhcp;if(x&&x.state==="BOUND")return this.p(`   IPv4 Address. . . . . . . . . . . : ${s.ip}`,`   Subnet Mask . . . . . . . . . . . : ${s.mask}`,`   Default Gateway . . . . . . . . . : ${i.gateway}`,`   DHCP Server . . . . . . . . . . . : ${x.server}`),this.done();if(++u>34||x&&x.state==="APIPA")return this.p("An error occurred while renewing interface Ethernet : unable to contact your DHCP server. Request has timed out.",'  (i) Tidak ada DHCP Offer. Cek layanan DHCP di server dan "ip helper-address" di gateway.'),this.done();n.at(n.t+.25,m)};return m()}let c=s._dhcp,h=l==="/all";if(this.p("","Windows IP Configuration",""),h&&this.p(`   Host Name . . . . . . . . . . . . : ${i.name}`,""),this.p("Ethernet adapter Ethernet:",""),!s._link)return this.p("   Media State . . . . . . . . . . . : Media disconnected",h?`   Physical Address. . . . . . . . . : ${s.mac.toUpperCase().replace(/:/g,"-")}`:"");h&&this.p(`   Physical Address. . . . . . . . . : ${s.mac.toUpperCase().replace(/:/g,"-")}`,`   DHCP Enabled. . . . . . . . . . . : ${s.dhcp?"Yes":"No"}`);let d=/^169\.254\./.test(s.ip);this.p(`   ${d?"Autoconfiguration IPv4 Address. .":"IPv4 Address. . . . . . . . . . ."} : ${s.ip||"(belum ada)"}`,`   Subnet Mask . . . . . . . . . . . : ${s.mask||""}`,`   Default Gateway . . . . . . . . . : ${i.gateway||""}`),h&&(s.dhcp&&c&&c.state==="BOUND"&&this.p(`   DHCP Server . . . . . . . . . . . : ${c.server}`),this.p(`   DNS Servers . . . . . . . . . . . : ${i.dns||""}`)),d&&this.p("","  (i) Alamat 169.254.x.x (APIPA) berarti DHCP gagal — tidak ada server yang menjawab.");return}if(a==="ping"){let l=4,c=null;for(let h=1;h<t.length;h++)t[h]==="-n"||t[h]==="-c"?l=Math.max(1,Math.min(20,+t[++h]||4)):t[h]==="-t"?l=20:c=t[h];return c?this.ping(c,l,"win"):this.p("Usage: ping [-n count] target_name")}if(a==="tracert"||a==="traceroute")return t[1]?this.trace(t[1],"win"):this.p("Usage: tracert target_name");if(a==="nslookup")return this.nslookup(t[1]);if(a==="arp"){if(t[1]==="-d"){i.arp.clear();return}if(!i.arp.size)return this.p("No ARP Entries Found.");this.p("",`Interface: ${s.ip||"0.0.0.0"} --- 0x4`,"  Internet Address      Physical Address      Type");for(let[l,c]of i.arp)this.p(`  ${ae(l,21)} ${c.mac.replace(/:/g,"-")}     dynamic`);return}if(a==="netsh"){let l=e.toLowerCase(),c=t.filter(pe);return/set\s+address/.test(l)?/\bdhcp\b/.test(l)?(n.setDhcpClient(i,s),this.p("Ok. (DHCP client aktif)")):c.length<2||!Xe(c[1])?this.p('Usage: netsh interface ip set address "Ethernet" static <ip> <mask> [gateway]'):(c[2]&&(i.gateway=c[2]),n.setIp(i,s,c[0],c[1]),this.p("Ok.")):/set\s+dns/.test(l)?c[0]?(i.dns=c[0],this.touch(),this.p("Ok.")):this.p('Usage: netsh interface ip set dns "Ethernet" static <ip>'):this.p("The following command was not found: "+e.slice(6))}if(!this.hostAlias(t)){if(a==="exit")return this.io.close&&this.io.close();this.p(`'${t[0]}' is not recognized as an internal or external command,`,"operable program or batch file.")}}hostAlias(t){let e=this.d,i=this.sim,n=e.ifaces[0],s;return(s=ut(t,"ip address/3 dhcp"))||(s=ut(t,"ip dhcp"))?(i.setDhcpClient(e,n),this.p("eth0: DHCP client aktif — mengirim Discover..."),!0):(s=ut(t,"ip address/3 :ip :mask"))?(!pe(s[0])||!Xe(s[1])?this.p("% Alamat IPv4 atau subnet mask tidak valid. Contoh: ip address 192.168.1.10 255.255.255.0"):(i.setIp(e,n,s[0],s[1]),this.p(`eth0: ${s[0]}/${li(s[1])}`)),!0):(s=ut(t,"ip default-gateway/1 :ip"))||(s=ut(t,"ip gateway/1 :ip"))?(pe(s[0])?(e.gateway=s[0],this.touch(),this.p(`Default gateway: ${s[0]}`)):this.p("% Alamat gateway tidak valid"),!0):(s=ut(t,"ip name-server/1 :ip"))||(s=ut(t,"ip dns-server/3 :ip"))||(s=ut(t,"ip dns/3 :ip"))?(pe(s[0])?(e.dns=s[0],this.touch(),this.p(`DNS server: ${s[0]}`)):this.p("% Alamat DNS tidak valid"),!0):!1}nix(t,e){let i=this.d,n=this.sim,s=i.ifaces[0],a=t[0].toLowerCase(),o,l={dhcpd:"dhcp","isc-dhcp-server":"dhcp",dhcp:"dhcp",named:"dns",bind9:"dns",dns:"dns",httpd:"http",nginx:"http",apache2:"http",http:"http",web:"http"},c=i.type==="server";if(a==="help"||a==="?")return this.p("Perintah yang tersedia:","  ip addr | ip route | ip neigh        Lihat alamat, tabel routing, cache ARP","  ping [-c jumlah] <ip|host>           Uji konektivitas","  traceroute <ip|host> | nslookup <host>",...c?["  systemctl start|stop|restart|status <dhcpd|named|httpd>","  service dhcp | service dns           (pintasan: langsung aktifkan layanan)","  ss -lun                              Port UDP yang sedang listen","  dhcp-lease-list                      Daftar lease DHCP aktif","  cat /etc/dhcp/dhcpd.conf | cat /etc/bind/db.netrunner.local"]:[],"  hostname | clear","Pintasan: ip address <ip> <mask> | ip default-gateway <ip> | ip name-server <ip>");if(a==="clear"||a==="cls")return this.io.clear();if(a==="hostname")return this.p(i.name.toLowerCase());if(a==="ifconfig"||a==="ip"&&/^a(d|dd|ddr|ddress)?$/.test(t[1]||"")&&t.length===2)return this.p("1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536","    inet 127.0.0.1/8 scope host lo",`2: eth0: <BROADCAST,MULTICAST${s._link?",UP,LOWER_UP":",NO-CARRIER"}> mtu 1500 state ${s._link?"UP":"DOWN"}`,`    link/ether ${s.mac} brd ff:ff:ff:ff:ff:ff`,s.ip?`    inet ${s.ip}/${Xe(s.mask)?li(s.mask):"?"} scope global eth0`:"    (tidak ada alamat IPv4)");if(a==="ip"&&/^r(o|ou|out|oute)?$/.test(t[1]||"")){pe(i.gateway)&&this.p(`default via ${i.gateway} dev eth0`),s.ip&&Xe(s.mask)&&this.p(`${lr(s.ip,s.mask)}/${li(s.mask)} dev eth0 proto kernel scope link src ${s.ip}${s._link?"":" linkdown"}`);return}if(a==="ip"&&/^n(e|ei|eig|eigh)?$/.test(t[1]||"")||a==="arp"){if(!i.arp.size)return this.p("(cache ARP kosong)");for(let[h,d]of i.arp)this.p(`${ae(h,16)} dev eth0 lladdr ${d.mac} REACHABLE`);return}if(a==="ping"){let h=4,d=null;for(let u=1;u<t.length;u++)t[u]==="-c"||t[u]==="-n"?h=Math.max(1,Math.min(20,+t[++u]||4)):d=t[u];return d?this.ping(d,h,"nix"):this.p("ping: usage error: Destination address required")}if(a==="traceroute"||a==="tracert")return t[1]?this.trace(t[1],"nix"):this.p("Usage: traceroute host");if(a==="nslookup"||a==="dig"||a==="host")return this.nslookup(t[1]);if(!this.hostAlias(t)){if(c){if(a==="systemctl"||a==="service"){let h,d;a==="systemctl"?(h=(t[1]||"").toLowerCase(),d=(t[2]||"").toLowerCase().replace(/\.service$/,"")):(d=(t[1]||"").toLowerCase(),h=(t[2]||"start").toLowerCase());let u=l[d];if(!u)return this.p(`Failed: Unit ${d||"?"}.service not found. (tersedia: dhcpd, named, httpd)`);let f={dhcp:"dhcpd.service - ISC DHCPv4 Server",dns:"named.service - BIND Domain Name Server",http:"httpd.service - Web Server"}[u];return h==="status"?this.p(`● ${f}`,`     Active: ${i.svc[u]?"active (running)":"inactive (dead)"}`,u==="dhcp"?`     Pool  : ${i.pool.name} ${i.pool.start} – ${i.pool.end}`:u==="dns"?`     Zona  : netrunner.local (${Object.keys(i.dnsRecords).length} record)`:"     Listen: tcp/80"):h==="start"||h==="restart"||h==="enable"?(i.svc[u]=!0,this.touch(),this.p(`[  OK  ] Started ${f}.`)):h==="stop"||h==="disable"?(i.svc[u]=!1,this.touch(),this.p(`[  OK  ] Stopped ${f}.`)):this.p("Usage: systemctl start|stop|restart|status <unit>")}if(a==="ss"||a==="netstat")return this.p("State   Local Address:Port",...i.svc.dhcp?["UNCONN  0.0.0.0:67     (dhcpd)"]:[],...i.svc.dns?[`UNCONN  ${s.ip}:53  (named)`]:[],...i.svc.http?["LISTEN  0.0.0.0:80     (httpd)"]:[]);if(a==="dhcp-lease-list"){this.p("MAC                IP               hostname");for(let h of i.leases)this.p(`${h.mac}  ${ae(h.ip,16)} ${h.host}`);i.leases.length||this.p("(belum ada lease)");return}if(a==="cat"){let h=t[1]||"";if(/dhcpd\.conf/.test(h)){let d=i.pool;return this.p(`# ${h}`,`subnet ${d.network} netmask ${d.mask} {`,`  range ${d.start} ${d.end};`,`  option routers ${d.router};`,`  option domain-name-servers ${d.dns};`,"  default-lease-time 86400;","}")}if(/db\.|named|bind/.test(h)){this.p("$TTL 86400","@  IN SOA srv.netrunner.local. admin.netrunner.local. ( 2026112501 3600 900 604800 86400 )");for(let[d,u]of Object.entries(i.dnsRecords))this.p(`${ae(d+".",30)} IN A ${u}`);return}return this.p(`cat: ${h||"?"}: No such file or directory`)}}if(a==="exit"||a==="logout")return this.io.close&&this.io.close();this.p(`bash: ${t[0]}: command not found`)}}ios(t,e){let i=this.d;if(e==="?"||t[0]==="help")return this.iosHelp();if(this.mode==="user"||this.mode==="priv")return this.iosExec(t);if(ut(t,"do *")){let a=this.mode;this.mode="priv",this.iosExec(t.slice(1)),this.mode==="priv"&&(this.mode=a);return}if(ut(t,"end/3")){this.mode="priv",this.cur=null;return}if(ut(t,"exit/2")){this.mode==="config"?this.mode="priv":this.mode="config",this.cur=null;return}let n=!1,s=t;s[0].toLowerCase()==="no"&&s.length>1&&(n=!0,s=s.slice(1)),!(this.mode==="if"&&this.iosIf(s,n)!==!1)&&(this.mode==="vlan"&&this.iosVlan(s,n)!==!1||this.mode==="dhcp"&&this.iosDhcp(s,n)!==!1||this.iosGlobal(s,n)===!1&&this.p(`% Invalid input detected: "${t.join(" ")}"  — ketik ? untuk daftar perintah mode ini.`))}iosHelp(){let t={user:["  enable                  Masuk privileged EXEC","  ping <ip|host>          Kirim ICMP echo","  traceroute <ip|host>    Telusuri rute","  show ...                (ip interface brief | interfaces | vlan brief | arp | ip route | mac address-table | cdp neighbors | version)"],priv:["  configure terminal      Masuk mode konfigurasi global (conf t)","  show running-config     Tampilkan konfigurasi aktif","  show ip interface brief | show interfaces [status|trunk] | show vlan brief","  show mac address-table | show arp | show ip route | show ip dhcp binding | show cdp neighbors","  ping <ip|host> | traceroute <ip|host>","  clear arp-cache | clear mac address-table dynamic","  write memory            Simpan konfigurasi","  disable | exit"],config:["  hostname <nama>","  interface <nama>                  cth: int gi0/0, int fa0/1","  vlan <id>                         Buat/masuk VLAN (switch)","  ip route <net> <mask> <next-hop>  Rute statis (router/firewall)","  ip default-gateway <ip> | ip name-server <ip>","  ip dhcp pool <nama>               Konfigurasi DHCP server","  no ...                            Hapus konfigurasi","  do <perintah exec>                cth: do show ip int br","  end | exit"],if:["  ip address <ip> <mask> | ip address dhcp | no ip address","  no shutdown | shutdown","  description <teks>","  switchport mode access|trunk","  switchport access vlan <id>","  switchport trunk allowed vlan <daftar> | add <daftar>","  switchport trunk native vlan <id>","  ip helper-address <ip>            DHCP relay ke server di subnet lain","  exit | end | do <perintah>"],vlan:["  name <nama-vlan>","  exit | end"],dhcp:["  network <net> <mask>","  default-router <ip>","  dns-server <ip>","  exit | end"]}[this.mode];this.p('Perintah pada mode ini (boleh disingkat, cth: "sh ip int br", "conf t", "no shut"):',...t)}iosExec(t){let e=this.d,i=this.sim,n;if(ut(t,"enable/2")){if(e.locked)return this.p("Password: ",'% Access denied — perangkat ini dikelola oleh ISP. Hanya perintah "show" & "ping" yang tersedia.');this.mode="priv";return}if(ut(t,"disable/4")){this.mode="user";return}if(ut(t,"exit/2")||ut(t,"logout/3")||ut(t,"quit/1")){this.mode==="priv"?this.mode="user":this.io.close&&this.io.close();return}if(!ut(t,"end/3")){if(n=ut(t,"ping/1 :t"))return!ql(e)&&e.type!=="switch"?void 0:e.type==="switch"?this.p("% Switch Layer-2 ini tidak punya interface IP (SVI). Jalankan ping dari PC atau router."):this.ping(n[0],5,"ios");if(n=ut(t,"traceroute/1 :t"))return e.type==="switch"?this.p("% Switch Layer-2 ini tidak punya interface IP. Jalankan dari PC atau router."):this.trace(n[0],"ios");if(ut([t[0]],"show/2"))return this.iosShow(t.slice(1));if(this.mode==="user")return this.p(`% Invalid input detected: "${t.join(" ")}"  — mungkin perlu "enable" dulu. Ketik ? untuk bantuan.`);if(ut(t,"configure/4 [terminal]"))return this.mode="config",this.p("Enter configuration commands, one per line.  End with CNTL/Z.");if(ut(t,"write/1 [memory]")||ut(t,"copy/3 running-config/1 startup-config/1"))return this.p("Building configuration...","[OK]");if(ut(t,"clear/2 arp-cache/1")||ut(t,"clear/2 arp/1")||ut(t,"clear/2 ip arp")){e.arp.clear();return}if(ut(t,"clear/2 mac/1 address-table/1 [dynamic]")){e.mac.clear();return}if(ut(t,"reload/3"))return this.p("% Reload dinonaktifkan di simulator (konfigurasi tersimpan otomatis).");this.p(`% Invalid input detected: "${t.join(" ")}"  — ketik ? untuk bantuan.`)}}status(t){return t.up?t._link?["up","up"]:["down","down"]:["administratively down","down"]}iosShow(t){let e=this.d,i=this.sim,n=e.type==="switch",s;if(!t.length)return this.p("% Incomplete command. cth: show ip interface brief");if(ut(t,"ip interface/1 [brief]")||ut(t,"interfaces/3 brief/1")){this.p("Interface              IP-Address      OK? Method Status                Protocol");for(let a of e.ifaces){let[o,l]=this.status(a);this.p(`${ae(ci(a.name),22)} ${ae(a.ip||"unassigned",15)} YES ${ae(a.dhcp?"DHCP":a.ip?"manual":"unset",6)} ${ae(o,21)} ${l}`)}for(let a of e.loopbacks||[])this.p(`${ae(ci(a.name),22)} ${ae(a.ip,15)} YES manual up                    up`);return}if(ut(t,"interfaces/3 status/1")){this.p("Port      Name               Status       Vlan       Duplex  Speed Type");for(let a of e.ifaces)this.p(`${ae(a.name,9)} ${ae((a.desc||"").slice(0,18),18)} ${ae(a.up?a._link?"connected":"notconnect":"disabled",12)} ${ae(a.mode==="trunk"?"trunk":n?a.vlan:"routed",10)} ${ae(a._link?"a-full":"auto",7)} ${ae(a._link?/^Fa/.test(a.name)?"a-100":"a-1000":"auto",5)} 10/100${/^Gi/.test(a.name)?"/1000":""}BaseTX`);return}if(ut(t,"interfaces/3 trunk/1")){let a=e.ifaces.filter(o=>o.mode==="trunk");if(!a.length)return this.p("(tidak ada port trunk)");this.p("Port        Mode         Encapsulation  Status        Native vlan");for(let o of a)this.p(`${ae(o.name,11)} on           802.1q         ${ae(o._link?"trunking":"not-trunking",13)} ${o.native||1}`);this.p("","Port        Vlans allowed on trunk");for(let o of a)this.p(`${ae(o.name,11)} ${o.allowed.join(",")}`);this.p("","Port        Vlans allowed and active in management domain");for(let o of a)this.p(`${ae(o.name,11)} ${o.allowed.filter(l=>e.vlans[l]).join(",")||"none"}`);return}if(s=ut(t,"interfaces/3 [:n]")){let a=s[0]?[i.ifc(e,s[0])].filter(Boolean):e.ifaces;if(!a.length)return this.p("% Invalid interface");for(let o of a){let[l,c]=this.status(o);this.p(`${ci(o.name)} is ${l}, line protocol is ${c}`,`  Hardware is ${/^Fa/.test(o.name)?"Fast":"Gigabit"} Ethernet, address is ${cr(o.mac)}`),o.desc&&this.p(`  Description: ${o.desc}`),o.ip&&this.p(`  Internet address is ${o.ip}/${Xe(o.mask)?li(o.mask):"?"}`),n&&this.p(`  Switchport: ${o.mode}${o.mode==="access"?`, access VLAN ${o.vlan}`:`, allowed VLAN ${o.allowed.join(",")}, native ${o.native||1}`}`),o.helper&&this.p(`  Helper address is ${o.helper}`),this.p(`  MTU 1500 bytes, BW ${/^Fa/.test(o.name)?"100000":"1000000"} Kbit/sec, ${o._link?"Full-duplex":"Auto-duplex"}`)}return}if(ut(t,"vlan/1 [brief]")){if(!n)return this.p("% Perintah ini hanya untuk switch.");this.p("VLAN Name                             Status    Ports","---- -------------------------------- --------- -------------------------------");for(let[o,l]of Object.entries(e.vlans))this.p(`${ae(o,4)} ${ae(l,32)} active    ${e.ifaces.filter(c=>c.mode==="access"&&c.vlan===+o).map(c=>c.name).join(", ")}`);let a=[...new Set(e.ifaces.filter(o=>o.mode==="access"&&!e.vlans[o.vlan]).map(o=>o.vlan))];for(let o of a)this.p(`${ae(o,4)} ${ae("(VLAN belum dibuat!)",32)} inactive  ${e.ifaces.filter(l=>l.mode==="access"&&l.vlan===o).map(l=>l.name).join(", ")}`);return}if(ut(t,"mac/1 address-table/1 [dynamic]")||ut(t,"mac-address-table/4")){if(!n)return this.p("% Perintah ini hanya untuk switch.");this.p("          Mac Address Table","-------------------------------------------","","Vlan    Mac Address       Type        Ports","----    -----------       --------    -----");let a=0;for(let o of e.mac.values())i.t-o.t<300&&(this.p(`${String(o.vlan).padStart(4)}    ${cr(o.mac)}    DYNAMIC     ${o.port}`),a++);return this.p(`Total Mac Addresses for this criterion: ${a}`)}if(ut(t,"arp/1")||ut(t,"ip arp/1")){if(n)return this.p('% Switch Layer-2 tidak memiliki tabel ARP. Gunakan "show mac address-table".');this.p("Protocol  Address          Age (min)  Hardware Addr   Type   Interface");for(let a of e.ifaces)a.ip&&this.p(`Internet  ${ae(a.ip,16)}        -   ${cr(a.mac)}  ARPA   ${ci(a.name)}`);for(let[a,o]of e.arp)this.p(`Internet  ${ae(a,16)} ${String(Math.floor((i.t-o.t)/60)).padStart(8)}   ${cr(o.mac)}  ARPA   ${ci(o.ifc)}`);return}if(ut(t,"ip route/1")){if(n)return this.p("% IP routing tidak aktif pada switch Layer-2 ini.");let a=e.routes.find(o=>o.mask==="0.0.0.0");this.p("Codes: C - connected, L - local, S - static, * - candidate default","",a?`Gateway of last resort is ${a.via} to network 0.0.0.0`:"Gateway of last resort is not set","");for(let o of e.routes){let l=e.ifaces.some(c=>c._link&&c.ip&&Xe(c.mask)&&gi(c.ip,o.via,c.mask));this.p(`S${o.mask==="0.0.0.0"?"*":" "}   ${o.net}/${o.mask==="0.0.0.0"?0:li(o.mask)} [1/0] via ${o.via}${l?"":"   (tidak aktif: next-hop tak terjangkau)"}`)}for(let o of e.ifaces)o.ip&&Xe(o.mask)&&o._link&&this.p(`C    ${lr(o.ip,o.mask)}/${li(o.mask)} is directly connected, ${ci(o.name)}`,`L    ${o.ip}/32 is directly connected, ${ci(o.name)}`);for(let o of e.loopbacks||[])this.p(`C    ${o.ip}/32 is directly connected, ${ci(o.name)}`);return}if(ut(t,"ip dhcp binding/1")){this.p("IP address       Client-ID/Hardware address    Lease expiration        Type");for(let a of e.leases)this.p(`${ae(a.ip,16)} ${ae(cr(a.mac),29)} Infinite                Automatic`);return}if(ut(t,"ip dhcp pool/1")){if(!e.pool)return this.p("(tidak ada pool)");let a=e.pool;return this.p(`Pool ${a.name} :`,` Network            : ${a.network} ${a.mask}`,` Default router     : ${a.router}`,` DNS server         : ${a.dns}`,` Leased addresses   : ${e.leases.length}`,` Range              : ${a.start} - ${a.end}`)}if(ut(t,"cdp/1 neighbors/1")){this.p("Capability Codes: R - Router, S - Switch, H - Host","","Device ID        Local Intrfce     Capability  Platform    Port ID");for(let a of e.ifaces){if(!a._link)continue;let o=i.path(e.id,a.name).end;if(!o)continue;let l=i.dev(o.dev);l.type==="pc"||l.type==="server"||l.type==="ap"||this.p(`${ae(l.name,16)} ${ae(a.name,17)} ${ae(l.type==="switch"?"S":"R",11)} ${ae(l.type==="switch"?"C2960C-8TC":l.type==="firewall"?"FPR-1010":"ISR4321",11)} ${o.port}`)}return}if(ut(t,"version/3"))return this.p(`Cisco IOS Software, ${n?"C2960C Software (C2960C405-UNIVERSALK9-M), Version 15.2(7)E":"ISR Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.5"}`,`${e.name} uptime is ${Math.floor(i.t/60)} minutes`,`${e.ifaces.filter(a=>/^Fa/.test(a.name)).length} FastEthernet interfaces, ${e.ifaces.filter(a=>/^Gi/.test(a.name)).length} Gigabit Ethernet interfaces`,"Configuration register is 0x2102");if(ut(t,"running-config/1")||ut(t,"startup-config/1")){if(this.mode==="user")return this.p('% Perintah ini butuh privileged EXEC — ketik "enable" dulu.');let a=["Building configuration...","","Current configuration:","!",`hostname ${e.name}`,"!"];if(e.dns&&a.push(`ip name-server ${e.dns}`),e.pool&&e.type!=="server"&&a.push(`ip dhcp pool ${e.pool.name}`,` network ${e.pool.network} ${e.pool.mask}`,` default-router ${e.pool.router}`,` dns-server ${e.pool.dns}`,"!"),n)for(let[o,l]of Object.entries(e.vlans))o!=="1"&&a.push(`vlan ${o}`,` name ${l}`,"!");for(let o of e.loopbacks||[])a.push(`interface ${ci(o.name)}`,` ip address ${o.ip} ${o.mask}`,"!");for(let o of e.ifaces)a.push(`interface ${ci(o.name)}`),o.desc&&a.push(` description ${o.desc}`),n?o.mode==="trunk"?(a.push(" switchport mode trunk",` switchport trunk allowed vlan ${o.allowed.join(",")}`),(o.native||1)!==1&&a.push(` switchport trunk native vlan ${o.native}`)):a.push(" switchport mode access",` switchport access vlan ${o.vlan}`):a.push(o.dhcp?" ip address dhcp":o.ip?` ip address ${o.ip} ${o.mask}`:" no ip address"),o.helper&&a.push(` ip helper-address ${o.helper}`),o.up||a.push(" shutdown"),a.push("!");n&&e.gateway&&a.push(`ip default-gateway ${e.gateway}`);for(let o of e.routes)a.push(`ip route ${o.net} ${o.mask} ${o.via}`);return a.push("!","end"),this.p(...a)}this.p("% Invalid show command. Coba: show ip interface brief | show vlan brief | show interfaces trunk | show mac address-table | show arp | show ip route | show running-config | show cdp neighbors")}iosGlobal(t,e){let i=this.d,n=this.sim,s=i.type==="switch",a;if(a=ut(t,"hostname/1 :n")){e||(i.name=a[0].slice(0,20),this.touch());return}if(a=ut(t,"interface/3 *")){let o=n.ifc(i,a[0].replace(/\s+/g,""));if(!o)return this.p(`% Invalid interface "${a[0]}". Tersedia: ${i.ifaces.map(l=>l.name).join(", ")}`);this.mode="if",this.cur=o;return}if(a=ut(t,"vlan/1 :id")){if(!s)return this.p("% VLAN database hanya ada di switch.");let o=+a[0];if(!Number.isInteger(o)||o<1||o>4094)return this.p("% Invalid VLAN ID (1-4094)");if(e){if(o===1)return this.p("% Default VLAN 1 may not be deleted.");delete i.vlans[o],this.touch();return}i.vlans[o]||(i.vlans[o]="VLAN"+String(o).padStart(4,"0"),this.touch()),this.mode="vlan",this.cur=o;return}if(a=ut(t,"ip route/1 :net :mask :via")){if(!i.forward)return this.p("% IP routing tidak tersedia di perangkat ini.");let[o,l,c]=a;if(!pe(o)||!(Xe(l)||l==="0.0.0.0")||!pe(c))return this.p("% Invalid input. Format: ip route <network> <mask> <next-hop>   cth: ip route 0.0.0.0 0.0.0.0 10.10.0.2");if(l!=="0.0.0.0"&&lr(o,l)!==o)return this.p("%Inconsistent address and mask");i.routes=i.routes.filter(h=>!(h.net===o&&h.mask===l&&(e||h.via===c))),e||i.routes.push({net:o,mask:l,via:c}),this.touch();return}if(a=ut(t,"ip default-gateway/1 :ip")){if(e)i.gateway="";else if(pe(a[0]))i.gateway=a[0];else return this.p("% Invalid IP address");this.touch();return}if(a=ut(t,"ip name-server/1 :ip")){if(e)i.dns="";else if(pe(a[0]))i.dns=a[0];else return this.p("% Invalid IP address");this.touch();return}if(a=ut(t,"ip dhcp pool/1 :name")){if(s)return this.p("% DHCP server tidak tersedia di switch Layer-2 ini.");if(e){i.pool=null,i.svc.dhcp=!1,this.touch();return}i.pool?i.pool.name=a[0]:i.pool={name:a[0],network:"0.0.0.0",mask:"255.255.255.0",router:"",dns:"",start:"0.0.0.0",end:"0.0.0.0"},i.svc.dhcp=!0,this.mode="dhcp",this.touch();return}if(!(ut(t,"ip dhcp excluded-address/1 *")||ut(t,"ip routing/4")||ut(t,"ip domain-lookup/1")||ut(t,"ip domain-name/8 *")||ut(t,"line/2 *")||ut(t,"enable/2 *")||ut(t,"banner/1 *")||ut(t,"spanning-tree/2 *"))){if(ut(t,"service/3 dhcp")){i.svc.dhcp=!e,this.touch();return}return!1}}iosIf(t,e){let i=this.d,n=this.sim,s=this.cur,a=i.type==="switch",o;if(ut(t,"shutdown/2")){let l=s.up;s.up=!!e,this.touch(),e&&!l?(this.p(`%LINK-3-UPDOWN: Interface ${ci(s.name)}, changed state to ${s._link?"up":"down"}`),s._link?this.p(`%LINEPROTO-5-UPDOWN: Line protocol on Interface ${ci(s.name)}, changed state to up`):this.p("  (i) Admin up, tetapi belum ada sinyal link — cek kabel / port lawan.")):!e&&l&&this.p(`%LINK-5-CHANGED: Interface ${ci(s.name)}, changed state to administratively down`);return}if(o=ut(t,"description/3 *")){s.desc=e?"":o[0];return}if(ut(t,"ip address/3 dhcp")){if(a)return this.p("% IP addresses may not be configured on L2 links.");e?(s.dhcp=!1,this.touch()):n.setDhcpClient(i,s);return}if((o=ut(t,"ip address/3 [:ip] [:mask]"))&&(e||o.length===2)){if(a)return this.p("% IP addresses may not be configured on L2 links.");if(e){n.setIp(i,s,"","");return}if(!pe(o[0])||!Xe(o[1]))return this.p("% Invalid IP address or mask. Format: ip address 192.168.1.1 255.255.255.0");let l=i.ifaces.find(c=>c!==s&&c.ip&&Xe(c.mask)&&gi(c.ip,o[0],c.mask));if(l)return this.p(`% ${lr(o[0],o[1])} overlaps with ${ci(l.name)}`);n.setIp(i,s,o[0],o[1]);return}if(o=ut(t,"ip helper-address/1 [:ip]")){if(!i.forward)return this.p("% Perintah ini hanya untuk interface router.");if(e){s.helper="",this.touch();return}if(!pe(o[0]||""))return this.p("% Format: ip helper-address <ip-dhcp-server>");s.helper=o[0],this.touch();return}if(t[0]&&"switchport".startsWith(t[0].toLowerCase())&&t[0].length>=2){if(!a)return this.p("% Perintah switchport hanya berlaku di switch.");if(o=ut(t,"switchport/2 mode/1 :m")){let l=o[0].toLowerCase();if("access".startsWith(l))s.mode="access";else if("trunk".startsWith(l))s.mode="trunk",s.allowed.length<=1&&(s.allowed=Object.keys(i.vlans).map(Number));else return this.p("% Mode harus access atau trunk");i.mac.clear(),this.touch();return}if(o=ut(t,"switchport/2 access/1 vlan/1 :id")){let l=+o[0];if(!Number.isInteger(l)||l<1||l>4094)return this.p("% Invalid VLAN ID");i.vlans[l]||(i.vlans[l]="VLAN"+String(l).padStart(4,"0"),this.p(`% Access VLAN does not exist. Creating vlan ${l}`)),s.vlan=e?1:l,i.mac.clear(),this.touch();return}if((o=ut(t,"switchport/2 trunk/1 allowed/1 vlan/1 [add] :list"))||(o=ut(t,"switchport/2 trunk/1 allowed/1 vlan/1 :list"))){let l=t.length===6,c=o[o.length-1].toLowerCase(),h=c==="all"?Array.from({length:4094},(d,u)=>u+1).filter(d=>i.vlans[d]):[];if(c!=="all")for(let d of c.split(",")){let u=d.match(/^(\d+)(?:-(\d+))?$/);if(!u)return this.p("% Format: switchport trunk allowed vlan 1,10,20");for(let f=+u[1];f<=+(u[2]||u[1])&&f<=4094;f++)h.push(f)}s.allowed=[...new Set(l?[...s.allowed,...h]:h)].sort((d,u)=>d-u),i.mac.clear(),this.touch();return}if(o=ut(t,"switchport/2 trunk/1 native/1 vlan/1 :id")){s.native=e?1:+o[0]||1,this.touch();return}return ut(t,"switchport/2 trunk/1 encapsulation/1 :x")||ut(t,"switchport/2 nonegotiate/2")||ut(t,"switchport/2")?void 0:this.p("% Perintah switchport tidak dikenal. cth: switchport mode trunk | switchport access vlan 10 | switchport trunk allowed vlan 1,10,20")}if(!(ut(t,"speed/2 :x")||ut(t,"duplex/2 :x")))return!1}iosVlan(t,e){let i=ut(t,"name/1 *");if(!i)return!1;this.d.vlans[this.cur]=e?"VLAN"+String(this.cur).padStart(4,"0"):i[0].replace(/\s+/g,"_").slice(0,30),this.touch()}iosDhcp(t,e){let i=this.d,n=i.pool,s;if(!n)return!1;if(s=ut(t,"network/1 :net [:mask]")){let a=s[1]||"255.255.255.0";if(!pe(s[0])||!Xe(a))return this.p("% Invalid network or mask");n.network=lr(s[0],a),n.mask=a;let o=oi(n.network),l=~oi(a)>>>0;n.start=or(o+Math.min(100,Math.max(2,l>>1))),n.end=or(o+Math.min(200,l-1)),this.touch();return}if(s=ut(t,"default-router/2 :ip")){if(!pe(s[0]))return this.p("% Invalid IP");n.router=s[0],this.touch();return}if(s=ut(t,"dns-server/2 :ip")){if(!pe(s[0]))return this.p("% Invalid IP");n.dns=s[0],this.touch();return}if(!(ut(t,"lease/1 *")||ut(t,"domain-name/2 *")))return!1}};var Jt=[0,4],ps=["Lantai 11","Lantai 12"],ne={minX:-16,maxX:-9,minZ:7,maxZ:11,x0:-10.4,x1:-14.4,midZ:9};var hi={x:-1.5,z0:-11.6,z1:4,h:.3,riserX:-2,riserZ:-11.5},ve={x:-9,z:-10.2,top:.78,level:1},vi=[{id:"lobby",level:0,name:"Lobi & Resepsionis",short:"Lobi",b:[-9,9,4,14],color:"#38bdf8"},{id:"corridor0",level:0,name:"Koridor Lantai 11",short:"Koridor",b:[-2,2,-12,4],color:"#0ea5e9"},{id:"office",level:0,name:"Kantor Engineering",short:"Kantor",b:[-16,-2,-12,4],color:"#60a5fa"},{id:"briefing",level:0,name:"Ruang Briefing",short:"Briefing",b:[2,16,-4,4],color:"#818cf8"},{id:"pantry",level:0,name:"Pantry",short:"Pantry",b:[2,16,-12,-4],color:"#94a3b8"},{id:"foyer",level:1,name:"Foyer Network Operations",short:"Foyer",b:[-9,9,4,14],color:"#38bdf8"},{id:"corridor1",level:1,name:"Koridor Lantai 12",short:"Koridor",b:[-2,2,-12,4],color:"#0ea5e9"},{id:"lab",level:1,name:"Laboratorium Jaringan",short:"Net Lab",b:[-16,-2,-4,4],color:"#22d3ee"},{id:"config",level:1,name:"Ruang Konfigurasi",short:"Config",b:[2,16,-4,4],color:"#2dd4bf"},{id:"noc",level:1,name:"Ruang Troubleshooting / NOC",short:"NOC",b:[-16,-2,-12,-4],color:"#f59e0b"},{id:"server",level:1,name:"Ruang Server (Data Center)",short:"Server",b:[2,16,-12,-4],color:"#10b981"},{id:"stair",level:-1,name:"Tangga Darurat",short:"Tangga",b:[-16,-9,7,11],color:"#a3a3a3"}];function cf(r,t,e){if(r>=ne.minX&&r<=ne.maxX&&t>=ne.minZ&&t<=ne.maxZ)return vi[vi.length-1];for(let i of vi)if(i.level===e&&r>=i.b[0]&&r<=i.b[1]&&t>=i.b[2]&&t<=i.b[3])return i;return vi.find(i=>i.level===e&&i.id.startsWith("corridor"))}var Ea=[{id:"hand",name:"Tangan",short:"Interaksi",role:"Buka pintu, bicara, buka konsol perangkat",key:1},{id:"cable",name:"Kabel UTP Cat6",short:"Kabel UTP",role:"Colok kabel dari port ke port",key:2,count:!0},{id:"tester",name:"LAN Tester Digital",short:"LAN Tester",role:"Uji kontinuitas 8 pin kabel",key:3},{id:"crimper",name:"Tang Crimping + RJ45",short:"Crimping",role:"Buat kabel baru (urutan T568B)",key:4,count:!0},{id:"laptop",name:"Laptop NetScope",short:"NetScope",role:"Packet sniffer, topologi & log",key:5}],Ph=r=>r.toString(16).padStart(2,"0"),Ta=0,pv={pc:"f8:bc:12",server:"3c:ec:ef",switch:"00:1b:54",router:"00:1b:54",firewall:"70:4c:a5",ap:"b4:fb:e4",walljack:"00:00:00"};function Be(r,t,e={}){return Ta++,{name:t,mac:`${pv[r]}:${Ph(Ta>>8&255)}:${Ph(Ta&255)}:${Ph(Ta*37+17&255)}`,up:!0,ip:"",mask:"",dhcp:!1,mode:r==="switch"?"access":"routed",vlan:1,allowed:[1],native:1,helper:"",desc:"",...e}}function xi(r,t,e,i,n,s,a,o,l,c={}){return{id:t,type:r,name:e,label:i,room:n,level:s,pos:a,rot:o,ifaces:l,vlans:{1:"default"},gateway:"",dns:"",routes:[],svc:{dhcp:!1,dns:!1,http:!1},dnsRecords:{},...c}}var wn=(r,t,e,i,n,s,a,o,l,c,h,d)=>xi("pc",r,t,e,i,n,s,a,[Be("pc","eth0",{ip:o,mask:l,dhcp:!o&&o!==null})],{gateway:c||"",dns:h||"",...d}),Ma=(r,t={})=>r.map(e=>Be("switch",e,t[e]||{})),Jl=["Fa0/1","Fa0/2","Fa0/3","Fa0/4","Fa0/5","Fa0/6","Fa0/7","Fa0/8","Gi0/1","Gi0/2"],mv=["Gi0/1","Gi0/2","Gi0/3","Gi0/4","Gi0/5","Gi0/6","Gi0/7","Gi0/8"],Si="255.255.255.0",wa="255.255.255.252",ze=Math.PI;function hf(){Ta=0;let r={vlan:10},t={vlan:20};return[wn("pc-lab-01","PC-LAB-01","Workstation Klien Lab","lab",1,[-11,4.74,3.45],ze,"10.0.0.10",Si,"10.0.0.1","",{notes:"Workstation latihan. Hubungkan eth0 ke SW-LAB-01 lalu uji konektivitas."}),xi("switch","sw-lab-01","SW-LAB-01","Switch Managed Lab (8FE+2GE)","lab",1,[-8,4.9,-3.45],0,Ma(Jl,{"Gi0/1":{mode:"trunk",allowed:[1,10,20]}}),{notes:"Switch Layer-2. Fa0/x untuk workstation, Gi0/1 uplink ke router."}),xi("router","r-lab-01","R-LAB-01","Router Edge Lab","lab",1,[-10.6,4.9,-3.45],0,[Be("router","Gi0/0",{ip:"10.0.0.1",mask:Si,up:!1}),Be("router","Gi0/1"),Be("router","Gi0/2")],{loopbacks:[{name:"Lo0",ip:"172.16.1.1",mask:"255.255.255.255"}],notes:'Gi0/0 berstatus administratively down. Nyalakan dengan "no shutdown".'}),xi("ap","ap-lab-01","AP-LAB-01","Access Point Wi-Fi 6 Lab","lab",1,[-5.2,6.25,3.86],ze,[Be("ap","eth0",{ip:"10.0.0.20",mask:Si})],{gateway:"10.0.0.1",notes:"Opsional: sambungkan ke SW-LAB-01 lalu ping dari PC-LAB-01."}),xi("switch","sw-cfg-01","SW-CFG-01","Switch Access Config","config",1,[7,4.9,-3.45],0,Ma(Jl),{notes:"Buat VLAN 10 & 20, Fa0/1→VLAN 10, Fa0/2→VLAN 20, Gi0/1 jadi trunk."}),xi("switch","sw-cfg-02","SW-CFG-02","Switch Distribusi Config","config",1,[11,4.9,-3.45],0,Ma(Jl,{"Gi0/1":{mode:"trunk",allowed:[1,10,20]},"Fa0/1":r,"Fa0/2":t}),{vlans:{1:"default",10:"STAFF",20:"SERVERS"}}),wn("pc-cfg-10","PC-CFG-10","Host VLAN 10 (Engineering A)","config",1,[5.2,4.74,3.45],ze,"192.168.10.31",Si,"192.168.10.1"),wn("pc-cfg-20","PC-CFG-20","Host VLAN 20 (Server A)","config",1,[7.9,4.74,3.45],ze,"192.168.20.31",Si,"192.168.20.1"),wn("pc-cfg-11","PC-CFG-11","Host VLAN 10 (Engineering B)","config",1,[10.6,4.74,3.45],ze,"192.168.10.32",Si,"192.168.10.1"),wn("pc-cfg-21","PC-CFG-21","Host VLAN 20 (Server B)","config",1,[13.3,4.74,3.45],ze,"192.168.20.32",Si,"192.168.20.1"),xi("server","srv-main-01","SRV-MAIN-01","Server DHCP & DNS Inti","server",1,[8.2,5.2,-10.32],0,[Be("server","eth0",{ip:"192.168.20.10",mask:Si})],{gateway:"192.168.20.1",dns:"192.168.20.10",svc:{dhcp:!1,dns:!1,http:!0},pool:{name:"CORP_LAN",network:"192.168.10.0",mask:Si,router:"192.168.10.1",dns:"192.168.20.10",start:"192.168.10.100",end:"192.168.10.200"},dnsRecords:{"srv.netrunner.local":"192.168.20.10","gateway.netrunner.local":"192.168.10.1","intranet.netrunner.local":"192.168.20.10","dns.google":"8.8.8.8"},notes:"Node layanan utama. Aktifkan DHCP dan DNS untuk melayani host kantor."}),xi("router","r-core-01","R-CORE-01","Router Inti Gedung","server",1,[6.6,5.35,-10.28],0,[Be("router","Gi0/0",{ip:"192.168.10.1",mask:Si,desc:"LAN STAFF (VLAN 10)"}),Be("router","Gi0/1",{ip:"192.168.20.1",mask:Si,desc:"LAN SERVERS (VLAN 20)"}),Be("router","Gi0/2",{ip:"10.10.0.1",mask:wa,desc:"Transit ke FW-EDGE-01"})],{notes:"Gateway antar-VLAN. Gi0/0=STAFF, Gi0/1=SERVERS, Gi0/2=transit firewall."}),xi("switch","sw-core-01","SW-CORE-01","Switch Agregasi Inti","server",1,[7.4,5.35,-10.28],0,Ma(mv,{"Gi0/1":t,"Gi0/2":t}),{vlans:{1:"default",10:"STAFF",20:"SERVERS"}}),xi("firewall","fw-edge-01","FW-EDGE-01","Firewall Perimeter","server",1,[6.6,4.85,-10.28],0,[Be("firewall","Gi0/0",{ip:"10.10.0.2",mask:wa,desc:"INSIDE"}),Be("firewall","Gi0/1",{ip:"203.0.113.2",mask:wa,up:!1,desc:"OUTSIDE (ISP)"})],{notes:"Gi0/1 (WAN) masih shutdown dan belum ada rute. Lihat Level 6."}),xi("router","isp-gw-01","ISP-GW-01","Router ISP (Demarkasi Internet)","server",1,[5,5.35,-10.28],0,[Be("router","Gi0/0",{ip:"203.0.113.1",mask:wa})],{locked:!0,loopbacks:[{name:"Lo0",ip:"8.8.8.8",mask:"255.255.255.255"},{name:"Lo1",ip:"1.1.1.1",mask:"255.255.255.255"}],routes:[{net:"192.168.0.0",mask:"255.255.0.0",via:"203.0.113.2"},{net:"10.10.0.0",mask:wa,via:"203.0.113.2"}],notes:"Perangkat milik ISP — hanya bisa dilihat."}),xi("switch","sw-dist-01","SW-DIST-01","Switch Distribusi Kantor","noc",1,[-2.72,5.3,-10.5],-ze/2,Ma(Jl,{"Fa0/1":{vlan:10,up:!1,desc:"Meja Rina (WJ-OFC-01)"},"Fa0/2":{...r,desc:"WJ-OFC-02"},"Fa0/3":{...r,desc:"DIAG-WS-01"},"Fa0/4":{...r,desc:"WJ-BRF-01"},"Fa0/5":r,"Fa0/6":r,"Fa0/7":r,"Fa0/8":r,"Gi0/1":{...r,desc:"Uplink R-CORE-01 Gi0/0"}}),{vlans:{1:"default",10:"STAFF",20:"SERVERS"},notes:"Switch uplink meja kantor Lantai 11. Periksa status port Fa0/1."}),wn("diag-ws-01","DIAG-WS-01","Konsol Diagnostik & Monitoring","noc",1,[-10,4.74,-6.4],ze,"192.168.10.99",Si,"192.168.10.1","192.168.20.10",{monitor:[{ip:"192.168.10.1",name:"R-CORE-01 · gateway STAFF"},{ip:"192.168.20.10",name:"SRV-MAIN-01 · DHCP/DNS"},{ip:"192.168.10.25",name:"PC-OFFICE-01 · meja Rina"},{ip:"8.8.8.8",name:"Internet · 8.8.8.8"}]}),wn("pc-office-01","PC-OFFICE-01","PC Meja Pelanggan (Rina)","office",0,[-12,.74,3.45],ze,"192.168.10.25",Si,"192.168.99.1","192.168.99.99",{notes:"Tiket #404: tidak bisa membuka srv.netrunner.local. Periksa link, gateway (192.168.10.1), DNS (192.168.20.10)."}),wn("pc-office-02","PC-OFFICE-02","Workstation Engineer 02","office",0,[-7,.74,3.45],ze,"","","","",{notes:"Dikonfigurasi sebagai DHCP client di LAN kantor."}),wn("noc-brief-01","NOC-BRIEF-01","Terminal Topologi Briefing","briefing",0,[5,.74,3.45],ze,"192.168.10.5",Si,"192.168.10.1","192.168.20.10"),xi("walljack","wj-ofc-01","WJ-OFC-01","Outlet Dinding D-01","office",0,[-10.8,.35,3.89],ze,[Be("walljack","front"),Be("walljack","back")]),xi("walljack","wj-ofc-02","WJ-OFC-02","Outlet Dinding D-02","office",0,[-5.8,.35,3.89],ze,[Be("walljack","front"),Be("walljack","back")]),xi("walljack","wj-brf-01","WJ-BRF-01","Outlet Dinding B-01","briefing",0,[6.2,.35,3.89],ze,[Be("walljack","front"),Be("walljack","back")])]}function uf(){let r=(t,e,i,n,s,a={})=>({id:t,a:{dev:e,port:i},b:{dev:n,port:s},fixed:!1,fault:null,...a});return[r("cab-cfg-1","pc-cfg-10","eth0","sw-cfg-01","Fa0/1"),r("cab-cfg-2","pc-cfg-20","eth0","sw-cfg-01","Fa0/2"),r("cab-cfg-trunk","sw-cfg-01","Gi0/1","sw-cfg-02","Gi0/1",{color:"yellow"}),r("cab-cfg-3","pc-cfg-11","eth0","sw-cfg-02","Fa0/1"),r("cab-cfg-4","pc-cfg-21","eth0","sw-cfg-02","Fa0/2"),r("cab-srv-core","srv-main-01","eth0","sw-core-01","Gi0/1",{color:"green"}),r("cab-rcore-swcore","r-core-01","Gi0/1","sw-core-01","Gi0/2",{color:"yellow"}),r("cab-rcore-dist","r-core-01","Gi0/0","sw-dist-01","Gi0/1",{fixed:!0,color:"orange"}),r("cab-fw-rcore","fw-edge-01","Gi0/0","r-core-01","Gi0/2",{color:"red"}),r("cab-fw-isp","fw-edge-01","Gi0/1","isp-gw-01","Gi0/0",{fixed:!0,color:"white"}),r("cab-office-1","pc-office-01","eth0","wj-ofc-01","front",{fault:"open",color:"gray"}),r("cab-wall-1","wj-ofc-01","back","sw-dist-01","Fa0/1",{fixed:!0,color:"wall"}),r("cab-office-2","pc-office-02","eth0","wj-ofc-02","front"),r("cab-wall-2","wj-ofc-02","back","sw-dist-01","Fa0/2",{fixed:!0,color:"wall"}),r("cab-diag","diag-ws-01","eth0","sw-dist-01","Fa0/3"),r("cab-brief","noc-brief-01","eth0","wj-brf-01","front"),r("cab-wall-3","wj-brf-01","back","sw-dist-01","Fa0/4",{fixed:!0,color:"wall"})]}function df(){return[{id:"pk-lab-utp",kind:"cable",give:{cable:3},level:1,pos:[-6.5,4.92,-3.4],label:"Kabel Patch Cat6 (x3)"},{id:"pk-lab-crimp",kind:"crimper",give:{crimper:1,rj45:8},level:1,pos:[-12.2,4.92,-3.4],label:"Tang Crimping + RJ45 (x8)"},{id:"pk-noc-tester",kind:"tester",give:{tester:1},level:1,pos:[-6,4.76,-6.4],label:"LAN Tester Digital"},{id:"pk-cfg-utp",kind:"cable",give:{cable:2},level:1,pos:[3.4,4.78,-2.6],label:"Kabel Patch Cat6 (x2)"},{id:"pk-srv-utp",kind:"cable",give:{cable:2},level:1,pos:[3.6,4.95,-6.2],label:"Kabel Cat6A Shielded (x2)"}].map(r=>({...r,taken:!1}))}function ff(){return[{id:"npc-receptionist",name:"Elena Vance",role:"Resepsionis Gedung",level:0,pos:[4.5,0,7.5],rot:0,shirt:"#1e3a5f",skin:"#e8b998",hair:"#3b2416",greeting:"Selamat datang di NetRunner HQ! Ruang Briefing ada di kanan koridor lantai ini. Lab, NOC, dan Ruang Server ada di Lantai 12 — naik lewat lift di kanan Anda atau tangga darurat di kiri.",options:[{q:"Di mana saja ruang-ruang teknisnya?",a:"Lantai 11: Kantor Engineering (kiri koridor), Ruang Briefing & Pantry (kanan). Lantai 12: Laboratorium Jaringan & NOC di sayap barat, Ruang Konfigurasi & Ruang Server di sayap timur."},{q:"Ada tips untuk shift pertama saya?",a:'Ambil kabel Cat6 di meja Lab. Tekan [E] pada router, switch, atau PC untuk membuka konsolnya. Tekan [V] untuk "Visi Jaringan" — Anda bisa melihat paket data berjalan di dalam kabel, bahkan menembus dinding.'}]},{id:"npc-supervisor",name:"Direktur Aris Pratama",role:"Supervisor Operasi TI",level:0,pos:[13,0,0],rot:-ze/2,shirt:"#3f3f46",skin:"#c9966b",hair:"#1c1917",greeting:"Tepat waktu, Engineer. Infrastruktur gedung ini harus dikomisioning penuh dalam enam tahap — dari kabel lab sampai uplink internet.",options:[{q:"Apa saja target prioritas kita?",a:"Mulai di Lab: sambungkan PC-LAB-01 → SW-LAB-01 → R-LAB-01. Lalu pindahkan ke subnet 192.168.1.0/24, pisahkan VLAN 10 & 20 di Ruang Konfigurasi, hidupkan DHCP/DNS di Ruang Server, selesaikan tiket Rina, dan terakhir buka jalur internet lewat firewall."},{q:'Jaringan di sini benar-benar "hidup"?',a:"Ya. Setiap frame benar-benar berjalan hop demi hop: ARP, tabel MAC switch, tag VLAN 802.1Q, TTL router. Kalau ping pertama lewat router gagal lalu sisanya berhasil — itu normal, router sedang menunggu ARP."}]},{id:"npc-engineer",name:"Marcus Chen",role:"Network Engineer",level:0,pos:[-8.6,0,1.2],rot:ze/2,shirt:"#14532d",skin:"#e0b48a",hair:"#0a0a0a",greeting:"Hei! Saya sedang audit workstation kantor. PC-OFFICE-01 di meja Rina kehilangan koneksi ke srv.netrunner.local — sepertinya gangguan berlapis: fisik, switch, dan IP.",options:[{q:"Apa yang sudah Anda pastikan?",a:"Patch cord meja Rina masuk ke outlet dinding D-01, yang di balik dinding tersambung permanen ke SW-DIST-01 port Fa0/1 di ruang NOC Lantai 12. Gateway yang benar 192.168.10.1 (R-CORE-01), DNS 192.168.20.10 (SRV-MAIN-01)."},{q:"Bagaimana cara cek kabelnya?",a:'Ambil LAN Tester di ruang NOC, pilih alat [3], lalu [E] ke PC-nya. Kalau ada pin yang OPEN, cabut kabelnya dari tab "Port & Kabel" dan pasang kabel baru dari PC ke outlet dinding.'}]},{id:"npc-customer",name:"Rina Wijaya",role:"Staf Operasional (Pelanggan)",level:0,pos:[-13.5,0,2.5],rot:ze/2,shirt:"#9a3412",skin:"#d9a57c",hair:"#27130a",greeting:"Halo! PC saya (PC-OFFICE-01) sama sekali tidak bisa membuka srv.netrunner.local. Semua ping timeout dan lampu link di belakang PC mati.",options:[{q:"Saya periksa link, port switch, dan pengaturan IP-nya sekarang.",a:"Terima kasih! Kalau PC-OFFICE-01 sudah bisa ping srv.netrunner.local, berarti beres.",action:"ticket"}]},{id:"npc-senior",name:"Dr. Nadia Kusuma",role:"Senior Network Architect",level:1,pos:[9,4,-.4],rot:-ze/2,shirt:"#134e4a",skin:"#dcae86",hair:"#111827",greeting:"Presisi itu penting di segmentasi Layer-2. Di SW-CFG-01, pastikan VLAN 10 dan 20 sudah ada di database sebelum memasang port access dan menjadikan Gi0/1 trunk.",options:[{q:"Ingatkan saya perintah IOS untuk VLAN & trunk.",a:"enable → conf t → vlan 10 → name STAFF → vlan 20 → name SERVERS → int fa0/1 → switchport access vlan 10 → int fa0/2 → switchport access vlan 20 → int gi0/1 → switchport mode trunk → switchport trunk allowed vlan 1,10,20. Verifikasi: show vlan brief & show interfaces trunk."},{q:"Bagaimana membuktikan hasilnya?",a:"Dari PC-CFG-10 ping 192.168.10.32 (PC-CFG-11 di switch seberang, sama-sama VLAN 10). Dari PC-CFG-20 ping 192.168.20.32. Frame akan diberi tag 802.1Q saat melewati trunk — lihat di NetScope."}]},{id:"npc-dc",name:"Bayu Santoso",role:"Teknisi Data Center",level:1,pos:[11.2,4,-7.8],rot:-ze/2,shirt:"#1f2937",skin:"#b98a63",hair:"#0f0f0f",greeting:"Dingin ya di sini? SRV-MAIN-01 ada di rak ketiga. DHCP dan DNS-nya masih mati — tolong hidupkan.",options:[{q:"Kenapa klien VLAN 10 butuh DHCP relay?",a:"DHCP Discover itu broadcast, dan broadcast tidak melewati router. Server ada di VLAN 20, klien di VLAN 10. Jadi di R-CORE-01: conf t → int gi0/0 → ip helper-address 192.168.20.10. Router akan meneruskan Discover sebagai unicast ke server."},{q:"Bagaimana membuka jalur internet (Level 6)?",a:"Tiga hal: (1) FW-EDGE-01: int gi0/1 → no shutdown. (2) R-CORE-01: ip route 0.0.0.0 0.0.0.0 10.10.0.2. (3) FW-EDGE-01: ip route 0.0.0.0 0.0.0.0 203.0.113.1 dan rute balik ip route 192.168.0.0 255.255.0.0 10.10.0.1. Tanpa rute balik, reply tidak pernah pulang."}]}].map(r=>({...r,talked:!1}))}function pf(){return[{id:"door-office",label:"Kantor Engineering",level:0,x:-2,z:0,axis:"z",kind:"wood",no:"11-01"},{id:"door-briefing",label:"Ruang Briefing",level:0,x:2,z:0,axis:"z",kind:"wood",no:"11-02"},{id:"door-stair0",label:"Tangga Darurat",level:0,x:-9,z:9,axis:"z",kind:"fire",no:"T"},{id:"door-stair1",label:"Tangga Darurat",level:1,x:-9,z:9,axis:"z",kind:"fire",no:"T"},{id:"door-lab",label:"Laboratorium Jaringan",level:1,x:-2,z:0,axis:"z",kind:"glass",no:"12-01"},{id:"door-config",label:"Ruang Konfigurasi",level:1,x:2,z:0,axis:"z",kind:"glass",no:"12-02"},{id:"door-noc",label:"Troubleshooting / NOC",level:1,x:-2,z:-8,axis:"z",kind:"glass",no:"12-03"},{id:"door-server",label:"Ruang Server",level:1,x:2,z:-8,axis:"z",kind:"security",no:"12-04"}].map(r=>({w:1,open:!1,...r}))}var mf=["Teknisi Kabel Junior","Teknisi Jaringan","Administrator Sistem","Infrastructure Engineer","Senior NetRunner Architect","Principal NOC Director","Grandmaster NetRunner"],Aa=[0,200,500,900,1400,2100,3e3];function hr(r){let t=1;for(let s=1;s<Aa.length&&r>=Aa[s];s++)t=s+1;let e=Aa[t-1],i=t>=Aa.length,n=i?e+1:Aa[t];return{level:t,cur:i?1:r-e,need:n-e,title:mf[Math.min(t-1,mf.length-1)]}}function Ih(r,t){let e=Ft=>r.dev(Ft),i=(Ft,Me)=>r.ifc(e(Ft),Me),n=(Ft,Me,F)=>{let qe=r.path(Ft,Me);return!!(qe.end&&qe.end.dev===F)},s=(Ft,Me)=>Ft.some(F=>e(F).pingOk.includes(Me)),a="255.255.255.0",o=e("pc-lab-01"),l=e("r-lab-01"),c=i("r-lab-01","Gi0/0"),h=o.ifaces[0],d=n("pc-lab-01","eth0","sw-lab-01"),u=t.taken.includes("pk-lab-utp")||d,f=n("r-lab-01","Gi0/0","sw-lab-01"),m=c.up,x=o.pingOk.includes("10.0.0.1")||!!c.ip&&o.pingOk.includes(c.ip),p=c.up&&c.ip==="192.168.1.1"&&c.mask===a,g=!!h.ip&&h.ip!=="192.168.1.1"&&h.mask===a&&gi(h.ip,"192.168.1.1",a),v=o.gateway==="192.168.1.1",w=p&&g&&o.pingOk.includes("192.168.1.1"),b=v&&o.pingOk.includes("172.16.1.1"),E=e("sw-cfg-01"),T=i("sw-cfg-01","Fa0/1"),_=i("sw-cfg-01","Fa0/2"),M=i("sw-cfg-01","Gi0/1"),D=!!(E.vlans[10]&&E.vlans[20]),C=T.mode==="access"&&T.vlan===10&&_.mode==="access"&&_.vlan===20,N=M.mode==="trunk"&&M.allowed.includes(10)&&M.allowed.includes(20),U=D&&C&&N&&e("pc-cfg-10").pingOk.includes("192.168.10.32"),H=D&&C&&N&&e("pc-cfg-20").pingOk.includes("192.168.20.32"),I=e("srv-main-01"),V=e("pc-office-02").ifaces[0],X=!!I.svc.dhcp,W=!!I.svc.dns,it=e("r-core-01").ifaces.some(Ft=>Ft.helper==="192.168.20.10"&&Ft.ip&&gi(Ft.ip,"192.168.10.1",a)),q=X&&!!V.ip&&V.ip.startsWith("192.168.10.")&&!!(V._dhcp&&V._dhcp.state==="BOUND"),tt=["diag-ws-01","noc-brief-01","pc-office-01","pc-office-02"],et=W&&(s(tt,"srv.netrunner.local")||s(tt,"ns:srv.netrunner.local")),St=e("pc-office-01"),kt=r.path("pc-office-01","eth0"),J=t.talked.includes("npc-customer"),gt=!!(kt.end&&!kt.fault&&r.dev(kt.end.dev).type==="switch"),bt=kt.end?r.ifc(r.dev(kt.end.dev),kt.end.port):i("sw-dist-01","Fa0/1"),It=!!(bt&&bt.up)&&i("sw-dist-01","Fa0/1").up,xt=St.gateway==="192.168.10.1"&&St.dns==="192.168.20.10",Vt=gt&&It&&xt&&St.pingOk.includes("srv.netrunner.local"),Se=e("fw-edge-01"),Nt=e("r-core-01"),oe=i("fw-edge-01","Gi0/1").up,he=Nt.routes.some(Ft=>Ft.mask==="0.0.0.0"&&Ft.via==="10.10.0.2"),Zt=Se.routes.some(Ft=>Ft.mask==="0.0.0.0"&&Ft.via==="203.0.113.1"),De=Se.routes.some(Ft=>Ft.via==="10.10.0.1"&&Ft.mask!=="0.0.0.0"&&gi(Ft.net,"192.168.10.0",Ft.mask)),Ae=s(tt,"8.8.8.8"),je=tt.some(Ft=>e(Ft).traceOk.includes("8.8.8.8")),Pt=(Ft,Me,F,qe)=>({id:Ft,text:Me,done:!!F,hint:qe}),Qe=[{id:"m1",n:1,title:"Level 1 — Jaringan Dasar",sub:"Kabel Fisik & Mengaktifkan Interface",xp:200,room:"lab",brief:"Naik ke Laboratorium Jaringan di Lantai 12. Ambil kabel UTP di meja kerja, sambungkan PC-LAB-01 → SW-LAB-01 → R-LAB-01, nyalakan Gi0/0, lalu uji dengan ping.",obj:[Pt("l1a","Ambil kabel patch Cat6 di meja Lab",u,"Cari gulungan kabel biru di meja kerja Lab (dinding utara), lalu tekan [E]."),Pt("l1b","Sambungkan PC-LAB-01 (eth0) ke SW-LAB-01",d,"Pilih alat Kabel UTP [2], [E] ke PC-LAB-01 → pilih eth0, jalan ke SW-LAB-01, [E] → pilih Fa0/1."),Pt("l1c","Sambungkan SW-LAB-01 ke R-LAB-01 port Gi0/0",f,"Dengan alat Kabel [2]: SW-LAB-01 Gi0/1 → R-LAB-01 Gi0/0."),Pt("l1d","Aktifkan interface Gi0/0 di R-LAB-01 (no shutdown)",m,"Buka konsol R-LAB-01: enable → conf t → int gi0/0 → no shutdown."),Pt("l1e","Ping 10.0.0.1 dari PC-LAB-01",x,"Buka PC-LAB-01, di Command Prompt ketik: ping 10.0.0.1")]},{id:"m2",n:2,title:"Level 2 — Konfigurasi IP",sub:"Subnetting & Default Gateway",xp:300,room:"lab",brief:"Pindahkan LAN Lab ke subnet 192.168.1.0/24. Atur R-LAB-01 dan PC-LAB-01 dengan subnet mask dan gateway yang cocok, lalu buktikan gateway bekerja dengan menjangkau jaringan di balik router.",obj:[Pt("l2a","Set R-LAB-01 Gi0/0 ke 192.168.1.1 / 255.255.255.0",p,"R-LAB-01: conf t → int gi0/0 → ip address 192.168.1.1 255.255.255.0"),Pt("l2b","Beri PC-LAB-01 IP di 192.168.1.0/24 (cth. 192.168.1.10)",g,"PC-LAB-01 → tab Konfigurasi → IP 192.168.1.10, mask 255.255.255.0."),Pt("l2c","Set Default Gateway PC-LAB-01 ke 192.168.1.1",v,"Isi kolom Default Gateway di tab Konfigurasi, atau: ip default-gateway 192.168.1.1"),Pt("l2d","Ping 192.168.1.1 dari PC-LAB-01",w,"Command Prompt PC-LAB-01: ping 192.168.1.1"),Pt("l2e","Ping 172.16.1.1 (Loopback di balik router) — bukti gateway bekerja",b,"172.16.1.1 berada di luar subnet PC, jadi paket dikirim ke gateway. Ketik: ping 172.16.1.1")]},{id:"m3",n:3,title:"Level 3 — Manajemen VLAN",sub:"Segmentasi 802.1Q Access & Trunk",xp:400,room:"config",brief:"Masuk ke Ruang Konfigurasi. Pecah SW-CFG-01 menjadi VLAN 10 (STAFF) dan VLAN 20 (SERVERS), pasang port access, dan aktifkan trunk 802.1Q di Gi0/1 menuju SW-CFG-02.",obj:[Pt("l3a","Buat VLAN 10 dan VLAN 20 di SW-CFG-01",D,"SW-CFG-01: enable → conf t → vlan 10 → name STAFF → vlan 20 → name SERVERS"),Pt("l3b","Fa0/1 → VLAN 10 dan Fa0/2 → VLAN 20",C,"int fa0/1 → switchport access vlan 10 → int fa0/2 → switchport access vlan 20"),Pt("l3c","Jadikan Gi0/1 trunk yang mengizinkan VLAN 10 & 20",N,"int gi0/1 → switchport mode trunk → switchport trunk allowed vlan 1,10,20"),Pt("l3d","Dari PC-CFG-10 ping 192.168.10.32 (VLAN 10 lintas trunk)",U,"PC-CFG-11 ada di switch seberang. Frame akan diberi tag VLAN 10 saat melewati trunk."),Pt("l3e","Dari PC-CFG-20 ping 192.168.20.32 (VLAN 20 lintas trunk)",H,"Buka PC-CFG-20 lalu: ping 192.168.20.32")]},{id:"m4",n:4,title:"Level 4 — Manajemen Server",sub:"Komisioning DHCP, DNS & DHCP Relay",xp:500,room:"server",brief:"Menuju Ruang Server. Aktifkan DHCP dan DNS di SRV-MAIN-01. Karena klien kantor berada di VLAN lain, pasang DHCP relay (ip helper-address) di R-CORE-01 agar Discover sampai ke server.",obj:[Pt("l4a","Aktifkan layanan DHCP di SRV-MAIN-01",X,"SRV-MAIN-01: systemctl start dhcpd  (atau tab Konfigurasi → Layanan)."),Pt("l4b","Aktifkan layanan DNS di SRV-MAIN-01",W,"SRV-MAIN-01: systemctl start named"),Pt("l4c","Pasang DHCP relay di R-CORE-01 Gi0/0 → 192.168.20.10",it,"R-CORE-01: enable → conf t → int gi0/0 → ip helper-address 192.168.20.10"),Pt("l4d","PC-OFFICE-02 menerima lease 192.168.10.x",q,"Klien mencoba ulang otomatis tiap beberapa detik, atau di PC-OFFICE-02 jalankan: ipconfig /renew"),Pt("l4e","Resolve srv.netrunner.local dari DIAG-WS-01 (ping / nslookup)",et,"DIAG-WS-01 di ruang NOC: ping srv.netrunner.local")]},{id:"m5",n:5,title:"Level 5 — Troubleshooting",sub:"Tiket Gangguan #404",xp:700,room:"office",brief:"Rina Wijaya di Kantor Engineering (Lantai 11) melaporkan PC-OFFICE-01 tidak bisa membuka srv.netrunner.local. Diagnosa dari Layer 1 ke atas: kabel, port switch, IP, lalu DNS.",obj:[Pt("l5a","Bicara dengan Rina Wijaya di Kantor",J,"Turun ke Lantai 11, masuk Kantor Engineering (kiri koridor), [E] di dekat Rina."),Pt("l5b","Uji & ganti patch cord PC-OFFICE-01 yang rusak",gt,"LAN Tester [3] → [E] ke PC-OFFICE-01. Cabut kabel rusak (tab Port & Kabel), lalu pasang kabel baru PC eth0 → outlet dinding WJ-OFC-01."),Pt("l5c","Nyalakan kembali port Fa0/1 di SW-DIST-01",It,"Ruang NOC Lantai 12 → SW-DIST-01: enable → conf t → int fa0/1 → no shutdown"),Pt("l5d","Perbaiki Gateway (192.168.10.1) & DNS (192.168.20.10) PC-OFFICE-01",xt,"PC-OFFICE-01 → tab Konfigurasi. Gateway & DNS saat ini salah (192.168.99.x)."),Pt("l5e","Verifikasi akhir: ping srv.netrunner.local dari PC-OFFICE-01",Vt,"Command Prompt PC-OFFICE-01: ping srv.netrunner.local  (butuh DNS dari Level 4).")]},{id:"m6",n:6,title:"Level 6 — Routing & Internet Edge",sub:"Rute Statis, Default Route & Traceroute",xp:800,room:"server",brief:"Buka jalur internet gedung. Nyalakan interface WAN firewall, pasang default route di router inti, dan pastikan firewall punya rute balik ke LAN — tanpa itu reply tidak akan pernah pulang.",obj:[Pt("l6a","Nyalakan interface WAN FW-EDGE-01 Gi0/1",oe,"FW-EDGE-01: enable → conf t → int gi0/1 → no shutdown"),Pt("l6b","Default route R-CORE-01 → 10.10.0.2",he,"R-CORE-01: conf t → ip route 0.0.0.0 0.0.0.0 10.10.0.2"),Pt("l6c","Default route FW-EDGE-01 → 203.0.113.1 (ISP)",Zt,"FW-EDGE-01: conf t → ip route 0.0.0.0 0.0.0.0 203.0.113.1"),Pt("l6d","Rute balik FW-EDGE-01 ke LAN 192.168.0.0/16 via 10.10.0.1",De,"FW-EDGE-01: ip route 192.168.0.0 255.255.0.0 10.10.0.1"),Pt("l6e","Ping 8.8.8.8 dari PC kantor mana pun",Ae,"Cth. dari DIAG-WS-01: ping 8.8.8.8"),Pt("l6f","Traceroute ke 8.8.8.8 (lihat tiap hop router)",je,'PC: tracert 8.8.8.8 — tiap router mengurangi TTL dan membalas "TTL exceeded".')]}],Re=[];for(let Ft of Qe){let Me=Ft.obj.every(F=>F.done);if(Me&&!t.done.includes(Ft.id)&&Re.push(Ft),Ft.done=Me||t.done.includes(Ft.id),Ft.done)for(let F of Ft.obj)F.done=!0}let ti=Qe.findIndex(Ft=>!Ft.done);return ti<0&&(ti=Qe.length-1),{list:Qe,fresh:Re,active:ti,allDone:Qe.every(Ft=>Ft.done)}}function Zl(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new ce;l.morphTargetsRelative=o;let c=0;for(let h=0;h<r.length;++h){let d=r[h],u=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(d.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==r[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,d=[];for(let u=0;u<r.length;++u){let f=r[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(let h in s){let d=gf(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let m=gf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function gf(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new Je(a,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let x=h.getComponent(u,m);o.setComponent(u+d,m,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var jl=class extends Zn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new _i;t.deleteAttribute("uv");let e=new Ei({side:Ne}),i=new Ei,n=new On(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let s=new Ot(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Br(t,i,6),o=new Pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ot(t,ur(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ot(t,ur(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ot(t,ur(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ot(t,ur(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ot(t,ur(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ot(t,ur(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ur(r){return new Yr({color:0,emissive:16777215,emissiveIntensity:r})}var Ra=L,xf=new Di,xv=new Li,vf=new ie,vv=new Ra,_v=new Ra(1,1,1),Yi={x0:9.1,x1:11.5,z0:7.8,z1:10.2},Ql=(r,t)=>r>=ne.minX&&r<=ne.maxX&&t>=ne.minZ&&t<=ne.maxZ,Ca=(r,t)=>r>=Yi.x0-.12&&r<=Yi.x1&&t>=Yi.z0&&t<=Yi.z1;function ms(r,t,e,i=!0){let n=document.createElement("canvas");n.width=r,n.height=t;let s=n.getContext("2d");e(s,r,t);let a=new kn(n);return a.colorSpace=Ke,a.anisotropy=4,i&&(a.wrapS=a.wrapT=Bs),a.userData={c:n,g:s},a}var Ci=(r,t,e)=>{let i=ms(r,r,e);return i.repeat.set(1/t,1/t),i},Oi=(r,t,e)=>{r.fillStyle=t,r.fillRect(0,0,e,e)},Hn=(r,t,e,i,n=2)=>{for(let s=0;s<e;s++){let a=Math.random()<.5?0:255;r.fillStyle=`rgba(${a},${a},${a},${Math.random()*i})`,r.fillRect(Math.random()*t,Math.random()*t,1+Math.random()*n,1+Math.random()*n)}},Lh=(r,t,e,i)=>{for(let n=0;n<e;n++){r.strokeStyle=`rgba(${Math.random()<.5?"40,25,10":"255,240,220"},${Math.random()*i})`,r.lineWidth=.5+Math.random()*1.5;let s=Math.random()*t;r.beginPath(),r.moveTo(0,s),r.bezierCurveTo(t*.3,s+(Math.random()-.5)*8,t*.6,s+(Math.random()-.5)*8,t,s+(Math.random()-.5)*4),r.stroke()}};function O(r,t,e){let i=new _i(r,t,e),n=i.attributes.uv,s=[[e,t],[e,t],[r,e],[r,e],[r,t],[r,t]];for(let a=0;a<6;a++)for(let o=0;o<4;o++){let l=a*4+o;n.setXY(l,n.getX(l)*s[a][0],n.getY(l)*s[a][1])}return i}var de=(r,t,e,i=12)=>new is(r,t,e,i),Vn=(r,t=12,e=8)=>new xn(r,t,e),Bi=class{constructor(){this.m=new Map}add(t,e,i=0,n=0,s=0,a=0,o=0,l=0){xf.set(o,a,l,"YXZ"),vf.compose(vv.set(i,n,s),xv.setFromEuler(xf),_v),e.applyMatrix4(vf);let c=this.m.get(t);return c||this.m.set(t,c=[]),c.push(e),this}build(t){for(let[e,i]of this.m){let n=i.length>1?Zl(i,!1):i[0];if(!n)continue;let s=new Ot(n,e);s.castShadow=!e.transparent&&!e.userData.noShadow,s.receiveShadow=!e.userData.noShadow,s.matrixAutoUpdate=!1,t.add(s),i.length>1&&i.forEach(a=>a.dispose())}this.m.clear()}},me=(r,t,e,i,n)=>{let s=Math.cos(n),a=Math.sin(n);return(o,l,c=0,h=0,d=0,u=0,f=0,m=0)=>r.add(o,l,t+c*s+d*a,e+h,i-c*a+d*s,n+u,f,m)};function _f(r,t,e="#7dd3fc"){let i=ms(512,128,()=>{},!1),n=new Ni(new Ti({map:i,depthTest:!1,transparent:!0,fog:!1}));return n.scale.set(1,.25,1),n.renderOrder=60,n.userData.set=(s,a,o=e)=>{let l=i.userData.g;l.clearRect(0,0,512,128),l.fillStyle="rgba(6,12,22,.86)",l.beginPath(),l.roundRect(4,4,504,120,20),l.fill(),l.strokeStyle=o,l.lineWidth=4,l.stroke(),l.textAlign="center",l.fillStyle="#fff",l.font="600 46px system-ui,Segoe UI,sans-serif",l.fillText(s,256,a?58:82,480),a&&(l.fillStyle=o,l.font="500 30px ui-monospace,Consolas,monospace",l.fillText(a,256,102,480)),i.needsUpdate=!0},n.userData.set(r,t),n}var Gt=r=>new Ei(r),Tn=(r,t=1)=>{let e=new Ee({color:new Rt(r).multiplyScalar(t)});return e.userData.noShadow=!0,e},R,yf;function yv(){let r={carpet:Ci(256,1.2,t=>{Oi(t,"#3a4553",256),Hn(t,256,9e3,.12)}),carpetTile:Ci(256,1,t=>{Oi(t,"#515b68",256),t.fillStyle="rgba(255,255,255,.045)",t.fillRect(0,0,128,128),t.fillRect(128,128,128,128),Hn(t,256,9e3,.1),t.strokeStyle="rgba(0,0,0,.25)",t.strokeRect(0,0,128,128),t.strokeRect(128,128,128,128)}),marble:Ci(512,2.4,t=>{Oi(t,"#b4afa6",512);for(let e=0;e<46;e++){t.strokeStyle=`rgba(${110+Math.random()*40},${105+Math.random()*30},95,${.08+Math.random()*.2})`,t.lineWidth=.6+Math.random()*2.4;let i=Math.random()*512,n=Math.random()*512;t.beginPath(),t.moveTo(i,n);for(let s=0;s<5;s++)i+=(Math.random()-.3)*130,n+=(Math.random()-.5)*90,t.lineTo(i,n);t.stroke()}Hn(t,512,5e3,.05),t.strokeStyle="rgba(70,70,70,.55)",t.lineWidth=2,t.strokeRect(0,0,256,256),t.strokeRect(256,0,256,256),t.strokeRect(0,256,256,256),t.strokeRect(256,256,256,256)}),vinyl:Ci(256,1.5,t=>{Oi(t,"#8a939c",256),Hn(t,256,7e3,.09)}),raised:Ci(256,.6,t=>{Oi(t,"#aeb4ba",256),Hn(t,256,3e3,.07),t.strokeStyle="#5d646b",t.lineWidth=5,t.strokeRect(0,0,256,256),t.fillStyle="#6b7279";for(let[e,i]of[[14,14],[242,14],[14,242],[242,242]])t.beginPath(),t.arc(e,i,4,0,7),t.fill()}),plank:Ci(512,2,t=>{for(let e=0;e<8;e++){let i=e%2*180+Math.random()*60;for(let n=-1;n<3;n++){let s=150+Math.random()*40;t.fillStyle=`rgb(${s},${s*.72},${s*.46})`,t.fillRect(i+n*256,e*64,255,63)}}Lh(t,512,260,.12),t.fillStyle="rgba(30,18,8,.5)";for(let e=0;e<8;e++)t.fillRect(0,e*64+63,512,1.5)}),wall:Ci(128,1.5,t=>{Oi(t,"#e8e6df",128),Hn(t,128,2500,.035)}),ceil:Ci(256,1.2,t=>{Oi(t,"#ebe9e4",256),Hn(t,256,2600,.1,1),t.strokeStyle="rgba(120,120,115,.7)",t.lineWidth=3,t.strokeRect(0,0,128,128),t.strokeRect(128,0,128,128),t.strokeRect(0,128,128,128),t.strokeRect(128,128,128,128)}),wood:Ci(256,1,t=>{Oi(t,"#b8926a",256),Lh(t,256,150,.22)}),woodDark:Ci(256,1,t=>{Oi(t,"#5a4032",256),Lh(t,256,150,.25)}),concrete:Ci(256,2,t=>{Oi(t,"#8e8e8a",256),Hn(t,256,9e3,.13,4)}),metal:Ci(128,.5,t=>{Oi(t,"#9299a1",128);for(let e=0;e<300;e++)t.fillStyle=`rgba(${Math.random()<.5?0:255},${Math.random()<.5?0:255},255,${Math.random()*.06})`,t.fillRect(0,Math.random()*128,128,1)}),facade:Ci(256,14,t=>{Oi(t,"#5c6b7c",256);for(let e=0;e<8;e++)for(let i=0;i<6;i++){let n=Math.random();t.fillStyle=n<.12?"#cfe3f5":n<.5?"#2f465c":"#3d5b78",t.fillRect(i*42.6+5,e*32+5,33,22)}})};R={carpet:Gt({map:r.carpet,roughness:1}),carpetTile:Gt({map:r.carpetTile,roughness:1}),marble:Gt({map:r.marble,roughness:.2,metalness:.05}),vinyl:Gt({map:r.vinyl,roughness:.45}),raised:Gt({map:r.raised,roughness:.5,metalness:.1}),plank:Gt({map:r.plank,roughness:.5}),wall:Gt({map:r.wall,roughness:.93}),ceil:Gt({map:r.ceil,roughness:1}),wood:Gt({map:r.wood,roughness:.55}),woodDark:Gt({map:r.woodDark,roughness:.5}),concrete:Gt({map:r.concrete,roughness:.95}),metal:Gt({map:r.metal,roughness:.36,metalness:.85}),metalDark:Gt({color:2895927,roughness:.5,metalness:.75}),black:Gt({color:1316378,roughness:.55}),white:Gt({color:15856372,roughness:.5}),base:Gt({color:4277580,roughness:.8}),frame:Gt({color:2830133,roughness:.45,metalness:.7}),glass:Gt({color:12575474,transparent:!0,opacity:.2,roughness:.04,metalness:.1,depthWrite:!1,envMapIntensity:1.6}),accentBlue:Gt({color:2051705,roughness:.85}),accentTeal:Gt({color:1796971,roughness:.85}),accentAmber:Gt({color:9067028,roughness:.85}),accentDark:Gt({color:2303790,roughness:.8}),fabric:Gt({color:3099243,roughness:1}),fabricGray:Gt({color:4935511,roughness:1}),leather:Gt({color:2762019,roughness:.6}),leaf:Gt({color:3112250,roughness:.8}),pot:Gt({color:14210252,roughness:.6}),soil:Gt({color:3811868,roughness:1}),rack:Gt({color:1776929,roughness:.5,metalness:.6}),devSwitch:Gt({color:2833478,roughness:.45,metalness:.5}),devRouter:Gt({color:1854042,roughness:.45,metalness:.5}),devFw:Gt({color:8003359,roughness:.45,metalness:.5}),devSrv:Gt({color:3817029,roughness:.4,metalness:.7}),socket:Gt({color:329223,roughness:.9}),yellow:Gt({color:15184918,roughness:.6}),red:Gt({color:11805464,roughness:.55}),cableBlue:Gt({color:2450411,roughness:.6}),steel:Gt({color:10134187,roughness:.3,metalness:.9}),fire:Gt({color:8032134,roughness:.6,metalness:.3}),facade:Gt({map:r.facade,roughness:.35,metalness:.4}),facade2:Gt({map:r.facade,color:14272944,roughness:.6}),facade3:Gt({map:r.facade,color:9413560,roughness:.3,metalness:.5}),light:Tn(16777215,2.2),lightCool:Tn(13625087,2.2),ledG:Tn(3407735,1.6),ledA:Tn(16755234,1.6),ledB:Tn(4500223,1.6),screenDecor:Tn(6000601,.9),proxy:new Ee({visible:!1})},R.glass.userData.noShadow=!0,R.fixFrame=R.frame.clone(),yf={led:O(.009,.006,.004)}}var tc=class{constructor(t){yv(),this.data=t,this.scene=new Zn,this.col=[[],[]],this.fixtures=[],this.proxies=[],this.dev={},this.doors=[],this.npcs=[],this.pickups={},this.signs={},this.blinkers=[R.ledG,R.ledA,R.ledB],this.groups=[new Te,new Te,new Te],this.groups.forEach(i=>this.scene.add(i)),this.b=[new Bi,new Bi,new Bi],this.T=0,this.buildSky(),this.buildStructure(),this.buildStairs(),this.buildLift(),this.furnish();for(let i of t.doors)this.buildDoor(i);this.b.forEach((i,n)=>i.build(this.groups[n])),this.ceilMeshes=[];let e=[R.ceil,R.light,R.lightCool,R.fixFrame];for(let i of this.groups)for(let n of i.children)e.includes(n.material)&&this.ceilMeshes.push(n);for(let i of t.devices)this.buildDevice(i);for(let i of t.npcs)this.buildNpc(i);for(let i of t.pickups)this.buildPickup(i);this.scene.updateMatrixWorld(!0);for(let i in this.dev){let n=this.dev[i];for(let s in n.ports){let a=n.ports[s];a.pos=a.l.clone().applyMatrix4(n.group.matrixWorld),a.n=a.ln.clone().transformDirection(n.group.matrixWorld)}}this.pool=[],this.setLights(8)}setEnv(t){let e=new nr(t);this.scene.environment=e.fromScene(new jl,.04).texture,this.scene.environmentIntensity=.34,e.dispose()}setDim(t,e=.13){let i=this.dimK=t?e:1;this.hemi.intensity=.62*i,this.sun.intensity=2.9*i,this.scene.environmentIntensity=.34*i,this.liftLight.intensity=5*i,R.light.color.setHex(16777215).multiplyScalar(t?.45:2.2),R.lightCool.color.setHex(13625087).multiplyScalar(t?.45:2.2),this.skyMat.color.setScalar(t?.16:1)}setOverview(t,e=0,i=[!0,!0]){this.ov=t?{show:i}:null,this.groups[1].position.y=t?e:0;for(let n of this.ceilMeshes)n.visible=!t;this.scene.updateMatrixWorld(!0)}setLights(t){for(let e of this.pool)this.scene.remove(e);this.pool=[];for(let e=0;e<t;e++){let i=new On(16774374,0,13,1.5);i.userData.fx=null,this.scene.add(i),this.pool.push(i)}}addCol(t,e,i=!1){let n={x0:Math.min(e[0],e[2]),z0:Math.min(e[1],e[3]),x1:Math.max(e[0],e[2]),z1:Math.max(e[1],e[3]),on:!0,wall:i};return t<0?(this.col[0].push(n),this.col[1].push(n)):this.col[t].push(n),n}colBox(t,e,i,n,s,a=0){let o=Math.abs(Math.sin(a))>.7,l=(o?s:n)/2,c=(o?n:s)/2;return this.addCol(t,[e-l,i-c,e+l,i+c])}buildSky(){let t=this.scene;t.fog=new kr(14015974,90,520);let e=ms(8,256,(d,u,f)=>{let m=d.createLinearGradient(0,0,0,f);m.addColorStop(0,"#2f6fc4"),m.addColorStop(.38,"#86b8ea"),m.addColorStop(.49,"#f7e3c0"),m.addColorStop(.53,"#e6cfae"),m.addColorStop(1,"#9aa5b0"),d.fillStyle=m,d.fillRect(0,0,u,f)},!1);this.skyMat=new Ee({map:e,side:Ne,fog:!1,depthWrite:!1}),t.add(new Ot(new xn(760,24,16),this.skyMat)),this.hemi=new Jr(14937592,9274746,.62),t.add(this.hemi),this.dimK=1;let i=new Ra(-.8,.44,.42).normalize(),n=this.sun=new Qr(16769720,2.9);n.position.set(0,4,1).addScaledVector(i,60),n.target.position.set(0,4,1),t.add(n,n.target),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);let s=n.shadow.camera;s.left=-27,s.right=27,s.top=20,s.bottom=-20,s.near=5,s.far=120,n.shadow.bias=-5e-4,n.shadow.normalBias=.04;let a=ms(128,128,d=>{let u=d.createRadialGradient(64,64,2,64,64,64);u.addColorStop(0,"rgba(255,255,245,1)"),u.addColorStop(.15,"rgba(255,240,200,.9)"),u.addColorStop(.4,"rgba(255,210,140,.25)"),u.addColorStop(1,"rgba(255,200,120,0)"),d.fillStyle=u,d.fillRect(0,0,128,128)},!1),o=new Ni(new Ti({map:a,fog:!1,depthWrite:!1,blending:yi}));o.position.copy(i).multiplyScalar(700),o.scale.setScalar(190),t.add(o);let l=new Bi,c=7,h=()=>(c=c*16807%2147483647)/2147483647;for(let d=0;d<230;d++){let u=h()*Math.PI*2,f=46+h()*h()*330,m=10+h()*18,x=10+h()*18,p=h()<.12?20+h()*60:-34+h()*44,g=p+44;l.add([R.facade,R.facade2,R.facade3][d%3],O(m,g,x),Math.cos(u)*f,-44+g/2,Math.sin(u)*f,h()<.5?0:.5)}l.add(Gt({color:4870229,roughness:1}),O(1500,1,1500),0,-44.5,0);for(let d of l.m.keys())d.userData.noShadow=!0;l.build(t)}wall(t,e,i,n,s,a={}){let o=a.y0??Jt[t],l=a.h??3,c=a.t??.2,h=a.mat||R.wall,d=this.b[a.shared?2:t],u=a.lvCol??t,f=(a.open||[]).slice();if(!a.shared&&e==="z")for(let g of this.data.doors)g.level===t&&g.x===i&&g.z>n&&g.z<s&&f.push({at:g.z,w:1.1,h:2.15});f.sort((g,v)=>g.at-v.at);let m=(g,v,w,b,E,T=c)=>e==="x"?d.add(g,O(v,w,T),b,E,i):d.add(g,O(T,w,v),i,E,b),x=(g,v)=>{let w=v-g,b=(g+v)/2;if(!(w<.01)){if(a.win){let[E,T]=a.win;m(h,w,E,b,o+E/2),m(h,w,l-T,b,o+(T+l)/2),m(R.glass,w,T-E,b,o+(E+T)/2,.03),m(R.frame,w,.05,b,o+E+.025,c+.04),m(R.frame,w,.05,b,o+T-.025,c+.04);let _=Math.max(1,Math.round(w/2));for(let M=0;M<=_;M++)m(R.frame,.06,T-E,g+w*M/_,o+(E+T)/2,c+.04)}else m(h,w,l,b,o+l/2);a.base!==!1&&m(R.base,w,.09,b,o+.045,c+.03),a.col!==!1&&this.addCol(u,e==="x"?[g,i-c/2,v,i+c/2]:[i-c/2,g,i+c/2,v],!0)}},p=n;for(let g of f){x(p,g.at-g.w/2);let v=g.h;l-v>.01&&m(h,g.w,l-v,g.at,o+(v+l)/2),m(R.frame,.05,v,g.at-g.w/2+.02,o+v/2,c+.05),m(R.frame,.05,v,g.at+g.w/2-.02,o+v/2,c+.05),m(R.frame,g.w,.05,g.at,o+v+.02,c+.05),p=g.at+g.w/2}x(p,s)}slab(t,e,i,n=!0){let s=e[1]-e[0],a=e[3]-e[2],o=(e[0]+e[1])/2,l=(e[2]+e[3])/2;this.b[t].add(i,O(s,.2,a),o,Jt[t]-.1,l),n&&this.b[t].add(R.ceil,O(s,.12,a),o,Jt[t]+3+.06,l)}lights(t,e,i,n,s){for(let a=0;a<i;a++)for(let o=0;o<n;o++){let l=e[0]+(e[1]-e[0])*(a+.5)/i,c=e[2]+(e[3]-e[2])*(o+.5)/n;this.b[t].add(s?R.lightCool:R.light,O(1.2,.03,.3),l,Jt[t]+3-.012,c),this.b[t].add(R.fixFrame,O(1.3,.02,.4),l,Jt[t]+3-.002,c),this.fixtures.push({x:l,y:Jt[t]+3-.35,z:c,lv:t,col:s?14216447:16773596})}}buildStructure(){let t=[.85,2.6],e={lobby:R.marble,foyer:R.marble,corridor0:R.carpet,corridor1:R.carpet,office:R.carpetTile,briefing:R.carpet,pantry:R.plank,lab:R.vinyl,config:R.vinyl,noc:R.carpet,server:R.raised};for(let i of vi)i.level>=0&&this.slab(i.level,i.b,e[i.id]);for(let i of[0,1]){i===0?(this.wall(0,"x",-12,-16,16,{win:t}),this.wall(0,"z",16,-12,4,{win:t})):(this.wall(1,"x",-12,-16,2,{win:t}),this.wall(1,"x",-12,2,16),this.wall(1,"z",16,-12,-4),this.wall(1,"z",16,-4,4,{win:t}),this.wall(1,"x",-4,-16,-2)),this.wall(i,"z",-16,-12,4,{win:t}),this.wall(i,"x",4,-16,-2),this.wall(i,"x",4,2,16),this.wall(i,"z",-9,4,14),this.wall(i,"z",9,4,14,{open:[{at:9,w:1.4,h:2.15}]}),this.wall(i,"x",14,-9,9,{win:[.12,2.88]}),this.wall(i,"z",-2,-12,4),this.wall(i,"z",2,-12,4,i===0?{open:[{at:-8,w:1.3,h:2.2}]}:{}),this.wall(i,"x",-4,2,16),this.lights(i,[-9,9,4,14],3,2),this.lights(i,[-2,2,-12,4],1,4);let n=Jt[i]+3+hi.h-.12,s=hi.z1-hi.z0,a=(hi.z0+hi.z1)/2;for(let o of[-1,1])this.b[i].add(R.steel,O(.03,.07,s),hi.x+o*.34,n+.02,a);for(let o=hi.z0+.2;o<hi.z1;o+=.6)this.b[i].add(R.steel,O(.68,.02,.04),hi.x,n,o)}this.lights(0,[-16,-2,-12,4],3,4),this.lights(0,[2,16,-4,4],3,2),this.lights(0,[2,16,-12,-4],3,2),this.lights(1,[-16,-2,-4,4],3,2),this.lights(1,[2,16,-4,4],3,2),this.lights(1,[-16,-2,-12,-4],3,2),this.lights(1,[2,16,-12,-4],3,2,!0)}buildStairs(){let t=this.b[2],e={shared:!0,lvCol:-1,y0:0,h:7.3,mat:R.concrete,base:!1};this.wall(0,"x",ne.minZ,-16,-9,e),this.wall(0,"x",ne.maxZ,-16,-9,e),this.wall(0,"z",-16,ne.minZ,ne.maxZ,e),this.wall(0,"x",ne.midZ,ne.x1,ne.x0,{...e,t:.14}),this.wall(0,"z",ne.x0,ne.minZ,ne.midZ,{...e,h:3.8,lvCol:0,t:.12}),this.wall(0,"z",ne.x0,ne.midZ,ne.maxZ,{...e,y0:4,h:1.05,lvCol:1,t:.08,mat:R.frame}),t.add(R.concrete,O(1.4,.2,4),-9.7,-.1,9),t.add(R.concrete,O(1.4,.2,4),-9.7,3.9,9),t.add(R.concrete,O(1.6,.2,4),-15.2,1.9,9),t.add(R.concrete,O(7,.15,4),-12.5,7.35,9),t.add(R.concrete,O(.2,1,4),-9,3.5,9),t.add(R.concrete,O(.2,.4,4),-9,7.15,9);let i=12,n=(ne.x0-ne.x1)/i;for(let s=0;s<i;s++){let a=(s+1)*2/i;t.add(R.concrete,O(n,a,1.86),ne.x0-(s+.5)*n,a/2,10),t.add(R.yellow,O(.04,.012,1.86),ne.x0-s*n-.02,a+.006,10);let o=2+(s+1)*2/i;t.add(R.concrete,O(n,.34,1.86),ne.x1+(s+.5)*n,o-.17,8),t.add(R.yellow,O(.04,.012,1.86),ne.x1+(s+1)*n-.02,o+.006,8)}for(let[s,a,o]of[[10.86,.9,2.9],[9.12,.9,2.9],[7.14,4.9,2.9],[8.88,4.9,2.9]]){let l=Math.hypot(4,2);t.add(R.steel,de(.022,.022,l,8),-12.4,(a+o)/2,s,0,0,Math.PI/2+(a<o?-1:1)*Math.atan2(2,4))}for(let[s,a,o]of[[-15.86,4.7,9],[-9.7,6.9,9],[-9.7,2.95,9],[-12.4,6.9,8]])t.add(R.light,O(.1,.25,.6),s,a,o),this.fixtures.push({x:Math.max(s,-15.4),y:a-.2,z:o,lv:-1,col:16054527})}groundY(t,e,i){if(Ql(t,e)){if(t>=ne.x0)return i<2?0:4;if(t<=ne.x1)return 2;let n=(ne.x0-t)/(ne.x0-ne.x1);return e>ne.midZ?2*n:4-2*n}return Ca(t,e)&&t>Yi.x0-.05?this.lift.y:i<1.99?0:4}buildLift(){let t=new Te,e=new Bi,i=this.lift={y:0,level:0,target:0,phase:"idle",door:1,t:0,car:t,gates:[],land:[],cdoor:[]};this.groups[2].add(t),e.add(R.metalDark,O(2.4,.1,2.4),10.3,-.05,9),e.add(R.metal,O(2.4,.08,2.4),10.3,2.54,9),e.add(R.light,O(1.4,.02,1.4),10.3,2.49,9),e.add(R.metal,O(2.4,2.5,.05),10.3,1.25,7.83),e.add(R.metal,O(2.4,2.5,.05),10.3,1.25,10.17),e.add(R.metal,O(.05,2.5,2.4),11.47,1.25,9),e.add(R.steel,de(.02,.02,2.1,8),11.38,.95,9,0,Math.PI/2),e.add(R.black,O(.3,.5,.03),9.55,1.25,7.87);for(let o of[-1,1])e.add(R.metal,O(.05,2.5,.5),9.13,1.25,9+o*.95);e.build(t);let n=this.liftLight=new On(16774888,5,5,1.6);n.position.set(10.3,2.2,9),t.add(n);let s=(o,l,c)=>[-1,1].map(h=>{let d=new Ot(O(.04,2.15,.7),R.steel);return d.position.set(l,c+1.075,9+h*.35),d.userData.s=h,d.castShadow=!0,o.add(d),d});i.cdoor=s(t,9.17,0);for(let o of[0,1]){i.land[o]=s(this.groups[2],9,Jt[o]),i.gates[o]=this.addCol(-1,[8.9,8.2,9.14,9.8],!0),i.gates[o].lv=o,this.b[o].add(R.steel,O(.02,.22,.1),8.89,Jt[o]+1.15,10.02);let c=new Ot(O(.12,.4,.3),R.proxy);c.position.set(8.86,Jt[o]+1.15,10.02),c.userData.it={type:"liftCall",lv:o,label:"Panggil Lift"},this.groups[o].add(c),this.proxies.push(c),this.sign(o,8.885,Jt[o]+2.4,9,-Math.PI/2,.5,.2,"lift"+o,(h,d,u)=>{h.fillStyle="#05070a",h.fillRect(0,0,d,u)})}this.col[0].splice(this.col[0].indexOf(i.gates[1]),1),this.col[1].splice(this.col[1].indexOf(i.gates[0]),1);let a=new Ot(O(.34,.6,.12),R.proxy);a.position.set(9.55,1.25,7.9),a.userData.it={type:"liftPanel",label:"Panel Lift"},t.add(a),this.proxies.push(a);for(let o of[[Yi.x0,7.6,Yi.x1,7.8],[Yi.x0,10.2,Yi.x1,10.4],[Yi.x1,7.6,Yi.x1+.2,10.4],[9.14,7.8,9.24,8.3],[9.14,9.7,9.24,10.2]])this.addCol(-1,o,!0);this.drawLift()}drawLift(){let t=this.lift,e=(t.phase==="moving"?t.target>t.level?"▲ ":"▼ ":"")+(t.y<2?"11":"12");for(let i of[0,1])this.signs["lift"+i].draw((n,s,a)=>{n.fillStyle="#05070a",n.fillRect(0,0,s,a),n.fillStyle="#ff9d2e",n.font="bold 70px ui-monospace,monospace",n.textAlign="center",n.fillText(e,s/2,76)})}liftRequest(t){let e=this.lift;return e.phase!=="idle"||t===e.level?!1:(e.target=t,e.phase="closing",e.t=0,!0)}updateLift(t,e){let i=this.lift;if(i.phase==="closing")i.door=Math.max(0,i.door-t/.8),i.door===0&&(i.phase="moving",i.t=0,this.drawLift(),e("liftMove"));else if(i.phase==="moving"){i.t=Math.min(1,i.t+t/3.2);let n=i.t*i.t*(3-2*i.t),s=Jt[i.level],a=Jt[i.target];i.y=s+(a-s)*n,i.t===1&&(i.level=i.target,i.phase="opening",this.drawLift(),e("liftDing"))}else i.phase==="opening"&&(i.door=Math.min(1,i.door+t/.8),i.door===1&&(i.phase="idle"));i.car.position.y=i.y;for(let n of i.cdoor)n.position.z=9+n.userData.s*(.35+i.door*.68);for(let n of[0,1]){let s=i.level===n&&i.phase!=="moving"?i.door:0;for(let a of i.land[n])a.position.z=9+a.userData.s*(.35+s*.68);i.gates[n].on=s<.75}}sign(t,e,i,n,s,a,o,l,c,h={}){let d=h.px||256,u=ms(d,Math.round(d*o/a),c,!1),f=h.lit===!1?Gt({map:u,roughness:.6}):new Ee({map:u});h.k&&f.color.multiplyScalar(h.k);let m=new Ot(new $i(a,o),f);m.position.set(e,i,n),m.rotation.y=s,this.groups[t].add(m);let x={mesh:m,tex:u,draw:p=>{let g=u.userData.c;p(u.userData.g,g.width,g.height),u.needsUpdate=!0}};return l&&(this.signs[l]=x),x}textSign(t,e,i,n,s,a,o,l,c={}){return this.sign(t,e,i,n,s,a,o,c.key,(h,d,u)=>{h.fillStyle=c.bg||"#12161c",h.fillRect(0,0,d,u),c.bar&&(h.fillStyle=c.bar,h.fillRect(0,0,d*.035,u)),h.textAlign=c.align||"center";let f=l.length;l.forEach((m,x)=>{let p=x===0;h.fillStyle=p?c.fg||"#fff":c.fg2||"#9fb4c8",h.font=`${p?700:500} ${Math.round(u/(f+.6)*(p?.78:.56))}px system-ui,Segoe UI,sans-serif`,h.fillText(m,c.align==="left"?d*.07:d/2,u*(x+.95)/(f+.35),d*.9)})},{px:c.px||512,lit:c.lit,k:c.k})}desk(t,e,i,n,s,a=0,o=.74,l=R.wood){let c=me(this.b[t],e,Jt[t],i,a);c(l,O(n,.04,s),0,o-.02,0);for(let h of[-1,1])c(R.metalDark,O(.04,o-.04,s-.12),h*(n/2-.06),(o-.04)/2,0);c(R.metalDark,O(n-.16,.32,.02),0,o-.22,-s/2+.1),this.colBox(t,e,i,n,s,a)}chair(t,e,i,n,s=R.fabric){let a=me(this.b[t],e,Jt[t],i,n);a(s,O(.46,.07,.44),0,.47,0),a(s,O(.42,.5,.06),0,.8,-.22,0,-.1),a(R.metalDark,de(.025,.025,.36,6),0,.26,0),a(R.metalDark,de(.3,.3,.035,5),0,.05,0)}plant(t,e,i,n=1){let s=me(this.b[t],e,Jt[t],i,0);s(R.pot,de(.2*n,.15*n,.42*n,12),0,.21*n,0),s(R.soil,de(.18*n,.18*n,.02,12),0,.42*n,0);for(let a=0;a<7;a++){let o=a*2.4,l=(a?.16:0)*n,c=Vn(.17*n,8,6);c.scale(1,2.1+a%3*.35,.55),s(R.leaf,c,Math.cos(o)*l,(.72+a%3*.14)*n,Math.sin(o)*l,o,0,.35*(a?1:0))}this.colBox(t,e,i,.4*n,.4*n)}decorPc(t,e,i,n,s=.74){let a=me(this.b[t],e,Jt[t]+s,i,n);a(R.black,O(.22,.015,.16),0,.008,-.05),a(R.black,O(.04,.14,.03),0,.08,-.08),a(R.black,O(.56,.34,.025),0,.3,-.06),a(R.screenDecor,O(.53,.31,.004),0,.3,-.046),a(R.black,O(.36,.015,.12),0,.008,.2)}sofa(t,e,i,n,s=1.8){let a=me(this.b[t],e,Jt[t],i,n);a(R.leather,O(s,.3,.8),0,.27,0),a(R.leather,O(s,.5,.2),0,.6,-.34);for(let o of[-1,1])a(R.leather,O(.18,.5,.8),o*(s/2-.09),.42,0);a(R.metalDark,O(s-.1,.1,.7),0,.06,0),this.colBox(t,e,i,s,.85,n)}rack(t,e,i,n,s){let a=me(this.b[t],e,Jt[t],i,0),o=Jt[t];for(let h of[-1,1]){a(R.rack,O(.02,2.1,1.1),h*.38,1.05,0);for(let d of[-1,1])a(R.rack,O(.04,2.1,.04),h*.35,1.05,d*.53)}a(R.rack,O(.78,.04,1.1),0,2.1,0),a(R.rack,O(.78,.08,1.1),0,.04,0),a(R.rack,O(.74,2,.02),0,1.05,-.54);let l=Math.round(e*31+i*17)&1023,c=()=>(l=(l*16807+11)%2147483647)/2147483647;for(let h=.14;h<1.98;){let d=c()<.35?.088:.044,u=d*(1+Math.floor(c()*2));if(n&&h+u>n[0]&&h<n[1]){h=Math.max(h+u,n[1]);continue}if(c()<.78){a(c()<.5?R.devSrv:R.black,O(.66,u-.006,.5),0,h+u/2,.27),a(R.metalDark,O(.7,u-.006,.006),0,h+u/2,.523);for(let f=0;f<5;f++)c()<.7&&a([R.ledG,R.ledG,R.ledB,R.ledA][Math.floor(c()*4)],O(.012,.008,.004),-.28+f*.035,h+u/2,.528)}h+=u+.004}s&&this.textSign(t,e,o+2.04,i+.556,0,.6,.09,[s],{bg:"#e7b416",fg:"#111",px:512,lit:!1}),this.colBox(t,e,i,.8,1.14)}furnish(){let t=this.b[0],e=this.b[1],i=Math.PI,n=me(t,4.5,0,8.55,0);n(R.woodDark,O(3.4,1.05,.12),0,.525,.3),n(R.marble,O(3.5,.05,.72),0,1.07,.02),n(R.wood,O(3.3,.04,.6),0,.74,-.1);for(let s of[-1,1])n(R.woodDark,O(.12,1.05,.7),s*1.64,.525,0);n(Tn(3718648,1.4),O(3.2,.03,.01),0,.2,.365),this.colBox(0,4.5,8.55,3.5,.8),this.decorPc(0,5.3,8.45,i,.76);for(let s of[0,1]){this.sofa(s,-5.2,12.6,i,2.2),this.sofa(s,-7.6,10.9,i/2,1.6);let a=me(this.b[s],-5.2,Jt[s],11,0);a(R.glass,O(1.2,.02,.6),0,.42,0),a(R.metalDark,O(1.1,.4,.5),0,.2,0),this.colBox(s,-5.2,11,1.2,.6),this.plant(s,-8.3,13.3,1.3),this.plant(s,8.3,13.3,1.3),this.plant(s,-8.3,4.7,1.1),this.plant(s,1.5,-11.3,1),this.plant(s,-1.5,-11.3,1),this.textSign(s,-8.885,Jt[s]+2.42,9,i/2,.9,.22,["TANGGA DARURAT ▸ "+(s?"Lt 11":"Lt 12")],{bg:"#0b6b2e",px:512,k:1.3}),this.textSign(s,8.885,Jt[s]+1.6,7.3,-i/2,.7,.9,[s?"LANTAI 12":"LANTAI 11",...s?["12-01  Laboratorium Jaringan","12-02  Ruang Konfigurasi","12-03  NOC / Troubleshooting","12-04  Ruang Server"]:["11-01  Kantor Engineering","11-02  Ruang Briefing","Pantry","▲ Lt 12: Lab · NOC · Server"]],{bg:"#10151c",bar:"#38bdf8",align:"left",lit:!1});let o=me(this.b[s],0,Jt[s],-11.2,0);o(R.woodDark,O(1.6,.06,.42),0,.45,0);for(let l of[-1,1])o(R.metalDark,O(.05,.44,.38),l*.7,.22,0)}this.sign(0,5.5,2.05,4.115,0,5.2,1.1,"logo",(s,a,o)=>{s.fillStyle="#0a1018",s.fillRect(0,0,a,o),s.fillStyle="#38bdf8",s.font="800 96px system-ui,sans-serif",s.textAlign="center",s.fillText("NETRUNNER",a/2,118),s.fillStyle="#e2e8f0",s.font="500 34px system-ui,sans-serif",s.fillText("N E T W O R K   O P E R A T I O N S   H Q",a/2,174)},{px:1024,k:1.5}),this.sign(1,5.5,6.05,4.115,0,5.2,1.1,"logo1",(s,a,o)=>{s.fillStyle="#0a1018",s.fillRect(0,0,a,o),s.fillStyle="#34d399",s.font="800 80px system-ui,sans-serif",s.textAlign="center",s.fillText("LANTAI 12 · NOC",a/2,112),s.fillStyle="#e2e8f0",s.font="500 34px system-ui,sans-serif",s.fillText("Lab  ·  Konfigurasi  ·  Troubleshooting  ·  Data Center",a/2,172)},{px:1024,k:1.5}),this.desk(0,-12,3.45,2,.8,i),this.desk(0,-7,3.45,2,.8,i),this.chair(0,-12,2.6,0),this.chair(0,-7,2.6,0);for(let s of[-6.6,-9.8])for(let a of[-13.4,-10.6,-7.8,-5])this.desk(0,a,s+.42,1.7,.8,0),this.desk(0,a,s-.42,1.7,.8,i),this.decorPc(0,a,s+.5,0),this.decorPc(0,a,s-.5,i),this.chair(0,a,s+1.25,i,R.fabricGray),this.chair(0,a,s-1.25,0,R.fabricGray),t.add(R.fabricGray,O(1.7,.42,.03),a,.95,s);n=me(t,-2.42,0,-4.4,0);for(let s=0;s<4;s++){n(R.metal,O(.6,1.3,.9),0,.65,-s*.92);for(let a=0;a<3;a++)n(R.metalDark,O(.01,.03,.3),-.305,.3+a*.4,-s*.92)}this.addCol(0,[-2.75,-7.65,-2.1,-3.95]),this.plant(0,-15.2,-11.2,1.2),this.plant(0,-15.2,3.2,1.2),this.plant(0,-3,3.3),n=me(t,-4.4,0,3.5,0),n(R.white,O(.6,.9,.55),0,.45,0),n(R.black,O(.5,.12,.45),0,.96,0),this.colBox(0,-4.4,3.5,.6,.6),this.textSign(0,-2.115,1.75,-9.6,-i/2,2.2,1.2,["KANTOR ENGINEERING","Tiket #404 — PC-OFFICE-01 offline","Outlet D-01 → SW-DIST-01 Fa0/1 (NOC Lt 12)","Outlet D-02 → SW-DIST-01 Fa0/2","Gateway 192.168.10.1 · DNS 192.168.20.10"],{bg:"#f5f6f7",fg:"#0f172a",fg2:"#334155",align:"left",lit:!1}),this.desk(0,5,3.45,2,.8,i),this.chair(0,5,2.6,0),n=me(t,9.6,0,-.2,0),n(R.woodDark,O(5,.06,1.5),0,.73,0);for(let s of[-1,1])n(R.metalDark,O(.12,.7,1),s*1.9,.35,0);this.colBox(0,9.6,-.2,5,1.5);for(let s=0;s<4;s++)this.chair(0,7.8+s*1.2,-1.35,0,R.leather),this.chair(0,7.8+s*1.2,.95,i,R.leather);t.add(R.black,O(3.3,1.9,.06),9.6,1.75,-3.86),this.plant(0,15.2,3.2,1.2),this.plant(0,2.8,-3.3),this.sign(0,9.6,1.75,-3.825,0,3.2,1.8,"tv",s=>{s.fillStyle="#07101c",s.fillRect(0,0,1024,576)},{px:1024}),n=me(t,9,0,-4.42,i),n(R.woodDark,O(6,.86,.6),0,.43,0),n(R.marble,O(6.06,.04,.64),0,.88,0),n(R.steel,O(.6,.02,.4),-1.2,.905,0),n(R.steel,de(.015,.015,.25,8),-1.2,1.02,-.18),n(R.black,O(.3,.42,.34),1,1.11,-.05),n(R.steel,O(.5,.3,.36),2.1,1.05,-.05),n(R.woodDark,O(6,.7,.34),0,2.2,-.12),this.colBox(0,9,-4.42,6.1,.7),n=me(t,13.6,0,-4.5,i),n(R.steel,O(.8,1.85,.7),0,.925,0),n(R.metalDark,O(.03,.6,.03),-.3,1.2,.37),this.colBox(0,13.6,-4.5,.8,.75),n=me(t,15,0,-4.55,i),n(R.red,O(.95,1.9,.8),0,.95,0),n(Tn(12575743,1.3),O(.6,1.2,.01),-.1,1.15,.405),n(R.black,O(.2,.5,.02),.34,1.1,.405),this.colBox(0,15,-4.55,1,.85);for(let s of[6,11]){n=me(t,s,0,-8.6,0),n(R.white,de(.55,.55,.04,20),0,.74,0),n(R.metalDark,de(.04,.04,.72,8),0,.37,0),n(R.metalDark,de(.3,.3,.03,12),0,.015,0),this.colBox(0,s,-8.6,.9,.9);for(let a=0;a<3;a++){let o=a*2.1+s;n(R.yellow,de(.19,.19,.04,12),Math.cos(o)*.9,.46,Math.sin(o)*.9),n(R.metalDark,de(.02,.02,.45,6),Math.cos(o)*.9,.225,Math.sin(o)*.9)}}this.plant(0,15.2,-11.2,1.2),n=me(t,3,0,-11.4,0),n(R.white,O(.34,1,.34),0,.5,0),n(R.glass,de(.13,.13,.38,12),0,1.2,0),this.colBox(0,3,-11.4,.4,.4),n=me(e,-9.25,4,-3.45,0),n(R.wood,O(8,.05,.8),0,.875,0);for(let s of[-3.9,-1.3,1.3,3.9])n(R.metalDark,O(.05,.85,.7),s,.425,0);n(R.metalDark,O(7.9,.03,.6),0,.25,0),this.colBox(1,-9.25,-3.45,8,.8);for(let s=0;s<3;s++)n(R.yellow,de(.14,.14,.1,14),-3.2+s*.4,.32,0,0,Math.PI/2),n(R.cableBlue,de(.11,.11,.11,14),-3.2+s*.4,.32,0,0,Math.PI/2);this.desk(1,-11,3.45,2,.8,i),this.chair(1,-11,2.6,0),this.plant(1,-15.2,3.2,1.2),this.plant(1,-15.2,-3.2,1.1),n=me(e,-2.45,4,-2.7,0);for(let s=0;s<4;s++)if(n(R.metalDark,O(.5,.03,1.8),0,.3+s*.5,0),s<3)for(let a=0;a<3;a++)n(a%2?R.woodDark:R.pot,O(.36,.3,.44),0,.47+s*.5,-.6+a*.6);for(let s of[-1,1])n(R.metalDark,O(.5,1.85,.03),0,.925,s*.9);this.colBox(1,-2.45,-2.7,.55,1.85),this.desk(1,-6.2,1.9,2.4,1,0,.9,R.white),this.chair(1,-6.9,2.75,i,R.fabricGray),this.chair(1,-5.5,1.05,0,R.fabricGray),n=me(e,-6.2,4.9,1.9,0),n(R.red,O(.44,.2,.22),-.75,.1,.12),n(R.black,O(.3,.025,.04),-.75,.215,.12),n(R.devSwitch,O(.44,.045,.24),.1,.023,-.15);for(let s=0;s<8;s++)n(R.socket,O(.02,.016,.004),-.07+s*.04,.024,-.028);n(R.yellow,de(.13,.13,.012,16),.78,.006,.1),n(R.cableBlue,de(.1,.1,.09,16),.78,.055,.1),n(R.yellow,de(.13,.13,.012,16),.78,.105,.1),n(R.metalDark,O(.3,.014,.21),.15,.008,.25),n(R.screenDecor,O(.28,.002,.19),.15,.016,.25),n=me(e,-15.2,4,-.2,0);for(let s of[.18,.62,1.06])n(R.steel,O(.55,.025,1.1),0,s,0);for(let s of[-1,1])for(let a of[-1,1])n(R.metalDark,de(.018,.018,1.1,6),s*.25,.55,a*.52);n(R.pot,O(.36,.26,.3),0,.32,-.3),n(R.woodDark,O(.36,.22,.3),0,.3,.2),n(R.devRouter,O(.44,.045,.28),0,.665,-.2),n(R.devSwitch,O(.44,.045,.28),0,.71,-.2),n(R.yellow,O(.3,.12,.2),0,.695,.3),n(R.rack,O(.44,.09,.3),0,1.12,0),this.colBox(1,-15.2,-.2,.6,1.15),this.textSign(1,-14,5.7,3.885,i,2.4,1.3,["TOPOLOGI LAB","PC-LAB-01 ─ Fa0/1 [SW-LAB-01] Gi0/1 ─ Gi0/0 [R-LAB-01]","Tahap 1: 10.0.0.0/24  (gateway 10.0.0.1)","Tahap 2: 192.168.1.0/24  (gateway 192.168.1.1)","Loopback0 R-LAB-01: 172.16.1.1"],{bg:"#f5f6f7",fg:"#0f172a",fg2:"#1e3a5f",align:"left",lit:!1}),n=me(e,9,4,-3.45,0),n(R.wood,O(8.4,.05,.8),0,.875,0);for(let s of[-4.1,-1.4,1.4,4.1])n(R.metalDark,O(.05,.85,.7),s,.425,0);this.colBox(1,9,-3.45,8.4,.8),this.desk(1,9.25,3.45,10.6,.8,i);for(let s of[5.2,7.9,10.6,13.3])this.chair(1,s,2.6,0);n=me(e,3.4,4,-2.6,0),n(R.wood,O(.9,.04,.7),0,.74,0),n(R.metalDark,O(.8,.7,.6),0,.36,0),this.colBox(1,3.4,-2.6,.9,.7),this.plant(1,15.2,3.2,1.2),this.textSign(1,9,5.75,-3.885,0,3.4,1.2,["RENCANA VLAN","VLAN 10  STAFF     192.168.10.0/24   Fa0/1","VLAN 20  SERVERS   192.168.20.0/24   Fa0/2","Trunk 802.1Q  SW-CFG-01 Gi0/1 ⇄ Gi0/1 SW-CFG-02"],{bg:"#f5f6f7",fg:"#0f172a",fg2:"#1e3a5f",align:"left",lit:!1}),this.desk(1,-8.75,-6.4,8.6,.85,i,.74,R.woodDark);for(let s of[-12.3,-10,-7.9])this.chair(1,s,-7.3,0,R.leather);this.decorPc(1,-12.3,-6.4,i),this.decorPc(1,-7.9,-6.4,i),e.add(R.black,O(8.2,2,.08),-9,5.85,-4.16),this.sign(1,-9,5.85,-4.205,i,8,1.8,"nocwall",s=>{s.fillStyle="#04080f",s.fillRect(0,0,1024,230)},{px:1024,k:1.25}),n=me(e,-2.5,4,-10.5,-i/2),n(R.rack,O(.7,.7,.04),0,1.3,-.38);for(let s of[-1,1])n(R.rack,O(.03,.7,.8),s*.35,1.3,0);n(R.rack,O(.7,.03,.8),0,1.65,0),n(R.rack,O(.7,.03,.8),0,.95,0),this.colBox(1,-2.5,-10.5,.8,.74),this.plant(1,-15.2,-11.2,1.2),this.plant(1,-15.2,-4.8,1.1),n=me(e,ve.x,4,ve.z,0),n(R.metalDark,O(2.1,ve.top-.06,1.6),0,(ve.top-.06)/2,0),n(R.black,O(2.4,.06,1.9),0,ve.top-.03,0);for(let s of[-1,1])n(R.ledB,O(2.4,.012,.02),0,ve.top-.03,s*.955),n(R.ledB,O(.02,.012,1.9),s*1.205,ve.top-.03,0),n(R.ledB,O(2.06,.014,.012),0,.05,s*.806);this.colBox(1,ve.x,ve.z,2.4,1.9),this.textSign(1,ve.x,4+ve.top-.32,ve.z+.806,0,1.5,.26,["PETA JARINGAN 3D","kembaran digital gedung · tekan E"],{bg:"#06101c",fg:"#7dd3fc",fg2:"#9fb4c8",px:512});{let s=new Ot(O(2.4,1.7,1.9),R.proxy);s.position.set(ve.x,4+.85,ve.z),s.userData.it={type:"holo"},this.groups[1].add(s),this.proxies.push(s)}this.textSign(1,-2.115,6.1,-10.5,-i/2,.9,.16,["IDF-12 · SW-DIST-01"],{bg:"#e7b416",fg:"#111",lit:!1}),[5,5.8,6.6,7.4,8.2,9,9.8].forEach((s,a)=>this.rack(1,s,-10.7,a===1||a>4?null:[.68,1.62],a===0?"ISP DEMARC":a===2?"CORE-A":a===3?"CORE-B":a===4?"SRV-A":null));for(let s=0;s<6;s++)this.rack(1,11.2+s*.8,-10.7,null,null);e.add(R.yellow,O(11,.05,.32),10.2,6.42,-10.2),e.add(R.metalDark,O(11,.03,.5),10.2,6.6,-10.7),n=me(e,3.6,4,-6.2,0),n(R.steel,O(.9,.03,.55),0,.93,0),n(R.steel,O(.9,.03,.55),0,.35,0);for(let s of[-1,1])for(let a of[-1,1])n(R.metalDark,de(.02,.02,.95,6),s*.42,.475,a*.25);this.colBox(1,3.6,-6.2,.9,.55),n=me(e,15.35,4,-8,-i/2),n(R.white,O(1.6,2,.9),0,1,0),n(R.metalDark,O(1.4,.5,.02),0,1.5,.46),n(R.ledG,O(.04,.02,.01),.6,1.9,.46),this.colBox(1,15.35,-8,1.6,.9,i/2),this.textSign(1,9,6.35,-4.115,i,3.2,.5,["DATA CENTER — AKSES TERBATAS","Core 192.168.10.1 / 192.168.20.1 · Transit 10.10.0.0/30 · WAN 203.0.113.0/30"],{bg:"#7f1d1d",fg:"#fff",fg2:"#fecaca",lit:!1});for(let s of this.data.doors){let a=s.x===2?-1:1;this.textSign(s.level,s.x+a*.112,Jt[s.level]+1.62,s.z+.86,a*i/2,.42,.2,[s.no,s.label],{bg:"#1c2430",bar:"#38bdf8",lit:!1,px:512})}this.textSign(0,2-.112,1.62,-8.95,-i/2,.42,.2,["11-03","Pantry"],{bg:"#1c2430",bar:"#38bdf8",lit:!1,px:512})}buildDoor(t){let e=new Te,i=Jt[t.level],n=t.x===2?1:-1,s=t.kind==="security";e.position.set(s?t.x-n*.14:t.x,i,t.z-.53),this.groups[t.level].add(e);let a={wood:R.woodDark,fire:R.fire,glass:R.glass,security:R.steel}[t.kind],o=new Ot(O(.045,2.12,1.06),a);o.position.set(0,1.06,.53),o.castShadow=t.kind!=="glass",o.receiveShadow=!0,e.add(o);let l=new Bi;if(t.kind==="glass"){for(let d of[.03,1.03])l.add(R.frame,O(.05,2.12,.06),0,1.06,d);l.add(R.frame,O(.05,.08,1.06),0,.04,.53),l.add(R.frame,O(.05,.06,1.06),0,2.09,.53),l.add(R.steel,de(.014,.014,.9,8),-.05,1.1,.9),l.add(R.steel,de(.014,.014,.9,8),.05,1.1,.9)}else if(t.kind==="fire")l.add(R.steel,O(.07,.05,.8),-n*.03,1.05,.53),l.add(R.glass,O(.05,.5,.22),0,1.6,.75),l.add(R.frame,O(.052,.56,.28),0,1.6,.75);else if(t.kind==="security")l.add(R.yellow,O(.05,.12,1.06),0,.2,.53),l.add(R.black,O(.052,.5,.3),0,1.55,.53),l.add(R.steel,O(.09,.4,.04),-n*.01,1.1,.95);else{for(let d of[-1,1])l.add(R.steel,O(.05,.03,.14),d*.04,1.03,.92);l.add(R.woodDark,O(.05,.7,.7),0,1.5,.53)}if(l.build(o),o.children.forEach(d=>{d.position.set(0,-1.06,-.53),d.updateMatrix()}),s){let d=new Ot(O(.03,.14,.09),R.black);d.position.set(t.x-n*.115,i+1.2,t.z-.78),this.groups[t.level].add(d);let u=new Ot(O(.012,.02,.02),Tn(16724787,1.5));u.position.set(t.x-n*.132,i+1.25,t.z-.78),this.groups[t.level].add(u),e.userData.led=u}let c=this.addCol(t.level,[t.x-.1,t.z-.55,t.x+.1,t.z+.55],!0),h={d:t,g:e,leaf:o,col:c,k:t.open?1:0,side:n,slide:s};o.userData.it={type:"door",id:t.id,door:h,label:t.label},this.proxies.push(o),this.doors.push(h)}plate(t,e,i,n,s,a,o,l="#d9dee4",c="#0b1220"){let h=ms(256,Math.max(16,Math.round(256*o/a)),(u,f,m)=>{u.fillStyle=l,u.fillRect(0,0,f,m),u.fillStyle=c,u.font=`700 ${Math.round(m*.62)}px ui-monospace,Consolas,monospace`,u.textAlign="center",u.fillText(e,f/2,m*.72,f-8)},!1),d=new Ot(new $i(a,o),new Ee({map:h}));return d.position.set(i,n,s),t.add(d),d}buildDevice(t){let e=new Te;e.position.fromArray(t.pos),e.rotation.y=t.rot,this.groups[t.level].add(e);let i=this.dev[t.id]={d:t,group:e,ports:{},leds:{},base:{},flash:{}},n=new Bi,s=t.type,a=(d,u,f,m,x,p,g)=>{i.ports[d]={l:new Ra(u,f,m),ln:new Ra(x,p,g)}},o=(d,u,f,m,x=1)=>{let p=new Ot(yf.led,new Ee({color:1118481}));p.scale.setScalar(x),p.position.set(u,f,m),e.add(p),i.leds[d]=p},l=[.6,.3,.4,0,.15,0];if(s==="pc"){n.add(R.black,O(.24,.015,.18),0,.008,-.05),n.add(R.black,O(.04,.14,.03),0,.08,-.09),n.add(R.black,O(.58,.36,.025),0,.31,-.07),n.add(R.black,O(.38,.016,.13),0,.008,.2),n.add(R.black,O(.06,.022,.1),.29,.011,.2),n.add(R.metalDark,O(.19,.42,.44),.5,.21,-.08),n.add(R.black,O(.17,.4,.006),.5,.21,.142),n.add(R.socket,O(.02,.016,.008),.5,.12,-.303);let d=ms(256,160,()=>{},!1),u=new Ot(new $i(.55,.33),new Ee({map:d}));u.position.set(0,.31,-.0565),e.add(u),i.screen=d,a("eth0",.5,.12,-.31,0,0,-1),o("eth0",.5,.36,.147,1.6),l=[1.25,.62,.7,.18,.3,0]}else if(s==="switch"||s==="router"||s==="firewall"){let u=s==="switch"?.066:.09,f=.28,m=t.ifaces.length,x=s==="switch"?.03:.07,p=s==="switch"?-.075:-.03;n.add(s==="switch"?R.devSwitch:s==="router"?R.devRouter:R.devFw,O(.48,u,f),0,u/2,0),n.add(R.black,O(.48-.02,u-.016,.006),0,u/2,f/2+.002);for(let g of[-1,1])n.add(R.metal,O(.035,u,.004),g*(.48/2+.016),u/2,f/2-.003);if(t.ifaces.forEach((g,v)=>{let w=p+v*x+(s==="switch"&&v>=m-2?.015:0),b=u/2-.01;n.add(R.socket,O(.02,.016,.008),w,b,f/2+.005),a(g.name,w,b,f/2+.012,0,0,1),o(g.name,w,b+.02,f/2+.0065)}),s!=="switch"&&n.add(R.ledB,O(.02,.016,.006),.2,u/2-.01,f/2+.005),this.plate(e,t.name,-.165,u/2,f/2+.0062,.135,Math.min(.036,u-.03),s==="firewall"?"#fecaca":"#d9dee4"),l=[.6,u+.12,.4,0,u/2,0],t.room!=="server"&&t.room!=="noc")for(let g of[-1,1])for(let v of[-1,1])n.add(R.black,de(.012,.012,.006,8),g*.2,.003,v*.1);else n.add(R.rack,O(.7,.012,s==="switch"&&t.room==="noc"?.5:.9),0,-.006,t.room==="noc"?-.05:-.3)}else if(s==="server"){n.add(R.devSrv,O(.47,.176,.62),0,.088,-.14),n.add(R.black,O(.45,.16,.006),0,.088,.172),n.add(R.rack,O(.7,.012,.9),0,-.006,-.3);for(let d=0;d<2;d++)for(let u=0;u<6;u++)n.add(R.metalDark,O(.052,.06,.006),-.19+u*.058,.05+d*.075,.176),n.add(u%3?R.ledG:R.ledB,O(.006,.006,.004),-.205+u*.058,.03+d*.075,.18);n.add(R.socket,O(.02,.016,.008),.19,.04,.176),a("eth0",.19,.04,.184,0,0,1),o("eth0",.19,.062,.178),this.plate(e,t.name,.17,.13,.1765,.1,.026),l=[.6,.3,.7,0,.09,-.1]}else if(s==="ap"){let d=de(.11,.11,.035,24);n.add(R.white,d,0,0,.018,0,Math.PI/2),n.add(R.ledB,new Ys(.05,.004,6,24),0,0,.037),a("eth0",0,-.1,.01,0,-1,0),o("eth0",0,0,.038,1.5),l=[.4,.4,.2,0,0,.05]}else n.add(R.white,O(.08,.12,.012),0,0,.006),n.add(R.socket,O(.022,.018,.008),0,-.012,.012),a("front",0,-.012,.02,0,0,1),a("back",0,0,-.1,0,.3,-1),this.plate(e,t.name.replace(/^WJ-/,"D·").slice(-6),0,.036,.0125,.06,.02,"#fff"),l=[.3,.34,.16,0,0,.04];n.build(e);let c=new Ot(O(l[0],l[1],l[2]),R.proxy);c.position.set(l[3],l[4],l[5]),c.userData.it={type:"device",id:t.id,dev:t},e.add(c),this.proxies.push(c);let h=i.tag=_f(t.name,"");h.position.set(t.pos[0],t.pos[1]+(s==="pc"?.78:s==="walljack"?.3:.4),t.pos[2]),h.visible=!1,this.groups[t.level].add(h)}refresh(t){for(let e in this.dev){let i=this.dev[e],n=i.d;for(let o of n.ifaces){let l=i.leds[o.name];if(!l)continue;let c=t.cableOn(n.id,o.name);i.base[o.name]=o.up?o._link?2293606:c?16750848:1118481:c?5575936:1118481,l.material.color.setHex(i.base[o.name])}let s=n.ifaces.find(o=>o.ip)||n.ifaces[0],a=n.type==="walljack"?"outlet dinding (pasif)":n.type==="switch"?"switch L2":s.ip?s.ip+(s.dhcp?" (DHCP)":""):"tanpa IP";if(i.tag.userData.set(n.name,a,n.type==="walljack"||n.type==="switch"?"#7dd3fc":n.ifaces.some(o=>o._link)?"#4ade80":"#f87171"),i.screen){let o=i.screen.userData.g,l=n.ifaces[0],c=l._link,h=o.createLinearGradient(0,0,256,160);h.addColorStop(0,"#0b2a4a"),h.addColorStop(1,"#123e63"),o.fillStyle=h,o.fillRect(0,0,256,160),o.fillStyle="rgba(5,10,18,.86)",o.fillRect(14,12,228,118),o.fillStyle="#1e293b",o.fillRect(14,12,228,20),o.fillStyle="#e2e8f0",o.font="600 13px system-ui,sans-serif",o.textAlign="left",o.fillText(n.name+" — Status Jaringan",20,26),o.font="12px ui-monospace,Consolas,monospace",o.fillStyle=c?"#4ade80":"#f87171",o.fillText(c?"● Ethernet: Tersambung":"● Ethernet: Kabel terputus",22,52),o.fillStyle="#cbd5e1",o.fillText("IPv4   : "+(l.ip||"—")+(l.dhcp?"  (DHCP)":""),22,72),o.fillText("Mask   : "+(l.mask||"—"),22,88),o.fillText("Gateway: "+(n.gateway||"—"),22,104),o.fillText("DNS    : "+(n.dns||"—"),22,120),o.fillStyle="#0f172a",o.fillRect(0,142,256,18),o.fillStyle="#38bdf8",o.fillRect(6,146,10,10),o.fillStyle="#94a3b8",o.fillText("[E] buka konsol",140,155),i.screen.needsUpdate=!0}}}blink(t,e){let i=this.dev[t];i&&i.leds[e]&&(i.flash[e]=.07,i.leds[e].material.color.setHex(15400938))}buildNpc(t){let e=new Te;e.position.fromArray(t.pos),e.rotation.y=t.rot,this.groups[t.level].add(e);let i=Gt({color:t.skin,roughness:.6}),n=Gt({color:t.shirt,roughness:.85}),s=Gt({color:2106411,roughness:.9}),a=Gt({color:t.hair,roughness:.95}),o=new Bi;for(let v of[-1,1]){o.add(s,de(.082,.06,.82,10),v*.092,.46,0),o.add(R.black,O(.1,.075,.27),v*.092,.038,.045),o.add(n,de(.056,.046,.58,8),v*.262,1.13,0,0,0,v*.09);let w=Vn(.045,8,6);w.scale(1,1.3,.8),o.add(i,w,v*.29,.8,0)}let l=de(.2,.168,.62,14);l.scale(1,1,.62),o.add(n,l,0,1.15,0);let c=Vn(.215,14,8);c.scale(1,.36,.6),o.add(n,c,0,1.44,0);let h=Vn(.172,12,8);h.scale(1,.55,.66),o.add(s,h,0,.86,0),o.add(i,de(.047,.052,.1,10),0,1.5,0),o.add(R.white,O(.05,.07,.008),.085,1.28,.128),o.build(e);let d=new Te;d.position.y=1.615,e.add(d);let u=new Bi,f=Vn(.105,18,14);f.scale(.94,1.13,1.02),u.add(i,f);let m=new xn(.112,18,10,0,Math.PI*2,0,Math.PI*.56);m.scale(.97,1.12,1.06),u.add(a,m,0,.012,-.012,0,-.3);for(let v of[-1,1]){u.add(R.black,Vn(.011,8,6),v*.037,.012,.098);let w=Vn(.02,6,6);w.scale(.5,1,.8),u.add(i,w,v*.099,0,0)}let x=Vn(.014,6,6);x.scale(.9,1.2,1.2),u.add(i,x,0,-.016,.106),u.build(d);let p=new Ot(O(.62,1.8,.5),R.proxy);p.position.y=.9,p.userData.it={type:"npc",id:t.id,npc:t,label:t.name},e.add(p),this.proxies.push(p);let g=_f(t.name,t.role,"#fbbf24");g.position.y=1.98,g.scale.set(.9,.225,1),g.visible=!1,e.add(g),this.colBox(t.level,t.pos[0],t.pos[2],.5,.5),this.npcs.push({n:t,g:e,head:d,tag:g,rot:t.rot})}buildPickup(t){let e=new Te;e.position.fromArray(t.pos),this.groups[t.level].add(e);let i=new Bi;if(t.kind==="cable"){for(let a=0;a<3;a++)i.add(R.cableBlue,new Ys(.1-a*.012,.014,6,20),0,.015+a*.024,0,0,Math.PI/2);i.add(R.glass,O(.012,.02,.03),.1,.05,0)}else if(t.kind==="crimper")i.add(R.red,O(.03,.025,.2),-.02,.013,.03,.12),i.add(R.red,O(.03,.025,.2),.03,.013,.03,-.12),i.add(R.steel,O(.07,.03,.09),0,.015,-.1),i.add(R.white,O(.1,.04,.07),.16,.02,0);else{i.add(R.yellow,O(.085,.035,.17),0,.018,0),i.add(R.black,O(.06,.004,.05),0,.037,-.04),i.add(R.yellow,O(.06,.03,.08),.14,.015,.02);for(let a=0;a<4;a++)i.add(R.ledG,O(.008,.004,.008),-.025+a*.016,.038,.03)}i.build(e);let n=new Ot(new ns(.15,.17,28),new Ee({color:3718648,transparent:!0,opacity:.8,side:mi,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.004,e.add(n);let s=new Ot(O(.42,.3,.42),R.proxy);s.position.y=.1,s.userData.it={type:"pickup",id:t.id,pickup:t,label:t.label},e.add(s),this.proxies.push(s),this.pickups[t.id]={p:t,g:e,ring:n,proxy:s},t.taken&&this.takePickup(t.id)}takePickup(t){let e=this.pickups[t];if(!e)return;e.g.visible=!1;let i=this.proxies.indexOf(e.proxy);i>=0&&this.proxies.splice(i,1)}drawNoc(t,e){let i=t.dev("diag-ws-01");this.signs.nocwall&&this.signs.nocwall.draw((n,s,a)=>{n.fillStyle="#04080f",n.fillRect(0,0,s,a),n.fillStyle="#38bdf8",n.font="700 26px system-ui,sans-serif",n.textAlign="left",n.fillText("NOC · PEMANTAUAN JARINGAN LANGSUNG (ICMP dari DIAG-WS-01)",18,34),n.textAlign="right",n.fillStyle="#94a3b8",n.font="20px ui-monospace,monospace",n.fillText(`frame: ${t.capN}   t=${t.t.toFixed(0)}s   ${e||""}`,s-18,34),(i.monitor||[]).forEach((o,l)=>{let c=i.monStat[o.ip],h=18+l*((s-36)/4),d=(s-36)/4-12,u=c&&c.ok;n.fillStyle=c?u?"#064e3b":"#7f1d1d":"#1e293b",n.fillRect(h,52,d,a-70),n.fillStyle=c?u?"#34d399":"#f87171":"#64748b",n.fillRect(h,52,d,6),n.textAlign="left",n.fillStyle="#fff",n.font="700 40px system-ui,sans-serif",n.fillText(c?u?"UP":"DOWN":"…",h+12,106),n.font="18px ui-monospace,monospace",n.fillStyle="#e2e8f0",n.fillText(o.ip,h+12,136),n.fillStyle="#cbd5e1",n.font="16px system-ui,sans-serif",n.fillText(o.name,h+12,162,d-20),u&&(n.fillStyle="#a7f3d0",n.fillText(c.ms.toFixed(1)+" ms",h+12,188))})})}drawTv(t){this.signs.tv&&this.signs.tv.draw((e,i,n)=>{let s=e.createLinearGradient(0,0,i,n);s.addColorStop(0,"#06121f"),s.addColorStop(1,"#0d2238"),e.fillStyle=s,e.fillRect(0,0,i,n),e.fillStyle="#38bdf8",e.font="800 44px system-ui,sans-serif",e.textAlign="left",e.fillText("BRIEFING — 6 TAHAP KOMISIONING GEDUNG",40,70),t.forEach((a,o)=>{let l=130+o*70,c=a.obj.filter(h=>h.done).length;e.fillStyle=a.done?"#34d399":"#e2e8f0",e.font="600 32px system-ui,sans-serif",e.fillText((a.done?"✔ ":"○ ")+a.title,40,l),e.fillStyle="#7d93a8",e.font="24px system-ui,sans-serif",e.fillText(a.sub,70,l+30),e.fillStyle="#1e293b",e.fillRect(i-300,l-22,240,16),e.fillStyle=a.done?"#34d399":"#38bdf8",e.fillRect(i-300,l-22,240*c/a.obj.length,16)})})}collide(t,e,i){for(let n=0;n<2;n++)for(let s of this.col[i]){if(!s.on)continue;let a=Math.max(s.x0,Math.min(t.x,s.x1)),o=Math.max(s.z0,Math.min(t.z,s.z1)),l=t.x-a,c=t.z-o,h=l*l+c*c;if(!(h>=e*e))if(h>1e-9){let d=Math.sqrt(h),u=(e-d)/d;t.x+=l*u,t.z+=c*u}else{let d=[t.x-s.x0,s.x1-t.x,t.z-s.z0,s.z1-t.z],u=Math.min(...d);u===d[0]?t.x=s.x0-e:u===d[1]?t.x=s.x1+e:u===d[2]?t.z=s.z0-e:t.z=s.z1+e}}}blocked(t,e,i,n,s,a){let o=i-t,l=n-e;for(let c of this.col[s]){if(!c.on||!c.wall||c===a)continue;let h=0,d=1,u=!0;for(let[f,m,x,p]of[[t,o,c.x0,c.x1],[e,l,c.z0,c.z1]])if(Math.abs(m)<1e-9){if(f<x||f>p){u=!1;break}}else{let g=(x-f)/m,v=(p-f)/m;if(g>v&&([g,v]=[v,g]),h=Math.max(h,g),d=Math.min(d,v),h>d){u=!1;break}}if(u&&h<.97)return!0}return!1}update(t,e,i){let n=this.T+=t,s=e.level,a=Ql(e.x,e.z)||Ca(e.x,e.z)||this.lift.phase==="moving";this.ov?(this.groups[0].visible=this.ov.show[0],this.groups[1].visible=this.ov.show[1]):(this.groups[0].visible=s===0||a,this.groups[1].visible=s===1||a),this.updateLift(t,i);for(let f of this.doors){let m=f.d.open?1:0;f.k!==m&&(f.k+=Math.sign(m-f.k)*t/.45,(m-f.k)*(m?1:-1)<0&&(f.k=m));let x=f.k*f.k*(3-2*f.k);f.slide?(f.g.position.z=f.d.z-.53+x*1.08,f.g.userData.led&&f.g.userData.led.material.color.setHex(f.d.open?3407718:16724787)):f.g.rotation.y=f.side*x*1.5,f.col.on=f.k<.6}for(let f in this.dev){let m=this.dev[f];for(let x in m.flash)(m.flash[x]-=t)<=0&&(delete m.flash[x],m.leds[x].material.color.setHex(m.base[x]||1118481))}this.blinkers[0].color.setScalar(1).multiply(bv.setHex(3407735)).multiplyScalar(1.1+.7*(Math.sin(n*9)>-.2?1:0)),this.blinkers[1].color.setHex(16755234).multiplyScalar(.6+1.2*(Math.sin(n*3.1)>0?1:0)),this.blinkers[2].color.setHex(4500223).multiplyScalar(1+.8*Math.sin(n*5.3)**2);for(let f of this.npcs){let m=e.x-f.g.position.x,x=e.z-f.g.position.z,p=Math.hypot(m,x),g=f.n.level===s&&p<6;f.tag.visible=!this.ov&&f.n.level===s&&p<4.6;let v=Math.atan2(m,x),w=(E,T)=>Math.atan2(Math.sin(E-T),Math.cos(E-T));f.g.rotation.y+=w(g&&p<3.2?v:f.rot,f.g.rotation.y)*Math.min(1,t*2.5);let b=g?Math.max(-1.1,Math.min(1.1,w(v,f.g.rotation.y))):Math.sin(n*.4+f.g.position.x)*.25;f.head.rotation.y+=(b-f.head.rotation.y)*Math.min(1,t*4),f.head.rotation.x=Math.sin(n*.7+f.g.position.z)*.04,f.g.scale.y=1+Math.sin(n*1.6+f.g.position.x)*.004}for(let f in this.pickups){let m=this.pickups[f];m.g.visible&&(m.ring.material.opacity=.45+.4*Math.sin(n*4),m.ring.scale.setScalar(1+.12*Math.sin(n*4)))}let o=this.fixtures,l=e.y+1.6,c=new Set,h=[];for(let f of o){if(f.lv>=0&&f.lv!==s&&!a)continue;let m=Math.hypot(f.x-e.x,f.z-e.z,(f.y-l)*1.5);m<12.5&&h.push([m,f])}h.sort((f,m)=>f[0]-m[0]);let d=h.slice(0,this.pool.length),u=new Map(d.map(f=>[f[1],f[0]]));for(let f of this.pool)f.userData.fx&&u.has(f.userData.fx)?c.add(f.userData.fx):f.userData.fx=null;for(let f of this.pool){if(!f.userData.fx){let p=d.find(g=>!c.has(g[1]));p&&(f.userData.fx=p[1],c.add(p[1]),f.position.set(p[1].x,p[1].y,p[1].z),f.color.setHex(p[1].col),f.intensity=0)}let m=f.userData.fx,x=m?9.5*this.dimK*Math.max(0,Math.min(1,(12-u.get(m))/4)):0;f.intensity+=(x-f.intensity)*Math.min(1,t*6)}}},bv=new Rt;var Ze=L,xb=new Ze,dr=(r,t,e)=>Math.max(t,Math.min(e,r)),Dh={blue:2450411,yellow:15381256,green:1483594,orange:16347926,red:14427686,white:15067115,gray:7041664,wall:4674921},kh={up:2278750,warn:16096779,down:12131356,open:6583435,fault:16723245},Fh={ARP:"#fbbf24",ICMP:"#22d3ee",DHCP:"#c084fc",DNS:"#fb923c",UDP:"#94a3b8"};function gs(r){let t=fs(r);if(t.proto==="ICMP"){let e=r.ip.icmp.type;return e==="echo-reply"?"#4ade80":e==="echo-request"?"#22d3ee":"#f87171"}return Fh[t.proto]||"#94a3b8"}function Sv(r){let t=r.vlan!=null?` · VLAN ${r.vlan}`:"";if(r.type==="ARP"){let i=r.arp;return(i.op===1?i.spa===i.tpa?`ARP umumkan ${i.spa}`:`ARP siapa ${i.tpa}?`:`ARP ${i.spa} di sini`)+t}let e=r.ip;if(e.icmp){let i=e.icmp.type;return(i==="echo-request"?"PING":i==="echo-reply"?"REPLY":i==="ttl-exceeded"?"TTL HABIS":"UNREACHABLE")+` → ${e.dst} · ttl ${e.ttl}`+t}return e.dhcp?`DHCP ${e.dhcp.op}`+(e.dhcp.yiaddr?` ${e.dhcp.yiaddr}`:"")+t:e.dns?(e.dns.qr?`DNS ${e.dns.q} = ${e.dns.a||"NXDOMAIN"}`:`DNS ${e.dns.q}?`)+t:`${e.proto} → ${e.dst}`+t}var bf={ICMP:()=>new xn(.03,12,8),ARP:()=>new qr(.046),DHCP:()=>new _i(.05,.05,.05),DNS:()=>new Xr(.044)},Nh=97,Mv=14,ec=class{constructor(t,e){this.w=t,this.sim=e,this.root=new Te,t.scene.add(this.root),this.cables=new Map,this.vision=!1,this.map=!1,this.labels=!0,this.yo=[0,0],this.show=[!0,!0],this.flights=[],this.fid=0,this.free={},this.geo={},this.T=0,this.carry=null,this.fx=[],this.fxFree=[],this.drops=[],this.labFree=[],this.labN=0,this.labSet=new Set,this.leadPos=null;let i=a=>{let o=document.createElement("canvas");return o.width=o.height=64,a(o.getContext("2d")),new kn(o)};this.halo=i(a=>{let o=a.createRadialGradient(32,32,1,32,32,32);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.25,"rgba(255,255,255,.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=o,a.fillRect(0,0,64,64)}),this.ringTex=i(a=>{a.strokeStyle="#fff",a.lineWidth=5,a.beginPath(),a.arc(32,32,25,0,7),a.stroke()}),this.xTex=i(a=>{a.strokeStyle="#fff",a.lineWidth=9,a.lineCap="round",a.beginPath(),a.moveTo(14,14),a.lineTo(50,50),a.moveTo(50,14),a.lineTo(14,50),a.stroke()}),this.carryMat=new Ei({color:Dh.blue,roughness:.6}),this.selS=new Ni(new Ti({map:this.ringTex,color:8246268,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0})),this.selS.renderOrder=58,this.selS.visible=!1,this.root.add(this.selS);let n=(a,o)=>(a.renderOrder=o,a.visible=!1,a.frustumCulled=!1,this.root.add(a),a),s={blending:yi,depthTest:!1,depthWrite:!1,transparent:!0};this.meS=n(new Ni(new Ti({map:this.halo,color:16777215,...s})),58),this.devPts=n(new es(new ce,new ts({size:17,map:this.halo,vertexColors:!0,sizeAttenuation:!1,...s})),43),this.buildHolo()}curveFor(t){let e=this.w.dev[t.a.dev],i=this.w.dev[t.b.dev];if(!e||!i)return null;let n=e.ports[t.a.port],s=i.ports[t.b.port];if(!n||!s)return null;let a=e.d.level,o=i.d.level,l=this.yo[a],c=this.yo[o],h=n.pos.clone(),d=s.pos.clone();h.y+=l,d.y+=c;let u=h.clone().addScaledVector(n.n,.1),f=d.clone().addScaledVector(s.n,.1),m=t.color==="wall"||a!==o||e.d.room!==i.d.room,x=h.distanceTo(d);if(m){let D=0;for(let X of t.id)D=D*31+X.charCodeAt(0)&1023;let C=D%7-3,N=hi.x+C*.07,U=Jt[a]+l+3+hi.h+C*.025,H=Jt[o]+c+3+hi.h+C*.025,I=[h.clone(),u,new Ze(u.x,U,u.z),new Ze(N,U,u.z)];if(a!==o){let X=hi.riserX+C*.018,W=hi.riserZ+C*.03;I.push(new Ze(N,U,W),new Ze(X,U,W),new Ze(X,H,W),new Ze(N,H,W))}I.push(new Ze(N,H,f.z),new Ze(f.x,H,f.z),f,d.clone());let V=[I[0]];for(let X of I)X.distanceTo(V[V.length-1])>.03&&V.push(X);return{hidden:m,curve:new gn(V,!1,"catmullrom",0)}}if(x<2.6){let D=u.clone().add(f).multiplyScalar(.5);return D.y=Math.max(Jt[a]+l+.02,Math.min(h.y,d.y)-Math.min(.4,.08+x*.2)),D.addScaledVector(n.n,.05).addScaledVector(s.n,.05),{hidden:m,curve:new gn([h.clone(),u,D,f,d.clone()])}}let p=Jt[a]+l+.014,g=new Ze(u.x+n.n.x*.06,p,u.z+n.n.z*.06),v=new Ze(f.x+s.n.x*.06,p,f.z+s.n.z*.06),w=0;for(let D of t.id)w=w*31+D.charCodeAt(0)&1023;let b=(w%7-3)*.05,E=v.clone().sub(g).normalize(),T=new Ze(-E.z,0,E.x),_=(D,C,N)=>new Ze(D.x-C.x*N,p,D.z-C.z*N),M=[h.clone(),u,new Ze(u.x,(u.y+p)/2,u.z),g,e.d.type==="pc"?_(g,n.n,.95):g.clone().addScaledVector(E,.25),g.clone().lerp(v,.5).addScaledVector(T,b),i.d.type==="pc"?_(v,s.n,.95):v.clone().addScaledVector(E,-.25),v,new Ze(f.x,(f.y+p)/2,f.z),f,d.clone()];return{hidden:m,curve:new gn(M,!1,"centripetal")}}drop1(t){this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.glow.geometry.dispose(),t.glow.material.dispose()}sync(){let t=new Set(this.sim.cables.map(i=>i.id)),e=this.map?3:1;for(let[i,n]of this.cables)t.has(i)||(this.drop1(n),this.cables.delete(i));for(let i of this.sim.cables){let n=this.cables.get(i.id);if(!n){let s=this.curveFor(i);if(!s)continue;let a=s.curve.getLength(),o=new Ei({color:Dh[i.color]||Dh.blue,roughness:.6}),l=new Ot(new ss(s.curve,Math.max(20,Math.ceil(a*9)),(s.hidden?.014:.0105)*e,6,!1),o);l.castShadow=!s.hidden,l.receiveShadow=!0;let c=new Ot(new ss(s.curve,Math.max(14,Math.ceil(a*5)),.034*e,6,!1),new Ee({transparent:!0,opacity:.32,blending:yi,depthTest:!1,depthWrite:!1}));c.renderOrder=39,c.visible=!1,l.add(c),n={c:i,mesh:l,glow:c,curve:s.curve,len:a,hidden:s.hidden,base:o.color.getHex(),lv:[this.w.dev[i.a.dev].d.level,this.w.dev[i.b.dev].d.level]},this.cables.set(i.id,n),this.root.add(l)}n.st=this.sim.cableState(i).st}this.applyVision(),this.syncHolo(),this.syncDevPts()}syncDevPts(){if(!(this.devPts.visible=this.map))return;let t=[],e=[],i=new Rt;for(let s in this.w.dev){let a=this.w.dev[s].d;this.show[a.level]&&(i.set(a.type==="walljack"?"#64748b":a.ifaces.some(o=>o._link)?a.type==="switch"?"#38bdf8":"#4ade80":"#f87171"),t.push(a.pos[0],a.pos[1]+this.yo[a.level]+.1,a.pos[2]),e.push(i.r,i.g,i.b))}this.devPts.geometry.dispose();let n=this.devPts.geometry=new ce;n.setAttribute("position",new Xt(t,3)),n.setAttribute("color",new Xt(e,3))}rebuild(){for(let t of this.cables.values())this.drop1(t);this.cables.clear(),this.sync()}setVision(t){this.vision=t,this.applyVision()}setMap(t,e,i){let n=e[0]!==this.yo[0]||e[1]!==this.yo[1]||t!==this.map;this.map=t,this.yo=e,this.show=i,n?this.rebuild():(this.applyVision(),this.syncDevPts()),t||(this.selS.visible=!1,this.leadPos=null)}setSel(t){this.selS.visible=!!t,t&&this.selS.position.copy(t)}applyVision(){let t=this.vision||this.map;for(let e of this.cables.values()){let i=e.mesh.material;i.depthTest=!t,i.transparent=t,i.opacity=t?.9:1,e.mesh.renderOrder=t?40:0,t?(i.color.setHex(725536),i.emissive.setHex(kh[e.st]||6583435),i.emissiveIntensity=e.st==="up"?2:1.3):(i.color.setHex(e.base),i.emissive.setHex(0)),e.glow.visible=t,e.glow.material.color.setHex(kh[e.st]||6583435),e.glow.material.opacity=e.st==="up"?.34:.2,i.needsUpdate=!0}}setCarry(t,e){this.carry&&(this.root.remove(this.carry.mesh),this.carry.mesh.geometry.dispose()),this.carry=t?{port:t,mesh:new Ot(new ce,this.carryMat)}:null,this.carry&&(this.carry.mesh.frustumCulled=!1,this.root.add(this.carry.mesh))}onTransit(t){if(this.flights.length>120)return;let e=t.segs.map(n=>({id:n.cable.id,rev:!(n.cable.a.dev===n.from.dev&&n.cable.a.port===n.from.port),from:n.from,to:n.to}));if(!e.length)return;let i=fs(t.frame).proto;this.flights.push({id:++this.fid,segs:e,t0:t.t0,k:-1,col:new Rt(gs(t.frame)),css:gs(t.frame),kind:bf[i]?i:"ICMP",proto:i,text:Sv(t.frame),bc:t.frame.dst===Mn,m:null,lab:null,shown:!1})}onDrop(t,e,i){if(!this.w.dev[t.id]||this.fx.length>40)return;let n=new Ze(t.pos[0],t.pos[1]+(t.type==="pc"?.42:.12),t.pos[2]);this.addFx(n,t.level,16726832,.1,.75,.7,this.xTex),this.drops.length>5&&this.drops.shift(),this.drops.push({id:++this.fid,p:n,lv:t.level,t:0,text:"✕ "+String(i).replace(/\s*\(.*?\)/g,"").slice(0,52),lab:null})}addFx(t,e,i,n,s,a,o){let l=this.fxFree.pop();l||(l=new Ni(new Ti({blending:yi,depthWrite:!1,transparent:!0})),l.renderOrder=57,this.root.add(l)),l.material.map=o,l.material.color.setHex(i),l.material.needsUpdate=!0,this.fx.push({s:l,p:t,lv:e,r0:n,r1:s,dur:a,t:0})}getMesh(t){let i=(this.free[t]||(this.free[t]=[])).pop();if(!i){let n=a=>new Ni(new Ti({map:this.halo,blending:yi,depthWrite:!1,transparent:!0,...a}));i=new Ot(this.geo[t]||(this.geo[t]=bf[t]()),new Ee),i.renderOrder=45,i.userData.kind=t;let s=n({});s.scale.setScalar(.24),i.add(s),i.userData.s=s,i.userData.tr=[0,1,2].map(a=>{let o=n({opacity:.6-a*.17});return o.renderOrder=44,o.visible=!1,this.root.add(o),o}),this.root.add(i)}return i.visible=!0,i}getLabel(){let t=this.labFree.pop();if(!t&&this.labN<Mv){let e=document.createElement("canvas");e.width=512,e.height=96;let i=new kn(e);i.colorSpace=Ke,t=new Ni(new Ti({map:i,depthTest:!1,transparent:!0,fog:!1})),t.renderOrder=62,t.userData.g=e.getContext("2d"),this.labN++,this.root.add(t)}return t||null}setLabel(t,e,i){let n=t.userData.g;n.clearRect(0,0,512,96),n.font="600 38px system-ui,Segoe UI,sans-serif";let s=Math.min(480,n.measureText(e).width),a=256-s/2-14;n.fillStyle="rgba(6,12,22,.88)",n.beginPath(),n.roundRect(a,14,s+28,68,16),n.fill(),n.strokeStyle=i,n.lineWidth=3,n.stroke(),n.fillStyle="#fff",n.textAlign="center",n.fillText(e,256,61,480),t.material.map.needsUpdate=!0,t.visible=!0}freeLabel(t){t.lab&&(t.lab.visible=!1,this.labFree.push(t.lab),t.lab=null,this.labSet.delete(t.text))}release(t){if(t.m){t.m.visible=!1;for(let e of t.m.userData.tr)e.visible=!1;this.free[t.kind].push(t.m),t.m=null}this.freeLabel(t),t.shown=!1}update(t,e,i,n){let s=this.sim.t,a=this.T+=t,o=this.map,l=this.vision||o,c=n.position,h=this.flights.length<44,d=this.hPk&&!o?this.hPk.geometry.attributes.position:null,u=d&&this.hPk.geometry.attributes.color,f=0,m=null;if(d){let x=.55+.45*Math.sin(a*6);d.setXYZ(0,e.x,e.y+1,e.z),u.setXYZ(0,x,x,x),f=1}for(let x=this.flights.length-1;x>=0;x--){let p=this.flights[x];if(s<p.t0)continue;let g=Math.floor((s-p.t0)/.11);if(g!==p.k){let U=p.segs[p.k],H=p.segs[g];U&&this.w.blink(U.to.dev,U.to.port),H&&this.w.blink(H.from.dev,H.from.port),p.k=g}let v=p.segs[g],w=v&&this.cables.get(v.id);if(!w){if(!v&&p.shown){let U=p.segs[p.segs.length-1],H=this.w.dev[U.to.dev];H&&H.ports[U.to.port]&&this.fx.length<40&&this.addFx(H.ports[U.to.port].pos.clone(),H.d.level,p.col.getHex(),.05,l?.5:.2,.32,this.ringTex)}this.release(p),this.flights.splice(x,1);continue}if(!p.m){let U=p.m=this.getMesh(p.kind);U.material.color.copy(p.col).multiplyScalar(1.8),U.userData.s.material.color.copy(p.col);for(let H of U.userData.tr)H.material.color.copy(p.col)}let b=p.m,E=dr((s-p.t0)/.11-g,0,1),T=v.rev?1-E:E;w.curve.getPointAt(T,b.position),d&&f<Nh&&(d.setXYZ(f,b.position.x,b.position.y,b.position.z),u.setXYZ(f,p.col.r,p.col.g,p.col.b),f++);let _=p.shown=o?this.show[w.lv[0]]||this.show[w.lv[1]]:l||!w.hidden&&(i||w.lv.includes(e.level));b.visible=_;let M=b.userData.tr;if(!_){for(let U of M)U.visible=!1;this.freeLabel(p);continue}let D=b.position.distanceTo(c),C=o?dr(D*.17,2.4,12):l?2.3:1.3;if(b.scale.setScalar(C),p.kind!=="ICMP"&&(b.rotation.x+=t*2.2,b.rotation.y+=t*3.1),b.material.depthTest===l){b.material.depthTest=!l,b.userData.s.material.depthTest=!l;for(let U of M)U.material.depthTest=!l}let N=(v.rev?1:-1)*Math.min(.1,.085*C/w.len);for(let U=0;U<3;U++){let H=M[U];H.visible=h,h&&(w.curve.getPointAt(dr(T+N*(U+1),0,1),H.position),H.scale.setScalar(.17*C*(1-U*.22)))}(!m||m.proto==="ARP"&&p.proto!=="ARP"||m.proto==="ARP"==(p.proto==="ARP")&&p.t0>m.t0)&&(m=p),l&&!o&&this.labels&&D<15?(!p.lab&&!this.labSet.has(p.text)&&(p.lab=this.getLabel(),p.lab&&(this.setLabel(p.lab,p.text,p.css),this.labSet.add(p.text))),p.lab&&(p.lab.position.copy(b.position),p.lab.position.y+=.16,p.lab.scale.set(.75,.14,1))):this.freeLabel(p)}this.leadPos=m?(this.leadPos||new Ze).copy(m.m.position):this.leadPos,d&&(d.needsUpdate=u.needsUpdate=!0,this.hPk.geometry.setDrawRange(0,f));for(let x=this.fx.length-1;x>=0;x--){let p=this.fx[x],g=(p.t+=t)/p.dur;if(g>=1){p.s.visible=!1,this.fxFree.push(p.s),this.fx.splice(x,1);continue}let v=o?this.show[p.lv]:l||i||p.lv===e.level;if(p.s.visible=v,!v)continue;let w=o?dr(p.p.distanceTo(c)*.05,1,5):l?1:.6;p.s.position.copy(p.p),p.s.position.y+=this.yo[p.lv],p.s.scale.setScalar((p.r0+(p.r1-p.r0)*(1-(1-g)*(1-g)))*w),p.s.material.opacity=1-g*g,p.s.material.depthTest=!l}for(let x=this.drops.length-1;x>=0;x--){let p=this.drops[x];if((p.t+=t)>2.6){this.freeLabel(p),this.drops.splice(x,1);continue}l&&!o&&this.labels&&p.lv===e.level&&p.p.distanceTo(c)<15?(p.lab||(p.lab=this.getLabel(),p.lab&&(this.setLabel(p.lab,p.text,"#f87171"),this.labSet.add(p.text))),p.lab&&(p.lab.position.copy(p.p),p.lab.position.y+=.22+p.t*.12,p.lab.scale.set(.9,.168,1),p.lab.material.opacity=Math.min(1,(2.6-p.t)*2))):this.freeLabel(p)}for(let x of this.cables.values())x.mesh.visible=o?this.show[x.lv[0]]||this.show[x.lv[1]]:l?!0:!x.hidden&&(i||x.lv.includes(e.level)),l&&x.st==="fault"&&(x.mesh.material.emissiveIntensity=.4+1.4*(Math.sin(a*9)>0?1:0));for(let x in this.w.dev){let p=this.w.dev[x];p.tag.visible=l&&!o&&p.d.level===e.level&&Math.hypot(p.d.pos[0]-e.x,p.d.pos[2]-e.z)<13}if(this.selS.visible){let x=dr(this.selS.position.distanceTo(c)*.05,.5,3)*(1+.12*Math.sin(a*6));this.selS.scale.setScalar(x)}(this.meS.visible=o&&this.show[e.level])&&(this.meS.position.set(e.x,e.y+1+this.yo[e.level],e.z),this.meS.scale.setScalar(dr(this.meS.position.distanceTo(c)*.035,.6,2.6)*(1+.22*Math.sin(a*5)))),this.holo&&(this.holo.visible=this.hRing.visible=!o&&(i||e.level===ve.level),this.holo.visible&&(this.hRing.rotation.y=a*.5,this.hRing.material.opacity=.35+.2*Math.sin(a*2.2)))}updateCarry(t){if(!this.carry)return;let e=this.carry.port.pos,i=this.carry.port.n,n=e.clone().addScaledVector(i,.1),s=e.distanceTo(t),a=n.clone().lerp(t,.5);a.y=Math.min(e.y,t.y)-Math.min(.9,.1+s*.18);let o=Math.floor((t.y-.7)/4+.5)*4+.02;a.y<o&&(a.y=o);let l=new ss(new gn([e.clone(),n,a,t.clone()]),22,.0105,5,!1);this.carry.mesh.geometry.dispose(),this.carry.mesh.geometry=l}buildHolo(){let e=this.holo=new Te;e.scale.set(.05,.05*1.9,.05),e.position.set(ve.x,Jt[ve.level]+ve.top+.06,ve.z-.05),this.root.add(e);let i={transparent:!0,blending:yi,depthWrite:!1},n=[],s=[],a=new Rt,o=[],l=(u,f,m,x,p,g,v)=>{n.push(u,f,m,x,p,g),s.push(a.r*v,a.g*v,a.b*v,a.r*v,a.g*v,a.b*v)};for(let u of vi)for(let f of u.level<0?[0,1]:[u.level]){let[m,x,p,g]=u.b,v=Jt[f]+.03,w=Jt[f]+3;a.set(u.color);for(let[E,T]of[[v,.9],[w,.22]])l(m,E,p,x,E,p,T),l(x,E,p,x,E,g,T),l(x,E,g,m,E,g,T),l(m,E,g,m,E,p,T);for(let[E,T]of[[m,p],[x,p],[x,g],[m,g]])l(E,v,T,E,w,T,.22);let b=new $i(x-m,g-p);b.rotateX(-Math.PI/2),b.translate((m+x)/2,Jt[f],(p+g)/2),o.push(b)}let c=new ce;c.setAttribute("position",new Xt(n,3)),c.setAttribute("color",new Xt(s,3)),e.add(new qs(c,new Qn({vertexColors:!0,opacity:.8,...i}))),e.add(new Ot(Zl(o,!1),new Ee({color:1929144,opacity:.09,side:mi,...i}))),this.hCab=new qs(new ce,new Qn({vertexColors:!0,opacity:.95,...i})),e.add(this.hCab);let h=u=>new ts({size:u,map:this.halo,vertexColors:!0,sizeAttenuation:!0,...i});this.hDev=new es(new ce,h(.05)),e.add(this.hDev);let d=new ce;d.setAttribute("position",new Je(new Float32Array(Nh*3),3)),d.setAttribute("color",new Je(new Float32Array(Nh*3),3)),d.setDrawRange(0,0),this.hPk=new es(d,h(.085)),e.add(this.hPk);for(let u of e.children)u.frustumCulled=!1,u.renderOrder=30;this.hRing=new Ot(new ns(.86,.9,48,1,0,Math.PI*1.6),new Ee({color:3718648,opacity:.5,side:mi,...i})),this.hRing.rotation.x=-Math.PI/2,this.hRing.rotation.order="YXZ",this.hRing.position.set(ve.x,Jt[ve.level]+ve.top+.012,ve.z),this.root.add(this.hRing)}syncHolo(){if(!this.holo||this.map)return;let t=[],e=[],i=new Rt;for(let o of this.cables.values()){let l=o.pts||(o.pts=o.curve.getSpacedPoints(Math.max(8,Math.ceil(o.len*2.5))));i.setHex(kh[o.st]||6583435),o.st==="up"&&i.multiplyScalar(1.25);for(let c=0;c<l.length-1;c++)t.push(l[c].x,l[c].y,l[c].z,l[c+1].x,l[c+1].y,l[c+1].z),e.push(i.r,i.g,i.b,i.r,i.g,i.b)}let n=(o,l,c)=>{o.geometry.dispose();let h=o.geometry=new ce;h.setAttribute("position",new Xt(l,3)),h.setAttribute("color",new Xt(c,3))};n(this.hCab,t,e);let s=[],a=[];for(let o in this.w.dev){let l=this.w.dev[o].d;l.type!=="walljack"&&(i.set(l.type==="switch"?"#38bdf8":l.ifaces.some(c=>c._link)?"#4ade80":"#f87171"),s.push(l.pos[0],l.pos[1]+.1,l.pos[2]),a.push(i.r,i.g,i.b))}n(this.hDev,s,a)}};var Ki=(r,t={})=>new Ei({color:r,roughness:.55,...t}),ic=class{constructor(t,e){this.cam=t,this.w=e,this.x=0,this.y=0,this.z=11.5,this.yaw=0,this.pitch=0,this.level=0,this.vx=0,this.vz=0,this.bob=0,this.stepAcc=0,this.keys={},this.sens=1,this.invert=!1,this.onStep=null,this.moving=!1,this.sway=0,t.rotation.order="YXZ";let i=this.vm=new Te;i.position.set(.27,-.25,-.5),t.add(i),this.tools={};let n=(a,o)=>{let l=new Te;o(l),l.visible=!1,i.add(l),this.tools[a]=l},s=(a,o,l,c,h,d,u,f,m=0,x=0,p=0)=>{let g=new Ot(new _i(l,c,h),o);return g.position.set(d,u,f),g.rotation.set(m,x,p),a.add(g),g};n("cable",a=>{s(a,Ki(15265266,{transparent:!0,opacity:.85}),.028,.02,.05,0,0,-.05),s(a,Ki(13938487,{metalness:.9,roughness:.3}),.022,.004,.016,0,.012,-.066);let o=new Ot(new is(.008,.008,.34,8),Ki(2450411));o.rotation.x=Math.PI/2-.25,o.position.set(0,-.04,.14),a.add(o),s(a,Ki(2450411),.026,.022,.05,0,0,-.005)}),n("tester",a=>{s(a,Ki(15184918),.1,.03,.19,0,0,0,.5),s(a,Ki(724756),.07,.004,.06,0,.024,-.05,.5);for(let o=0;o<8;o++)s(a,new Ee({color:o%2?3407735:1719589}),.006,.004,.006,-.032+o*.009,.003,.03,.5)}),n("crimper",a=>{s(a,Ki(11805464),.028,.024,.22,-.03,0,.06,0,.16),s(a,Ki(11805464),.028,.024,.22,.03,0,.06,0,-.16),s(a,Ki(10134187,{metalness:.9,roughness:.3}),.075,.03,.1,0,0,-.09)}),n("laptop",a=>{s(a,Ki(2303790,{metalness:.6}),.3,.012,.2,-.06,-.02,0),s(a,Ki(2303790,{metalness:.6}),.3,.2,.01,-.06,.075,-.105,-.25),s(a,new Ee({color:1929144}),.28,.18,.002,-.06,.076,-.098,-.25)})}setTool(t){for(let e in this.tools)this.tools[e].visible=e===t}look(t,e){let i=.0022*this.sens;this.yaw-=t*i,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-e*i*(this.invert?-1:1))),this.sway+=t*6e-4}place(t,e,i,n=0){this.x=t,this.y=e,this.z=i,this.yaw=n,this.pitch=0,this.vx=this.vz=0,this.level=e>=1.99?1:0}update(t,e){let i=e?this.keys:{},n=(i.KeyW||i.ArrowUp?1:0)-(i.KeyS||i.ArrowDown?1:0),s=(i.KeyD?1:0)-(i.KeyA?1:0);i.ArrowLeft&&(this.yaw+=2*t),i.ArrowRight&&(this.yaw-=2*t);let a=(i.ShiftLeft||i.ShiftRight?5.4:3.1)/(n&&s?Math.SQRT2:1),o=Math.sin(this.yaw),l=Math.cos(this.yaw),c=(-o*n+l*s)*a,h=(-l*n-o*s)*a,d=Math.min(1,t*11);this.vx+=(c-this.vx)*d,this.vz+=(h-this.vz)*d;let u=Math.max(1,Math.ceil(Math.hypot(this.vx,this.vz)*t/.12)),f=this.x,m=this.z;for(let v=0;v<u;v++)this.x+=this.vx*t/u,this.z+=this.vz*t/u,this.w.collide(this,.32,this.level);let x=this.w.groundY(this.x,this.z,this.y);this.y+=(x-this.y)*Math.min(1,t*16),Math.abs(x-this.y)<.002&&(this.y=x),this.level=this.y>=1.99?1:0;let p=Math.hypot(this.x-f,this.z-m);this.moving=p>t*.4,this.moving&&(this.bob+=p*2.1,this.stepAcc+=p,this.stepAcc>(a>4?1.05:.78)&&(this.stepAcc=0,this.onStep&&this.onStep()));let g=this.cam;g.position.set(this.x,this.y+1.66+Math.sin(this.bob*2)*.022*(this.moving?1:0),this.z),g.rotation.set(this.pitch,this.yaw,0),this.sway*=Math.max(0,1-t*8),this.vm.position.set(.27-this.sway+Math.cos(this.bob)*.006,-.25+Math.abs(Math.sin(this.bob))*.008,-.5),this.vm.rotation.set(0,this.sway*1.5,0)}hand(t){return t.set(.2,-.22,-.45).applyMatrix4(this.cam.matrixWorld)}};var nc=class{constructor(){this.ctx=null,this.vol=.6,this.muted=!1,this.hum=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.apply();let e=this.ctx.sampleRate*2,i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0),s=0;for(let h=0;h<e;h++){let d=Math.random()*2-1;s=(s+.02*d)/1.02,n[h]=s*3.2+d*.03}this.noise=i;let a=this.ctx.createBufferSource();a.buffer=i,a.loop=!0;let o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=420,this.humGain=this.ctx.createGain(),this.humGain.gain.value=.05,a.connect(o).connect(this.humGain).connect(this.master),a.start();let l=this.ctx.createOscillator();l.type="sawtooth",l.frequency.value=58;let c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=180,this.srvGain=this.ctx.createGain(),this.srvGain.gain.value=0,l.connect(c).connect(this.srvGain).connect(this.master),l.start()}catch{this.ctx=null}}apply(){this.master&&(this.master.gain.value=this.muted?0:this.vol)}ambience(t){if(!this.ctx)return;let e=this.ctx.currentTime;this.humGain.gain.setTargetAtTime(.04+t*.16,e,.3),this.srvGain.gain.setTargetAtTime(t*.05,e,.3)}tone(t,e=.08,i="sine",n=.12,s=0,a){if(!this.ctx)return;let o=this.ctx.currentTime+s,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=i,l.frequency.setValueAtTime(t,o),a&&l.frequency.exponentialRampToValueAtTime(a,o+e),c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(n,o+.008),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c).connect(this.master),l.start(o),l.stop(o+e+.02)}burst(t=.06,e=900,i=.2,n=1,s=0){if(!this.ctx)return;let a=this.ctx.currentTime+s,o=this.ctx.createBufferSource(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();o.buffer=this.noise,o.loop=!0,l.type="bandpass",l.frequency.value=e,l.Q.value=n,c.gain.setValueAtTime(i,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(c).connect(this.master),o.start(a,Math.random()),o.stop(a+t+.02)}play(t){switch(t){case"step":this.burst(.07,260+Math.random()*120,.55,.8);break;case"click":this.tone(880,.04,"square",.04);break;case"key":this.burst(.025,2600+Math.random()*900,.12,2);break;case"ok":this.tone(660,.09,"sine",.1),this.tone(990,.14,"sine",.1,.08);break;case"err":this.tone(190,.2,"sawtooth",.08,0,120);break;case"pickup":this.tone(520,.07,"triangle",.12),this.tone(780,.07,"triangle",.12,.06),this.tone(1040,.12,"triangle",.12,.12);break;case"plug":this.burst(.03,1800,.5,3),this.tone(140,.06,"sine",.15,.01);break;case"door":this.burst(.3,320,.35,.7),this.tone(95,.25,"sine",.1,0,60);break;case"slide":this.burst(.7,700,.22,1.2),this.tone(1320,.08,"sine",.08);break;case"ding":this.tone(1175,.5,"sine",.14),this.tone(880,.7,"sine",.14,.22);break;case"liftMove":this.tone(70,3.1,"triangle",.1,0,90);break;case"ping":this.tone(1500,.05,"sine",.05);break;case"pingFail":this.tone(240,.08,"square",.03);break;case"level":[523,659,784,1047,1319].forEach((e,i)=>this.tone(e,.28,"triangle",.13,i*.11));break;case"vision":this.tone(300,.25,"sine",.08,0,1200);break}}};var wt=r=>String(r??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),zt=(r,t=document)=>t.querySelector(r),Sf={pc:"🖥",switch:"⇄",router:"◎",firewall:"🛡",server:"▤",ap:"📶",walljack:"◘"},Uh={pc:"Workstation",switch:"Switch Layer 2",router:"Router",firewall:"Firewall / Router Edge",server:"Server",ap:"Access Point",walljack:"Outlet Dinding RJ45 (pasif)"},Oh=["Putih-Oranye","Oranye","Putih-Hijau","Biru","Putih-Biru","Hijau","Putih-Coklat","Coklat"],Mf={"Putih-Oranye":["#fff","#f97316"],Oranye:["#f97316","#f97316"],"Putih-Hijau":["#fff","#22c55e"],Biru:["#3b82f6","#3b82f6"],"Putih-Biru":["#fff","#3b82f6"],Hijau:["#22c55e","#22c55e"],"Putih-Coklat":["#fff","#92400e"],Coklat:["#92400e","#92400e"]},xs={"isp-gw-01":[.92,.18],"fw-edge-01":[.76,.18],"r-core-01":[.58,.18],"sw-core-01":[.58,.375],"srv-main-01":[.76,.375],"sw-dist-01":[.34,.13],"diag-ws-01":[.46,.33],"wj-ofc-01":[.08,.3],"pc-office-01":[.08,.48],"wj-ofc-02":[.2,.3],"pc-office-02":[.2,.48],"wj-brf-01":[.32,.3],"noc-brief-01":[.32,.48],"sw-cfg-01":[.62,.68],"sw-cfg-02":[.84,.68],"pc-cfg-10":[.56,.88],"pc-cfg-20":[.68,.88],"pc-cfg-11":[.78,.88],"pc-cfg-21":[.9,.88],"r-lab-01":[.1,.72],"sw-lab-01":[.26,.72],"pc-lab-01":[.2,.9],"ap-lab-01":[.36,.9]},wv=[["Core · Data Center (Lt 12)",.5,.03,.49,.44,"#10b981"],["Akses Kantor (Lt 11) via IDF NOC",.02,.03,.46,.54,"#60a5fa"],["Laboratorium",.02,.62,.42,.36,"#22d3ee"],["Ruang Konfigurasi",.5,.58,.49,.4,"#2dd4bf"]],Tv={ios:["enable","configure terminal","show ip interface brief","show running-config","show vlan brief","show mac address-table","show ip route","show interfaces trunk","show cdp neighbors","end","?"],win:["ipconfig /all","ping ","tracert ","nslookup ","arp -a","ipconfig /renew","help"],nix:["ip addr","systemctl status dhcpd","systemctl start dhcpd","systemctl start named","dhcp-lease-list","ss -lun","help"]},sc=class{constructor(t){this.G=t,this.modal=null,this.termDirty=!1,this.acc=0,this.mmT=0,this.lastPrompt=null,this.trackSig="";let e=this.app=zt("#app");e.insertAdjacentHTML("beforeend",`
      <div id="vfx"></div>
      <div id="hud" class="hidden">
        <div id="cross"></div><div id="prompt"></div><div id="carry"></div>
        <div id="tracker"></div>
        <div id="mini"><canvas width="220" height="184"></canvas><div id="mini-lbl"></div></div>
        <div id="ticker"></div>
        <div id="maplab"></div>
        <div id="mappanel" class="hidden"><div id="mp-top"></div><div id="mp-info" class="mp-sel"></div><div class="mp-k"><b>Seret</b> putar · <b>klik kanan-seret</b> / <b>W A S D</b> geser · <b>roda</b> zoom<br><b>Klik</b> perangkat = pilih · <b>Shift+klik</b> perangkat lain = ping uji<br><b>1</b> / <b>2</b> tampilkan Lantai 11 / 12 · <b>Tab</b> misi · <b>L</b> NetScope · <b>Esc</b> keluar</div></div>
        <div id="status"></div>
        <div id="toolbar"></div>
        <div id="keys"><b>Tab</b> Misi · <b>L</b> NetScope · <b>V</b> Visi Jaringan · <b>N</b> Peta 3D · <b>T</b> Tempo · <b>H</b> Petunjuk · <b>G</b> Arahan Kerja · <b>Esc</b> Menu</div>
      </div>
      <div id="banner"></div><div id="toasts"></div><div id="modal"></div><div id="title"></div>`),this.hud=zt("#hud"),this.mm=zt("#mini canvas").getContext("2d"),e.addEventListener("click",i=>{let n=i.target.closest("[data-act]");n&&(i.preventDefault(),this.act(n.dataset.act,n.dataset,n))}),zt("#modal").addEventListener("mousedown",i=>{i.target.id==="modal"&&this.modal&&!this.modal.lock&&this.close()})}toast(t,e="info",i=3800){let n=document.createElement("div");for(n.className="toast "+e,n.innerHTML=t,zt("#toasts").appendChild(n),setTimeout(()=>n.classList.add("out"),i),setTimeout(()=>n.remove(),i+400);zt("#toasts").children.length>5;)zt("#toasts").firstChild.remove()}banner(t,e){let i=zt("#banner");i.innerHTML=`<div class="b-big">${wt(t)}</div><div class="b-small">${wt(e)}</div>`,i.className="show",clearTimeout(this.bT),this.bT=setTimeout(()=>i.className="",4600)}open(t,e,i={}){this.modal={kind:t,...i};let n=zt("#modal");return n.innerHTML=`<div class="win ${i.cls||""}">${e}</div>`,n.className="show",this.G.onModal(!0),n.firstChild}close(){if(!this.modal)return;let t=this.modal;this.modal=null,zt("#modal").className="",zt("#modal").innerHTML="",t.onClose&&t.onClose(),this.G.onModal(!1)}head(t,e,i,n,s){return`<div class="mhead"><div class="mico">${t}</div><div class="mtit"><b>${wt(e)}</b><span>${wt(i||"")}</span></div>${n?`<nav class="tabs">${n.map(([a,o])=>`<button data-act="tab" data-k="${a}" class="${a===s?"on":""}">${o}</button>`).join("")}</nav>`:""}<button class="x" data-act="close">✕</button></div>`}act(t,e,i){let n=this.G;if(n.sfx.play("click"),t.startsWith("map-"))return i&&i.blur&&i.blur(),n.mapAct(t.slice(4),e);switch(t){case"close":return this.close();case"new":return n.newGame();case"continue":return n.continueGame();case"start":this.close();return;case"tab":this.modal.kind==="device"?(this.devTab=e.k,this.renderDevice()):this.modal.kind==="scope"&&(this.scopeTab=e.k,this.renderScope());return;case"chip":{let s=zt("#t-inp");s&&(s.value=e.c,s.focus());return}case"unplug":return n.removeCable(e.id),this.renderDevice();case"carry":return n.startCarry(this.devId,e.port),this.close();case"plug":n.connectCarry(this.devId,e.port)&&this.close();return;case"test":return this.openTester(this.devId,e.id);case"cfg-apply":return this.applyCfg();case"cfg-dhcp":{let s=n.sim.dev(this.devId),a=s.ifaces[0];return a.dhcp?n.sim.setIp(s,a,"",""):n.sim.setDhcpClient(s,a),this.renderDevice()}case"svc":{let s=n.sim.dev(this.devId);return s.svc[e.k]=!s.svc[e.k],n.sim.log("svc",`${s.name}: layanan ${e.k.toUpperCase()} ${s.svc[e.k]?"dijalankan":"dihentikan"}`),n.sim.changed(),this.renderDevice()}case"npc-opt":{let s=this.npc.options[+e.i];zt("#npc-ans").innerHTML=`<div class="q">Anda: ${wt(s.q)}</div><div class="a">${wt(s.a)}</div>`,s.action==="ticket"&&this.toast("📋 Tiket #404 diterima — lihat Misi [Tab].","ok");return}case"resume":return this.close();case"save":return n.save(!1);case"reset":i.dataset.sure?n.resetGame():(i.dataset.sure=1,i.textContent="Yakin? Klik lagi untuk menghapus progres");return;case"help":return this.openHelp();case"tutorial":return this.openTutorial();case"guidance":return this.openGuidance();case"guidance-map":this.close();return n.toggleMap(!0);case"logout-profile":return this.renderLogin();case"missions":return this.openMissions();case"wire":return this.crimpClick(+e.i);case"crimp":return this.crimpDo();case"crimp-hint":zt("#crimp-hint").classList.toggle("hidden");return;case"cap-row":return this.capSel=this.capSel===+e.n?null:+e.n,this.renderScope();case"cap-clear":return n.sim.capture.length=0,this.capSel=null,this.renderScope();case"cap-pause":return this.capPause=!this.capPause,this.renderScope();case"quality":return n.settings.quality=e.q,n.applyQuality(),this.openPause()}}showTitle(t){this.playerSaveAvailable=!!t;this.renderLogin()}
renderLogin(){let el=zt("#title");el.className="show";el.innerHTML=`
  <section class="login-shell">
    <div class="login-mark"><i>⌁</i> NETRUNNER HQ <span style="margin-left:auto;color:#64748b">SIMULATOR 5.0</span></div>
    <h1>NET<span>RUNNER</span></h1>
    <p>Masuk sebagai engineer untuk memulai simulasi operasi jaringan 3D. Profil ini hanya disimpan di perangkat/browser ini.</p>
    <form class="login-form" id="nr-login-form">
      <label>Nama Engineer<input id="nr-player-name" maxlength="28" autocomplete="nickname" placeholder="Contoh: Afit" required></label>
      <label>Asal Sekolah<input id="nr-school-name" maxlength="48" autocomplete="organization" value="SMKN 3 Kendari" placeholder="Contoh: SMKN 3 Kendari" required></label>
      <button class="pri" type="submit">MASUK KE NETRUNNER →</button>
    </form>
    <div class="login-foot">Tidak memerlukan kata sandi. Data profil hanya untuk identitas permainan, bukan akun keamanan.</div>
  </section>`;
  zt("#nr-login-form").addEventListener("submit",e=>{e.preventDefault();this.enterPlayer()});
  let saved=(()=>{try{return JSON.parse(localStorage.getItem("netrunner5_profile")||"null")}catch(e){return null}})();
  if(saved){zt("#nr-player-name").value=saved.name||"";zt("#nr-school-name").value=saved.school||""}
}
enterPlayer(){let name=zt("#nr-player-name").value.trim(),school=zt("#nr-school-name").value.trim();if(!name||!school){this.toast("Isi nama engineer dan asal sekolah terlebih dahulu.","warn");return}
  this.profile={name,school};try{localStorage.setItem("netrunner5_profile",JSON.stringify(this.profile))}catch(e){}
  this.renderMainMenu()
}
renderMainMenu(){let t=this.playerSaveAvailable;zt("#title").innerHTML=`
  <section class="menu-shell">
    <div class="t-ver">NETRUNNER HQ · PLAYER PROFILE</div>
    <h1 style="font-size:clamp(42px,6vw,70px);line-height:1;margin:14px 0">NET<span style="color:#38bdf8">RUNNER</span></h1>
    <h2 style="font-size:18px;color:#b9c7d6;font-weight:500">Selamat datang, ${wt(this.profile.name)}</h2>
    <p>${wt(this.profile.school)} · Network Operations Engineer</p>
    <p>Jelajahi gedung operasi jaringan dua lantai, pasang kabel, konfigurasi perangkat, dan selesaikan misi troubleshooting.</p>
    <div class="t-btn"><button class="pri" data-act="new">▶ Mulai Shift Baru</button>${t?'<button data-act="continue">Lanjutkan Shift Tersimpan</button>':""}</div>
    <div class="t-btn" style="margin-top:0"><button data-act="tutorial">📘 Tutorial Permainan</button><button data-act="help">⌨ Kontrol Keyboard</button><button data-act="logout-profile">Ganti Profil</button></div>
    <div class="t-keys"><span><b>W A S D</b> jalan</span><span><b>Mouse</b> lihat</span><span><b>E</b> interaksi</span><span><b>Tab</b> daftar misi</span></div>
  </section>`}
openTutorial(){this.open("tutorial",`${this.head("📘","Panduan Bermain NETRUNNER","Tutorial pemula · ikuti langkah secara berurutan")}<div class="mbody pad">
  <div class="callout"><b>Tujuan permainan</b><br>Bangun dan pulihkan jaringan gedung. Selesaikan objektif misi yang tampil di panel kiri atas. Progress dan XP akan bertambah saat objektif berhasil.</div>
  <div class="tutorial-grid">
    <div class="tutorial-step"><b>01 · Mulai bergerak</b>Gunakan <b>W A S D</b> untuk berjalan, mouse untuk mengubah arah pandang, dan <b>Shift</b> untuk berlari.</div>
    <div class="tutorial-step"><b>02 · Berinteraksi</b>Arahkan titik tengah layar ke pintu, perangkat, NPC, atau barang. Tekan <b>E</b> atau klik kiri untuk berinteraksi.</div>
    <div class="tutorial-step"><b>03 · Gunakan alat</b>Tekan <b>1–5</b> atau roda mouse untuk memilih tangan, kabel UTP, LAN Tester, tang crimping, dan laptop.</div>
    <div class="tutorial-step"><b>04 · Sambungkan kabel</b>Pilih Kabel [2], dekati port perangkat dan tekan <b>E</b>. Dekati port tujuan lalu tekan <b>E</b> lagi. Tekan <b>Q</b> untuk membatalkan.</div>
    <div class="tutorial-step"><b>05 · Konfigurasi</b>Gunakan <b>E</b> pada router, switch, PC, atau server untuk membuka konsol. Ketik perintah yang sesuai dengan instruksi misi.</div>
    <div class="tutorial-step"><b>06 · Periksa jaringan</b>Gunakan perintah <b>ping</b> untuk menguji koneksi. Laptop NetScope [L] dan Peta [N] membantu memantau jaringan.</div>
  </div>
  <h4>Fitur penting</h4>
  <ul class="tips">
    <li><b>Tab / J</b> — buka daftar misi dan petunjuk objektif.</li>
    <li><b>L</b> — buka laptop NetScope untuk melihat topologi, paket, dan log.</li>
    <li><b>V</b> — aktifkan Visi Jaringan untuk melihat kabel dan paket data.</li>
    <li><b>N</b> — buka Peta Jaringan 3D seluruh gedung.</li>
    <li><b>H</b> — tampilkan/sembunyikan petunjuk objektif.</li>
    <li><b>Esc / P</b> — menu jeda dan pengaturan.</li>
  </ul>
  <div class="callout good"><b>Tips untuk pemain baru:</b> baca objektif aktif di panel kiri atas, selesaikan satu per satu, lalu cek kembali indikator selesai sebelum berpindah ke misi berikutnya.</div>
  <div class="row end"><button class="pri" data-act="resume">Mengerti, mulai bermain</button></div>
</div>`,{cls:"wide"})}
hideTitle(){zt("#title").className="",zt("#title").innerHTML="",this.hud.classList.remove("hidden")}openIntro(){this.open("intro",`${this.head("👋","Selamat datang, Engineer","NetRunner HQ · hari pertama")}<div class="mbody pad"><p>Gedung ini baru selesai dibangun dan jaringannya <b>belum dikomisioning</b>. Tugas Anda terbagi dalam 6 level — dari memasang kabel di Lab sampai membuka jalur internet lewat firewall.</p>
      <ul class="tips"><li><b>Lantai 11</b> (di sini): Lobi, Kantor Engineering, Ruang Briefing, Pantry.</li><li><b>Lantai 12</b>: Laboratorium, Ruang Konfigurasi, NOC, Ruang Server. Naik lewat <b>lift</b> (kanan lobi) atau <b>tangga darurat</b> (kiri lobi).</li>
      <li>Arahkan pandangan ke perangkat lalu tekan <b>E</b> untuk membuka konsolnya. Pilih alat <b>Kabel [2]</b> untuk menarik kabel dari port ke port.</li><li>Tekan <b>V</b> — <i>Visi Jaringan</i> — untuk melihat paket data berjalan di dalam kabel, bahkan menembus dinding dan plafon.</li>
      <li>Tekan <b>N</b> — <i>Peta Jaringan 3D</i> — untuk melayang keluar dan melihat <b>seluruh jaringan gedung</b> bekerja: kabel naik ke tray plafon, turun lewat riser, dan setiap frame (ARP, ping, DHCP, DNS) berjalan sebagai objek 3D.</li><li><b>L</b> membuka laptop <i>NetScope</i>: topologi langsung, penyadap paket ala Wireshark, dan log kejadian.</li></ul>
      <div class="row end"><button class="pri" data-act="start">Mulai bekerja</button></div></div>`,{cls:"narrow"})}openHelp(){let t=[["W A S D / panah","Berjalan (← → memutar badan)"],["Mouse","Melihat sekeliling (klik layar untuk mengunci kursor; bila tidak bisa, tahan & seret)"],["Shift","Berlari"],["E / klik kiri","Interaksi: pintu, perangkat, orang, barang, lift"],["1 2 3 4 5 / roda mouse","Pilih alat: Tangan, Kabel UTP, LAN Tester, Crimping, Laptop"],["Q / klik kanan","Batalkan kabel yang sedang dibawa"],["Tab / J","Daftar misi & petunjuk"],["L","Laptop NetScope (topologi, paket, log)"],["V","Visi Jaringan — lihat kabel & paket menembus dinding"],["N","Peta Jaringan 3D — seluruh gedung dari luar: semua kabel, paket, frame yang dibuang, tabel ARP/MAC tiap perangkat (juga lewat meja hologram di NOC)"],["T","Tempo simulasi 1× / 0.2× (gerak lambat untuk mengamati paket)"],["H","Tampilkan / sembunyikan petunjuk objektif"],["M","Bisukan suara"],["Esc / P","Menu jeda & pengaturan"]];this.open("help",`${this.head("⌨","Kontrol","Semua tombol")}<div class="mbody pad"><table class="kv">${t.map(e=>`<tr><td><b>${e[0]}</b></td><td>${e[1]}</td></tr>`).join("")}</table></div>`,{cls:"narrow"})}setPrompt(t){if(t===this.lastPrompt)return;this.lastPrompt=t;let e=zt("#prompt");e.innerHTML=t||"",e.className=t?"show":""}setCarry(t){let e=zt("#carry");e.innerHTML=t||"",e.className=t?"show":""}renderToolbar(){let{st:t}=this.G,e=t.inv;zt("#toolbar").innerHTML=Ea.map(n=>{let s=n.id==="hand"||n.id==="laptop"||(n.id==="cable"?!0:e[n.id]>0),a=n.id==="cable"?e.cable:n.id==="crimper"?e.rj45:null;return`<div class="tool ${t.tool===n.id?"on":""} ${s?"":"no"}"><i>${n.key}</i><b>${wt(n.short)}</b>${a!=null?`<em>${a}${n.id==="crimper"?" RJ45":""}</em>`:""}</div>`}).join("");let i=hr(t.xp);zt("#status").innerHTML=`<div class="rk">Lv ${i.level} · ${wt(i.title)}</div><div class="xp"><i style="width:${Math.min(100,i.cur/i.need*100)}%"></i></div><div class="xpn">${t.xp} XP</div>`}openGuidance(){let g=this.G,m=g.mis;if(!m||!m.list.length)return this.toast("Data misi belum tersedia.","warn");let mission=m.list[m.active]||m.list[m.list.length-1],room=vi.find(r=>r.id===mission.room),pending=mission.obj.findIndex(o=>!o.done),done=mission.obj.filter(o=>o.done).length,total=mission.obj.length,pct=Math.round(done/Math.max(1,total)*100),next=pending<0?null:mission.obj[pending];let body=`<div class="wg-wrap"><div class="wg-hero"><div class="wg-kicker">WORK GUIDANCE · PANDUAN KERJA</div><div class="wg-title">${wt(mission.title)}</div><div class="wg-meta">${wt(mission.brief||mission.sub||"Selesaikan pekerjaan sesuai urutan.")}<br>📍 Tujuan: <b>${wt(room?room.name:"Area kerja")}</b> · ${room?wt(ps[room.level]):"Lokasi misi"}</div><div class="wg-progress"><i style="width:${pct}%"></i></div><div class="wg-meta">${done} dari ${total} langkah selesai · ${pct}%</div></div><div class="wg-kicker">CHECKLIST PEKERJAAN</div>${mission.obj.map((o,i)=>`<div class="wg-step ${o.done?"done":""}"><div class="wg-num">${o.done?"✓":i+1}</div><div><b>${wt(o.text)}</b><small>${o.done?"Langkah terverifikasi selesai.":i===pending?"LANGKAH BERIKUTNYA · "+wt(o.hint||"Ikuti instruksi dan periksa perangkat terkait."):"Menunggu langkah sebelumnya selesai."}</small></div></div>`).join("")}${next?`<div class="wg-tip"><b>ARAHAN SEKARANG</b><br>${wt(next.hint||next.text)}<br><br>Datangi lokasi tujuan. Gunakan <b>N</b> untuk membuka Peta Jaringan 3D dan <b>Tab</b> untuk melihat daftar misi.</div>`:`<div class="wg-tip">Semua langkah pada misi ini telah terverifikasi. Lanjutkan ke misi berikutnya atau periksa laporan pekerjaan.</div>`}${mission.done?`<div class="wg-hero"><div class="wg-kicker">WORK REPORT · LAPORAN HASIL</div><div class="wg-title">✓ Pekerjaan Terverifikasi</div><div class="wg-meta">Misi ${wt(mission.title)} berhasil diselesaikan.<br>${done}/${total} objektif terpenuhi · Hadiah ${mission.xp||0} XP</div></div>`:""}<div class="wg-actions"><button class="pri" data-act="guidance-map">🗺 Buka Peta 3D (N)</button><button data-act="missions">☷ Daftar Misi (Tab)</button><button data-act="help">⌨ Kontrol</button></div></div>`;this.open("guidance",`${this.head("🧭","Arahan Kerja","Panduan langkah demi langkah")}${body}`,{cls:"wide"})}renderTracker(){let t=this.G,e=t.mis;if(!e)return;let i=e.list[e.active],n=JSON.stringify([e.active,i.obj.map(o=>o.done),t.settings.hints,e.allDone]);if(n===this.trackSig)return;this.trackSig=n;let s=i.obj.find(o=>!o.done),a=vi.find(o=>o.id===i.room);zt("#tracker").innerHTML=e.allDone?'<div class="tr-h">SEMUA LEVEL SELESAI ✔</div><div class="tr-s">Jaringan gedung beroperasi penuh. Silakan bereksperimen bebas.</div>':`<div class="tr-h">${wt(i.title)}</div><div class="tr-s">${wt(i.sub)} · 📍 ${wt(a.name)} (${ps[a.level]})</div>${i.obj.map(o=>`<div class="ob ${o.done?"d":o===s?"n":""}"><i>${o.done?"✔":"○"}</i>${wt(o.text)}</div>`).join("")}${s&&t.settings.hints?`<div class="hint">💡 ${wt(s.hint)}</div>`:""}<button class="wg-open" data-act="guidance">🧭 BUKA ARAHAN KERJA · TEKAN G</button>`}setMap(t){zt("#mappanel").classList.toggle("hidden",!t),zt("#maplab").innerHTML="",this.mapEls=[],this.mapSig="",t&&this.renderMap()}renderMap(){let t=this.G,e=t.map;if(!e)return;let i=s=>s?' class="on"':"",n=e.sel&&t.sim.dev(e.sel);zt("#mp-top").innerHTML=`<div class="mp-h"><span>◈ PETA JARINGAN 3D</span><button data-act="map-exit">✕ Keluar <b>N</b></button></div>
      <div class="mp-row"><button data-act="map-lv" data-k="1"${i(e.show[1])}>Lantai 12</button><button data-act="map-lv" data-k="0"${i(e.show[0])}>Lantai 11</button><button data-act="map-split"${i(e.split)}>⇕ Pisah lantai <b>X</b></button></div>
      <div class="mp-row"><button data-act="map-follow"${i(e.follow)}>🎯 Ikuti paket <b>F</b></button><button data-act="map-tempo"${i(t.sim.speed<1)}>🐢 Gerak lambat <b>T</b></button><button data-act="map-reset">⟲ <b>R</b></button></div>
      <div class="mp-leg"><span><i style="color:#22d3ee">●</i>ICMP echo (ping)</span><span><i style="color:#4ade80">●</i>ICMP reply</span><span><i style="color:#fbbf24">▲</i>ARP</span><span><i style="color:#c084fc">■</i>DHCP</span><span><i style="color:#fb923c">◆</i>DNS</span><span><i style="color:#f87171">✕</i>frame dibuang</span>
      <span><u style="background:#22c55e"></u>link aktif</span><span><u style="background:#f59e0b"></u>bermasalah</span><span><u style="background:#b91c1c"></u>link mati</span><span><u style="background:#ff2d2d"></u>kabel rusak</span></div>
      ${n?`<div class="mp-row" style="margin:8px 0 0"><button data-act="map-ping"${i(e.pingFrom)}>📡 ${e.pingFrom?"Klik perangkat tujuan…":"Ping uji dari sini"}</button><button data-act="map-desel">Batal pilih</button></div>`:""}`,this.mapInfo()}mapInfo(){let t=this.G,e=t.map,i=zt("#mp-info");if(!e)return;let n=e.sel&&t.sim.dev(e.sel),s;if(!n)s='<div class="dim">Klik sebuah perangkat untuk melihat isinya secara langsung: antarmuka, tabel ARP, tabel MAC, rute, dan lease DHCP.</div>';else{let a=vi.find(c=>c.id===n.room),o=(c,h)=>h.length?`<h5>${c}</h5><table>${h.map(d=>`<tr><td>${d[0]}</td><td>${d[1]}</td></tr>`).join("")}</table>`:"",l=n.ifaces.filter(c=>c._link||c.ip||n.ifaces.length<=4);s=`<div class="mp-n">${Sf[n.type]||""} <b>${wt(n.name)}</b><small>${wt(Uh[n.type]||n.type)} · ${wt(a?a.name:"")} · ${ps[n.level]}</small></div>`+o("ANTARMUKA",l.map(c=>[`<i class="dot ${c._link?"up":"dn"}"></i>${wt(c.name)}`,c.ip?`${wt(c.ip)}/${li(c.mask)}`:n.type==="switch"?c.mode==="trunk"?"trunk":"VLAN "+c.vlan:n.type==="walljack"?"pasif":c.dhcp?"menunggu DHCP…":"tanpa IP"]))+(n.gateway||n.dns?o("GATEWAY · DNS",[[wt(n.gateway||"—"),wt(n.dns||"—")]]):"")+o("TABEL ARP · IP → MAC",[...n.arp||[]].slice(-6).map(([c,h])=>[wt(c),wt(h.mac)]))+(n.type==="switch"&&n.mac?o("TABEL MAC · MAC → port",[...n.mac.values()].slice(-8).map(c=>[wt(c.mac),`${wt(c.port)} · VLAN ${c.vlan}`])):"")+o("RUTE STATIS",(n.routes||[]).slice(0,6).map(c=>[`${wt(c.net)}/${li(c.mask)}`,"via "+wt(c.via)]))+o("LEASE DHCP",(n.leases||[]).slice(-5).map(c=>[wt(c.ip),wt(c.host||c.mac)]))+'<div class="dim" style="font-size:11px;margin-top:6px">Untuk mengonfigurasi, datangi perangkatnya dan buka konsol dengan <b>E</b>.</div>'}s!==this.mapSig&&(this.mapSig=s,i.innerHTML=s)}mapLabels(t){let e=zt("#maplab"),i=this.mapEls||(this.mapEls=[]);for(let n=0;n<t.length;n++){let s=t[n],a=i[n];a||(a=i[n]=document.createElement("div"),e.appendChild(a));let o=s.c+"|"+s.t+"|"+(s.s||"")+"|"+(s.col||"");a._k!==o&&(a._k=o,a.className="ml "+s.c,a.innerHTML=wt(s.t)+(s.s?`<small>${wt(s.s)}</small>`:""),a.style.borderColor=s.col||""),a.style.transform=`translate(${s.x.toFixed(1)}px,${s.y.toFixed(1)}px) translate(-50%,-100%)`,a._h&&(a._h=!1,a.style.display="")}for(let n=t.length;n<i.length;n++)i[n]._h||(i[n]._h=!0,i[n].style.display="none")}ticker(){let t=this.G.sim.capture.slice(-7);zt("#ticker").innerHTML=`<div class="tk-h">${this.G.map?"PETA 3D":"VISI JARINGAN"} · frame terakhir${this.G.sim.speed<1?" · gerak lambat":""}</div>`+t.map(e=>{let i=fs(e.f);return`<div><b style="color:${gs(e.f)}">${i.proto}</b> ${wt(e.a)}→${wt(e.b)} <span>${wt(i.info)}</span></div>`}).join("")+`<div class="tk-l">${Object.entries(Fh).slice(0,4).map(([e,i])=>`<i style="background:${i}"></i>${e}`).join(" ")}</div>`}minimap(t){let e=this.mm,i=220,n=184,s=this.G,a=t.level,o=d=>(d+17.2)*6.4,l=d=>(d+13)*6.4+4,c=s.mis&&!s.mis.allDone?s.mis.list[s.mis.active].room:null;e.clearRect(0,0,i,n),e.fillStyle="rgba(6,12,22,.82)",e.fillRect(0,0,i,n);for(let d of vi){if(d.level!==a&&d.level!==-1)continue;let[u,f,m,x]=d.b,p=d.id===c;e.fillStyle=p?`rgba(250,204,21,${.22+.14*Math.sin(performance.now()/300)})`:d.color+"26",e.fillRect(o(u),l(m),(f-u)*6.4,(x-m)*6.4),e.strokeStyle=p?"#facc15":d.color+"aa",e.lineWidth=p?1.6:1,e.strokeRect(o(u)+.5,l(m)+.5,(f-u)*6.4-1,(x-m)*6.4-1),e.fillStyle=p?"#fde68a":"#9fb3c8",e.font="9px system-ui,sans-serif",e.textAlign="center",e.fillText(d.short,o((u+f)/2),l((m+x)/2)+3)}e.fillStyle="#a78bfa",e.fillRect(o(9.2),l(8),13,13),e.fillStyle="#fff",e.font="8px system-ui",e.fillText("LIFT",o(10.25),l(9.2));for(let d of s.world.doors)d.d.level===a&&(e.fillStyle=d.d.open?"#4ade80":"#f8fafc",e.fillRect(o(d.d.x)-1.5,l(d.d.z)-3.5,3,7));for(let d in s.world.dev){let u=s.world.dev[d].d;u.level!==a||u.type==="walljack"||(e.fillStyle=u.type==="pc"?"#7dd3fc":u.type==="switch"?"#34d399":u.type==="server"?"#f472b6":"#fb923c",e.fillRect(o(u.pos[0])-1.5,l(u.pos[2])-1.5,3,3))}for(let d of s.world.npcs)d.n.level===a&&(e.fillStyle="#fbbf24",e.beginPath(),e.arc(o(d.n.pos[0]),l(d.n.pos[2]),2.2,0,7),e.fill());for(let d in s.world.pickups){let u=s.world.pickups[d];u.p.level!==a||!u.g.visible||(e.strokeStyle="#22d3ee",e.strokeRect(o(u.p.pos[0])-2.5,l(u.p.pos[2])-2.5,5,5))}e.save(),e.translate(o(t.x),l(t.z)),e.rotate(-t.yaw),e.fillStyle="#fff",e.strokeStyle="#0ea5e9",e.lineWidth=1.5,e.beginPath(),e.moveTo(0,-7),e.lineTo(4.5,5),e.lineTo(0,2.5),e.lineTo(-4.5,5),e.closePath(),e.fill(),e.stroke(),e.restore();let h=s.room;zt("#mini-lbl").textContent=(h?h.name:"")+" · "+(h&&h.level===-1?"antar lantai":ps[a])}openDevice(t,e){
let i=this.G.sim.dev(t);
if(!i){this.toast("Perangkat tidak ditemukan.","warn");return;}
this.devId=t;
this.devTab=e||(i.type==="walljack"?"ports":"term");
/* Akses PC hanya membuka antarmuka. Posisi dan rotasi pemain tidak diubah,
   sehingga pemain tidak berpindah/teleport saat membuka workstation. */
this.pcAppMode=false;
this.open("device",'<div id="dev-root"></div><div class="pc-focus-hud"><b>WORKSTATION</b> · Anda sedang mengakses '+wt(i.label||i.name)+' · <b>ESC</b> untuk kembali</div>',{
  cls:"wide",
  live:!0
});
if(i.type==="pc")zt("#modal").classList.add("pc3d");
this.renderDevice();
}addPcDesktopReturn(){let h=zt('#dev-root .mhead');if(!h)return;let b=document.createElement('button');b.textContent='⌂ Desktop';b.style.marginRight='8px';b.addEventListener('click',()=>{this.pcAppMode=false;this.renderDevice()});h.prepend(b)}
renderDevice(){let t=this.G,e=t.sim.dev(this.devId);if(e&&e.type==="pc"&&!this.pcAppMode){
  let apps=[['term','⌨️','Terminal','Konsol perintah jaringan'],['analyzer','📊','Network Analyzer','Pantau topologi dan paket'],['wifi','📶','WiFi Mapper','Pemetaan koneksi jaringan'],['ports','🔌','Control Panel','Port dan koneksi perangkat'],['firewall','🛡️','Firewall','Aturan keamanan jaringan'],['files','📁','File Explorer','Informasi workstation'],['assistant','🤖','AI Assistant','Panduan belajar dan misi'],['cfg','⚙️','System Settings','Konfigurasi perangkat'],['missions','🎯','Mission Center','Daftar misi dan progres belajar'],['capture','📡','Packet Capture','Lihat paket jaringan yang berjalan'],['tutorial','📘','Help & Tutorial','Panduan kontrol dan cara bermain']];
  if(!this.pcLoggedIn){zt("#dev-root").innerHTML=`<div class="pc-os"><div class="pc-top">⚙ TECH-BOOK PRO <span class="pc-led">--:--</span></div><div class="pc-login"><div class="pc-avatar">👨‍💻</div><h2>Administrator</h2><form class="pc-loginbox" id="pc-login-form"><label>Username</label><input id="pc-user" value="admin" autocomplete="username" required><label>Password</label><input id="pc-pass" type="password" placeholder="Password" autocomplete="current-password" required><div class="pc-error" id="pc-error"></div><button type="submit">LOGIN</button></form><div class="pc-loginhint">Hint: password = “revisi” (6 huruf)</div></div></div>`;
    zt('#pc-login-form').addEventListener('submit',ev=>{ev.preventDefault();let u=zt('#pc-user').value.trim(),pw=zt('#pc-pass').value;if(u.toLowerCase()==='admin'&&pw==='revisi'){this.pcLoggedIn=true;t.sfx.play('click');this.renderDevice()}else{zt('#pc-error').textContent='Username atau password salah. Coba lagi.';zt('#pc-pass').value='';zt('#pc-pass').focus()}});return;
  }
  zt('#dev-root').innerHTML=`<div class="pc-os"><div class="pc-top">⚙ TECH-BOOK PRO <span class="pc-led">● SYSTEM ONLINE</span></div><div class="pc-desktop"><div class="pc-wallpaper"></div><div class="pc-icons" id="pc-icons">${apps.map(a=>`<button class="pc-icon" data-pc-app="${a[0]}" title="${a[3]}"><span class="glyph">${a[1]}</span><span>${a[2]}</span></button>`).join('')}</div><div class="pc-mission"><b>📊 MISI: Pelajari Topologi</b><span>Buka Network Analyzer dan klik SCAN NETWORK.</span></div><div class="pc-startmenu hidden" id="pc-startmenu"><b>TECH-BOOK PRO · Aplikasi</b>${apps.map(a=>`<button data-pc-app="${a[0]}">${a[1]} ${a[2]}</button>`).join('')}</div><div class="pc-taskbar"><button class="pc-start" id="pc-start">⊞</button><input class="pc-search" id="pc-search" placeholder="🔎 Ketik untuk mencari aplikasi"><div class="pc-tray"><span>🔊</span><span>▣</span><span>🟩</span><span id="pc-clock">09:32</span></div></div></div></div>`;
  let launch=(app)=>{this.pcLoggedIn=true;switch(app){case'term':this.devTab='term';this.pcAppMode=true;this.renderDevice();this.addPcDesktopReturn();break;case'ports':this.devTab='ports';this.pcAppMode=true;this.renderDevice();this.addPcDesktopReturn();break;case'cfg':this.devTab='cfg';this.pcAppMode=true;this.renderDevice();this.addPcDesktopReturn();break;case'files':this.devTab='info';this.pcAppMode=true;this.renderDevice();this.addPcDesktopReturn();break;case'analyzer':case'wifi':this.openScope('topo');break;case'firewall':this.openDevice('fw-edge-01');break;case'assistant':this.openGuidance();break;case'missions':this.openMissions();break;case'capture':this.openScope('cap');break;case'tutorial':this.openTutorial();break;}};
  zt('#pc-icons').addEventListener('click',ev=>{let b=ev.target.closest('[data-pc-app]');if(b)launch(b.dataset.pcApp)});
  zt('#pc-startmenu').addEventListener('click',ev=>{let b=ev.target.closest('[data-pc-app]');if(b)launch(b.dataset.pcApp)});
  zt('#pc-start').addEventListener('click',()=>zt('#pc-startmenu').classList.toggle('hidden'));
  zt('#pc-search').addEventListener('input',ev=>{let q=ev.target.value.toLowerCase();zt('#pc-icons').querySelectorAll('[data-pc-app]').forEach(b=>b.classList.toggle('hidden',!b.textContent.toLowerCase().includes(q)))});
  let clock=zt('#pc-clock');if(clock){let tick=()=>{let d=new Date();clock.textContent=d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit',hour12:false})};tick();this.pcClockTimer&&clearInterval(this.pcClockTimer);this.pcClockTimer=setInterval(tick,15000)}
  return;
}let i=e.type==="walljack",n=i?[["ports","Port & Kabel"],["info","Info"]]:[["term","Konsol"],["ports","Port & Kabel"],["cfg","Konfigurasi"],["info","Info"]];zt("#dev-root").innerHTML=this.head(Sf[e.type],e.name,e.label+" · "+Uh[e.type],n,this.devTab)+'<div class="mbody" id="dev-body"></div>';let s=zt("#dev-body");if(this.devTab==="term"){let a=this.rec=t.session(e.id);let serverPanel=e.type==="server"?(()=>{let ip=(e.ifaces||[]).find(x=>x.ip);let sv=e.svc||{};let services=[['SSH',sv.ssh],['HTTP',sv.http],['DNS',sv.dns],['DHCP',sv.dhcp],['FTP',sv.ftp]];return `<section class="srv-access"><div class="srv-access-head"><div><small>SECURE REMOTE CONSOLE</small><h2>▣ ${wt(e.name)} <span class="srv-online">● SERVER READY</span></h2><p>${wt(e.label||"Linux Server")} · Ubuntu Server 22.04 LTS</p></div><div class="srv-badge">ROOT<br><b>ACCESS</b></div></div><div class="srv-metrics"><div><small>HOSTNAME</small><b>${wt(e.name)}</b></div><div><small>IP ADDRESS</small><b>${wt(ip?ip.ip:"Belum dikonfigurasi")}</b></div><div><small>INTERFACE</small><b>${wt(ip?ip.name:"eth0")}</b></div><div><small>SESSION</small><b>LOCAL CONSOLE</b></div></div><div class="srv-services"><b>SERVER SERVICES</b>${services.map(([n,on])=>`<span class="srv-service ${on?"active":""}"><i></i>${n}<em>${on?"RUNNING":"STOPPED"}</em></span>`).join("")}</div><div class="srv-tip">Ketik <b>help</b> untuk melihat perintah. Coba <code>hostname</code>, <code>ip addr</code>, <code>systemctl status ssh</code>, atau <code>ping</code>.</div></section>`})():"";s.innerHTML=`${serverPanel}<div class="term" id="t-out"></div><div class="t-in"><span id="t-pr"></span><input id="t-inp" autocomplete="off" autocapitalize="off" spellcheck="false"></div><div class="chips">${Tv[a.s.kind].map(l=>`<button data-act="chip" data-c="${wt(l)}">${wt(l.trim())}</button>`).join("")}<span class="dim">Ctrl+C batal · ↑↓ riwayat</span></div>`;let o=zt("#t-inp");this.termRefresh(),setTimeout(()=>o.focus(),30),zt("#t-out").addEventListener("mousedown",()=>setTimeout(()=>{String(getSelection())||o.focus()},0)),o.addEventListener("keydown",l=>{l.stopPropagation();let c=a.s;if(l.key==="Enter"){let h=o.value;if(o.value="",c.busy)return;a.lines.push(c.prompt()+" "+h),h.trim()&&a.hist.push(h),a.hi=a.hist.length,t.sfx.play("key"),c.exec(h),this.termDirty=!0}else l.key==="c"&&l.ctrlKey?c.interrupt()&&(a.lines.push("^C"),this.termDirty=!0):l.key==="ArrowUp"?(a.hi>0&&(o.value=a.hist[--a.hi]),l.preventDefault()):l.key==="ArrowDown"?(a.hi=Math.min(a.hist.length,a.hi+1),o.value=a.hist[a.hi]||"",l.preventDefault()):l.key==="Tab"?l.preventDefault():l.key==="Escape"&&this.close()})}else this.devTab==="ports"?s.innerHTML=this.portsHtml(e):this.devTab==="cfg"?s.innerHTML=this.cfgHtml(e):s.innerHTML=`<div class="pad"><p class="note">${wt(e.notes||"Tidak ada catatan untuk perangkat ini.")}</p><table class="kv"><tr><td>Jenis</td><td>${Uh[e.type]}</td></tr><tr><td>Lokasi</td><td>${wt((vi.find(a=>a.id===e.room)||{}).name)} · ${ps[e.level]}</td></tr>${i?"":e.ifaces.map(a=>`<tr><td>${a.name}</td><td class="mono">${a.mac}</td></tr>`).join("")}</table>
      ${i?'<p class="dim">Outlet dinding hanyalah titik sambung pasif: port depan tersambung permanen ke kabel horizontal di dalam dinding yang berujung di switch distribusi (IDF) di ruang NOC.</p>':""}</div>`}termRefresh(){let t=zt("#t-out"),e=this.rec;!t||!e||(e.lines.length>500&&e.lines.splice(0,e.lines.length-500),t.textContent=e.lines.join(`
`),t.scrollTop=t.scrollHeight,zt("#t-pr").textContent=e.s.busy?"":e.s.prompt(),zt("#t-inp").placeholder=e.s.busy?"menunggu balasan paket… (Ctrl+C untuk batal)":"")}portsHtml(t){let e=this.G,i=e.sim,n=t.type==="walljack",s=t.ifaces.map(a=>{let o=i.cableOn(t.id,a.name),l=n&&a.name==="back",c='<span class="dim">— kosong —</span>',h="",d="off",u=n?o?"terpasang":"kosong":a.up?a._link?"up":"down":"admin down";if(o){let x=i.other(o,t.id,a.name),p=i.cableState(o);c=`${wt(i.dev(x.dev).name)} · <b>${wt(x.port)}</b>`,d=p.st==="fault"&&!o.tested?"down":p.st,h=p.st==="fault"&&!o.tested?"Tidak ada sinyal link — penyebab belum diketahui. Uji kabel dengan LAN Tester.":p.why}let f=!n&&t.type!=="switch"?a.ip?`${a.ip}/${Xe(a.mask)?li(a.mask):"?"}${a.dhcp?" DHCP":""}`:a.dhcp?"DHCP…":"tanpa IP":t.type==="switch"?a.mode==="trunk"?`trunk [${a.allowed.join(",")}]`:`access VLAN ${a.vlan}`:l?"dalam dinding":"port depan",m;return o?m=o.fixed?'<span class="dim">permanen</span>':`<button data-act="unplug" data-id="${o.id}">Cabut</button>${e.st.inv.tester?`<button data-act="test" data-id="${o.id}">Uji</button>`:""}`:l?m='<span class="dim">—</span>':e.carry?m=e.carry.dev===t.id?'<span class="dim">asal kabel</span>':`<button class="pri" data-act="plug" data-port="${a.name}">Colok di sini</button>`:m=e.st.inv.cable>0?`<button data-act="carry" data-port="${a.name}">Tarik kabel…</button>`:'<span class="dim">tak punya kabel</span>',`<tr><td><span class="led ${n?o?"up":"off":a.up?a._link?"up":o?"warn":"off":"adm"}"></span><b>${a.name}</b></td><td>${u}</td><td class="mono">${f}</td><td>${c}${h?`<div class="why ${d}">${wt(h)}</div>`:""}</td><td class="acts">${m}</td></tr>`}).join("");return`<div class="pad">${e.carry?`<div class="callout">🔌 Anda sedang membawa ujung kabel dari <b>${wt(i.dev(e.carry.dev).name)} ${wt(e.carry.port)}</b>. Pilih port tujuan di bawah.</div>`:""}<table class="grid"><tr><th>Port</th><th>Status</th><th>Layer 2/3</th><th>Kabel → ujung seberang</th><th></th></tr>${s}</table>
      <p class="dim">Kabel tersedia di tas: <b>${e.st.inv.cable}</b>. “Tarik kabel” lalu berjalanlah ke perangkat tujuan dan tekan <b>E</b>. Mematikan/menyalakan port dilakukan dari Konsol (<span class="mono">shutdown</span> / <span class="mono">no shutdown</span>).</p></div>`}cfgHtml(t){let e=t.ifaces[0];if(!(t.type==="pc"||t.type==="server"||t.type==="ap"))return`<div class="pad"><div class="callout">Perangkat jaringan dikonfigurasi lewat <b>Konsol</b> (Cisco IOS). Ringkasan konfigurasi saat ini:</div><table class="grid"><tr><th>Interface</th><th>Admin</th><th>Link</th><th>Konfigurasi</th></tr>${t.ifaces.map(s=>`<tr><td><b>${s.name}</b></td><td>${s.up?"no shutdown":'<span class="bad">shutdown</span>'}</td><td>${s._link?'<span class="good">up</span>':"down"}</td><td class="mono">${t.type==="switch"?s.mode==="trunk"?`switchport mode trunk · allowed ${s.allowed.join(",")}`:`switchport access vlan ${s.vlan}`:(s.ip?`ip address ${s.ip} ${s.mask}`:"no ip address")+(s.helper?` · ip helper-address ${s.helper}`:"")}</td></tr>`).join("")}</table>
      ${t.type==="switch"?`<p class="mono dim">VLAN: ${Object.entries(t.vlans).map(([s,a])=>`${s} (${a})`).join(" · ")}</p>`:`<p class="mono dim">Rute statis: ${t.routes.length?t.routes.map(s=>`${s.net}/${s.mask==="0.0.0.0"?0:li(s.mask)} via ${s.via}`).join(" · "):"— belum ada —"}${(t.loopbacks||[]).map(s=>` · ${s.name} ${s.ip}`).join("")}</p>`}</div>`;let n=e.dhcp?"disabled":"";return`<div class="pad"><div class="form"><label class="chk"><input type="checkbox" ${e.dhcp?"checked":""} data-act="cfg-dhcp"> Dapatkan alamat IP otomatis (DHCP)</label>
      <label>Alamat IPv4<input id="c-ip" value="${wt(e.ip)}" ${n} placeholder="192.168.1.10"></label><label>Subnet Mask<input id="c-mask" value="${wt(e.mask)}" ${n} placeholder="255.255.255.0"></label>
      <label>Default Gateway<input id="c-gw" value="${wt(t.gateway)}" ${n} placeholder="192.168.1.1"></label><label>Server DNS<input id="c-dns" value="${wt(t.dns)}" ${n} placeholder="192.168.20.10"></label>
      <div class="row"><button class="pri" data-act="cfg-apply" ${n}>Terapkan</button><span id="c-msg" class="dim">${e.dhcp?e._dhcp&&e._dhcp.state==="BOUND"?"Lease aktif dari "+e._dhcp.server:"Mencari server DHCP…":""}</span></div></div>
      ${t.type==="server"?`<h4>Layanan</h4><div class="svcs">${[["dhcp","DHCP Server (dhcpd · UDP/67)"],["dns","DNS Server (named · UDP/53)"],["http","Web Server (httpd · TCP/80)"]].map(([s,a])=>`<button data-act="svc" data-k="${s}" class="svc ${t.svc[s]?"on":""}"><i></i>${a}<em>${t.svc[s]?"AKTIF":"MATI"}</em></button>`).join("")}</div>
      <p class="mono dim">Pool ${t.pool.name}: ${t.pool.start} – ${t.pool.end} · router ${t.pool.router} · dns ${t.pool.dns}<br>Zona DNS: ${Object.entries(t.dnsRecords).map(([s,a])=>`${s} → ${a}`).join(" · ")}</p>`:""}</div>`}applyCfg(){let t=this.G,e=t.sim.dev(this.devId),i=e.ifaces[0],n=zt("#c-ip").value.trim(),s=zt("#c-mask").value.trim(),a=zt("#c-gw").value.trim(),o=zt("#c-dns").value.trim(),l=zt("#c-msg"),c=h=>{l.textContent="✗ "+h,l.className="bad",t.sfx.play("err")};if(!pe(n))return c("Alamat IPv4 tidak valid.");if(!Xe(s))return c("Subnet mask tidak valid.");if(a&&!pe(a))return c("Default gateway tidak valid.");if(o&&!pe(o))return c("Alamat DNS tidak valid.");e.gateway=a,e.dns=o,t.sim.setIp(e,i,n,s),t.sim.log("cfg",`${e.name}: IP ${n}/${li(s)} gw ${a||"-"} dns ${o||"-"}`),l.textContent="✓ Konfigurasi diterapkan.",l.className="good",t.sfx.play("ok")}openTester(t,e){let i=this.G,n=i.sim,s=n.dev(t),a=s.ifaces.map(h=>n.cableOn(s.id,h.name)).filter(h=>h&&!h.fixed),o=a.find(h=>h.id===e)||a[0];if(!o){this.toast("Tidak ada patch cord yang bisa diuji di "+wt(s.name)+".","warn");return}o.tested=!0;let l=[1,2,3,4,5,6,7,8].map(h=>o.fault==="open"&&(h===3||h===6)?"open":o.fault==="miswire"&&h<3?"cross":"ok"),c=!o.fault;this.open("tester",`${this.head("🔧","LAN Tester Digital",`${n.dev(o.a.dev).name} ${o.a.port}  ⇄  ${n.dev(o.b.dev).name} ${o.b.port}`)}<div class="mbody pad"><div class="pins">${l.map((h,d)=>`<div class="pin ${h}" style="animation-delay:${d*.16}s"><i></i><b>${d+1}</b><span>${h==="ok"?"PASS":h==="open"?"OPEN":"CROSS"}</span></div>`).join("")}</div>
      <div class="callout ${c?"good":"bad"}">${c?"✔ Kontinuitas 8/8 pin baik. Kabel ini layak pakai — bila link tetap mati, periksa port di ujung seberang (shutdown?) atau segmen kabel lain di jalur ini.":o.fault==="open"?"✗ Pin 3 dan 6 <b>OPEN</b> — pasangan RX terputus. Ethernet 100/1000BASE-T butuh pasangan 1-2 dan 3-6. Cabut kabel ini lalu pasang patch cord baru.":"✗ Pin 1 dan 2 tertukar (miswire). Ganti kabel."}</div>
      <div class="row end"><button data-act="close">Tutup</button></div></div>`,{cls:"narrow"}),i.sfx.play(c?"ok":"err"),i.dirty=!0}openCrimp(){let t=this.G;this.wires=Oh.slice().sort(()=>Math.random()-.5),this.wSel=null,this.open("crimp",`${this.head("✂","Crimping Kabel UTP","Susun 8 kawat menurut standar T568B, lalu crimp")}<div class="mbody pad"><p>Klik dua kawat untuk menukar posisinya. Pin 1 ada di kiri (klip konektor menghadap ke bawah). Tiap kabel memakai 2 konektor RJ45 — tersedia: <b id="rj">${t.st.inv.rj45}</b>.</p><div id="wires"></div>
      <div id="crimp-hint" class="hidden callout">T568B: ${Oh.map((e,i)=>`${i+1} ${e}`).join(" · ")}</div><div class="row end"><button data-act="crimp-hint">Lihat urutan T568B</button><button class="pri" data-act="crimp">Crimp!</button></div></div>`,{cls:"narrow"}),this.renderWires()}renderWires(){zt("#wires").innerHTML=this.wires.map((t,e)=>`<button data-act="wire" data-i="${e}" class="wire ${this.wSel===e?"sel":""}" style="background:repeating-linear-gradient(180deg,${Mf[t][0]} 0 10px,${Mf[t][1]} 10px 20px)"><b>${e+1}</b><span>${t}</span></button>`).join("")}crimpClick(t){this.wSel==null?this.wSel=t:([this.wires[t],this.wires[this.wSel]]=[this.wires[this.wSel],this.wires[t]],this.wSel=null),this.renderWires()}crimpDo(){let t=this.G,e=t.st.inv;if(e.rj45<2)return this.toast("Konektor RJ45 habis.","warn"),t.sfx.play("err");let i=this.wires.map((n,s)=>n===Oh[s]?0:s+1).filter(Boolean);e.rj45-=2,i.length?(this.toast(`Urutan salah di pin ${i.join(", ")} — 2 konektor terbuang. Coba lagi.`,"bad"),t.sfx.play("err")):(e.cable++,t.addXp(t.st.crimped<3?20:0,"Crimping T568B"),t.st.crimped=(t.st.crimped||0)+1,this.toast("✔ Kabel straight-through T568B jadi! +1 kabel UTP.","ok"),t.sfx.play("plug"),this.wires.sort(()=>Math.random()-.5)),zt("#rj").textContent=e.rj45,this.renderWires(),this.renderToolbar()}openNpc(t){this.npc=t,this.open("npc",`${this.head(`<span class="ava" style="background:${t.shirt}">${wt(t.name.replace(/^(Dr\.|Direktur)\s*/,"").split(" ").map(e=>e[0]).slice(0,2).join(""))}</span>`,t.name,t.role)}<div class="mbody pad"><div class="say">${wt(t.greeting)}</div><div id="npc-ans"></div><div class="opts">${t.options.map((e,i)=>`<button data-act="npc-opt" data-i="${i}">💬 ${wt(e.q)}</button>`).join("")}<button data-act="close">Sampai nanti.</button></div></div>`,{cls:"narrow"})}openMissions(){let t=this.G.mis;this.open("missions",`${this.head("🎯","Daftar Misi","6 level komisioning jaringan gedung")}<div class="mbody pad missions">${t.list.map((e,i)=>`<div class="mis ${e.done?"done":i===t.active?"act":"lock"}"><div class="mh"><b>${wt(e.title)}</b><span>${wt(e.sub)}</span><em>${e.done?"✔ selesai":"+"+e.xp+" XP"}</em></div>${i<=t.active||e.done?`<p>${wt(e.brief)}</p>${e.obj.map(n=>`<div class="ob ${n.done?"d":""}"><i>${n.done?"✔":"○"}</i><div>${wt(n.text)}${!n.done&&i===t.active?`<small>💡 ${wt(n.hint)}</small>`:""}</div></div>`).join("")}`:""}</div>`).join("")}</div>`,{cls:"wide"})}openPause(){if(this.modal&&this.modal.kind!=="pause")return;let t=this.G,e=t.settings,i=(s,a,o,l,c,h)=>`<label>${a}<input type="range" min="${o}" max="${l}" step="${c}" value="${e[s]}" data-set="${s}"><output>${h(e[s])}</output></label>`;this.open("pause",`${this.head("⏸","Jeda","Simulasi berhenti sementara")}<div class="mbody pad"><div class="row"><button class="pri" data-act="resume">▶ Lanjutkan</button><button data-act="save">💾 Simpan</button><button data-act="help">⌨ Kontrol</button></div>
      <div class="form two">${i("sens","Sensitivitas mouse",.3,2.5,.1,s=>(+s).toFixed(1))}${i("vol","Volume",0,1,.05,s=>Math.round(s*100)+"%")}${i("fov","Sudut pandang (FOV)",55,95,1,s=>s+"°")}
      <label class="chk"><input type="checkbox" data-set="invert" ${e.invert?"checked":""}> Balik sumbu Y</label><label class="chk"><input type="checkbox" data-set="muted" ${e.muted?"checked":""}> Bisukan suara</label><label class="chk"><input type="checkbox" data-set="hints" ${e.hints?"checked":""}> Tampilkan petunjuk objektif</label></div>
      <div class="row">Kualitas grafis: ${[["low","Rendah"],["medium","Sedang"],["high","Tinggi (bloom + bayangan)"]].map(([s,a])=>`<button data-act="quality" data-q="${s}" class="${e.quality===s?"on":""}">${a}</button>`).join("")}</div>
      <div class="row end"><button class="danger" data-act="reset">Mulai ulang dari awal</button></div></div>`,{cls:"narrow",pause:!0}).addEventListener("input",s=>{let a=s.target.dataset.set;if(!a)return;e[a]=s.target.type==="checkbox"?s.target.checked:+s.target.value;let o=s.target.parentNode.querySelector("output");o&&(o.textContent=a==="vol"?Math.round(e[a]*100)+"%":a==="fov"?e[a]+"°":e[a].toFixed(1)),t.applySettings()})}openVictory(){let t=this.G.st,e=hr(t.xp);this.open("win",`${this.head("🏆","Gedung Online!","Semua 6 level selesai")}<div class="mbody pad"><p>Dari satu patch cord di Lab sampai ping ke <b>8.8.8.8</b> melewati router inti, firewall, dan ISP — seluruh jaringan gedung kini beroperasi, dan Anda yang membangunnya.</p><div class="big">${t.xp} XP · ${wt(e.title)}</div>
      <p class="dim">Simulasi tetap berjalan. Coba eksperimen: cabut kabel uplink dan amati monitor NOC, matikan DNS, buat loop antar-switch, atau telusuri paket di NetScope dengan tempo lambat [T].</p><div class="row end"><button class="pri" data-act="close">Lanjut menjelajah</button></div></div>`,{cls:"narrow"})}openScope(t){this.scopeTab=t||this.scopeTab||"topo",this.open("scope",'<div id="sc-root"></div>',{cls:"wide tall",live:!0}),this.renderScope()}renderScope(){let t=this.G,e=t.sim,i=this.scopeTab;zt("#sc-root").innerHTML=this.head("💻","NetScope","Analisis jaringan langsung",[["topo","Topologi"],["cap",`Paket (${e.capN})`],["log","Log Kejadian"]],i)+'<div class="mbody" id="sc-body"></div>';let n=zt("#sc-body");if(i==="topo")n.innerHTML='<canvas id="topo" width="1000" height="560"></canvas><div class="legend"><i class="l up"></i>link up <i class="l warn"></i>peringatan <i class="l down"></i>down <i class="l open"></i>tak tersambung <i class="l fault"></i>kabel rusak (setelah diuji) · titik bergerak = frame sungguhan</div>',this.drawTopo();else if(i==="cap"){let s=e.capture.slice(-160),a=s.find(o=>o.n===this.capSel);if(n.innerHTML=`<div class="capbar"><button data-act="cap-pause">${this.capPause?"▶ Lanjut":"⏸ Jeda tampilan"}</button><button data-act="cap-clear">Bersihkan</button><span class="dim">Setiap baris = satu frame melintasi satu kabel. Klik untuk membedah lapisannya.</span></div>
        <div class="cap" id="cap"><table><tr><th>No</th><th>Waktu</th><th>Segmen</th><th>Sumber</th><th>Tujuan</th><th>Proto</th><th>Info</th></tr>${s.map(o=>{let l=fs(o.f);return`<tr data-act="cap-row" data-n="${o.n}" class="${o.n===this.capSel?"sel":""}"><td>${o.n}</td><td>${o.t.toFixed(2)}</td><td>${wt(o.a)} ${wt(o.ap)} → ${wt(o.b)}</td><td>${wt(l.src)}</td><td>${wt(l.dst)}</td><td><b style="color:${gs(o.f)}">${l.proto}</b>${o.f.vlan!=null?` <u>dot1q ${o.f.vlan}</u>`:""}</td><td>${wt(l.info)}</td></tr>`}).join("")}</table></div>
        <pre class="dec">${a?wt(this.decode(a)):"Pilih sebuah frame untuk melihat isi Ethernet / 802.1Q / ARP / IPv4 / ICMP / UDP / DHCP / DNS."}</pre>`,!this.capPause&&!a){let o=zt("#cap");o.scrollTop=o.scrollHeight}}else n.innerHTML=`<div class="logs">${e.logs.slice().reverse().map(s=>`<div class="lg ${s.kind}"><i>${s.t.toFixed(1)}s</i><b>${s.kind}</b>${wt(s.text)}</div>`).join("")||'<div class="dim pad">Belum ada kejadian.</div>'}</div>`}decode(t){let e=t.f,i=[`Frame ${t.n}  ·  t=${t.t.toFixed(3)}s  ·  ${t.a} ${t.ap}  →  ${t.b} ${t.bp}`,`Ethernet II      Src: ${e.src}    Dst: ${e.dst===Mn?"ff:ff:ff:ff:ff:ff (Broadcast)":e.dst}    Type: ${e.type==="ARP"?"ARP (0x0806)":"IPv4 (0x0800)"}`];if(e.vlan!=null&&i.push(`802.1Q VLAN      ID: ${e.vlan}   (frame ber-tag — sedang melintasi trunk)`),e.type==="ARP"){let s=e.arp;return i.push(`ARP              ${s.op===1?"Request":"Reply"}    Sender: ${s.sha} / ${s.spa}    Target: ${s.tha} / ${s.tpa}`),i.join(`
`)}let n=e.ip;if(i.push(`IPv4             Src: ${n.src}    Dst: ${n.dst}    TTL: ${n.ttl}    ID: ${n.id}    Proto: ${n.proto}`),n.icmp){let s=n.icmp;i.push(`ICMP             Type: ${s.type}${s.id!=null?`    id=${s.id} seq=${s.seq}`:""}${s.orig?`    (untuk paket asli → ${s.orig.dst})`:""}`)}if(n.udp&&i.push(`UDP              Src Port: ${n.udp.sport}    Dst Port: ${n.udp.dport}`),n.dhcp){let s=n.dhcp;i.push(`DHCP             ${s.op}    xid=0x${s.xid.toString(16)}    client MAC=${s.chaddr}${s.yiaddr?`
                 yiaddr=${s.yiaddr}`:""}${s.giaddr?`   giaddr(relay)=${s.giaddr}`:""}${s.server?`   server=${s.server}`:""}${s.mask?`
                 mask=${s.mask}  router=${s.router}  dns=${s.dns}`:""}`)}if(n.dns){let s=n.dns;i.push(`DNS              ${s.qr?"Response":"Query"}    A ${s.q}${s.qr?`  →  ${s.a||"NXDOMAIN"}`:""}`)}return i.join(`
`)}drawTopo(){let t=zt("#topo");if(!t)return;let e=t.getContext("2d"),i=t.width,n=t.height,s=this.G,a=s.sim,o=c=>[xs[c][0]*i,xs[c][1]*n];e.clearRect(0,0,i,n),e.fillStyle="#070d16",e.fillRect(0,0,i,n);for(let[c,h,d,u,f,m]of wv)e.fillStyle=m+"12",e.strokeStyle=m+"55",e.beginPath(),e.roundRect(h*i,d*n,u*i,f*n,10),e.fill(),e.stroke(),e.fillStyle=m,e.font="600 12px system-ui,sans-serif",e.textAlign="left",e.fillText(c,h*i+10,d*n+17);let l={up:"#22c55e",warn:"#f59e0b",down:"#ef4444",open:"#64748b",fault:"#ff2d2d"};for(let c of a.cables){if(!xs[c.a.dev]||!xs[c.b.dev])continue;let[h,d]=o(c.a.dev),[u,f]=o(c.b.dev),m=a.cableState(c),x=m.st==="fault"&&!c.tested?"down":m.st;e.strokeStyle=l[x],e.lineWidth=x==="up"?2.4:1.8,e.setLineDash(c.color==="wall"?[6,4]:x==="open"?[2,4]:[]),e.beginPath(),e.moveTo(h,d),e.lineTo(u,f),e.stroke(),e.setLineDash([]),e.fillStyle="#8aa0b6",e.font="9px ui-monospace,monospace",e.textAlign="center";let p=(v,w)=>{if(/front|back/.test(v))return;let b=h+(u-h)*w,E=d+(f-d)*w,T=e.measureText(v).width+6;e.fillStyle="rgba(7,13,22,.82)",e.fillRect(b-T/2,E-6,T,12),e.fillStyle="#8aa0b6",e.fillText(v,b,E+3)},g=Math.abs(f-d)>Math.abs(u-h)*.3?.4:.3;p(c.a.port,g),p(c.b.port,1-g)}for(let c of a.devices){if(!xs[c.id])continue;let[h,d]=o(c.id),u=c.type==="walljack",f=c.ifaces.some(p=>p._link),m=u?"#94a3b8":c.type==="pc"?"#38bdf8":c.type==="switch"?"#34d399":c.type==="server"?"#f472b6":c.type==="firewall"?"#f87171":c.type==="ap"?"#a78bfa":"#fb923c";e.fillStyle="#0d1826",e.strokeStyle=m,e.lineWidth=2,e.beginPath(),c.type==="router"?e.arc(h,d,15,0,7):e.roundRect(h-(u?8:17),d-(u?8:12),u?16:34,u?16:24,5),e.fill(),e.stroke(),e.fillStyle=m,e.font="700 10px system-ui,sans-serif",e.textAlign="center",e.fillText({pc:"PC",switch:"SW",router:"R",firewall:"FW",server:"SRV",ap:"AP",walljack:""}[c.type],h,d+4),u||(e.fillStyle=f?"#22c55e":"#ef4444",e.beginPath(),e.arc(h+16,d-11,3.5,0,7),e.fill()),e.fillStyle="#e2e8f0",e.font="600 10.5px system-ui,sans-serif",e.fillText(c.name,h,d+(u?20:27));let x=c.ifaces.filter(p=>p.ip).map(p=>p.ip)[0];x&&c.type!=="router"&&c.type!=="firewall"?(e.fillStyle="#7d93a8",e.font="9.5px ui-monospace,monospace",e.fillText(x,h,d+38)):!u&&c.type!=="switch"&&(e.fillStyle="#7d93a8",e.font="9px ui-monospace,monospace",c.ifaces.filter(p=>p.ip).slice(0,3).forEach((p,g)=>e.fillText(p.name+" "+p.ip,h,d-20-g*10)))}for(let c of s.transits){let h=Math.floor((a.t-c.t0)/.11);if(h<0||h>=c.segs.length)continue;let d=c.segs[h];if(!xs[d.from.dev]||!xs[d.to.dev])continue;let u=(a.t-c.t0)/.11-h,[f,m]=o(d.from.dev),[x,p]=o(d.to.dev);e.fillStyle=c.col,e.shadowColor=c.col,e.shadowBlur=10,e.beginPath(),e.arc(f+(x-f)*u,m+(p-m)*u,4.5,0,7),e.fill(),e.shadowBlur=0}}tick(t){this.termDirty&&(this.termDirty=!1,this.modal&&this.modal.kind==="device"&&this.devTab==="term"&&this.termRefresh()),this.modal&&this.modal.kind==="scope"&&this.scopeTab==="topo"&&this.drawTopo(),this.acc+=t,!(this.acc<.5)&&(this.acc=0,!(!this.modal||!this.modal.live)&&(this.modal.kind==="device"&&this.devTab==="ports"&&(zt("#dev-body").innerHTML=this.portsHtml(this.G.sim.dev(this.devId))),this.modal.kind==="scope"&&this.scopeTab!=="topo"&&!(this.scopeTab==="cap"&&(this.capPause||this.capSel!=null))&&this.renderScope()))}};var Bh="netrunner_5_save_v1",Ev=.92,Av=new pt(0,0),wf={x:0,y:0,z:10,level:0},zh=new L,vs=new L,fr=(r,t,e)=>Math.max(t,Math.min(e,r)),Gh={get(){try{return JSON.parse(localStorage.getItem(Bh))}catch{return null}},set(r){try{return localStorage.setItem(Bh,JSON.stringify(r)),!0}catch{return!1}},del(){try{localStorage.removeItem(Bh)}catch{}}},Hh=class{constructor(){let t=this.canvas=document.getElementById("view"),e=this.renderer=new Ol({canvas:t,antialias:!0,powerPreference:"high-performance"});e.toneMapping=ls,e.shadowMap.enabled=!0,e.shadowMap.type=as,this.settings={sens:1,vol:.6,muted:!1,fov:72,invert:!1,quality:"high",hints:!0};let i=Gh.get();this.saved=i&&i.v===1&&i.st&&i.sim?i:null,this.saved&&this.saved.settings&&Object.assign(this.settings,this.saved.settings),this.sfx=new nc,this.ui=new sc(this),this.ray=new ea,this.ray.far=3.6,this.mode="title",this.clock=0,this.autoQ=0,this.fpsN=0,this.fpsT=0,this.lockFails=0,this.noLock=!1,document.getElementById("hud").insertAdjacentHTML("beforeend",'<div id="lockhint">Klik layar untuk mengendalikan kamera · atau tahan &amp; seret mouse</div>'),this.boot(null),this.bind(),this.ui.showTitle(!!this.saved),requestAnimationFrame(n=>this.loop(n))}boot(t){this.world&&this.world.scene.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material:[a.material]).forEach(o=>{o.map&&o.map.dispose(),o.dispose()})}),this.st=t?JSON.parse(JSON.stringify(t.st)):{xp:0,taken:[],talked:[],done:[],inv:{cable:0,rj45:0,tester:0,crimper:0},tool:"hand",cableXp:0,crimped:0,won:!1};let e={devices:hf(),cables:uf()};t&&(e=lf(e,JSON.parse(JSON.stringify(t.sim))));let i=df();for(let a of i)a.taken=this.st.taken.includes(a.id);let n=pf();if(t&&t.doors)for(let a of n)a.id in t.doors&&(a.open=!!t.doors[a.id]);if(this.sim=new Yl(e),this.camera=new ri(this.settings.fov,1,.06,900),this.world=new tc({devices:e.devices,doors:n,npcs:ff(),pickups:i}),this.world.setEnv(this.renderer),this.world.scene.add(this.camera),t&&t.lift){let a=this.world.lift;a.level=a.target=1,a.y=4,this.world.drawLift()}this.player=new ic(this.camera,this.world),this.player.onStep=()=>this.sfx.play("step"),t&&t.pl?(this.player.place(t.pl[0],Ca(t.pl[0],t.pl[2])?this.world.lift.y:t.pl[1],t.pl[2],t.pl[3]),this.player.pitch=t.pl[4]||0):this.player.place(0,0,12.4,0),this.net=new ec(this.world,this.sim),this.net.sync(),this.sessions=new Map,this.transits=[],this.carry=null,this.vision=!1,this.target=null,this.room=null,this.sim.on.transit=a=>{this.net.onTransit(a),this.transits.push({segs:a.segs,t0:a.t0,col:gs(a.frame)}),this.transits.length>90&&this.transits.shift()},this.sim.on.change=()=>{this.dirty=!0},this.sim.on.drop=(a,o,l)=>this.net.onDrop(a,o,l),this.map=null,this.ui.setMap(null),this.world.refresh(this.sim),this.mis=Ih(this.sim,this.st),this.objDone=new Set;for(let a of this.mis.list)for(let o of a.obj)o.done&&this.objDone.add(o.id);this.world.drawTv(this.mis.list),this.world.drawNoc(this.sim),this.dirty=!0,this.tm={mis:0,noc:0,mm:0,amb:0,save:0,tick:0},this.pristine=!t,document.getElementById("app").classList.remove("vision","map"),this.renderer.toneMappingExposure=Ev,this.composer&&this.composer.dispose();let s=new Ce(4,4,{type:Fe,samples:4});this.composer=new Wl(this.renderer,s),this.composer.addPass(new $l(this.world.scene,this.camera)),this.composer.addPass(new ar(new pt(256,256),.22,.6,1.9)),this.composer.addPass(new Xl),this.applySettings(),this.applyQuality()}applySettings(){let t=this.settings;this.player.sens=t.sens,this.player.invert=t.invert,this.camera.fov=this.map?46:t.fov,this.camera.updateProjectionMatrix(),this.sfx.vol=t.vol,this.sfx.muted=t.muted,this.sfx.apply(),this.ui.trackSig="",this.mode==="play"&&this.ui.renderTracker()}applyQuality(){let t=this.settings.quality;this.pr=Math.min(window.devicePixelRatio||1,t==="high"?2:t==="medium"?1.5:1),this.world.sun.castShadow=t!=="low",this.world.pool.length!==(t==="high"?8:t==="medium"?6:4)&&this.world.setLights(t==="high"?8:t==="medium"?6:4),this.useComposer=t==="high",this.resize()}resize(){let t=window.innerWidth||800,e=window.innerHeight||600;this.renderer.setPixelRatio(this.pr),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.pr),this.composer.setSize(t,e),this.camera.aspect=t/e,this.map?this.camera.setViewOffset(t,e,Math.min(170,t*.13),0,t,e):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}newGame(){this.pristine||this.boot(null),this.start(!0)}continueGame(){this.boot(this.saved),this.start(!1)}start(t){this.sfx.init(),this.mode="play",this.pristine=!1,this.ui.hideTitle(),this.setTool(this.st.tool,!0),this.ui.trackSig="",this.ui.renderTracker(),t?this.ui.openIntro():this.lock()}resetGame(){Gh.del(),this.saved=null,this.mode="title",this.ui.close(),this.boot(null),this.ui.hud.classList.add("hidden"),this.ui.showTitle(!1)}save(t){if(this.mode!=="play")return;let e=this.player,i=this.world.lift,n={v:1,st:this.st,pl:[e.x,e.y,e.z,e.yaw,e.pitch],doors:Object.fromEntries(this.world.doors.map(a=>[a.d.id,a.d.open])),lift:i.phase==="idle"?i.level:i.target,sim:this.sim.snapshot(),settings:this.settings},s=Gh.set(n);this.saved=JSON.parse(JSON.stringify(n)),t||this.ui.toast(s?"💾 Progres tersimpan.":"⚠ Penyimpanan browser tidak tersedia di mode pratinjau ini — progres bertahan selama halaman ini terbuka.",s?"ok":"warn")}addXp(t,e){if(!t)return;let i=this.st,n=hr(i.xp).level;i.xp+=t,this.ui.renderToolbar();let s=hr(i.xp);s.level>n&&this.ui.toast(`⬆ Naik pangkat: <b>${s.title}</b>`,"ok",5e3)}checkMissions(){let t=this.mis=Ih(this.sim,this.st),e=!1;t.list.forEach((i,n)=>{for(let s of i.obj)s.done&&!this.objDone.has(s.id)&&(this.objDone.add(s.id),e=!0,(n<=t.active||i.done)&&(this.ui.toast("✔ "+s.text,"ok"),this.sfx.play("ok")))});for(let i of t.fresh)this.st.done.push(i.id),this.addXp(i.xp,i.title),this.pendingBanner=[i.title.toUpperCase()+" — SELESAI",`+${i.xp} XP · ${i.sub}`],e=!0;e&&(this.world.drawTv(t.list),t.fresh.length&&this.save(!0)),this.ui.renderTracker(),t.allDone&&!this.st.won&&(this.st.won=!0,this.pendingWin=1)}session(t){let e=this.sessions.get(t);if(!e){e={lines:[],hist:[],hi:0};let i=()=>{this.ui.termDirty=!0};e.s=new Kl(this.sim,this.sim.dev(t),{print:n=>{e.lines.push(n),i()},append:n=>{e.lines.length||e.lines.push(""),e.lines[e.lines.length-1]+=n,i()},clear:()=>{e.lines.length=0,i()},close:()=>this.ui.close(),done:i,ping:n=>this.sfx.play(n?"ping":"pingFail")}),e.lines.push(...e.s.banner(),""),this.sessions.set(t,e)}return e}setTool(t,e){let i=this.st.inv;if(t==="tester"&&!i.tester)return this.ui.toast("Belum punya LAN Tester — ada di meja operator ruang NOC (Lantai 12).","warn");if(t==="crimper"&&!i.crimper)return this.ui.toast("Belum punya tang crimping — ada di meja kerja Lab (Lantai 12).","warn");this.carry&&t!=="cable"&&this.cancelCarry(),this.st.tool=t,this.player.setTool(t),this.ui.renderToolbar(),e||this.sfx.play("click")}startCarry(t,e){this.carry={dev:t,port:e},this.net.setCarry(this.world.dev[t].ports[e]),this.setTool("cable",!0),this.sfx.play("plug"),this.ui.setCarry(`🔌 Membawa kabel dari <b>${this.sim.dev(t).name} · ${e}</b> — dekati perangkat tujuan lalu <b>E</b> · <b>Q</b> batal`)}cancelCarry(){this.carry&&(this.carry=null,this.net.setCarry(null),this.ui.setCarry(""))}connectCarry(t,e){let i=this.carry;if(!i||i.dev===t)return!1;if(this.sim.cableOn(t,e))return this.ui.toast("Port itu sudah terpakai.","warn"),!1;let n=this.sim.dev(i.dev).name,s=this.sim.dev(t).name,a=this.sim.addCable({dev:i.dev,port:i.port},{dev:t,port:e},{color:"blue",fixed:!1,fault:null});this.st.inv.cable--,this.cancelCarry(),this.sfx.play("plug");let o=this.sim.cableState(a);return this.ui.toast(`🔌 ${n} ${i.port} ⇄ ${s} ${e}<br><small>${o.why}</small>`,o.st==="up"?"ok":"warn",5200),this.st.cableXp<6&&(this.st.cableXp++,this.addXp(25,"Pemasangan kabel")),this.ui.renderToolbar(),!0}removeCable(t){let e=this.sim.cables.find(i=>i.id===t);!e||e.fixed||(this.sim.removeCable(t),this.sfx.play("plug"),e.fault?this.ui.toast("🗑 Patch cord rusak dicabut dan dibuang.","ok"):(this.st.inv.cable++,this.ui.toast("Kabel dicabut dan kembali ke tas (+1).")),this.ui.renderToolbar())}toggleVision(){this.vision=!this.vision,this.net.setVision(this.vision),document.getElementById("app").classList.toggle("vision",this.vision),this.world.setDim(this.vision),this.sfx.play("vision"),this.vision&&this.ui.ticker()}toggleTempo(){this.sim.speed=this.sim.speed<1?1:.2,this.ui.toast(this.sim.speed<1?"🐢 Tempo simulasi 0.2× — amati paket hop demi hop (Visi Jaringan [V] atau Peta 3D [N]).":"⏩ Tempo simulasi normal 1×.")}toggleMap(t=!this.map){if(this.mode!=="play"||!!this.map==!!t)return;let e=this.player,i=this.camera;t?(this.cancelCarry(),e.keys={},this.drag=null,this.target=null,this.ui.setPrompt(""),this.map={t:new L(0,6,-1),yaw:.7,pitch:.62,dist:46,split:8,show:[!0,!0],sel:null,follow:!1,pingFrom:null,drag:null,pts:[]},document.pointerLockElement&&document.exitPointerLock()):this.map=null,e.vm.visible=!t,i.fov=t?46:this.settings.fov,i.near=t?1.5:.06,this.resize(),document.getElementById("app").classList.toggle("map",!!t),this.applyMap(),this.sfx.play("vision"),this.ui.setMap(this.map),t?(this.ui.ticker(),this.st.mapTip||(this.st.mapTip=1,this.ui.toast("◈ <b>Peta Jaringan 3D</b> — seret untuk memutar, roda untuk zoom, klik perangkat untuk melihat tabel ARP/MAC-nya. <b>N</b> / <b>Esc</b> kembali ke tubuh Anda.","info",8e3))):this.lock()}applyMap(){let t=this.map,e=!!t,i=[0,e?t.split:0],n=e?t.show:[!0,!0];this.world.setOverview(e,i[1],n),this.world.setDim(e||this.vision,e?.34:.13),this.net.setMap(e,i,n),(!e||!t.sel)&&this.net.setSel(null)}mapAct(t,e){let i=this.map;if(i){if(t==="exit")return this.toggleMap(!1);if(t==="lv"){let n=+e.k;i.show[n]=!i.show[n],!i.show[0]&&!i.show[1]&&(i.show[1-n]=!0),this.applyMap()}else t==="split"?(i.split=i.split?0:8,i.t.y=i.split?6:3,this.applyMap()):t==="follow"?(i.follow=!i.follow,i.follow&&this.ui.toast("🎯 Kamera mengikuti paket terbaru. Tekan <b>T</b> untuk gerak lambat.")):t==="tempo"?this.toggleTempo():t==="reset"?(i.yaw=.7,i.pitch=.62,i.dist=46,i.follow=!1,i.t.set(0,i.split?6:3,-1)):t==="ping"?(i.pingFrom=i.pingFrom?null:i.sel,i.pingFrom&&this.ui.toast("📡 Sekarang klik perangkat <b>tujuan</b> ping.")):t==="desel"&&(i.sel=i.pingFrom=null,this.net.setSel(null));this.ui.renderMap()}}mapKey(t){switch(t){case"KeyN":return this.toggleMap(!1),!0;case"Digit1":return this.mapAct("lv",{k:0}),!0;case"Digit2":return this.mapAct("lv",{k:1}),!0;case"KeyX":return this.mapAct("split"),!0;case"KeyF":return this.mapAct("follow"),!0;case"KeyR":return this.mapAct("reset"),!0;case"KeyT":return this.mapAct("tempo"),!0;case"KeyE":case"Enter":case"KeyV":case"KeyQ":case"Digit3":case"Digit4":case"Digit5":return!0}return!1}mapClick(t,e,i){let n=this.map,s=null,a=34;for(let[l,c,h]of n.pts){let d=Math.hypot(c-t,h-9-e);d<a&&(a=d,s=l)}let o=n.pingFrom||(i?n.sel:null);s?o&&s!==o?(this.mapPing(o,s),n.pingFrom=null):(n.sel=s,n.pingFrom=null,this.sfx.play("click")):(n.pingFrom||(n.sel=null,this.net.setSel(null)),n.pingFrom=null),this.ui.renderMap()}mapPing(t,e){let i=this.sim.dev(t),n=this.sim.dev(e),s=(n.ifaces.find(d=>d.ip)||{}).ip,a=this.ui;if(!i.ifaces.some(d=>d.ip))return a.toast(`<b>${i.name}</b> tidak punya alamat IP — tidak bisa menjadi sumber ping.`,"warn");if(!s)return a.toast(`<b>${n.name}</b> tidak punya alamat IP (perangkat Layer 2 atau belum dikonfigurasi).`,"warn");let o={timeout:"tidak ada balasan (timeout)",arp:"ARP tidak terjawab — tujuan/gateway tidak ada di segmen ini",noroute:"tidak ada rute ke tujuan",nolink:"link sumber mati","ttl-exceeded":"TTL habis di jalan",unreachable:"tujuan tidak terjangkau"};a.toast(`📡 Ping uji <b>${i.name}</b> → <b>${n.name}</b> (${s}) — ikuti paketnya di peta…`);let l=0,c=0,h=()=>this.sim.echo(i,s,{},d=>{d.why!=="cancel"&&(l++,d.ok&&c++,this.sfx.play(d.ok?"ping":"pingFail"),l<3&&this.map?h():a.toast(c?`✔ ${i.name} → ${s}: <b>${c}/${l}</b> balasan diterima`+(c<l?"<br><small>Paket pertama biasanya hilang saat ARP masih dicari.</small>":""):`✕ ${i.name} → ${s}: gagal — ${o[d.why]||d.why}`,c?"ok":"warn",6e3))});h()}mapUpdate(t){let e=this.map,i=this.ui.modal?{}:this.player.keys,n=this.camera,s=Math.sin(e.yaw),a=Math.cos(e.yaw),o=(i.KeyW||i.ArrowUp?1:0)-(i.KeyS||i.ArrowDown?1:0),l=(i.KeyD||i.ArrowRight?1:0)-(i.KeyA||i.ArrowLeft?1:0),c=e.dist*(i.ShiftLeft||i.ShiftRight?1.4:.6)*t;(o||l)&&(e.t.x+=(-s*o+a*l)*c,e.t.z+=(-a*o-s*l)*c,e.follow=!1),e.follow&&this.net.leadPos&&e.t.lerp(this.net.leadPos,1-Math.exp(-t*3.5)),e.t.x=fr(e.t.x,-20,20),e.t.z=fr(e.t.z,-16,18),e.t.y=fr(e.t.y,0,16);let h=Math.cos(e.pitch);n.position.set(e.t.x+s*h*e.dist,e.t.y+Math.sin(e.pitch)*e.dist,e.t.z+a*h*e.dist),n.lookAt(e.t)}mapLabels(){let t=this.map,e=window.innerWidth,i=window.innerHeight,n=this.camera,s=this.net,a=s.yo,o=[],l=this.player,c=(u,f,m)=>(vs.set(u,f,m).project(n),vs.z<1&&Math.abs(vs.x)<1.04&&Math.abs(vs.y)<1.04?[(vs.x*.5+.5)*e,(-vs.y*.5+.5)*i]:null);for(let u of vi){if(!t.show[u.level])continue;let f=c((u.b[0]+u.b[1])/2,Jt[u.level]+a[u.level]+.05,(u.b[2]+u.b[3])/2);f&&o.push({x:f[0],y:f[1]+8,t:(u.level?"12 · ":"11 · ")+u.short,c:"rm"+(u.level?"":" lo")})}t.pts.length=0;for(let u of this.sim.devices){if(!t.show[u.level])continue;let f=c(u.pos[0],u.pos[1]+a[u.level]+(u.type==="pc"?.55:.3),u.pos[2]);if(!f)continue;t.pts.push([u.id,f[0],f[1]]);let m=u.id===t.sel,x=u.type==="walljack";if(x&&t.dist>30&&!m)continue;let p=u.ifaces.find(g=>g.ip);o.push({x:f[0],y:f[1]-5,t:u.name,s:!x&&(t.dist<30||m)?p?p.ip:u.type==="switch"?"Layer 2":"tanpa IP":"",c:"dev"+(m?" sel":"")+(u.id===t.pingFrom?" src":"")+(x||u.ifaces.some(g=>g._link)?"":" off")})}let h=new Set,d=0;for(let u=s.flights.length-1;u>=0&&d<9;u--){let f=s.flights[u];if(!f.shown||!f.m||h.has(f.text))continue;let m=f.m.position,x=c(m.x,m.y,m.z);x&&(h.add(f.text),d++,o.push({x:x[0],y:x[1]-12,t:f.text,c:"pk",col:f.css}))}for(let u of s.drops){if(!t.show[u.lv])continue;let f=c(u.p.x,u.p.y+a[u.lv]+.3+u.t*.35,u.p.z);f&&o.push({x:f[0],y:f[1]-16,t:u.text,c:"dr"})}if(t.show[l.level]){let u=c(l.x,l.y+a[l.level]+1.9,l.z);u&&o.push({x:u[0],y:u[1]-6,t:"📍 Anda",c:"me"})}if(this.ui.mapLabels(o),t.sel){let u=this.sim.dev(t.sel);this.net.setSel(vs.set(u.pos[0],u.pos[1]+a[u.level]+.12,u.pos[2]))}}pick(){this.ray.setFromCamera(Av,this.camera);let t=this.camera.position;for(let e of this.ray.intersectObjects(this.world.proxies,!1)){let i=e.object,n=!0;for(;i;){if(!i.visible){n=!1;break}i=i.parent}let s=e.object.userData.it;if(!(!n||!s))return this.world.blocked(t.x,t.z,e.point.x,e.point.z,this.player.level,s.type==="door"?s.door.col:null)?null:s}return null}promptFor(t){let e=this.st.tool,i="<b>E</b> ";if(!t)return e==="crimper"?i+"Buat kabel baru (crimping T568B)":e==="laptop"?i+"Buka laptop NetScope":"";let n=this.world.lift;switch(t.type){case"device":{let s=t.dev,a=`<i>${s.name}</i>`;return this.carry?this.carry.dev===s.id?`Ujung kabel ini sudah tertancap di ${a}`:i+`Colok kabel ke ${a}`:e==="cable"?i+`Tarik kabel dari ${a}`:e==="tester"?i+`Uji kabel di ${a}`:i+(s.type==="walljack"?`Periksa outlet ${a}`:`Buka konsol ${a}`)+`<small>${s.label}</small>`}case"door":return i+(t.door.d.open?"Tutup":"Buka")+` pintu <i>${t.label}</i>`;case"npc":return i+`Bicara dengan <i>${t.label}</i>`;case"pickup":return i+`Ambil <i>${t.label}</i>`;case"holo":return i+"Buka <i>Peta Jaringan 3D</i><small>seluruh jaringan gedung, hidup · atau tekan N di mana saja</small>";case"liftCall":return n.phase!=="idle"?"Lift sedang bergerak…":n.level===t.lv?"Lift sudah di lantai ini — silakan masuk":i+"Panggil lift";case"liftPanel":return n.phase!=="idle"?"Lift sedang bergerak…":i+`Pergi ke <i>${ps[1-n.level]}</i>`}return""}interact(){if(this.mode!=="play"||this.ui.modal||this.map)return;let t=this.target,e=this.st.tool,i=this.ui;if(!t){e==="crimper"?i.openCrimp():e==="laptop"&&i.openScope();return}switch(t.type){case"device":{let n=t.dev;this.carry||e==="cable"?(!this.carry&&this.st.inv.cable<1&&i.toast("Tas kabel kosong. Ambil kabel Cat6 di meja Lab, atau buat sendiri dengan alat Crimping [4].","warn"),i.openDevice(n.id,"ports")):e==="tester"?i.openTester(n.id):i.openDevice(n.id);break}case"door":t.door.d.open=!t.door.d.open,this.sfx.play(t.door.slide?"slide":"door");break;case"npc":{let n=t.npc;this.st.talked.includes(n.id)||(this.st.talked.push(n.id),this.addXp(10,n.name)),i.openNpc(n);break}case"pickup":{let n=t.pickup,s=this.st.inv;for(let a in n.give)s[a]=(s[a]||0)+n.give[a];this.st.taken.push(n.id),this.world.takePickup(n.id),this.sfx.play("pickup"),i.toast(`🎒 Diambil: <b>${n.label}</b>`+(n.kind==="cable"?"<br><small>Tekan <b>2</b> untuk memegang kabel, lalu <b>E</b> pada perangkat.</small>":n.kind==="tester"?"<br><small>Tekan <b>3</b>, lalu <b>E</b> pada perangkat untuk menguji kabelnya.</small>":"<br><small>Tekan <b>4</b> lalu <b>E</b> untuk membuat kabel baru.</small>"),"ok",5200),this.addXp(30,n.label),i.renderToolbar();break}case"holo":this.toggleMap(!0);break;case"liftCall":this.world.liftRequest(t.lv)&&(this.sfx.play("click"),i.toast("Lift dipanggil…"));break;case"liftPanel":this.world.liftRequest(1-this.world.lift.level)&&this.sfx.play("click");break}}lock(t){if(!(this.noLock||this.map||document.pointerLockElement===this.canvas||this.mode!=="play")){this.lockReq={gesture:!!t};try{let e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(i=>this.lockFail(i))}catch(e){this.lockFail(e)}}}lockFail(t){let e=this.lockReq;!e||this.noLock||(this.lockReq=null,t&&(t.name==="SecurityError"||t.name==="NotSupportedError")?this.lockFails=9:e.gesture&&this.lockFails++,this.lockFails>=3&&(this.noLock=!0,this.ui.toast("🖱 Mode kursor bebas aktif: <b>tahan &amp; seret</b> mouse untuk melihat sekeliling, klik untuk berinteraksi.","info",7e3)))}onModal(t){t?(this.player.keys={},this.drag=null,document.getElementById("banner").className="",document.pointerLockElement&&document.exitPointerLock()):this.mode==="play"&&(this.lock(),this.ui.renderToolbar(),this.ui.trackSig="",this.ui.renderTracker())}bind(){let t=this.canvas,e=this.ui,i=()=>this.mode==="play"&&!e.modal&&!this.map,n=()=>this.mode==="play"&&!e.modal&&!!this.map;window.addEventListener("resize",()=>this.resize()),window.addEventListener("blur",()=>{this.player.keys={},this.drag=null}),document.addEventListener("pointerlockerror",()=>this.lockFail(null)),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===t?(this.lockFails=0,this.lockReq=null):i()&&!this.noLock&&performance.now()-(this.tLock||0)>300&&e.openPause()}),t.addEventListener("contextmenu",s=>s.preventDefault()),t.addEventListener("mousedown",s=>{if(n()){this.sfx.init(),this.map.drag={x:s.clientX,y:s.clientY,moved:0,btn:s.button};return}if(i()){if(this.sfx.init(),document.pointerLockElement===t){s.button===0?this.interact():s.button===2&&this.cancelCarry();return}this.drag={x:s.clientX,y:s.clientY,moved:0,btn:s.button},s.button===0&&(this.tLock=performance.now(),this.lock(!0))}}),window.addEventListener("mousemove",s=>{if(this.map){let a=this.map.drag,o=this.map;if(!a||!n())return;let l=s.clientX-a.x,c=s.clientY-a.y;if(a.x=s.clientX,a.y=s.clientY,a.moved+=Math.abs(l)+Math.abs(c),a.btn===0)o.yaw-=l*.006,o.pitch=fr(o.pitch+c*.005,.08,1.5);else{let h=o.dist*.0017,d=Math.sin(o.yaw),u=Math.cos(o.yaw);o.t.x+=(-u*l-d*c)*h,o.t.z+=(d*l-u*c)*h,o.follow=!1}return}if(i()){if(document.pointerLockElement===t)this.player.look(s.movementX,s.movementY);else if(this.drag){let a=s.clientX-this.drag.x,o=s.clientY-this.drag.y;this.drag.x=s.clientX,this.drag.y=s.clientY,this.drag.moved+=Math.abs(a)+Math.abs(o),this.player.look(a*1.4,o*1.4)}}}),window.addEventListener("mouseup",s=>{if(this.map){let o=this.map.drag;this.map.drag=null,o&&o.btn===0&&o.moved<6&&n()&&this.mapClick(s.clientX,s.clientY,s.shiftKey);return}let a=this.drag;this.drag=null,a&&this.noLock&&a.moved<6&&i()&&(a.btn===0?this.interact():a.btn===2&&this.cancelCarry())}),t.addEventListener("wheel",s=>{if(n()){this.map.dist=fr(this.map.dist*Math.exp(fr(s.deltaY,-240,240)*.0013),5,95);return}if(!i())return;let a=this.st.inv,o=Ea.filter(c=>c.id!=="tester"&&c.id!=="crimper"||a[c.id]),l=o.findIndex(c=>c.id===this.st.tool);this.setTool(o[(l+(s.deltaY>0?1:o.length-1))%o.length].id)},{passive:!0}),window.addEventListener("keydown",s=>{if(this.mode!=="play")return;let a=/INPUT|TEXTAREA|SELECT/.test(s.target.tagName||"");if(s.code==="Escape"){s.preventDefault(),e.modal?e.close():this.map?this.toggleMap(!1):e.openPause();return}if(e.modal){if(a)return;let o=e.modal.kind;(s.code==="Tab"||s.code==="KeyJ")&&o==="missions"?(s.preventDefault(),e.close()):s.code==="KeyL"&&o==="scope"||s.code==="KeyP"&&o==="pause"?e.close():s.code==="Tab"&&s.preventDefault();return}if(s.repeat){/^Arrow|Space|Tab/.test(s.code)&&s.preventDefault();return}if(this.player.keys[s.code]=!0,this.sfx.init(),this.map&&this.mapKey(s.code)){s.preventDefault();return}switch(s.code){case"KeyE":case"Enter":this.interact();break;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":this.setTool(Ea[+s.code.slice(5)-1].id);break;case"Tab":case"KeyJ":e.openMissions();break;case"KeyL":e.openScope();break;case"KeyV":this.toggleVision();break;case"KeyN":this.toggleMap();break;case"KeyT":this.toggleTempo();break;case"KeyH":this.settings.hints=!this.settings.hints,e.trackSig="",e.renderTracker();break;case"KeyG":e.openGuidance();break;case"KeyM":this.settings.muted=!this.settings.muted,this.applySettings(),e.toast(this.settings.muted?"🔇 Suara dibisukan":"🔊 Suara aktif");break;case"KeyP":e.openPause();break;case"KeyQ":this.cancelCarry();break}/^Arrow|Space|Tab/.test(s.code)&&s.preventDefault()}),window.addEventListener("keyup",s=>{this.player.keys[s.code]=!1})}loop(t){requestAnimationFrame(l=>this.loop(l));let e=Math.min(1,(t-(this.last||t))/1e3),i=Math.min(.05,e);this.last=t;let n=this.ui,s=this.player,a=this.world,o=this.tm;if(this.mode==="title"){this.clock+=i;let l=this.clock*.06;this.camera.position.set(Math.sin(l)*4.6-1.2,1.72,11.3+Math.cos(l)*1.3),this.camera.lookAt(3,1.3,6.2),this.sim.update(i),a.update(i,wf,()=>{}),this.dirty&&(this.dirty=!1,a.refresh(this.sim),this.net.sync()),this.net.update(i,wf,!1,this.camera)}else if(!(n.modal&&n.modal.pause)){this.sim.update(i),this.map?this.mapUpdate(i):s.update(i,!n.modal);let l=Ql(s.x,s.z)||Ca(s.x,s.z)||a.lift.phase==="moving";if(a.update(i,s,c=>this.sfx.play(c==="liftDing"?"ding":"liftMove")),this.dirty&&(this.dirty=!1,a.refresh(this.sim),this.net.sync(),o.mis=9),this.camera.updateMatrixWorld(),this.carry&&(s.hand(zh),this.net.updateCarry(zh),zh.distanceTo(a.dev[this.carry.dev].ports[this.carry.port].pos)>13&&(this.cancelCarry(),n.toast("Kabel patch tidak cukup panjang (maks ±13 m) — kabel digulung kembali.","warn"))),this.net.update(i,s,l,this.camera),this.map?this.mapLabels():(this.target=n.modal?null:this.pick(),n.setPrompt(n.modal?"":this.promptFor(this.target))),this.room=cf(s.x,s.z,s.level),(o.mis+=i)>.4&&(o.mis=0,this.checkMissions()),(o.noc+=i)>1&&(o.noc=0,a.drawNoc(this.sim,this.sim.speed<1?"tempo 0.2×":"")),(o.mm+=i)>.07&&(o.mm=0,n.minimap(s)),(o.tick+=i)>.25&&(o.tick=0,(this.vision||this.map)&&n.ticker(),this.map&&n.mapInfo(),document.getElementById("lockhint").className=!n.modal&&!this.noLock&&document.pointerLockElement!==this.canvas?"show":""),(o.amb+=i)>.3){o.amb=0;let c=Math.hypot(s.x-9,s.z+8);this.sfx.ambience(s.level===1?this.room&&this.room.id==="server"?1:Math.max(0,Math.min(.6,1-(c-4)/10)):0)}if((o.save+=i)>30&&(o.save=0,this.save(!0)),this.pendingBanner&&!n.modal&&(n.banner(...this.pendingBanner),this.sfx.play("level"),this.pendingBanner=null),this.pendingWin&&!this.pendingBanner&&!n.modal&&(this.pendingWin===1?this.pendingWin=t+5200:t>this.pendingWin&&(this.pendingWin=0,n.openVictory())),!n.modal&&document.visibilityState==="visible"&&(this.fpsN++,this.fpsT+=e,this.fpsT>4)){let c=this.fpsN/this.fpsT;this.fpsN=this.fpsT=0,this.fps=c,c<23&&this.autoQ<2&&this.settings.quality!=="low"&&(this.autoQ++,this.settings.quality=this.settings.quality==="high"?"medium":"low",this.applyQuality(),n.toast("Kualitas grafis diturunkan otomatis agar gerakan tetap mulus (bisa diubah di menu <b>Esc</b>).","warn",6e3))}}n.tick(i),this.useComposer?this.composer.render():this.renderer.render(this.world.scene,this.camera)}};window.addEventListener("DOMContentLoaded",()=>{try{window.__game=new Hh}catch(r){console.error(r),document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:0;display:grid;place-items:center;color:#fff;background:#0b1220;font:16px system-ui;padding:24px;text-align:center">Gagal memulai grafis 3D (WebGL): ${String(r.message||r)}</div>`)}});})();
