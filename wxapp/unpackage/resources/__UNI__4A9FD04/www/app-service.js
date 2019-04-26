var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4b1e4a84'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4b1e4a84'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'26cf05aa'])
Z([[7],[3,'tbsActive']])
Z([3,'handleProxy'])
Z([1,false])
Z([3,'_van-tabs 26cf05aa'])
Z([3,'gen-tab'])
Z([[7],[3,'$k']])
Z([1,'26cf05aa-8'])
Z([3,'nav-tab'])
Z([3,'tab-tab'])
Z([3,'_van-tab 26cf05aa'])
Z([3,'人气景区'])
Z([3,'_scroll-view 26cf05aa tbs-box'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'hotPage']],[3,'scHotList']])
Z(z[13])
Z(z[2])
Z([3,'_view 26cf05aa sc-list-item'])
Z(z[6])
Z([[2,'+'],[1,'26cf05aa-2-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'_view 26cf05aa info'])
Z([[6],[[7],[3,'item']],[3,'voiceTotal']])
Z([[6],[[7],[3,'item']],[3,'narratorPrice']])
Z([[6],[[7],[3,'item']],[3,'popularityTotal']])
Z([[6],[[7],[3,'item']],[3,'address']])
Z([3,'_wux-divider 26cf05aa'])
Z(z[10])
Z([3,'附近景区'])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'nearbyTags']],[3,'length']],[1,0]],[[7],[3,'locationAuth']]])
Z([[2,'!'],[[7],[3,'locationAuth']]])
Z([[7],[3,'locationAuth']])
Z(z[2])
Z(z[2])
Z([3,'_map 26cf05aa'])
Z(z[6])
Z([1,'26cf05aa-5'])
Z([[2,'!'],[[2,'=='],[[7],[3,'tbsActiveDataType']],[1,'附近景区']]])
Z([3,'map'])
Z([[6],[[7],[3,'center']],[3,'latitude']])
Z([[6],[[7],[3,'center']],[3,'longitude']])
Z([[6],[[7],[3,'norPage']],[3,'markers']])
Z([3,'width: 100%; height: 100%;'])
Z([[6],[[6],[[7],[3,'norPage']],[3,'scMarkObj']],[3,'show']])
Z(z[10])
Z([3,'更多景区'])
Z([[2,'!='],[[6],[[7],[3,'nearbyTags']],[3,'length']],[1,0]])
Z(z[12])
Z(z[13])
Z(z[14])
Z([[6],[[7],[3,'morePage']],[3,'moreSpotList']])
Z(z[13])
Z(z[2])
Z([3,'_view 26cf05aa sc-list-item2'])
Z(z[6])
Z([[2,'+'],[1,'26cf05aa-7-'],[[7],[3,'index']]])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[27])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'26cf05aa'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1bd58df8'])
Z([3,'_view 1bd58df8 content'])
Z([[2,'!'],[[7],[3,'role']]])
Z([3,'_view 1bd58df8 tip'])
Z([[2,'=='],[[6],[[7],[3,'popData']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'popData']])
Z(z[5])
Z([3,'handleProxy'])
Z([3,'_view 1bd58df8 sc-list-item2'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'1bd58df8-2-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'_view 1bd58df8 info'])
Z([[6],[[7],[3,'item']],[3,'voiceTotal']])
Z([[6],[[7],[3,'item']],[3,'narratorPrice']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1bd58df8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'15b6f680'])
Z([3,'_view 15b6f680 content'])
Z([3,'handleProxy'])
Z([3,'_map 15b6f680'])
Z([[7],[3,'$k']])
Z([1,'15b6f680-7'])
Z([3,'map'])
Z([[6],[[7],[3,'center']],[3,'latitude']])
Z([[6],[[7],[3,'center']],[3,'longitude']])
Z([[7],[3,'markers']])
Z([[7],[3,'isUnloack']])
Z([3,'width: 100%;height: 100%;'])
Z([[6],[[7],[3,'player']],[3,'playerShow']])
Z([[2,'!'],[[7],[3,'isUnloack']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isUnloack']]],[[6],[[7],[3,'detail']],[3,'voiceTotal']]],[[6],[[7],[3,'detail']],[3,'narratorPrice']]])
Z(z[13])
Z([[7],[3,'payDialogShow']])
Z(z[12])
Z([3,'_van-popup 15b6f680'])
Z([3,'right'])
Z([[7],[3,'markPayShow']])
Z(z[18])
Z(z[19])
Z([[7],[3,'drawerShow']])
Z([3,'_view 15b6f680 introduce'])
Z([[6],[[7],[3,'detail']],[3,'busRoutes']])
Z(z[25])
Z(z[18])
Z(z[19])
Z([[7],[3,'showRead']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'15b6f680'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'68014704'])
Z([3,'_view 68014704 content'])
Z([[2,'=='],[[7],[3,'searching']],[1,'search']])
Z([3,'_view 68014704'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'searchResult']])
Z(z[4])
Z([3,'handleProxy'])
Z([3,'_view 68014704 sc-list-item'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'68014704-1-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'_view 68014704 info'])
Z([[6],[[7],[3,'item']],[3,'voiceTotal']])
Z([[6],[[7],[3,'item']],[3,'narratorPrice']])
Z([[6],[[7],[3,'item']],[3,'popularityTotal']])
Z([[6],[[7],[3,'item']],[3,'address']])
Z(z[4])
Z(z[5])
Z([[7],[3,'popData']])
Z(z[4])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[2,'+'],[1,'68014704-2-'],[[7],[3,'index']]])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z([[2,'=='],[[7],[3,'searching']],[1,'noSearch']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'68014704'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'15151efc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'15151efc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3b489a38'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3b489a38'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!=='],[[7],[3,'info']],[1,null]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([3,'noop'])
Z([3,'van-overlay'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; '],[[2,'?:'],[[7],[3,'mask']],[1,'background-color: rgba(0, 0, 0, .7);'],[1,'']],[3,'; '],[[7],[3,'customStyle']]])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'inited']],[[7],[3,'overlay']]])
Z([3,'onClickOverlay'])
Z([[7],[3,'overlayStyle']])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
Z([[7],[3,'zIndex']])
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'custom-class '],[[7],[3,'classes']],[3,' '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'popup']],[[4],[[5],[[5],[[7],[3,'position']]],[[8],'safe',[[2,'&&'],[[2,'&&'],[[7],[3,'isIPhoneX']],[[7],[3,'safeAreaInsetBottom']]],[[2,'==='],[[7],[3,'position']],[1,'bottom']]]]]]]]])
Z([a,[3,'z-index: '],z[5],[3,'; -webkit-transition-duration:'],[[7],[3,'currentDuration']],[3,'ms; transition-duration:'],[[7],[3,'currentDuration']],[3,'ms; '],[[2,'?:'],[[7],[3,'display']],[1,''],[1,'display: none;']],z[8][3],[[7],[3,'customStyle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'animated']],[[7],[3,'inited']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tabs']],[[4],[[5],[[7],[3,'type']]]]]]])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tabs__wrap']],[[8],'scrollable',[[7],[3,'scrollable']]]]],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'==='],[[7],[3,'type']],[1,'line']],[[7],[3,'border']]],[1,'van-hairline--top-bottom'],[1,'']]])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; '],[[7],[3,'wrapStyle']]])
Z([3,'nav-left'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tabs__nav']],[[4],[[5],[[7],[3,'type']]]]]],[3,' nav-class']])
Z([[2,'==='],[[7],[3,'type']],[1,'line']])
Z([[7],[3,'tabs']])
Z([3,'index'])
Z([3,'onTap'])
Z([a,[3,'van-ellipsis tab-class '],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'active']]],[1,'tab-active-class'],[1,'']],z[1][2],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tab']],[[9],[[8],'active',[[2,'==='],[[7],[3,'index']],[[7],[3,'active']]]],[[8],'disabled',[[6],[[7],[3,'item']],[3,'disabled']]]]]]])
Z([[7],[3,'index']])
Z([a,[[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'color']],[[2,'!=='],[[7],[3,'index']],[[7],[3,'active']]]],[[2,'==='],[[7],[3,'type']],[1,'card']]],[[2,'!'],[[6],[[7],[3,'item']],[3,'disabled']]]],[[2,'+'],[1,'color: '],[[7],[3,'color']]],[1,'']],z[1][2],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'color']],[[2,'==='],[[7],[3,'index']],[[7],[3,'active']]]],[[2,'==='],[[7],[3,'type']],[1,'card']]],[[2,'+'],[1,';background-color:'],[[7],[3,'color']]],[1,'']],z[1][2],[[2,'?:'],[[7],[3,'color']],[[2,'+'],[1,';border-color: '],[[7],[3,'color']]],[1,'']],z[1][2],[[2,'?:'],[[7],[3,'scrollable']],[[2,'+'],[[2,'+'],[1,';flex-basis:'],[[2,'/'],[1,88],[[7],[3,'swipeThreshold']]]],[1,'%']],[1,'']]])
Z([[2,'!=='],[[6],[[7],[3,'item']],[3,'info']],[1,null]])
Z([3,'van-tab__title__info'])
Z([[6],[[7],[3,'item']],[3,'info']])
Z([3,'nav-right'])
Z([3,'onTouchEnd'])
Z(z[16])
Z([3,'onTouchMove'])
Z([3,'onTouchStart'])
Z([3,'van-tabs__content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'van-transition custom-class '],[[7],[3,'classes']]])
Z([a,[3,'-webkit-transition-duration:'],[[7],[3,'currentDuration']],[3,'ms; transition-duration:'],[[7],[3,'currentDuration']],[3,'ms; '],[[2,'?:'],[[7],[3,'display']],[1,''],[1,'display: none;']],[3,' '],[[7],[3,'customStyle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'label']])
Z([[7],[3,'cellGroupPrefixCls']])
Z([[7],[3,'title']])
Z([[7],[3,'prefixCls']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([3,'onTap'])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[7],[3,'thumb']])
Z([[7],[3,'title']])
Z([3,'header'])
Z([[7],[3,'showArrow']])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'content']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cancel'])
Z([3,'wux-backdrop'])
Z([[7],[3,'classNames']])
Z([[7],[3,'in']])
Z([[7],[3,'prefixCls']])
Z([[6],[[7],[3,'classes']],[3,'content']])
Z([[6],[[7],[3,'classes']],[3,'options']])
Z([[7],[3,'titleText']])
Z([3,'button'])
Z([[7],[3,'buttons']])
Z([3,'index'])
Z([[6],[[7],[3,'button']],[3,'appParameter']])
Z([3,'bindcontact'])
Z([3,'onError'])
Z([3,'bindgetphonenumber'])
Z([3,'bindgetuserinfo'])
Z([3,'bindopensetting'])
Z([3,'buttonClicked'])
Z([[6],[[6],[[6],[[7],[3,'classes']],[3,'button']],[[7],[3,'index']]],[3,'wrap']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'button']],[3,'disabled']])
Z([[2,'?:'],[[2,'!'],[[6],[[7],[3,'button']],[3,'disabled']]],[[6],[[6],[[6],[[7],[3,'classes']],[3,'button']],[[7],[3,'index']]],[3,'hover']],[1,'none']])
Z([[6],[[7],[3,'button']],[3,'hoverStartTime']])
Z([[6],[[7],[3,'button']],[3,'hoverStayTime']])
Z([[6],[[7],[3,'button']],[3,'hoverStopPropagation']])
Z([[6],[[7],[3,'button']],[3,'lang']])
Z([[6],[[7],[3,'button']],[3,'openType']])
Z([[6],[[7],[3,'button']],[3,'sendMessageImg']])
Z([[6],[[7],[3,'button']],[3,'sendMessagePath']])
Z([[6],[[7],[3,'button']],[3,'sendMessageTitle']])
Z([[6],[[7],[3,'button']],[3,'sessionFrom']])
Z([[6],[[7],[3,'button']],[3,'showMessageCard']])
Z([[6],[[7],[3,'button']],[3,'icon']])
Z([[7],[3,'destructiveText']])
Z([[7],[3,'cancelText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'classNames']])
Z([[7],[3,'visible']])
Z([3,'onClick'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[7],[3,'thumb']])
Z([3,'header'])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'title']])
Z([[7],[3,'label']])
Z([[6],[[7],[3,'classes']],[3,'ft']])
Z([[7],[3,'closable']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!=='],[[7],[3,'animateStatus']],[1,'unmounted']])
Z([3,'onAnimationEnd'])
Z([3,'onTap'])
Z([3,'onTransitionEnd'])
Z([a,[3,'wux-class '],[[7],[3,'wrapCls']],[3,' '],[[7],[3,'animateCss']]])
Z([[7],[3,'extStyle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'extStyle']])
Z([[7],[3,'src']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[7],[3,'classNames']])
Z([[7],[3,'in']])
Z([[8],'zIndex',[[7],[3,'zIndex']]])
Z([[6],[[7],[3,'classes']],[3,'wrap']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'status']])
Z([[7],[3,'text']])
Z([[7],[3,'dot']])
Z([[2,'&&'],[[7],[3,'showZero']],[[2,'==='],[[7],[3,'count']],[1,0]]])
Z([[2,'!=='],[[7],[3,'count']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appParameter']])
Z([3,'bindcontact'])
Z([3,'onError'])
Z([3,'bindgetphonenumber'])
Z([3,'bindgetuserinfo'])
Z([3,'bindopensetting'])
Z([3,'onTap'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'disabled']])
Z([[7],[3,'formType']])
Z([a,[3,'wux-hover-class '],[[2,'?:'],[[2,'!'],[[7],[3,'disabled']]],[[6],[[7],[3,'classes']],[3,'hover']],[1,'none']]])
Z([[7],[3,'hoverStartTime']])
Z([[7],[3,'hoverStayTime']])
Z([[7],[3,'hoverStopPropagation']])
Z([[7],[3,'lang']])
Z([[7],[3,'loading']])
Z([[7],[3,'openType']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'close'])
Z([3,'bottom'])
Z([[7],[3,'in']])
Z([3,'1010'])
Z([[6],[[7],[3,'classes']],[3,'content']])
Z([[7],[3,'toolbar']])
Z([[7],[3,'weekHeader']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[2,'||'],[[2,'||'],[[7],[3,'thumb']],[[7],[3,'title']]],[[7],[3,'extra']]])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[2,'||'],[[7],[3,'thumb']],[[7],[3,'title']]])
Z([[7],[3,'thumb']])
Z([[7],[3,'extra']])
Z([3,'body'])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onPopupClose'])
Z([3,'bottom'])
Z([[7],[3,'visible']])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[7],[3,'title']])
Z([[6],[[7],[3,'activeOptions']],[3,'length']])
Z([3,'optionIndex'])
Z([3,'option'])
Z([[7],[3,'showOptions']])
Z([3,''])
Z([[7],[3,'option']])
Z(z[10])
Z([3,'onItemSelect'])
Z([a,[[6],[[7],[3,'classes']],[3,'item']],[3,' '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'activeValue']],[[7],[3,'optionIndex']]],[[6],[[7],[3,'item']],[[6],[[7],[3,'fieldNames']],[1,'value']]]],[[2,'+'],[[7],[3,'prefixCls']],[1,'__item--active']],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'disabled']],[[2,'+'],[[7],[3,'prefixCls']],[1,'__item--disabled']],[1,'']]])
Z([[7],[3,'item']])
Z([[7],[3,'optionIndex']])
Z([[2,'==='],[[6],[[7],[3,'activeValue']],[[7],[3,'optionIndex']]],[[6],[[7],[3,'item']],[[6],[[7],[3,'fieldNames']],[1,'value']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'title']])
Z([[7],[3,'label']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appParameter']])
Z([3,'bindcontact'])
Z([3,'onError'])
Z([3,'bindgetphonenumber'])
Z([3,'bindgetuserinfo'])
Z([3,'bindopensetting'])
Z([3,'onTap'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'disabled']])
Z([[2,'?:'],[[2,'!'],[[7],[3,'disabled']]],[[6],[[7],[3,'classes']],[3,'hover']],[1,'none']])
Z([[7],[3,'hoverStartTime']])
Z([[7],[3,'hoverStayTime']])
Z([[7],[3,'hoverStopPropagation']])
Z([[7],[3,'lang']])
Z([[7],[3,'openType']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[7],[3,'thumb']])
Z([3,'header'])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'title']])
Z([[7],[3,'label']])
Z([[6],[[7],[3,'classes']],[3,'ft']])
Z([[7],[3,'extra']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'label']])
Z([[7],[3,'cellGroupPrefixCls']])
Z([[7],[3,'title']])
Z([[7],[3,'prefixCls']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onChange'])
Z([a,[3,'wux-class wux-checkbox '],[[2,'?:'],[[7],[3,'inputChecked']],[1,'wux-checkbox--checked'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'disabled']],[1,'wux-checkbox--disabled'],[1,'']]])
Z([[7],[3,'wrapStyle']])
Z([[2,'==='],[[7],[3,'type']],[1,'checkbox']])
Z([[2,'==='],[[7],[3,'type']],[1,'radio']])
Z([[7],[3,'inputChecked']])
Z([3,'icon-on'])
Z([3,'icon-off'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'extra']])
Z([[7],[3,'label']])
Z([[7],[3,'cellPrefixCls']])
Z([[7],[3,'title']])
Z([[6],[[7],[3,'classes']],[3,'cell']])
Z([3,'checkboxChange'])
Z([[7],[3,'inputChecked']])
Z([[7],[3,'color']])
Z([[7],[3,'disabled']])
Z([[7],[3,'selectablePrefixCls']])
Z([3,'header'])
Z([[7],[3,'value']])
Z([[6],[[7],[3,'classes']],[3,'selectable']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClose'])
Z([3,'onClosed'])
Z([[7],[3,'closable']])
Z([[7],[3,'mask']])
Z([[7],[3,'maskClosable']])
Z([[7],[3,'in']])
Z([[7],[3,'zIndex']])
Z([[7],[3,'prompt']])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'backdrop']],[[7],[3,'buttonVisible']]])
Z([3,'onToggle'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[6],[[7],[3,'classes']],[3,'action']])
Z([[6],[[7],[3,'classes']],[3,'hover']])
Z([[7],[3,'action']])
Z([3,'action'])
Z([3,'button'])
Z([[7],[3,'buttons']])
Z([3,'index'])
Z([[6],[[7],[3,'button']],[3,'appParameter']])
Z([3,'bindcontact'])
Z([3,'onError'])
Z([3,'bindgetphonenumber'])
Z([3,'bindgetuserinfo'])
Z([3,'bindopensetting'])
Z([3,'onTap'])
Z([[6],[[6],[[6],[[7],[3,'classes']],[3,'button']],[[7],[3,'index']]],[3,'wrap']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'button']],[3,'label']])
Z([[7],[3,'button']])
Z([[6],[[7],[3,'button']],[3,'disabled']])
Z([[2,'?:'],[[2,'!'],[[6],[[7],[3,'button']],[3,'disabled']]],[[6],[[6],[[6],[[7],[3,'classes']],[3,'button']],[[7],[3,'index']]],[3,'hover']],[1,'none']])
Z([[6],[[7],[3,'button']],[3,'hoverStartTime']])
Z([[6],[[7],[3,'button']],[3,'hoverStayTime']])
Z([[6],[[7],[3,'button']],[3,'hoverStopPropagation']])
Z([[6],[[7],[3,'button']],[3,'lang']])
Z([[6],[[7],[3,'button']],[3,'openType']])
Z([[6],[[7],[3,'button']],[3,'sendMessageImg']])
Z([[6],[[7],[3,'button']],[3,'sendMessagePath']])
Z([[6],[[7],[3,'button']],[3,'sendMessageTitle']])
Z([[6],[[7],[3,'button']],[3,'sessionFrom']])
Z([[6],[[7],[3,'button']],[3,'showMessageCard']])
Z([[6],[[7],[3,'buttonStyle']],[[7],[3,'index']]])
Z(z[19])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([3,'onClose'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'options']],[[7],[3,'index']]])
Z([3,'wux-backdrop'])
Z([[7],[3,'options']])
Z([3,''])
Z([3,'onClick'])
Z([a,[[6],[[7],[3,'classes']],[3,'item']],[3,' '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[[2,'+'],[[7],[3,'prefixCls']],[1,'__item--checked']],[1,'']]])
Z(z[2])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'radio']],[[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'checkbox']]],[[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'sort']]],[[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'filter']]])
Z(z[5])
Z(z[6])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'filter']])
Z([3,'onEnter'])
Z([3,'onExit'])
Z([3,'wux-animate--slideInRight'])
Z([[6],[[7],[3,'item']],[3,'visible']])
Z([[6],[[7],[3,'classes']],[3,'pop']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'radio']])
Z(z[14])
Z(z[15])
Z([3,'wux-animate--fadeIn'])
Z(z[17])
Z([[6],[[7],[3,'classes']],[3,'select']])
Z([3,'radioChange'])
Z(z[2])
Z([[7],[3,'item']])
Z([[12],[[6],[[7],[3,'common']],[3,'getRadioValue']],[[5],[[6],[[7],[3,'item']],[3,'children']]]])
Z([3,'p'])
Z([[6],[[7],[3,'item']],[3,'children']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'p']],[3,'label']])
Z([[6],[[7],[3,'p']],[3,'value']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'checkbox']])
Z(z[14])
Z(z[15])
Z(z[22])
Z(z[17])
Z(z[24])
Z([3,'checkboxChange'])
Z(z[2])
Z(z[27])
Z([3,'a'])
Z([[12],[[6],[[7],[3,'common']],[3,'getCheckboxValue']],[[5],[[6],[[7],[3,'item']],[3,'children']]]])
Z(z[29])
Z(z[30])
Z(z[31])
Z(z[32])
Z(z[33])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'backdrop']],[[7],[3,'buttonVisible']]])
Z([3,'onToggle'])
Z([a,[3,'wux-class wux-speed-dial '],[[2,'?:'],[[7],[3,'position']],[[2,'+'],[1,'wux-speed-dial--'],[[7],[3,'position']]],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'theme']],[[2,'+'],[1,'wux-speed-dial--'],[[7],[3,'theme']]],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'buttonVisible']],[1,'wux-speed-dial--opened'],[1,'']]])
Z([[6],[[7],[3,'buttons']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'classNames']])
Z([[7],[3,'in']])
Z([[7],[3,'prefixCls']])
Z([[2,'&&'],[[7],[3,'in']],[[6],[[7],[3,'images']],[3,'length']]])
Z([[7],[3,'autoplay']])
Z([3,'onChange'])
Z([[7],[3,'circular']])
Z([[6],[[7],[3,'classes']],[3,'swiper']])
Z([[7],[3,'current']])
Z([[7],[3,'duration']])
Z([[7],[3,'indicatorActiveColor']])
Z([[7],[3,'indicatorColor']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([[7],[3,'vertical']])
Z([[7],[3,'images']])
Z([3,'index'])
Z([[6],[[7],[3,'item']],[3,'remark']])
Z([[7],[3,'showDelete']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTap'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[6],[[7],[3,'classes']],[3,'hover']])
Z([a,[3,'width: '],[[7],[3,'width']]])
Z([[6],[[7],[3,'classes']],[3,'inner']])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[7],[3,'thumb']])
Z([3,'header'])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'label']])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!=='],[[7],[3,'status']],[1,'unmounted']])
Z([3,'onTap'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'style']])
Z([[6],[[7],[3,'classes']],[3,'inner']])
Z([[7],[3,'src']])
Z([[2,'==='],[[7],[3,'status']],[1,'empty']])
Z([[6],[[7],[3,'classes']],[3,'mask']])
Z([[7],[3,'empty']])
Z([3,'empty'])
Z([[2,'==='],[[7],[3,'status']],[1,'loading']])
Z(z[7])
Z([[7],[3,'loading']])
Z([3,'loading'])
Z([[2,'==='],[[7],[3,'status']],[1,'error']])
Z(z[7])
Z([[7],[3,'error']])
Z([3,'error'])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onScroll'])
Z([[7],[3,'scrollTop']])
Z([[7],[3,'extStyle']])
Z([[2,'>'],[[6],[[7],[3,'sections']],[3,'length']],[1,0]])
Z([[2,'&&'],[[7],[3,'showIndicator']],[[7],[3,'moving']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([3,'onLongpress'])
Z([3,'onTap'])
Z([3,'onTouchEnd'])
Z([a,[3,'wux-sub-class '],[[6],[[7],[3,'classes']],[3,'sub']]])
Z([3,'sub'])
Z([3,'onTouchCancel'])
Z([3,'ios-remove'])
Z([[6],[[7],[3,'classes']],[3,'icon']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([a,[3,'wux-add-class '],[[6],[[7],[3,'classes']],[3,'add']]])
Z([3,'add'])
Z(z[6])
Z([3,'ios-add'])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'label']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'clear']],[[2,'!'],[[7],[3,'disabled']]]],[[7],[3,'inputValue']]],[[2,'>'],[[6],[[7],[3,'inputValue']],[3,'length']],[1,0]]])
Z([[7],[3,'error']])
Z([[7],[3,'extra']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hide'])
Z([3,'bottom'])
Z([[7],[3,'in']])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'inputText']])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'keys']])
Z([3,'index'])
Z([[2,'!=='],[[7],[3,'maxlength']],[[2,'-'],[1,1]]])
Z([[2,'==='],[[7],[3,'maxlength']],[[2,'-'],[1,1]]])
Z([[7],[3,'titleText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'mask']])
Z([3,'wux-backdrop'])
Z([[7],[3,'transparent']])
Z([[7],[3,'classNames']])
Z([[7],[3,'in']])
Z([[6],[[7],[3,'classes']],[3,'wrap']])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'thumb']])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'title']])
Z([[7],[3,'label']])
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([3,'onClick'])
Z([[6],[[7],[3,'classes']],[3,'left']])
Z([3,'left'])
Z([[7],[3,'leftText']])
Z(z[3])
Z([[6],[[7],[3,'classes']],[3,'title']])
Z([[7],[3,'title']])
Z(z[1])
Z([[6],[[7],[3,'classes']],[3,'right']])
Z([3,'right'])
Z([[7],[3,'rightText']])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
Z([3,'onClick'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[7],[3,'icon']])
Z([3,'header'])
Z([[6],[[7],[3,'classes']],[3,'marquee']])
Z([a,[3,'transform: translate3d('],[[2,'+'],[[2,'-'],[[7],[3,'animatedWidth']]],[1,'px']],[3,', 0px, 0px)']])
Z([[7],[3,'content']])
Z([[2,'||'],[[2,'==='],[[7],[3,'mode']],[1,'closable']],[[2,'==='],[[7],[3,'mode']],[1,'link']]])
Z([3,'onAction'])
Z([[6],[[7],[3,'classes']],[3,'ft']])
Z([[7],[3,'action']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[7],[3,'classNames']])
Z([[7],[3,'in']])
Z([[6],[[7],[3,'classes']],[3,'wrap']])
Z([[6],[[7],[3,'classes']],[3,'content']])
Z([[7],[3,'image']])
Z([[2,'||'],[[7],[3,'title']],[[7],[3,'text']]])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'title']])
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
function gz$gwx_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx_62)return __WXML_GLOBAL__.ops_cached.$gwx_62
__WXML_GLOBAL__.ops_cached.$gwx_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[2,'==='],[[7],[3,'mode']],[1,'button']])
Z([3,'onPrev'])
Z([[2,'<='],[[7],[3,'activeIndex']],[1,1]])
Z([3,'light'])
Z([[6],[[7],[3,'classes']],[3,'button']])
Z([3,'prev'])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'mode']],[1,'pointer']],[[2,'!'],[[7],[3,'simple']]]])
Z([[2,'==='],[[7],[3,'mode']],[1,'pointer']])
Z(z[1])
Z([3,'onNext'])
Z([[2,'>='],[[7],[3,'activeIndex']],[[7],[3,'total']]])
Z(z[4])
Z(z[5])
Z([3,'next'])
})(__WXML_GLOBAL__.ops_cached.$gwx_62);return __WXML_GLOBAL__.ops_cached.$gwx_62
}
function gz$gwx_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx_63)return __WXML_GLOBAL__.ops_cached.$gwx_63
__WXML_GLOBAL__.ops_cached.$gwx_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onEnter'])
Z([[7],[3,'classNames']])
Z([[7],[3,'popoverVisible']])
Z([[6],[[7],[3,'classes']],[3,'inner']])
Z([[7],[3,'title']])
Z([3,'title'])
Z([[7],[3,'content']])
Z([3,'content'])
Z([3,'onClick'])
Z([[6],[[7],[3,'classes']],[3,'element']])
})(__WXML_GLOBAL__.ops_cached.$gwx_63);return __WXML_GLOBAL__.ops_cached.$gwx_63
}
function gz$gwx_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx_64)return __WXML_GLOBAL__.ops_cached.$gwx_64
__WXML_GLOBAL__.ops_cached.$gwx_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'mask']])
Z([3,'onMaskClick'])
Z([3,'wux-backdrop'])
Z([[7],[3,'zIndex']])
Z([3,'onExited'])
Z([[7],[3,'transitionName']])
Z([[7],[3,'popupVisible']])
Z([[8],'zIndex',[[7],[3,'zIndex']]])
Z([[7],[3,'prefixCls']])
Z([a,[3,'wux-content-class '],[[6],[[7],[3,'classes']],[3,'content']]])
Z([a,[3,'wux-header-class '],[[6],[[7],[3,'classes']],[3,'hd']]])
Z([[7],[3,'title']])
Z([3,'header'])
Z([a,[3,'wux-body-class '],[[6],[[7],[3,'classes']],[3,'bd']]])
Z([[7],[3,'content']])
Z([a,[3,'wux-footer-class '],[[6],[[7],[3,'classes']],[3,'ft']]])
Z([[7],[3,'extra']])
Z([3,'footer'])
Z([[7],[3,'closable']])
})(__WXML_GLOBAL__.ops_cached.$gwx_64);return __WXML_GLOBAL__.ops_cached.$gwx_64
}
function gz$gwx_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx_65)return __WXML_GLOBAL__.ops_cached.$gwx_65
__WXML_GLOBAL__.ops_cached.$gwx_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showInfo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_65);return __WXML_GLOBAL__.ops_cached.$gwx_65
}
function gz$gwx_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx_66)return __WXML_GLOBAL__.ops_cached.$gwx_66
__WXML_GLOBAL__.ops_cached.$gwx_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'classNames']])
Z([[7],[3,'visible']])
Z([[6],[[7],[3,'classes']],[3,'wrap']])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'icon']])
Z([[7],[3,'title']])
Z([[7],[3,'text']])
Z([[2,'&&'],[[7],[3,'buttons']],[[2,'!'],[[2,'!'],[[6],[[7],[3,'buttons']],[3,'length']]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_66);return __WXML_GLOBAL__.ops_cached.$gwx_66
}
function gz$gwx_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx_67)return __WXML_GLOBAL__.ops_cached.$gwx_67
__WXML_GLOBAL__.ops_cached.$gwx_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_67);return __WXML_GLOBAL__.ops_cached.$gwx_67
}
function gz$gwx_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx_68)return __WXML_GLOBAL__.ops_cached.$gwx_68
__WXML_GLOBAL__.ops_cached.$gwx_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'label']])
Z([[7],[3,'cellGroupPrefixCls']])
Z([[7],[3,'title']])
Z([[7],[3,'prefixCls']])
})(__WXML_GLOBAL__.ops_cached.$gwx_68);return __WXML_GLOBAL__.ops_cached.$gwx_68
}
function gz$gwx_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx_69)return __WXML_GLOBAL__.ops_cached.$gwx_69
__WXML_GLOBAL__.ops_cached.$gwx_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'label']])
Z([[7],[3,'cellPrefixCls']])
Z([[7],[3,'thumb']])
Z([[7],[3,'title']])
Z([[6],[[7],[3,'classes']],[3,'cell']])
Z([3,'radioChange'])
Z([[7],[3,'inputChecked']])
Z([[7],[3,'color']])
Z([[7],[3,'disabled']])
Z([[7],[3,'selectablePrefixCls']])
Z([3,'footer'])
Z([3,'radio'])
Z([[7],[3,'value']])
Z([[6],[[7],[3,'classes']],[3,'selectable']])
})(__WXML_GLOBAL__.ops_cached.$gwx_69);return __WXML_GLOBAL__.ops_cached.$gwx_69
}
function gz$gwx_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx_70)return __WXML_GLOBAL__.ops_cached.$gwx_70
__WXML_GLOBAL__.ops_cached.$gwx_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTouchMove'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'stars']])
Z([3,''])
Z([3,'onTap'])
Z([[6],[[7],[3,'classes']],[3,'star']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'classes']],[3,'inner']])
Z([[7],[3,'icon']])
Z([[2,'?:'],[[2,'&&'],[[7],[3,'colors']],[[6],[[7],[3,'colors']],[[7],[3,'index']]]],[[6],[[7],[3,'colors']],[[7],[3,'index']]],[1,'#ccc']])
Z([[7],[3,'fontSize']])
Z(z[8])
Z([[6],[[7],[3,'classes']],[3,'icon']])
Z([[2,'&&'],[[2,'>'],[[7],[3,'cutPercent']],[1,0]],[[2,'==='],[[7],[3,'cutIndex']],[[7],[3,'index']]]])
Z([[6],[[7],[3,'classes']],[3,'outer']])
Z([a,[3,'color: '],[[7],[3,'activeColor']],[3,'; width: '],[[2,'+'],[[7],[3,'cutPercent']],[1,'%']]])
Z(z[8])
Z(z[15][2])
Z(z[10])
Z(z[8])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_70);return __WXML_GLOBAL__.ops_cached.$gwx_70
}
function gz$gwx_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx_71)return __WXML_GLOBAL__.ops_cached.$gwx_71
__WXML_GLOBAL__.ops_cached.$gwx_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindtouchend'])
Z([3,'bindtouchmove'])
Z([3,'bindtouchstart'])
Z([[7],[3,'style']])
Z([[6],[[7],[3,'classes']],[3,'lContent']])
Z([[2,'==='],[[7],[3,'noData']],[1,false]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'noData']],[1,false]],[[2,'==='],[[7],[3,'isShowLoadingText']],[1,true]]])
Z([[2,'==='],[[7],[3,'noData']],[1,true]])
})(__WXML_GLOBAL__.ops_cached.$gwx_71);return __WXML_GLOBAL__.ops_cached.$gwx_71
}
function gz$gwx_72(){
if( __WXML_GLOBAL__.ops_cached.$gwx_72)return __WXML_GLOBAL__.ops_cached.$gwx_72
__WXML_GLOBAL__.ops_cached.$gwx_72=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[7],[3,'resultIcon']])
Z([3,'header'])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'title']])
Z([[7],[3,'label']])
Z([[6],[[7],[3,'buttons']],[3,'length']])
Z([3,'button'])
Z([[7],[3,'buttons']])
Z([3,'index'])
Z([[6],[[7],[3,'button']],[3,'appParameter']])
Z([3,'onClick'])
Z([3,'bindcontact'])
Z([3,'bindgetphonenumber'])
Z([3,'bindgetuserinfo'])
Z([3,'onError'])
Z([3,'bindopensetting'])
Z([[6],[[7],[3,'button']],[3,'block']])
Z([[6],[[7],[3,'button']],[3,'clear']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'button']],[3,'disabled']])
Z([[6],[[7],[3,'button']],[3,'formType']])
Z([[6],[[7],[3,'button']],[3,'full']])
Z([[6],[[7],[3,'button']],[3,'hoverStartTime']])
Z([[6],[[7],[3,'button']],[3,'hoverStayTime']])
Z([[6],[[7],[3,'button']],[3,'hoverStopPropagation']])
Z([[6],[[7],[3,'button']],[3,'lang']])
Z([[6],[[7],[3,'button']],[3,'loading']])
Z([[6],[[7],[3,'button']],[3,'openType']])
Z([[6],[[7],[3,'button']],[3,'outline']])
Z([[6],[[7],[3,'button']],[3,'sendMessageImg']])
Z([[6],[[7],[3,'button']],[3,'sendMessagePath']])
Z([[6],[[7],[3,'button']],[3,'sendMessageTitle']])
Z([[6],[[7],[3,'button']],[3,'sessionFrom']])
Z([[6],[[7],[3,'button']],[3,'showMessageCard']])
Z([[6],[[7],[3,'button']],[3,'size']])
Z([[6],[[7],[3,'button']],[3,'type']])
Z([[6],[[7],[3,'classes']],[3,'ft']])
Z([[7],[3,'extra']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_72);return __WXML_GLOBAL__.ops_cached.$gwx_72
}
function gz$gwx_73(){
if( __WXML_GLOBAL__.ops_cached.$gwx_73)return __WXML_GLOBAL__.ops_cached.$gwx_73
__WXML_GLOBAL__.ops_cached.$gwx_73=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_73);return __WXML_GLOBAL__.ops_cached.$gwx_73
}
function gz$gwx_74(){
if( __WXML_GLOBAL__.ops_cached.$gwx_74)return __WXML_GLOBAL__.ops_cached.$gwx_74
__WXML_GLOBAL__.ops_cached.$gwx_74=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[6],[[7],[3,'classes']],[3,'form']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'clear']],[[2,'!'],[[7],[3,'disabled']]]],[[7],[3,'inputValue']]],[[2,'>'],[[6],[[7],[3,'inputValue']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'inputFocus']]],[[2,'!'],[[7],[3,'inputValue']]]])
Z([[2,'||'],[[2,'||'],[[7],[3,'showCancel']],[[7],[3,'inputFocus']]],[[2,'&&'],[[7],[3,'inputValue']],[[2,'>'],[[6],[[7],[3,'inputValue']],[3,'length']],[1,0]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_74);return __WXML_GLOBAL__.ops_cached.$gwx_74
}
function gz$gwx_75(){
if( __WXML_GLOBAL__.ops_cached.$gwx_75)return __WXML_GLOBAL__.ops_cached.$gwx_75
__WXML_GLOBAL__.ops_cached.$gwx_75=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'values']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_75);return __WXML_GLOBAL__.ops_cached.$gwx_75
}
function gz$gwx_76(){
if( __WXML_GLOBAL__.ops_cached.$gwx_76)return __WXML_GLOBAL__.ops_cached.$gwx_76
__WXML_GLOBAL__.ops_cached.$gwx_76=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onCancel'])
Z([3,'bottom'])
Z([[7],[3,'in']])
Z([[6],[[7],[3,'classes']],[3,'wrap']])
Z([[7],[3,'toolbar']])
Z([[6],[[7],[3,'classes']],[3,'inner']])
Z([[6],[[7],[3,'toolbar']],[3,'cancelText']])
Z([[6],[[7],[3,'toolbar']],[3,'confirmText']])
Z([[6],[[7],[3,'classes']],[3,'scrollView']])
Z([[7],[3,'activeIndex']])
Z([[2,'!'],[[7],[3,'multiple']]])
Z([3,'onRadioChange'])
Z([[7],[3,'value']])
Z([[12],[[6],[[7],[3,'common']],[3,'getItems']],[[5],[[7],[3,'options']]]])
Z([3,'index'])
Z([[6],[[7],[3,'item']],[3,'color']])
Z([[6],[[7],[3,'item']],[3,'disabled']])
Z([[2,'+'],[1,'select-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'label']])
Z([[6],[[7],[3,'item']],[3,'thumb']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([3,'onCheckboxChange'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z([[6],[[7],[3,'item']],[3,'extra']])
Z(z[17])
Z(z[18])
Z(z[20])
Z(z[21])
})(__WXML_GLOBAL__.ops_cached.$gwx_76);return __WXML_GLOBAL__.ops_cached.$gwx_76
}
function gz$gwx_77(){
if( __WXML_GLOBAL__.ops_cached.$gwx_77)return __WXML_GLOBAL__.ops_cached.$gwx_77
__WXML_GLOBAL__.ops_cached.$gwx_77=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onChange'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'extStyle']])
Z([[2,'==='],[[7],[3,'type']],[1,'checkbox']])
Z([[2,'==='],[[7],[3,'type']],[1,'radio']])
Z([[7],[3,'inputChecked']])
Z([3,'icon-on'])
Z([3,'icon-off'])
})(__WXML_GLOBAL__.ops_cached.$gwx_77);return __WXML_GLOBAL__.ops_cached.$gwx_77
}
function gz$gwx_78(){
if( __WXML_GLOBAL__.ops_cached.$gwx_78)return __WXML_GLOBAL__.ops_cached.$gwx_78
__WXML_GLOBAL__.ops_cached.$gwx_78=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_78);return __WXML_GLOBAL__.ops_cached.$gwx_78
}
function gz$gwx_79(){
if( __WXML_GLOBAL__.ops_cached.$gwx_79)return __WXML_GLOBAL__.ops_cached.$gwx_79
__WXML_GLOBAL__.ops_cached.$gwx_79=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_79);return __WXML_GLOBAL__.ops_cached.$gwx_79
}
function gz$gwx_80(){
if( __WXML_GLOBAL__.ops_cached.$gwx_80)return __WXML_GLOBAL__.ops_cached.$gwx_80
__WXML_GLOBAL__.ops_cached.$gwx_80=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_80);return __WXML_GLOBAL__.ops_cached.$gwx_80
}
function gz$gwx_81(){
if( __WXML_GLOBAL__.ops_cached.$gwx_81)return __WXML_GLOBAL__.ops_cached.$gwx_81
__WXML_GLOBAL__.ops_cached.$gwx_81=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'extWrapStyle']])
Z([[12],[[6],[[7],[3,'common']],[3,'getValue']],[[5],[[5],[[7],[3,'showValue']]],[1,'min']]])
Z([[6],[[7],[3,'classes']],[3,'rail']])
Z([[7],[3,'extRailStyle']])
Z([[7],[3,'marks']])
Z([3,''])
Z([[2,'&&'],[[7],[3,'showMark']],[[2,'>'],[[6],[[7],[3,'marks']],[3,'length']],[1,0]]])
Z([[7],[3,'sliderValue']])
Z(z[6])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'sliderValue']],[3,'length']],[1,1]],[[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'sliderValue']],[3,'length']],[1,1]]]])
Z([[12],[[6],[[7],[3,'common']],[3,'getValue']],[[5],[[5],[[7],[3,'showValue']]],[1,'max']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_81);return __WXML_GLOBAL__.ops_cached.$gwx_81
}
function gz$gwx_82(){
if( __WXML_GLOBAL__.ops_cached.$gwx_82)return __WXML_GLOBAL__.ops_cached.$gwx_82
__WXML_GLOBAL__.ops_cached.$gwx_82=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'classNames']])
Z([[7],[3,'spinVisible']])
Z([[6],[[7],[3,'classes']],[3,'anim']])
Z([[7],[3,'tip']])
Z([[7],[3,'nested']])
})(__WXML_GLOBAL__.ops_cached.$gwx_82);return __WXML_GLOBAL__.ops_cached.$gwx_82
}
function gz$gwx_83(){
if( __WXML_GLOBAL__.ops_cached.$gwx_83)return __WXML_GLOBAL__.ops_cached.$gwx_83
__WXML_GLOBAL__.ops_cached.$gwx_83=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']],[3,' '],[[7],[3,'className']]])
Z([a,[3,'width: '],[[7],[3,'width']]])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[2,'!'],[[7],[3,'hasIcon']]])
Z([[7],[3,'thumb']])
Z([3,'24'])
Z(z[4])
Z([[6],[[7],[3,'classes']],[3,'thumb']])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'title']])
Z([3,'title'])
Z([[7],[3,'content']])
Z([3,'content'])
Z([[2,'!=='],[[7],[3,'index']],[[2,'-'],[[7],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_83);return __WXML_GLOBAL__.ops_cached.$gwx_83
}
function gz$gwx_84(){
if( __WXML_GLOBAL__.ops_cached.$gwx_84)return __WXML_GLOBAL__.ops_cached.$gwx_84
__WXML_GLOBAL__.ops_cached.$gwx_84=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_84);return __WXML_GLOBAL__.ops_cached.$gwx_84
}
function gz$gwx_85(){
if( __WXML_GLOBAL__.ops_cached.$gwx_85)return __WXML_GLOBAL__.ops_cached.$gwx_85
__WXML_GLOBAL__.ops_cached.$gwx_85=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[6],[[7],[3,'classes']],[3,'hd']])
Z([[7],[3,'title']])
Z([3,'title'])
Z([[6],[[7],[3,'classes']],[3,'bd']])
Z([[7],[3,'content']])
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_85);return __WXML_GLOBAL__.ops_cached.$gwx_85
}
function gz$gwx_86(){
if( __WXML_GLOBAL__.ops_cached.$gwx_86)return __WXML_GLOBAL__.ops_cached.$gwx_86
__WXML_GLOBAL__.ops_cached.$gwx_86=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_86);return __WXML_GLOBAL__.ops_cached.$gwx_86
}
function gz$gwx_87(){
if( __WXML_GLOBAL__.ops_cached.$gwx_87)return __WXML_GLOBAL__.ops_cached.$gwx_87
__WXML_GLOBAL__.ops_cached.$gwx_87=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_87);return __WXML_GLOBAL__.ops_cached.$gwx_87
}
function gz$gwx_88(){
if( __WXML_GLOBAL__.ops_cached.$gwx_88)return __WXML_GLOBAL__.ops_cached.$gwx_88
__WXML_GLOBAL__.ops_cached.$gwx_88=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'actions'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[2,'||'],[[7],[3,'useSlots']],[[2,'>'],[[6],[[7],[3,'left']],[3,'length']],[1,0]]])
Z([3,'onAcitons'])
Z([[6],[[7],[3,'classes']],[3,'left']])
Z([[2,'!'],[[7],[3,'useSlots']]])
Z([[9],[[9],[[8],'classes',[[7],[3,'classes']]],[[8],'actions',[[7],[3,'left']]]],[[8],'type',[1,'left']]])
Z(z[0])
Z([3,'left'])
Z([[2,'||'],[[7],[3,'useSlots']],[[2,'>'],[[6],[[7],[3,'right']],[3,'length']],[1,0]]])
Z(z[3])
Z([[6],[[7],[3,'classes']],[3,'right']])
Z(z[5])
Z([[9],[[9],[[8],'classes',[[7],[3,'classes']]],[[8],'actions',[[7],[3,'right']]]],[[8],'type',[1,'right']]])
Z(z[0])
Z([3,'right'])
Z([3,'onTouchEnd'])
Z([3,'onTouchMove'])
Z([3,'onTouchStart'])
Z([[6],[[7],[3,'classes']],[3,'content']])
Z([[7],[3,'offsetStyle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_88);return __WXML_GLOBAL__.ops_cached.$gwx_88
}
function gz$gwx_89(){
if( __WXML_GLOBAL__.ops_cached.$gwx_89)return __WXML_GLOBAL__.ops_cached.$gwx_89
__WXML_GLOBAL__.ops_cached.$gwx_89=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_89);return __WXML_GLOBAL__.ops_cached.$gwx_89
}
function gz$gwx_90(){
if( __WXML_GLOBAL__.ops_cached.$gwx_90)return __WXML_GLOBAL__.ops_cached.$gwx_90
__WXML_GLOBAL__.ops_cached.$gwx_90=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTap'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'title']])
Z([[7],[3,'current']])
})(__WXML_GLOBAL__.ops_cached.$gwx_90);return __WXML_GLOBAL__.ops_cached.$gwx_90
}
function gz$gwx_91(){
if( __WXML_GLOBAL__.ops_cached.$gwx_91)return __WXML_GLOBAL__.ops_cached.$gwx_91
__WXML_GLOBAL__.ops_cached.$gwx_91=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTap'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([a,[3,'width: '],[[7],[3,'width']]])
Z([[6],[[7],[3,'classes']],[3,'icon']])
Z([[7],[3,'current']])
Z([3,'icon-off'])
Z([3,'icon-on'])
Z([[6],[[7],[3,'classes']],[3,'title']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_91);return __WXML_GLOBAL__.ops_cached.$gwx_91
}
function gz$gwx_92(){
if( __WXML_GLOBAL__.ops_cached.$gwx_92)return __WXML_GLOBAL__.ops_cached.$gwx_92
__WXML_GLOBAL__.ops_cached.$gwx_92=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_92);return __WXML_GLOBAL__.ops_cached.$gwx_92
}
function gz$gwx_93(){
if( __WXML_GLOBAL__.ops_cached.$gwx_93)return __WXML_GLOBAL__.ops_cached.$gwx_93
__WXML_GLOBAL__.ops_cached.$gwx_93=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'scroll']])
})(__WXML_GLOBAL__.ops_cached.$gwx_93);return __WXML_GLOBAL__.ops_cached.$gwx_93
}
function gz$gwx_94(){
if( __WXML_GLOBAL__.ops_cached.$gwx_94)return __WXML_GLOBAL__.ops_cached.$gwx_94
__WXML_GLOBAL__.ops_cached.$gwx_94=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'tagVisible']])
Z([3,'onClick'])
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']],[3,' '],[[7],[3,'className']]])
Z([[6],[[7],[3,'classes']],[3,'hover']])
Z([[7],[3,'tagStyle']])
Z([[7],[3,'closable']])
})(__WXML_GLOBAL__.ops_cached.$gwx_94);return __WXML_GLOBAL__.ops_cached.$gwx_94
}
function gz$gwx_95(){
if( __WXML_GLOBAL__.ops_cached.$gwx_95)return __WXML_GLOBAL__.ops_cached.$gwx_95
__WXML_GLOBAL__.ops_cached.$gwx_95=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']]])
Z([[7],[3,'label']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'clear']],[[2,'!'],[[7],[3,'disabled']]]],[[7],[3,'inputValue']]],[[2,'>'],[[6],[[7],[3,'inputValue']],[3,'length']],[1,0]]])
Z([[7],[3,'error']])
Z([[7],[3,'extra']])
Z([3,'footer'])
Z([[7],[3,'hasCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_95);return __WXML_GLOBAL__.ops_cached.$gwx_95
}
function gz$gwx_96(){
if( __WXML_GLOBAL__.ops_cached.$gwx_96)return __WXML_GLOBAL__.ops_cached.$gwx_96
__WXML_GLOBAL__.ops_cached.$gwx_96=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_96);return __WXML_GLOBAL__.ops_cached.$gwx_96
}
function gz$gwx_97(){
if( __WXML_GLOBAL__.ops_cached.$gwx_97)return __WXML_GLOBAL__.ops_cached.$gwx_97
__WXML_GLOBAL__.ops_cached.$gwx_97=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wux-class '],[[6],[[7],[3,'classes']],[3,'wrap']],[3,' '],[[7],[3,'className']]])
Z([[7],[3,'custom']])
Z([3,'dot'])
})(__WXML_GLOBAL__.ops_cached.$gwx_97);return __WXML_GLOBAL__.ops_cached.$gwx_97
}
function gz$gwx_98(){
if( __WXML_GLOBAL__.ops_cached.$gwx_98)return __WXML_GLOBAL__.ops_cached.$gwx_98
__WXML_GLOBAL__.ops_cached.$gwx_98=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_98);return __WXML_GLOBAL__.ops_cached.$gwx_98
}
function gz$gwx_99(){
if( __WXML_GLOBAL__.ops_cached.$gwx_99)return __WXML_GLOBAL__.ops_cached.$gwx_99
__WXML_GLOBAL__.ops_cached.$gwx_99=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'mask']])
Z([3,'wux-backdrop'])
Z([[7],[3,'transparent']])
Z([[7],[3,'classNames']])
Z([[7],[3,'in']])
Z([[6],[[7],[3,'classes']],[3,'wrap']])
Z([[7],[3,'icon']])
Z([[7],[3,'color']])
Z([3,'55'])
Z(z[6])
Z([[6],[[7],[3,'classes']],[3,'icon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_99);return __WXML_GLOBAL__.ops_cached.$gwx_99
}
function gz$gwx_100(){
if( __WXML_GLOBAL__.ops_cached.$gwx_100)return __WXML_GLOBAL__.ops_cached.$gwx_100
__WXML_GLOBAL__.ops_cached.$gwx_100=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'classNames']])
Z([[7],[3,'in']])
Z([[6],[[7],[3,'classes']],[3,'wrap']])
Z([[2,'&&'],[[7],[3,'icon']],[[2,'!'],[[7],[3,'hidden']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_100);return __WXML_GLOBAL__.ops_cached.$gwx_100
}
function gz$gwx_101(){
if( __WXML_GLOBAL__.ops_cached.$gwx_101)return __WXML_GLOBAL__.ops_cached.$gwx_101
__WXML_GLOBAL__.ops_cached.$gwx_101=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'classes']],[3,'files']])
Z([[2,'&&'],[[2,'&&'],[[2,'==='],[[7],[3,'listType']],[1,'picture-card']],[[7],[3,'showUploadList']]],[[6],[[7],[3,'uploadFileList']],[3,'length']]])
Z([3,'file'])
Z([[7],[3,'uploadFileList']])
Z([3,'uid'])
Z([3,'onPreview'])
Z([a,[[6],[[7],[3,'classes']],[3,'file']],[3,' '],[[2,'?:'],[[6],[[7],[3,'file']],[3,'status']],[[2,'+'],[[2,'+'],[[7],[3,'prefixCls']],[1,'__file--']],[[6],[[7],[3,'file']],[3,'status']]],[1,'']]])
Z([[7],[3,'file']])
Z([[7],[3,'index']])
Z([[7],[3,'showRemoveIcon']])
Z([[2,'||'],[[2,'==='],[[7],[3,'uploadMax']],[[2,'-'],[1,1]]],[[2,'>'],[[7],[3,'uploadMax']],[[6],[[7],[3,'uploadFileList']],[3,'length']]]])
Z([3,'onSelect'])
Z([[6],[[7],[3,'classes']],[3,'select']])
})(__WXML_GLOBAL__.ops_cached.$gwx_101);return __WXML_GLOBAL__.ops_cached.$gwx_101
}
function gz$gwx_102(){
if( __WXML_GLOBAL__.ops_cached.$gwx_102)return __WXML_GLOBAL__.ops_cached.$gwx_102
__WXML_GLOBAL__.ops_cached.$gwx_102=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_102);return __WXML_GLOBAL__.ops_cached.$gwx_102
}
function gz$gwx_103(){
if( __WXML_GLOBAL__.ops_cached.$gwx_103)return __WXML_GLOBAL__.ops_cached.$gwx_103
__WXML_GLOBAL__.ops_cached.$gwx_103=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_103);return __WXML_GLOBAL__.ops_cached.$gwx_103
}
function gz$gwx_104(){
if( __WXML_GLOBAL__.ops_cached.$gwx_104)return __WXML_GLOBAL__.ops_cached.$gwx_104
__WXML_GLOBAL__.ops_cached.$gwx_104=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_104);return __WXML_GLOBAL__.ops_cached.$gwx_104
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./wxcomponents/wux-weapp/filterbar/index.wxml:common":np_5,"m_./wxcomponents/wux-weapp/select/index.wxml:common":np_6,"m_./wxcomponents/wux-weapp/slider/index.wxml:common":np_7,"p_./wxcomponents/vant-weapp/wxs/array.wxs":np_0,"p_./wxcomponents/vant-weapp/wxs/bem.wxs":np_1,"p_./wxcomponents/vant-weapp/wxs/memoize.wxs":np_2,"p_./wxcomponents/vant-weapp/wxs/object.wxs":np_3,"p_./wxcomponents/vant-weapp/wxs/utils.wxs":np_4,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./wxcomponents/vant-weapp/popup/index.wxml']={};
f_['./wxcomponents/vant-weapp/popup/index.wxml']['utils'] =f_['./wxcomponents/vant-weapp/wxs/utils.wxs'] || nv_require("p_./wxcomponents/vant-weapp/wxs/utils.wxs");
f_['./wxcomponents/vant-weapp/popup/index.wxml']['utils']();

f_['./wxcomponents/vant-weapp/tab/index.wxml']={};
f_['./wxcomponents/vant-weapp/tab/index.wxml']['utils'] =f_['./wxcomponents/vant-weapp/wxs/utils.wxs'] || nv_require("p_./wxcomponents/vant-weapp/wxs/utils.wxs");
f_['./wxcomponents/vant-weapp/tab/index.wxml']['utils']();

f_['./wxcomponents/vant-weapp/tabs/index.wxml']={};
f_['./wxcomponents/vant-weapp/tabs/index.wxml']['utils'] =f_['./wxcomponents/vant-weapp/wxs/utils.wxs'] || nv_require("p_./wxcomponents/vant-weapp/wxs/utils.wxs");
f_['./wxcomponents/vant-weapp/tabs/index.wxml']['utils']();

f_['./wxcomponents/vant-weapp/wxs/array.wxs'] = nv_require("p_./wxcomponents/vant-weapp/wxs/array.wxs");
function np_0(){var nv_module={nv_exports:{}};function nv_isArray(nv_array){return(nv_array && nv_array.nv_constructor === 'Array')};nv_module.nv_exports.nv_isArray = nv_isArray;return nv_module.nv_exports;}

f_['./wxcomponents/vant-weapp/wxs/bem.wxs'] = nv_require("p_./wxcomponents/vant-weapp/wxs/bem.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_array = nv_require('p_./wxcomponents/vant-weapp/wxs/array.wxs')();var nv_object = nv_require('p_./wxcomponents/vant-weapp/wxs/object.wxs')();var nv_PREFIX = 'van-';function nv_join(nv_name,nv_mods){nv_name = nv_PREFIX + nv_name;nv_mods = nv_mods.nv_map((function (nv_mod){return(nv_name + '--' + nv_mod)}));nv_mods.nv_unshift(nv_name);return(nv_mods.nv_join(' '))};function nv_traversing(nv_mods,nv_conf){if (!nv_conf){return};if (typeof nv_conf === 'string' || typeof nv_conf === 'number'){nv_mods.nv_push(nv_conf)} else if (nv_array.nv_isArray(nv_conf)){nv_conf.nv_forEach((function (nv_item){nv_traversing(nv_mods,nv_item)}))} else if (typeof nv_conf === 'object'){nv_object.nv_keys(nv_conf).nv_forEach((function (nv_key){nv_conf[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] && nv_mods.nv_push(nv_key)}))}};function nv_bem(nv_name,nv_conf){var nv_mods = [];nv_traversing(nv_mods,nv_conf);return(nv_join(nv_name,nv_mods))};nv_module.nv_exports.nv_bem = nv_bem;return nv_module.nv_exports;}

f_['./wxcomponents/vant-weapp/wxs/memoize.wxs'] = nv_require("p_./wxcomponents/vant-weapp/wxs/memoize.wxs");
function np_2(){var nv_module={nv_exports:{}};function nv_isPrimitive(nv_value){var nv_type = typeof nv_value;return(nv_type === 'boolean' || nv_type === 'number' || nv_type === 'string' || nv_type === 'undefined' || nv_value === null)};function nv_call(nv_fn,nv_args){if (nv_args.nv_length === 2){return(nv_fn(nv_args[(0)],nv_args[(1)]))};if (nv_args.nv_length === 1){return(nv_fn(nv_args[(0)]))};return(nv_fn())};function nv_serializer(nv_args){if (nv_args.nv_length === 1 && nv_isPrimitive(nv_args[(0)])){return(nv_args[(0)])};var nv_obj = ({});for(var nv_i = 0;nv_i < nv_args.nv_length;nv_i++){nv_obj[((nt_5=('key' + nv_i),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))] = nv_args[((nt_6=(nv_i),null==nt_6?undefined:'number'=== typeof nt_6?nt_6:"nv_"+nt_6))]};return(nv_JSON.nv_stringify(nv_obj))};function nv_memoize(nv_fn){arguments.nv_length=arguments.length;var nv_cache = ({});return((function (){arguments.nv_length=arguments.length;var nv_key = nv_serializer(arguments);if (nv_cache[((nt_7=(nv_key),null==nt_7?undefined:'number'=== typeof nt_7?nt_7:"nv_"+nt_7))] === undefined){nv_cache[((nt_8=(nv_key),null==nt_8?undefined:'number'=== typeof nt_8?nt_8:"nv_"+nt_8))] = nv_call(nv_fn,arguments)};return(nv_cache[((nt_9=(nv_key),null==nt_9?undefined:'number'=== typeof nt_9?nt_9:"nv_"+nt_9))])}))};nv_module.nv_exports.nv_memoize = nv_memoize;return nv_module.nv_exports;}

f_['./wxcomponents/vant-weapp/wxs/object.wxs'] = nv_require("p_./wxcomponents/vant-weapp/wxs/object.wxs");
function np_3(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('{|}|\x22','g');function nv_keys(nv_obj){return(nv_JSON.nv_stringify(nv_obj).nv_replace(nv_REGEXP,'').nv_split(',').nv_map((function (nv_item){return(nv_item.nv_split(':')[(0)])})))};nv_module.nv_exports.nv_keys = nv_keys;return nv_module.nv_exports;}

f_['./wxcomponents/vant-weapp/wxs/utils.wxs'] = nv_require("p_./wxcomponents/vant-weapp/wxs/utils.wxs");
function np_4(){var nv_module={nv_exports:{}};var nv_bem = nv_require('p_./wxcomponents/vant-weapp/wxs/bem.wxs')().nv_bem;var nv_memoize = nv_require('p_./wxcomponents/vant-weapp/wxs/memoize.wxs')().nv_memoize;function nv_isSrc(nv_url){return(nv_url.nv_indexOf('http') === 0 || nv_url.nv_indexOf('data:image') === 0 || nv_url.nv_indexOf('//') === 0)};nv_module.nv_exports = ({nv_bem:nv_memoize(nv_bem),nv_isSrc:nv_isSrc,nv_memoize:nv_memoize,});return nv_module.nv_exports;}

f_['./wxcomponents/wux-weapp/filterbar/index.wxml']={};
f_['./wxcomponents/wux-weapp/filterbar/index.wxml']['common'] =nv_require("m_./wxcomponents/wux-weapp/filterbar/index.wxml:common");
function np_5(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_getRadioValue:(function (nv_array){var nv_result = nv_array.nv_filter((function (nv_n){return(nv_n.nv_checked)}))[(0)];if (nv_result){return(nv_result.nv_value)};return('')}),nv_getCheckboxValue:(function (nv_array){return(nv_array.nv_filter((function (nv_n){return(nv_n.nv_checked)})).nv_map((function (nv_n){return(nv_n.nv_value)})))}),});return nv_module.nv_exports;}

f_['./wxcomponents/wux-weapp/select/index.wxml']={};
f_['./wxcomponents/wux-weapp/select/index.wxml']['common'] =nv_require("m_./wxcomponents/wux-weapp/select/index.wxml:common");
function np_6(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_getItems = (function (nv_array){return(nv_array.nv_map((function (nv_n){if (nv_n.nv_constructor !== 'Object'){return(({nv_value:nv_n,nv_title:nv_n,}))};return(nv_n)})))});return nv_module.nv_exports;}

f_['./wxcomponents/wux-weapp/slider/index.wxml']={};
f_['./wxcomponents/wux-weapp/slider/index.wxml']['common'] =nv_require("m_./wxcomponents/wux-weapp/slider/index.wxml:common");
function np_7(){var nv_module={nv_exports:{}};nv_module.nv_exports.nv_getTrackStyle = (function (nv_offsets,nv_index,nv_multiple){if (!nv_multiple){return('width: ' + nv_offsets[((nt_0=(nv_index),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] + '%')};return('left: ' + nv_offsets[((nt_1=(nv_index),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))] + '%; width: ' + (nv_offsets[((nt_2=(nv_index + 1),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))] - nv_offsets[((nt_3=(nv_index),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))]) + '%')});nv_module.nv_exports.nv_getStyle = (function (nv_style,nv_index){if (nv_style.nv_constructor !== 'String'){return(nv_style[((nt_4=(nv_index),null==nt_4?undefined:'number'=== typeof nt_4?nt_4:"nv_"+nt_4))])};return(nv_style)});nv_module.nv_exports.nv_getValue = (function (nv_obj,nv_name){if (nv_obj.nv_constructor === 'Object'){return(nv_obj[((nt_5=(nv_name),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))])};return(nv_obj)});return nv_module.nv_exports;}

var x=['./common/slots.wxml','./pages/banner/banner.vue.wxml','./pages/banner/banner.wxml','./banner.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/my/my.vue.wxml','./pages/my/my.wxml','./my.vue.wxml','./pages/scMapDetail/scMapDetail.vue.wxml','./pages/scMapDetail/scMapDetail.wxml','./scMapDetail.vue.wxml','./pages/search/search.vue.wxml','./pages/search/search.wxml','./search.vue.wxml','./pages/tel/tel.vue.wxml','./pages/tel/tel.wxml','./tel.vue.wxml','./pages/userInfoAuth/userInfoAuth.vue.wxml','./pages/userInfoAuth/userInfoAuth.wxml','./userInfoAuth.vue.wxml','./wxcomponents/vant-weapp/info/index.wxml','./wxcomponents/vant-weapp/overlay/index.wxml','./wxcomponents/vant-weapp/popup/index.wxml','./wxcomponents/vant-weapp/tab/index.wxml','./wxcomponents/vant-weapp/tabs/index.wxml','./wxcomponents/vant-weapp/transition/index.wxml','./wxcomponents/wux-weapp/accordion-group/index.wxml','./wxcomponents/wux-weapp/accordion/index.wxml','./wxcomponents/wux-weapp/actionsheet/index.wxml','./wxcomponents/wux-weapp/alert/index.wxml','./wxcomponents/wux-weapp/animation-group/index.wxml','./wxcomponents/wux-weapp/avatar/index.wxml','./wxcomponents/wux-weapp/backdrop/index.wxml','./wxcomponents/wux-weapp/badge/index.wxml','./wxcomponents/wux-weapp/barcode/index.wxml','./wxcomponents/wux-weapp/button/index.wxml','./wxcomponents/wux-weapp/calendar/index.wxml','./wxcomponents/wux-weapp/card/index.wxml','./wxcomponents/wux-weapp/cascader/index.wxml','./wxcomponents/wux-weapp/cell-group/index.wxml','./wxcomponents/wux-weapp/cell/index.wxml','./wxcomponents/wux-weapp/checkbox-group/index.wxml','./wxcomponents/wux-weapp/checkbox-item/index.wxml','./wxcomponents/wux-weapp/checkbox/index.wxml','./wxcomponents/wux-weapp/circle/index.wxml','./wxcomponents/wux-weapp/col/index.wxml','./wxcomponents/wux-weapp/dialog/index.wxml','./wxcomponents/wux-weapp/divider/index.wxml','./wxcomponents/wux-weapp/fab-button/index.wxml','./wxcomponents/wux-weapp/filterbar/index.wxml','./wxcomponents/wux-weapp/floating-button/index.wxml','./wxcomponents/wux-weapp/gallery/index.wxml','./wxcomponents/wux-weapp/grid/index.wxml','./wxcomponents/wux-weapp/grids/index.wxml','./wxcomponents/wux-weapp/icon/index.wxml','./wxcomponents/wux-weapp/image/index.wxml','./wxcomponents/wux-weapp/index-item/index.wxml','./wxcomponents/wux-weapp/index/index.wxml','./wxcomponents/wux-weapp/input-number/index.wxml','./wxcomponents/wux-weapp/input/index.wxml','./wxcomponents/wux-weapp/keyboard/index.wxml','./wxcomponents/wux-weapp/loading/index.wxml','./wxcomponents/wux-weapp/media/index.wxml','./wxcomponents/wux-weapp/navbar/index.wxml','./wxcomponents/wux-weapp/notice-bar/index.wxml','./wxcomponents/wux-weapp/notification/index.wxml','./wxcomponents/wux-weapp/pagination/index.wxml','./wxcomponents/wux-weapp/popover/index.wxml','./wxcomponents/wux-weapp/popup/index.wxml','./wxcomponents/wux-weapp/progress/index.wxml','./wxcomponents/wux-weapp/prompt/index.wxml','./wxcomponents/wux-weapp/qrcode/index.wxml','./wxcomponents/wux-weapp/radio-group/index.wxml','./wxcomponents/wux-weapp/radio/index.wxml','./wxcomponents/wux-weapp/rater/index.wxml','./wxcomponents/wux-weapp/refresher/index.wxml','./wxcomponents/wux-weapp/result/index.wxml','./wxcomponents/wux-weapp/row/index.wxml','./wxcomponents/wux-weapp/search-bar/index.wxml','./wxcomponents/wux-weapp/segmented-control/index.wxml','./wxcomponents/wux-weapp/select/index.wxml','./wxcomponents/wux-weapp/selectable/index.wxml','./wxcomponents/wux-weapp/skeleton-avatar/index.wxml','./wxcomponents/wux-weapp/skeleton-paragraph/index.wxml','./wxcomponents/wux-weapp/skeleton/index.wxml','./wxcomponents/wux-weapp/slider/index.wxml','./wxcomponents/wux-weapp/spin/index.wxml','./wxcomponents/wux-weapp/step/index.wxml','./wxcomponents/wux-weapp/steps/index.wxml','./wxcomponents/wux-weapp/sticky-item/index.wxml','./wxcomponents/wux-weapp/sticky/index.wxml','./wxcomponents/wux-weapp/swipe-action-group/index.wxml','./wxcomponents/wux-weapp/swipe-action/index.wxml','./wxcomponents/wux-weapp/switch/index.wxml','./wxcomponents/wux-weapp/tab/index.wxml','./wxcomponents/wux-weapp/tabbar-item/index.wxml','./wxcomponents/wux-weapp/tabbar/index.wxml','./wxcomponents/wux-weapp/tabs/index.wxml','./wxcomponents/wux-weapp/tag/index.wxml','./wxcomponents/wux-weapp/textarea/index.wxml','./wxcomponents/wux-weapp/timeago/index.wxml','./wxcomponents/wux-weapp/timeline-item/index.wxml','./wxcomponents/wux-weapp/timeline/index.wxml','./wxcomponents/wux-weapp/toast/index.wxml','./wxcomponents/wux-weapp/toptips/index.wxml','./wxcomponents/wux-weapp/upload/index.wxml','./wxcomponents/wux-weapp/vcode/index.wxml','./wxcomponents/wux-weapp/white-space/index.wxml','./wxcomponents/wux-weapp/wing-blank/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["4b1e4a84"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':4b1e4a84'
r.wxVkey=b
gg.f=$gdc(f_["./pages/banner/banner.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
var fE=_v()
_(r,fE)
cs.push("./pages/banner/banner.wxml:template:2:6")
var cF=_oz(z,1,e,s,gg)
var hG=_gd(x[2],cF,e_,d_)
if(hG){
var oH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[2],2,18)
cs.pop()
oD.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
d_[x[4]]["26cf05aa"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':26cf05aa'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:van-tabs:1:1039")
var oB=_mz(z,'van-tabs',['sticky',-1,'active',1,'bindchange',1,'border',2,'class',3,'customClass',4,'data-comkey',5,'data-eventid',6,'navClass',7,'tabClass',8],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:van-tab:1:1266")
var xC=_mz(z,'van-tab',['class',10,'title',1],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:scroll-view:1:1322")
var oD=_n('scroll-view')
_rz(z,oD,'class',12,e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./pages/index/index.vue.wxml:view:1:1373")
var cF=function(oH,hG,cI,gg){
cs.push("./pages/index/index.vue.wxml:view:1:1373")
var lK=_mz(z,'view',['bindtap',17,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],oH,hG,gg)
cs.push("./pages/index/index.vue.wxml:view:1:1832")
var eN=_n('view')
_rz(z,eN,'class',22,oH,hG,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,23,oH,hG,gg)){bO.wxVkey=1
cs.push("./pages/index/index.vue.wxml:text:1:1866")
cs.pop()
}
var oP=_v()
_(eN,oP)
if(_oz(z,24,oH,hG,gg)){oP.wxVkey=1
cs.push("./pages/index/index.vue.wxml:text:1:1967")
cs.pop()
}
bO.wxXCkey=1
oP.wxXCkey=1
cs.pop()
_(lK,eN)
var aL=_v()
_(lK,aL)
if(_oz(z,25,oH,hG,gg)){aL.wxVkey=1
cs.push("./pages/index/index.vue.wxml:view:1:2077")
cs.pop()
}
var tM=_v()
_(lK,tM)
if(_oz(z,26,oH,hG,gg)){tM.wxVkey=1
cs.push("./pages/index/index.vue.wxml:view:1:2346")
cs.pop()
}
aL.wxXCkey=1
tM.wxXCkey=1
cs.pop()
_(cI,lK)
return cI
}
fE.wxXCkey=2
_2z(z,15,cF,e,s,gg,fE,'item','index','index')
cs.pop()
cs.push("./pages/index/index.vue.wxml:wux-divider:1:2837")
var xQ=_n('wux-divider')
_rz(z,xQ,'class',27,e,s,gg)
cs.pop()
_(oD,xQ)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:van-tab:1:2938")
var oR=_mz(z,'van-tab',['class',28,'title',1],[],e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,30,e,s,gg)){fS.wxVkey=1
cs.push("./pages/index/index.vue.wxml:view:1:2994")
cs.pop()
}
var cT=_v()
_(oR,cT)
if(_oz(z,31,e,s,gg)){cT.wxVkey=1
cs.push("./pages/index/index.vue.wxml:block:1:3519")
cs.pop()
}
var hU=_v()
_(oR,hU)
if(_oz(z,32,e,s,gg)){hU.wxVkey=1
cs.push("./pages/index/index.vue.wxml:block:1:4077")
cs.push("./pages/index/index.vue.wxml:map:1:4179")
var oV=_mz(z,'map',['showLocation',-1,'bindmarkertap',33,'bindtap',1,'class',2,'data-comkey',3,'data-eventid',4,'hidden',5,'id',6,'latitude',7,'longitude',8,'markers',9,'style',10],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,44,e,s,gg)){cW.wxVkey=1
cs.push("./pages/index/index.vue.wxml:cover-view:1:4513")
cs.pop()
}
cW.wxXCkey=1
cs.pop()
_(hU,oV)
cs.pop()
}
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
cs.pop()
_(oB,oR)
cs.push("./pages/index/index.vue.wxml:van-tab:1:5158")
var oX=_mz(z,'van-tab',['class',45,'title',1],[],e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,47,e,s,gg)){lY.wxVkey=1
cs.push("./pages/index/index.vue.wxml:view:1:5214")
cs.pop()
}
cs.push("./pages/index/index.vue.wxml:scroll-view:1:5724")
var aZ=_n('scroll-view')
_rz(z,aZ,'class',48,e,s,gg)
var t1=_v()
_(aZ,t1)
cs.push("./pages/index/index.vue.wxml:view:1:5775")
var e2=function(o4,b3,x5,gg){
cs.push("./pages/index/index.vue.wxml:view:1:5775")
var f7=_mz(z,'view',['bindtap',53,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],o4,b3,gg)
cs.push("./pages/index/index.vue.wxml:view:1:6317")
var c8=_n('view')
_rz(z,c8,'class',58,o4,b3,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,59,o4,b3,gg)){h9.wxVkey=1
cs.push("./pages/index/index.vue.wxml:text:1:6351")
cs.pop()
}
var o0=_v()
_(c8,o0)
if(_oz(z,60,o4,b3,gg)){o0.wxVkey=1
cs.push("./pages/index/index.vue.wxml:text:1:6520")
cs.pop()
}
h9.wxXCkey=1
o0.wxXCkey=1
cs.pop()
_(f7,c8)
cs.pop()
_(x5,f7)
return x5
}
t1.wxXCkey=2
_2z(z,51,e2,e,s,gg,t1,'item','index','index')
cs.pop()
cs.push("./pages/index/index.vue.wxml:wux-divider:1:7153")
var cAB=_n('wux-divider')
_rz(z,cAB,'class',61,e,s,gg)
cs.pop()
_(aZ,cAB)
cs.pop()
_(oX,aZ)
lY.wxXCkey=1
cs.pop()
_(oB,oX)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lK=e_[x[5]].i
_ai(lK,x[6],e_,x[5],1,1)
var aL=_v()
_(r,aL)
cs.push("./pages/index/index.wxml:template:2:6")
var tM=_oz(z,1,e,s,gg)
var eN=_gd(x[5],tM,e_,d_)
if(eN){
var bO=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[5],2,18)
cs.pop()
lK.pop()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["1bd58df8"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[7]+':1bd58df8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/my.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./pages/my/my.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/my/my.vue.wxml:view:1:231")
cs.pop()
}
cs.push("./pages/my/my.vue.wxml:view:1:934")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/my/my.vue.wxml:view:1:1138")
cs.pop()
}
var cF=_v()
_(oD,cF)
cs.push("./pages/my/my.vue.wxml:view:1:1355")
var hG=function(cI,oH,oJ,gg){
cs.push("./pages/my/my.vue.wxml:view:1:1355")
var aL=_mz(z,'view',['bindtap',9,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],cI,oH,gg)
cs.push("./pages/my/my.vue.wxml:view:1:1883")
var tM=_n('view')
_rz(z,tM,'class',14,cI,oH,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,15,cI,oH,gg)){eN.wxVkey=1
cs.push("./pages/my/my.vue.wxml:text:1:1917")
cs.pop()
}
var bO=_v()
_(tM,bO)
if(_oz(z,16,cI,oH,gg)){bO.wxVkey=1
cs.push("./pages/my/my.vue.wxml:text:1:2086")
cs.pop()
}
eN.wxXCkey=1
bO.wxXCkey=1
cs.pop()
_(aL,tM)
cs.pop()
_(oJ,aL)
return oJ
}
cF.wxXCkey=2
_2z(z,7,hG,e,s,gg,cF,'item','index','index')
cs.pop()
fE.wxXCkey=1
cs.pop()
_(oB,oD)
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oR=e_[x[8]].i
_ai(oR,x[9],e_,x[8],1,1)
var fS=_v()
_(r,fS)
cs.push("./pages/my/my.wxml:template:2:6")
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[8],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[8],2,18)
cs.pop()
oR.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
d_[x[10]]["15b6f680"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[10]+':15b6f680'
r.wxVkey=b
gg.f=$gdc(f_["./pages/scMapDetail/scMapDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:map:1:154")
var xC=_mz(z,'map',['bindmarkertap',2,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'latitude',5,'longitude',6,'markers',7,'showLocation',8,'style',9],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,12,e,s,gg)){oD.wxVkey=1
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:cover-view:1:421")
cs.pop()
}
var fE=_v()
_(xC,fE)
if(_oz(z,13,e,s,gg)){fE.wxVkey=1
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:cover-view:1:592")
cs.pop()
}
var cF=_v()
_(xC,cF)
if(_oz(z,14,e,s,gg)){cF.wxVkey=1
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:cover-view:1:674")
cs.pop()
}
var hG=_v()
_(xC,hG)
if(_oz(z,15,e,s,gg)){hG.wxVkey=1
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:cover-view:1:1057")
cs.pop()
}
var oH=_v()
_(xC,oH)
if(_oz(z,16,e,s,gg)){oH.wxVkey=1
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:cover-view:1:1438")
cs.pop()
}
var cI=_v()
_(xC,cI)
if(_oz(z,17,e,s,gg)){cI.wxVkey=1
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:cover-view:1:2341")
cs.pop()
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
cs.pop()
_(oB,xC)
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:van-popup:1:2927")
var oJ=_mz(z,'van-popup',['class',18,'position',1,'show',2],[],e,s,gg)
cs.pop()
_(oB,oJ)
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:van-popup:1:3445")
var lK=_mz(z,'van-popup',['class',21,'position',1,'show',2],[],e,s,gg)
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:view:1:3564")
var aL=_n('view')
_rz(z,aL,'class',24,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,25,e,s,gg)){tM.wxVkey=1
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:view:1:4665")
cs.pop()
}
var eN=_v()
_(aL,eN)
if(_oz(z,26,e,s,gg)){eN.wxVkey=1
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:view:1:4865")
cs.pop()
}
tM.wxXCkey=1
eN.wxXCkey=1
cs.pop()
_(lK,aL)
cs.pop()
_(oB,lK)
cs.push("./pages/scMapDetail/scMapDetail.vue.wxml:van-popup:1:5117")
var bO=_mz(z,'van-popup',['class',27,'position',1,'show',2],[],e,s,gg)
cs.pop()
_(oB,bO)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lY=e_[x[11]].i
_ai(lY,x[12],e_,x[11],1,1)
var aZ=_v()
_(r,aZ)
cs.push("./pages/scMapDetail/scMapDetail.wxml:template:2:6")
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[11],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[11],2,18)
cs.pop()
lY.pop()
return r
}
e_[x[11]]={f:m8,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["68014704"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[13]+':68014704'
r.wxVkey=b
gg.f=$gdc(f_["./pages/search/search.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
cs.push("./pages/search/search.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/search/search.vue.wxml:block:1:408")
cs.push("./pages/search/search.vue.wxml:view:1:449")
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
var cF=_v()
_(fE,cF)
cs.push("./pages/search/search.vue.wxml:view:1:857")
var hG=function(cI,oH,oJ,gg){
cs.push("./pages/search/search.vue.wxml:view:1:857")
var aL=_mz(z,'view',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],cI,oH,gg)
cs.push("./pages/search/search.vue.wxml:view:1:1311")
var bO=_n('view')
_rz(z,bO,'class',13,cI,oH,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,14,cI,oH,gg)){oP.wxVkey=1
cs.push("./pages/search/search.vue.wxml:text:1:1345")
cs.pop()
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,15,cI,oH,gg)){xQ.wxVkey=1
cs.push("./pages/search/search.vue.wxml:text:1:1446")
cs.pop()
}
oP.wxXCkey=1
xQ.wxXCkey=1
cs.pop()
_(aL,bO)
var tM=_v()
_(aL,tM)
if(_oz(z,16,cI,oH,gg)){tM.wxVkey=1
cs.push("./pages/search/search.vue.wxml:view:1:1556")
cs.pop()
}
var eN=_v()
_(aL,eN)
if(_oz(z,17,cI,oH,gg)){eN.wxVkey=1
cs.push("./pages/search/search.vue.wxml:view:1:1825")
cs.pop()
}
tM.wxXCkey=1
eN.wxXCkey=1
cs.pop()
_(oJ,aL)
return oJ
}
cF.wxXCkey=2
_2z(z,6,hG,e,s,gg,cF,'item','index','index')
cs.pop()
var oR=_v()
_(fE,oR)
cs.push("./pages/search/search.vue.wxml:view:1:2626")
var fS=function(hU,cT,oV,gg){
cs.push("./pages/search/search.vue.wxml:view:1:2626")
var oX=_mz(z,'view',['bindtap',22,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],hU,cT,gg)
cs.push("./pages/search/search.vue.wxml:view:1:3075")
var t1=_n('view')
_rz(z,t1,'class',27,hU,cT,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,28,hU,cT,gg)){e2.wxVkey=1
cs.push("./pages/search/search.vue.wxml:text:1:3109")
cs.pop()
}
var b3=_v()
_(t1,b3)
if(_oz(z,29,hU,cT,gg)){b3.wxVkey=1
cs.push("./pages/search/search.vue.wxml:text:1:3210")
cs.pop()
}
e2.wxXCkey=1
b3.wxXCkey=1
cs.pop()
_(oX,t1)
var lY=_v()
_(oX,lY)
if(_oz(z,30,hU,cT,gg)){lY.wxVkey=1
cs.push("./pages/search/search.vue.wxml:view:1:3320")
cs.pop()
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,31,hU,cT,gg)){aZ.wxVkey=1
cs.push("./pages/search/search.vue.wxml:view:1:3589")
cs.pop()
}
lY.wxXCkey=1
aZ.wxXCkey=1
cs.pop()
_(oV,oX)
return oV
}
oR.wxXCkey=2
_2z(z,20,fS,e,s,gg,oR,'item','index','index')
cs.pop()
cs.pop()
_(xC,fE)
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,32,e,s,gg)){oD.wxVkey=1
cs.push("./pages/search/search.vue.wxml:block:1:4161")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o6=e_[x[14]].i
_ai(o6,x[15],e_,x[14],1,1)
var f7=_v()
_(r,f7)
cs.push("./pages/search/search.wxml:template:2:6")
var c8=_oz(z,1,e,s,gg)
var h9=_gd(x[14],c8,e_,d_)
if(h9){
var o0=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[14],2,18)
cs.pop()
o6.pop()
return r
}
e_[x[14]]={f:m10,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["15151efc"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[16]+':15151efc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tel/tel.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lCB=e_[x[17]].i
_ai(lCB,x[18],e_,x[17],1,1)
var aDB=_v()
_(r,aDB)
cs.push("./pages/tel/tel.wxml:template:2:6")
var tEB=_oz(z,1,e,s,gg)
var eFB=_gd(x[17],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[17],2,18)
cs.pop()
lCB.pop()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["3b489a38"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[19]+':3b489a38'
r.wxVkey=b
gg.f=$gdc(f_["./pages/userInfoAuth/userInfoAuth.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oJB=e_[x[20]].i
_ai(oJB,x[21],e_,x[20],1,1)
var fKB=_v()
_(r,fKB)
cs.push("./pages/userInfoAuth/userInfoAuth.wxml:template:2:6")
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[20],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[20],2,18)
cs.pop()
oJB.pop()
return r
}
e_[x[20]]={f:m14,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oPB=_v()
_(r,oPB)
if(_oz(z,0,e,s,gg)){oPB.wxVkey=1
cs.push("./wxcomponents/vant-weapp/info/index.wxml:view:1:1")
cs.pop()
}
oPB.wxXCkey=1
return r
}
e_[x[22]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
cs.push("./wxcomponents/vant-weapp/overlay/index.wxml:van-transition:1:1")
var aRB=_mz(z,'van-transition',['bind:tap',0,'catch:touchmove',1,'customClass',1,'customStyle',2,'duration',3,'show',4],[],e,s,gg)
cs.pop()
_(r,aRB)
return r
}
e_[x[23]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var eTB=_v()
_(r,eTB)
if(_oz(z,0,e,s,gg)){eTB.wxVkey=1
cs.push("./wxcomponents/vant-weapp/popup/index.wxml:van-overlay:3:2")
cs.push("./wxcomponents/vant-weapp/popup/index.wxml:van-overlay:3:2")
var oVB=_mz(z,'van-overlay',['mask',-1,'bind:click',1,'customStyle',1,'duration',2,'show',3,'zIndex',4],[],e,s,gg)
cs.pop()
_(eTB,oVB)
cs.pop()
}
var bUB=_v()
_(r,bUB)
if(_oz(z,6,e,s,gg)){bUB.wxVkey=1
cs.push("./wxcomponents/vant-weapp/popup/index.wxml:view:12:2")
cs.push("./wxcomponents/vant-weapp/popup/index.wxml:view:12:2")
var xWB=_mz(z,'view',['bind:transitionend',7,'class',1,'style',2],[],e,s,gg)
cs.push("./wxcomponents/vant-weapp/popup/index.wxml:slot:18:4")
var oXB=_n('slot')
cs.pop()
_(xWB,oXB)
cs.pop()
_(bUB,xWB)
cs.pop()
}
eTB.wxXCkey=1
eTB.wxXCkey=3
bUB.wxXCkey=1
return r
}
e_[x[24]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var cZB=_v()
_(r,cZB)
if(_oz(z,0,e,s,gg)){cZB.wxVkey=1
cs.push("./wxcomponents/vant-weapp/tab/index.wxml:view:3:2")
cs.push("./wxcomponents/vant-weapp/tab/index.wxml:slot:8:4")
var h1B=_n('slot')
cs.pop()
_(cZB,h1B)
cs.pop()
}
cZB.wxXCkey=1
return r
}
e_[x[25]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:view:3:2")
var c3B=_n('view')
_rz(z,c3B,'class',0,e,s,gg)
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:view:4:4")
var o4B=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:slot:5:6")
var l5B=_n('slot')
_rz(z,l5B,'name',3,e,s,gg)
cs.pop()
_(o4B,l5B)
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:view:14:8")
var a6B=_n('view')
_rz(z,a6B,'class',4,e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,5,e,s,gg)){t7B.wxVkey=1
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:view:15:10")
cs.pop()
}
var e8B=_v()
_(a6B,e8B)
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:view:16:10")
var b9B=function(xAC,o0B,oBC,gg){
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:view:16:10")
var cDC=_mz(z,'view',['bind:tap',8,'class',1,'data-index',2,'style',3],[],xAC,o0B,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,12,xAC,o0B,gg)){hEC.wxVkey=1
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:van-info:26:14")
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:van-info:26:14")
var oFC=_mz(z,'van-info',['customClass',13,'info',1],[],xAC,o0B,gg)
cs.pop()
_(hEC,oFC)
cs.pop()
}
hEC.wxXCkey=1
hEC.wxXCkey=3
cs.pop()
_(oBC,cDC)
return oBC
}
e8B.wxXCkey=4
_2z(z,6,b9B,e,s,gg,e8B,'item','index','index')
cs.pop()
t7B.wxXCkey=1
cs.pop()
_(o4B,a6B)
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:slot:36:6")
var cGC=_n('slot')
_rz(z,cGC,'name',15,e,s,gg)
cs.pop()
_(o4B,cGC)
cs.pop()
_(c3B,o4B)
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:view:38:4")
var oHC=_mz(z,'view',['bind:touchcancel',16,'bind:touchend',1,'bind:touchmove',2,'bind:touchstart',3,'class',4],[],e,s,gg)
cs.push("./wxcomponents/vant-weapp/tabs/index.wxml:slot:46:8")
var lIC=_n('slot')
cs.pop()
_(oHC,lIC)
cs.pop()
_(c3B,oHC)
cs.pop()
_(r,c3B)
return r
}
e_[x[26]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var tKC=_v()
_(r,tKC)
if(_oz(z,0,e,s,gg)){tKC.wxVkey=1
cs.push("./wxcomponents/vant-weapp/transition/index.wxml:view:1:1")
cs.push("./wxcomponents/vant-weapp/transition/index.wxml:view:1:1")
var eLC=_mz(z,'view',['bind:transitionend',1,'class',1,'style',2],[],e,s,gg)
cs.push("./wxcomponents/vant-weapp/transition/index.wxml:slot:7:4")
var bMC=_n('slot')
cs.pop()
_(eLC,bMC)
cs.pop()
_(tKC,eLC)
cs.pop()
}
tKC.wxXCkey=1
return r
}
e_[x[27]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
cs.push("./wxcomponents/wux-weapp/accordion-group/index.wxml:wux-cell-group:1:2")
var xOC=_mz(z,'wux-cell-group',['label',0,'prefixCls',1,'title',1,'wuxClass',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/accordion-group/index.wxml:slot:2:6")
var oPC=_n('slot')
cs.pop()
_(xOC,oPC)
cs.pop()
_(r,xOC)
return r
}
e_[x[28]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:view:1:1")
var cRC=_n('view')
_rz(z,cRC,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:view:2:6")
var hSC=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,3,e,s,gg)){oTC.wxVkey=1
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:block:3:10")
cs.pop()
}
var cUC=_v()
_(hSC,cUC)
if(_oz(z,4,e,s,gg)){cUC.wxVkey=1
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:block:6:10")
cs.pop()
}
else{cUC.wxVkey=2
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:block:9:10")
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:slot:10:14")
var lWC=_n('slot')
_rz(z,lWC,'name',5,e,s,gg)
cs.pop()
_(cUC,lWC)
cs.pop()
}
var oVC=_v()
_(hSC,oVC)
if(_oz(z,6,e,s,gg)){oVC.wxVkey=1
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:view:12:10")
cs.pop()
}
oTC.wxXCkey=1
cUC.wxXCkey=1
oVC.wxXCkey=1
cs.pop()
_(cRC,hSC)
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:view:14:6")
var aXC=_n('view')
_rz(z,aXC,'class',7,e,s,gg)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,8,e,s,gg)){tYC.wxVkey=1
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:view:15:10")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/accordion/index.wxml:slot:16:10")
var eZC=_n('slot')
cs.pop()
_(aXC,eZC)
tYC.wxXCkey=1
cs.pop()
_(cRC,aXC)
cs.pop()
_(r,cRC)
return r
}
e_[x[29]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:wux-backdrop:1:2")
var o2C=_mz(z,'wux-backdrop',['bind:click',0,'id',1],[],e,s,gg)
cs.pop()
_(r,o2C)
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:wux-animation-group:2:2")
var x3C=_mz(z,'wux-animation-group',['classNames',2,'in',1,'wuxClass',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:view:3:6")
var o4C=_n('view')
_rz(z,o4C,'class',5,e,s,gg)
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:view:4:10")
var c6C=_n('view')
_rz(z,c6C,'class',6,e,s,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,7,e,s,gg)){h7C.wxVkey=1
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:view:5:14")
cs.pop()
}
var c9C=_v()
_(c6C,c9C)
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:block:6:14")
var o0C=function(aBD,lAD,tCD,gg){
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:button:7:18")
var bED=_mz(z,'button',['appParameter',11,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindopensetting',5,'catchtap',6,'class',7,'data-index',8,'disabled',9,'hoverClass',10,'hoverStartTime',11,'hoverStayTime',12,'hoverStopPropagation',13,'lang',14,'openType',15,'sendMessageImg',16,'sendMessagePath',17,'sendMessageTitle',18,'sessionFrom',19,'showMessageCard',20],[],aBD,lAD,gg)
var oFD=_v()
_(bED,oFD)
if(_oz(z,32,aBD,lAD,gg)){oFD.wxVkey=1
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:image:30:22")
cs.pop()
}
oFD.wxXCkey=1
cs.pop()
_(tCD,bED)
return tCD
}
c9C.wxXCkey=2
_2z(z,9,o0C,e,s,gg,c9C,'button','index','index')
cs.pop()
var o8C=_v()
_(c6C,o8C)
if(_oz(z,33,e,s,gg)){o8C.wxVkey=1
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:button:34:14")
cs.pop()
}
h7C.wxXCkey=1
o8C.wxXCkey=1
cs.pop()
_(o4C,c6C)
var f5C=_v()
_(o4C,f5C)
if(_oz(z,34,e,s,gg)){f5C.wxVkey=1
cs.push("./wxcomponents/wux-weapp/actionsheet/index.wxml:view:36:10")
cs.pop()
}
f5C.wxXCkey=1
cs.pop()
_(x3C,o4C)
cs.pop()
_(r,x3C)
return r
}
e_[x[30]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:wux-animation-group:1:2")
var oHD=_mz(z,'wux-animation-group',['classNames',0,'in',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:view:2:6")
var fID=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:view:3:10")
var cJD=_n('view')
_rz(z,cJD,'class',4,e,s,gg)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,5,e,s,gg)){hKD.wxVkey=1
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:block:4:14")
cs.pop()
}
else{hKD.wxVkey=2
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:block:7:14")
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:slot:8:18")
var oLD=_n('slot')
_rz(z,oLD,'name',6,e,s,gg)
cs.pop()
_(hKD,oLD)
cs.pop()
}
hKD.wxXCkey=1
cs.pop()
_(fID,cJD)
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:view:11:10")
var cMD=_n('view')
_rz(z,cMD,'class',7,e,s,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,8,e,s,gg)){oND.wxVkey=1
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:view:12:14")
cs.pop()
}
var lOD=_v()
_(cMD,lOD)
if(_oz(z,9,e,s,gg)){lOD.wxVkey=1
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:view:13:14")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:slot:14:14")
var aPD=_n('slot')
cs.pop()
_(cMD,aPD)
oND.wxXCkey=1
lOD.wxXCkey=1
cs.pop()
_(fID,cMD)
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:view:16:10")
var tQD=_n('view')
_rz(z,tQD,'class',10,e,s,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,11,e,s,gg)){eRD.wxVkey=1
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:block:17:14")
cs.pop()
}
else{eRD.wxVkey=2
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:block:20:14")
cs.push("./wxcomponents/wux-weapp/alert/index.wxml:slot:21:18")
var bSD=_n('slot')
_rz(z,bSD,'name',12,e,s,gg)
cs.pop()
_(eRD,bSD)
cs.pop()
}
eRD.wxXCkey=1
cs.pop()
_(fID,tQD)
cs.pop()
_(oHD,fID)
cs.pop()
_(r,oHD)
return r
}
e_[x[31]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var xUD=_v()
_(r,xUD)
if(_oz(z,0,e,s,gg)){xUD.wxVkey=1
cs.push("./wxcomponents/wux-weapp/animation-group/index.wxml:view:1:1")
cs.push("./wxcomponents/wux-weapp/animation-group/index.wxml:view:1:1")
var oVD=_mz(z,'view',['bindanimationend',1,'bindtap',1,'bindtransitionend',2,'class',3,'style',4],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/animation-group/index.wxml:slot:2:6")
var fWD=_n('slot')
cs.pop()
_(oVD,fWD)
cs.pop()
_(xUD,oVD)
cs.pop()
}
xUD.wxXCkey=1
return r
}
e_[x[32]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
cs.push("./wxcomponents/wux-weapp/avatar/index.wxml:view:1:1")
var hYD=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,2,e,s,gg)){oZD.wxVkey=1
cs.push("./wxcomponents/wux-weapp/avatar/index.wxml:image:2:6")
cs.pop()
}
else{oZD.wxVkey=2
cs.push("./wxcomponents/wux-weapp/avatar/index.wxml:text:3:6")
cs.push("./wxcomponents/wux-weapp/avatar/index.wxml:slot:4:10")
var c1D=_n('slot')
cs.pop()
_(oZD,c1D)
cs.pop()
}
oZD.wxXCkey=1
cs.pop()
_(r,hYD)
return r
}
e_[x[33]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
cs.push("./wxcomponents/wux-weapp/backdrop/index.wxml:wux-animation-group:1:2")
var l3D=_mz(z,'wux-animation-group',['bind:click',0,'classNames',1,'in',1,'wrapStyle',2,'wuxClass',3],[],e,s,gg)
cs.pop()
_(r,l3D)
return r
}
e_[x[34]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
cs.push("./wxcomponents/wux-weapp/badge/index.wxml:view:1:1")
var t5D=_n('view')
_rz(z,t5D,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/badge/index.wxml:slot:2:6")
var b7D=_n('slot')
cs.pop()
_(t5D,b7D)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,1,e,s,gg)){e6D.wxVkey=1
cs.push("./wxcomponents/wux-weapp/badge/index.wxml:view:3:6")
var o8D=_v()
_(e6D,o8D)
if(_oz(z,2,e,s,gg)){o8D.wxVkey=1
cs.push("./wxcomponents/wux-weapp/badge/index.wxml:view:5:10")
cs.pop()
}
o8D.wxXCkey=1
cs.pop()
}
else if(_oz(z,3,e,s,gg)){e6D.wxVkey=2
cs.push("./wxcomponents/wux-weapp/badge/index.wxml:view:7:6")
cs.pop()
}
else if(_oz(z,4,e,s,gg)){e6D.wxVkey=3
cs.push("./wxcomponents/wux-weapp/badge/index.wxml:view:8:6")
cs.pop()
}
else if(_oz(z,5,e,s,gg)){e6D.wxVkey=4
cs.push("./wxcomponents/wux-weapp/badge/index.wxml:view:9:6")
cs.pop()
}
e6D.wxXCkey=1
cs.pop()
_(r,t5D)
return r
}
e_[x[35]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[36]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
cs.push("./wxcomponents/wux-weapp/button/index.wxml:button:1:1")
var fAE=_mz(z,'button',['appParameter',0,'bindcontact',1,'binderror',1,'bindgetphonenumber',2,'bindgetuserinfo',3,'bindopensetting',4,'bindtap',5,'class',6,'disabled',7,'formType',8,'hoverClass',9,'hoverStartTime',10,'hoverStayTime',11,'hoverStopPropagation',12,'lang',13,'loading',14,'openType',15,'sendMessageImg',16,'sendMessagePath',17,'sendMessageTitle',18,'sessionFrom',19,'showMessageCard',20],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/button/index.wxml:slot:25:6")
var cBE=_n('slot')
cs.pop()
_(fAE,cBE)
cs.pop()
_(r,fAE)
return r
}
e_[x[37]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
cs.push("./wxcomponents/wux-weapp/calendar/index.wxml:wux-popup:1:2")
var oDE=_mz(z,'wux-popup',['bind:close',0,'position',1,'visible',1,'zIndex',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/calendar/index.wxml:view:3:10")
var cEE=_n('view')
_rz(z,cEE,'class',4,e,s,gg)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,5,e,s,gg)){oFE.wxVkey=1
cs.push("./wxcomponents/wux-weapp/calendar/index.wxml:view:4:14")
cs.pop()
}
var lGE=_v()
_(cEE,lGE)
if(_oz(z,6,e,s,gg)){lGE.wxVkey=1
cs.push("./wxcomponents/wux-weapp/calendar/index.wxml:view:27:18")
cs.pop()
}
oFE.wxXCkey=1
lGE.wxXCkey=1
cs.pop()
_(oDE,cEE)
cs.pop()
_(r,oDE)
return r
}
e_[x[38]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
cs.push("./wxcomponents/wux-weapp/card/index.wxml:view:1:1")
var tIE=_n('view')
_rz(z,tIE,'class',0,e,s,gg)
var eJE=_v()
_(tIE,eJE)
if(_oz(z,1,e,s,gg)){eJE.wxVkey=1
cs.push("./wxcomponents/wux-weapp/card/index.wxml:view:2:6")
cs.push("./wxcomponents/wux-weapp/card/index.wxml:view:2:6")
var bKE=_n('view')
_rz(z,bKE,'class',2,e,s,gg)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,3,e,s,gg)){oLE.wxVkey=1
cs.push("./wxcomponents/wux-weapp/card/index.wxml:view:3:10")
var oNE=_v()
_(oLE,oNE)
if(_oz(z,4,e,s,gg)){oNE.wxVkey=1
cs.push("./wxcomponents/wux-weapp/card/index.wxml:image:4:14")
cs.pop()
}
oNE.wxXCkey=1
cs.pop()
}
var xME=_v()
_(bKE,xME)
if(_oz(z,5,e,s,gg)){xME.wxVkey=1
cs.push("./wxcomponents/wux-weapp/card/index.wxml:view:7:10")
cs.pop()
}
oLE.wxXCkey=1
xME.wxXCkey=1
cs.pop()
_(eJE,bKE)
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/card/index.wxml:slot:10:10")
var fOE=_n('slot')
_rz(z,fOE,'name',6,e,s,gg)
cs.pop()
_(tIE,fOE)
cs.push("./wxcomponents/wux-weapp/card/index.wxml:slot:13:10")
var cPE=_n('slot')
_rz(z,cPE,'name',7,e,s,gg)
cs.pop()
_(tIE,cPE)
eJE.wxXCkey=1
cs.pop()
_(r,tIE)
return r
}
e_[x[39]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:wux-popup:1:2")
var oRE=_mz(z,'wux-popup',['bind:close',0,'position',1,'visible',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:view:2:3")
var cSE=_n('view')
_rz(z,cSE,'class',3,e,s,gg)
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:view:3:7")
var oTE=_n('view')
_rz(z,oTE,'class',4,e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,5,e,s,gg)){lUE.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:view:4:8")
cs.pop()
}
var aVE=_v()
_(oTE,aVE)
if(_oz(z,6,e,s,gg)){aVE.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:view:5:8")
cs.pop()
}
lUE.wxXCkey=1
aVE.wxXCkey=1
cs.pop()
_(cSE,oTE)
var tWE=_v()
_(cSE,tWE)
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:block:12:8")
var eXE=function(oZE,bYE,x1E,gg){
var f3E=_v()
_(x1E,f3E)
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:block:16:12")
var c4E=function(o6E,h5E,c7E,gg){
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:view:17:13")
var l9E=_mz(z,'view',['bindtap',13,'class',1,'data-item',2,'data-option-index',3],[],o6E,h5E,gg)
var a0E=_v()
_(l9E,a0E)
if(_oz(z,17,o6E,h5E,gg)){a0E.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cascader/index.wxml:icon:24:14")
cs.pop()
}
a0E.wxXCkey=1
cs.pop()
_(c7E,l9E)
return c7E
}
f3E.wxXCkey=2
_2z(z,11,c4E,oZE,bYE,gg,f3E,'item','index','')
cs.pop()
return x1E
}
tWE.wxXCkey=2
_2z(z,9,eXE,e,s,gg,tWE,'option','optionIndex','')
cs.pop()
cs.pop()
_(oRE,cSE)
cs.pop()
_(r,oRE)
return r
}
e_[x[40]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
cs.push("./wxcomponents/wux-weapp/cell-group/index.wxml:view:1:1")
var eBF=_n('view')
_rz(z,eBF,'class',0,e,s,gg)
var bCF=_v()
_(eBF,bCF)
if(_oz(z,1,e,s,gg)){bCF.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cell-group/index.wxml:view:2:6")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/cell-group/index.wxml:slot:4:10")
var xEF=_n('slot')
cs.pop()
_(eBF,xEF)
var oDF=_v()
_(eBF,oDF)
if(_oz(z,2,e,s,gg)){oDF.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cell-group/index.wxml:view:6:6")
cs.pop()
}
bCF.wxXCkey=1
oDF.wxXCkey=1
cs.pop()
_(r,eBF)
return r
}
e_[x[41]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:button:1:1")
var fGF=_mz(z,'button',['appParameter',0,'bindcontact',1,'binderror',1,'bindgetphonenumber',2,'bindgetuserinfo',3,'bindopensetting',4,'bindtap',5,'class',6,'disabled',7,'hoverClass',8,'hoverStartTime',9,'hoverStayTime',10,'hoverStopPropagation',11,'lang',12,'openType',13,'sendMessageImg',14,'sendMessagePath',15,'sendMessageTitle',16,'sessionFrom',17,'showMessageCard',18],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:view:23:6")
var cHF=_n('view')
_rz(z,cHF,'class',20,e,s,gg)
var hIF=_v()
_(cHF,hIF)
if(_oz(z,21,e,s,gg)){hIF.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:block:24:10")
cs.pop()
}
else{hIF.wxVkey=2
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:block:27:10")
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:slot:28:14")
var oJF=_n('slot')
_rz(z,oJF,'name',22,e,s,gg)
cs.pop()
_(hIF,oJF)
cs.pop()
}
hIF.wxXCkey=1
cs.pop()
_(fGF,cHF)
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:view:31:6")
var cKF=_n('view')
_rz(z,cKF,'class',23,e,s,gg)
var oLF=_v()
_(cKF,oLF)
if(_oz(z,24,e,s,gg)){oLF.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:view:32:10")
cs.pop()
}
var lMF=_v()
_(cKF,lMF)
if(_oz(z,25,e,s,gg)){lMF.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:view:33:10")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:slot:34:10")
var aNF=_n('slot')
cs.pop()
_(cKF,aNF)
oLF.wxXCkey=1
lMF.wxXCkey=1
cs.pop()
_(fGF,cKF)
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:view:36:6")
var tOF=_n('view')
_rz(z,tOF,'class',26,e,s,gg)
var ePF=_v()
_(tOF,ePF)
if(_oz(z,27,e,s,gg)){ePF.wxVkey=1
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:block:37:10")
cs.pop()
}
else{ePF.wxVkey=2
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:block:38:10")
cs.push("./wxcomponents/wux-weapp/cell/index.wxml:slot:39:14")
var bQF=_n('slot')
_rz(z,bQF,'name',28,e,s,gg)
cs.pop()
_(ePF,bQF)
cs.pop()
}
ePF.wxXCkey=1
cs.pop()
_(fGF,tOF)
cs.pop()
_(r,fGF)
return r
}
e_[x[42]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
cs.push("./wxcomponents/wux-weapp/checkbox-group/index.wxml:wux-cell-group:1:2")
var xSF=_mz(z,'wux-cell-group',['label',0,'prefixCls',1,'title',1,'wuxClass',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/checkbox-group/index.wxml:slot:2:6")
var oTF=_n('slot')
cs.pop()
_(xSF,oTF)
cs.pop()
_(r,xSF)
return r
}
e_[x[43]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:label:1:1")
var cVF=_mz(z,'label',['bindtap',0,'class',1,'style',1],[],e,s,gg)
var hWF=_v()
_(cVF,hWF)
if(_oz(z,3,e,s,gg)){hWF.wxVkey=1
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:block:2:6")
cs.pop()
}
else if(_oz(z,4,e,s,gg)){hWF.wxVkey=2
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:block:6:6")
cs.pop()
}
else{hWF.wxVkey=3
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:block:10:6")
var oXF=_v()
_(hWF,oXF)
if(_oz(z,5,e,s,gg)){oXF.wxVkey=1
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:slot:11:7")
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:slot:11:7")
var cYF=_n('slot')
_rz(z,cYF,'name',6,e,s,gg)
cs.pop()
_(oXF,cYF)
cs.pop()
}
else{oXF.wxVkey=2
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:slot:12:7")
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:slot:12:7")
var oZF=_n('slot')
_rz(z,oZF,'name',7,e,s,gg)
cs.pop()
_(oXF,oZF)
cs.pop()
}
oXF.wxXCkey=1
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/checkbox-item/index.wxml:slot:14:6")
var l1F=_n('slot')
cs.pop()
_(cVF,l1F)
hWF.wxXCkey=1
cs.pop()
_(r,cVF)
return r
}
e_[x[44]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
cs.push("./wxcomponents/wux-weapp/checkbox/index.wxml:wux-cell:1:2")
var t3F=_mz(z,'wux-cell',['extra',0,'label',1,'prefixCls',1,'title',2,'wuxClass',3],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/checkbox/index.wxml:wux-selectable:2:6")
var e4F=_mz(z,'wux-selectable',['controlled',-1,'bind:change',5,'checked',1,'color',2,'disabled',3,'prefixCls',4,'slot',5,'value',6,'wuxClass',7],[],e,s,gg)
cs.pop()
_(t3F,e4F)
cs.pop()
_(r,t3F)
return r
}
e_[x[45]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
cs.push("./wxcomponents/wux-weapp/circle/index.wxml:slot:4:7")
var o6F=_n('slot')
cs.pop()
_(r,o6F)
return r
}
e_[x[46]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
cs.push("./wxcomponents/wux-weapp/col/index.wxml:slot:2:6")
var o8F=_n('slot')
cs.pop()
_(r,o8F)
return r
}
e_[x[47]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
cs.push("./wxcomponents/wux-weapp/dialog/index.wxml:wux-popup:1:2")
var c0F=_mz(z,'wux-popup',['bind:close',0,'bind:closed',1,'closable',1,'mask',2,'maskClosable',3,'visible',4,'zIndex',5],[],e,s,gg)
var hAG=_v()
_(c0F,hAG)
if(_oz(z,7,e,s,gg)){hAG.wxVkey=1
cs.push("./wxcomponents/wux-weapp/dialog/index.wxml:view:5:10")
cs.pop()
}
hAG.wxXCkey=1
cs.pop()
_(r,c0F)
return r
}
e_[x[48]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var cCG=_v()
_(r,cCG)
if(_oz(z,0,e,s,gg)){cCG.wxVkey=1
cs.push("./wxcomponents/wux-weapp/divider/index.wxml:view:2:3")
cs.push("./wxcomponents/wux-weapp/divider/index.wxml:slot:4:4")
var oDG=_n('slot')
cs.pop()
_(cCG,oDG)
cs.pop()
}
cCG.wxXCkey=1
return r
}
e_[x[49]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var aFG=_v()
_(r,aFG)
if(_oz(z,0,e,s,gg)){aFG.wxVkey=1
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:view:1:1")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:view:2:2")
var tGG=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:view:3:3")
var eHG=_mz(z,'view',['class',3,'hoverClass',1],[],e,s,gg)
var bIG=_v()
_(eHG,bIG)
if(_oz(z,5,e,s,gg)){bIG.wxVkey=1
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:image:4:4")
cs.pop()
}
else{bIG.wxVkey=2
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:slot:5:4")
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:slot:5:4")
var oJG=_n('slot')
_rz(z,oJG,'name',6,e,s,gg)
cs.pop()
_(bIG,oJG)
cs.pop()
}
bIG.wxXCkey=1
cs.pop()
_(tGG,eHG)
var xKG=_v()
_(tGG,xKG)
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:block:7:3")
var oLG=function(cNG,fMG,hOG,gg){
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:button:8:4")
var cQG=_mz(z,'button',['appParameter',10,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindopensetting',5,'catchtap',6,'class',7,'data-index',8,'data-label',9,'data-value',10,'disabled',11,'hoverClass',12,'hoverStartTime',13,'hoverStayTime',14,'hoverStopPropagation',15,'lang',16,'openType',17,'sendMessageImg',18,'sendMessagePath',19,'sendMessageTitle',20,'sessionFrom',21,'showMessageCard',22,'style',23],[],cNG,fMG,gg)
var oRG=_v()
_(cQG,oRG)
if(_oz(z,34,cNG,fMG,gg)){oRG.wxVkey=1
cs.push("./wxcomponents/wux-weapp/fab-button/index.wxml:view:35:5")
cs.pop()
}
oRG.wxXCkey=1
cs.pop()
_(hOG,cQG)
return hOG
}
xKG.wxXCkey=2
_2z(z,8,oLG,e,s,gg,xKG,'button','index','index')
cs.pop()
cs.pop()
_(r,tGG)
aFG.wxXCkey=1
return r
}
e_[x[50]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:view:1:1")
var aTG=_n('view')
_rz(z,aTG,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-backdrop:2:6")
var tUG=_mz(z,'wux-backdrop',['bind:click',1,'data-index',1,'data-item',2,'id',3],[],e,s,gg)
cs.pop()
_(aTG,tUG)
var eVG=_v()
_(aTG,eVG)
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:block:4:10")
var bWG=function(xYG,oXG,oZG,gg){
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:view:5:14")
var c2G=_mz(z,'view',['bindtap',7,'class',1,'data-index',2],[],xYG,oXG,gg)
var h3G=_v()
_(c2G,h3G)
if(_oz(z,10,xYG,oXG,gg)){h3G.wxVkey=1
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:view:7:18")
cs.pop()
}
h3G.wxXCkey=1
cs.pop()
_(oZG,c2G)
return oZG
}
eVG.wxXCkey=2
_2z(z,5,bWG,e,s,gg,eVG,'item','index','')
cs.pop()
var o4G=_v()
_(aTG,o4G)
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:block:11:6")
var c5G=function(l7G,o6G,a8G,gg){
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:block:11:6")
var e0G=_v()
_(a8G,e0G)
if(_oz(z,13,l7G,o6G,gg)){e0G.wxVkey=1
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-animation-group:12:10")
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-animation-group:12:10")
var xCH=_mz(z,'wux-animation-group',['bind:enter',14,'bind:exit',1,'classNames',2,'in',3,'wuxClass',4],[],l7G,o6G,gg)
cs.pop()
_(e0G,xCH)
cs.pop()
}
var bAH=_v()
_(a8G,bAH)
if(_oz(z,19,l7G,o6G,gg)){bAH.wxVkey=1
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-animation-group:50:10")
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-animation-group:50:10")
var oDH=_mz(z,'wux-animation-group',['bind:enter',20,'bind:exit',1,'classNames',2,'in',3,'wuxClass',4],[],l7G,o6G,gg)
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-radio-group:52:18")
var fEH=_mz(z,'wux-radio-group',['bind:change',25,'data-index',1,'data-item',2,'value',3],[],l7G,o6G,gg)
var cFH=_v()
_(fEH,cFH)
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:block:53:22")
var hGH=function(cIH,oHH,oJH,gg){
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-radio:54:26")
var aLH=_mz(z,'wux-radio',['title',32,'value',1],[],cIH,oHH,gg)
cs.pop()
_(oJH,aLH)
return oJH
}
cFH.wxXCkey=4
_2z(z,30,hGH,l7G,o6G,gg,cFH,'p','index','{{ item.value }}')
cs.pop()
cs.pop()
_(oDH,fEH)
cs.pop()
_(bAH,oDH)
cs.pop()
}
var oBH=_v()
_(a8G,oBH)
if(_oz(z,34,l7G,o6G,gg)){oBH.wxVkey=1
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-animation-group:59:10")
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-animation-group:59:10")
var tMH=_mz(z,'wux-animation-group',['bind:enter',35,'bind:exit',1,'classNames',2,'in',3,'wuxClass',4],[],l7G,o6G,gg)
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-checkbox-group:61:18")
var eNH=_mz(z,'wux-checkbox-group',['bind:change',40,'data-index',1,'data-item',2,'name',3,'value',4],[],l7G,o6G,gg)
var bOH=_v()
_(eNH,bOH)
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:block:62:22")
var oPH=function(oRH,xQH,fSH,gg){
cs.push("./wxcomponents/wux-weapp/filterbar/index.wxml:wux-checkbox:63:26")
var hUH=_mz(z,'wux-checkbox',['title',48,'value',1],[],oRH,xQH,gg)
cs.pop()
_(fSH,hUH)
return fSH
}
bOH.wxXCkey=4
_2z(z,46,oPH,l7G,o6G,gg,bOH,'p','index','{{ item.value }}')
cs.pop()
cs.pop()
_(tMH,eNH)
cs.pop()
_(oBH,tMH)
cs.pop()
}
e0G.wxXCkey=1
e0G.wxXCkey=3
bAH.wxXCkey=1
bAH.wxXCkey=3
oBH.wxXCkey=1
oBH.wxXCkey=3
cs.pop()
return a8G
}
o4G.wxXCkey=4
_2z(z,11,c5G,e,s,gg,o4G,'item','index','')
cs.pop()
cs.pop()
_(r,aTG)
return r
}
e_[x[51]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var cWH=_v()
_(r,cWH)
if(_oz(z,0,e,s,gg)){cWH.wxVkey=1
cs.push("./wxcomponents/wux-weapp/floating-button/index.wxml:view:1:1")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/floating-button/index.wxml:view:2:2")
var oXH=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var lYH=_v()
_(oXH,lYH)
if(_oz(z,3,e,s,gg)){lYH.wxVkey=1
cs.push("./wxcomponents/wux-weapp/floating-button/index.wxml:view:6:3")
cs.pop()
}
lYH.wxXCkey=1
cs.pop()
_(r,oXH)
cWH.wxXCkey=1
return r
}
e_[x[52]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
cs.push("./wxcomponents/wux-weapp/gallery/index.wxml:wux-animation-group:1:2")
var t1H=_mz(z,'wux-animation-group',['classNames',0,'in',1,'wuxClass',1],[],e,s,gg)
var e2H=_v()
_(t1H,e2H)
if(_oz(z,3,e,s,gg)){e2H.wxVkey=1
cs.push("./wxcomponents/wux-weapp/gallery/index.wxml:swiper:2:6")
cs.push("./wxcomponents/wux-weapp/gallery/index.wxml:swiper:2:6")
var o4H=_mz(z,'swiper',['autoplay',4,'bindchange',1,'circular',2,'class',3,'current',4,'duration',5,'indicatorActiveColor',6,'indicatorColor',7,'indicatorDots',8,'interval',9,'vertical',10],[],e,s,gg)
var x5H=_v()
_(o4H,x5H)
cs.push("./wxcomponents/wux-weapp/gallery/index.wxml:block:3:10")
var o6H=function(c8H,f7H,h9H,gg){
var cAI=_v()
_(h9H,cAI)
if(_oz(z,17,c8H,f7H,gg)){cAI.wxVkey=1
cs.push("./wxcomponents/wux-weapp/gallery/index.wxml:view:6:18")
cs.pop()
}
cAI.wxXCkey=1
return h9H
}
x5H.wxXCkey=2
_2z(z,15,o6H,e,s,gg,x5H,'item','index','index')
cs.pop()
cs.pop()
_(e2H,o4H)
cs.pop()
}
var b3H=_v()
_(t1H,b3H)
if(_oz(z,18,e,s,gg)){b3H.wxVkey=1
cs.push("./wxcomponents/wux-weapp/gallery/index.wxml:view:10:6")
cs.pop()
}
e2H.wxXCkey=1
b3H.wxXCkey=1
cs.pop()
_(r,t1H)
return r
}
e_[x[53]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:view:1:1")
var lCI=_mz(z,'view',['bindtap',0,'class',1,'hoverClass',1,'style',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:view:3:10")
var aDI=_n('view')
_rz(z,aDI,'class',4,e,s,gg)
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:view:4:14")
var tEI=_n('view')
_rz(z,tEI,'class',5,e,s,gg)
var eFI=_v()
_(tEI,eFI)
if(_oz(z,6,e,s,gg)){eFI.wxVkey=1
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:image:5:18")
cs.pop()
}
else{eFI.wxVkey=2
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:block:6:18")
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:slot:7:22")
var bGI=_n('slot')
_rz(z,bGI,'name',7,e,s,gg)
cs.pop()
_(eFI,bGI)
cs.pop()
}
eFI.wxXCkey=1
cs.pop()
_(aDI,tEI)
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:view:10:14")
var oHI=_n('view')
_rz(z,oHI,'class',8,e,s,gg)
var xII=_v()
_(oHI,xII)
if(_oz(z,9,e,s,gg)){xII.wxVkey=1
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:view:11:18")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/grid/index.wxml:slot:12:18")
var oJI=_n('slot')
cs.pop()
_(oHI,oJI)
xII.wxXCkey=1
cs.pop()
_(aDI,oHI)
cs.pop()
_(lCI,aDI)
cs.pop()
_(r,lCI)
return r
}
e_[x[54]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
cs.push("./wxcomponents/wux-weapp/grids/index.wxml:slot:2:6")
var cLI=_n('slot')
cs.pop()
_(r,cLI)
return r
}
e_[x[55]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[56]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var cOI=_v()
_(r,cOI)
if(_oz(z,0,e,s,gg)){cOI.wxVkey=1
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:1:1")
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:1:1")
var oPI=_mz(z,'view',['bindtap',1,'class',1,'style',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:2:3")
var aRI=_n('view')
_rz(z,aRI,'class',4,e,s,gg)
var tSI=_v()
_(aRI,tSI)
if(_oz(z,5,e,s,gg)){tSI.wxVkey=1
cs.push("./wxcomponents/wux-weapp/image/index.wxml:image:3:7")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/image/index.wxml:slot:4:7")
var eTI=_n('slot')
cs.pop()
_(aRI,eTI)
tSI.wxXCkey=1
cs.pop()
_(oPI,aRI)
var lQI=_v()
_(oPI,lQI)
if(_oz(z,6,e,s,gg)){lQI.wxVkey=1
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:6:3")
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:6:3")
var bUI=_n('view')
_rz(z,bUI,'class',7,e,s,gg)
var oVI=_v()
_(bUI,oVI)
if(_oz(z,8,e,s,gg)){oVI.wxVkey=1
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:7:7")
cs.pop()
}
else{oVI.wxVkey=2
cs.push("./wxcomponents/wux-weapp/image/index.wxml:block:8:7")
cs.push("./wxcomponents/wux-weapp/image/index.wxml:slot:9:8")
var xWI=_n('slot')
_rz(z,xWI,'name',9,e,s,gg)
cs.pop()
_(oVI,xWI)
cs.pop()
}
oVI.wxXCkey=1
cs.pop()
_(lQI,bUI)
cs.pop()
}
else if(_oz(z,10,e,s,gg)){lQI.wxVkey=2
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:12:6")
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:12:6")
var oXI=_n('view')
_rz(z,oXI,'class',11,e,s,gg)
var fYI=_v()
_(oXI,fYI)
if(_oz(z,12,e,s,gg)){fYI.wxVkey=1
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:13:7")
cs.pop()
}
else{fYI.wxVkey=2
cs.push("./wxcomponents/wux-weapp/image/index.wxml:block:14:7")
cs.push("./wxcomponents/wux-weapp/image/index.wxml:slot:15:8")
var cZI=_n('slot')
_rz(z,cZI,'name',13,e,s,gg)
cs.pop()
_(fYI,cZI)
cs.pop()
}
fYI.wxXCkey=1
cs.pop()
_(lQI,oXI)
cs.pop()
}
else if(_oz(z,14,e,s,gg)){lQI.wxVkey=3
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:18:6")
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:18:6")
var h1I=_n('view')
_rz(z,h1I,'class',15,e,s,gg)
var o2I=_v()
_(h1I,o2I)
if(_oz(z,16,e,s,gg)){o2I.wxVkey=1
cs.push("./wxcomponents/wux-weapp/image/index.wxml:view:19:7")
cs.pop()
}
else{o2I.wxVkey=2
cs.push("./wxcomponents/wux-weapp/image/index.wxml:block:20:7")
cs.push("./wxcomponents/wux-weapp/image/index.wxml:slot:21:8")
var c3I=_n('slot')
_rz(z,c3I,'name',17,e,s,gg)
cs.pop()
_(o2I,c3I)
cs.pop()
}
o2I.wxXCkey=1
cs.pop()
_(lQI,h1I)
cs.pop()
}
lQI.wxXCkey=1
cs.pop()
_(cOI,oPI)
cs.pop()
}
cOI.wxXCkey=1
return r
}
e_[x[57]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
cs.push("./wxcomponents/wux-weapp/index-item/index.wxml:slot:4:10")
var l5I=_n('slot')
cs.pop()
_(r,l5I)
return r
}
e_[x[58]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
cs.push("./wxcomponents/wux-weapp/index/index.wxml:scroll-view:2:6")
var t7I=_mz(z,'scroll-view',['scrollY',-1,'bindscroll',0,'scrollTop',1,'style',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/index/index.wxml:slot:3:10")
var o0I=_n('slot')
cs.pop()
_(t7I,o0I)
var e8I=_v()
_(t7I,e8I)
if(_oz(z,3,e,s,gg)){e8I.wxVkey=1
cs.push("./wxcomponents/wux-weapp/index/index.wxml:view:4:10")
cs.pop()
}
var b9I=_v()
_(t7I,b9I)
if(_oz(z,4,e,s,gg)){b9I.wxVkey=1
cs.push("./wxcomponents/wux-weapp/index/index.wxml:div:9:10")
cs.pop()
}
e8I.wxXCkey=1
b9I.wxXCkey=1
cs.pop()
_(r,t7I)
return r
}
e_[x[59]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
cs.push("./wxcomponents/wux-weapp/input-number/index.wxml:view:1:1")
var oBJ=_n('view')
_rz(z,oBJ,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/input-number/index.wxml:view:2:6")
var fCJ=_mz(z,'view',['bindlongpress',1,'bindtap',1,'bindtouchend',2,'class',3,'data-type',4,'touchcancel',5],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/input-number/index.wxml:wux-icon:3:10")
var cDJ=_mz(z,'wux-icon',['type',7,'wuxClass',1],[],e,s,gg)
cs.pop()
_(fCJ,cDJ)
cs.pop()
_(oBJ,fCJ)
cs.push("./wxcomponents/wux-weapp/input-number/index.wxml:view:6:6")
var hEJ=_mz(z,'view',['bindlongpress',9,'bindtap',1,'bindtouchend',2,'class',3,'data-type',4,'touchcancel',5],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/input-number/index.wxml:wux-icon:7:10")
var oFJ=_mz(z,'wux-icon',['type',15,'wuxClass',1],[],e,s,gg)
cs.pop()
_(hEJ,oFJ)
cs.pop()
_(oBJ,hEJ)
cs.pop()
_(r,oBJ)
return r
}
e_[x[60]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
cs.push("./wxcomponents/wux-weapp/input/index.wxml:view:1:1")
var oHJ=_n('view')
_rz(z,oHJ,'class',0,e,s,gg)
var lIJ=_v()
_(oHJ,lIJ)
if(_oz(z,1,e,s,gg)){lIJ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/input/index.wxml:view:2:3")
cs.pop()
}
else{lIJ.wxVkey=2
cs.push("./wxcomponents/wux-weapp/input/index.wxml:block:3:3")
cs.push("./wxcomponents/wux-weapp/input/index.wxml:slot:4:4")
var bMJ=_n('slot')
cs.pop()
_(lIJ,bMJ)
cs.pop()
}
var aJJ=_v()
_(oHJ,aJJ)
if(_oz(z,2,e,s,gg)){aJJ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/input/index.wxml:view:31:3")
cs.pop()
}
var tKJ=_v()
_(oHJ,tKJ)
if(_oz(z,3,e,s,gg)){tKJ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/input/index.wxml:view:34:3")
cs.pop()
}
var eLJ=_v()
_(oHJ,eLJ)
if(_oz(z,4,e,s,gg)){eLJ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/input/index.wxml:view:37:3")
cs.pop()
}
else{eLJ.wxVkey=2
cs.push("./wxcomponents/wux-weapp/input/index.wxml:block:38:3")
cs.push("./wxcomponents/wux-weapp/input/index.wxml:slot:39:4")
var oNJ=_n('slot')
_rz(z,oNJ,'name',5,e,s,gg)
cs.pop()
_(eLJ,oNJ)
cs.pop()
}
lIJ.wxXCkey=1
aJJ.wxXCkey=1
tKJ.wxXCkey=1
eLJ.wxXCkey=1
cs.pop()
_(r,oHJ)
return r
}
e_[x[61]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
cs.push("./wxcomponents/wux-weapp/keyboard/index.wxml:wux-popup:1:2")
var oPJ=_mz(z,'wux-popup',['bind:close',0,'position',1,'visible',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/keyboard/index.wxml:view:2:6")
var fQJ=_n('view')
_rz(z,fQJ,'class',3,e,s,gg)
var cRJ=_v()
_(fQJ,cRJ)
if(_oz(z,4,e,s,gg)){cRJ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/keyboard/index.wxml:view:3:10")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/keyboard/index.wxml:view:4:10")
var oTJ=_n('view')
_rz(z,oTJ,'class',5,e,s,gg)
var oVJ=_v()
_(oTJ,oVJ)
cs.push("./wxcomponents/wux-weapp/keyboard/index.wxml:block:5:14")
var lWJ=function(tYJ,aXJ,eZJ,gg){
var o2J=_v()
_(eZJ,o2J)
if(_oz(z,8,tYJ,aXJ,gg)){o2J.wxVkey=1
cs.push("./wxcomponents/wux-weapp/keyboard/index.wxml:block:5:14")
cs.pop()
}
o2J.wxXCkey=1
return eZJ
}
oVJ.wxXCkey=2
_2z(z,6,lWJ,e,s,gg,oVJ,'item','index','index')
cs.pop()
var cUJ=_v()
_(oTJ,cUJ)
if(_oz(z,9,e,s,gg)){cUJ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/keyboard/index.wxml:block:12:14")
cs.pop()
}
cUJ.wxXCkey=1
cs.pop()
_(fQJ,oTJ)
var hSJ=_v()
_(fQJ,hSJ)
if(_oz(z,10,e,s,gg)){hSJ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/keyboard/index.wxml:view:17:14")
cs.pop()
}
cRJ.wxXCkey=1
hSJ.wxXCkey=1
cs.pop()
_(oPJ,fQJ)
cs.pop()
_(r,oPJ)
return r
}
e_[x[62]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var o4J=_v()
_(r,o4J)
if(_oz(z,0,e,s,gg)){o4J.wxVkey=1
cs.push("./wxcomponents/wux-weapp/loading/index.wxml:wux-backdrop:1:2")
cs.push("./wxcomponents/wux-weapp/loading/index.wxml:wux-backdrop:1:2")
var f5J=_mz(z,'wux-backdrop',['id',1,'transparent',1],[],e,s,gg)
cs.pop()
_(o4J,f5J)
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/loading/index.wxml:wux-animation-group:2:2")
var c6J=_mz(z,'wux-animation-group',['classNames',3,'in',1,'wuxClass',2],[],e,s,gg)
cs.pop()
_(r,c6J)
o4J.wxXCkey=1
o4J.wxXCkey=3
return r
}
e_[x[63]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[64]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
cs.push("./wxcomponents/wux-weapp/media/index.wxml:view:1:1")
var o8J=_n('view')
_rz(z,o8J,'class',0,e,s,gg)
var c9J=_v()
_(o8J,c9J)
if(_oz(z,1,e,s,gg)){c9J.wxVkey=1
cs.push("./wxcomponents/wux-weapp/media/index.wxml:image:3:10")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/media/index.wxml:view:5:6")
var o0J=_n('view')
_rz(z,o0J,'class',2,e,s,gg)
var lAK=_v()
_(o0J,lAK)
if(_oz(z,3,e,s,gg)){lAK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/media/index.wxml:view:6:10")
cs.pop()
}
var aBK=_v()
_(o0J,aBK)
if(_oz(z,4,e,s,gg)){aBK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/media/index.wxml:view:7:10")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/media/index.wxml:slot:8:10")
var tCK=_n('slot')
cs.pop()
_(o0J,tCK)
lAK.wxXCkey=1
aBK.wxXCkey=1
cs.pop()
_(o8J,o0J)
c9J.wxXCkey=1
cs.pop()
_(r,o8J)
return r
}
e_[x[64]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:view:1:1")
var bEK=_n('view')
_rz(z,bEK,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:view:2:6")
var oFK=_mz(z,'view',['bindtap',1,'class',1,'data-type',2],[],e,s,gg)
var xGK=_v()
_(oFK,xGK)
if(_oz(z,4,e,s,gg)){xGK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:view:3:10")
cs.pop()
}
else{xGK.wxVkey=2
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:slot:4:10")
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:slot:4:10")
var oHK=_n('slot')
_rz(z,oHK,'name',5,e,s,gg)
cs.pop()
_(xGK,oHK)
cs.pop()
}
xGK.wxXCkey=1
cs.pop()
_(bEK,oFK)
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:view:6:6")
var fIK=_n('view')
_rz(z,fIK,'class',6,e,s,gg)
var cJK=_v()
_(fIK,cJK)
if(_oz(z,7,e,s,gg)){cJK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:block:7:10")
cs.pop()
}
else{cJK.wxVkey=2
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:slot:8:10")
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:slot:8:10")
var hKK=_n('slot')
cs.pop()
_(cJK,hKK)
cs.pop()
}
cJK.wxXCkey=1
cs.pop()
_(bEK,fIK)
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:view:10:6")
var oLK=_mz(z,'view',['bindtap',8,'class',1,'data-type',2],[],e,s,gg)
var cMK=_v()
_(oLK,cMK)
if(_oz(z,11,e,s,gg)){cMK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:view:11:10")
cs.pop()
}
else{cMK.wxVkey=2
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:slot:12:10")
cs.push("./wxcomponents/wux-weapp/navbar/index.wxml:slot:12:10")
var oNK=_n('slot')
_rz(z,oNK,'name',12,e,s,gg)
cs.pop()
_(cMK,oNK)
cs.pop()
}
cMK.wxXCkey=1
cs.pop()
_(bEK,oLK)
cs.pop()
_(r,bEK)
return r
}
e_[x[65]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
var aPK=_v()
_(r,aPK)
if(_oz(z,0,e,s,gg)){aPK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:view:1:1")
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:view:1:1")
var tQK=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:view:2:6")
var bSK=_n('view')
_rz(z,bSK,'class',3,e,s,gg)
var oTK=_v()
_(bSK,oTK)
if(_oz(z,4,e,s,gg)){oTK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:image:3:10")
cs.pop()
}
else{oTK.wxVkey=2
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:block:4:10")
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:slot:5:14")
var xUK=_n('slot')
_rz(z,xUK,'name',5,e,s,gg)
cs.pop()
_(oTK,xUK)
cs.pop()
}
oTK.wxXCkey=1
cs.pop()
_(tQK,bSK)
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:view:10:14")
var oVK=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var fWK=_v()
_(oVK,fWK)
if(_oz(z,8,e,s,gg)){fWK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:block:11:18")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:slot:12:18")
var cXK=_n('slot')
cs.pop()
_(oVK,cXK)
fWK.wxXCkey=1
cs.pop()
_(tQK,oVK)
var eRK=_v()
_(tQK,eRK)
if(_oz(z,9,e,s,gg)){eRK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:view:16:6")
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:view:16:6")
var hYK=_mz(z,'view',['catchtap',10,'class',1],[],e,s,gg)
var oZK=_v()
_(hYK,oZK)
if(_oz(z,12,e,s,gg)){oZK.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:image:17:10")
cs.pop()
}
else{oZK.wxVkey=2
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:block:18:10")
cs.push("./wxcomponents/wux-weapp/notice-bar/index.wxml:slot:19:14")
var c1K=_n('slot')
_rz(z,c1K,'name',13,e,s,gg)
cs.pop()
_(oZK,c1K)
cs.pop()
}
oZK.wxXCkey=1
cs.pop()
_(eRK,hYK)
cs.pop()
}
eRK.wxXCkey=1
cs.pop()
_(aPK,tQK)
cs.pop()
}
aPK.wxXCkey=1
return r
}
e_[x[66]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
cs.push("./wxcomponents/wux-weapp/notification/index.wxml:wux-animation-group:1:2")
var l3K=_mz(z,'wux-animation-group',['bind:click',0,'classNames',1,'in',1,'wuxClass',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/notification/index.wxml:view:2:6")
var a4K=_n('view')
_rz(z,a4K,'class',4,e,s,gg)
var t5K=_v()
_(a4K,t5K)
if(_oz(z,5,e,s,gg)){t5K.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notification/index.wxml:view:3:10")
cs.pop()
}
var e6K=_v()
_(a4K,e6K)
if(_oz(z,6,e,s,gg)){e6K.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notification/index.wxml:view:6:10")
cs.push("./wxcomponents/wux-weapp/notification/index.wxml:view:6:10")
var b7K=_n('view')
_rz(z,b7K,'class',7,e,s,gg)
var o8K=_v()
_(b7K,o8K)
if(_oz(z,8,e,s,gg)){o8K.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notification/index.wxml:view:7:14")
cs.pop()
}
var x9K=_v()
_(b7K,x9K)
if(_oz(z,9,e,s,gg)){x9K.wxVkey=1
cs.push("./wxcomponents/wux-weapp/notification/index.wxml:view:8:14")
cs.pop()
}
o8K.wxXCkey=1
x9K.wxXCkey=1
cs.pop()
_(e6K,b7K)
cs.pop()
}
t5K.wxXCkey=1
e6K.wxXCkey=1
cs.pop()
_(l3K,a4K)
cs.pop()
_(r,l3K)
return r
}
e_[x[67]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx_62()
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:view:1:1")
var fAL=_n('view')
_rz(z,fAL,'class',0,e,s,gg)
var cBL=_v()
_(fAL,cBL)
if(_oz(z,1,e,s,gg)){cBL.wxVkey=1
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:view:2:6")
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:wux-button:3:10")
var oFL=_mz(z,'wux-button',['bind:click',2,'disabled',1,'type',2,'wuxClass',3],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:slot:4:14")
var lGL=_n('slot')
_rz(z,lGL,'name',6,e,s,gg)
cs.pop()
_(oFL,lGL)
cs.pop()
_(cBL,oFL)
cs.pop()
}
var hCL=_v()
_(fAL,hCL)
if(_oz(z,7,e,s,gg)){hCL.wxVkey=1
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:view:7:6")
cs.pop()
}
var oDL=_v()
_(fAL,oDL)
if(_oz(z,8,e,s,gg)){oDL.wxVkey=1
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:view:10:6")
cs.pop()
}
var cEL=_v()
_(fAL,cEL)
if(_oz(z,9,e,s,gg)){cEL.wxVkey=1
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:view:15:6")
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:wux-button:16:10")
var aHL=_mz(z,'wux-button',['bind:click',10,'disabled',1,'type',2,'wuxClass',3],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/pagination/index.wxml:slot:17:14")
var tIL=_n('slot')
_rz(z,tIL,'name',14,e,s,gg)
cs.pop()
_(aHL,tIL)
cs.pop()
_(cEL,aHL)
cs.pop()
}
cBL.wxXCkey=1
cBL.wxXCkey=3
hCL.wxXCkey=1
oDL.wxXCkey=1
cEL.wxXCkey=1
cEL.wxXCkey=3
cs.pop()
_(r,fAL)
return r
}
e_[x[68]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx_63()
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:wux-animation-group:1:2")
var bKL=_mz(z,'wux-animation-group',['bind:enter',0,'classNames',1,'in',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:view:5:14")
var oLL=_n('view')
_rz(z,oLL,'class',3,e,s,gg)
var xML=_v()
_(oLL,xML)
if(_oz(z,4,e,s,gg)){xML.wxVkey=1
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:view:6:18")
cs.pop()
}
else{xML.wxVkey=2
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:slot:7:18")
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:slot:7:18")
var fOL=_n('slot')
_rz(z,fOL,'name',5,e,s,gg)
cs.pop()
_(xML,fOL)
cs.pop()
}
var oNL=_v()
_(oLL,oNL)
if(_oz(z,6,e,s,gg)){oNL.wxVkey=1
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:view:8:18")
cs.pop()
}
else{oNL.wxVkey=2
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:slot:9:18")
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:slot:9:18")
var cPL=_n('slot')
_rz(z,cPL,'name',7,e,s,gg)
cs.pop()
_(oNL,cPL)
cs.pop()
}
xML.wxXCkey=1
oNL.wxXCkey=1
cs.pop()
_(bKL,oLL)
cs.pop()
_(r,bKL)
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:view:14:2")
var hQL=_mz(z,'view',['bindtap',8,'class',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/popover/index.wxml:slot:15:6")
var oRL=_n('slot')
cs.pop()
_(hQL,oRL)
cs.pop()
_(r,hQL)
return r
}
e_[x[69]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx_64()
var oTL=_v()
_(r,oTL)
if(_oz(z,0,e,s,gg)){oTL.wxVkey=1
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:wux-backdrop:1:2")
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:wux-backdrop:1:2")
var lUL=_mz(z,'wux-backdrop',['bind:click',1,'id',1,'zIndex',2],[],e,s,gg)
cs.pop()
_(oTL,lUL)
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:wux-animation-group:3:6")
var aVL=_mz(z,'wux-animation-group',['bind:exited',4,'classNames',1,'in',2,'wrapStyle',3,'wuxClass',4],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:view:4:10")
var tWL=_n('view')
_rz(z,tWL,'class',9,e,s,gg)
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:view:5:14")
var bYL=_n('view')
_rz(z,bYL,'class',10,e,s,gg)
var oZL=_v()
_(bYL,oZL)
if(_oz(z,11,e,s,gg)){oZL.wxVkey=1
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:view:6:18")
cs.pop()
}
else{oZL.wxVkey=2
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:block:7:18")
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:slot:8:22")
var x1L=_n('slot')
_rz(z,x1L,'name',12,e,s,gg)
cs.pop()
_(oZL,x1L)
cs.pop()
}
oZL.wxXCkey=1
cs.pop()
_(tWL,bYL)
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:view:11:14")
var o2L=_n('view')
_rz(z,o2L,'class',13,e,s,gg)
var f3L=_v()
_(o2L,f3L)
if(_oz(z,14,e,s,gg)){f3L.wxVkey=1
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:view:12:18")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:slot:13:18")
var c4L=_n('slot')
cs.pop()
_(o2L,c4L)
f3L.wxXCkey=1
cs.pop()
_(tWL,o2L)
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:view:15:14")
var h5L=_n('view')
_rz(z,h5L,'class',15,e,s,gg)
var o6L=_v()
_(h5L,o6L)
if(_oz(z,16,e,s,gg)){o6L.wxVkey=1
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:view:16:18")
cs.pop()
}
else{o6L.wxVkey=2
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:block:17:18")
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:slot:18:22")
var c7L=_n('slot')
_rz(z,c7L,'name',17,e,s,gg)
cs.pop()
_(o6L,c7L)
cs.pop()
}
o6L.wxXCkey=1
cs.pop()
_(tWL,h5L)
var eXL=_v()
_(tWL,eXL)
if(_oz(z,18,e,s,gg)){eXL.wxVkey=1
cs.push("./wxcomponents/wux-weapp/popup/index.wxml:view:21:14")
cs.pop()
}
eXL.wxXCkey=1
cs.pop()
_(aVL,tWL)
cs.pop()
_(r,aVL)
oTL.wxXCkey=1
oTL.wxXCkey=3
return r
}
e_[x[70]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m64=function(e,s,r,gg){
var z=gz$gwx_65()
var l9L=_v()
_(r,l9L)
if(_oz(z,0,e,s,gg)){l9L.wxVkey=1
cs.push("./wxcomponents/wux-weapp/progress/index.wxml:view:7:6")
cs.pop()
}
l9L.wxXCkey=1
return r
}
e_[x[71]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m65=function(e,s,r,gg){
var z=gz$gwx_66()
cs.push("./wxcomponents/wux-weapp/prompt/index.wxml:wux-animation-group:1:2")
var tAM=_mz(z,'wux-animation-group',['classNames',0,'in',1,'wuxClass',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/prompt/index.wxml:view:2:6")
var eBM=_n('view')
_rz(z,eBM,'class',3,e,s,gg)
var bCM=_v()
_(eBM,bCM)
if(_oz(z,4,e,s,gg)){bCM.wxVkey=1
cs.push("./wxcomponents/wux-weapp/prompt/index.wxml:image:3:10")
cs.pop()
}
var oDM=_v()
_(eBM,oDM)
if(_oz(z,5,e,s,gg)){oDM.wxVkey=1
cs.push("./wxcomponents/wux-weapp/prompt/index.wxml:view:4:10")
cs.pop()
}
var xEM=_v()
_(eBM,xEM)
if(_oz(z,6,e,s,gg)){xEM.wxVkey=1
cs.push("./wxcomponents/wux-weapp/prompt/index.wxml:view:5:10")
cs.pop()
}
var oFM=_v()
_(eBM,oFM)
if(_oz(z,7,e,s,gg)){oFM.wxVkey=1
cs.push("./wxcomponents/wux-weapp/prompt/index.wxml:view:6:10")
cs.pop()
}
bCM.wxXCkey=1
oDM.wxXCkey=1
xEM.wxXCkey=1
oFM.wxXCkey=1
cs.pop()
_(tAM,eBM)
cs.pop()
_(r,tAM)
return r
}
e_[x[72]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
var m66=function(e,s,r,gg){
var z=gz$gwx_67()
return r
}
e_[x[73]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m67=function(e,s,r,gg){
var z=gz$gwx_68()
cs.push("./wxcomponents/wux-weapp/radio-group/index.wxml:wux-cell-group:1:2")
var hIM=_mz(z,'wux-cell-group',['label',0,'prefixCls',1,'title',1,'wuxClass',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/radio-group/index.wxml:slot:2:6")
var oJM=_n('slot')
cs.pop()
_(hIM,oJM)
cs.pop()
_(r,hIM)
return r
}
e_[x[74]]={f:m67,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m68=function(e,s,r,gg){
var z=gz$gwx_69()
cs.push("./wxcomponents/wux-weapp/radio/index.wxml:wux-cell:1:2")
var oLM=_mz(z,'wux-cell',['label',0,'prefixCls',1,'thumb',1,'title',2,'wuxClass',3],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/radio/index.wxml:wux-selectable:2:6")
var lMM=_mz(z,'wux-selectable',['controlled',-1,'bind:change',5,'checked',1,'color',2,'disabled',3,'prefixCls',4,'slot',5,'type',6,'value',7,'wuxClass',8],[],e,s,gg)
cs.pop()
_(oLM,lMM)
cs.pop()
_(r,oLM)
return r
}
e_[x[75]]={f:m68,j:[],i:[],ti:[],ic:[]}
d_[x[76]]={}
var m69=function(e,s,r,gg){
var z=gz$gwx_70()
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:view:1:1")
var tOM=_mz(z,'view',['bindtouchmove',0,'class',1],[],e,s,gg)
var ePM=_v()
_(tOM,ePM)
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:block:2:6")
var bQM=function(xSM,oRM,oTM,gg){
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:view:3:10")
var cVM=_mz(z,'view',['bindtap',4,'class',1,'data-index',2],[],xSM,oRM,gg)
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:view:5:18")
var hWM=_n('view')
_rz(z,hWM,'class',7,xSM,oRM,gg)
var oXM=_v()
_(hWM,oXM)
if(_oz(z,8,xSM,oRM,gg)){oXM.wxVkey=1
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:wux-icon:6:22")
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:wux-icon:6:22")
var oZM=_mz(z,'wux-icon',['color',9,'size',1,'type',2,'wuxClass',3],[],xSM,oRM,gg)
cs.pop()
_(oXM,oZM)
cs.pop()
}
else{oXM.wxVkey=2
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:block:7:22")
cs.pop()
}
var cYM=_v()
_(hWM,cYM)
if(_oz(z,13,xSM,oRM,gg)){cYM.wxVkey=1
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:view:8:22")
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:view:8:22")
var l1M=_mz(z,'view',['class',14,'style',1],[],xSM,oRM,gg)
var a2M=_v()
_(l1M,a2M)
if(_oz(z,16,xSM,oRM,gg)){a2M.wxVkey=1
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:wux-icon:9:26")
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:wux-icon:9:26")
var t3M=_mz(z,'wux-icon',['color',17,'size',1,'type',2,'wuxClass',3],[],xSM,oRM,gg)
cs.pop()
_(a2M,t3M)
cs.pop()
}
else{a2M.wxVkey=2
cs.push("./wxcomponents/wux-weapp/rater/index.wxml:block:10:26")
cs.pop()
}
a2M.wxXCkey=1
a2M.wxXCkey=3
cs.pop()
_(cYM,l1M)
cs.pop()
}
oXM.wxXCkey=1
oXM.wxXCkey=3
cYM.wxXCkey=1
cYM.wxXCkey=3
cs.pop()
_(cVM,hWM)
cs.pop()
_(oTM,cVM)
return oTM
}
ePM.wxXCkey=4
_2z(z,2,bQM,e,s,gg,ePM,'item','index','')
cs.pop()
cs.pop()
_(r,tOM)
return r
}
e_[x[76]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[77]]={}
var m70=function(e,s,r,gg){
var z=gz$gwx_71()
cs.push("./wxcomponents/wux-weapp/refresher/index.wxml:view:1:1")
var b5M=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'style',2],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/refresher/index.wxml:slot:14:6")
var o6M=_n('slot')
cs.pop()
_(b5M,o6M)
cs.push("./wxcomponents/wux-weapp/refresher/index.wxml:view:16:10")
var x7M=_n('view')
_rz(z,x7M,'class',4,e,s,gg)
var o8M=_v()
_(x7M,o8M)
if(_oz(z,5,e,s,gg)){o8M.wxVkey=1
cs.push("./wxcomponents/wux-weapp/refresher/index.wxml:text:17:14")
cs.pop()
}
var f9M=_v()
_(x7M,f9M)
if(_oz(z,6,e,s,gg)){f9M.wxVkey=1
cs.push("./wxcomponents/wux-weapp/refresher/index.wxml:text:18:14")
cs.pop()
}
var c0M=_v()
_(x7M,c0M)
if(_oz(z,7,e,s,gg)){c0M.wxVkey=1
cs.push("./wxcomponents/wux-weapp/refresher/index.wxml:view:19:14")
cs.pop()
}
o8M.wxXCkey=1
f9M.wxXCkey=1
c0M.wxXCkey=1
cs.pop()
_(b5M,x7M)
cs.pop()
_(r,b5M)
return r
}
e_[x[77]]={f:m70,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m71=function(e,s,r,gg){
var z=gz$gwx_72()
cs.push("./wxcomponents/wux-weapp/result/index.wxml:view:1:1")
var oBN=_n('view')
_rz(z,oBN,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/result/index.wxml:view:2:6")
var cCN=_n('view')
_rz(z,cCN,'class',1,e,s,gg)
var oDN=_v()
_(cCN,oDN)
if(_oz(z,2,e,s,gg)){oDN.wxVkey=1
cs.push("./wxcomponents/wux-weapp/result/index.wxml:view:3:10")
cs.pop()
}
else{oDN.wxVkey=2
cs.push("./wxcomponents/wux-weapp/result/index.wxml:block:6:10")
cs.push("./wxcomponents/wux-weapp/result/index.wxml:slot:7:14")
var lEN=_n('slot')
_rz(z,lEN,'name',3,e,s,gg)
cs.pop()
_(oDN,lEN)
cs.pop()
}
oDN.wxXCkey=1
cs.pop()
_(oBN,cCN)
cs.push("./wxcomponents/wux-weapp/result/index.wxml:view:10:6")
var aFN=_n('view')
_rz(z,aFN,'class',4,e,s,gg)
var tGN=_v()
_(aFN,tGN)
if(_oz(z,5,e,s,gg)){tGN.wxVkey=1
cs.push("./wxcomponents/wux-weapp/result/index.wxml:view:11:10")
cs.pop()
}
var eHN=_v()
_(aFN,eHN)
if(_oz(z,6,e,s,gg)){eHN.wxVkey=1
cs.push("./wxcomponents/wux-weapp/result/index.wxml:view:12:10")
cs.pop()
}
var bIN=_v()
_(aFN,bIN)
if(_oz(z,7,e,s,gg)){bIN.wxVkey=1
cs.push("./wxcomponents/wux-weapp/result/index.wxml:view:13:10")
var oJN=_v()
_(bIN,oJN)
cs.push("./wxcomponents/wux-weapp/result/index.wxml:block:14:14")
var xKN=function(fMN,oLN,cNN,gg){
cs.push("./wxcomponents/wux-weapp/result/index.wxml:wux-button:15:18")
var oPN=_mz(z,'wux-button',['appParameter',11,'bind:click',1,'bind:contact',2,'bind:getphonenumber',3,'bind:getuserinfo',4,'binderror',5,'bindopensetting',6,'block',7,'clear',8,'data-index',9,'disabled',10,'formType',11,'full',12,'hoverStartTime',13,'hoverStayTime',14,'hoverStopPropagation',15,'lang',16,'loading',17,'openType',18,'outline',19,'sendMessageImg',20,'sendMessagePath',21,'sendMessageTitle',22,'sessionFrom',23,'showMessageCard',24,'size',25,'type',26],[],fMN,oLN,gg)
cs.pop()
_(cNN,oPN)
return cNN
}
oJN.wxXCkey=4
_2z(z,9,xKN,e,s,gg,oJN,'button','index','index')
cs.pop()
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/result/index.wxml:slot:48:10")
var cQN=_n('slot')
cs.pop()
_(aFN,cQN)
tGN.wxXCkey=1
eHN.wxXCkey=1
bIN.wxXCkey=1
bIN.wxXCkey=3
cs.pop()
_(oBN,aFN)
cs.push("./wxcomponents/wux-weapp/result/index.wxml:view:50:6")
var oRN=_n('view')
_rz(z,oRN,'class',38,e,s,gg)
var lSN=_v()
_(oRN,lSN)
if(_oz(z,39,e,s,gg)){lSN.wxVkey=1
cs.push("./wxcomponents/wux-weapp/result/index.wxml:block:51:10")
cs.pop()
}
else{lSN.wxVkey=2
cs.push("./wxcomponents/wux-weapp/result/index.wxml:block:54:10")
cs.push("./wxcomponents/wux-weapp/result/index.wxml:slot:55:14")
var aTN=_n('slot')
_rz(z,aTN,'name',40,e,s,gg)
cs.pop()
_(lSN,aTN)
cs.pop()
}
lSN.wxXCkey=1
cs.pop()
_(oBN,oRN)
cs.pop()
_(r,oBN)
return r
}
e_[x[78]]={f:m71,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
var m72=function(e,s,r,gg){
var z=gz$gwx_73()
cs.push("./wxcomponents/wux-weapp/row/index.wxml:slot:2:6")
var eVN=_n('slot')
cs.pop()
_(r,eVN)
return r
}
e_[x[79]]={f:m72,j:[],i:[],ti:[],ic:[]}
d_[x[80]]={}
var m73=function(e,s,r,gg){
var z=gz$gwx_74()
cs.push("./wxcomponents/wux-weapp/search-bar/index.wxml:view:1:1")
var oXN=_n('view')
_rz(z,oXN,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/search-bar/index.wxml:view:2:6")
var oZN=_n('view')
_rz(z,oZN,'class',1,e,s,gg)
var f1N=_v()
_(oZN,f1N)
if(_oz(z,2,e,s,gg)){f1N.wxVkey=1
cs.push("./wxcomponents/wux-weapp/search-bar/index.wxml:icon:27:14")
cs.pop()
}
var c2N=_v()
_(oZN,c2N)
if(_oz(z,3,e,s,gg)){c2N.wxVkey=1
cs.push("./wxcomponents/wux-weapp/search-bar/index.wxml:label:29:10")
cs.pop()
}
f1N.wxXCkey=1
c2N.wxXCkey=1
cs.pop()
_(oXN,oZN)
var xYN=_v()
_(oXN,xYN)
if(_oz(z,4,e,s,gg)){xYN.wxVkey=1
cs.push("./wxcomponents/wux-weapp/search-bar/index.wxml:view:34:6")
cs.pop()
}
xYN.wxXCkey=1
cs.pop()
_(r,oXN)
return r
}
e_[x[80]]={f:m73,j:[],i:[],ti:[],ic:[]}
d_[x[81]]={}
var m74=function(e,s,r,gg){
var z=gz$gwx_75()
var o4N=_v()
_(r,o4N)
if(_oz(z,0,e,s,gg)){o4N.wxVkey=1
cs.push("./wxcomponents/wux-weapp/segmented-control/index.wxml:view:1:1")
cs.pop()
}
o4N.wxXCkey=1
return r
}
e_[x[81]]={f:m74,j:[],i:[],ti:[],ic:[]}
d_[x[82]]={}
var m75=function(e,s,r,gg){
var z=gz$gwx_76()
cs.push("./wxcomponents/wux-weapp/select/index.wxml:wux-popup:1:2")
var o6N=_mz(z,'wux-popup',['bind:close',0,'position',1,'visible',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/select/index.wxml:view:2:6")
var l7N=_n('view')
_rz(z,l7N,'class',3,e,s,gg)
var a8N=_v()
_(l7N,a8N)
if(_oz(z,4,e,s,gg)){a8N.wxVkey=1
cs.push("./wxcomponents/wux-weapp/select/index.wxml:view:3:10")
cs.push("./wxcomponents/wux-weapp/select/index.wxml:view:4:14")
var t9N=_n('view')
_rz(z,t9N,'class',5,e,s,gg)
var e0N=_v()
_(t9N,e0N)
if(_oz(z,6,e,s,gg)){e0N.wxVkey=1
cs.push("./wxcomponents/wux-weapp/select/index.wxml:view:5:18")
cs.pop()
}
var bAO=_v()
_(t9N,bAO)
if(_oz(z,7,e,s,gg)){bAO.wxVkey=1
cs.push("./wxcomponents/wux-weapp/select/index.wxml:view:7:18")
cs.pop()
}
e0N.wxXCkey=1
bAO.wxXCkey=1
cs.pop()
_(a8N,t9N)
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/select/index.wxml:scroll-view:10:10")
var oBO=_mz(z,'scroll-view',['scrollY',-1,'class',8,'scrollIntoView',1],[],e,s,gg)
var xCO=_v()
_(oBO,xCO)
if(_oz(z,10,e,s,gg)){xCO.wxVkey=1
cs.push("./wxcomponents/wux-weapp/select/index.wxml:wux-radio-group:11:14")
cs.push("./wxcomponents/wux-weapp/select/index.wxml:wux-radio-group:11:14")
var oDO=_mz(z,'wux-radio-group',['bind:change',11,'value',1],[],e,s,gg)
var fEO=_v()
_(oDO,fEO)
cs.push("./wxcomponents/wux-weapp/select/index.wxml:block:12:18")
var cFO=function(oHO,hGO,cIO,gg){
cs.push("./wxcomponents/wux-weapp/select/index.wxml:wux-radio:13:22")
var lKO=_mz(z,'wux-radio',['color',15,'disabled',1,'id',2,'label',3,'thumb',4,'title',5,'value',6],[],oHO,hGO,gg)
cs.pop()
_(cIO,lKO)
return cIO
}
fEO.wxXCkey=4
_2z(z,13,cFO,e,s,gg,fEO,'item','index','index')
cs.pop()
cs.pop()
_(xCO,oDO)
cs.pop()
}
else{xCO.wxVkey=2
cs.push("./wxcomponents/wux-weapp/select/index.wxml:wux-checkbox-group:16:14")
cs.push("./wxcomponents/wux-weapp/select/index.wxml:wux-checkbox-group:16:14")
var aLO=_mz(z,'wux-checkbox-group',['bind:change',22,'value',1],[],e,s,gg)
var tMO=_v()
_(aLO,tMO)
cs.push("./wxcomponents/wux-weapp/select/index.wxml:block:17:18")
var eNO=function(oPO,bOO,xQO,gg){
cs.push("./wxcomponents/wux-weapp/select/index.wxml:wux-checkbox:18:22")
var fSO=_mz(z,'wux-checkbox',['color',26,'disabled',1,'extra',2,'id',3,'label',4,'title',5,'value',6],[],oPO,bOO,gg)
cs.pop()
_(xQO,fSO)
return xQO
}
tMO.wxXCkey=4
_2z(z,24,eNO,e,s,gg,tMO,'item','index','index')
cs.pop()
cs.pop()
_(xCO,aLO)
cs.pop()
}
xCO.wxXCkey=1
xCO.wxXCkey=3
xCO.wxXCkey=3
cs.pop()
_(l7N,oBO)
a8N.wxXCkey=1
cs.pop()
_(o6N,l7N)
cs.pop()
_(r,o6N)
return r
}
e_[x[82]]={f:m75,j:[],i:[],ti:[],ic:[]}
d_[x[83]]={}
var m76=function(e,s,r,gg){
var z=gz$gwx_77()
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:label:1:1")
var hUO=_mz(z,'label',['bindtap',0,'class',1,'style',1],[],e,s,gg)
var oVO=_v()
_(hUO,oVO)
if(_oz(z,3,e,s,gg)){oVO.wxVkey=1
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:block:2:6")
cs.pop()
}
else if(_oz(z,4,e,s,gg)){oVO.wxVkey=2
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:block:6:6")
cs.pop()
}
else{oVO.wxVkey=3
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:block:10:6")
var cWO=_v()
_(oVO,cWO)
if(_oz(z,5,e,s,gg)){cWO.wxVkey=1
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:slot:11:7")
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:slot:11:7")
var oXO=_n('slot')
_rz(z,oXO,'name',6,e,s,gg)
cs.pop()
_(cWO,oXO)
cs.pop()
}
else{cWO.wxVkey=2
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:slot:12:7")
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:slot:12:7")
var lYO=_n('slot')
_rz(z,lYO,'name',7,e,s,gg)
cs.pop()
_(cWO,lYO)
cs.pop()
}
cWO.wxXCkey=1
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/selectable/index.wxml:slot:14:6")
var aZO=_n('slot')
cs.pop()
_(hUO,aZO)
oVO.wxXCkey=1
cs.pop()
_(r,hUO)
return r
}
e_[x[83]]={f:m76,j:[],i:[],ti:[],ic:[]}
d_[x[84]]={}
var m77=function(e,s,r,gg){
var z=gz$gwx_78()
return r
}
e_[x[84]]={f:m77,j:[],i:[],ti:[],ic:[]}
d_[x[85]]={}
var m78=function(e,s,r,gg){
var z=gz$gwx_79()
return r
}
e_[x[85]]={f:m78,j:[],i:[],ti:[],ic:[]}
d_[x[86]]={}
var m79=function(e,s,r,gg){
var z=gz$gwx_80()
cs.push("./wxcomponents/wux-weapp/skeleton/index.wxml:slot:2:6")
var o4O=_n('slot')
cs.pop()
_(r,o4O)
return r
}
e_[x[86]]={f:m79,j:[],i:[],ti:[],ic:[]}
d_[x[87]]={}
var m80=function(e,s,r,gg){
var z=gz$gwx_81()
cs.push("./wxcomponents/wux-weapp/slider/index.wxml:view:1:1")
var o6O=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var f7O=_v()
_(o6O,f7O)
if(_oz(z,2,e,s,gg)){f7O.wxVkey=1
cs.push("./wxcomponents/wux-weapp/slider/index.wxml:view:2:3")
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/slider/index.wxml:view:3:6")
var h9O=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var o0O=_v()
_(h9O,o0O)
cs.push("./wxcomponents/wux-weapp/slider/index.wxml:block:4:7")
var cAP=function(lCP,oBP,aDP,gg){
var eFP=_v()
_(aDP,eFP)
if(_oz(z,7,lCP,oBP,gg)){eFP.wxVkey=1
cs.push("./wxcomponents/wux-weapp/slider/index.wxml:block:4:7")
cs.pop()
}
eFP.wxXCkey=1
return aDP
}
o0O.wxXCkey=2
_2z(z,5,cAP,e,s,gg,o0O,'item','index','')
cs.pop()
var bGP=_v()
_(h9O,bGP)
cs.push("./wxcomponents/wux-weapp/slider/index.wxml:block:7:7")
var oHP=function(oJP,xIP,fKP,gg){
var hMP=_v()
_(fKP,hMP)
if(_oz(z,10,oJP,xIP,gg)){hMP.wxVkey=1
cs.push("./wxcomponents/wux-weapp/slider/index.wxml:view:8:8")
cs.pop()
}
hMP.wxXCkey=1
return fKP
}
bGP.wxXCkey=2
_2z(z,8,oHP,e,s,gg,bGP,'item','index','')
cs.pop()
cs.pop()
_(o6O,h9O)
var c8O=_v()
_(o6O,c8O)
if(_oz(z,11,e,s,gg)){c8O.wxVkey=1
cs.push("./wxcomponents/wux-weapp/slider/index.wxml:view:23:6")
cs.pop()
}
f7O.wxXCkey=1
c8O.wxXCkey=1
cs.pop()
_(r,o6O)
return r
}
e_[x[87]]={f:m80,j:[],i:[],ti:[],ic:[]}
d_[x[88]]={}
var m81=function(e,s,r,gg){
var z=gz$gwx_82()
cs.push("./wxcomponents/wux-weapp/spin/index.wxml:view:1:1")
var cOP=_n('view')
_rz(z,cOP,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/spin/index.wxml:wux-animation-group:2:6")
var lQP=_mz(z,'wux-animation-group',['classNames',1,'in',1,'wuxClass',2],[],e,s,gg)
var aRP=_v()
_(lQP,aRP)
if(_oz(z,4,e,s,gg)){aRP.wxVkey=1
cs.push("./wxcomponents/wux-weapp/spin/index.wxml:view:9:10")
cs.pop()
}
aRP.wxXCkey=1
cs.pop()
_(cOP,lQP)
var oPP=_v()
_(cOP,oPP)
if(_oz(z,5,e,s,gg)){oPP.wxVkey=1
cs.push("./wxcomponents/wux-weapp/spin/index.wxml:view:11:6")
cs.push("./wxcomponents/wux-weapp/spin/index.wxml:slot:12:10")
var tSP=_n('slot')
cs.pop()
_(oPP,tSP)
cs.pop()
}
oPP.wxXCkey=1
cs.pop()
_(r,cOP)
return r
}
e_[x[88]]={f:m81,j:[],i:[],ti:[],ic:[]}
d_[x[89]]={}
var m82=function(e,s,r,gg){
var z=gz$gwx_83()
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:1:1")
var bUP=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:2:6")
var xWP=_n('view')
_rz(z,xWP,'class',2,e,s,gg)
var oXP=_v()
_(xWP,oXP)
if(_oz(z,3,e,s,gg)){oXP.wxVkey=1
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:3:10")
cs.pop()
}
else{oXP.wxVkey=2
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:4:10")
var fYP=_v()
_(oXP,fYP)
if(_oz(z,4,e,s,gg)){fYP.wxVkey=1
cs.push("./wxcomponents/wux-weapp/step/index.wxml:wux-icon:5:14")
cs.push("./wxcomponents/wux-weapp/step/index.wxml:wux-icon:5:14")
var cZP=_mz(z,'wux-icon',['size',5,'type',1,'wuxClass',2],[],e,s,gg)
cs.pop()
_(fYP,cZP)
cs.pop()
}
fYP.wxXCkey=1
fYP.wxXCkey=3
cs.pop()
}
oXP.wxXCkey=1
oXP.wxXCkey=3
cs.pop()
_(bUP,xWP)
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:8:6")
var h1P=_n('view')
_rz(z,h1P,'class',8,e,s,gg)
var o2P=_v()
_(h1P,o2P)
if(_oz(z,9,e,s,gg)){o2P.wxVkey=1
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:9:10")
cs.pop()
}
else{o2P.wxVkey=2
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:12:10")
cs.push("./wxcomponents/wux-weapp/step/index.wxml:slot:13:14")
var o4P=_n('slot')
_rz(z,o4P,'name',10,e,s,gg)
cs.pop()
_(o2P,o4P)
cs.pop()
}
var c3P=_v()
_(h1P,c3P)
if(_oz(z,11,e,s,gg)){c3P.wxVkey=1
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:15:10")
cs.pop()
}
else{c3P.wxVkey=2
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:18:10")
cs.push("./wxcomponents/wux-weapp/step/index.wxml:slot:19:14")
var l5P=_n('slot')
_rz(z,l5P,'name',12,e,s,gg)
cs.pop()
_(c3P,l5P)
cs.pop()
}
o2P.wxXCkey=1
c3P.wxXCkey=1
cs.pop()
_(bUP,h1P)
var oVP=_v()
_(bUP,oVP)
if(_oz(z,13,e,s,gg)){oVP.wxVkey=1
cs.push("./wxcomponents/wux-weapp/step/index.wxml:view:22:6")
cs.pop()
}
oVP.wxXCkey=1
cs.pop()
_(r,bUP)
return r
}
e_[x[89]]={f:m82,j:[],i:[],ti:[],ic:[]}
d_[x[90]]={}
var m83=function(e,s,r,gg){
var z=gz$gwx_84()
cs.push("./wxcomponents/wux-weapp/steps/index.wxml:slot:2:6")
var t7P=_n('slot')
cs.pop()
_(r,t7P)
return r
}
e_[x[90]]={f:m83,j:[],i:[],ti:[],ic:[]}
d_[x[91]]={}
var m84=function(e,s,r,gg){
var z=gz$gwx_85()
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:view:1:1")
var b9P=_n('view')
_rz(z,b9P,'class',0,e,s,gg)
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:view:2:6")
var o0P=_n('view')
_rz(z,o0P,'class',1,e,s,gg)
var xAQ=_v()
_(o0P,xAQ)
if(_oz(z,2,e,s,gg)){xAQ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:view:3:10")
cs.pop()
}
else{xAQ.wxVkey=2
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:view:6:10")
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:slot:7:14")
var oBQ=_n('slot')
_rz(z,oBQ,'name',3,e,s,gg)
cs.pop()
_(xAQ,oBQ)
cs.pop()
}
xAQ.wxXCkey=1
cs.pop()
_(b9P,o0P)
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:view:10:6")
var fCQ=_n('view')
_rz(z,fCQ,'class',4,e,s,gg)
var cDQ=_v()
_(fCQ,cDQ)
if(_oz(z,5,e,s,gg)){cDQ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:view:11:10")
cs.pop()
}
else{cDQ.wxVkey=2
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:view:14:10")
cs.push("./wxcomponents/wux-weapp/sticky-item/index.wxml:slot:15:14")
var hEQ=_n('slot')
_rz(z,hEQ,'name',6,e,s,gg)
cs.pop()
_(cDQ,hEQ)
cs.pop()
}
cDQ.wxXCkey=1
cs.pop()
_(b9P,fCQ)
cs.pop()
_(r,b9P)
return r
}
e_[x[91]]={f:m84,j:[],i:[],ti:[],ic:[]}
d_[x[92]]={}
var m85=function(e,s,r,gg){
var z=gz$gwx_86()
cs.push("./wxcomponents/wux-weapp/sticky/index.wxml:slot:2:6")
var cGQ=_n('slot')
cs.pop()
_(r,cGQ)
return r
}
e_[x[92]]={f:m85,j:[],i:[],ti:[],ic:[]}
d_[x[93]]={}
var m86=function(e,s,r,gg){
var z=gz$gwx_87()
cs.push("./wxcomponents/wux-weapp/swipe-action-group/index.wxml:slot:1:1")
var lIQ=_n('slot')
cs.pop()
_(r,lIQ)
return r
}
e_[x[93]]={f:m86,j:[],i:[],ti:[],ic:[]}
d_[x[94]]={}
d_[x[94]]["actions"]=function(e,s,r,gg){
var z=gz$gwx_88()
var b=x[94]+':actions'
r.wxVkey=b
gg.f=$gdc(f_["./wxcomponents/wux-weapp/swipe-action/index.wxml"],"",1)
if(p_[b]){_wl(b,x[94]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m87=function(e,s,r,gg){
var z=gz$gwx_88()
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:view:9:2")
var tKQ=_n('view')
_rz(z,tKQ,'class',1,e,s,gg)
var eLQ=_v()
_(tKQ,eLQ)
if(_oz(z,2,e,s,gg)){eLQ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:view:11:6")
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:view:11:6")
var oNQ=_mz(z,'view',['catchtap',3,'class',1],[],e,s,gg)
var xOQ=_v()
_(oNQ,xOQ)
if(_oz(z,5,e,s,gg)){xOQ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:template:12:10")
var oPQ=_v()
_(xOQ,oPQ)
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:template:12:10")
var fQQ=_oz(z,7,e,s,gg)
var cRQ=_gd(x[94],fQQ,e_,d_)
if(cRQ){
var hSQ=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
oPQ.wxXCkey=3
cRQ(hSQ,hSQ,oPQ,gg)
gg.f=cur_globalf
}
else _w(fQQ,x[94],12,22)
cs.pop()
cs.pop()
}
else{xOQ.wxVkey=2
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:slot:13:10")
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:slot:13:10")
var oTQ=_n('slot')
_rz(z,oTQ,'name',8,e,s,gg)
cs.pop()
_(xOQ,oTQ)
cs.pop()
}
xOQ.wxXCkey=1
cs.pop()
_(eLQ,oNQ)
cs.pop()
}
var bMQ=_v()
_(tKQ,bMQ)
if(_oz(z,9,e,s,gg)){bMQ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:view:15:6")
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:view:15:6")
var cUQ=_mz(z,'view',['catchtap',10,'class',1],[],e,s,gg)
var oVQ=_v()
_(cUQ,oVQ)
if(_oz(z,12,e,s,gg)){oVQ.wxVkey=1
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:template:16:10")
var lWQ=_v()
_(oVQ,lWQ)
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:template:16:10")
var aXQ=_oz(z,14,e,s,gg)
var tYQ=_gd(x[94],aXQ,e_,d_)
if(tYQ){
var eZQ=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
lWQ.wxXCkey=3
tYQ(eZQ,eZQ,lWQ,gg)
gg.f=cur_globalf
}
else _w(aXQ,x[94],16,22)
cs.pop()
cs.pop()
}
else{oVQ.wxVkey=2
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:slot:17:10")
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:slot:17:10")
var b1Q=_n('slot')
_rz(z,b1Q,'name',15,e,s,gg)
cs.pop()
_(oVQ,b1Q)
cs.pop()
}
oVQ.wxXCkey=1
cs.pop()
_(bMQ,cUQ)
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:view:19:6")
var o2Q=_mz(z,'view',['catchtouchend',16,'catchtouchmove',1,'catchtouchstart',2,'class',3,'style',4],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/swipe-action/index.wxml:slot:20:10")
var x3Q=_n('slot')
cs.pop()
_(o2Q,x3Q)
cs.pop()
_(tKQ,o2Q)
eLQ.wxXCkey=1
bMQ.wxXCkey=1
cs.pop()
_(r,tKQ)
return r
}
e_[x[94]]={f:m87,j:[],i:[],ti:[],ic:[]}
d_[x[95]]={}
var m88=function(e,s,r,gg){
var z=gz$gwx_89()
return r
}
e_[x[95]]={f:m88,j:[],i:[],ti:[],ic:[]}
d_[x[96]]={}
var m89=function(e,s,r,gg){
var z=gz$gwx_90()
cs.push("./wxcomponents/wux-weapp/tab/index.wxml:view:1:1")
var c6Q=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var h7Q=_v()
_(c6Q,h7Q)
if(_oz(z,2,e,s,gg)){h7Q.wxVkey=1
cs.push("./wxcomponents/wux-weapp/tab/index.wxml:view:2:6")
cs.pop()
}
else{h7Q.wxVkey=2
cs.push("./wxcomponents/wux-weapp/tab/index.wxml:block:3:6")
cs.push("./wxcomponents/wux-weapp/tab/index.wxml:slot:4:10")
var c9Q=_n('slot')
cs.pop()
_(h7Q,c9Q)
cs.pop()
}
var o8Q=_v()
_(c6Q,o8Q)
if(_oz(z,3,e,s,gg)){o8Q.wxVkey=1
cs.push("./wxcomponents/wux-weapp/tab/index.wxml:view:6:6")
cs.pop()
}
h7Q.wxXCkey=1
o8Q.wxXCkey=1
cs.pop()
_(r,c6Q)
return r
}
e_[x[96]]={f:m89,j:[],i:[],ti:[],ic:[]}
d_[x[97]]={}
var m90=function(e,s,r,gg){
var z=gz$gwx_91()
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:view:1:1")
var lAR=_mz(z,'view',['bindtap',0,'class',1,'style',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:view:2:3")
var aBR=_n('view')
_rz(z,aBR,'class',3,e,s,gg)
var tCR=_v()
_(aBR,tCR)
if(_oz(z,4,e,s,gg)){tCR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:block:3:4")
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:slot:4:5")
var eDR=_n('slot')
_rz(z,eDR,'name',5,e,s,gg)
cs.pop()
_(tCR,eDR)
cs.pop()
}
else{tCR.wxVkey=2
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:block:6:4")
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:slot:7:5")
var bER=_n('slot')
_rz(z,bER,'name',6,e,s,gg)
cs.pop()
_(tCR,bER)
cs.pop()
}
tCR.wxXCkey=1
cs.pop()
_(lAR,aBR)
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:view:10:3")
var oFR=_n('view')
_rz(z,oFR,'class',7,e,s,gg)
var xGR=_v()
_(oFR,xGR)
if(_oz(z,8,e,s,gg)){xGR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:text:11:4")
cs.pop()
}
else{xGR.wxVkey=2
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:block:12:7")
cs.push("./wxcomponents/wux-weapp/tabbar-item/index.wxml:slot:13:11")
var oHR=_n('slot')
cs.pop()
_(xGR,oHR)
cs.pop()
}
xGR.wxXCkey=1
cs.pop()
_(lAR,oFR)
cs.pop()
_(r,lAR)
return r
}
e_[x[97]]={f:m90,j:[],i:[],ti:[],ic:[]}
d_[x[98]]={}
var m91=function(e,s,r,gg){
var z=gz$gwx_92()
cs.push("./wxcomponents/wux-weapp/tabbar/index.wxml:slot:2:6")
var cJR=_n('slot')
cs.pop()
_(r,cJR)
return r
}
e_[x[98]]={f:m91,j:[],i:[],ti:[],ic:[]}
d_[x[99]]={}
var m92=function(e,s,r,gg){
var z=gz$gwx_93()
var oLR=_v()
_(r,oLR)
if(_oz(z,0,e,s,gg)){oLR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/tabs/index.wxml:scroll-view:1:1")
cs.push("./wxcomponents/wux-weapp/tabs/index.wxml:slot:2:6")
var cMR=_n('slot')
cs.pop()
_(oLR,cMR)
cs.pop()
}
else{oLR.wxVkey=2
cs.push("./wxcomponents/wux-weapp/tabs/index.wxml:view:4:2")
cs.push("./wxcomponents/wux-weapp/tabs/index.wxml:slot:5:6")
var oNR=_n('slot')
cs.pop()
_(oLR,oNR)
cs.pop()
}
oLR.wxXCkey=1
return r
}
e_[x[99]]={f:m92,j:[],i:[],ti:[],ic:[]}
d_[x[100]]={}
var m93=function(e,s,r,gg){
var z=gz$gwx_94()
var aPR=_v()
_(r,aPR)
if(_oz(z,0,e,s,gg)){aPR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/tag/index.wxml:view:1:1")
cs.push("./wxcomponents/wux-weapp/tag/index.wxml:view:1:1")
var tQR=_mz(z,'view',['bindtap',1,'class',1,'hoverClass',2,'style',3],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/tag/index.wxml:slot:2:6")
var bSR=_n('slot')
cs.pop()
_(tQR,bSR)
var eRR=_v()
_(tQR,eRR)
if(_oz(z,5,e,s,gg)){eRR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/tag/index.wxml:view:3:6")
cs.pop()
}
eRR.wxXCkey=1
cs.pop()
_(aPR,tQR)
cs.pop()
}
aPR.wxXCkey=1
return r
}
e_[x[100]]={f:m93,j:[],i:[],ti:[],ic:[]}
d_[x[101]]={}
var m94=function(e,s,r,gg){
var z=gz$gwx_95()
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:view:1:1")
var xUR=_n('view')
_rz(z,xUR,'class',0,e,s,gg)
var oVR=_v()
_(xUR,oVR)
if(_oz(z,1,e,s,gg)){oVR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:view:2:3")
cs.pop()
}
else{oVR.wxVkey=2
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:block:3:3")
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:slot:4:4")
var c1R=_n('slot')
cs.pop()
_(oVR,c1R)
cs.pop()
}
var fWR=_v()
_(xUR,fWR)
if(_oz(z,2,e,s,gg)){fWR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:view:32:3")
cs.pop()
}
var cXR=_v()
_(xUR,cXR)
if(_oz(z,3,e,s,gg)){cXR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:view:35:3")
cs.pop()
}
var hYR=_v()
_(xUR,hYR)
if(_oz(z,4,e,s,gg)){hYR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:view:38:3")
cs.pop()
}
else{hYR.wxVkey=2
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:block:39:3")
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:slot:40:4")
var o2R=_n('slot')
_rz(z,o2R,'name',5,e,s,gg)
cs.pop()
_(hYR,o2R)
cs.pop()
}
var oZR=_v()
_(xUR,oZR)
if(_oz(z,6,e,s,gg)){oZR.wxVkey=1
cs.push("./wxcomponents/wux-weapp/textarea/index.wxml:view:42:3")
cs.pop()
}
oVR.wxXCkey=1
fWR.wxXCkey=1
cXR.wxXCkey=1
hYR.wxXCkey=1
oZR.wxXCkey=1
cs.pop()
_(r,xUR)
return r
}
e_[x[101]]={f:m94,j:[],i:[],ti:[],ic:[]}
d_[x[102]]={}
var m95=function(e,s,r,gg){
var z=gz$gwx_96()
return r
}
e_[x[102]]={f:m95,j:[],i:[],ti:[],ic:[]}
d_[x[103]]={}
var m96=function(e,s,r,gg){
var z=gz$gwx_97()
cs.push("./wxcomponents/wux-weapp/timeline-item/index.wxml:view:1:1")
var t5R=_n('view')
_rz(z,t5R,'class',0,e,s,gg)
var e6R=_v()
_(t5R,e6R)
if(_oz(z,1,e,s,gg)){e6R.wxVkey=1
cs.push("./wxcomponents/wux-weapp/timeline-item/index.wxml:slot:4:7")
cs.push("./wxcomponents/wux-weapp/timeline-item/index.wxml:slot:4:7")
var b7R=_n('slot')
_rz(z,b7R,'name',2,e,s,gg)
cs.pop()
_(e6R,b7R)
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/timeline-item/index.wxml:slot:8:10")
var o8R=_n('slot')
cs.pop()
_(t5R,o8R)
e6R.wxXCkey=1
cs.pop()
_(r,t5R)
return r
}
e_[x[103]]={f:m96,j:[],i:[],ti:[],ic:[]}
d_[x[104]]={}
var m97=function(e,s,r,gg){
var z=gz$gwx_98()
cs.push("./wxcomponents/wux-weapp/timeline/index.wxml:slot:2:6")
var o0R=_n('slot')
cs.pop()
_(r,o0R)
return r
}
e_[x[104]]={f:m97,j:[],i:[],ti:[],ic:[]}
d_[x[105]]={}
var m98=function(e,s,r,gg){
var z=gz$gwx_99()
var cBS=_v()
_(r,cBS)
if(_oz(z,0,e,s,gg)){cBS.wxVkey=1
cs.push("./wxcomponents/wux-weapp/toast/index.wxml:wux-backdrop:1:2")
cs.push("./wxcomponents/wux-weapp/toast/index.wxml:wux-backdrop:1:2")
var hCS=_mz(z,'wux-backdrop',['id',1,'transparent',1],[],e,s,gg)
cs.pop()
_(cBS,hCS)
cs.pop()
}
cs.push("./wxcomponents/wux-weapp/toast/index.wxml:wux-animation-group:2:2")
var oDS=_mz(z,'wux-animation-group',['classNames',3,'in',1,'wuxClass',2],[],e,s,gg)
var cES=_v()
_(oDS,cES)
if(_oz(z,6,e,s,gg)){cES.wxVkey=1
cs.push("./wxcomponents/wux-weapp/toast/index.wxml:wux-icon:4:10")
cs.push("./wxcomponents/wux-weapp/toast/index.wxml:wux-icon:4:10")
var oFS=_mz(z,'wux-icon',['color',7,'size',1,'type',2,'wuxClass',3],[],e,s,gg)
cs.pop()
_(cES,oFS)
cs.pop()
}
cES.wxXCkey=1
cES.wxXCkey=3
cs.pop()
_(r,oDS)
cBS.wxXCkey=1
cBS.wxXCkey=3
return r
}
e_[x[105]]={f:m98,j:[],i:[],ti:[],ic:[]}
d_[x[106]]={}
var m99=function(e,s,r,gg){
var z=gz$gwx_100()
cs.push("./wxcomponents/wux-weapp/toptips/index.wxml:wux-animation-group:1:2")
var aHS=_mz(z,'wux-animation-group',['classNames',0,'in',1,'wuxClass',1],[],e,s,gg)
var tIS=_v()
_(aHS,tIS)
if(_oz(z,3,e,s,gg)){tIS.wxVkey=1
cs.push("./wxcomponents/wux-weapp/toptips/index.wxml:icon:3:10")
cs.pop()
}
tIS.wxXCkey=1
cs.pop()
_(r,aHS)
return r
}
e_[x[106]]={f:m99,j:[],i:[],ti:[],ic:[]}
d_[x[107]]={}
var m100=function(e,s,r,gg){
var z=gz$gwx_101()
cs.push("./wxcomponents/wux-weapp/upload/index.wxml:view:2:6")
var bKS=_n('view')
_rz(z,bKS,'class',0,e,s,gg)
var oLS=_v()
_(bKS,oLS)
if(_oz(z,1,e,s,gg)){oLS.wxVkey=1
cs.push("./wxcomponents/wux-weapp/upload/index.wxml:block:3:10")
var oNS=_v()
_(oLS,oNS)
cs.push("./wxcomponents/wux-weapp/upload/index.wxml:block:4:14")
var fOS=function(hQS,cPS,oRS,gg){
cs.push("./wxcomponents/wux-weapp/upload/index.wxml:view:5:18")
var oTS=_mz(z,'view',['bindtap',5,'class',1,'data-file',2,'data-index',3],[],hQS,cPS,gg)
var lUS=_v()
_(oTS,lUS)
if(_oz(z,9,hQS,cPS,gg)){lUS.wxVkey=1
cs.push("./wxcomponents/wux-weapp/upload/index.wxml:view:8:22")
cs.pop()
}
lUS.wxXCkey=1
cs.pop()
_(oRS,oTS)
return oRS
}
oNS.wxXCkey=2
_2z(z,3,fOS,e,s,gg,oNS,'file','index','uid')
cs.pop()
cs.pop()
}
var xMS=_v()
_(bKS,xMS)
if(_oz(z,10,e,s,gg)){xMS.wxVkey=1
cs.push("./wxcomponents/wux-weapp/upload/index.wxml:view:12:10")
cs.push("./wxcomponents/wux-weapp/upload/index.wxml:view:12:10")
var aVS=_mz(z,'view',['bindtap',11,'class',1],[],e,s,gg)
cs.push("./wxcomponents/wux-weapp/upload/index.wxml:slot:14:18")
var tWS=_n('slot')
cs.pop()
_(aVS,tWS)
cs.pop()
_(xMS,aVS)
cs.pop()
}
oLS.wxXCkey=1
xMS.wxXCkey=1
cs.pop()
_(r,bKS)
return r
}
e_[x[107]]={f:m100,j:[],i:[],ti:[],ic:[]}
d_[x[108]]={}
var m101=function(e,s,r,gg){
var z=gz$gwx_102()
return r
}
e_[x[108]]={f:m101,j:[],i:[],ti:[],ic:[]}
d_[x[109]]={}
var m102=function(e,s,r,gg){
var z=gz$gwx_103()
return r
}
e_[x[109]]={f:m102,j:[],i:[],ti:[],ic:[]}
d_[x[110]]={}
var m103=function(e,s,r,gg){
var z=gz$gwx_104()
cs.push("./wxcomponents/wux-weapp/wing-blank/index.wxml:slot:2:6")
var x1S=_n('slot')
cs.pop()
_(r,x1S)
return r
}
e_[x[110]]={f:m103,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/search/search","pages/userInfoAuth/userInfoAuth","pages/scMapDetail/scMapDetail","pages/my/my","pages/tel/tel","pages/banner/banner"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"知四方","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"usingComponents":{},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"知四方"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/banner/banner.json']={"navigationBarTitleText":"知四方","usingComponents":{}};
__wxAppCode__['pages/banner/banner.wxml']=$gwx('./pages/banner/banner.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"知四方","usingComponents":{"van-tab":"/wxcomponents/vant-weapp/tab/index","van-tabs":"/wxcomponents/vant-weapp/tabs/index","wux-divider":"/wxcomponents/wux-weapp/divider/index","wux-skeleton":"/wxcomponents/wux-weapp/skeleton/index","wux-skeleton-paragraph":"/wxcomponents/wux-weapp/skeleton-paragraph/index"},"enablePullDownRefresh":true};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/my/my.json']={"navigationBarTitleText":"知四方","usingComponents":{},"enablePullDownRefresh":true};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/scMapDetail/scMapDetail.json']={"navigationBarTitleText":"知四方","usingComponents":{"van-popup":"/wxcomponents/vant-weapp/popup/index"}};
__wxAppCode__['pages/scMapDetail/scMapDetail.wxml']=$gwx('./pages/scMapDetail/scMapDetail.wxml');

__wxAppCode__['pages/search/search.json']={"navigationBarTitleText":"知四方","usingComponents":{}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/tel/tel.json']={"navigationBarTitleText":"知四方","usingComponents":{}};
__wxAppCode__['pages/tel/tel.wxml']=$gwx('./pages/tel/tel.wxml');

__wxAppCode__['pages/userInfoAuth/userInfoAuth.json']={"navigationBarTitleText":"微信用户信息授权","usingComponents":{}};
__wxAppCode__['pages/userInfoAuth/userInfoAuth.wxml']=$gwx('./pages/userInfoAuth/userInfoAuth.wxml');

__wxAppCode__['wxcomponents/vant-weapp/info/index.json']={"component":true};
__wxAppCode__['wxcomponents/vant-weapp/info/index.wxml']=$gwx('./wxcomponents/vant-weapp/info/index.wxml');

__wxAppCode__['wxcomponents/vant-weapp/overlay/index.json']={"component":true,"usingComponents":{"van-transition":"../transition/index"}};
__wxAppCode__['wxcomponents/vant-weapp/overlay/index.wxml']=$gwx('./wxcomponents/vant-weapp/overlay/index.wxml');

__wxAppCode__['wxcomponents/vant-weapp/popup/index.json']={"component":true,"usingComponents":{"van-overlay":"../overlay/index"}};
__wxAppCode__['wxcomponents/vant-weapp/popup/index.wxml']=$gwx('./wxcomponents/vant-weapp/popup/index.wxml');

__wxAppCode__['wxcomponents/vant-weapp/tab/index.json']={"component":true};
__wxAppCode__['wxcomponents/vant-weapp/tab/index.wxml']=$gwx('./wxcomponents/vant-weapp/tab/index.wxml');

__wxAppCode__['wxcomponents/vant-weapp/tabs/index.json']={"component":true,"usingComponents":{"van-info":"../info/index"}};
__wxAppCode__['wxcomponents/vant-weapp/tabs/index.wxml']=$gwx('./wxcomponents/vant-weapp/tabs/index.wxml');

__wxAppCode__['wxcomponents/vant-weapp/transition/index.json']={"component":true};
__wxAppCode__['wxcomponents/vant-weapp/transition/index.wxml']=$gwx('./wxcomponents/vant-weapp/transition/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/accordion-group/index.json']={"component":true,"usingComponents":{"wux-cell-group":"../cell-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/accordion-group/index.wxml']=$gwx('./wxcomponents/wux-weapp/accordion-group/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/accordion/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/accordion/index.wxml']=$gwx('./wxcomponents/wux-weapp/accordion/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/actionsheet/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index","wux-backdrop":"../backdrop/index"}};
__wxAppCode__['wxcomponents/wux-weapp/actionsheet/index.wxml']=$gwx('./wxcomponents/wux-weapp/actionsheet/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/alert/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/alert/index.wxml']=$gwx('./wxcomponents/wux-weapp/alert/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/animation-group/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/animation-group/index.wxml']=$gwx('./wxcomponents/wux-weapp/animation-group/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/avatar/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/avatar/index.wxml']=$gwx('./wxcomponents/wux-weapp/avatar/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/backdrop/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/backdrop/index.wxml']=$gwx('./wxcomponents/wux-weapp/backdrop/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/badge/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/badge/index.wxml']=$gwx('./wxcomponents/wux-weapp/badge/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/barcode/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/barcode/index.wxml']=$gwx('./wxcomponents/wux-weapp/barcode/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/button/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/button/index.wxml']=$gwx('./wxcomponents/wux-weapp/button/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/calendar/index.json']={"component":true,"usingComponents":{"wux-popup":"../popup/index"}};
__wxAppCode__['wxcomponents/wux-weapp/calendar/index.wxml']=$gwx('./wxcomponents/wux-weapp/calendar/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/card/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/card/index.wxml']=$gwx('./wxcomponents/wux-weapp/card/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/cascader/index.json']={"component":true,"usingComponents":{"wux-popup":"../popup/index"}};
__wxAppCode__['wxcomponents/wux-weapp/cascader/index.wxml']=$gwx('./wxcomponents/wux-weapp/cascader/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/cell-group/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/cell-group/index.wxml']=$gwx('./wxcomponents/wux-weapp/cell-group/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/cell/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/cell/index.wxml']=$gwx('./wxcomponents/wux-weapp/cell/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/checkbox-group/index.json']={"component":true,"usingComponents":{"wux-cell-group":"../cell-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/checkbox-group/index.wxml']=$gwx('./wxcomponents/wux-weapp/checkbox-group/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/checkbox-item/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/checkbox-item/index.wxml']=$gwx('./wxcomponents/wux-weapp/checkbox-item/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/checkbox/index.json']={"component":true,"usingComponents":{"wux-cell":"../cell/index","wux-selectable":"../selectable/index"}};
__wxAppCode__['wxcomponents/wux-weapp/checkbox/index.wxml']=$gwx('./wxcomponents/wux-weapp/checkbox/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/circle/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/circle/index.wxml']=$gwx('./wxcomponents/wux-weapp/circle/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/col/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/col/index.wxml']=$gwx('./wxcomponents/wux-weapp/col/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/dialog/index.json']={"component":true,"usingComponents":{"wux-popup":"../popup/index"}};
__wxAppCode__['wxcomponents/wux-weapp/dialog/index.wxml']=$gwx('./wxcomponents/wux-weapp/dialog/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/divider/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/divider/index.wxml']=$gwx('./wxcomponents/wux-weapp/divider/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/fab-button/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/fab-button/index.wxml']=$gwx('./wxcomponents/wux-weapp/fab-button/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/filterbar/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index","wux-backdrop":"../backdrop/index","wux-radio-group":"../radio-group/index","wux-radio":"../radio/index","wux-checkbox-group":"../checkbox-group/index","wux-checkbox":"../checkbox/index"}};
__wxAppCode__['wxcomponents/wux-weapp/filterbar/index.wxml']=$gwx('./wxcomponents/wux-weapp/filterbar/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/floating-button/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/floating-button/index.wxml']=$gwx('./wxcomponents/wux-weapp/floating-button/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/gallery/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/gallery/index.wxml']=$gwx('./wxcomponents/wux-weapp/gallery/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/grid/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/grid/index.wxml']=$gwx('./wxcomponents/wux-weapp/grid/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/grids/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/grids/index.wxml']=$gwx('./wxcomponents/wux-weapp/grids/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/icon/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/icon/index.wxml']=$gwx('./wxcomponents/wux-weapp/icon/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/image/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/image/index.wxml']=$gwx('./wxcomponents/wux-weapp/image/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/index-item/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/index-item/index.wxml']=$gwx('./wxcomponents/wux-weapp/index-item/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/index/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/index/index.wxml']=$gwx('./wxcomponents/wux-weapp/index/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/input-number/index.json']={"component":true,"usingComponents":{"wux-icon":"../icon/index"}};
__wxAppCode__['wxcomponents/wux-weapp/input-number/index.wxml']=$gwx('./wxcomponents/wux-weapp/input-number/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/input/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/input/index.wxml']=$gwx('./wxcomponents/wux-weapp/input/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/keyboard/index.json']={"component":true,"usingComponents":{"wux-popup":"../popup/index"}};
__wxAppCode__['wxcomponents/wux-weapp/keyboard/index.wxml']=$gwx('./wxcomponents/wux-weapp/keyboard/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/loading/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index","wux-backdrop":"../backdrop/index"}};
__wxAppCode__['wxcomponents/wux-weapp/loading/index.wxml']=$gwx('./wxcomponents/wux-weapp/loading/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/media/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/media/index.wxml']=$gwx('./wxcomponents/wux-weapp/media/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/navbar/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/navbar/index.wxml']=$gwx('./wxcomponents/wux-weapp/navbar/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/notice-bar/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/notice-bar/index.wxml']=$gwx('./wxcomponents/wux-weapp/notice-bar/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/notification/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/notification/index.wxml']=$gwx('./wxcomponents/wux-weapp/notification/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/pagination/index.json']={"component":true,"usingComponents":{"wux-button":"../button/index"}};
__wxAppCode__['wxcomponents/wux-weapp/pagination/index.wxml']=$gwx('./wxcomponents/wux-weapp/pagination/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/popover/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/popover/index.wxml']=$gwx('./wxcomponents/wux-weapp/popover/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/popup/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index","wux-backdrop":"../backdrop/index"}};
__wxAppCode__['wxcomponents/wux-weapp/popup/index.wxml']=$gwx('./wxcomponents/wux-weapp/popup/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/progress/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/progress/index.wxml']=$gwx('./wxcomponents/wux-weapp/progress/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/prompt/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/prompt/index.wxml']=$gwx('./wxcomponents/wux-weapp/prompt/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/qrcode/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/qrcode/index.wxml']=$gwx('./wxcomponents/wux-weapp/qrcode/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/radio-group/index.json']={"component":true,"usingComponents":{"wux-cell-group":"../cell-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/radio-group/index.wxml']=$gwx('./wxcomponents/wux-weapp/radio-group/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/radio/index.json']={"component":true,"usingComponents":{"wux-cell":"../cell/index","wux-selectable":"../selectable/index"}};
__wxAppCode__['wxcomponents/wux-weapp/radio/index.wxml']=$gwx('./wxcomponents/wux-weapp/radio/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/rater/index.json']={"component":true,"usingComponents":{"wux-icon":"../icon/index"}};
__wxAppCode__['wxcomponents/wux-weapp/rater/index.wxml']=$gwx('./wxcomponents/wux-weapp/rater/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/refresher/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/refresher/index.wxml']=$gwx('./wxcomponents/wux-weapp/refresher/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/result/index.json']={"component":true,"usingComponents":{"wux-button":"../button/index"}};
__wxAppCode__['wxcomponents/wux-weapp/result/index.wxml']=$gwx('./wxcomponents/wux-weapp/result/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/row/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/row/index.wxml']=$gwx('./wxcomponents/wux-weapp/row/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/search-bar/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/search-bar/index.wxml']=$gwx('./wxcomponents/wux-weapp/search-bar/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/segmented-control/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/segmented-control/index.wxml']=$gwx('./wxcomponents/wux-weapp/segmented-control/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/select/index.json']={"component":true,"usingComponents":{"wux-popup":"../popup/index","wux-radio":"../radio/index","wux-radio-group":"../radio-group/index","wux-checkbox":"../checkbox/index","wux-checkbox-group":"../checkbox-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/select/index.wxml']=$gwx('./wxcomponents/wux-weapp/select/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/selectable/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/selectable/index.wxml']=$gwx('./wxcomponents/wux-weapp/selectable/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/skeleton-avatar/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/skeleton-avatar/index.wxml']=$gwx('./wxcomponents/wux-weapp/skeleton-avatar/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/skeleton-paragraph/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/skeleton-paragraph/index.wxml']=$gwx('./wxcomponents/wux-weapp/skeleton-paragraph/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/skeleton/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/skeleton/index.wxml']=$gwx('./wxcomponents/wux-weapp/skeleton/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/slider/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/slider/index.wxml']=$gwx('./wxcomponents/wux-weapp/slider/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/spin/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/spin/index.wxml']=$gwx('./wxcomponents/wux-weapp/spin/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/step/index.json']={"component":true,"usingComponents":{"wux-icon":"../icon/index"}};
__wxAppCode__['wxcomponents/wux-weapp/step/index.wxml']=$gwx('./wxcomponents/wux-weapp/step/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/steps/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/steps/index.wxml']=$gwx('./wxcomponents/wux-weapp/steps/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/sticky-item/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/sticky-item/index.wxml']=$gwx('./wxcomponents/wux-weapp/sticky-item/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/sticky/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/sticky/index.wxml']=$gwx('./wxcomponents/wux-weapp/sticky/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/swipe-action-group/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/swipe-action-group/index.wxml']=$gwx('./wxcomponents/wux-weapp/swipe-action-group/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/swipe-action/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/swipe-action/index.wxml']=$gwx('./wxcomponents/wux-weapp/swipe-action/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/switch/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/switch/index.wxml']=$gwx('./wxcomponents/wux-weapp/switch/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/tab/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/tab/index.wxml']=$gwx('./wxcomponents/wux-weapp/tab/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/tabbar-item/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/tabbar-item/index.wxml']=$gwx('./wxcomponents/wux-weapp/tabbar-item/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/tabbar/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/tabbar/index.wxml']=$gwx('./wxcomponents/wux-weapp/tabbar/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/tabs/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/tabs/index.wxml']=$gwx('./wxcomponents/wux-weapp/tabs/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/tag/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/tag/index.wxml']=$gwx('./wxcomponents/wux-weapp/tag/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/textarea/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/textarea/index.wxml']=$gwx('./wxcomponents/wux-weapp/textarea/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/timeago/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/timeago/index.wxml']=$gwx('./wxcomponents/wux-weapp/timeago/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/timeline-item/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/timeline-item/index.wxml']=$gwx('./wxcomponents/wux-weapp/timeline-item/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/timeline/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/timeline/index.wxml']=$gwx('./wxcomponents/wux-weapp/timeline/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/toast/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index","wux-backdrop":"../backdrop/index","wux-icon":"../icon/index"}};
__wxAppCode__['wxcomponents/wux-weapp/toast/index.wxml']=$gwx('./wxcomponents/wux-weapp/toast/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/toptips/index.json']={"component":true,"usingComponents":{"wux-animation-group":"../animation-group/index"}};
__wxAppCode__['wxcomponents/wux-weapp/toptips/index.wxml']=$gwx('./wxcomponents/wux-weapp/toptips/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/upload/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/upload/index.wxml']=$gwx('./wxcomponents/wux-weapp/upload/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/vcode/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/vcode/index.wxml']=$gwx('./wxcomponents/wux-weapp/vcode/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/white-space/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/white-space/index.wxml']=$gwx('./wxcomponents/wux-weapp/white-space/index.wxml');

__wxAppCode__['wxcomponents/wux-weapp/wing-blank/index.json']={"component":true};
__wxAppCode__['wxcomponents/wux-weapp/wing-blank/index.wxml']=$gwx('./wxcomponents/wux-weapp/wing-blank/index.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"], { 4510: function _(n, e, t) {"use strict";t("ce60");var o = r(t("f3d3")),u = r(t("db5c"));function r(n) {return n && n.__esModule ? n : { default: n };}function c(n) {for (var e = 1; e < arguments.length; e++) {var t = null != arguments[e] ? arguments[e] : {},o = Object.keys(t);"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function (n) {return Object.getOwnPropertyDescriptor(t, n).enumerable;}))), o.forEach(function (e) {f(n, e, t[e]);});}return n;}function f(n, e, t) {return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;}o.default.config.productionTip = !1, u.default.mpType = "app";var i = new o.default(c({}, u.default));i.$mount();}, 4738: function _(n, e, t) {"use strict";Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;o(t("784f"));function o(n) {return n && n.__esModule ? n : { default: n };}t("bec1");var u = { onLaunch: function onLaunch() {}, onShow: function onShow() {console.log("App Show");}, onHide: function onHide() {console.log("App Hide");}, onAudioInterruptionBegin: function onAudioInterruptionBegin() {console.log("audio全局被中断");}, methods: {} };e.default = u;}, "4f25": function f25(n, e, t) {}, "6dd1": function dd1(n, e, t) {"use strict";var o = t("4f25"),u = t.n(o);u.a;}, ba37: function ba37(n, e, t) {"use strict";t.r(e);var o = t("4738"),u = t.n(o);for (var r in o) {"default" !== r && function (n) {t.d(e, n, function () {return o[n];});}(r);}e["default"] = u.a;}, db5c: function db5c(n, e, t) {"use strict";t.r(e);var o = t("ba37");for (var u in o) {"default" !== u && function (n) {t.d(e, n, function () {return o[n];});}(u);}t("6dd1");var r,c,f = t("2877"),i = Object(f["a"])(o["default"], r, c, !1, null, null, null);e["default"] = i.exports;} }, [["4510", "common/runtime", "common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"649d":function(t,e,n){"use strict";n.r(e);var r=function(t){return"function"===typeof t},o=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})},i=/^on|^create|Sync$|Manager$|^pause/,a=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(t){return(!i.test(t)||"createBLEConnection"===t)&&!~a.indexOf(t)},c=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(a.success)||r(a.fail)||r(a.complete)?t.apply(void 0,[a].concat(n)):o(new Promise(function(e,r){t.apply(void 0,[Object.assign({},a,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}},u=1e-4,f=750,l=!1,p=0,d=0;function h(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;p=r,d=n,l="ios"===e}function v(t,e){if(0===p&&h(),0===t)return 0;var n=t/f*(e||p);return n<0&&(n=-n),n=Math.floor(n+u),0===n?1!==d&&l?.5:1:t<0?-n:n}function y(t){return __requireNativePlugin__(t)}var g={},m={os:{plus:!0}};"undefined"!==typeof Proxy?g=new Proxy({},{get:function(t,e){return m.hasOwnProperty(e)?m[e]:"upx2px"===e?v:"requireNativePlugin"===e?y:wx.hasOwnProperty(e)?s(e)?c(wx[e]):wx[e]:void 0}}):(g.upx2px=v,g.requireNativePlugin=y,Object.keys(m).forEach(function(t){g[t]=m[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(s(t)?g[t]=c(wx[t]):g[t]=wx[t])}));var _=g;e["default"]=_},"65d7":function(t,e,n){"use strict";(function(t){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=0,a=function(){function e(){n(this,e)}return o(e,[{key:"rq",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i<0&&(i=0),e.loading&&(0===i&&t.showLoading({title:"加载中"}),i++),e["header"]||(e["header"]={"content-type":"application/x-www-form-urlencoded",token:t.getStorageSync("login-token")}),new Promise(function(n){t.request({url:e["url"],data:e["data"],header:e["header"],method:e["method"],dataType:e["dataType"],responseType:e["responseType"],success:function(r){if(214!==r.data.code)n(r.data);else{t.showToast({title:"登录过期，请重新登录",icon:"none"});var o=getCurrentPages(),i=o[o.length-1].route.slice(o[o.length-1].route.lastIndexOf("/")+1);t.redirectTo({url:"/pages/userInfoAuth/userInfoAuth?goBack="+i+(e["goBackWithParmas"]?"&goBackWithParmas="+JSON.stringify(e["goBackWithParmas"]):"")})}},fail:function(t){n({code:666,message:"fail级别错误"})},complete:function(){e.loading&&(i--,0===i&&t.hideLoading())}})})}}]),e}(),s=new a;e.default=s}).call(this,n("649d")["default"])},"784f":function(t,e,n){"use strict";var r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="https://zsf.gzeducard.net",a="/wxapi",s=(r={checkToken:i+a+"/validateToken",login:i+a+"/login",register:i+a+"/register",banner:i+a+"/banner",scHotList:i+a+"/hotScenic",moreSpotList:i+a+"/scenic",getScType:i+a+"/scenicType",getNearbySc:i+a+"/nearbyScenic"},o(r,"getNearbySc",i+a+"/nearbyScenic"),o(r,"searchList",i+a+"/searchList"),o(r,"search",i+a+"/search"),o(r,"voice",i+a+"/voice"),o(r,"unlockScenic",i+a+"/unlockScenic"),o(r,"localCreateOrder",i+a+"/local/createOrder"),o(r,"payOrder",i+a+"/local/orderPay"),r);e.default=s},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=w;var l="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(I([])));m&&m!==r&&o.call(m,a)&&(y=m);var _=O.prototype=$.prototype=Object.create(y);x.prototype=_.constructor=O,O.constructor=x,O[c]=x.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},f.awrap=function(t){return{__await:t}},k(A.prototype),A.prototype[s]=function(){return this},f.AsyncIterator=A,f.async=function(t,e,n,r){var o=new A(w(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=I,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof $?e:$,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=S(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function $(){}function x(){}function O(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function A(t){function e(n,r,i,a){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function S(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return T()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},bec1:function(t,e,n){"use strict";(function(e){var r=i(n("a34a")),o=i(n("784f"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)})}}var f=function(){var t=u(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getStorageSync("login-token"),t.abrupt("return",new Promise(function(t){n?e.request({url:o.default.checkToken,header:{"content-type":"application/x-www-form-urlencoded",token:n},success:function(e){200===e.data.code?t(!0):214===e.data.code&&t(!1)},fail:function(e){t(!1)}}):t(!1)}));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=u(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t){wx.login({success:function(n){console.log("start login"),e.request({url:o.default.login,data:{code:n.code},header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){200===n.data.code?(e.setStorageSync("login-token",n.data.data.token),t(!0)):1e3===n.data.code&&t(!1)},fail:function(t){e.reLaunch({url:"/pages/userInfoAuth/userInfoAuth"})}})},fail:function(){e.reLaunch({url:"/pages/userInfoAuth/userInfoAuth"})}})}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),p=function(){var t=u(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t){e.getUserInfo({success:function(n){var r=n;e.login({success:function(n){e.request({url:o.default.register,method:"POST",data:a({code:n.code},r),header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){200===n.data.code?(e.setStorageSync("login-token",n.data.data.token),t(!0)):t(!0)},fail:function(){t(!1)}})},fail:function(){t(!1)}})}})}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),d=function(t){if(console.log(t,"val"),t>=1e4){var e=String((t/1e4).toFixed(1));return"0"==e.slice(e.indexOf(".")+1)[0]&&(e=e.slice(0,e.indexOf("."))),e+"万"}return t};t.exports={isLogin:f,registering:p,logining:l,handleNumber:d}}).call(this,n("649d")["default"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ce60:function(t,e,n){},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,l=c.length;f<l&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function l(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function w(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,x=b(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),O=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/([^-])([A-Z])/g,A=b(function(t){return t.replace(k,"$1-$2").replace(k,"$1-$2").toLowerCase()});function S(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function j(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function E(t,e,n){}var I=function(t,e,n){return!1},T=function(t){return t};function N(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function L(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function D(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R="data-server-rendered",B=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:E,parsePlatformTagName:T,mustUseProp:I,_lifecycleHooks:M},V=Object.freeze({});function U(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function q(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var z=E;function J(t,e,n){if(F.errorHandler)F.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var G,K="__proto__"in{},X="undefined"!==typeof window,Y=["mpvue-runtime"].join(),Z=(Y&&/msie|trident/.test(Y),Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),Q=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)),tt=(Y&&/chrome\/\d+/.test(Y),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===G&&(G=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),G},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Q&&setTimeout(E)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){J(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){m(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function lt(t){ut.target&&ft.push(ut.target),ut.target=t}function pt(){ut.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];W(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),yt={shouldConvert:!0},gt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=K?mt:_t;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function _t(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];W(t,i,e[i])}}function wt(t,e){var n;if(u(t))return w(t,"__ob__")&&t.__ob__ instanceof gt?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new gt(t)),e&&n&&n.vmCount++,n}function bt(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&wt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&Ot(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&wt(e),i.notify())}})}}function $t(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(w(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(bt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ot(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ot(e)}gt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)bt(t,e[n],t[e[n]])},gt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)wt(t[e])};var kt=F.optionMergeStrategies;function At(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],w(t,n)?l(r)&&l(o)&&At(r,o):$t(t,n,o);return t}function St(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?At(r,o):o}:void 0:e?t?function(){return At("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function Pt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function jt(t,e){var n=Object.create(t||null);return e?j(n,e):n}kt.data=function(t,e,n){return n?St(t,e,n):e&&"function"!==typeof e?t:St.call(this,t,e)},M.forEach(function(t){kt[t]=Pt}),B.forEach(function(t){kt[t+"s"]=jt}),kt.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in j(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},kt.props=kt.methods=kt.inject=kt.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return j(n,t),j(n,e),n},kt.provide=St;var Ct=function(t,e){return void 0===e?t:e};function Et(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(l(e))for(var a in e)r=e[a],o=x(a),i[o]=l(r)?r:{type:r};t.props=i}}function It(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Nt(t,e,n){"function"===typeof e&&(e=e.options),Et(e),It(e),Tt(e);var r=e.extends;if(r&&(t=Nt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Nt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)w(t,a)||c(a);function c(r){var o=kt[r]||Ct;s[r]=o(t[r],e[r],n,r)}return s}function Lt(t,e,n,r){if("string"===typeof n){var o=t[e];if(w(o,n))return o[n];var i=x(n);if(w(o,i))return o[i];var a=O(i);if(w(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Dt(t,e,n,r){var o=e[t],i=!w(n,t),a=n[t];if(Mt(Boolean,o.type)&&(i&&!w(o,"default")?a=!1:Mt(String,o.type)||""!==a&&a!==A(t)||(a=!0)),void 0===a){a=Rt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,wt(a),yt.shouldConvert=s}return a}function Rt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Mt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Ft=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Vt={child:{}};Vt.child.get=function(){return this.componentInstance},Object.defineProperties(Ft.prototype,Vt);var Ut=function(t){void 0===t&&(t="");var e=new Ft;return e.text=t,e.isComment=!0,e};function Wt(t){return new Ft(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Ft(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function qt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var zt,Jt=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Gt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Jt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Gt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=Jt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=A(u);Yt(a,c,u,f,!0)||Yt(a,s,u,f,!1)}return a}}function Yt(t,e,n,r,o){if(i(e)){if(w(e,n))return t[n]=e[n],o||delete e[n],!0;if(w(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Zt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Qt(t){return c(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Wt(r)):te(r)&&te(s)?u[u.length-1]=Wt(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Ut();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=D(function(n){t.resolved=ne(n,e),s||c()}),l=D(function(e){i(t.errorComp)&&(t.error=!0,c())}),p=t(f,l);return u(p)&&("function"===typeof p.then?o(t.resolved)&&p.then(f,l):i(p.component)&&"function"===typeof p.component.then&&(p.component.then(f,l),i(p.error)&&(t.errorComp=ne(p.error,e)),i(p.loading)&&(t.loadingComp=ne(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},p.delay||200)),i(p.timeout)&&setTimeout(function(){o(t.resolved)&&l(null)},p.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?zt.$once(t,e):zt.$on(t,e)}function ce(t,e){zt.$off(t,e)}function ue(t,e,n){zt=t,Kt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?P(r):r;for(var o=P(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){J(n,e,'event handler for "'+t+'"')}}return e}}function le(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(pe)||(n.default=r),n}function pe(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&$e(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$e(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$e(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ge(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ut),$e(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new De(t,r,E),n=!1,null==t.$vnode&&(t._isMounted=!0,$e(t,"mounted")),t}function me(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==V);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Dt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=le(o,r.context),t.$forceUpdate())}function _e(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function we(t,e){if(e){if(t._directInactive=!1,_e(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)we(t.$children[n]);$e(t,"activated")}}function be(t,e){if((!e||(t._directInactive=!0,!_e(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);$e(t,"deactivated")}}function $e(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){J(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Oe=[],ke={},Ae=!1,Se=!1,Pe=0;function je(){Pe=xe.length=Oe.length=0,ke={},Ae=Se=!1}function Ce(){var t,e;for(Se=!0,xe.sort(function(t,e){return t.id-e.id}),Pe=0;Pe<xe.length;Pe++)t=xe[Pe],e=t.id,ke[e]=null,t.run();var n=Oe.slice(),r=xe.slice();je(),Te(n),Ee(r),rt&&F.devtools&&rt.emit("flush")}function Ee(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&$e(r,"updated")}}function Ie(t){t._inactive=!1,Oe.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,we(t[e],!0)}function Ne(t){var e=t.id;if(null==ke[e]){if(ke[e]=!0,Se){var n=xe.length-1;while(n>Pe&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);Ae||(Ae=!0,st(Ce))}}var Le=0,De=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Le,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};De.prototype.get=function(){var t;lt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;J(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),pt(),this.cleanupDeps()}return t},De.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},De.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},De.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ne(this)},De.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){J(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},De.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},De.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},De.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Re=new it;function Be(t){Re.clear(),Me(t,Re)}function Me(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Me(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Me(t[r[n]],e)}}}var Fe={enumerable:!0,configurable:!0,get:E,set:E};function Ve(t,e,n){Fe.get=function(){return this[e][n]},Fe.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Fe)}function Ue(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Xe(t,e.methods),e.data?He(t):wt(t._data={},!0),e.computed&&Je(t,e.computed),e.watch&&e.watch!==tt&&Ye(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Dt(i,e,n,t);bt(r,i,a),i in t||Ve(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?qe(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&w(r,i)||U(i)||Ve(t,"_data",i)}wt(e,!0)}function qe(t,e){try{return t.call(e)}catch(n){return J(n,e,"data()"),{}}}var ze={lazy:!0};function Je(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new De(t,i,E,ze),r in t||Ge(t,r,o)}}function Ge(t,e,n){"function"===typeof n?(Fe.get=Ke(e),Fe.set=E):(Fe.get=n.get?!1!==n.cache?Ke(e):n.get:E,Fe.set=n.set?n.set:E),Object.defineProperty(t,e,Fe)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?E:S(e[n],t)}function Ye(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Ze(t,n,r[o]);else Ze(t,n,r)}}function Ze(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Qe(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return Ze(r,t,e,n);n=n||{},n.user=!0;var o=new De(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){bt(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Dt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},l=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return le(o,r)}});return l instanceof Ft&&(l.functionalContext=r,l.functionalOptions=t.options,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,$e(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ie(n):we(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?be(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&pn(t.options,e);var l=Xt(e,t,s);if(a(t.options.functional))return rn(t,l,e,n,r);var p=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new Ft("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?ln(o,r):o}}function ln(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function pn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Ut();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ut();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Qt(r):o===dn&&(r=Zt(r)),"string"===typeof e)?(s=F.getTagNamespace(e),a=F.isReservedTag(e)?new Ft(F.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Lt(t.$options,"components",e))?cn(c,n,t,r,e):new Ft(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&gn(a,s),a):Ut()}function gn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&gn(a,e)}}function mn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function _n(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=j(j({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function wn(t){return Lt(this.$options,"filters",t,!0)||T}function bn(t,e,n){var r=F.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function $n(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=C(n));var a=function(a){if("class"===a||"style"===a||g(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||F.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?qt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),kn(n,"__static__"+t,!1),n)}function On(t,e,n){return kn(t,"__once__"+e+(n?"_"+n:""),!0),t}function kn(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&An(t[r],e+"_"+r,n);else An(t,e,n)}function An(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Sn(t,e){if(e)if(l(e)){var n=t.on=t.on?j({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Pn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=le(t.$options._renderChildren,n),t.$scopedSlots=V,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;bt(t,"$attrs",r&&r.attrs,null,!0),bt(t,"$listeners",r&&r.on,null,!0)}function jn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=qt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||V,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){J(n,e,"render function"),t=e._vnode}return t instanceof Ft||(t=Ut()),t.parent=a,t},t.prototype._o=On,t.prototype._n=v,t.prototype._s=h,t.prototype._l=mn,t.prototype._t=_n,t.prototype._q=N,t.prototype._i=L,t.prototype._m=xn,t.prototype._f=wn,t.prototype._k=bn,t.prototype._b=$n,t.prototype._v=Wt,t.prototype._e=Ut,t.prototype._u=de,t.prototype._g=Sn}var Cn=0;function En(t){t.prototype._init=function(t){var e=this;e._uid=Cn++,e._isVue=!0,t&&t._isComponent?In(e,t):e.$options=Nt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Pn(e),$e(e,"beforeCreate"),en(e),Ue(e),tn(e),$e(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function In(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Nn(t);o&&j(t.extendOptions,o),e=t.options=Nt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Nn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Ln(n[i],r[i],o[i]));return e}function Ln(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Dn(t){this._init(t)}function Rn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Nt(this.options,t),this}}function Mn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Nt(n.options,t),a["super"]=n,a.options.props&&Fn(a),a.options.computed&&Vn(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=j({},a.options),o[r]=a,a}}function Fn(t){var e=t.options.props;for(var n in e)Ve(t.prototype,"_props",n)}function Vn(t){var e=t.options.computed;for(var n in e)Ge(t.prototype,n,e[n])}function Un(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}En(Dn),Qe(Dn),fe(Dn),ye(Dn),jn(Dn);var Wn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function qn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function zn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&Jn(o),t[r]=null)}}}function Jn(t){t&&t.componentInstance.$destroy()}var Gn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Jn(t.cache[e])},watch:{include:function(t){zn(this.cache,this._vnode,function(e){return qn(t,e)})},exclude:function(t){zn(this.cache,this._vnode,function(e){return!qn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!qn(this.include,n)||this.exclude&&qn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:Gn};function Xn(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:z,extend:j,mergeOptions:Nt,defineReactive:bt},t.set=$t,t.delete=xt,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,j(t.options.components,Kn),Rn(t),Bn(t),Mn(t),Un(t)}Xn(Dn),Object.defineProperty(Dn.prototype,"$isServer",{get:nt}),Object.defineProperty(Dn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Dn.version="2.4.1",Dn.mpvueVersion="1.0.12";var Yn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Zn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Qn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function lr(t,e){}function pr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var gr=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:lr,parentNode:pr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:yr}),mr={create:function(t,e){_r(e)},update:function(t,e){t.data.ref!==e.data.ref&&(_r(t,!0),_r(e))},destroy:function(t){_r(t,!0)}};function _r(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?m(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var wr=new Ft("",{},[]),br=["create","activate","update","remove","destroy"];function $r(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Or(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function kr(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<br.length;++e)for(r[br[e]]=[],n=0;n<s.length;++n)i(s[n][br[e]])&&r[br[e]].push(s[n][br[e]]);function f(t){return new Ft(u.tagName(t).toLowerCase(),{},[],void 0,t)}function l(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),$(t),_(t,c,e),i(s)&&b(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),m(n,t.elm,r)):(t.elm=u.createTextNode(t.text),m(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&g(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(b(t,e),$(t)):(_r(t),e.push(t))}function g(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](wr,s);e.push(s);break}m(n,t.elm,o)}function m(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function b(t,n){for(var o=0;o<r.create.length;++o)r.create[o](wr,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(wr,t),i(e.insert)&&n.push(t))}function $(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function O(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function k(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(A(o),O(o)):p(o.elm))}}function A(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=l(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&A(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else p(t.elm)}function S(t,e,n,r,a){var s,c,f,l,p=0,h=0,v=e.length-1,y=e[0],g=e[v],m=n.length-1,_=n[0],w=n[m],b=!a;while(p<=v&&h<=m)o(y)?y=e[++p]:o(g)?g=e[--v]:$r(y,_)?(P(y,_,r),y=e[++p],_=n[++h]):$r(g,w)?(P(g,w,r),g=e[--v],w=n[--m]):$r(y,w)?(P(y,w,r),b&&u.insertBefore(t,y.elm,u.nextSibling(g.elm)),y=e[++p],w=n[--m]):$r(g,_)?(P(g,_,r),b&&u.insertBefore(t,g.elm,y.elm),g=e[--v],_=n[++h]):(o(s)&&(s=Or(e,p,v)),c=i(_.key)?s[_.key]:null,o(c)?(d(_,r,t,y.elm),_=n[++h]):(f=e[c],$r(f,_)?(P(f,_,r),e[c]=void 0,b&&u.insertBefore(t,f.elm,y.elm),_=n[++h]):(d(_,r,t,y.elm),_=n[++h])));p>v?(l=o(n[m+1])?null:n[m+1].elm,x(t,l,n,h,m,r)):h>m&&k(t,e,p,v)}function P(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?E(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,l=e.data;i(l)&&i(f=l.hook)&&i(f=f.prepatch)&&f(t,e);var p=t.children,d=e.children;if(i(l)&&w(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=l.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(p)&&i(d)?p!==d&&S(c,p,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(p)?k(c,p,0,p.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(l)&&i(f=l.hook)&&i(f=f.postpatch)&&f(t,e)}}}function j(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var C=y("attrs,style,class,staticClass,staticStyle,key");function E(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,l=0;l<c.length;l++){if(!f||!E(f,c[l],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else _(n,c,r);if(i(s))for(var p in s)if(!C(p)){b(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,l){if(!o(e)){var p=!1,h=[];if(o(t))p=!0,d(e,h,c,l);else{var v=i(t.nodeType);if(!v&&$r(t,e))P(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),a(n)&&E(t,e,h))return j(e,h,!0),t;t=f(t)}var y=t.elm,g=u.parentNode(y);if(d(e,h,y._leaveCb?null:g,u.nextSibling(y)),i(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if(w(e))for(var _=0;_<r.create.length;++_)r.create[_](wr,e.parent)}i(g)?k(g,[t],0,0):i(t.tag)&&O(t)}}return j(e,h,p),e.elm}i(t)&&O(t)}}var Ar=[mr],Sr=kr({nodeOps:gr,modules:Ar});function Pr(){Sr.apply(this,arguments),this.$updateDataToMP()}function jr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){J(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return jr(t,e,r)}),o}function Cr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Er(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(l(t))for(var a in t)o=t[a],i=x(a),e[i]=l(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Ir(t){var e=t.$options.properties,n=t.$options.props,r={};return Er(e,r,t),Er(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Ve(t,"_mpProps",n),e[n]=void 0)}),wt(e,!0)}function Nr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?jr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,jr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,jr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,jr(r,"onShow",t)},onHide:function(){o.status="hide",jr(r,"onHide")},onError:function(t){jr(r,"onError",t)},onUniNViewMessage:function(t){jr(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Ir(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",jr(r,"attached")},ready:function(){o.status="ready",jr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){jr(r,"moved")},detached:function(){o.status="detached",jr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",Cr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),jr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",jr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",jr(r,"onReady"),n()},onHide:function(){o.status="hide",jr(r,"onHide")},onUnload:function(){o.status="unload",jr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){jr(r,"onPullDownRefresh")},onReachBottom:function(){jr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return jr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){jr(r,"onPageScroll",t)},onTabItemTap:function(t){jr(r,"onTabItemTap",t)}})}}function Lr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Dr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Dr(r,e):e):e}function Rr(t){var e=Dr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Lr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Rr(t))}function Mr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var l=Date.now();s||!1!==n.leading||(s=l);var p=e-(l-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],p<=0||p>e?(clearTimeout(a),a=null,s=l,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,p)),i}}var Fr=Mr(function(t,e){t(e)},50);function Vr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Ur(){var t=Vr(this);if(t){var e=JSON.parse(JSON.stringify(Rr(this)));Fr(t.setData.bind(t),r(e,t.data))}}function Wr(){var t=Vr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function qr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(qr(t,e,n))})}):a.forEach(function(t){r=r.concat(qr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function zr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:E,preventDefault:E};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function Jr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],l=qr(u._vnode,c,f);if(l.length){var p=zr(t);if(1===l.length){var d=l[0](p);return d}l.forEach(function(t){return t(p)})}}}return Dn.config.mustUseProp=Qn,Dn.config.isReservedTag=Yn,Dn.config.isReservedAttr=Zn,Dn.config.getTagNamespace=tr,Dn.config.isUnknownElement=er,Dn.prototype.__patch__=Pr,Dn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return ge(n,void 0,void 0)})}return ge(this,void 0,void 0)},Dn.prototype._initMP=Nr,Dn.prototype.$updateDataToMP=Ur,Dn.prototype._initDataToMP=Wr,Dn.prototype.$handleProxyWithVue=Jr,Dn})}).call(this,n("c8ba"))}}]);
});
define('wxcomponents/vant-weapp/common/color.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.GREEN = exports.BLUE = exports.RED = void 0;var RED = '#f44';exports.RED = RED;
var BLUE = '#1989fa';exports.BLUE = BLUE;
var GREEN = '#07c160';exports.GREEN = GREEN;
});
define('wxcomponents/vant-weapp/common/component.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.VantComponent = VantComponent;var _basic = require("../mixins/basic");
var _index = require("../mixins/observer/index");function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}
function VantComponent() {var vantOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = {};
  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses' });var

  relation = vantOptions.relation;
  if (relation) {
    options.relations = Object.assign(options.relations || {}, _defineProperty({}, "../".concat(
    relation.name, "/index"), relation));

  }
  // add default externalClasses
  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class');
  // add default behaviors
  options.behaviors = options.behaviors || [];
  options.behaviors.push(_basic.basic);
  // map field to form-field behavior
  if (vantOptions.field) {
    options.behaviors.push('wx://form-field');
  }
  // add default options
  options.options = {
    multipleSlots: true,
    addGlobalClass: true };

  (0, _index.observe)(vantOptions, options);
  Component(options);
}
});
define('wxcomponents/vant-weapp/common/utils.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isObj = isObj;exports.isDef = isDef;exports.isNumber = isNumber;exports.range = range;function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
  return /^\d+$/.test(value);
}
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
});
define('wxcomponents/vant-weapp/mixins/basic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.basic = void 0;var basic = Behavior({
  methods: {
    $emit: function $emit() {
      this.triggerEvent.apply(this, arguments);
    },
    getRect: function getRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        wx.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    } } });exports.basic = basic;
});
define('wxcomponents/vant-weapp/mixins/button.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.button = void 0;var button = Behavior({
  externalClasses: ['hover-class'],
  properties: {
    id: String,
    lang: {
      type: String,
      value: 'en' },

    businessId: Number,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    ariaLabel: String } });exports.button = button;
});
define('wxcomponents/vant-weapp/mixins/iphonex.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.iphonex = void 0;var isIPhoneX = null;
function getIsIPhoneX() {
  return new Promise(function (resolve, reject) {
    if (isIPhoneX !== null) {
      resolve(isIPhoneX);
    } else
    {
      wx.getSystemInfo({
        success: function success(_ref) {var model = _ref.model,screenHeight = _ref.screenHeight;
          var iphoneX = /iphone x/i.test(model);
          var iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
          isIPhoneX = iphoneX || iphoneNew;
          resolve(isIPhoneX);
        },
        fail: reject });

    }
  });
}
var iphonex = Behavior({
  properties: {
    safeAreaInsetBottom: {
      type: Boolean,
      value: true } },


  created: function created() {var _this = this;
    getIsIPhoneX().then(function (isIPhoneX) {
      _this.set({ isIPhoneX: isIPhoneX });
    });
  } });exports.iphonex = iphonex;
});
define('wxcomponents/vant-weapp/mixins/link.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.link = void 0;var link = Behavior({
  properties: {
    url: String,
    linkType: {
      type: String,
      value: 'navigateTo' } },


  methods: {
    jumpLink: function jumpLink() {var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this.data[urlKey];
      if (url) {
        wx[this.data.linkType]({ url: url });
      }
    } } });exports.link = link;
});
define('wxcomponents/vant-weapp/mixins/observer/behavior.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.behavior = void 0;function setAsync(context, data) {
  return new Promise(function (resolve) {
    context.setData(data, resolve);
  });
}
;
var behavior = Behavior({
  created: function created() {var _this = this;
    if (!this.$options) {
      return;
    }
    var cache = {};var _this$$options =
    this.$options(),computed = _this$$options.computed;
    var keys = Object.keys(computed);
    this.calcComputed = function () {
      var needUpdate = {};
      keys.forEach(function (key) {
        var value = computed[key].call(_this);
        if (cache[key] !== value) {
          cache[key] = needUpdate[key] = value;
        }
      });
      return needUpdate;
    };
  },
  attached: function attached() {
    this.set();
  },
  methods: {
    // set data and set computed data
    set: function set(data, callback) {var _this2 = this;
      var stack = [];
      if (data) {
        stack.push(setAsync(this, data));
      }
      if (this.calcComputed) {
        stack.push(setAsync(this, this.calcComputed()));
      }
      return Promise.all(stack).then(function (res) {
        if (callback && typeof callback === 'function') {
          callback.call(_this2);
        }
        return res;
      });
    } } });exports.behavior = behavior;
});
define('wxcomponents/vant-weapp/mixins/observer/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.observe = observe;var _behavior = require("./behavior");
var _props = require("./props");
function observe(vantOptions, options) {var
  watch = vantOptions.watch,computed = vantOptions.computed;
  options.behaviors.push(_behavior.behavior);
  if (watch) {
    var props = options.properties || {};
    Object.keys(watch).forEach(function (key) {
      if (key in props) {
        var prop = props[key];
        if (prop === null || !('type' in prop)) {
          prop = { type: prop };
        }
        prop.observer = watch[key];
        props[key] = prop;
      }
    });
    options.properties = props;
  }
  if (computed) {
    options.methods = options.methods || {};
    options.methods.$options = function () {return vantOptions;};
    if (options.properties) {
      (0, _props.observeProps)(options.properties);
    }
  }
}
});
define('wxcomponents/vant-weapp/mixins/observer/props.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.observeProps = observeProps;function observeProps(props) {
  if (!props) {
    return;
  }
  Object.keys(props).forEach(function (key) {
    var prop = props[key];
    if (prop === null || !('type' in prop)) {
      prop = { type: prop };
    }var _prop =
    prop,observer = _prop.observer;
    prop.observer = function () {
      if (observer) {
        if (typeof observer === 'string') {
          observer = this[observer];
        }
        observer.apply(this, arguments);
      }
      this.set();
    };
    props[key] = prop;
  });
}
});
define('wxcomponents/vant-weapp/mixins/open-type.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.openType = void 0;var openType = Behavior({
  properties: {
    openType: String },

  methods: {
    bindGetUserInfo: function bindGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },
    bindContact: function bindContact(event) {
      this.$emit('contact', event.detail);
    },
    bindGetPhoneNumber: function bindGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },
    bindError: function bindError(event) {
      this.$emit('error', event.detail);
    },
    bindLaunchApp: function bindLaunchApp(event) {
      this.$emit('launchapp', event.detail);
    },
    bindOpenSetting: function bindOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    } } });exports.openType = openType;
});
define('wxcomponents/vant-weapp/mixins/touch.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.touch = void 0;var touch = Behavior({
  methods: {
    touchStart: function touchStart(event) {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
    } } });exports.touch = touch;
});
define('wxcomponents/vant-weapp/mixins/transition.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.transition = void 0;var _utils = require("../common/utils");
var getClassNames = function getClassNames(name) {return {
    enter: "van-".concat(name, "-enter van-").concat(name, "-enter-active enter-class enter-active-class"),
    'enter-to': "van-".concat(name, "-enter-to van-").concat(name, "-enter-active enter-to-class enter-active-class"),
    leave: "van-".concat(name, "-leave van-").concat(name, "-leave-active leave-class leave-active-class"),
    'leave-to': "van-".concat(name, "-leave-to van-").concat(name, "-leave-active leave-to-class leave-active-class") };};

var requestAnimationFrame = function requestAnimationFrame(cb) {return setTimeout(cb, 1000 / 60);};
var transition = function transition(showDefaultValue) {
  return Behavior({
    properties: {
      customStyle: String,
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow' },

      duration: {
        type: [Number, Object],
        value: 300,
        observer: 'observeDuration' },

      name: {
        type: String,
        value: 'fade',
        observer: 'updateClasses' } },


    data: {
      type: '',
      inited: false,
      display: false,
      classNames: getClassNames('fade') },

    attached: function attached() {
      if (this.data.show) {
        this.show();
      }
    },
    methods: {
      observeShow: function observeShow(value) {
        if (value) {
          this.show();
        } else
        {
          this.leave();
        }
      },
      updateClasses: function updateClasses(name) {
        this.set({
          classNames: getClassNames(name) });

      },
      show: function show() {var _this = this;var _this$data =
        this.data,classNames = _this$data.classNames,duration = _this$data.duration;
        this.set({
          inited: true,
          display: true,
          classes: classNames.enter,
          currentDuration: (0, _utils.isObj)(duration) ? duration.enter : duration }).
        then(function () {
          requestAnimationFrame(function () {
            _this.set({
              classes: classNames['enter-to'] });

          });
        });
      },
      leave: function leave() {var _this2 = this;var _this$data2 =
        this.data,classNames = _this$data2.classNames,duration = _this$data2.duration;
        this.set({
          classes: classNames.leave,
          currentDuration: (0, _utils.isObj)(duration) ? duration.leave : duration }).
        then(function () {
          requestAnimationFrame(function () {
            _this2.set({
              classes: classNames['leave-to'] });

          });
        });
      },
      onTransitionEnd: function onTransitionEnd() {
        if (!this.data.show) {
          this.set({ display: false });
        }
      } } });


};exports.transition = transition;
});
define('wxcomponents/wux-weapp/barcode/barcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict"; /*
               * Copyright (c) 2014 Johannes Mittendorfer (http://johannes-mittendorfer.com)
               * Licensed under the MIT License (LICENSE.txt).
               *
               * Version 2.1.1
               * Build 2014-10-07
               */

var EAN13, pluginName;

pluginName = null;

"use strict";

EAN13 = function () {
  EAN13.prototype.settings = {};

  EAN13.prototype.init = function () {
    var checkDigit, code;
    if (this.number.length === 12) {
      checkDigit = this.generateCheckDigit(this.number);
      this.number += checkDigit;
    }
    if (this.number.length === 13) {
      if (this.validate()) {
        this.settings.onValid.call();
      } else {
        this.settings.onInvalid.call();
      }
      code = this.getCode();
      return this.draw(code);
    } else {
      return this.settings.onError.call();
    }
  };

  EAN13.prototype.getCode = function () {
    var c_encoding, code, countries, i, parts, raw_number, x, y, z;
    x = ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"];
    y = ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"];
    z = ["1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"];
    countries = ["xxxxxx", "xxyxyy", "xxyyxy", "xxyyyx", "xyxxyy", "xyyxxy", "xyyyxx", "xyxyxy", "xyxyyx", "xyyxyx"];
    code = "";
    c_encoding = countries[parseInt(this.number.substr(0, 1), 10)].split("");
    raw_number = this.number.substr(1);
    parts = raw_number.split("");
    i = 0;
    while (i < 6) {
      if (c_encoding[i] === "x") {
        code += x[parts[i]];
      } else {
        code += y[parts[i]];
      }
      i++;
    }
    i = 6;
    while (i < 12) {
      code += z[parts[i]];
      i++;
    }
    return code;
  };

  EAN13.prototype.clear = function (context) {
    return context.clearRect(0, 0, this.settings.width, this.settings.height);
  };

  EAN13.prototype.draw = function (code) {
    var border_height, chars, context, height, i, item_width, layout, left, lines, offset, prefix, width, x, _i, _ref;
    layout = {
      prefix_offset: 0.06,
      font_stretch: 0.073,
      border_line_height_number: 0.9,
      border_line_height: 1,
      line_height: 0.9,
      font_size: 0.15,
      font_y: 1.03,
      text_offset: 4.5 };

    width = this.settings.prefix ? this.settings.width - this.settings.width * layout.prefix_offset : this.settings.width;
    if (this.settings.number) {
      border_height = layout.border_line_height_number * this.settings.height;
      height = layout.line_height * border_height;
    } else {
      border_height = layout.border_line_height * this.settings.height;
      height = border_height;
    }
    item_width = width / 95;
    if (this.id) {
      context = wx.createCanvasContext(this.id, this.ctx);
      this.clear(context);
      context.setFillStyle(this.settings.color);
      left = this.settings.number && this.settings.prefix ? this.settings.width * layout.prefix_offset : 0;
      lines = code.split("");
      context.fillRect(left, 0, item_width, border_height);
      left = left + item_width * 2;
      context.fillRect(left, 0, item_width, border_height);
      left = left + item_width;
      i = 0;
      while (i < 42) {
        if (lines[i] === "1") {
          context.fillRect(left, 0, Math.floor(item_width) + 1, height);
        }
        left = left + item_width;
        i++;
      }
      left = left + item_width;
      context.fillRect(left, 0, item_width, border_height);
      left = left + item_width * 2;
      context.fillRect(left, 0, item_width, border_height);
      left = left + item_width * 2;
      i = 42;
      while (i < 84) {
        if (lines[i] === "1") {
          context.fillRect(left, 0, Math.floor(item_width) + 1, height);
        }
        left = left + item_width;
        i++;
      }
      context.fillRect(left, 0, item_width, border_height);
      left = left + item_width * 2;
      context.fillRect(left, 0, item_width, border_height);
      if (this.settings.number) {
        context.setFontSize(layout.font_size * height + "px monospace");
        prefix = this.number.substr(0, 1);
        if (this.settings.prefix) {
          context.fillText(prefix, 0, border_height * layout.font_y);
        }
        offset = item_width * layout.text_offset + (this.settings.prefix ? layout.prefix_offset * this.settings.width : 0);
        chars = this.number.substr(1, 6).split("");
        chars.forEach(function (value, key) {
          context.fillText(value, offset, border_height * layout.font_y);
          return offset += layout.font_stretch * width;
        });
        offset = 49 * item_width + (this.settings.prefix ? layout.prefix_offset * this.settings.width : 0) + layout.text_offset;
        chars = this.number.substr(7).split("");
        chars.forEach(function (value, key) {
          context.fillText(value, offset, border_height * layout.font_y);
          return offset += layout.font_stretch * width;
        });
      }
      if (this.settings.debug) {
        for (x = _i = 0, _ref = item_width * 2; _ref > 0 ? _i <= width : _i >= width; x = _i += _ref) {
          context.beginPath();
          context.rect(x, height * 0.4, item_width, height * 0.1);
          context.setFillStyle('red');
          context.fill();
        }
      }
      context.draw();
      return this.settings.onSuccess.call();
    } else {
      return this.settings.onError.call();
    }
  };

  EAN13.prototype.generateCheckDigit = function (number) {
    var chars, counter;
    counter = 0;
    chars = number.split("");
    chars.forEach(function (value, key) {
      if (key % 2 === 0) {
        return counter += parseInt(value, 10);
      } else {
        return counter += 3 * parseInt(value, 10);
      }
    });
    return 10 - counter % 10 % 10;
  };

  EAN13.prototype.validate = function () {
    return parseInt(this.number.slice(-1), 10) === this.generateCheckDigit(this.number.slice(0, -1));
  };

  function EAN13(id, number, options, ctx) {
    var option;
    this.id = id;
    this.number = number;
    this.ctx = ctx;
    this.settings = {
      width: 200,
      height: 100,
      number: true,
      prefix: true,
      color: "black",
      debug: false,
      onValid: function onValid() {},
      onInvalid: function onInvalid() {},
      onSuccess: function onSuccess() {},
      onError: function onError() {} };

    if (options) {
      for (option in options) {
        this.settings[option] = options[option];
      }
    }
    this._name = pluginName;
    this.init();
  }

  return EAN13;

}();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = EAN13;
}
});
define('wxcomponents/wux-weapp/countdown/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var Countdown = /*#__PURE__*/function () {
  function Countdown() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentPages()[getCurrentPages().length - 1];_classCallCheck(this, Countdown);
    Object.assign(this, {
      page: page,
      options: options });

    this.__init();
  }

  /**
     * 初始化
     */_createClass(Countdown, [{ key: "__init", value: function __init()
    {
      this.setData = this.page.setData.bind(this.page);
      this.restart(this.options);
    }

    /**
       * 默认参数
       */ }, { key: "setDefaults", value: function setDefaults()
    {
      return {
        date: "June 7, 2087 15:03:25",
        refresh: 1000,
        offset: 0,
        onEnd: function onEnd() {},
        render: function render(date) {} };

    }

    /**
       * 合并参数
       */ }, { key: "mergeOptions", value: function mergeOptions(
    options) {
      var defaultOptions = this.setDefaults();

      for (var i in defaultOptions) {
        if (defaultOptions.hasOwnProperty(i)) {
          this.options[i] = typeof options[i] !== "undefined" ? options[i] : defaultOptions[i];

          if (i === "date" && typeof this.options.date !== "object") {
            this.options.date = new Date(this.options.date);
          }

          if (typeof this.options[i] === "function") {
            this.options[i] = this.options[i].bind(this);
          }
        }
      }

      if (typeof this.options.date !== "object") {
        this.options.date = new Date(this.options.date);
      }
    }

    /**
       * 计算日期差
       */ }, { key: "getDiffDate", value: function getDiffDate()
    {
      var diff = (this.options.date.getTime() - Date.now() + this.options.offset) / 1000;

      var dateData = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        millisec: 0 };


      if (diff <= 0) {
        if (this.interval) {
          this.stop();
          this.options.onEnd();
        }
        return dateData;
      }

      if (diff >= 365.25 * 86400) {
        dateData.years = Math.floor(diff / (365.25 * 86400));
        diff -= dateData.years * 365.25 * 86400;
      }

      if (diff >= 86400) {
        dateData.days = Math.floor(diff / 86400);
        diff -= dateData.days * 86400;
      }

      if (diff >= 3600) {
        dateData.hours = Math.floor(diff / 3600);
        diff -= dateData.hours * 3600;
      }

      if (diff >= 60) {
        dateData.min = Math.floor(diff / 60);
        diff -= dateData.min * 60;
      }

      dateData.sec = Math.round(diff);

      dateData.millisec = diff % 1 * 1000;

      return dateData;
    }

    /**
       * 补零
       */ }, { key: "leadingZeros", value: function leadingZeros(
    num) {var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      num = String(num);
      if (num.length > length) return num;
      return (Array(length + 1).join("0") + num).substr(-length);
    }

    /**
       * 更新组件
       */ }, { key: "update", value: function update(
    newDate) {
      this.options.date = typeof newDate !== "object" ? new Date(newDate) : newDate;
      this.render();
      return this;
    }

    /**
       * 停止倒计时
       */ }, { key: "stop", value: function stop()
    {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = !1;
      }
      return this;
    }

    /**
       * 渲染组件
       */ }, { key: "render", value: function render()
    {
      this.options.render(this.getDiffDate());
      return this;
    }

    /**
       * 启动倒计时
       */ }, { key: "start", value: function start()
    {var _this = this;
      if (this.interval) return !1;
      this.render();
      if (this.options.refresh) {
        this.interval = setInterval(function () {
          _this.render();
        }, this.options.refresh);
      }
      return this;
    }

    /**
       * 更新offset
       */ }, { key: "updateOffset", value: function updateOffset(
    offset) {
      this.options.offset = offset;
      return this;
    }

    /**
       * 重启倒计时
       */ }, { key: "restart", value: function restart()
    {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.mergeOptions(options);
      this.interval = !1;
      this.start();
      return this;
    } }]);return Countdown;}();var _default =


Countdown;exports.default = _default;
});
define('wxcomponents/wux-weapp/countup/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var CountUp = /*#__PURE__*/function () {
  function CountUp(startVal, endVal, decimals, duration) {var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};var page = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : getCurrentPages()[getCurrentPages().length - 1];_classCallCheck(this, CountUp);
    Object.assign(this, {
      page: page,
      startVal: startVal,
      endVal: endVal,
      decimals: decimals,
      duration: duration,
      options: options });

    this.__init();
  }

  /**
     * 初始化
     */_createClass(CountUp, [{ key: "__init", value: function __init()
    {
      this.setData = this.page.setData.bind(this.page);

      this.lastTime = 0;

      // merge options
      this.mergeOptions(this.options);

      this.startVal = Number(this.startVal);
      this.cacheVal = this.startVal;
      this.endVal = Number(this.endVal);
      this.countDown = this.startVal > this.endVal;
      this.frameVal = this.startVal;
      this.decimals = Math.max(0, this.decimals || 0);
      this.dec = Math.pow(10, this.decimals);
      this.duration = Number(this.duration) * 1000 || 2000;

      // format startVal on initialization
      this.printValue(this.formattingFn(this.startVal));
    }

    /**
       * 默认参数
       */ }, { key: "setDefaultOptions", value: function setDefaultOptions()
    {
      return {
        useEasing: true, // toggle easing
        useGrouping: true, // 1,000,000 vs 1000000
        separator: ",", // character to use as a separator
        decimal: ".", // character to use as a decimal
        easingFn: null, // optional custom easing closure function, default is Robert Penner's easeOutExpo
        formattingFn: null, // optional custom formatting function, default is this.formatNumber below
        printValue: function printValue(value) {} };

    }

    /**
       * 合并参数
       */ }, { key: "mergeOptions", value: function mergeOptions(
    options) {
      var defaultOptions = this.setDefaultOptions();

      // extend default options with passed options object
      for (var key in defaultOptions) {
        if (defaultOptions.hasOwnProperty(key)) {
          this.options[key] = typeof options[key] !== "undefined" ? options[key] : defaultOptions[key];
          if (typeof this.options[key] === "function") {
            this.options[key] = this.options[key].bind(this);
          }
        }
      }

      if (this.options.separator === "") {this.options.useGrouping = !1;}
      if (!this.options.prefix) this.options.prefix = "";
      if (!this.options.suffix) this.options.suffix = "";

      this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo;
      this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber;
      this.printValue = this.options.printValue ? this.options.printValue : function () {};
    }

    /**
       * 创建定时器
       */ }, { key: "requestAnimationFrame", value: function requestAnimationFrame(
    callback) {var _this = this;
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - this.lastTime));
      var timeout = setTimeout(function () {
        callback.bind(_this)(currTime + timeToCall);
      }, timeToCall);
      this.lastTime = currTime + timeToCall;
      return timeout;
    }

    /**
       * 清空定时器
       */ }, { key: "cancelAnimationFrame", value: function cancelAnimationFrame(
    timeout) {
      clearTimeout(timeout);
    }

    /**
       * 格式化数字
       */ }, { key: "formatNumber", value: function formatNumber(
    nStr) {
      nStr = nStr.toFixed(this.decimals);
      nStr += "";
      var x, x1, x2, rgx;
      x = nStr.split(".");
      x1 = x[0];
      x2 = x.length > 1 ? this.options.decimal + x[1] : "";
      rgx = /(\d+)(\d{3})/;
      if (this.options.useGrouping) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, "$1" + this.options.separator + "$2");
        }
      }
      return this.options.prefix + x1 + x2 + this.options.suffix;
    }

    /**
       * 过渡效果
       */ }, { key: "easeOutExpo", value: function easeOutExpo(
    t, b, c, d) {
      return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    }

    /**
       * 计数函数
       */ }, { key: "count", value: function count(
    timestamp) {
      if (!this.startTime) {this.startTime = timestamp;}

      this.timestamp = timestamp;
      var progress = timestamp - this.startTime;
      this.remaining = this.duration - progress;

      // to ease or not to ease
      if (this.options.useEasing) {
        if (this.countDown) {
          this.frameVal = this.startVal - this.easingFn(progress, 0, this.startVal - this.endVal, this.duration);
        } else {
          this.frameVal = this.easingFn(progress, this.startVal, this.endVal - this.startVal, this.duration);
        }
      } else {
        if (this.countDown) {
          this.frameVal = this.startVal - (this.startVal - this.endVal) * (progress / this.duration);
        } else {
          this.frameVal = this.startVal + (this.endVal - this.startVal) * (progress / this.duration);
        }
      }

      // don't go past endVal since progress can exceed duration in the last frame
      if (this.countDown) {
        this.frameVal = this.frameVal < this.endVal ? this.endVal : this.frameVal;
      } else {
        this.frameVal = this.frameVal > this.endVal ? this.endVal : this.frameVal;
      }

      // decimal
      this.frameVal = Math.round(this.frameVal * this.dec) / this.dec;

      // format and print value
      this.printValue(this.formattingFn(this.frameVal));

      // whether to continue
      if (progress < this.duration) {
        this.rAF = this.requestAnimationFrame(this.count);
      } else {
        if (this.callback) {this.callback();}
      }
    }

    /**
       * 启动计数器
       */ }, { key: "start", value: function start(
    callback) {
      this.callback = callback;
      this.rAF = this.requestAnimationFrame(this.count);
      return !1;
    }

    /**
       * 停止计数器
       */ }, { key: "pauseResume", value: function pauseResume()
    {
      if (!this.paused) {
        this.paused = !0;
        this.cancelAnimationFrame(this.rAF);
      } else {
        this.paused = !1;
        delete this.startTime;
        this.duration = this.remaining;
        this.startVal = this.frameVal;
        this.requestAnimationFrame(this.count);
      }
    }

    /**
       * 重置计数器
       */ }, { key: "reset", value: function reset()
    {
      this.paused = !1;
      delete this.startTime;
      this.startVal = this.cacheVal;
      this.cancelAnimationFrame(this.rAF);
      this.printValue(this.formattingFn(this.startVal));
    }

    /**
       * 更新计数器
       */ }, { key: "update", value: function update(
    newEndVal) {
      this.cancelAnimationFrame(this.rAF);
      this.paused = !1;
      delete this.startTime;
      this.startVal = this.frameVal;
      this.endVal = Number(newEndVal);
      this.countDown = this.startVal > this.endVal;
      this.rAF = this.requestAnimationFrame(this.count);
    } }]);return CountUp;}();var _default =


CountUp;exports.default = _default;
});
define('wxcomponents/wux-weapp/helpers/arrayTreeFilter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * https://github.com/afc163/array-tree-filter
                                                                                                      */
function arrayTreeFilter(data, filterFn, options) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  var children = data || [];
  var result = [];
  var level = 0;
  do {
    var foundItem = children.filter(function (item) {
      return filterFn(item, level);
    })[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);
  return result;
}var _default =
arrayTreeFilter;exports.default = _default;
});
define('wxcomponents/wux-weapp/helpers/baseBehavior.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Simple bind, faster than native
                                                                                                      *
                                                                                                      * @param {Function} fn
                                                                                                      * @param {Object} ctx
                                                                                                      * @return {Function}
                                                                                                      */
var bind = function bind(fn, ctx) {
  return function () {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    return args.length ? fn.apply(ctx, args) : fn.call(ctx);
  };
};

/**
    * Object assign
    */
var assign = function assign() {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}return Object.assign.apply(Object, [{}].concat(args));};var _default =

Behavior({
  properties: {
    visible: {
      type: Boolean,
      value: false } },


  methods: {
    /**
              * 合并参数并绑定方法
              *
              * @param {Object} opts 参数对象
              * @param {Object} fns 方法挂载的属性
              */
    $$mergeOptionsAndBindMethods: function $$mergeOptionsAndBindMethods() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var fns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.fns;
      var options = Object.assign({}, opts);

      for (var key in options) {
        if (options.hasOwnProperty(key) && typeof options[key] === 'function') {
          fns[key] = bind(options[key], this);
          delete options[key];
        }
      }

      return options;
    },
    /**
        * Promise setData
        * @param {Array} args 参数对象
        */
    $$setData: function $$setData() {var _this = this;for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      var params = assign.apply(void 0, [{}].concat(args));

      return new Promise(function (resolve) {
        _this.setData(params, resolve);
      });
    },
    /**
        * 延迟指定时间执行回调函数
        * @param {Function} callback 回调函数
        * @param {Number} timeout 延迟时间
        */
    $$requestAnimationFrame: function $$requestAnimationFrame() {var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000 / 60;
      return new Promise(function (resolve) {return setTimeout(resolve, timeout);}).then(callback);
    } },

  /**
          * 组件生命周期函数，在组件实例进入页面节点树时执行
          */
  created: function created() {
    this.fns = {};
  },
  /**
      * 组件生命周期函数，在组件实例被从页面节点树移除时执行
      */
  detached: function detached() {
    this.fns = {};
  } });exports.default = _default;
});
define('wxcomponents/wux-weapp/helpers/baseComponent.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _computedBehavior = _interopRequireDefault(require("./computedBehavior"));
var _relationsBehavior = _interopRequireDefault(require("./relationsBehavior"));
var _safeSetDataBehavior = _interopRequireDefault(require("./safeSetDataBehavior"));
var _funcBehavior = _interopRequireDefault(require("./funcBehavior"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var baseComponent = function baseComponent() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // add default externalClasses
  options.externalClasses = [
  'wux-class',
  'wux-hover-class'].concat(_toConsumableArray(
  options.externalClasses = options.externalClasses || []));


  // add default behaviors
  options.behaviors = [
  _relationsBehavior.default,
  _computedBehavior.default,
  _safeSetDataBehavior.default].concat(_toConsumableArray(
  options.behaviors = options.behaviors || []));


  // use func
  if (options.useFunc) {
    options.behaviors = [].concat(_toConsumableArray(options.behaviors), [_funcBehavior.default]);
    delete options.useFunc;
  }

  // use field
  if (options.useField) {
    options.behaviors = [].concat(_toConsumableArray(options.behaviors), ['wx://form-field']);
    delete options.useField;
  }

  // use export
  if (options.useExport) {
    options.behaviors = [].concat(_toConsumableArray(options.behaviors), ['wx://component-export']);
    options.methods = _objectSpread({
      export: function _export() {
        return this;
      } },
    options.methods);

    delete options.useExport;
  }

  // add default options
  options.options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  options.options);


  return Component(options);
};var _default =

baseComponent;exports.default = _default;
});
define('wxcomponents/wux-weapp/helpers/checkIPhoneX.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.checkIPhoneX = exports.safeAreaInset = void 0; /**
                                                                                                                                   * 获取系统信息
                                                                                                                                   */

var systemInfo = null;

var getSystemInfo = function getSystemInfo(isForce) {
  if (!systemInfo || isForce) {
    try {
      systemInfo = wx.getSystemInfoSync();
    } catch (e) {/* Ignore */}
  }

  return systemInfo;
};

// iPhoneX 竖屏安全区域
var safeAreaInset = {
  top: 88, // StatusBar & NavBar
  left: 0,
  right: 0,
  bottom: 34 // Home Indicator
};exports.safeAreaInset = safeAreaInset;

var IPHONEX_DEVICE_HEIGHT = 812;
var isIPhoneX = function isIPhoneX(_ref) {var model = _ref.model,platform = _ref.platform,screenHeight = _ref.screenHeight;
  return /iPhone X/.test(model) && platform === 'ios' && screenHeight === IPHONEX_DEVICE_HEIGHT;
};

var checkIPhoneX = function checkIPhoneX(isForce) {return isIPhoneX(getSystemInfo(isForce));};exports.checkIPhoneX = checkIPhoneX;
});
define('wxcomponents/wux-weapp/helpers/classNames.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict"; /*!
                Copyright (c) 2018 Jed Watson.
                Licensed under the MIT License (MIT), see
                http://jedwatson.github.io/classnames
              */
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if (typeof module !== 'undefined' && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    // register as 'classnames', consistent with npm package name
    define('classnames', [], function () {
      return classNames;
    });
  } else {
    window.classNames = classNames;
  }
})();
});
define('wxcomponents/wux-weapp/helpers/colors.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isPresetColor = exports.colors = void 0;var colors = {
  'light': '#ddd',
  'stable': '#b2b2b2',
  'positive': '#387ef5',
  'calm': '#11c1f3',
  'balanced': '#33cd5f',
  'energized': '#ffc900',
  'assertive': '#ef473a',
  'royal': '#886aea',
  'dark': '#444' };exports.colors = colors;


var isPresetColor = function isPresetColor(color) {
  if (!color) {
    return false;
  }
  return colors[color] ? colors[color] : color;
};exports.isPresetColor = isPresetColor;
});
define('wxcomponents/wux-weapp/helpers/computedBehavior.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";




var _isEmpty = _interopRequireDefault(require("./isEmpty"));
var _shallowEqual = _interopRequireDefault(require("./shallowEqual"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                     * weapp custom component extend behavior -- computed
                                                                                                                                                                     * https://github.com/wechat-miniprogram/computed
                                                                                                                                                                     */module.exports = Behavior({ lifetimes: {
    created: function created() {
      this._computedCache = {};
      this._originalSetData = this.setData;
      this.setData = this._setData;
      this._doingSetData = false;
    } },

  definitionFilter: function definitionFilter(defFields) {
    var computed = defFields.computed || {};
    var computedKeys = Object.keys(computed);

    // 计算 computed
    var calcComputed = function calcComputed(scope) {
      var needUpdate = {};
      var computedCache = scope._computedCache || scope.data;

      for (var i = 0, len = computedKeys.length; i < len; i++) {
        var key = computedKeys[i];
        var getter = computed[key];

        if (typeof getter === 'function') {
          var value = getter.call(scope);

          if (!(0, _shallowEqual.default)(computedCache[key], value)) {
            needUpdate[key] = value;
            computedCache[key] = value;
          }
        }
      }

      return needUpdate;
    };

    // 初始化 computed
    var initComputed = function initComputed() {
      defFields.data = defFields.data || {};

      // 先将 properties 里的字段写入到 data 中
      var data = defFields.data;
      var properties = defFields.properties;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      if (properties) {
        // eslint-disable-next-line complexity
        Object.keys(properties).forEach(function (key) {
          var value = properties[key];
          var oldObserver;

          // eslint-disable-next-line max-len
          if (value === null || value === Number || value === String || value === Boolean || value === Object || value === Array) {
            properties[key] = {
              type: value };

          } else if (typeof value === 'object') {
            if (hasOwnProperty.call(value, 'value')) {
              // 处理值
              data[key] = value.value;
            }

            if (hasOwnProperty.call(value, 'observer')) {
              if (typeof value.observer === 'function') {
                oldObserver = value.observer;
              } else if (typeof value.observer === 'string') {
                oldObserver = defFields.methods[value.observer];
              }
            }
          }

          // 追加 observer，用于监听变动
          properties[key].observer = function () {
            var originalSetData = this._originalSetData;

            if (this._doingSetData) {
              // eslint-disable-next-line no-console
              console.warn('can\'t call setData in computed getter function!');
              return;
            }

            this._doingSetData = true;

            // 计算 computed
            var needUpdate = calcComputed(this);

            // 做 computed 属性的 setData
            if (!(0, _isEmpty.default)(needUpdate)) {
              originalSetData.call(this, needUpdate);
            }

            this._doingSetData = false;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}

            if (oldObserver) oldObserver.apply(this, args);
          };
        });
      }

      // 计算 computed
      calcComputed(defFields, true);
    };

    initComputed();

    defFields.methods = defFields.methods || {};
    defFields.methods._setData = function (data, callback) {
      var originalSetData = this._originalSetData;

      if (this._doingSetData) {
        // eslint-disable-next-line no-console
        console.warn('can\'t call setData in computed getter function!');
        return;
      }

      this._doingSetData = true;

      // TODO 过滤掉 data 中的 computed 字段
      var dataKeys = Object.keys(data);
      for (var i = 0, len = dataKeys.length; i < len; i++) {
        var key = dataKeys[i];

        if (computed[key]) delete data[key];
      }

      // 做 data 属性的 setData
      originalSetData.call(this, data, callback);

      // 计算 computed
      var needUpdate = calcComputed(this);

      // 做 computed 属性的 setData
      if (!(0, _isEmpty.default)(needUpdate)) {
        originalSetData.call(this, needUpdate);
      }

      this._doingSetData = false;
    };
  } });
});
define('wxcomponents/wux-weapp/helpers/debounce.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = debounce;function debounce(func, wait, immediate) {
  var timeout;
  var args;
  var context;
  var timestamp;
  var result;

  var later = function later() {
    var last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = null;
          args = null;
        }
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = +new Date();

    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = null;
      args = null;
    }

    return result;
  };
}
});
define('wxcomponents/wux-weapp/helpers/funcBehavior.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 过滤对象的函数属性
                                                                                                      * @param {Object} opts
                                                                                                      */
var mergeOptionsToData = function mergeOptionsToData() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = Object.assign({}, opts);

  for (var key in options) {
    if (options.hasOwnProperty(key) && typeof options[key] === 'function') {
      delete options[key];
    }
  }

  return options;
};

/**
    * Simple bind, faster than native
    *
    * @param {Function} fn
    * @param {Object} ctx
    * @return {Function}
    */
var bind = function bind(fn, ctx) {
  return function () {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    return args.length ? fn.apply(ctx, args) : fn.call(ctx);
  };
};

/**
    * Object assign
    */
var assign = function assign() {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}return Object.assign.apply(Object, [{}].concat(args));};var _default =

Behavior({
  definitionFilter: function definitionFilter(defFields) {
    defFields.data = mergeOptionsToData(defFields.data);
    defFields.data.in = false;
    defFields.data.visible = false;
  },
  methods: {
    /**
              * 过滤对象的函数属性
              * @param {Object} opts
              */
    $$mergeOptionsToData: mergeOptionsToData,
    /**
                                               * 合并参数并绑定方法
                                               *
                                               * @param {Object} opts 参数对象
                                               * @param {Object} fns 方法挂载的属性
                                               */
    $$mergeOptionsAndBindMethods: function $$mergeOptionsAndBindMethods() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var fns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.fns;
      var options = Object.assign({}, opts);

      for (var key in options) {
        if (options.hasOwnProperty(key) && typeof options[key] === 'function') {
          fns[key] = bind(options[key], this);
          delete options[key];
        }
      }

      return options;
    },
    /**
        * Promise setData
        * @param {Array} args 参数对象
        */
    $$setData: function $$setData() {var _this = this;for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      var params = assign.apply(void 0, [{}].concat(args));

      return new Promise(function (resolve) {
        _this.setData(params, resolve);
      });
    },
    /**
        * 延迟指定时间执行回调函数
        * @param {Function} callback 回调函数
        * @param {Number} timeout 延迟时间
        */
    $$requestAnimationFrame: function $$requestAnimationFrame() {var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000 / 60;
      return new Promise(function (resolve) {return setTimeout(resolve, timeout);}).then(callback);
    } },

  /**
          * 组件生命周期函数，在组件实例进入页面节点树时执行
          */
  created: function created() {
    this.fns = {};
  },
  /**
      * 组件生命周期函数，在组件实例被从页面节点树移除时执行
      */
  detached: function detached() {
    this.fns = {};
  } });exports.default = _default;
});
define('wxcomponents/wux-weapp/helpers/gestures.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.getSwipeDirection = exports.getPointsDistance = exports.isNearbyPoints = exports.isEqualPoints = exports.getPointsNumber = exports.getTouchPoints = void 0; /**
                                                                                                                                                                                                                                                * 获取触摸点位置信息
                                                                                                                                                                                                                                                */
var getTouchPoints = function getTouchPoints(e) {var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var _ref =
  e.touches[index] || e.changedTouches[index],x = _ref.pageX,y = _ref.pageY;
  return {
    x: x,
    y: y };

};

/**
    * 获取触摸点个数
    */exports.getTouchPoints = getTouchPoints;
var getPointsNumber = function getPointsNumber(e) {return e.touches && e.touches.length || e.changedTouches && e.changedTouches.length;};

/**
                                                                                                                                           * 判断是否为同一点
                                                                                                                                           */exports.getPointsNumber = getPointsNumber;
var isEqualPoints = function isEqualPoints(p1, p2) {return p1.x === p2.x && p1.y === p2.y;};

/**
                                                                                              * 判断是否为相近的两点
                                                                                              */exports.isEqualPoints = isEqualPoints;
var isNearbyPoints = function isNearbyPoints(p1, p2) {var DOUBLE_TAP_RADIUS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;
  var xMove = Math.abs(p1.x - p2.x);
  var yMove = Math.abs(p1.y - p2.y);
  return xMove < DOUBLE_TAP_RADIUS & yMove < DOUBLE_TAP_RADIUS;
};

/**
    * 获取两点之间的距离
    */exports.isNearbyPoints = isNearbyPoints;
var getPointsDistance = function getPointsDistance(p1, p2) {
  var xMove = Math.abs(p1.x - p2.x);
  var yMove = Math.abs(p1.y - p2.y);
  return Math.sqrt(xMove * xMove + yMove * yMove);
};

/**
    * 获取触摸移动方向
    */exports.getPointsDistance = getPointsDistance;
var getSwipeDirection = function getSwipeDirection(x1, x2, y1, y2) {
  return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
};exports.getSwipeDirection = getSwipeDirection;
});
define('wxcomponents/wux-weapp/helpers/isEmpty.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict"; /**
               * Checks if a value is empty.
               */
function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object') {
    if (value) {
      for (var _ in value) {
        return false;
      }
    }
    return true;
  } else {
    return !value;
  }
}

module.exports = isEmpty;
});
define('wxcomponents/wux-weapp/helpers/mergeOptionsToData.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 过滤对象的函数属性
                                                                                                      * @param {Object} opts
                                                                                                      */
var mergeOptionsToData = function mergeOptionsToData() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = Object.assign({}, opts);

  for (var key in options) {
    if (options.hasOwnProperty(key) && typeof options[key] === 'function') {
      delete options[key];
    }
  }

  return options;
};var _default =

mergeOptionsToData;exports.default = _default;
});
define('wxcomponents/wux-weapp/helpers/relationsBehavior.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _isEmpty = _interopRequireDefault(require("./isEmpty"));
var _debounce = _interopRequireDefault(require("./debounce"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                       * bind func to obj
                                                                                                                                                                                                                                                                                                                                                                       */
function bindFunc(obj, method, observer) {
  var oldFn = obj[method];
  obj[method] = function (target) {
    if (observer) {
      observer.call(this, target, _defineProperty({},
      method, true));

    }
    if (oldFn) {
      oldFn.call(this, target);
    }
  };
}

// default methods
var methods = ['linked', 'linkChanged', 'unlinked'];

// extra props
var extProps = ['observer'];

module.exports = Behavior({
  lifetimes: {
    created: function created() {
      this._debounce = null;
    } },

  definitionFilter: function definitionFilter(defFields) {var
    relations = defFields.relations;

    if (!(0, _isEmpty.default)(relations)) {var _loop = function _loop(
      key) {
        var relation = relations[key];

        // bind func
        methods.forEach(function (method) {return bindFunc(relation, method, relation.observer);});

        // delete extProps
        extProps.forEach(function (prop) {return delete relation[prop];});};for (var key in relations) {_loop(key);
      }
    }

    defFields.methods = defFields.methods || {};
    defFields.methods.debounce = function (func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return (this._debounce = this._debounce || (0, _debounce.default)(func.bind(this), wait, immediate)).call(this);
    };
  } });
});
define('wxcomponents/wux-weapp/helpers/safeSetDataBehavior.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";module.exports = Behavior({
  lifetimes: {
    created: function created() {
      this.nextCallback = null;
    },
    detached: function detached() {
      this.cancelNextCallback();
    } },

  methods: {
    /**
              * safeSetData
              * @param {Object} nextData 数据对象
              * @param {Function} callback 回调函数
              */
    safeSetData: function safeSetData(nextData, callback) {var _this = this;
      this.pendingData = Object.assign({}, this.data, nextData);
      callback = this.setNextCallback(callback);

      this.setData(nextData, function () {
        _this.pendingData = null;
        callback();
      });
    },
    /**
        * 设置下一回调函数
        * @param {Function} callback 回调函数
        */
    setNextCallback: function setNextCallback(callback) {var _this2 = this;
      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this2.nextCallback = null;

          callback.call(_this2, event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    },
    /**
        * 取消下一回调函数
        */
    cancelNextCallback: function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    } } });
});
define('wxcomponents/wux-weapp/helpers/shallowEqual.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
                                                       * inlined Object.is polyfill to avoid requiring consumers ship their own
                                                       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
                                                       */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
});
define('wxcomponents/wux-weapp/helpers/styleToCssString.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
'use strict';

/**
               * CSS properties which accept numbers but are not in units of "px".
               */
var isUnitlessNumber = {
  boxFlex: true,
  boxFlexGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true };


/**
                        * @param {string} prefix vendor-specific prefix, eg: Webkit
                        * @param {string} key style name, eg: transitionDuration
                        * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
                        * WebkitTransitionDuration
                        */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
   * Support style names that may come passed in prefixed by adding permutations
   * of vendor prefixes.
   */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var msPattern = /^ms-/;

var _uppercasePattern = /([A-Z])/g;

/**
                                     * Hyphenates a camelcased string, for example:
                                     *
                                     *   > hyphenate('backgroundColor')
                                     *   < "background-color"
                                     *
                                     * For CSS style names, use `hyphenateStyleName` instead which works properly
                                     * with all vendor prefixes, including `ms`.
                                     *
                                     * @param {string} string
                                     * @return {string}
                                     */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

/**
   * Hyphenates a camelcased CSS property name, for example:
   *
   *   > hyphenateStyleName('backgroundColor')
   *   < "background-color"
   *   > hyphenateStyleName('MozTransition')
   *   < "-moz-transition"
   *   > hyphenateStyleName('msTransition')
   *   < "-ms-transition"
   *
   * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
   * is converted to `-ms-`.
   *
   * @param {string} string
   * @return {string}
   */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var isArray = Array.isArray;
var keys = Object.keys;

var counter = 1;
// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

function buildRule(key, value) {
  if (!isUnitlessNumber[key] && typeof value === 'number') {
    value = '' + value + 'px';
  } else if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    value = "'" + value.replace(/'/g, "\\'") + "'";
  }

  return hyphenateStyleName(key) + ': ' + value + ';  ';
}

function styleToCssString(rules) {
  var result = '';
  if (typeof rules === 'string') {
    return rules;
  }
  if (!rules || keys(rules).length === 0) {
    return result;
  }
  var styleKeys = keys(rules);
  for (var j = 0, l = styleKeys.length; j < l; j++) {
    var styleKey = styleKeys[j];
    var value = rules[styleKey];

    if (isArray(value)) {
      for (var i = 0, len = value.length; i < len; i++) {
        result += buildRule(styleKey, value[i]);
      }
    } else {
      result += buildRule(styleKey, value);
    }
  }
  return result;
}

module.exports = styleToCssString;
});
define('wxcomponents/wux-weapp/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "$wuxCountDown", { enumerable: true, get: function get() {return _index.default;} });Object.defineProperty(exports, "$wuxCountUp", { enumerable: true, get: function get() {return _index2.default;} });exports.$stopWuxLoader = exports.$stopWuxRefresher = exports.$wuxCalendar = exports.$wuxSelect = exports.$wuxKeyBoard = exports.$wuxNotification = exports.$wuxGallery = exports.$wuxToptips = exports.$wuxDialog = exports.$wuxLoading = exports.$wuxToast = exports.$wuxBackdrop = exports.$wuxActionSheet = void 0;var _index = _interopRequireDefault(require("./countdown/index"));
var _index2 = _interopRequireDefault(require("./countup/index"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
                                                                                                                                                                * @param {String} selector 节点选择器
                                                                                                                                                                * @param {Object} ctx 页面栈或组件的实例，默认为当前页面栈实例
                                                                                                                                                                */
var getCtx = function getCtx(selector) {var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentPages()[getCurrentPages().length - 1];
  var componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
    throw new Error('无法找到对应的组件，请按文档说明使用组件');
  }

  return componentCtx;
};

var $wuxActionSheet = function $wuxActionSheet() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-actionsheet';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxActionSheet = $wuxActionSheet;
var $wuxBackdrop = function $wuxBackdrop() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-backdrop';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxBackdrop = $wuxBackdrop;
var $wuxToast = function $wuxToast() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-toast';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxToast = $wuxToast;
var $wuxLoading = function $wuxLoading() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-loading';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxLoading = $wuxLoading;
var $wuxDialog = function $wuxDialog() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-dialog';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxDialog = $wuxDialog;
var $wuxToptips = function $wuxToptips() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-toptips';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxToptips = $wuxToptips;
var $wuxGallery = function $wuxGallery() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-gallery';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxGallery = $wuxGallery;
var $wuxNotification = function $wuxNotification() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-notification';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxNotification = $wuxNotification;
var $wuxKeyBoard = function $wuxKeyBoard() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-keyboard';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxKeyBoard = $wuxKeyBoard;
var $wuxSelect = function $wuxSelect() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-select';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxSelect = $wuxSelect;
var $wuxCalendar = function $wuxCalendar() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-calendar';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$wuxCalendar = $wuxCalendar;
var $stopWuxRefresher = function $stopWuxRefresher() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-refresher';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx).finishPullToRefresh();};exports.$stopWuxRefresher = $stopWuxRefresher;
var $stopWuxLoader = function $stopWuxLoader() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#wux-refresher';var ctx = arguments.length > 1 ? arguments[1] : undefined;var isEnd = arguments.length > 2 ? arguments[2] : undefined;return getCtx(selector, ctx).finishLoadmore(isEnd);};exports.$stopWuxLoader = $stopWuxLoader;
});
define('wxcomponents/wux-weapp/qrcode/qr.js/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var QRCode = require('./lib/QRCode');
var ErrorCorrectLevel = require('./lib/ErrorCorrectLevel');

var qrcode = function qrcode(data, opt) {
  opt = opt || {};
  var qr = new QRCode(opt.typeNumber || -1,
  opt.errorCorrectLevel || ErrorCorrectLevel.H);
  qr.addData(data);
  qr.make();

  return qr;
};

qrcode.ErrorCorrectLevel = ErrorCorrectLevel;

module.exports = qrcode;
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/8BitByte.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var mode = require('./mode');

function QR8bitByte(data) {
  this.mode = mode.MODE_8BIT_BYTE;
  this.data = data;
}

QR8bitByte.prototype = {

  getLength: function getLength(buffer) {
    return this.data.length;
  },

  write: function write(buffer) {
    for (var i = 0; i < this.data.length; i++) {
      // not JIS ...
      buffer.put(this.data.charCodeAt(i), 8);
    }
  } };


module.exports = QR8bitByte;
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/BitBuffer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}

QRBitBuffer.prototype = {

  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  },

  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) == 1);
    }
  },

  getLengthInBits: function getLengthInBits() {
    return this.length;
  },

  putBit: function putBit(bit) {

    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }

    this.length++;
  } };


module.exports = QRBitBuffer;
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/ErrorCorrectLevel.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";module.exports = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2 };
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/math.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var QRMath = {

  glog: function glog(n) {

    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }

    return QRMath.LOG_TABLE[n];
  },

  gexp: function gexp(n) {

    while (n < 0) {
      n += 255;
    }

    while (n >= 256) {
      n -= 255;
    }

    return QRMath.EXP_TABLE[n];
  },

  EXP_TABLE: new Array(256),

  LOG_TABLE: new Array(256) };



for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^
  QRMath.EXP_TABLE[i - 5] ^
  QRMath.EXP_TABLE[i - 6] ^
  QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}

module.exports = QRMath;
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/mode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";module.exports = {
  MODE_NUMBER: 1 << 0,
  MODE_ALPHA_NUM: 1 << 1,
  MODE_8BIT_BYTE: 1 << 2,
  MODE_KANJI: 1 << 3 };
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/Polynomial.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var math = require('./math');

function QRPolynomial(num, shift) {

  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }

  var offset = 0;

  while (offset < num.length && num[offset] == 0) {
    offset++;
  }

  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}

QRPolynomial.prototype = {

  get: function get(index) {
    return this.num[index];
  },

  getLength: function getLength() {
    return this.num.length;
  },

  multiply: function multiply(e) {

    var num = new Array(this.getLength() + e.getLength() - 1);

    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= math.gexp(math.glog(this.get(i)) + math.glog(e.get(j)));
      }
    }

    return new QRPolynomial(num, 0);
  },

  mod: function mod(e) {

    if (this.getLength() - e.getLength() < 0) {
      return this;
    }

    var ratio = math.glog(this.get(0)) - math.glog(e.get(0));

    var num = new Array(this.getLength());

    for (var i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i);
    }

    for (var i = 0; i < e.getLength(); i++) {
      num[i] ^= math.gexp(math.glog(e.get(i)) + ratio);
    }

    // recursive call
    return new QRPolynomial(num, 0).mod(e);
  } };


module.exports = QRPolynomial;
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/QRCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var BitByte = require('./8BitByte');
var RSBlock = require('./RSBlock');
var BitBuffer = require('./BitBuffer');
var util = require('./util');
var Polynomial = require('./Polynomial');

function QRCode(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
}

// for client side minification
var proto = QRCode.prototype;

proto.addData = function (data) {
  var newData = new BitByte(data);
  this.dataList.push(newData);
  this.dataCache = null;
};

proto.isDark = function (row, col) {
  if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
    throw new Error(row + "," + col);
  }
  return this.modules[row][col];
};

proto.getModuleCount = function () {
  return this.moduleCount;
};

proto.make = function () {
  // Calculate automatically typeNumber if provided is < 1
  if (this.typeNumber < 1) {
    var typeNumber = 1;
    for (typeNumber = 1; typeNumber < 40; typeNumber++) {
      var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);

      var buffer = new BitBuffer();
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i++) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      for (var i = 0; i < this.dataList.length; i++) {
        var data = this.dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }
      if (buffer.getLengthInBits() <= totalDataCount * 8)
      break;
    }
    this.typeNumber = typeNumber;
  }
  this.makeImpl(false, this.getBestMaskPattern());
};

proto.makeImpl = function (test, maskPattern) {

  this.moduleCount = this.typeNumber * 4 + 17;
  this.modules = new Array(this.moduleCount);

  for (var row = 0; row < this.moduleCount; row++) {

    this.modules[row] = new Array(this.moduleCount);

    for (var col = 0; col < this.moduleCount; col++) {
      this.modules[row][col] = null; //(col + row) % 3;
    }
  }

  this.setupPositionProbePattern(0, 0);
  this.setupPositionProbePattern(this.moduleCount - 7, 0);
  this.setupPositionProbePattern(0, this.moduleCount - 7);
  this.setupPositionAdjustPattern();
  this.setupTimingPattern();
  this.setupTypeInfo(test, maskPattern);

  if (this.typeNumber >= 7) {
    this.setupTypeNumber(test);
  }

  if (this.dataCache == null) {
    this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
  }

  this.mapData(this.dataCache, maskPattern);
};

proto.setupPositionProbePattern = function (row, col) {

  for (var r = -1; r <= 7; r++) {

    if (row + r <= -1 || this.moduleCount <= row + r) continue;

    for (var c = -1; c <= 7; c++) {

      if (col + c <= -1 || this.moduleCount <= col + c) continue;

      if (0 <= r && r <= 6 && (c == 0 || c == 6) ||
      0 <= c && c <= 6 && (r == 0 || r == 6) ||
      2 <= r && r <= 4 && 2 <= c && c <= 4) {
        this.modules[row + r][col + c] = true;
      } else {
        this.modules[row + r][col + c] = false;
      }
    }
  }
};

proto.getBestMaskPattern = function () {

  var minLostPoint = 0;
  var pattern = 0;

  for (var i = 0; i < 8; i++) {

    this.makeImpl(true, i);

    var lostPoint = util.getLostPoint(this);

    if (i == 0 || minLostPoint > lostPoint) {
      minLostPoint = lostPoint;
      pattern = i;
    }
  }

  return pattern;
};

proto.createMovieClip = function (target_mc, instance_name, depth) {

  var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
  var cs = 1;

  this.make();

  for (var row = 0; row < this.modules.length; row++) {

    var y = row * cs;

    for (var col = 0; col < this.modules[row].length; col++) {

      var x = col * cs;
      var dark = this.modules[row][col];

      if (dark) {
        qr_mc.beginFill(0, 100);
        qr_mc.moveTo(x, y);
        qr_mc.lineTo(x + cs, y);
        qr_mc.lineTo(x + cs, y + cs);
        qr_mc.lineTo(x, y + cs);
        qr_mc.endFill();
      }
    }
  }

  return qr_mc;
};

proto.setupTimingPattern = function () {

  for (var r = 8; r < this.moduleCount - 8; r++) {
    if (this.modules[r][6] != null) {
      continue;
    }
    this.modules[r][6] = r % 2 == 0;
  }

  for (var c = 8; c < this.moduleCount - 8; c++) {
    if (this.modules[6][c] != null) {
      continue;
    }
    this.modules[6][c] = c % 2 == 0;
  }
};

proto.setupPositionAdjustPattern = function () {

  var pos = util.getPatternPosition(this.typeNumber);

  for (var i = 0; i < pos.length; i++) {

    for (var j = 0; j < pos.length; j++) {

      var row = pos[i];
      var col = pos[j];

      if (this.modules[row][col] != null) {
        continue;
      }

      for (var r = -2; r <= 2; r++) {

        for (var c = -2; c <= 2; c++) {

          if (r == -2 || r == 2 || c == -2 || c == 2 ||
          r == 0 && c == 0) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    }
  }
};

proto.setupTypeNumber = function (test) {

  var bits = util.getBCHTypeNumber(this.typeNumber);

  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
  }

  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
  }
};

proto.setupTypeInfo = function (test, maskPattern) {

  var data = this.errorCorrectLevel << 3 | maskPattern;
  var bits = util.getBCHTypeInfo(data);

  // vertical		
  for (var i = 0; i < 15; i++) {

    var mod = !test && (bits >> i & 1) == 1;

    if (i < 6) {
      this.modules[i][8] = mod;
    } else if (i < 8) {
      this.modules[i + 1][8] = mod;
    } else {
      this.modules[this.moduleCount - 15 + i][8] = mod;
    }
  }

  // horizontal
  for (var i = 0; i < 15; i++) {

    var mod = !test && (bits >> i & 1) == 1;

    if (i < 8) {
      this.modules[8][this.moduleCount - i - 1] = mod;
    } else if (i < 9) {
      this.modules[8][15 - i - 1 + 1] = mod;
    } else {
      this.modules[8][15 - i - 1] = mod;
    }
  }

  // fixed module
  this.modules[this.moduleCount - 8][8] = !test;
};

proto.mapData = function (data, maskPattern) {

  var inc = -1;
  var row = this.moduleCount - 1;
  var bitIndex = 7;
  var byteIndex = 0;

  for (var col = this.moduleCount - 1; col > 0; col -= 2) {

    if (col == 6) col--;

    while (true) {

      for (var c = 0; c < 2; c++) {

        if (this.modules[row][col - c] == null) {

          var dark = false;

          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) == 1;
          }

          var mask = util.getMask(maskPattern, row, col - c);

          if (mask) {
            dark = !dark;
          }

          this.modules[row][col - c] = dark;
          bitIndex--;

          if (bitIndex == -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }

      row += inc;

      if (row < 0 || this.moduleCount <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
};

QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {

  var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

  var buffer = new BitBuffer();

  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    buffer.put(data.mode, 4);
    buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
    data.write(buffer);
  }

  // calc num max data.
  var totalDataCount = 0;
  for (var i = 0; i < rsBlocks.length; i++) {
    totalDataCount += rsBlocks[i].dataCount;
  }

  if (buffer.getLengthInBits() > totalDataCount * 8) {
    throw new Error("code length overflow. (" +
    buffer.getLengthInBits() +
    ">" +
    totalDataCount * 8 +
    ")");
  }

  // end code
  if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  }

  // padding
  while (buffer.getLengthInBits() % 8 != 0) {
    buffer.putBit(false);
  }

  // padding
  while (true) {

    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }
    buffer.put(QRCode.PAD0, 8);

    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }
    buffer.put(QRCode.PAD1, 8);
  }

  return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function (buffer, rsBlocks) {

  var offset = 0;

  var maxDcCount = 0;
  var maxEcCount = 0;

  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);

  for (var r = 0; r < rsBlocks.length; r++) {

    var dcCount = rsBlocks[r].dataCount;
    var ecCount = rsBlocks[r].totalCount - dcCount;

    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);

    dcdata[r] = new Array(dcCount);

    for (var i = 0; i < dcdata[r].length; i++) {
      dcdata[r][i] = 0xff & buffer.buffer[i + offset];
    }
    offset += dcCount;

    var rsPoly = util.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);

    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);
    for (var i = 0; i < ecdata[r].length; i++) {
      var modIndex = i + modPoly.getLength() - ecdata[r].length;
      ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }

  }

  var totalCodeCount = 0;
  for (var i = 0; i < rsBlocks.length; i++) {
    totalCodeCount += rsBlocks[i].totalCount;
  }

  var data = new Array(totalCodeCount);
  var index = 0;

  for (var i = 0; i < maxDcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < dcdata[r].length) {
        data[index++] = dcdata[r][i];
      }
    }
  }

  for (var i = 0; i < maxEcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < ecdata[r].length) {
        data[index++] = ecdata[r][i];
      }
    }
  }

  return data;
};

module.exports = QRCode;
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/RSBlock.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict"; // ErrorCorrectLevel
var ECL = require('./ErrorCorrectLevel');

function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [

// L
// M
// Q
// H

// 1
[1, 26, 19],
[1, 26, 16],
[1, 26, 13],
[1, 26, 9],

// 2
[1, 44, 34],
[1, 44, 28],
[1, 44, 22],
[1, 44, 16],

// 3
[1, 70, 55],
[1, 70, 44],
[2, 35, 17],
[2, 35, 13],

// 4		
[1, 100, 80],
[2, 50, 32],
[2, 50, 24],
[4, 25, 9],

// 5
[1, 134, 108],
[2, 67, 43],
[2, 33, 15, 2, 34, 16],
[2, 33, 11, 2, 34, 12],

// 6
[2, 86, 68],
[4, 43, 27],
[4, 43, 19],
[4, 43, 15],

// 7		
[2, 98, 78],
[4, 49, 31],
[2, 32, 14, 4, 33, 15],
[4, 39, 13, 1, 40, 14],

// 8
[2, 121, 97],
[2, 60, 38, 2, 61, 39],
[4, 40, 18, 2, 41, 19],
[4, 40, 14, 2, 41, 15],

// 9
[2, 146, 116],
[3, 58, 36, 2, 59, 37],
[4, 36, 16, 4, 37, 17],
[4, 36, 12, 4, 37, 13],

// 10		
[2, 86, 68, 2, 87, 69],
[4, 69, 43, 1, 70, 44],
[6, 43, 19, 2, 44, 20],
[6, 43, 15, 2, 44, 16],

// 11
[4, 101, 81],
[1, 80, 50, 4, 81, 51],
[4, 50, 22, 4, 51, 23],
[3, 36, 12, 8, 37, 13],

// 12
[2, 116, 92, 2, 117, 93],
[6, 58, 36, 2, 59, 37],
[4, 46, 20, 6, 47, 21],
[7, 42, 14, 4, 43, 15],

// 13
[4, 133, 107],
[8, 59, 37, 1, 60, 38],
[8, 44, 20, 4, 45, 21],
[12, 33, 11, 4, 34, 12],

// 14
[3, 145, 115, 1, 146, 116],
[4, 64, 40, 5, 65, 41],
[11, 36, 16, 5, 37, 17],
[11, 36, 12, 5, 37, 13],

// 15
[5, 109, 87, 1, 110, 88],
[5, 65, 41, 5, 66, 42],
[5, 54, 24, 7, 55, 25],
[11, 36, 12],

// 16
[5, 122, 98, 1, 123, 99],
[7, 73, 45, 3, 74, 46],
[15, 43, 19, 2, 44, 20],
[3, 45, 15, 13, 46, 16],

// 17
[1, 135, 107, 5, 136, 108],
[10, 74, 46, 1, 75, 47],
[1, 50, 22, 15, 51, 23],
[2, 42, 14, 17, 43, 15],

// 18
[5, 150, 120, 1, 151, 121],
[9, 69, 43, 4, 70, 44],
[17, 50, 22, 1, 51, 23],
[2, 42, 14, 19, 43, 15],

// 19
[3, 141, 113, 4, 142, 114],
[3, 70, 44, 11, 71, 45],
[17, 47, 21, 4, 48, 22],
[9, 39, 13, 16, 40, 14],

// 20
[3, 135, 107, 5, 136, 108],
[3, 67, 41, 13, 68, 42],
[15, 54, 24, 5, 55, 25],
[15, 43, 15, 10, 44, 16],

// 21
[4, 144, 116, 4, 145, 117],
[17, 68, 42],
[17, 50, 22, 6, 51, 23],
[19, 46, 16, 6, 47, 17],

// 22
[2, 139, 111, 7, 140, 112],
[17, 74, 46],
[7, 54, 24, 16, 55, 25],
[34, 37, 13],

// 23
[4, 151, 121, 5, 152, 122],
[4, 75, 47, 14, 76, 48],
[11, 54, 24, 14, 55, 25],
[16, 45, 15, 14, 46, 16],

// 24
[6, 147, 117, 4, 148, 118],
[6, 73, 45, 14, 74, 46],
[11, 54, 24, 16, 55, 25],
[30, 46, 16, 2, 47, 17],

// 25
[8, 132, 106, 4, 133, 107],
[8, 75, 47, 13, 76, 48],
[7, 54, 24, 22, 55, 25],
[22, 45, 15, 13, 46, 16],

// 26
[10, 142, 114, 2, 143, 115],
[19, 74, 46, 4, 75, 47],
[28, 50, 22, 6, 51, 23],
[33, 46, 16, 4, 47, 17],

// 27
[8, 152, 122, 4, 153, 123],
[22, 73, 45, 3, 74, 46],
[8, 53, 23, 26, 54, 24],
[12, 45, 15, 28, 46, 16],

// 28
[3, 147, 117, 10, 148, 118],
[3, 73, 45, 23, 74, 46],
[4, 54, 24, 31, 55, 25],
[11, 45, 15, 31, 46, 16],

// 29
[7, 146, 116, 7, 147, 117],
[21, 73, 45, 7, 74, 46],
[1, 53, 23, 37, 54, 24],
[19, 45, 15, 26, 46, 16],

// 30
[5, 145, 115, 10, 146, 116],
[19, 75, 47, 10, 76, 48],
[15, 54, 24, 25, 55, 25],
[23, 45, 15, 25, 46, 16],

// 31
[13, 145, 115, 3, 146, 116],
[2, 74, 46, 29, 75, 47],
[42, 54, 24, 1, 55, 25],
[23, 45, 15, 28, 46, 16],

// 32
[17, 145, 115],
[10, 74, 46, 23, 75, 47],
[10, 54, 24, 35, 55, 25],
[19, 45, 15, 35, 46, 16],

// 33
[17, 145, 115, 1, 146, 116],
[14, 74, 46, 21, 75, 47],
[29, 54, 24, 19, 55, 25],
[11, 45, 15, 46, 46, 16],

// 34
[13, 145, 115, 6, 146, 116],
[14, 74, 46, 23, 75, 47],
[44, 54, 24, 7, 55, 25],
[59, 46, 16, 1, 47, 17],

// 35
[12, 151, 121, 7, 152, 122],
[12, 75, 47, 26, 76, 48],
[39, 54, 24, 14, 55, 25],
[22, 45, 15, 41, 46, 16],

// 36
[6, 151, 121, 14, 152, 122],
[6, 75, 47, 34, 76, 48],
[46, 54, 24, 10, 55, 25],
[2, 45, 15, 64, 46, 16],

// 37
[17, 152, 122, 4, 153, 123],
[29, 74, 46, 14, 75, 47],
[49, 54, 24, 10, 55, 25],
[24, 45, 15, 46, 46, 16],

// 38
[4, 152, 122, 18, 153, 123],
[13, 74, 46, 32, 75, 47],
[48, 54, 24, 14, 55, 25],
[42, 45, 15, 32, 46, 16],

// 39
[20, 147, 117, 4, 148, 118],
[40, 75, 47, 7, 76, 48],
[43, 54, 24, 22, 55, 25],
[10, 45, 15, 67, 46, 16],

// 40
[19, 148, 118, 6, 149, 119],
[18, 75, 47, 31, 76, 48],
[34, 54, 24, 34, 55, 25],
[20, 45, 15, 61, 46, 16]];


QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {

  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

  if (rsBlock == undefined) {
    throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
  }

  var length = rsBlock.length / 3;

  var list = new Array();

  for (var i = 0; i < length; i++) {

    var count = rsBlock[i * 3 + 0];
    var totalCount = rsBlock[i * 3 + 1];
    var dataCount = rsBlock[i * 3 + 2];

    for (var j = 0; j < count; j++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }

  return list;
};

QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {

  switch (errorCorrectLevel) {
    case ECL.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
    case ECL.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
    case ECL.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
    case ECL.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
    default:
      return undefined;}

};

module.exports = QRRSBlock;
});
define('wxcomponents/wux-weapp/qrcode/qr.js/lib/util.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var Mode = require('./mode');
var Polynomial = require('./Polynomial');
var math = require('./math');

var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7 };


var QRUtil = {

  PATTERN_POSITION_TABLE: [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170]],


  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,

  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }
    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },

  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }
    return data << 12 | d;
  },

  getBCHDigit: function getBCHDigit(data) {

    var digit = 0;

    while (data != 0) {
      digit++;
      data >>>= 1;
    }

    return digit;
  },

  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },

  getMask: function getMask(maskPattern, i, j) {

    switch (maskPattern) {

      case QRMaskPattern.PATTERN000:return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:return i % 2 == 0;
      case QRMaskPattern.PATTERN010:return j % 3 == 0;
      case QRMaskPattern.PATTERN011:return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:return i * j % 2 + i * j % 3 == 0;
      case QRMaskPattern.PATTERN110:return (i * j % 2 + i * j % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:return (i * j % 3 + (i + j) % 2) % 2 == 0;

      default:
        throw new Error("bad maskPattern:" + maskPattern);}

  },

  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {

    var a = new Polynomial([1], 0);

    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new Polynomial([1, math.gexp(i)], 0));
    }

    return a;
  },

  getLengthInBits: function getLengthInBits(mode, type) {

    if (1 <= type && type < 10) {

      // 1 - 9

      switch (mode) {
        case Mode.MODE_NUMBER:return 10;
        case Mode.MODE_ALPHA_NUM:return 9;
        case Mode.MODE_8BIT_BYTE:return 8;
        case Mode.MODE_KANJI:return 8;
        default:
          throw new Error("mode:" + mode);}


    } else if (type < 27) {

      // 10 - 26

      switch (mode) {
        case Mode.MODE_NUMBER:return 12;
        case Mode.MODE_ALPHA_NUM:return 11;
        case Mode.MODE_8BIT_BYTE:return 16;
        case Mode.MODE_KANJI:return 10;
        default:
          throw new Error("mode:" + mode);}


    } else if (type < 41) {

      // 27 - 40

      switch (mode) {
        case Mode.MODE_NUMBER:return 14;
        case Mode.MODE_ALPHA_NUM:return 13;
        case Mode.MODE_8BIT_BYTE:return 16;
        case Mode.MODE_KANJI:return 12;
        default:
          throw new Error("mode:" + mode);}


    } else {
      throw new Error("type:" + type);
    }
  },

  getLostPoint: function getLostPoint(qrCode) {

    var moduleCount = qrCode.getModuleCount();

    var lostPoint = 0;

    // LEVEL1

    for (var row = 0; row < moduleCount; row++) {

      for (var col = 0; col < moduleCount; col++) {

        var sameCount = 0;
        var dark = qrCode.isDark(row, col);

        for (var r = -1; r <= 1; r++) {

          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }

          for (var c = -1; c <= 1; c++) {

            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }

            if (r == 0 && c == 0) {
              continue;
            }

            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }

        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    }

    // LEVEL2

    for (var row = 0; row < moduleCount - 1; row++) {
      for (var col = 0; col < moduleCount - 1; col++) {
        var count = 0;
        if (qrCode.isDark(row, col)) count++;
        if (qrCode.isDark(row + 1, col)) count++;
        if (qrCode.isDark(row, col + 1)) count++;
        if (qrCode.isDark(row + 1, col + 1)) count++;
        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    }

    // LEVEL3

    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount - 6; col++) {
        if (qrCode.isDark(row, col) &&
        !qrCode.isDark(row, col + 1) &&
        qrCode.isDark(row, col + 2) &&
        qrCode.isDark(row, col + 3) &&
        qrCode.isDark(row, col + 4) &&
        !qrCode.isDark(row, col + 5) &&
        qrCode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount - 6; row++) {
        if (qrCode.isDark(row, col) &&
        !qrCode.isDark(row + 1, col) &&
        qrCode.isDark(row + 2, col) &&
        qrCode.isDark(row + 3, col) &&
        qrCode.isDark(row + 4, col) &&
        !qrCode.isDark(row + 5, col) &&
        qrCode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    }

    // LEVEL4

    var darkCount = 0;

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }

    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;

    return lostPoint;
  } };


module.exports = QRUtil;
});
define('wxcomponents/wux-weapp/timeago/core/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.format = exports.diff = exports.monthDiff = exports.parse = void 0;
/**
                                                                                                                                                        * 解析时间
                                                                                                                                                        */
var parse = function parse(date) {
  if (date instanceof Date) return date;
  if (!isNaN(date) || /^\d+$/.test(date)) return new Date(parseInt(date, 10));
  var s = date.trim();
  s = s.replace(/\.\d+/, ""); // remove milliseconds
  s = s.replace(/-/, "/").replace(/-/, "/");
  s = s.replace(/T/, " ").replace(/Z/, " UTC");
  s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
  s = s.replace(/([\+\-]\d\d)$/, " $100"); // +09 -> +0900
  return new Date(s);
};

/**
    * 计算月份差
    */exports.parse = parse;
var monthDiff = function monthDiff(startMonth, endMonth) {
  var start = parse(startMonth);
  var end = parse(endMonth);
  return (start.getFullYear() - end.getFullYear()) * 12 + start.getMonth() - end.getMonth();
};

/**
    * 计算时间差
    */exports.monthDiff = monthDiff;
var diff = function diff(date, nowDate, unit) {
  var start = parse(date);
  var end = nowDate ? parse(nowDate) : new Date();
  var output = end.getTime() - start.getTime();

  return unit === 'second' && output / 1000 ||
  unit === 'minute' && output / 1000 / 60 ||
  unit === 'hour' && output / 1000 / 60 / 60 ||
  unit === 'day' && output / 1000 / 60 / 60 / 24 ||
  unit === 'week' && output / 1000 / 60 / 60 / 24 / 7 ||
  unit === 'month' && monthDiff(start, end) ||
  unit === 'quarter' && monthDiff(start, end) / 3 ||
  unit === 'year' && monthDiff(start, end) / 12 || output;
};

/**
    * default language
    */exports.diff = diff;
var defaults = {
  second: ['刚刚', '片刻后'],
  seconds: ['%d 秒前', '%d 秒后'],
  minute: ['大约 1 分钟前', '大约 1 分钟后'],
  minutes: ['%d 分钟前', '%d 分钟后'],
  hour: ['大约 1 小时前', '大约 1 小时后'],
  hours: ['%d 小时前', '%d 小时后'],
  day: ['1 天前', '1 天后'],
  days: ['%d 天前', '%d 天后'],
  month: ['大约 1 个月前', '大约 1 个月后'],
  months: ['%d 月前', '%d 月后'],
  year: ['大约 1 年前', '大约 1 年后'],
  years: ['%d 年前', '%d 年后']


  /**
                             * format timeago
                             * @param    {Number} diff 时间差
                             * @param    {Object} opts 配置参数
                             * @return   {String}      文本内容
                             */ };
var format = function format(diff, opts) {
  var options = Object.assign({}, defaults, opts);
  var agoin = diff < 0 ? 1 : 0; // timein or timeago
  var seconds = Math.abs(diff) / 1000;
  var minutes = seconds / 60;
  var hours = minutes / 60;
  var days = hours / 24;
  var years = days / 365;
  var substitute = function substitute(string, number) {return string.replace(/%d/i, number);};
  return seconds < 10 && substitute(options.second[agoin], parseInt(seconds)) ||
  seconds < 45 && substitute(options.seconds[agoin], parseInt(seconds)) ||
  seconds < 90 && substitute(options.minute[agoin], 1) ||
  minutes < 45 && substitute(options.minutes[agoin], parseInt(minutes)) ||
  minutes < 90 && substitute(options.hour[agoin], 1) ||
  hours < 24 && substitute(options.hours[agoin], parseInt(hours)) ||
  hours < 42 && substitute(options.day[agoin], 1) ||
  days < 30 && substitute(options.days[agoin], parseInt(days)) ||
  days < 45 && substitute(options.month[agoin], 1) ||
  days < 365 && substitute(options.months[agoin], parseInt(days / 30)) ||
  years < 1.5 && substitute(options.year[agoin], 1) ||
  substitute(options.years[agoin], parseInt(years));
};exports.format = format;
});
define('wxcomponents/wux-weapp/timeago/locales/en.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  second: ['just now', 'right now'],
  seconds: ['%d seconds ago', '%d seconds from now'],
  minute: ['about a minute ago', 'about a minute from now'],
  minutes: ['%d minutes ago', '%d minutes from now'],
  hour: ['about a hour ago', 'about a hour from now'],
  hours: ['%d hours ago', '%d hours from now'],
  day: ['a day ago', 'a day from now'],
  days: ['%d days ago', '%d days from now'],
  month: ['about a month ago', 'about a month from now'],
  months: ['%d months ago', '%d months from now'],
  year: ['about a year ago', 'about a year from now'],
  years: ['%d years ago', '%d years from now'] };exports.default = _default;
});
define('wxcomponents/wux-weapp/timeago/locales/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(require("./en"));
var _zh_CN = _interopRequireDefault(require("./zh_CN"));
var _zh_TW = _interopRequireDefault(require("./zh_TW"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  en: _en.default,
  zh_CN: _zh_CN.default,
  zh_TW: _zh_TW.default };exports.default = _default;
});
define('wxcomponents/wux-weapp/timeago/locales/zh_CN.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  second: ['刚刚', '片刻后'],
  seconds: ['%d 秒前', '%d 秒后'],
  minute: ['大约 1 分钟前', '大约 1 分钟后'],
  minutes: ['%d 分钟前', '%d 分钟后'],
  hour: ['大约 1 小时前', '大约 1 小时后'],
  hours: ['%d 小时前', '%d 小时后'],
  day: ['1 天前', '1 天后'],
  days: ['%d 天前', '%d 天后'],
  month: ['大约 1 个月前', '大约 1 个月后'],
  months: ['%d 月前', '%d 月后'],
  year: ['大约 1 年前', '大约 1 年后'],
  years: ['%d 年前', '%d 年后'] };exports.default = _default;
});
define('wxcomponents/wux-weapp/timeago/locales/zh_TW.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  second: ['剛剛', '片刻後'],
  seconds: ['%d 秒前', '%d 秒後'],
  minute: ['大約 1 分鐘前', '大約 1 分鐘後'],
  minutes: ['%d 分鐘前', '%d 分鐘後'],
  hour: ['大約 1 小時前', '大約 1 小時後'],
  hours: ['%d 小時前', '%d 小時後'],
  day: ['1 天前', '1 天後'],
  days: ['%d 天前', '%d 天後'],
  month: ['大約 1 個月前', '大約 1 個月後'],
  months: ['%d 月前', '%d 月後'],
  year: ['大約 1 年前', '大約 1 年後'],
  years: ['%d 年前', '%d 年後'] };exports.default = _default;
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'wxcomponents/vant-weapp/info/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/vant-weapp/info/index.js';

define('wxcomponents/vant-weapp/info/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _component = require("../common/component");
(0, _component.VantComponent)({
  props: {
    info: null,
    customStyle: String } });
});
require('wxcomponents/vant-weapp/info/index.js');
__wxRoute = 'wxcomponents/vant-weapp/overlay/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/vant-weapp/overlay/index.js';

define('wxcomponents/vant-weapp/overlay/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _component = require("../common/component");
(0, _component.VantComponent)({
  props: {
    show: Boolean,
    mask: Boolean,
    customStyle: String,
    duration: {
      type: [Number, Object],
      value: 300 },

    zIndex: {
      type: Number,
      value: 1 } },


  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    // for prevent touchmove
    noop: function noop() {} } });
});
require('wxcomponents/vant-weapp/overlay/index.js');
__wxRoute = 'wxcomponents/vant-weapp/popup/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/vant-weapp/popup/index.js';

define('wxcomponents/vant-weapp/popup/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _component = require("../common/component");
var _transition = require("../mixins/transition");
var _iphonex = require("../mixins/iphonex");
(0, _component.VantComponent)({
  classes: [
  'enter-class',
  'enter-active-class',
  'enter-to-class',
  'leave-class',
  'leave-active-class',
  'leave-to-class'],

  mixins: [(0, _transition.transition)(false), _iphonex.iphonex],
  props: {
    transition: {
      type: String,
      observer: 'observeClass' },

    customStyle: String,
    overlayStyle: String,
    zIndex: {
      type: Number,
      value: 100 },

    overlay: {
      type: Boolean,
      value: true },

    closeOnClickOverlay: {
      type: Boolean,
      value: true },

    position: {
      type: String,
      value: 'center',
      observer: 'observeClass' } },


  created: function created() {
    this.observeClass();
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.$emit('click-overlay');
      if (this.data.closeOnClickOverlay) {
        this.$emit('close');
      }
    },
    observeClass: function observeClass() {var _this$data =
      this.data,transition = _this$data.transition,position = _this$data.position;
      this.updateClasses(transition || position);
    } } });
});
require('wxcomponents/vant-weapp/popup/index.js');
__wxRoute = 'wxcomponents/vant-weapp/tab/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/vant-weapp/tab/index.js';

define('wxcomponents/vant-weapp/tab/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _component = require("../common/component");
(0, _component.VantComponent)({
  relation: {
    name: 'tabs',
    type: 'ancestor' },

  props: {
    dot: Boolean,
    info: null,
    title: String,
    disabled: Boolean,
    titleStyle: String },

  data: {
    width: null,
    inited: false,
    active: false,
    animated: false },

  watch: {
    title: 'update',
    disabled: 'update',
    dot: 'update',
    info: 'update',
    titleStyle: 'update' },

  methods: {
    update: function update() {
      var parent = this.getRelationNodes('../tabs/index')[0];
      if (parent) {
        parent.updateTabs();
      }
    } } });
});
require('wxcomponents/vant-weapp/tab/index.js');
__wxRoute = 'wxcomponents/vant-weapp/tabs/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/vant-weapp/tabs/index.js';

define('wxcomponents/vant-weapp/tabs/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _component = require("../common/component");
var _touch = require("../mixins/touch");function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}
(0, _component.VantComponent)({
  mixins: [_touch.touch],
  classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
  relation: {
    name: 'tab',
    type: 'descendant',
    linked: function linked(child) {
      this.child.push(child);
      this.updateTabs(this.data.tabs.concat(child.data));
    },
    unlinked: function unlinked(child) {
      var index = this.child.indexOf(child);var
      tabs = this.data.tabs;
      tabs.splice(index, 1);
      this.child.splice(index, 1);
      this.updateTabs(tabs);
    } },

  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    lineWidth: {
      type: Number,
      value: -1 },

    lineHeight: {
      type: Number,
      value: -1 },

    active: {
      type: Number,
      value: 0 },

    type: {
      type: String,
      value: 'line' },

    border: {
      type: Boolean,
      value: true },

    duration: {
      type: Number,
      value: 0.3 },

    zIndex: {
      type: Number,
      value: 1 },

    swipeThreshold: {
      type: Number,
      value: 4 },

    offsetTop: {
      type: Number,
      value: 0 } },


  data: {
    tabs: [],
    lineStyle: '',
    scrollLeft: 0,
    scrollable: false,
    trackStyle: '',
    wrapStyle: '',
    position: '' },

  watch: {
    swipeThreshold: function swipeThreshold() {
      this.set({
        scrollable: this.child.length > this.data.swipeThreshold });

    },
    color: 'setLine',
    lineWidth: 'setLine',
    lineHeight: 'setLine',
    active: 'setActiveTab',
    animated: 'setTrack',
    offsetTop: 'setWrapStyle' },

  beforeCreate: function beforeCreate() {
    this.child = [];
  },
  mounted: function mounted() {var _this = this;
    this.setLine(true);
    this.setTrack();
    this.scrollIntoView();
    this.getRect('.van-tabs__wrap').then(function (rect) {
      _this.navHeight = rect.height;
      _this.observerContentScroll();
    });
  },
  destroyed: function destroyed() {
    this.createIntersectionObserver().disconnect();
  },
  methods: {
    updateTabs: function updateTabs(tabs) {
      tabs = tabs || this.data.tabs;
      this.set({
        tabs: tabs,
        scrollable: tabs.length > this.data.swipeThreshold });

      this.setActiveTab();
    },
    trigger: function trigger(eventName, index) {
      this.$emit(eventName, {
        index: index,
        title: this.data.tabs[index].title });

    },
    onTap: function onTap(event) {var
      index = event.currentTarget.dataset.index;
      if (this.data.tabs[index].disabled) {
        this.trigger('disabled', index);
      } else
      {
        this.trigger('click', index);
        this.setActive(index);
      }
    },
    setActive: function setActive(active) {
      if (active !== this.data.active) {
        this.trigger('change', active);
        this.set({ active: active });
        this.setActiveTab();
      }
    },
    setLine: function setLine(skipTransition) {var _this2 = this;
      if (this.data.type !== 'line') {
        return;
      }var _this$data =
      this.data,color = _this$data.color,active = _this$data.active,duration = _this$data.duration,lineWidth = _this$data.lineWidth,lineHeight = _this$data.lineHeight;
      this.getRect('.van-tab', true).then(function (rects) {
        var rect = rects[active];
        var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
        var height = lineHeight !== -1 ? "height: ".concat(lineHeight, "px;") : '';
        var left = rects.
        slice(0, active).
        reduce(function (prev, curr) {return prev + curr.width;}, 0);
        left += (rect.width - width) / 2;
        var transition = skipTransition ?
        '' : "transition-duration: ".concat(
        duration, "s; -webkit-transition-duration: ").concat(duration, "s;");
        _this2.set({
          lineStyle: "\n            ".concat(
          height, "\n            width: ").concat(
          width, "px;\n            background-color: ").concat(
          color, ";\n            -webkit-transform: translateX(").concat(
          left, "px);\n            transform: translateX(").concat(
          left, "px);\n            ").concat(
          transition, "\n          ") });


      });
    },
    setTrack: function setTrack() {var _this3 = this;var _this$data2 =
      this.data,animated = _this$data2.animated,active = _this$data2.active,duration = _this$data2.duration;
      if (!animated)
      return '';
      this.getRect('.van-tabs__content').then(function (rect) {var
        width = rect.width;
        _this3.set({
          trackStyle: "\n            width: ".concat(
          width * _this3.child.length, "px;\n            left: ").concat(
          -1 * active * width, "px;\n            transition: left ").concat(
          duration, "s;\n            display: -webkit-box;\n            display: flex;\n          ") });




        var props = { width: width, animated: animated };
        _this3.child.forEach(function (item) {
          item.set(props);
        });
      });
    },
    setActiveTab: function setActiveTab() {var _this4 = this;
      this.child.forEach(function (item, index) {
        var data = {
          active: index === _this4.data.active };

        if (data.active) {
          data.inited = true;
        }
        if (data.active !== item.data.active) {
          item.set(data);
        }
      });
      this.set({}, function () {
        _this4.setLine();
        _this4.setTrack();
        _this4.scrollIntoView();
      });
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {var _this5 = this;var _this$data3 =
      this.data,active = _this$data3.active,scrollable = _this$data3.scrollable;
      if (!scrollable) {
        return;
      }
      Promise.all([
      this.getRect('.van-tab', true),
      this.getRect('.van-tabs__nav')]).
      then(function (_ref) {var _ref2 = _slicedToArray(_ref, 2),tabRects = _ref2[0],navRect = _ref2[1];
        var tabRect = tabRects[active];
        var offsetLeft = tabRects.
        slice(0, active).
        reduce(function (prev, curr) {return prev + curr.width;}, 0);
        _this5.set({
          scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2 });

      });
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.data.swipeable)
      return;
      this.touchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.data.swipeable)
      return;
      this.touchMove(event);
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      if (!this.data.swipeable)
      return;var _this$data4 =
      this.data,active = _this$data4.active,tabs = _this$data4.tabs;var
      direction = this.direction,deltaX = this.deltaX,offsetX = this.offsetX;
      var minSwipeDistance = 50;
      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        if (deltaX > 0 && active !== 0) {
          this.setActive(active - 1);
        } else
        if (deltaX < 0 && active !== tabs.length - 1) {
          this.setActive(active + 1);
        }
      }
    },
    setWrapStyle: function setWrapStyle() {var _this$data5 =
      this.data,offsetTop = _this$data5.offsetTop,position = _this$data5.position;
      var wrapStyle;
      switch (position) {
        case 'top':
          wrapStyle = "\n            top: ".concat(
          offsetTop, "px;\n            position: fixed;\n          ");


          break;
        case 'bottom':
          wrapStyle = "\n            top: auto;\n            bottom: 0;\n          ";



          break;
        default:
          wrapStyle = '';}

      // cut down `set`
      if (wrapStyle === this.data.wrapStyle)
      return;
      this.set({ wrapStyle: wrapStyle });
    },
    observerContentScroll: function observerContentScroll() {var _this6 = this;
      if (!this.data.sticky) {
        return;
      }var
      offsetTop = this.data.offsetTop;var _wx$getSystemInfoSync =
      wx.getSystemInfoSync(),windowHeight = _wx$getSystemInfoSync.windowHeight;
      this.createIntersectionObserver().disconnect();
      this.createIntersectionObserver().
      relativeToViewport({ top: -(this.navHeight + offsetTop) }).
      observe('.van-tabs', function (res) {var
        top = res.boundingClientRect.top;
        if (top > offsetTop) {
          return;
        }
        var position = res.intersectionRatio > 0 ? 'top' : 'bottom';
        _this6.$emit('scroll', {
          scrollTop: top + offsetTop,
          isFixed: position === 'top' });

        _this6.setPosition(position);
      });
      this.createIntersectionObserver().
      relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) }).
      observe('.van-tabs', function (res) {var _res$boundingClientRe =
        res.boundingClientRect,top = _res$boundingClientRe.top,bottom = _res$boundingClientRe.bottom;
        if (bottom < _this6.navHeight) {
          return;
        }
        var position = res.intersectionRatio > 0 ? 'top' : '';
        _this6.$emit('scroll', {
          scrollTop: top + offsetTop,
          isFixed: position === 'top' });

        _this6.setPosition(position);
      });
    },
    setPosition: function setPosition(position) {var _this7 = this;
      if (position !== this.data.position) {
        this.set({ position: position }).then(function () {
          _this7.setWrapStyle();
        });
      }
    } } });
});
require('wxcomponents/vant-weapp/tabs/index.js');
__wxRoute = 'wxcomponents/vant-weapp/transition/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/vant-weapp/transition/index.js';

define('wxcomponents/vant-weapp/transition/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _component = require("../common/component");
var _transition = require("../mixins/transition");
(0, _component.VantComponent)({
  classes: [
  'enter-class',
  'enter-active-class',
  'enter-to-class',
  'leave-class',
  'leave-active-class',
  'leave-to-class'],

  mixins: [(0, _transition.transition)(true)] });
});
require('wxcomponents/vant-weapp/transition/index.js');
__wxRoute = 'wxcomponents/wux-weapp/accordion-group/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/accordion-group/index.js';

define('wxcomponents/wux-weapp/accordion-group/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

(0, _baseComponent.default)({
  relations: {
    '../accordion/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.changeCurrent);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-accordion-group' },

    cellGroupPrefixCls: {
      type: String,
      value: 'wux-cell-group' },

    defaultCurrent: {
      type: Array,
      value: [] },

    current: {
      type: Array,
      value: [],
      observer: 'changeCurrent' },

    controlled: {
      type: Boolean,
      value: false },

    accordion: {
      type: Boolean,
      value: false },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' } },


  data: {
    activeKey: '',
    keys: [] },

  methods: {
    updated: function updated(activeKey, condition) {var _this = this;
      var elements = this.getRelationNodes('../accordion/index');

      if (elements.length > 0) {
        if (condition) {
          this.setData({
            activeKey: activeKey });


          elements.forEach(function (element, index) {
            var key = element.data.key || String(index);
            var current = _this.data.accordion ? activeKey[0] === key : activeKey.indexOf(key) !== -1;

            element.changeCurrent(current, key);
          });
        }
      }

      if (this.data.keys.length !== elements.length) {
        this.setData({
          keys: elements.map(function (element) {return element.data;}) });

      }
    },
    changeCurrent: function changeCurrent() {var activeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
      this.updated(activeKey, this.data.controlled);
    },
    emitEvent: function emitEvent(key) {
      this.triggerEvent('change', {
        key: key,
        keys: this.data.keys });

    },
    setActiveKey: function setActiveKey(activeKey) {
      if (this.data.activeKey !== activeKey) {
        this.updated(activeKey, !this.data.controlled);
      }

      this.emitEvent(this.data.accordion ? activeKey[0] : activeKey);
    },
    onClickItem: function onClickItem(key) {
      var activeKey = _toConsumableArray(this.data.activeKey);

      if (this.data.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = activeKey.indexOf(key) !== -1 ? activeKey.filter(function (n) {return n !== key;}) : [].concat(_toConsumableArray(activeKey), [key]);
      }

      this.setActiveKey(activeKey);
    } },

  ready: function ready() {var _this$data =
    this.data,defaultCurrent = _this$data.defaultCurrent,current = _this$data.current,controlled = _this$data.controlled;
    var activeKey = controlled ? current : defaultCurrent;

    this.updated(activeKey, true);
  } });
});
require('wxcomponents/wux-weapp/accordion-group/index.js');
__wxRoute = 'wxcomponents/wux-weapp/accordion/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/accordion/index.js';

define('wxcomponents/wux-weapp/accordion/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../accordion-group/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-accordion' },

    key: {
      type: String,
      value: '' },

    thumb: {
      type: String,
      value: '' },

    title: {
      type: String,
      value: '' },

    content: {
      type: String,
      value: '' },

    disabled: {
      type: Boolean,
      value: false },

    showArrow: {
      type: Boolean,
      value: true } },


  data: {
    current: false,
    index: '0' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,current = _this$data.current,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--current"), current), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var hd = "".concat(prefixCls, "__hd");
      var thumb = "".concat(prefixCls, "__thumb");
      var title = "".concat(prefixCls, "__title");
      var arrow = "".concat(prefixCls, "__arrow");
      var bd = "".concat(prefixCls, "__bd");
      var content = "".concat(prefixCls, "__content");

      return {
        wrap: wrap,
        hd: hd,
        thumb: thumb,
        title: title,
        arrow: arrow,
        bd: bd,
        content: content };

    } },

  methods: {
    changeCurrent: function changeCurrent(current, index) {
      this.setData({
        current: current,
        index: index });

    },
    onTap: function onTap() {var _this$data2 =
      this.data,index = _this$data2.index,disabled = _this$data2.disabled;
      var parent = this.getRelationNodes('../accordion-group/index')[0];

      if (disabled || !parent) {
        return false;
      }

      parent.onClickItem(index);
    } } });
});
require('wxcomponents/wux-weapp/accordion/index.js');
__wxRoute = 'wxcomponents/wux-weapp/actionsheet/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/actionsheet/index.js';

define('wxcomponents/wux-weapp/actionsheet/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames7 = _interopRequireDefault(require("../helpers/classNames"));
var _index = require("../index");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = {
  prefixCls: 'wux-actionsheet',
  classNames: 'wux-animate--slideInUp',
  theme: 'ios',
  className: '',
  titleText: '',
  buttons: [],
  buttonClicked: function buttonClicked() {},
  cancelText: '取消',
  cancel: function cancel() {} };




(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,theme = _this$data.theme,buttons = _this$data.buttons;
      var content = (0, _classNames7.default)("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(
      prefixCls, "__content--theme-").concat(theme), theme));

      var options = (0, _classNames7.default)("".concat(prefixCls, "__group"), _defineProperty({}, "".concat(
      prefixCls, "__group--options"), true));

      var title = "".concat(prefixCls, "__title");
      var destructive = (0, _classNames7.default)("".concat(prefixCls, "__button"), _defineProperty({}, "".concat(
      prefixCls, "__button--destructive"), true));

      var button = buttons.map(function (button) {var _classNames4;
        var wrap = (0, _classNames7.default)("".concat(prefixCls, "__button"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(
        prefixCls, "__button--option"), true), _defineProperty(_classNames4, "".concat(
        prefixCls, "__button--disabled"), button.disabled), _defineProperty(_classNames4, "".concat(
        button.className), button.className), _classNames4));

        var hover = button.hoverClass && button.hoverClass !== 'default' ? button.hoverClass : "".concat(prefixCls, "__button--hover");

        return {
          wrap: wrap,
          hover: hover };

      });
      var icon = "".concat(prefixCls, "__icon");
      var text = "".concat(prefixCls, "__text");
      var group = (0, _classNames7.default)("".concat(prefixCls, "__group"), _defineProperty({}, "".concat(
      prefixCls, "__group--cancel"), true));

      var cancel = (0, _classNames7.default)("".concat(prefixCls, "__button"), _defineProperty({}, "".concat(
      prefixCls, "__button--cancel"), true));

      var hover = "".concat(prefixCls, "__button--hover");

      return {
        content: content,
        options: options,
        title: title,
        button: button,
        icon: icon,
        text: text,
        destructive: destructive,
        group: group,
        cancel: cancel,
        hover: hover };

    } },

  methods: {
    /**
              * 显示
              */
    showSheet: function showSheet() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts));
      this.removed = false;
      this.$$setData(_objectSpread({ in: true }, options));
      this.$wuxBackdrop.retain();
      return this.cancel.bind(this);
    },
    /**
        * 隐藏
        */
    removeSheet: function removeSheet(callback) {
      if (this.removed) return false;
      this.removed = true;
      this.$$setData({ in: false });
      this.$wuxBackdrop.release();
      if (typeof callback === 'function') {
        callback(this.data.buttons);
      }
    },
    /**
        * 按钮点击事件
        */
    buttonClicked: function buttonClicked(e) {var
      index = e.currentTarget.dataset.index;
      if (this.fns.buttonClicked(index, this.data.buttons[index]) === true) {
        this.removeSheet();
      }
    },
    /**
        * 删除按钮点击事件
        */
    destructiveButtonClicked: function destructiveButtonClicked() {
      if (this.fns.destructiveButtonClicked() === true) {
        this.removeSheet();
      }
    },
    /**
        * 取消按钮点击事件
        */
    cancel: function cancel() {
      this.removeSheet(this.fns.cancel);
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      this.triggerEvent('getuserinfo', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindcontact: function bindcontact(e) {
      this.triggerEvent('contact', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindopensetting: function bindopensetting(e) {
      this.triggerEvent('opensetting', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    onError: function onError(e) {
      this.triggerEvent('error', _objectSpread({}, e.detail, e.currentTarget.dataset));
    } },

  created: function created() {
    this.$wuxBackdrop = (0, _index.$wuxBackdrop)('#wux-backdrop', this);
  } });
});
require('wxcomponents/wux-weapp/actionsheet/index.js');
__wxRoute = 'wxcomponents/wux-weapp/alert/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/alert/index.js';

define('wxcomponents/wux-weapp/alert/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-alert' },

    classNames: {
      type: null,
      value: 'wux-animate--fadeIn' },

    theme: {
      type: String,
      value: 'balanced' },

    thumb: {
      type: String,
      value: '' },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' },

    closable: {
      type: Boolean,
      value: false } },


  data: {
    visible: true },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,theme = _this$data.theme;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--").concat(theme), theme));

      var hd = "".concat(prefixCls, "__hd");
      var thumb = "".concat(prefixCls, "__thumb");
      var bd = "".concat(prefixCls, "__bd");
      var text = "".concat(prefixCls, "__text");
      var desc = "".concat(prefixCls, "__desc");
      var ft = "".concat(prefixCls, "__ft");
      var closable = "".concat(prefixCls, "__closable");

      return {
        wrap: wrap,
        hd: hd,
        thumb: thumb,
        bd: bd,
        text: text,
        desc: desc,
        ft: ft,
        closable: closable };

    } },

  methods: {
    /**
              * 关闭时触发的回调函数
              */
    onClose: function onClose() {
      if (this.data.closable) {
        this.setData({
          visible: false });

      }
      this.triggerEvent('click');
    },
    /**
        * 点击事件
        */
    onClick: function onClick() {
      this.triggerEvent('click');
    } } });
});
require('wxcomponents/wux-weapp/alert/index.js');
__wxRoute = 'wxcomponents/wux-weapp/animation-group/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/animation-group/index.js';

define('wxcomponents/wux-weapp/animation-group/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var ENTER = 'enter';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXIT = 'exit';
var EXITING = 'exiting';
var EXITED = 'exited';
var UNMOUNTED = 'unmounted';

var TRANSITION = 'transition';
var ANIMATION = 'animation';

var TIMEOUT = 1000 / 60;

var defaultClassNames = {
  enter: '', // 进入过渡的开始状态，在过渡过程完成之后移除
  enterActive: '', // 进入过渡的结束状态，在过渡过程完成之后移除
  enterDone: '', // 进入过渡的完成状态
  exit: '', // 离开过渡的开始状态，在过渡过程完成之后移除
  exitActive: '', // 离开过渡的结束状态，在过渡过程完成之后移除
  exitDone: '' // 离开过渡的完成状态
};

(0, _baseComponent.default)({
  properties: {
    // 触发组件进入或离开过渡的状态
    in: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        if (this.data.isMounting) {
          this.updated(newVal);
        }
      } },

    // 过渡的类名
    classNames: {
      type: null,
      value: defaultClassNames },

    // 过渡持续时间
    duration: {
      type: null,
      value: null },

    // 过渡动效的类型
    type: {
      type: String,
      value: TRANSITION },

    // 首次挂载时是否触发进入过渡
    appear: {
      type: Boolean,
      value: false },

    // 是否启用进入过渡
    enter: {
      type: Boolean,
      value: true },

    // 是否启用离开过渡
    exit: {
      type: Boolean,
      value: true },

    // 首次进入过渡时是否懒挂载组件
    mountOnEnter: {
      type: Boolean,
      value: true },

    // 离开过渡完成时是否卸载组件
    unmountOnExit: {
      type: Boolean,
      value: true },

    // 自定义类名
    wrapCls: {
      type: String,
      value: '' },

    // 自定义样式
    wrapStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } } },


  data: {
    animateCss: '', // 动画样式
    animateStatus: EXITED, // 动画状态，可选值 entering、entered、exiting、exited
    isMounting: false, // 是否首次挂载
    extStyle: '' // 组件样式
  },
  methods: {
    /**
              * 监听过渡或动画的回调函数
              */
    addEventListener: function addEventListener() {var
      animateStatus = this.data.animateStatus;var _this$getTimeouts =
      this.getTimeouts(),enter = _this$getTimeouts.enter,exit = _this$getTimeouts.exit;

      if (animateStatus === ENTERING && !enter && this.data.enter) {
        this.performEntered();
      }

      if (animateStatus === EXITING && !exit && this.data.exit) {
        this.performExited();
      }
    },
    /**
        * 会在 WXSS transition 或 wx.createAnimation 动画结束后触发
        */
    onTransitionEnd: function onTransitionEnd() {
      if (this.data.type === TRANSITION) {
        this.addEventListener();
      }
    },
    /**
        * 会在一个 WXSS animation 动画完成时触发
        */
    onAnimationEnd: function onAnimationEnd() {
      if (this.data.type === ANIMATION) {
        this.addEventListener();
      }
    },
    /**
        * 更新组件状态
        * @param {String} nextStatus 下一状态，ENTERING 或 EXITING
        * @param {Boolean} mounting 是否首次挂载
        */
    updateStatus: function updateStatus(nextStatus) {var mounting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (nextStatus !== null) {
        this.cancelNextCallback();
        this.isAppearing = mounting;

        if (nextStatus === ENTERING) {
          this.performEnter();
        } else {
          this.performExit();
        }
      }
    },
    /**
        * 进入过渡
        */
    performEnter: function performEnter() {var _this = this;var _this$getClassNames =
      this.getClassNames(ENTER),className = _this$getClassNames.className,activeClassName = _this$getClassNames.activeClassName;var _this$getTimeouts2 =
      this.getTimeouts(),enter = _this$getTimeouts2.enter;
      var enterParams = {
        animateStatus: ENTER,
        animateCss: className };

      var enteringParams = {
        animateStatus: ENTERING,
        animateCss: "".concat(className, " ").concat(activeClassName)


        // 若已禁用进入过渡，则更新状态至 ENTERED
      };if (!this.isAppearing && !this.data.enter) {
        return this.performEntered();
      }

      // 第一阶段：设置进入过渡的开始状态，并触发 ENTER 事件
      // 第二阶段：延迟一帧后，设置进入过渡的结束状态，并触发 ENTERING 事件
      // 第三阶段：若已设置过渡的持续时间，则延迟指定时间后触发进入过渡完成 performEntered，否则等待触发 onTransitionEnd 或 onAnimationEnd
      this.safeSetData(enterParams, function () {
        _this.triggerEvent('change', { animateStatus: ENTER });
        _this.triggerEvent(ENTER, { isAppearing: _this.isAppearing });

        // 由于有些时候不能正确的触发动画完成的回调，具体原因未知
        // 所以采用延迟一帧的方式来确保可以触发回调
        _this.delayHandler(TIMEOUT, function () {
          _this.safeSetData(enteringParams, function () {
            _this.triggerEvent('change', { animateStatus: ENTERING });
            _this.triggerEvent(ENTERING, { isAppearing: _this.isAppearing });

            if (enter) {
              _this.delayHandler(enter, _this.performEntered);
            }
          });
        });
      });
    },
    /**
        * 进入过渡完成
        */
    performEntered: function performEntered() {var _this2 = this;var _this$getClassNames2 =
      this.getClassNames(ENTER),doneClassName = _this$getClassNames2.doneClassName;
      var enteredParams = {
        animateStatus: ENTERED,
        animateCss: doneClassName


        // 第三阶段：设置进入过渡的完成状态，并触发 ENTERED 事件
      };this.safeSetData(enteredParams, function () {
        _this2.triggerEvent('change', { animateStatus: ENTERED });
        _this2.triggerEvent(ENTERED, { isAppearing: _this2.isAppearing });
      });
    },
    /**
        * 离开过渡
        */
    performExit: function performExit() {var _this3 = this;var _this$getClassNames3 =
      this.getClassNames(EXIT),className = _this$getClassNames3.className,activeClassName = _this$getClassNames3.activeClassName;var _this$getTimeouts3 =
      this.getTimeouts(),exit = _this$getTimeouts3.exit;
      var exitParams = {
        animateStatus: EXIT,
        animateCss: className };

      var exitingParams = {
        animateStatus: EXITING,
        animateCss: "".concat(className, " ").concat(activeClassName)


        // 若已禁用离开过渡，则更新状态至 EXITED
      };if (!this.data.exit) {
        return this.performExited();
      }

      // 第一阶段：设置离开过渡的开始状态，并触发 EXIT 事件
      // 第二阶段：延迟一帧后，设置离开过渡的结束状态，并触发 EXITING 事件
      // 第三阶段：若已设置过渡的持续时间，则延迟指定时间后触发离开过渡完成 performExited，否则等待触发 onTransitionEnd 或 onAnimationEnd
      this.safeSetData(exitParams, function () {
        _this3.triggerEvent('change', { animateStatus: EXIT });
        _this3.triggerEvent(EXIT);

        _this3.delayHandler(TIMEOUT, function () {
          _this3.safeSetData(exitingParams, function () {
            _this3.triggerEvent('change', { animateStatus: EXITING });
            _this3.triggerEvent(EXITING);

            if (exit) {
              _this3.delayHandler(exit, _this3.performExited);
            }
          });
        });
      });
    },
    /**
        * 离开过渡完成
        */
    performExited: function performExited() {var _this4 = this;var _this$getClassNames4 =
      this.getClassNames(EXIT),doneClassName = _this$getClassNames4.doneClassName;
      var exitedParams = {
        animateStatus: EXITED,
        animateCss: doneClassName


        // 第三阶段：设置离开过渡的完成状态，并触发 EXITED 事件
      };this.safeSetData(exitedParams, function () {
        _this4.triggerEvent('change', { animateStatus: EXITED });
        _this4.triggerEvent(EXITED);

        // 判断离开过渡完成时是否卸载组件
        if (_this4.data.unmountOnExit) {
          _this4.setData({ animateStatus: UNMOUNTED }, function () {
            _this4.triggerEvent('change', { animateStatus: UNMOUNTED });
          });
        }
      });
    },
    /**
        * 获取指定状态下的类名
        * @param {String} type 过渡类型，enter 或 exit
        */
    getClassNames: function getClassNames(type) {var
      classNames = this.data.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : "".concat(classNames, "-").concat(type);
      var activeClassName = typeof classNames !== 'string' ? classNames["".concat(type, "Active")] : "".concat(classNames, "-").concat(type, "-active");
      var doneClassName = typeof classNames !== 'string' ? classNames["".concat(type, "Done")] : "".concat(classNames, "-").concat(type, "-done");

      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName };

    },
    /**
        * 获取过渡持续时间
        */
    getTimeouts: function getTimeouts() {var
      duration = this.data.duration;

      if (duration !== null && typeof duration === 'object') {
        return {
          enter: duration.enter,
          exit: duration.exit };

      } else if (typeof duration === 'number') {
        return {
          enter: duration,
          exit: duration };

      }

      return {};
    },
    /**
        * 属性值 in 被更改时的响应函数
        * @param {Boolean} newVal 触发组件进入或离开过渡的状态
        */
    updated: function updated(newVal) {var _this5 = this;var _ref =
      this.pendingData || this.data,animateStatus = _ref.animateStatus;
      var nextStatus = null;

      if (newVal) {
        if (animateStatus === UNMOUNTED) {
          animateStatus = EXITED;
          this.setData({ animateStatus: EXITED }, function () {
            _this5.triggerEvent('change', { animateStatus: EXITED });
          });
        }
        if (animateStatus !== ENTER && animateStatus !== ENTERING && animateStatus !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (animateStatus === ENTER || animateStatus === ENTERING || animateStatus === ENTERED) {
          nextStatus = EXITING;
        }
      }

      this.updateStatus(nextStatus);
    },
    /**
        * 延迟一段时间触发回调
        * @param {Number} timeout 延迟时间
        * @param {Function} handler 回调函数
        */
    delayHandler: function delayHandler(timeout, handler) {
      if (timeout) {
        this.setNextCallback(handler);
        setTimeout(this.nextCallback, timeout);
      }
    },
    /**
        * 点击事件
        */
    onTap: function onTap() {
      this.triggerEvent('click');
    } },

  attached: function attached() {var _this6 = this;
    var animateStatus = null;
    var appearStatus = null;

    if (this.data.in) {
      if (this.data.appear) {
        animateStatus = EXITED;
        appearStatus = ENTERING;
      } else {
        animateStatus = ENTERED;
      }
    } else {
      if (this.data.unmountOnExit || this.data.mountOnEnter) {
        animateStatus = UNMOUNTED;
      } else {
        animateStatus = EXITED;
      }
    }

    // 由于小程序组件首次挂载时 observer 事件总是优先于 attached 事件
    // 所以使用 isMounting 来强制优先触发 attached 事件
    this.safeSetData({ animateStatus: animateStatus, isMounting: true }, function () {
      _this6.triggerEvent('change', { animateStatus: animateStatus });
      _this6.updateStatus(appearStatus, true);
    });
  } });
});
require('wxcomponents/wux-weapp/animation-group/index.js');
__wxRoute = 'wxcomponents/wux-weapp/avatar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/avatar/index.js';

define('wxcomponents/wux-weapp/avatar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-avatar' },

    shape: {
      type: String,
      value: 'circle' },

    size: {
      type: String,
      value: 'default' },

    src: {
      type: String,
      value: '' },

    bodyStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    scale: {
      type: Boolean,
      value: false } },


  data: {
    extStyle: '',
    childrenStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,shape = _this$data.shape,size = _this$data.size,src = _this$data.src;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(shape), shape), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(size), size), _defineProperty(_classNames, "".concat(
      prefixCls, "--thumb"), src), _classNames));

      var string = "".concat(prefixCls, "__string");

      return {
        wrap: wrap,
        string: string };

    } },

  methods: {
    setScale: function setScale() {var _this = this;var
      prefixCls = this.data.prefixCls;
      var query = wx.createSelectorQuery().in(this);
      query.select(".".concat(prefixCls)).boundingClientRect();
      query.select(".".concat(prefixCls, "__string")).boundingClientRect();
      query.exec(function (rects) {
        if (rects.filter(function (n) {return !n;}).length) return;var _rects = _slicedToArray(

        rects, 2),parent = _rects[0],child = _rects[1];
        var offset = parent.width - 8 < child.width;
        var childrenScale = offset ? (parent.width - 8) / child.width : 1;
        var childrenStyle = childrenScale !== 1 ? "position: absolute; display: inline-block; transform: scale(".concat(childrenScale, "); left: calc(50% - ").concat(Math.round(child.width / 2), "px)") : '';

        _this.setData({
          childrenStyle: childrenStyle });

      });
    } },

  ready: function ready() {
    if (!this.data.src && this.data.scale) {
      this.setScale();
    }
  } });
});
require('wxcomponents/wux-weapp/avatar/index.js');
__wxRoute = 'wxcomponents/wux-weapp/backdrop/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/backdrop/index.js';

define('wxcomponents/wux-weapp/backdrop/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-backdrop' },

    transparent: {
      type: Boolean,
      value: false },

    zIndex: {
      type: Number,
      value: 1000 },

    classNames: {
      type: null,
      value: 'wux-animate--fadeIn' } },


  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,transparent = _this$data.transparent;
      var wrap = transparent ? "".concat(prefixCls, "--transparent") : prefixCls;

      return {
        wrap: wrap };

    } },

  methods: {
    /**
              * 保持锁定
              */
    retain: function retain() {
      if (typeof this.backdropHolds !== 'number' || !this.backdropHolds) {
        this.backdropHolds = 0;
      }

      this.backdropHolds = this.backdropHolds + 1;

      if (this.backdropHolds === 1) {
        this.setData({ in: true });
      }
    },
    /**
        * 释放锁定
        */
    release: function release() {
      if (this.backdropHolds === 1) {
        this.setData({ in: false });
      }
      this.backdropHolds = Math.max(0, this.backdropHolds - 1);
    },
    /**
        * 点击事件
        */
    onClick: function onClick() {
      this.triggerEvent('click');
    } } });
});
require('wxcomponents/wux-weapp/backdrop/index.js');
__wxRoute = 'wxcomponents/wux-weapp/badge/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/badge/index.js';

define('wxcomponents/wux-weapp/badge/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  externalClasses: ['wux-class-badge'],
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-badge' },

    count: {
      type: Number,
      value: 0,
      observer: 'updated' },

    overflowCount: {
      type: Number,
      value: 99 },

    dot: {
      type: Boolean,
      value: false },

    showZero: {
      type: Boolean,
      value: false },

    status: {
      type: String,
      value: '' },

    text: {
      type: String,
      value: '' } },


  data: {
    finalCount: 0 },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,st = _this$data.status;
      var wrap = (0, _classNames2.default)(prefixCls);
      var status = "".concat(prefixCls, "__status");
      var statusDot = (0, _classNames2.default)("".concat(prefixCls, "__status-dot"), _defineProperty({}, "".concat(
      prefixCls, "__status-dot--").concat(st), st));

      var statusText = "".concat(prefixCls, "__status-text");
      var dot = "".concat(prefixCls, "__dot");
      var count = "".concat(prefixCls, "__count");

      return {
        wrap: wrap,
        status: status,
        statusDot: statusDot,
        statusText: statusText,
        dot: dot,
        count: count };

    } },

  methods: {
    updated: function updated() {var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.count;var
      overflowCount = this.data.overflowCount;
      var finalCount = count >= overflowCount ? "".concat(overflowCount, "+") : count;

      this.setData({
        finalCount: finalCount });

    } } });
});
require('wxcomponents/wux-weapp/badge/index.js');
__wxRoute = 'wxcomponents/wux-weapp/barcode/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/barcode/index.js';

define('wxcomponents/wux-weapp/barcode/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _barcode = _interopRequireDefault(require("./barcode"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var defalutOptions = {
  number: true,
  prefix: true,
  color: 'black',
  debug: false,
  onValid: function onValid() {},
  onInvalid: function onInvalid() {},
  onSuccess: function onSuccess() {},
  onError: function onError() {} };


Component({
  properties: {
    width: {
      type: Number,
      value: 200 },

    height: {
      type: Number,
      value: 100 },

    number: {
      type: String,
      value: '',
      observer: function observer(newVal) {
        this.draw({
          number: newVal });

      } },

    options: {
      type: Object,
      value: defalutOptions },

    canvasId: {
      type: String,
      value: 'wux-barcode' } },


  methods: {
    draw: function draw() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var _Object$assign =
      Object.assign({}, this.data, opts),canvasId = _Object$assign.canvasId,number = _Object$assign.number,width = _Object$assign.width,height = _Object$assign.height,options = _Object$assign.options;
      new _barcode.default(canvasId, number, Object.assign({ width: width, height: height }, options), this);
    } } });
});
require('wxcomponents/wux-weapp/barcode/index.js');
__wxRoute = 'wxcomponents/wux-weapp/button/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/button/index.js';

define('wxcomponents/wux-weapp/button/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-button' },

    type: {
      type: String,
      value: 'stable' },

    clear: {
      type: Boolean,
      value: false },

    block: {
      type: Boolean,
      value: false },

    full: {
      type: Boolean,
      value: false },

    outline: {
      type: Boolean,
      value: false },

    bordered: {
      type: Boolean,
      value: true },

    size: {
      type: String,
      value: 'default' },

    disabled: {
      type: Boolean,
      value: false },

    loading: {
      type: Boolean,
      value: false },

    formType: {
      type: String,
      value: '' },

    openType: {
      type: String,
      value: '' },

    hoverClass: {
      type: String,
      value: 'default' },

    hoverStopPropagation: {
      type: Boolean,
      value: false },

    hoverStartTime: {
      type: Number,
      value: 20 },

    hoverStayTime: {
      type: Number,
      value: 70 },

    lang: {
      type: String,
      value: 'en' },

    sessionFrom: {
      type: String,
      value: '' },

    sendMessageTitle: {
      type: String,
      value: '' },

    sendMessagePath: {
      type: String,
      value: '' },

    sendMessageImg: {
      type: String,
      value: '' },

    showMessageCard: {
      type: Boolean,
      value: false },

    appParameter: {
      type: String,
      value: '' } },


  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,hoverClass = _this$data.hoverClass,type = _this$data.type,size = _this$data.size,block = _this$data.block,full = _this$data.full,clear = _this$data.clear,outline = _this$data.outline,bordered = _this$data.bordered,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(type), type), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(size), size), _defineProperty(_classNames, "".concat(
      prefixCls, "--block"), block), _defineProperty(_classNames, "".concat(
      prefixCls, "--full"), full), _defineProperty(_classNames, "".concat(
      prefixCls, "--clear"), clear), _defineProperty(_classNames, "".concat(
      prefixCls, "--outline"), outline), _defineProperty(_classNames, "".concat(
      prefixCls, "--bordered"), bordered), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var hover = hoverClass && hoverClass !== 'default' ? hoverClass : "".concat(prefixCls, "--hover");

      return {
        wrap: wrap,
        hover: hover };

    } },

  methods: {
    onTap: function onTap() {
      if (!this.data.disabled && !this.data.loading) {
        this.triggerEvent('click');
      }
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      this.triggerEvent('getuserinfo', e.detail);
    },
    bindcontact: function bindcontact(e) {
      this.triggerEvent('contact', e.detail);
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
    bindopensetting: function bindopensetting(e) {
      this.triggerEvent('opensetting', e.detail);
    },
    onError: function onError(e) {
      this.triggerEvent('error', e.detail);
    } } });
});
require('wxcomponents/wux-weapp/button/index.js');
__wxRoute = 'wxcomponents/wux-weapp/calendar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/calendar/index.js';

define('wxcomponents/wux-weapp/calendar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames4 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = {
  prefixCls: 'wux-calendar',
  monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  firstDay: 1, // First day of the week, Monday
  weekendDays: [0, 6], // Sunday and Saturday
  multiple: false,
  dateFormat: 'yyyy-mm-dd',
  direction: 'horizontal', // or 'vertical'
  minDate: null,
  maxDate: null,
  touchMove: true,
  animate: true,
  closeOnSelect: true,
  weekHeader: true,
  toolbar: true,
  value: [],
  onMonthAdd: function onMonthAdd() {},
  onChange: function onChange() {},
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onDayClick: function onDayClick() {},
  onMonthYearChangeStart: function onMonthYearChangeStart() {},
  onMonthYearChangeEnd: function onMonthYearChangeEnd() {} };


// 获取手指触摸点坐标
var getTouchPosition = function getTouchPosition(e) {
  var touches = e.touches[0] || e.changedTouches[0];
  return {
    x: touches.pageX,
    y: touches.pageY };

};

// 获取元素旋转属性
var getTransform = function getTransform(translate, isH) {return "transform: translate3d(".concat(isH ? translate : 0, "%, ").concat(isH ? 0 : translate, "%, 0)");};

// 判断两个日期是否在同一天
var isSameDate = function isSameDate(a, b) {
  var prev = new Date(a);
  var next = new Date(b);
  return prev.getFullYear() === next.getFullYear() && prev.getMonth() === next.getMonth() && prev.getDate() === next.getDate();
};

(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,direction = _this$data.direction;
      var wrap = (0, _classNames4.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--").concat(direction), direction));

      var content = "".concat(prefixCls, "__content");
      var hd = "".concat(prefixCls, "__hd");
      var toolbar = "".concat(prefixCls, "__toolbar");
      var picker = "".concat(prefixCls, "__picker");
      var link = "".concat(prefixCls, "__link");
      var prev = (0, _classNames4.default)("".concat(prefixCls, "__icon"), _defineProperty({}, "".concat(
      prefixCls, "__icon--prev"), true));

      var next = (0, _classNames4.default)("".concat(prefixCls, "__icon"), _defineProperty({}, "".concat(
      prefixCls, "__icon--next"), true));

      var value = "".concat(prefixCls, "__value");
      var bd = "".concat(prefixCls, "__bd");
      var weekdays = "".concat(prefixCls, "__weekdays");
      var weekday = "".concat(prefixCls, "__weekday");
      var months = "".concat(prefixCls, "__months");
      var monthsContent = "".concat(prefixCls, "__months-content");
      var month = "".concat(prefixCls, "__month");
      var days = "".concat(prefixCls, "__days");
      var day = "".concat(prefixCls, "__day");
      var text = "".concat(prefixCls, "__text");

      return {
        wrap: wrap,
        content: content,
        hd: hd,
        toolbar: toolbar,
        picker: picker,
        link: link,
        prev: prev,
        next: next,
        value: value,
        bd: bd,
        weekdays: weekdays,
        weekday: weekday,
        months: months,
        monthsContent: monthsContent,
        month: month,
        days: days,
        day: day,
        text: text };

    } },

  methods: {
    /**
              * 打开日历
              * @param {Object} opts
              */
    open: function open() {var _this = this;var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts));

      this.monthsTranslate = 0;
      this.isH = options.direction === 'horizontal';

      this.$$setData(_objectSpread({ in: true }, options)).then(function () {return _this.init();});
      this.setValue(options.value);

      if (typeof this.fns.onOpen === 'function') {
        this.fns.onOpen.call(this);
      }
    },
    /**
        * 关闭日历
        */
    close: function close() {
      this.$$setData({ in: false });

      if (typeof this.fns.onClose === 'function') {
        this.fns.onClose.call(this);
      }
    },
    /**
        * 初始化
        */
    init: function init() {var _this2 = this;
      var weeks = this.setWeekHeader();
      var months = this.setMonthsHTML();
      var monthsTranslate = this.setMonthsTranslate();

      if (typeof this.fns.onMonthAdd === 'function') {
        months.forEach(function (month) {return _this2.fns.onMonthAdd.call(_this2, month);});
      }

      return this.$$setData({ weeks: weeks, months: months, monthsTranslate: monthsTranslate, wrapperTranslate: '' }).then(function () {return _this2.$$setData(_objectSpread({}, _this2.updateCurrentMonthYear()));});
    },
    /**
        * 设置月份的位置信息
        * @param {Number} translate
        */
    setMonthsTranslate: function setMonthsTranslate() {var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.monthsTranslate;
      var prevMonthTranslate = -(translate + 1) * 100;
      var currentMonthTranslate = -translate * 100;
      var nextMonthTranslate = -(translate - 1) * 100;

      return [
      getTransform(prevMonthTranslate, this.isH),
      getTransform(currentMonthTranslate, this.isH),
      getTransform(nextMonthTranslate, this.isH)];

    },
    /**
        * 更新当前年月
        * @param {String} dir 方向
        */
    updateCurrentMonthYear: function updateCurrentMonthYear(dir) {var _this$data2 =
      this.data,months = _this$data2.months,monthNames = _this$data2.monthNames;

      if (typeof dir === 'undefined') {
        var _currentMonth = parseInt(months[1].month, 10);
        var _currentYear = parseInt(months[1].year, 10);
        var _currentMonthName = monthNames[_currentMonth];

        return {
          currentMonth: _currentMonth,
          currentYear: _currentYear,
          currentMonthName: _currentMonthName };

      }

      var currentMonth = parseInt(months[dir === 'next' ? months.length - 1 : 0].month, 10);
      var currentYear = parseInt(months[dir === 'next' ? months.length - 1 : 0].year, 10);
      var currentMonthName = monthNames[currentMonth];

      return {
        currentMonth: currentMonth,
        currentYear: currentYear,
        currentMonthName: currentMonthName };

    },
    /**
        * 手指触摸动作开始
        * @param {Object} e 事件对象
        */
    onTouchStart: function onTouchStart(e) {
      if (!this.data.touchMove || this.isMoved || this.isRendered) {
        return false;
      }

      this.start = getTouchPosition(e);
      this.move = {};
      this.touchesDiff = 0;
      this.allowItemClick = true;
      this.isMoved = false;
    },
    /**
        * 手指触摸后移动
        * @param {Object} e 事件对象
        */
    onTouchMove: function onTouchMove(e) {var _this3 = this;
      if (!this.data.touchMove || this.isRendered) {
        return false;
      }

      this.allowItemClick = false;

      if (!this.isMoved) {
        this.isMoved = true;
      }var

      prefixCls = this.data.prefixCls;
      var query = wx.createSelectorQuery().in(this);
      query.select(".".concat(prefixCls, "__months-content")).boundingClientRect(function (rect) {

        // 由于 boundingClientRect 为异步方法，某些情况下其回调函数在 onTouchEnd 之后触发，导致 wrapperTranslate 计算错误
        // 所以判断 this.isMoved = false 时阻止回调函数的执行
        if (!rect || !_this3.isMoved) {
          return false;
        }

        _this3.move = getTouchPosition(e);
        _this3.touchesDiff = _this3.isH ? _this3.move.x - _this3.start.x : _this3.move.y - _this3.start.y;var

        width = rect.width,height = rect.height;
        var percentage = _this3.touchesDiff / (_this3.isH ? width : height);
        var currentTranslate = (_this3.monthsTranslate + percentage) * 100;
        var transform = getTransform(currentTranslate, _this3.isH);

        _this3.$$setData({
          wrapperTranslate: "transition-duration: 0s; ".concat(transform) });

      });
      query.exec();
    },
    /**
        * 手指触摸动作结束
        */
    onTouchEnd: function onTouchEnd() {var _this4 = this;
      if (!this.data.touchMove || !this.isMoved || this.isRendered) {
        return false;
      }

      this.isMoved = false;

      if (Math.abs(this.touchesDiff) < 30) {
        this.resetMonth();
      } else if (this.touchesDiff >= 30) {
        this.prevMonth();
      } else {
        this.nextMonth();
      }

      // Allow click
      setTimeout(function () {return _this4.allowItemClick = true;}, 100);
    },
    /**
        * 日期的点击事件
        * @param {Object} e 事件对象
        */
    onDayClick: function onDayClick(e) {
      if (this.allowItemClick) {
        var dataset = e.currentTarget.dataset;
        var dateYear = dataset.year;
        var dateMonth = dataset.month;
        var dateDay = dataset.day;
        var dateType = dataset.type;

        if (dateType.selected && !this.data.multiple) return false;
        if (dateType.disabled) return false;
        if (dateType.next) this.nextMonth();
        if (dateType.prev) this.prevMonth();

        if (typeof this.fns.onDayClick === 'function') {
          this.fns.onDayClick.call(this, dateYear, dateMonth, dateDay);
        }

        this.addValue(new Date(dateYear, dateMonth, dateDay).getTime());

        if (this.data.closeOnSelect && !this.data.multiple) {
          this.close();
        }
      }
    },
    /**
        * 重置月份的位置信息
        */
    resetMonth: function resetMonth() {
      var translate = this.monthsTranslate * 100;
      var transform = getTransform(translate, this.isH);

      this.$$setData({
        wrapperTranslate: "transition-duration: 0s; ".concat(transform) });

    },
    /**
        * 设置年月
        * @param {String} year 年份
        * @param {String} month 月份
        */
    setYearMonth: function setYearMonth() {var _this5 = this;var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.currentYear;var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.data.currentMonth;var _this$data3 =
      this.data,months = _this$data3.months,monthsTranslate = _this$data3.monthsTranslate,maxDate = _this$data3.maxDate,minDate = _this$data3.minDate,currentYear = _this$data3.currentYear,currentMonth = _this$data3.currentMonth;
      var targetDate = year < currentYear ? new Date(year, month + 1, -1).getTime() : new Date(year, month).getTime();

      // 判断是否存在最大日期
      if (maxDate && targetDate > new Date(maxDate).getTime()) {
        return false;
      }

      // 判断是否存在最小日期
      if (minDate && targetDate < new Date(minDate).getTime()) {
        return false;
      }

      var currentDate = new Date(currentYear, currentMonth).getTime();
      var dir = targetDate > currentDate ? 'next' : 'prev';
      var newMonthHTML = this.monthHTML(new Date(year, month));

      var prevTranslate = this.monthsTranslate = this.monthsTranslate || 0;

      if (targetDate > currentDate) {
        this.monthsTranslate = this.monthsTranslate - 1;

        var translate = -(prevTranslate - 1) * 100;
        var nextMonthTranslate = getTransform(translate, this.isH);

        this.$$setData({
          months: [months[1], months[2], newMonthHTML],
          monthsTranslate: [monthsTranslate[1], monthsTranslate[2], nextMonthTranslate] });

      } else {
        this.monthsTranslate = this.monthsTranslate + 1;

        var _translate = -(prevTranslate + 1) * 100;
        var prevMonthTranslate = getTransform(_translate, this.isH);

        this.$$setData({
          months: [newMonthHTML, months[0], months[1]],
          monthsTranslate: [prevMonthTranslate, monthsTranslate[0], monthsTranslate[1]] });

      }

      this.onMonthChangeStart(dir);

      var transform = getTransform(this.monthsTranslate * 100, this.isH);
      var duration = this.data.animate ? .3 : 0;
      var wrapperTranslate = "transition-duration: ".concat(duration, "s; ").concat(transform);

      this.$$setData({
        wrapperTranslate: wrapperTranslate });


      setTimeout(function () {return _this5.onMonthChangeEnd(dir, true);}, duration);
    },
    /**
        * 下一年
        */
    nextYear: function nextYear() {
      this.setYearMonth(this.data.currentYear + 1);
    },
    /**
        * 上一年
        */
    prevYear: function prevYear() {
      this.setYearMonth(this.data.currentYear - 1);
    },
    /**
        * 下一月
        */
    nextMonth: function nextMonth() {var _this6 = this;var _this$data4 =
      this.data,months = _this$data4.months,monthsTranslate = _this$data4.monthsTranslate,maxDate = _this$data4.maxDate,currentMonth = _this$data4.currentMonth;
      var nextMonth = parseInt(months[months.length - 1].month, 10);
      var nextYear = parseInt(months[months.length - 1].year, 10);
      var nextDate = new Date(nextYear, nextMonth);
      var nextDateTime = nextDate.getTime();

      // 判断是否存在最大日期
      if (maxDate && nextDateTime > new Date(maxDate).getTime()) {
        return this.resetMonth();
      }

      this.monthsTranslate = this.monthsTranslate - 1;

      if (nextMonth === currentMonth) {
        var translate = -this.monthsTranslate * 100;
        var nextMonthHTML = this.monthHTML(nextDateTime, 'next');
        var nextMonthTranslate = getTransform(translate, this.isH);
        var _months = [this.data.months[1], this.data.months[2], nextMonthHTML];

        this.$$setData({
          months: _months,
          monthsTranslate: [monthsTranslate[1], monthsTranslate[2], nextMonthTranslate] });


        if (typeof this.fns.onMonthAdd === 'function') {
          this.fns.onMonthAdd.call(this, _months[_months.length - 1]);
        }
      }

      this.onMonthChangeStart('next');

      var transform = getTransform(this.monthsTranslate * 100, this.isH);
      var duration = this.data.animate ? .3 : 0;
      var wrapperTranslate = "transition-duration: ".concat(duration, "s; ").concat(transform);

      this.$$setData({
        wrapperTranslate: wrapperTranslate });


      setTimeout(function () {return _this6.onMonthChangeEnd('next');}, duration);
    },
    /**
        * 上一月
        */
    prevMonth: function prevMonth() {var _this7 = this;var _this$data5 =
      this.data,months = _this$data5.months,monthsTranslate = _this$data5.monthsTranslate,minDate = _this$data5.minDate,currentMonth = _this$data5.currentMonth;
      var prevMonth = parseInt(months[0].month, 10);
      var prevYear = parseInt(months[0].year, 10);
      var prevDate = new Date(prevYear, prevMonth + 1, -1);
      var prevDateTime = prevDate.getTime();

      // 判断是否存在最小日期
      if (minDate && prevDateTime < new Date(minDate).getTime()) {
        return this.resetMonth();
      }

      this.monthsTranslate = this.monthsTranslate + 1;

      if (prevMonth === currentMonth) {
        var translate = -this.monthsTranslate * 100;
        var prevMonthHTML = this.monthHTML(prevDateTime, 'prev');
        var prevMonthTranslate = getTransform(translate, this.isH);
        var _months2 = [prevMonthHTML, this.data.months[0], this.data.months[1]];

        this.$$setData({
          months: _months2,
          monthsTranslate: [prevMonthTranslate, monthsTranslate[0], monthsTranslate[1]] });


        if (typeof this.fns.onMonthAdd === 'function') {
          this.fns.onMonthAdd.call(this, _months2[0]);
        }
      }

      this.onMonthChangeStart('prev');

      var transform = getTransform(this.monthsTranslate * 100, this.isH);
      var duration = this.data.animate ? .3 : 0;
      var wrapperTranslate = "transition-duration: ".concat(duration, "s; ").concat(transform);

      this.$$setData({
        wrapperTranslate: wrapperTranslate });


      setTimeout(function () {return _this7.onMonthChangeEnd('prev');}, duration);
    },
    /**
        * 月份变化开始时的回调函数
        * @param {String} dir 方向
        */
    onMonthChangeStart: function onMonthChangeStart(dir) {
      var params = this.updateCurrentMonthYear(dir);

      this.$$setData(params);

      if (typeof this.fns.onMonthYearChangeStart === 'function') {
        this.fns.onMonthYearChangeStart.call(this, params.currentYear, params.currentMonth);
      }
    },
    /**
        * 月份变化完成时的回调函数
        * @param {String} dir 方向
        * @param {Boolean} rebuildBoth 重置
        */
    onMonthChangeEnd: function onMonthChangeEnd() {var _this8 = this;var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';var rebuildBoth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var _this$data6 =
      this.data,currentYear = _this$data6.currentYear,currentMonth = _this$data6.currentMonth;
      var nextMonthHTML,prevMonthHTML,newMonthHTML,months = _toConsumableArray(this.data.months);

      if (!rebuildBoth) {
        newMonthHTML = this.monthHTML(new Date(currentYear, currentMonth), dir);
        if (dir === 'next') {
          months = [months[1], months[2], newMonthHTML];
        } else if (dir === 'prev') {
          months = [newMonthHTML, months[0], months[1]];
        }
      } else {
        prevMonthHTML = this.monthHTML(new Date(currentYear, currentMonth), 'prev');
        nextMonthHTML = this.monthHTML(new Date(currentYear, currentMonth), 'next');
        months = [prevMonthHTML, months[dir === 'next' ? months.length - 1 : 0], nextMonthHTML];
      }

      var monthsTranslate = this.setMonthsTranslate(this.monthsTranslate);

      this.isRendered = true;
      this.$$setData({ months: months, monthsTranslate: monthsTranslate }).then(function () {return _this8.isRendered = false;});

      if (typeof this.fns.onMonthAdd === 'function') {
        this.fns.onMonthAdd.call(this, dir === 'next' ? months[months.length - 1] : months[0]);
      }

      if (typeof this.fns.onMonthYearChangeEnd === 'function') {
        this.fns.onMonthYearChangeEnd.call(this, currentYear, currentMonth);
      }
    },
    /**
        * 设置星期
        */
    setWeekHeader: function setWeekHeader() {var _this$data7 =
      this.data,weekHeader = _this$data7.weekHeader,firstDay = _this$data7.firstDay,dayNamesShort = _this$data7.dayNamesShort,weekendDays = _this$data7.weekendDays;
      var weeks = [];

      if (weekHeader) {
        for (var i = 0; i < 7; i++) {
          var weekDayIndex = i + firstDay > 6 ? i - 7 + firstDay : i + firstDay;
          var dayName = dayNamesShort[weekDayIndex];
          var weekend = weekendDays.indexOf(weekDayIndex) >= 0;

          weeks.push({
            weekend: weekend,
            dayName: dayName });

        }
      }

      return weeks;
    },
    /**
        * 判断日期是否存在
        */
    daysInMonth: function daysInMonth(date) {
      var d = new Date(date);
      return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    },
    /**
        * 设置月份数据
        */
    monthHTML: function monthHTML(date, offset) {
      date = new Date(date);
      var year = date.getFullYear(),
      month = date.getMonth(),
      time = date.getTime();

      var monthHTML = {
        year: year,
        month: month,
        time: time,
        items: [] };


      if (offset === "next") {
        if (month === 11) date = new Date(year + 1, 0);else
        date = new Date(year, month + 1, 1);
      }

      if (offset === "prev") {
        if (month === 0) date = new Date(year - 1, 11);else
        date = new Date(year, month - 1, 1);
      }

      if (offset === "next" || offset === "prev") {
        month = date.getMonth();
        year = date.getFullYear();
        time = date.getTime();
      }

      var daysInPrevMonth = this.daysInMonth(new Date(date.getFullYear(), date.getMonth()).getTime() - 10 * 24 * 60 * 60 * 1000),
      daysInMonth = this.daysInMonth(date),
      firstDayOfMonthIndex = new Date(date.getFullYear(), date.getMonth()).getDay();
      if (firstDayOfMonthIndex === 0) firstDayOfMonthIndex = 7;

      var dayDate,currentValues = [],
      i,j,
      rows = 6,
      cols = 7,
      dayIndex = 0 + (this.data.firstDay - 1),
      today = new Date().setHours(0, 0, 0, 0),
      minDate = this.data.minDate ? new Date(this.data.minDate).getTime() : null,
      maxDate = this.data.maxDate ? new Date(this.data.maxDate).getTime() : null;

      if (this.data.value && this.data.value.length) {
        for (var _i = 0; _i < this.data.value.length; _i++) {
          currentValues.push(new Date(this.data.value[_i]).setHours(0, 0, 0, 0));
        }
      }

      for (var _i2 = 1; _i2 <= rows; _i2++) {
        var rowHTML = [];
        var row = _i2;

        for (var _j = 1; _j <= cols; _j++) {
          var col = _j;
          dayIndex++;
          var dayNumber = dayIndex - firstDayOfMonthIndex;
          var type = {};

          if (dayNumber < 0) {
            dayNumber = daysInPrevMonth + dayNumber + 1;
            type.prev = true;
            dayDate = new Date(month - 1 < 0 ? year - 1 : year, month - 1 < 0 ? 11 : month - 1, dayNumber).getTime();
          } else {
            dayNumber = dayNumber + 1;
            if (dayNumber > daysInMonth) {
              dayNumber = dayNumber - daysInMonth;
              type.next = true;
              dayDate = new Date(month + 1 > 11 ? year + 1 : year, month + 1 > 11 ? 0 : month + 1, dayNumber).getTime();
            } else {
              dayDate = new Date(year, month, dayNumber).getTime();
            }
          }

          // Today
          if (dayDate === today) type.today = true;

          // Selected
          if (currentValues.indexOf(dayDate) >= 0) type.selected = true;

          // Weekend
          if (this.data.weekendDays.indexOf(col - 1) >= 0) {
            type.weekend = true;
          }

          // Disabled
          if (minDate && dayDate < minDate || maxDate && dayDate > maxDate) {
            type.disabled = true;
          }

          dayDate = new Date(dayDate);
          var dayYear = dayDate.getFullYear();
          var dayMonth = dayDate.getMonth();

          rowHTML.push({
            type: type,
            year: dayYear,
            month: dayMonth,
            day: dayNumber,
            date: "".concat(dayYear, "-").concat(dayMonth + 1, "-").concat(dayNumber) });

        }

        monthHTML.year = year;
        monthHTML.month = month;
        monthHTML.time = time;

        monthHTML.items.push(rowHTML);
      }

      return monthHTML;
    },
    /**
        * 设置月份
        */
    setMonthsHTML: function setMonthsHTML() {
      var layoutDate = this.data.value && this.data.value.length ? this.data.value[0] : new Date().setHours(0, 0, 0, 0);
      var prevMonthHTML = this.monthHTML(layoutDate, "prev");
      var currentMonthHTML = this.monthHTML(layoutDate);
      var nextMonthHTML = this.monthHTML(layoutDate, "next");

      return [prevMonthHTML, currentMonthHTML, nextMonthHTML];
    },
    /**
        * 格式化日期
        */
    formatDate: function formatDate(date) {
      date = new Date(date);
      var year = date.getFullYear();
      var month = date.getMonth();
      var month1 = month + 1;
      var day = date.getDate();
      var weekDay = date.getDay();

      return this.data.dateFormat.
      replace(/yyyy/g, year).
      replace(/yy/g, (year + '').substring(2)).
      replace(/mm/g, month1 < 10 ? '0' + month1 : month1).
      replace(/m/g, month1).
      replace(/MM/g, this.data.monthNames[month]).
      replace(/M/g, this.data.monthNamesShort[month]).
      replace(/dd/g, day < 10 ? '0' + day : day).
      replace(/d/g, day).
      replace(/DD/g, this.data.dayNames[weekDay]).
      replace(/D/g, this.data.dayNamesShort[weekDay]);
    },
    /**
        * 添加选中值
        */
    addValue: function addValue(value) {
      if (this.data.multiple) {
        var arrValues = this.data.value || [];
        var inValuesIndex = -1;

        for (var i = 0; i < arrValues.length; i++) {
          if (isSameDate(value, arrValues[i])) {
            inValuesIndex = i;
          }
        }

        if (inValuesIndex === -1) {
          arrValues.push(value);
        } else {
          arrValues.splice(inValuesIndex, 1);
        }

        this.setValue(arrValues);
      } else {
        this.setValue([value]);
      }
    },
    /**
        * 设置选择值
        */
    setValue: function setValue(value) {var _this9 = this;
      this.$$setData({ value: value }).then(function () {return _this9.updateValue();});
    },
    /**
        * 更新日历
        */
    updateValue: function updateValue() {var _this10 = this;
      var changedPath = {};

      this.data.months.forEach(function (n, i) {
        n.items.forEach(function (v, k) {
          v.forEach(function (p, j) {
            if (p.type.selected) {
              changedPath["months[".concat(i, "].items[").concat(k, "][").concat(j, "].type.selected")] = false;
            }
          });
        });
      });var _loop = function _loop(

      ii) {
        var valueDate = new Date(_this10.data.value[ii]);
        var valueYear = valueDate.getFullYear();
        var valueMonth = valueDate.getMonth();
        var valueDay = valueDate.getDate();

        _this10.data.months.forEach(function (n, i) {
          if (n.year === valueYear && n.month === valueMonth) {
            n.items.forEach(function (v, k) {
              v.forEach(function (p, j) {
                if (p.year === valueYear && p.month === valueMonth && p.day === valueDay) {
                  changedPath["months[".concat(i, "].items[").concat(k, "][").concat(j, "].type.selected")] = true;
                }
              });
            });
          }
        });};for (var ii = 0; ii < this.data.value.length; ii++) {_loop(ii);
      }

      this.$$setData(changedPath);

      if (typeof this.fns.onChange === 'function') {
        this.fns.onChange.call(this, this.data.value, this.data.value.map(function (n) {return _this10.formatDate(n);}));
      }
    } } });
});
require('wxcomponents/wux-weapp/calendar/index.js');
__wxRoute = 'wxcomponents/wux-weapp/card/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/card/index.js';

define('wxcomponents/wux-weapp/card/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-card' },

    bordered: {
      type: Boolean,
      value: true },

    full: {
      type: Boolean,
      value: false },

    title: {
      type: String,
      value: '' },

    thumb: {
      type: String,
      value: '' },

    thumbStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    extra: {
      type: String,
      value: '' } },


  data: {
    extStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,bordered = _this$data.bordered,full = _this$data.full;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--bordered"), bordered), _defineProperty(_classNames, "".concat(
      prefixCls, "--full"), full), _classNames));

      var hd = "".concat(prefixCls, "__hd");
      var content = "".concat(prefixCls, "__content");
      var thumb = "".concat(prefixCls, "__thumb");
      var extra = "".concat(prefixCls, "__extra");
      var bd = "".concat(prefixCls, "__bd");
      var ft = "".concat(prefixCls, "__ft");

      return {
        wrap: wrap,
        hd: hd,
        content: content,
        thumb: thumb,
        extra: extra,
        bd: bd,
        ft: ft };

    } } });
});
require('wxcomponents/wux-weapp/card/index.js');
__wxRoute = 'wxcomponents/wux-weapp/cascader/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/cascader/index.js';

define('wxcomponents/wux-weapp/cascader/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));
var _arrayTreeFilter = _interopRequireDefault(require("../helpers/arrayTreeFilter"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var WUX_CASCADER = 'wux-cascader';
var defaultFieldNames = {
  label: 'label',
  value: 'value',
  children: 'children' };


(0, _baseComponent.default)({
  externalClasses: ['wux-scroll-view-class'],
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-cascader' },

    defaultValue: {
      type: Array,
      value: [] },

    value: {
      type: Array,
      value: [],
      observer: function observer(newVal) {var _this = this;
        if (this.data.controlled) {
          this.setData({ activeValue: newVal }, function () {return _this.getCurrentOptions(newVal);});
        }
      } },

    controlled: {
      type: Boolean,
      value: false },

    title: {
      type: String,
      value: '' },

    options: {
      type: Array,
      value: [],
      observer: 'getCurrentOptions' },

    chooseTitle: {
      type: String,
      value: '请选择' },

    visible: {
      type: Boolean,
      value: false },

    defaultFieldNames: {
      type: Object,
      value: defaultFieldNames } },


  data: {
    activeOptions: [],
    activeIndex: 0,
    bodyStyle: '',
    activeValue: [],
    showOptions: [],
    fieldNames: {} },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var hd = "".concat(prefixCls, "__hd");
      var title = "".concat(prefixCls, "__title");
      var menus = "".concat(prefixCls, "__menus");
      var menu = "".concat(prefixCls, "__menu");
      var bd = "".concat(prefixCls, "__bd");
      var inner = "".concat(prefixCls, "__inner");
      var scrollView = "".concat(prefixCls, "__scroll-view");
      var option = "".concat(prefixCls, "__option");
      var item = "".concat(prefixCls, "__item");
      var icon = "".concat(prefixCls, "__icon");
      var ft = "".concat(prefixCls, "__ft");

      return {
        wrap: wrap,
        hd: hd,
        title: title,
        menus: menus,
        menu: menu,
        bd: bd,
        inner: inner,
        scrollView: scrollView,
        option: option,
        item: item,
        icon: icon,
        ft: ft };

    } },

  methods: {
    getActiveOptions: function getActiveOptions(activeValue) {var
      options = this.data.options;
      var value = this.getFieldName('value');
      var childrenKeyName = this.getFieldName('children');

      return (0, _arrayTreeFilter.default)(options, function (option, level) {return option[value] === activeValue[level];}, { childrenKeyName: childrenKeyName });
    },
    getShowOptions: function getShowOptions(activeValue) {var
      options = this.data.options;
      var children = this.getFieldName('children');
      var result = this.getActiveOptions(activeValue).map(function (activeOption) {return activeOption[children];}).filter(function (activeOption) {return !!activeOption;});

      return [options].concat(_toConsumableArray(result));
    },
    getMenus: function getMenus() {var activeValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var hasChildren = arguments.length > 1 ? arguments[1] : undefined;var _this$data =
      this.data,options = _this$data.options,chooseTitle = _this$data.chooseTitle;
      var activeOptions = this.getActiveOptions(activeValue);

      if (hasChildren && activeOptions.length < options.length) {var _activeOptions$push;
        var value = this.getFieldName('value');
        var label = this.getFieldName('label');

        activeOptions.push((_activeOptions$push = {}, _defineProperty(_activeOptions$push,
        value, WUX_CASCADER), _defineProperty(_activeOptions$push,
        label, chooseTitle), _activeOptions$push));

      }

      return activeOptions;
    },
    getNextActiveValue: function getNextActiveValue(value, optionIndex) {var
      activeValue = this.data.activeValue;

      activeValue = activeValue.slice(0, optionIndex + 1);
      activeValue[optionIndex] = value;

      return activeValue;
    },
    updated: function updated(currentOptions, optionIndex, condition, callback) {
      var value = this.getFieldName('value');
      var children = this.getFieldName('children');
      var hasChildren = currentOptions[children] && currentOptions[children].length > 0;
      var activeValue = this.getNextActiveValue(currentOptions[value], optionIndex);
      var activeOptions = this.getMenus(activeValue, hasChildren);
      var activeIndex = activeOptions.length - 1;
      var showOptions = this.getShowOptions(activeValue);
      var params = {
        activeValue: activeValue,
        activeOptions: activeOptions,
        activeIndex: activeIndex,
        showOptions: showOptions


        // 判断 hasChildren 计算需要更新的数据
      };if (hasChildren || activeValue.length === showOptions.length && (optionIndex = Math.max(0, optionIndex - 1))) {
        params.bodyStyle = "transform: translate(".concat(-50 * optionIndex, "%)");
        params.showOptions = showOptions;
      }

      // 判断是否需要 setData 更新数据
      if (condition) {
        this.setData(params);
      }

      // 回调函数
      if (typeof callback === 'function') {
        callback.call(this, currentOptions, activeOptions, !hasChildren);
      }
    },
    /**
        * 更新级联数据
        * @param {Array} activeValue 当前选中值
        */
    getCurrentOptions: function getCurrentOptions() {var activeValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.activeValue;
      var optionIndex = Math.max(0, activeValue.length - 1);
      var activeOptions = this.getActiveOptions(activeValue);
      var currentOptions = activeOptions[optionIndex];

      if (currentOptions) {
        this.updated(currentOptions, optionIndex, true);
      } else {var _activeOptions$push2;
        var value = this.getFieldName('value');
        var label = this.getFieldName('label');

        activeOptions.push((_activeOptions$push2 = {}, _defineProperty(_activeOptions$push2,
        value, WUX_CASCADER), _defineProperty(_activeOptions$push2,
        label, this.data.chooseTitle), _activeOptions$push2));


        var showOptions = this.getShowOptions(activeValue);
        var activeIndex = activeOptions.length - 1;
        var params = {
          showOptions: showOptions,
          activeOptions: activeOptions,
          activeIndex: activeIndex,
          bodyStyle: '' };


        this.setData(params);
      }
    },
    /**
        * 点击菜单时的回调函数
        */
    onMenuClick: function onMenuClick(e) {var
      menuIndex = e.currentTarget.dataset.menuIndex;
      var index = menuIndex > 1 ? menuIndex - 1 : 0;
      var bodyStyle = "transform: translate(".concat(-50 * index, "%)");

      this.setData({
        bodyStyle: bodyStyle,
        activeIndex: menuIndex });

    },
    /**
        * 点击选项时的回调函数
        */
    onItemSelect: function onItemSelect(e) {var _e$currentTarget$data =
      e.currentTarget.dataset,item = _e$currentTarget$data.item,optionIndex = _e$currentTarget$data.optionIndex;

      // 判断是否禁用
      if (!item || item.disabled) return;

      // updated
      this.updated(item, optionIndex, !this.data.controlled, this.onChange);
    },
    /**
        * 组件关闭时的回调函数
        */
    onPopupClose: function onPopupClose() {
      this.triggerEvent('close');
    },
    /**
        * 选择完成时的回调函数
        */
    onChange: function onChange() {var _this2 = this;var currentOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var activeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var options = activeOptions.filter(function (n) {return n[_this2.getFieldName('value')] !== WUX_CASCADER;});
      var value = options.map(function (n) {return n[_this2.getFieldName('value')];});

      // 判断是否异步加载
      if (currentOptions.isLeaf === false && !currentOptions.children) {
        this.emitEvent({ value: value, options: options, done: false });
        this.triggerEvent('load', { value: value, options: options });
        return;
      }

      // 正常加载
      this.emitEvent({ value: value, options: options, done: done });
    },
    emitEvent: function emitEvent() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.triggerEvent('change', params);

      // 当选择完成时关闭组件
      if (params.done) {
        this.onPopupClose();
      }
    },
    getFieldName: function getFieldName(name) {
      return this.data.fieldNames[name];
    } },

  attached: function attached() {var _this3 = this;var _this$data2 =
    this.data,defaultValue = _this$data2.defaultValue,value = _this$data2.value,controlled = _this$data2.controlled;
    var activeValue = controlled ? value : defaultValue;
    var fieldNames = Object.assign({}, defaultFieldNames, this.data.defaultFieldNames);

    this.setData({ activeValue: activeValue, fieldNames: fieldNames }, function () {return _this3.getCurrentOptions(activeValue);});
  } });
});
require('wxcomponents/wux-weapp/cascader/index.js');
__wxRoute = 'wxcomponents/wux-weapp/cell-group/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/cell-group/index.js';

define('wxcomponents/wux-weapp/cell-group/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../cell/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.updateIsLastElement);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-cell-group' },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' } },


  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var hd = "".concat(prefixCls, "__hd");
      var bd = "".concat(prefixCls, "__bd");
      var ft = "".concat(prefixCls, "__ft");

      return {
        wrap: wrap,
        hd: hd,
        bd: bd,
        ft: ft };

    } },

  methods: {
    updateIsLastElement: function updateIsLastElement() {
      var elements = this.getRelationNodes('../cell/index');
      if (elements.length > 0) {
        var lastIndex = elements.length - 1;
        elements.forEach(function (element, index) {
          element.updateIsLastElement(index === lastIndex);
        });
      }
    } } });
});
require('wxcomponents/wux-weapp/cell-group/index.js');
__wxRoute = 'wxcomponents/wux-weapp/cell/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/cell/index.js';

define('wxcomponents/wux-weapp/cell/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../cell-group/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-cell' },

    disabled: {
      type: Boolean,
      value: false },

    hoverClass: {
      type: String,
      value: 'default' },

    hoverStopPropagation: {
      type: Boolean,
      value: false },

    hoverStartTime: {
      type: Number,
      value: 20 },

    hoverStayTime: {
      type: Number,
      value: 70 },

    lang: {
      type: String,
      value: 'en' },

    sessionFrom: {
      type: String,
      value: '' },

    sendMessageTitle: {
      type: String,
      value: '' },

    sendMessagePath: {
      type: String,
      value: '' },

    sendMessageImg: {
      type: String,
      value: '' },

    showMessageCard: {
      type: Boolean,
      value: false },

    appParameter: {
      type: String,
      value: '' },

    thumb: {
      type: String,
      value: '' },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' },

    extra: {
      type: String,
      value: '' },

    isLink: {
      type: Boolean,
      value: false },

    openType: {
      type: String,
      value: 'navigateTo' },

    url: {
      type: String,
      value: '' },

    delta: {
      type: Number,
      value: 1 } },


  data: {
    isLast: false },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,hoverClass = _this$data.hoverClass,isLast = _this$data.isLast,isLink = _this$data.isLink,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--last"), isLast), _defineProperty(_classNames, "".concat(
      prefixCls, "--access"), isLink), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var hd = "".concat(prefixCls, "__hd");
      var thumb = "".concat(prefixCls, "__thumb");
      var bd = "".concat(prefixCls, "__bd");
      var text = "".concat(prefixCls, "__text");
      var desc = "".concat(prefixCls, "__desc");
      var ft = "".concat(prefixCls, "__ft");
      var hover = hoverClass && hoverClass !== 'default' ? hoverClass : "".concat(prefixCls, "--hover");

      return {
        wrap: wrap,
        hd: hd,
        thumb: thumb,
        bd: bd,
        text: text,
        desc: desc,
        ft: ft,
        hover: hover };

    } },

  methods: {
    onTap: function onTap() {
      if (!this.data.disabled) {
        this.triggerEvent('click');
        this.linkTo();
      }
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      this.triggerEvent('getuserinfo', e.detail);
    },
    bindcontact: function bindcontact(e) {
      this.triggerEvent('contact', e.detail);
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
    bindopensetting: function bindopensetting(e) {
      this.triggerEvent('opensetting', e.detail);
    },
    onError: function onError(e) {
      this.triggerEvent('error', e.detail);
    },
    linkTo: function linkTo() {var _this$data2 =
      this.data,url = _this$data2.url,isLink = _this$data2.isLink,openType = _this$data2.openType,delta = _this$data2.delta;
      var navigate = [
      'navigateTo',
      'redirectTo',
      'switchTab',
      'navigateBack',
      'reLaunch'];


      // openType 属性可选值为 navigateTo、redirectTo、switchTab、navigateBack、reLaunch
      if (!isLink || !url || !navigate.includes(openType)) {
        return false;
      } else if (openType === 'navigateBack') {
        return wx[openType].call(wx, { delta: delta });
      } else {
        return wx[openType].call(wx, { url: url });
      }
    },
    updateIsLastElement: function updateIsLastElement(isLast) {
      this.setData({ isLast: isLast });
    } } });
});
require('wxcomponents/wux-weapp/cell/index.js');
__wxRoute = 'wxcomponents/wux-weapp/checkbox-group/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/checkbox-group/index.js';

define('wxcomponents/wux-weapp/checkbox-group/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  useField: true,
  relations: {
    '../checkbox/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.changeValue);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-checkbox-group' },

    cellGroupPrefixCls: {
      type: String,
      value: 'wux-cell-group' },

    value: {
      type: Array,
      value: [],
      observer: 'changeValue' },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' } },


  methods: {
    changeValue: function changeValue() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.value;
      var elements = this.getRelationNodes('../checkbox/index');
      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          element.changeValue(value.includes(element.data.value), index);
        });
      }
    },
    emitEvent: function emitEvent(item) {
      this.triggerEvent('change', _objectSpread({}, item, { name: this.data.name }));
    } } });
});
require('wxcomponents/wux-weapp/checkbox-group/index.js');
__wxRoute = 'wxcomponents/wux-weapp/checkbox-item/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/checkbox-item/index.js';

define('wxcomponents/wux-weapp/checkbox-item/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _colors = require("../helpers/colors");

Component({
  externalClasses: ['wux-class', 'wux-input-class'],
  options: {
    multipleSlots: true },

  properties: {
    type: {
      type: String,
      value: 'checkbox' },

    value: {
      type: String,
      value: '' },

    defaultChecked: {
      type: Boolean,
      value: false },

    checked: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    disabled: {
      type: Boolean,
      value: false },

    color: {
      type: String,
      value: 'balanced',
      observer: function observer(newVal) {
        this.setData({
          inputColor: (0, _colors.isPresetColor)(newVal) });

      } },

    controlled: {
      type: Boolean,
      value: false },

    wrapStyle: {
      type: String,
      value: '' } },


  data: {
    inputChecked: false,
    inputColor: '' },

  methods: {
    updated: function updated(inputChecked) {
      if (this.data.inputChecked !== inputChecked) {
        this.setData({
          inputChecked: inputChecked });

      }
    },
    onChange: function onChange() {var _this$data =
      this.data,value = _this$data.value,inputChecked = _this$data.inputChecked,disabled = _this$data.disabled,controlled = _this$data.controlled;
      var item = {
        checked: !inputChecked,
        value: value };


      if (disabled) return;

      if (!controlled) {
        this.updated(!inputChecked);
      }

      this.triggerEvent('change', item);
    } },

  attached: function attached() {var _this$data2 =
    this.data,defaultChecked = _this$data2.defaultChecked,checked = _this$data2.checked,controlled = _this$data2.controlled;
    var inputChecked = controlled ? checked : defaultChecked;
    var inputColor = (0, _colors.isPresetColor)(this.data.color);

    this.setData({
      inputChecked: inputChecked,
      inputColor: inputColor });

  } });
});
require('wxcomponents/wux-weapp/checkbox-item/index.js');
__wxRoute = 'wxcomponents/wux-weapp/checkbox/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/checkbox/index.js';

define('wxcomponents/wux-weapp/checkbox/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../checkbox-group/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-checkbox' },

    cellPrefixCls: {
      type: String,
      value: 'wux-cell' },

    selectablePrefixCls: {
      type: String,
      value: 'wux-selectable' },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' },

    extra: {
      type: String,
      value: '' },

    value: {
      type: String,
      value: '' },

    checked: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        this.setData({
          inputChecked: newVal });

      } },

    disabled: {
      type: Boolean,
      value: false },

    color: {
      type: String,
      value: 'balanced' } },


  data: {
    index: 0,
    inputChecked: false },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var cell = (0, _classNames.default)(prefixCls);
      var selectable = "".concat(prefixCls, "__selectable");

      return {
        cell: cell,
        selectable: selectable };

    } },

  methods: {
    checkboxChange: function checkboxChange(e) {var _this$data =
      this.data,value = _this$data.value,index = _this$data.index,disabled = _this$data.disabled;
      var parent = this.getRelationNodes('../checkbox-group/index')[0];
      var item = {
        checked: e.detail.checked,
        value: value,
        index: index };


      if (disabled) return;

      parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
    },
    changeValue: function changeValue() {var inputChecked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.setData({
        inputChecked: inputChecked,
        index: index });

    } } });
});
require('wxcomponents/wux-weapp/checkbox/index.js');
__wxRoute = 'wxcomponents/wux-weapp/circle/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/circle/index.js';

define('wxcomponents/wux-weapp/circle/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var toAngle = function toAngle(a) {return a / 180 * Math.PI;};
var percent = function percent(a) {return toAngle(a / 100 * 360);};
var easeInOutCubic = function easeInOutCubic(a, b, c, d) {
  a /= d / 2;
  if (a < 1) return c / 2 * a * a * a + b;
  a -= 2;
  return c / 2 * (a * a * a + 2) + b;
};

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-circle' },

    percent: {
      type: Number,
      value: 0,
      observer: 'redraw' },

    strokeWidth: {
      type: Number,
      value: 10 },

    size: {
      type: Number,
      value: 120,
      observer: 'updateStyle' },

    lineCap: {
      type: String,
      value: 'round' },

    backgroundColor: {
      type: String,
      value: '#f3f3f3' },

    color: {
      type: String,
      value: '#33cd5f' },

    sAngle: {
      type: Number,
      value: 0,
      observer: function observer(newVal) {
        this.setData({
          beginAngle: toAngle(newVal) });

      } },

    counterclockwise: {
      type: Boolean,
      value: false },

    speed: {
      type: Number,
      value: 2000 },

    animate: {
      type: Boolean,
      value: true },

    background: {
      type: Boolean,
      value: true } },


  data: {
    beginAngle: 0,
    startAngle: 0,
    endAngle: 0,
    currentAngle: 0 },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var inner = "".concat(prefixCls, "__inner");

      return {
        wrap: wrap,
        inner: inner };

    } },

  methods: {
    /**
              * 更新样式
              */
    updateStyle: function updateStyle() {var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.size;
      var style = "width: ".concat(size, "px; height: ").concat(size, "px;");

      this.setData({
        style: style });

    },
    /**
        * 着帧绘制 canvas
        */
    redraw: function redraw() {var _this = this;var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.percent;
      var endAngle = percent(value);
      var now = Date.now();
      var decrease = this.data.currentAngle > endAngle;
      var startAngle = !decrease ? this.data.currentAngle : this.data.endAngle;

      this.cancelNextCallback();
      this.clearTimer();

      this.safeSetData({ startAngle: startAngle, endAngle: endAngle }, function () {
        _this.animate(now, now, decrease);
      });
    },
    /**
        * 绘制 canvas
        */
    draw: function draw() {var _this2 = this;var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;var _this$data =
      this.data,lineCap = _this$data.lineCap,backgroundColor = _this$data.backgroundColor,color = _this$data.color,size = _this$data.size,strokeWidth = _this$data.strokeWidth,counterclockwise = _this$data.counterclockwise,background = _this$data.background;
      var position = size / 2;
      var radius = position - strokeWidth / 2;
      var p = 2 * Math.PI;
      var startAngle = counterclockwise ? p - this.data.beginAngle : this.data.beginAngle;
      var endAngle = counterclockwise ? p - (this.data.beginAngle + this.data.currentAngle) : this.data.beginAngle + this.data.currentAngle;

      // 创建 canvas 绘图上下文
      this.ctx = this.ctx || wx.createCanvasContext('circle', this);

      // 清除画布
      this.ctx.clearRect(0, 0, size, size);

      // 绘制背景
      if (background) {
        this.ctx.beginPath();
        this.ctx.arc(position, position, radius, 0, 2 * Math.PI);
        this.ctx.setLineWidth(strokeWidth);
        this.ctx.setStrokeStyle(backgroundColor);
        this.ctx.stroke();
      }

      // 绘制进度
      if (line) {
        this.ctx.beginPath();
        this.ctx.arc(position, position, radius, startAngle, endAngle);
        this.ctx.setLineWidth(strokeWidth);
        this.ctx.setStrokeStyle(color);
        this.ctx.setLineCap(lineCap);
        this.ctx.stroke();
      }

      // 绘制完成
      this.ctx.draw(false, function () {
        _this2.triggerEvent('change', { value: _this2.data.currentAngle });
      });
    },
    /**
        * 开始动画
        */
    animate: function animate(c, d, e) {var _this3 = this;
      var now = Date.now();
      var f = now - c < 1 ? 1 : now - c;var _this$data2 =
      this.data,animate = _this$data2.animate,speed = _this$data2.speed,startAngle = _this$data2.startAngle,endAngle = _this$data2.endAngle;
      var isEnd = !e && 1000 * this.data.currentAngle <= Math.floor(1000 * endAngle) || e && 1000 * this.data.currentAngle >= Math.floor(1000 * endAngle);

      if (animate && c - d < 1.05 * speed && isEnd) {
        var value = easeInOutCubic((c - d) / f, startAngle, endAngle - startAngle, speed / f);
        var currentAngle = value < 0 ? 0 : value;

        c = Date.now();

        this.safeSetData({ currentAngle: currentAngle }, function () {
          _this3.draw(currentAngle !== 0);
          _this3.timer = setTimeout(function () {return _this3.animate(c, d, e);}, 1000 / 60);
        });
      } else {
        this.safeSetData({ currentAngle: endAngle }, function () {return _this3.draw(endAngle !== 0);});
      }
    },
    /**
        * 清除定时器
        */
    clearTimer: function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    } },

  attached: function attached() {
    this.updateStyle();
    if (this.data.percent === 0) {
      this.draw(false);
    }
  },
  detached: function detached() {
    this.ctx = null;
    this.clearTimer();
  } });
});
require('wxcomponents/wux-weapp/circle/index.js');
__wxRoute = 'wxcomponents/wux-weapp/col/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/col/index.js';

define('wxcomponents/wux-weapp/col/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../row/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-col' },

    span: {
      value: 0,
      type: Number },

    offset: {
      value: 0,
      type: Number },

    pull: {
      value: 0,
      type: Number },

    push: {
      value: 0,
      type: Number } },


  data: {
    colStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,span = _this$data.span,offset = _this$data.offset,pull = _this$data.pull,push = _this$data.push;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--span-").concat(span), span), _defineProperty(_classNames, "".concat(
      prefixCls, "--offset-").concat(offset), offset), _defineProperty(_classNames, "".concat(
      prefixCls, "--pull-").concat(pull), pull), _defineProperty(_classNames, "".concat(
      prefixCls, "--push-").concat(push), push), _classNames));


      return {
        wrap: wrap };

    } },

  methods: {
    updateStyle: function updateStyle(colStyle) {
      if (this.data.colStyle !== colStyle) {
        this.setData({
          colStyle: colStyle });

      }
    } } });
});
require('wxcomponents/wux-weapp/col/index.js');
__wxRoute = 'wxcomponents/wux-weapp/dialog/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/dialog/index.js';

define('wxcomponents/wux-weapp/dialog/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames3 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = {
  prefixCls: 'wux-dialog',
  title: '',
  content: '',
  buttons: [],
  verticalButtons: !1,
  resetOnClose: false,
  closable: false,
  mask: true,
  maskClosable: true,
  zIndex: 1000 };


var defaultOptions = {
  onCancel: function onCancel() {},
  cancelText: '取消',
  cancelType: 'default',
  onConfirm: function onConfirm() {},
  confirmText: '确定',
  confirmType: 'primary' };


(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,btns = _this$data.buttons,verticalButtons = _this$data.verticalButtons;
      var prompt = "".concat(prefixCls, "__prompt");
      var input = "".concat(prefixCls, "__input");
      var buttons = (0, _classNames3.default)("".concat(prefixCls, "__buttons"), _defineProperty({}, "".concat(
      prefixCls, "__buttons--").concat(verticalButtons ? 'vertical' : 'horizontal'), true));

      var button = btns.map(function (button) {var _classNames2;
        var wrap = (0, _classNames3.default)("".concat(prefixCls, "__button"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(
        prefixCls, "__button--").concat(button.type || 'default'), button.type || 'default'), _defineProperty(_classNames2, "".concat(
        prefixCls, "__button--bold"), button.bold), _defineProperty(_classNames2, "".concat(
        button.className), button.className), _classNames2));

        var hover = button.hoverClass && button.hoverClass !== 'default' ? button.hoverClass : "".concat(prefixCls, "__button--hover");

        return {
          wrap: wrap,
          hover: hover };

      });

      return {
        prompt: prompt,
        input: input,
        buttons: buttons,
        button: button };

    } },

  methods: {
    /**
              * 组件关闭时重置其内部数据
              */
    onClosed: function onClosed() {
      if (this.data.resetOnClose) {
        var params = _objectSpread({},
        this.$$mergeOptionsToData(defaults), {
          prompt: null });


        this.$$setData(params);
      }
    },
    /**
        * 点击 x 或 mask 回调
        */
    onClose: function onClose() {
      this.hide();
    },
    /**
        * 隐藏
        */
    hide: function hide(cb) {
      this.$$setData({ in: false });
      if (typeof cb === 'function') {
        cb.call(this);
      }
    },
    /**
        * 显示
        */
    show: function show() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts));
      this.$$setData(_objectSpread({ in: true }, options));
      return this.hide.bind(this);
    },
    /**
        * 按钮点击事件
        */
    buttonTapped: function buttonTapped(e) {var
      index = e.currentTarget.dataset.index;
      var button = this.data.buttons[index];
      this.hide(function () {return typeof button.onTap === 'function' && button.onTap(e);});
    },
    /**
        * 当键盘输入时，触发 input 事件
        */
    bindinput: function bindinput(e) {
      this.$$setData({
        'prompt.response': e.detail.value });

    },
    /**
        * 显示dialog组件
        * @param {Object} opts 配置项
        * @param {String} opts.title 提示标题
        * @param {String} opts.content 提示文本
        * @param {Boolean} opts.verticalButtons 是否显示垂直按钮布局
        * @param {Array} opts.buttons 按钮
        * @param {String} opts.buttons.text 按钮的文字
        * @param {String} opts.buttons.type 按钮的类型
        * @param {Boolean} opts.buttons.bold 是否加粗按钮的文字
        * @param {Function} opts.buttons.onTap 按钮的点击事件
        */
    open: function open() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.show(opts);
    },
    /**
        * 显示dialog组件
        * @param {Object} opts 配置项
        * @param {String} opts.title 提示标题
        * @param {String} opts.content 提示文本
        * @param {String} opts.confirmText 确定按钮的文字，默认为"确定"
        * @param {String} opts.confirmType 确定按钮的类型
        * @param {Function} opts.onConfirm 确定按钮的点击事件
        */
    alert: function alert() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.open(Object.assign({
        buttons: [{
          text: opts.confirmText || defaultOptions.confirmText,
          type: opts.confirmType || defaultOptions.confirmType,
          onTap: function onTap(e) {
            typeof opts.onConfirm === 'function' && opts.onConfirm(e);
          } }] },

      opts));
    },
    /**
        * 显示dialog组件
        * @param {Object} opts 配置项
        * @param {String} opts.title 提示标题
        * @param {String} opts.content 提示文本
        * @param {String} opts.confirmText 确定按钮的文字，默认为"确定"
        * @param {String} opts.confirmType 确定按钮的类型
        * @param {Function} opts.onConfirm 确定按钮的点击事件
        * @param {String} opts.cancelText 取消按钮的文字，默认为"取消"
        * @param {String} opts.cancelType 取消按钮的类型
        * @param {Function} opts.onCancel 取消按钮的点击事件
        */
    confirm: function confirm() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.open(Object.assign({
        buttons: [{
          text: opts.cancelText || defaultOptions.cancelText,
          type: opts.cancelType || defaultOptions.cancelType,
          onTap: function onTap(e) {
            typeof opts.onCancel === 'function' && opts.onCancel(e);
          } },

        {
          text: opts.confirmText || defaultOptions.confirmText,
          type: opts.confirmType || defaultOptions.confirmType,
          onTap: function onTap(e) {
            typeof opts.onConfirm === 'function' && opts.onConfirm(e);
          } }] },


      opts));
    },
    /**
        * 显示dialog组件
        * @param {Object} opts 配置项
        * @param {String} opts.title 提示标题
        * @param {String} opts.content 提示文本
        * @param {String} opts.fieldtype input 的类型，有效值：text, number, idcard, digit
        * @param {Boolean} opts.password 是否是密码类型
        * @param {String} opts.defaultText 默认值
        * @param {String} opts.placeholder 输入框为空时占位符
        * @param {Number} opts.maxlength 最大输入长度，设置为 -1 的时候不限制最大长度
        * @param {String} opts.confirmText 确定按钮的文字，默认为"确定"
        * @param {String} opts.confirmType 确定按钮的类型
        * @param {Function} opts.onConfirm 确定按钮的点击事件
        * @param {String} opts.cancelText 取消按钮的文字，默认为"取消"
        * @param {String} opts.cancelType 取消按钮的类型
        * @param {Function} opts.onCancel 取消按钮的点击事件
        */
    prompt: function prompt() {var _this = this;var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var prompt = {
        fieldtype: opts.fieldtype ? opts.fieldtype : 'text',
        password: !!opts.password,
        response: opts.defaultText ? opts.defaultText : '',
        placeholder: opts.placeholder ? opts.placeholder : '',
        maxlength: opts.maxlength ? parseInt(opts.maxlength) : '' };


      return this.open(Object.assign({
        prompt: prompt,
        buttons: [{
          text: opts.cancelText || defaultOptions.cancelText,
          type: opts.cancelType || defaultOptions.cancelType,
          onTap: function onTap(e) {
            typeof opts.onCancel === 'function' && opts.onCancel(e);
          } },

        {
          text: opts.confirmText || defaultOptions.confirmText,
          type: opts.confirmType || defaultOptions.confirmType,
          onTap: function onTap(e) {
            typeof opts.onConfirm === 'function' && opts.onConfirm(e, _this.data.prompt.response);
          } }] },


      opts));
    } } });
});
require('wxcomponents/wux-weapp/dialog/index.js');
__wxRoute = 'wxcomponents/wux-weapp/divider/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/divider/index.js';

define('wxcomponents/wux-weapp/divider/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-divider' },

    position: {
      type: String,
      value: 'center' },

    dashed: {
      type: Boolean,
      value: false },

    text: {
      type: String,
      value: '' },

    showText: {
      type: Boolean,
      value: true } },


  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,dashed = _this$data.dashed,showText = _this$data.showText,position = _this$data.position;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--dashed"), dashed), _defineProperty(_classNames, "".concat(
      prefixCls, "--text"), showText), _defineProperty(_classNames, "".concat(
      prefixCls, "--text-").concat(position), showText && position), _classNames));

      var text = "".concat(prefixCls, "__text");

      return {
        wrap: wrap,
        text: text };

    } } });
});
require('wxcomponents/wux-weapp/divider/index.js');
__wxRoute = 'wxcomponents/wux-weapp/fab-button/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/fab-button/index.js';

define('wxcomponents/wux-weapp/fab-button/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames5 = _interopRequireDefault(require("../helpers/classNames"));
var _gestures = require("../helpers/gestures");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaultAction = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhBAQLCR5MtjrbAAAAjUlEQVRo3u3ZMRKAIAxEUbDirp4nXnctFFDHBtDQ/O1Nnk6aHUMgZCBKMkmmNAtgOmL9M+IQQGVM95zljy8DAAAAAAAAAAAAAACALsDZcppSx7Q+WdtUvA5xffUtrjeA8/qQ21S9gc15/3Nfzw0M5O0G2kM5BQAAAAAAAAAAAAAAQGk33q0qZ/p/Q/JFdmei9usomnwIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA0LTA0VDExOjA5OjMwKzA4OjAw1U4c3wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNC0wNFQxMTowOTozMCswODowMKQTpGMAAAAASUVORK5CYII=';

// 设置元素旋转属性
var setTransform = function setTransform() {var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;var isH = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var duration = "transition-duration: ".concat(delay, "ms");
  var transform = "transform: scale(".concat(scale, ") translate3d(").concat(isH ? translate : 0, "px, ").concat(isH ? 0 : translate, "px, 0)");

  return "opacity: 1; ".concat(duration, "; ").concat(transform);
};

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-fab-button' },

    hoverClass: {
      type: String,
      value: 'default' },

    theme: {
      type: String,
      value: 'balanced' },

    position: {
      type: String,
      value: 'bottomRight' },

    action: {
      type: String,
      value: defaultAction },

    actionRotate: {
      type: Boolean,
      value: true },

    hideShadow: {
      type: Boolean,
      value: false },

    backdrop: {
      type: Boolean,
      value: false },

    buttons: {
      type: Array,
      value: [],
      observer: 'forceUpdateButtonStyle' },

    direction: {
      type: String,
      value: 'horizontal',
      observer: 'forceUpdateButtonStyle' },

    spaceBetween: {
      type: Number,
      value: 10,
      observer: 'forceUpdateButtonStyle' },

    duration: {
      type: Number,
      value: 300 },

    scale: {
      type: Number,
      value: .9,
      observer: 'forceUpdateButtonStyle' },

    reverse: {
      type: Boolean,
      value: false,
      observer: 'forceUpdateButtonStyle' },

    sAngle: {
      type: Number,
      value: 0,
      observer: 'forceUpdateButtonStyle' },

    eAngle: {
      type: Number,
      value: 360,
      observer: 'forceUpdateButtonStyle' },

    defaultVisible: {
      type: Boolean,
      value: false },

    visible: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    controlled: {
      type: Boolean,
      value: false } },


  data: {
    buttonStyle: [],
    buttonVisible: false },

  computed: {
    classes: function classes() {var _classNames;var _this$data =











      this.data,prefixCls = _this$data.prefixCls,position = _this$data.position,theme = _this$data.theme,direction = _this$data.direction,reverse = _this$data.reverse,buttonVisible = _this$data.buttonVisible,hideShadow = _this$data.hideShadow,actionRotate = _this$data.actionRotate,buttons = _this$data.buttons,hoverClass = _this$data.hoverClass;
      var wrap = (0, _classNames5.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(position), position), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(theme), theme), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(direction), direction), _defineProperty(_classNames, "".concat(
      prefixCls, "--reverse"), reverse), _defineProperty(_classNames, "".concat(
      prefixCls, "--opened"), buttonVisible), _classNames));

      var action = (0, _classNames5.default)("".concat(prefixCls, "__action"), _defineProperty({}, "".concat(
      prefixCls, "__action--hide-shadow"), hideShadow));

      var text = (0, _classNames5.default)("".concat(prefixCls, "__text"), _defineProperty({}, "".concat(
      prefixCls, "__text--rotate"), buttonVisible && actionRotate));

      var button = buttons.map(function (button) {var _classNames4;
        var wrap = (0, _classNames5.default)("".concat(prefixCls, "__button"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(
        prefixCls, "__button--hide-shadow"), button.hideShadow), _defineProperty(_classNames4, "".concat(
        prefixCls, "__button--disabled"), button.disabled), _defineProperty(_classNames4, "".concat(
        button.className), button.className), _classNames4));

        var hover = button.hoverClass && button.hoverClass !== 'default' ? button.hoverClass : "".concat(prefixCls, "__button--hover");

        return {
          wrap: wrap,
          hover: hover };

      });
      var icon = "".concat(prefixCls, "__icon");
      var label = "".concat(prefixCls, "__label");
      var backdrop = "".concat(prefixCls, "__backdrop");
      var hover = hoverClass && hoverClass !== 'default' ? hoverClass : "".concat(prefixCls, "--hover");

      return {
        wrap: wrap,
        action: action,
        text: text,
        button: button,
        icon: icon,
        label: label,
        backdrop: backdrop,
        hover: hover };

    } },

  methods: {
    updated: function updated(buttonVisible) {
      if (this.data.buttonVisible !== buttonVisible) {
        this.setData({
          buttonVisible: buttonVisible });


        this.updateButtonStyle(!buttonVisible);
      }
    },
    onChange: function onChange(buttonVisible) {
      if (!this.data.controlled) {
        this.updated(buttonVisible);
      }

      this.triggerEvent('change', { value: buttonVisible });
    },
    onToggle: function onToggle() {
      this.onChange(!this.data.buttonVisible);
    },
    onTap: function onTap(e) {var _e$currentTarget$data =
      e.currentTarget.dataset,index = _e$currentTarget$data.index,value = _e$currentTarget$data.value;
      var params = {
        index: index,
        value: value,
        buttons: this.data.buttons };


      if (!value.disabled) {
        this.triggerEvent('click', params);
        this.onChange(false);
      }
    },
    /**
        * 获取界面上的节点信息
        */
    getRect: function getRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        wx.
        createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    forceUpdateButtonStyle: function forceUpdateButtonStyle() {
      this.updateButtonStyle(!this.data.buttonVisible);
    },
    /**
        * 更新按钮组样式
        */
    updateButtonStyle: function updateButtonStyle(isReset) {var _this2 = this;var _this$data2 =
      this.data,prefixCls = _this$data2.prefixCls,buttons = _this$data2.buttons,duration = _this$data2.duration,direction = _this$data2.direction,spaceBetween = _this$data2.spaceBetween,scale = _this$data2.scale;
      var buttonStyle = [];
      var sign = this.data.reverse ? 1 : -1;
      var isH = direction === 'horizontal';

      // 重置样式
      if (isReset) {
        buttons.forEach(function () {
          buttonStyle.push('opacity: 0; transform: translate3d(0, 0, 0)');
        });

        if (this.data.buttonStyle !== buttonStyle) {
          this.setData({ buttonStyle: buttonStyle });
        }

        return;
      }

      // 更新样式
      this.getRect(".".concat(prefixCls, "__action")).then(function (rect) {
        switch (direction) {
          case 'horizontal':
          case 'vertical':
            buttons.forEach(function (_, index) {
              var offset = "".concat(sign * (rect.width + spaceBetween) * (index + 1));
              var style = setTransform(offset, scale, duration, isH);

              buttonStyle.push(style);
            });
            break;
          case 'circle':
            var radius = rect.width + spaceBetween;
            buttons.forEach(function (_, index) {
              buttonStyle.push(_this2.getCircleStyle(index, radius));
            });
            break;}


        if (_this2.data.buttonStyle !== buttonStyle) {
          _this2.setData({ buttonStyle: buttonStyle });
        }
      });
    },
    /**
        * 获取圆形按钮的样式
        * @param {Number} index 当前按钮索引
        * @param {Number} radius 圆的半径
        */
    getCircleStyle: function getCircleStyle(index, radius) {var _this$data3 =
      this.data,sAngle = _this$data3.sAngle,eAngle = _this$data3.eAngle,duration = _this$data3.duration,scale = _this$data3.scale;var
      length = this.data.buttons.length;var
      max = Math.max,sin = Math.sin,cos = Math.cos,PI = Math.PI;
      var startAngle = sAngle * PI / 180;
      var endAngle = eAngle * PI / 180;
      var points = endAngle % (2 * PI) === 0 ? length : max(1, length - 1);
      var currentAngle = startAngle + (endAngle - startAngle) / points * index;

      var x = sin(currentAngle) * radius;
      var y = cos(currentAngle) * radius;

      x = parseFloat(x.toFixed(6));
      y = parseFloat(y.toFixed(6));

      var transform = "transform: scale(".concat(scale, ") translate3d(").concat(x, "px, ").concat(y, "px, 0)");

      return "opacity: 1; transition-duration: ".concat(duration, "ms; ").concat(transform);
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      this.triggerEvent('getuserinfo', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindcontact: function bindcontact(e) {
      this.triggerEvent('contact', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindopensetting: function bindopensetting(e) {
      this.triggerEvent('opensetting', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    onError: function onError(e) {
      this.triggerEvent('error', _objectSpread({}, e.detail, e.currentTarget.dataset));
    } },

  ready: function ready() {var _this$data4 =
    this.data,defaultVisible = _this$data4.defaultVisible,visible = _this$data4.visible,controlled = _this$data4.controlled;
    var buttonVisible = controlled ? visible : defaultVisible;

    this.updated(buttonVisible);
  } });
});
require('wxcomponents/wux-weapp/fab-button/index.js');
__wxRoute = 'wxcomponents/wux-weapp/filterbar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/filterbar/index.js';

define('wxcomponents/wux-weapp/filterbar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));
var _index = require("../index");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-filterbar' },

    items: {
      type: Array,
      value: [] } },


  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var bd = "".concat(prefixCls, "__bd");
      var item = "".concat(prefixCls, "__item");
      var text = "".concat(prefixCls, "__text");
      var icon = "".concat(prefixCls, "__icon");
      var pop = "".concat(prefixCls, "__pop");
      var scrollView = "".concat(prefixCls, "__scroll-view");
      var panel = "".concat(prefixCls, "__panel");
      var panelHd = "".concat(prefixCls, "__panel-hd");
      var panelTitle = "".concat(prefixCls, "__panel-title");
      var panelSelected = "".concat(prefixCls, "__panel-selected");
      var panelBd = "".concat(prefixCls, "__panel-bd");
      var groups = "".concat(prefixCls, "__groups");
      var group = "".concat(prefixCls, "__group");
      var radio = "".concat(prefixCls, "__radio");
      var btn = "".concat(prefixCls, "__btn");
      var check = "".concat(prefixCls, "__check");
      var btns = "".concat(prefixCls, "__btns");
      var select = "".concat(prefixCls, "__select");

      return {
        wrap: wrap,
        bd: bd,
        item: item,
        text: text,
        icon: icon,
        pop: pop,
        scrollView: scrollView,
        panel: panel,
        panelHd: panelHd,
        panelTitle: panelTitle,
        panelSelected: panelSelected,
        panelBd: panelBd,
        groups: groups,
        group: group,
        radio: radio,
        btn: btn,
        check: check,
        btns: btns,
        select: select };

    } },

  methods: {
    /**
              * 重置按钮
              * @param {Object} e 事件对象
              * @param {Object} prevState 上一个状态值
              */
    onReset: function onReset(e, prevState) {var _e$currentTarget$data =
      e.currentTarget.dataset,index = _e$currentTarget$data.index,item = _e$currentTarget$data.item;
      var children = prevState && prevState.children || item.children.map(function (n) {
        return Object.assign({}, n, {
          children: n.children.map(function (m) {return Object.assign({}, m, {
              checked: false });}),

          selected: '' });

      });

      this.setData(_defineProperty({}, "options[".concat(
      index, "].children"), children));

    },
    /**
        * 关闭侧边栏筛选框
        * @param {Object} e 事件对象
        * @param {Function} callback 回调函数
        */
    onClose: function onClose(e, callback) {var _this = this;var
      index = e.currentTarget.dataset.index;
      var params = _defineProperty({}, "options[".concat(
      index, "].visible"), false);


      this.setData(params, function () {
        if (typeof callback === 'function') {
          callback.call(_this, e);
        } else {
          _this.onReset(e, _this.prevState);
        }

        _this.$wuxBackdrop.release();
      });
    },
    /**
        * 确认按钮
        * @param {Object} e 事件对象
        */
    onConfirm: function onConfirm(e) {
      this.onClose(e, this.onChange);
    },
    /**
        * 筛选栏内单项选择触发 change 事件
        * @param {Object} e 事件对象
        */
    onRadioChange: function onRadioChange(e) {var _this$setData2;var
      value = e.detail.value;var _e$currentTarget$data2 =
      e.currentTarget.dataset,index = _e$currentTarget$data2.index,item = _e$currentTarget$data2.item,parentIndex = _e$currentTarget$data2.parentIndex;
      var children = item.children.map(function (n) {return Object.assign({}, n, {
          checked: n.value === value });});

      var selected = children.filter(function (n) {return n.checked;}).map(function (n) {return n.label;}).join(',');

      this.setData((_this$setData2 = {}, _defineProperty(_this$setData2, "options[".concat(
      parentIndex, "].children[").concat(index, "].children"), children), _defineProperty(_this$setData2, "options[".concat(
      parentIndex, "].children[").concat(index, "].selected"), selected), _this$setData2));

    },
    /**
        * 筛选栏内多项选择触发 change 事件
        * @param {Object} e 事件对象
        */
    onCheckboxChange: function onCheckboxChange(e) {var _this$setData3;var
      value = e.detail.value;var _e$currentTarget$data3 =
      e.currentTarget.dataset,index = _e$currentTarget$data3.index,item = _e$currentTarget$data3.item,parentIndex = _e$currentTarget$data3.parentIndex;
      var children = item.children.map(function (n) {return Object.assign({}, n, {
          checked: value.includes(n.value) });});

      var selected = children.filter(function (n) {return n.checked;}).map(function (n) {return n.label;}).join(',');

      this.setData((_this$setData3 = {}, _defineProperty(_this$setData3, "options[".concat(
      parentIndex, "].children[").concat(index, "].children"), children), _defineProperty(_this$setData3, "options[".concat(
      parentIndex, "].children[").concat(index, "].selected"), selected), _this$setData3));

    },
    /**
        * 下拉框内单项选择触发 change 事件
        * @param {Object} e 事件对象
        */
    radioChange: function radioChange(e) {var
      value = e.detail.value;var _e$currentTarget$data4 =
      e.currentTarget.dataset,index = _e$currentTarget$data4.index,item = _e$currentTarget$data4.item;
      var children = item.children.map(function (n) {return Object.assign({}, n, {
          checked: n.value === value });});

      var params = _defineProperty({}, "options[".concat(
      index, "].children"), children);


      this.setData(params, this.onChange);
    },
    /**
        * 下拉框内多项选择触发 change 事件
        * @param {Object} e 事件对象
        */
    checkboxChange: function checkboxChange(e) {var
      value = e.detail.value;var _e$currentTarget$data5 =
      e.currentTarget.dataset,index = _e$currentTarget$data5.index,item = _e$currentTarget$data5.item;
      var data = item.children.filter(function (n) {return n.checked;}).map(function (n) {return n.value;});
      var children = item.children.map(function (n) {return Object.assign({}, n, {
          checked: n.value === value ? !data.includes(n.value) : n.checked });});

      var params = _defineProperty({}, "options[".concat(
      index, "].children"), children);


      this.setData(params, this.onChange);
    },
    /**
        * 点击事件
        * @param {Object} e 事件对象
        */
    onClick: function onClick(e) {var
      index = e.currentTarget.dataset.index;
      this.onOpenSelect(this.data.options, index);
    },
    /**
        * 打开下拉框
        * @param {Array} data 菜单数据
        * @param {Number} index 当前索引
        */
    onOpenSelect: function onOpenSelect() {var _this2 = this;var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var current = data[index];
      var options = data.map(function (n, i) {
        var params = Object.assign({}, n, {
          checked: index === i ? !n.checked : false });


        // 判断已选择的元素是否同组
        if (n.checked) {
          var has = _this2.getDifference(n.groups, current.groups);

          params.checked = !!has.length;

          // 判断非同组的元素清空选择内容
          if (index !== i && !has.length) {
            if (typeof params.children === 'object') {
              if (['radio', 'checkbox'].includes(n.type)) {
                params.children = params.children.map(function (n) {return Object.assign({}, n, {
                    checked: false });});

              }

              if (['filter'].includes(n.type)) {
                params.children = params.children.map(function (n) {
                  return Object.assign({}, n, {
                    children: n.children.map(function (m) {return Object.assign({}, m, {
                        checked: false });}),

                    selected: '' });

                });
              }
            }

            if (['sort'].includes(n.type)) {
              params.sort = undefined;
            }
          }
        }

        // 展开或隐藏下拉框
        if (['radio', 'checkbox', 'filter'].includes(n.type)) {
          params.visible = index === i ? !n.visible : false;

          if (n.type === 'filter') {
            _this2.$wuxBackdrop[index === i ? !n.visible ? 'retain' : 'release' : 'release']();
          }
        }

        // 当前点击排序做出处理
        if (index === i && ['sort'].includes(n.type)) {
          params.sort = typeof params.sort === 'number' ? -params.sort : 1;
        }

        return params;
      });

      this.setData({ options: options, index: index }, function () {
        _this2.prevState = current;
        if (!['radio', 'checkbox', 'filter'].includes(current.type)) {
          _this2.onChange();
        }
      });
    },
    /**
        * 关闭下拉框
        */
    onCloseSelect: function onCloseSelect() {
      var options = this.data.options;
      var params = {};

      options.forEach(function (n, i) {
        if (n.checked && n.visible) {
          params["options[".concat(i, "].visible")] = false;
        }
      });

      this.setData(params);
    },
    /**
        * 获取两个数组相同的元素
        * @param {Array} data 数组
        * @param {Array} values 数组
        */
    getDifference: function getDifference() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return data.filter(function (v) {return values.includes(v);});
    },
    /**
        * 元素发生变化时的事件
        */
    onChange: function onChange() {var _this3 = this;
      setTimeout(function () {var
        items = _this3.data.options;
        var checkedItems = items.filter(function (n) {return n.checked;});

        _this3.onCloseSelect();
        _this3.triggerEvent('change', { checkedItems: checkedItems, items: items });
      }, 300);
    },
    /**
        * scroll-view 滚动时触发的事件
        * @param {Object} e 事件对象
        */
    onScroll: function onScroll(e) {
      this.triggerEvent('scroll', e);
    },
    /**
        * 打开 select 或 filter 时触发的回调函数
        * @param {Object} e 事件对象
        */
    onEnter: function onEnter(e) {
      this.triggerEvent('open', e);
    },
    /**
        * 关闭 select 或 filter 时触发的回调函数
        * @param {Object} e 事件对象
        */
    onExit: function onExit(e) {
      this.triggerEvent('close', e);
    } },

  created: function created() {
    this.$wuxBackdrop = (0, _index.$wuxBackdrop)('#wux-backdrop', this);
  },
  attached: function attached() {
    this.setData({
      options: this.data.items });

  } });
});
require('wxcomponents/wux-weapp/filterbar/index.js');
__wxRoute = 'wxcomponents/wux-weapp/floating-button/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/floating-button/index.js';

define('wxcomponents/wux-weapp/floating-button/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var defaultAction = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhBAQLCR5MtjrbAAAAjUlEQVRo3u3ZMRKAIAxEUbDirp4nXnctFFDHBtDQ/O1Nnk6aHUMgZCBKMkmmNAtgOmL9M+IQQGVM95zljy8DAAAAAAAAAAAAAACALsDZcppSx7Q+WdtUvA5xffUtrjeA8/qQ21S9gc15/3Nfzw0M5O0G2kM5BQAAAAAAAAAAAAAAQGk33q0qZ/p/Q/JFdmei9usomnwIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA0LTA0VDExOjA5OjMwKzA4OjAw1U4c3wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNC0wNFQxMTowOTozMCswODowMKQTpGMAAAAASUVORK5CYII=';

Component({
  externalClasses: ['wux-class'],
  properties: {
    theme: {
      type: String,
      value: 'balanced' },

    position: {
      type: String,
      value: 'bottomRight' },

    action: {
      type: String,
      value: defaultAction },

    actionRotate: {
      type: Boolean,
      value: true },

    backdrop: {
      type: Boolean,
      value: false },

    buttons: {
      type: Array,
      value: [] },

    defaultVisible: {
      type: Boolean,
      value: false },

    visible: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.setData({
            buttonVisible: newVal });

        }
      } },

    controlled: {
      type: Boolean,
      value: false } },


  methods: {
    onChange: function onChange(buttonVisible) {
      if (this.data.buttonVisible !== buttonVisible) {
        if (!this.data.controlled) {
          this.setData({
            buttonVisible: buttonVisible });

        }
      }

      this.triggerEvent('change', { value: buttonVisible });
    },
    onToggle: function onToggle() {
      this.onChange(!this.data.buttonVisible);
    },
    onTap: function onTap(e) {var _e$currentTarget$data =
      e.currentTarget.dataset,index = _e$currentTarget$data.index,value = _e$currentTarget$data.value;
      var params = {
        index: index,
        value: value,
        buttons: this.data.buttons };


      if (!value.disabled) {
        this.triggerEvent('click', params);
        this.onChange(false);
      }
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      this.triggerEvent('getuserinfo', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindcontact: function bindcontact(e) {
      this.triggerEvent('contact', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindopensetting: function bindopensetting(e) {
      this.triggerEvent('opensetting', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    onError: function onError(e) {
      this.triggerEvent('error', _objectSpread({}, e.detail, e.currentTarget.dataset));
    } },

  data: {
    buttonVisible: false },

  attached: function attached() {var _this$data =
    this.data,defaultVisible = _this$data.defaultVisible,visible = _this$data.visible,controlled = _this$data.controlled;
    var buttonVisible = controlled ? visible : defaultVisible;

    this.setData({
      buttonVisible: buttonVisible });

  } });
});
require('wxcomponents/wux-weapp/floating-button/index.js');
__wxRoute = 'wxcomponents/wux-weapp/gallery/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/gallery/index.js';

define('wxcomponents/wux-weapp/gallery/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));
var _gestures = require("../helpers/gestures");var _defaults;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = (_defaults = {
  prefixCls: 'wux-gallery',
  classNames: 'wux-animate--slideInRight',
  indicatorDots: false,
  indicatorColor: 'rgba(0, 0, 0, .3)',
  indicatorActiveColor: '#000000',
  autoplay: false,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  showDelete: true,
  allowScale: true,
  current: 0,
  urls: [] }, _defineProperty(_defaults,
'delete', function _delete() {}), _defineProperty(_defaults, "cancel", function cancel()
{}), _defineProperty(_defaults, "onChange", function onChange()
{}), _defineProperty(_defaults, "onTap", function onTap()
{return true;}), _defaults);


var MIN_RATIO = 1;
var MAX_RATIO = 1.2;

var defaultTouchOptions = {
  scale: 1,
  offset: [.5, 3] };


var getImages = function getImages() {var urls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return urls.map(function (n) {
    if (typeof n !== 'object') {
      return {
        image: n,
        remark: '',
        touch: _objectSpread({}, defaultTouchOptions) };

    }

    return _objectSpread({}, n, { touch: _objectSpread({}, defaultTouchOptions) });
  });
};

(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var swiper = "".concat(prefixCls, "__swiper");
      var item = "".concat(prefixCls, "__item");
      var img = "".concat(prefixCls, "__img");
      var remark = "".concat(prefixCls, "__remark");
      var opr = "".concat(prefixCls, "__opr");
      var del = "".concat(prefixCls, "__del");
      var icon = "".concat(prefixCls, "__icon");

      return {
        swiper: swiper,
        item: item,
        img: img,
        remark: remark,
        opr: opr,
        del: del,
        icon: icon };

    } },

  methods: {
    /**
              * 隐藏
              */
    hide: function hide() {
      this.$$setData({ in: false });
      if (typeof this.fns.cancel === 'function') {
        this.fns.cancel();
      }
    },
    /**
        * 显示
        */
    show: function show() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts, {
        images: getImages(opts.urls) }));


      this.$$setData(_objectSpread({ in: true }, options));
    },
    /**
        * 图片点击事件
        */
    onTap: function onTap(e) {
      if (this.allowItemClick) {var
        index = e.currentTarget.dataset.index;
        if (this.fns.onTap(index, this.data.urls) === true) {
          this.hide();
        }
      }
    },
    /**
        * 手指触摸动作开始
        */
    onTouchStart: function onTouchStart(e) {
      this.allowItemClick = true;

      if (!this.data.allowScale || (0, _gestures.getPointsNumber)(e) === 1 || this.touching) {
        return false;
      }

      var p1 = (0, _gestures.getTouchPoints)(e);
      var p2 = (0, _gestures.getTouchPoints)(e, 1);
      var distance = (0, _gestures.getPointsDistance)(p1, p2);

      this.touching = false;
      this.prevDistance = distance;

      this.$$setData({
        transition: 'none' });

    },
    /**
        * 手指触摸后移动
        */
    onTouchMove: function onTouchMove(e) {var _this = this;
      if (!this.data.allowScale || (0, _gestures.getPointsNumber)(e) === 1 || this.isRendered) {
        return false;
      }

      var p1 = (0, _gestures.getTouchPoints)(e);
      var p2 = (0, _gestures.getTouchPoints)(e, 1);
      var distance = (0, _gestures.getPointsDistance)(p1, p2);var _e$currentTarget$data =
      e.currentTarget.dataset,touch = _e$currentTarget$data.touch,index = _e$currentTarget$data.index;
      var distanceDiff = distance - this.prevDistance;
      var scale = touch.scale + 0.005 * distanceDiff;

      if (index !== this.data.current) {
        return false;
      }

      if (scale <= touch.offset[0] * MIN_RATIO) {
        scale = touch.offset[0] * MIN_RATIO;
      } else if (scale >= touch.offset[1] * MAX_RATIO) {
        scale = touch.offset[1] * MAX_RATIO;
      }

      var params = _defineProperty({}, "images[".concat(
      index, "].touch.scale"), scale);


      if (!this.touching) {
        this.touching = true;
      }

      this.prevDistance = distance;
      this.allowItemClick = false;
      this.isRendered = true;

      this.$$setData(params).then(function () {return _this.isRendered = false;});
    },
    /**
        * 手指触摸动作结束
        */
    onTouchEnd: function onTouchEnd(e) {var _params2,_this2 = this;
      if (!this.data.allowScale || !this.touching) {
        return false;
      }var _e$currentTarget$data2 =

      e.currentTarget.dataset,touch = _e$currentTarget$data2.touch,index = _e$currentTarget$data2.index;

      var scale = touch.scale;

      if (scale <= 1) {
        scale = 1;
      } else if (scale >= touch.offset[1] * MAX_RATIO) {
        scale = touch.offset[1];
      }

      var params = (_params2 = {}, _defineProperty(_params2, "images[".concat(
      index, "].touch.scale"), scale), _defineProperty(_params2, "transition",
      'transform .3s'), _params2);


      this.touching = false;

      this.$$setData(params).then(function () {
        // Allow click
        setTimeout(function () {return _this2.allowItemClick = true;}, 400);
      });
    },
    /**
        * 点击删除按钮时会触发 delete 事件
        */
    onDelete: function onDelete(e) {
      if (typeof this.fns['delete'] === 'function') {
        if (this.fns['delete'](this.data.current, this.data.urls) === true) {
          this.hide();
        }
      }
    },
    /**
        * current 改变时会触发 change 事件
        */
    onChange: function onChange(e) {
      this.$$setData({ current: e.detail.current });
      if (typeof this.fns.onChange === 'function') {
        this.fns.onChange.call(this, e);
      }
    },
    /**
        * 滚动到指定图片
        * @param {Number} current 滑块的索引值
        * @param {Number} duration 延迟时长触发事件
        */
    slideTo: function slideTo() {var _this3 = this;var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var _this$data =
      this.data,urls = _this$data.urls,circular = _this$data.circular;
      var max = urls.length - 1;

      if (current < 0) {
        current = circular ? max : 0;
      } else if (current > max) {
        current = circular ? 0 : max;
      }

      if (duration > 0) {
        return this.$$requestAnimationFrame(function () {return _this3.$$setData({ current: current });}, duration);
      }

      return this.$$setData({ current: current });
    },
    /**
        * 滚动到下一张图片
        * @param {Number} duration 延迟时长触发事件
        */
    slideNext: function slideNext(duration) {
      return this.slideTo(this.data.current + 1, duration);
    },
    /**
        * 滚动到上一张图片
        * @param {Number} duration 延迟时长触发事件
        */
    slidePrev: function slidePrev(duration) {
      return this.slideTo(this.data.current - 1, duration);
    } } });
});
require('wxcomponents/wux-weapp/gallery/index.js');
__wxRoute = 'wxcomponents/wux-weapp/grid/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/grid/index.js';

define('wxcomponents/wux-weapp/grid/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../grids/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-grid' },

    hoverClass: {
      type: String,
      value: 'default' },

    thumb: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' } },


  data: {
    width: '100%',
    bordered: true,
    square: true,
    index: 0 },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,hoverClass = _this$data.hoverClass,bordered = _this$data.bordered,square = _this$data.square;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--bordered"), bordered), _defineProperty(_classNames, "".concat(
      prefixCls, "--square"), square), _classNames));

      var content = "".concat(prefixCls, "__content");
      var inner = "".concat(prefixCls, "__inner");
      var hd = "".concat(prefixCls, "__hd");
      var thumb = "".concat(prefixCls, "__thumb");
      var bd = "".concat(prefixCls, "__bd");
      var label = "".concat(prefixCls, "__label");
      var hover = hoverClass && hoverClass !== 'default' ? hoverClass : "".concat(prefixCls, "--hover");

      return {
        wrap: wrap,
        content: content,
        inner: inner,
        hd: hd,
        thumb: thumb,
        bd: bd,
        label: label,
        hover: hover };

    } },

  methods: {
    changeCurrent: function changeCurrent(width, bordered, square, index) {
      this.setData({
        width: width,
        bordered: bordered,
        square: square,
        index: index });

    },
    onTap: function onTap() {
      this.triggerEvent('click', this.data);
    } } });
});
require('wxcomponents/wux-weapp/grid/index.js');
__wxRoute = 'wxcomponents/wux-weapp/grids/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/grids/index.js';

define('wxcomponents/wux-weapp/grids/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../grid/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.changeCurrent);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-grids' },

    col: {
      type: Number,
      value: 3,
      observer: 'changeCurrent' },

    bordered: {
      type: Boolean,
      value: true,
      observer: 'changeCurrent' },

    square: {
      type: Boolean,
      value: false,
      observer: 'changeCurrent' } },


  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,bordered = _this$data.bordered;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--bordered"), bordered));


      return {
        wrap: wrap };

    } },

  methods: {
    changeCurrent: function changeCurrent() {
      var elements = this.getRelationNodes('../grid/index');var _this$data2 =
      this.data,col = _this$data2.col,bordered = _this$data2.bordered,square = _this$data2.square;
      var colNum = parseInt(col) > 0 ? parseInt(col) : 1;
      var width = "".concat(100 / colNum, "%");

      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          element.changeCurrent(width, bordered, square, index);
        });
      }
    } } });
});
require('wxcomponents/wux-weapp/grids/index.js');
__wxRoute = 'wxcomponents/wux-weapp/icon/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/icon/index.js';

define('wxcomponents/wux-weapp/icon/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";Component({
  externalClasses: ['wux-class'],
  properties: {
    type: {
      type: String,
      value: '' },

    size: {
      type: [String, Number],
      value: 32,
      observer: 'updated' },

    color: {
      type: String,
      value: '' },

    hidden: {
      type: Boolean,
      value: false } },


  data: {
    fontSize: '' },

  methods: {
    updated: function updated() {var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.size;
      var fontSize = size;

      if (typeof size === 'number') {
        fontSize = "".concat(size, "px");
      } else if (typeof size === 'string') {
        if (!isNaN(Number(size))) {
          fontSize = "".concat(size, "px");
        }
      }

      if (this.data.fontSize !== fontSize) {
        this.setData({
          fontSize: fontSize });

      }
    } },

  attached: function attached() {
    this.updated();
  } });
});
require('wxcomponents/wux-weapp/icon/index.js');
__wxRoute = 'wxcomponents/wux-weapp/image/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/image/index.js';

define('wxcomponents/wux-weapp/image/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames3 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var EMPTY = 'empty';
var LOADING = 'loading';
var LOADED = 'loaded';
var ERROR = 'error';
var UNMOUNTED = 'unmounted';

var calcStyle = function calcStyle(value) {return typeof value === 'number' ? "".concat(value, "px") : value;};

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-image' },

    src: {
      type: String,
      value: '',
      observer: 'updated' },

    mode: {
      type: String,
      value: 'scaleToFill' },

    lazyLoad: {
      type: Boolean,
      value: false },

    shape: {
      type: String,
      value: 'normal' },

    width: {
      type: null,
      value: 300,
      observer: 'updateStyle' },

    height: {
      type: null,
      value: 225,
      observer: 'updateStyle' },

    unmountOnEmpty: {
      type: Boolean,
      value: false },

    unmountOnError: {
      type: Boolean,
      value: false },

    empty: {
      type: String,
      value: '' },

    loading: {
      type: String,
      value: '' },

    error: {
      type: String,
      value: '' } },


  data: {
    status: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,shape = _this$data.shape,mode = _this$data.mode,status = _this$data.status,empty = _this$data.empty,loading = _this$data.loading,error = _this$data.error;
      var wrap = (0, _classNames3.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(shape), shape), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(mode), mode), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(status), status), _classNames));

      var inner = "".concat(prefixCls, "__inner");
      var thumb = "".concat(prefixCls, "__thumb");
      var mask = (0, _classNames3.default)("".concat(prefixCls, "__mask"), _defineProperty({}, "".concat(
      prefixCls, "__mask--text"), empty || loading || error));

      var text = "".concat(prefixCls, "__text");

      return {
        wrap: wrap,
        inner: inner,
        thumb: thumb,
        mask: mask,
        text: text };

    } },

  methods: {
    /** 
              * 更新资源地址
              */
    updated: function updated() {var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.src;
      this.updateStatus(!!src ? LOADING : this.data.unmountOnEmpty ? UNMOUNTED : EMPTY);
    },
    /**
        * 更新组件样式
        */
    updateStyle: function updateStyle() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var _Object$assign =
      Object.assign({}, this.data, opts),width = _Object$assign.width,height = _Object$assign.height;
      var style = "width: ".concat(calcStyle(width), "; height: ").concat(calcStyle(height));

      this.setData({
        style: style });

    },
    /**
        * 更新组件状态
        */
    updateStatus: function updateStatus(status) {
      if (this.data.status !== status) {
        this.setData({
          status: status });

      }

      this.triggerEvent('change', { status: status });
    },
    /**
        * 资源加载完成时的回调函数
        */
    onLoad: function onLoad(e) {
      this.updateStatus(LOADED);
      this.triggerEvent('load', _objectSpread({}, e.detail, { status: LOADED }));
    },
    /**
        * 资源加载失败时的回调函数
        */
    onError: function onError(e) {
      var status = this.data.unmountOnError ? UNMOUNTED : ERROR;
      this.updateStatus(status);
      this.triggerEvent('error', _objectSpread({}, e.detail, { status: status }));
    },
    /**
        * 点击事件
        */
    onTap: function onTap(e) {
      this.triggerEvent('click', _objectSpread({}, e.detail, { status: this.data.status }));
    } },

  attached: function attached() {
    this.updateStyle();
    this.updated();
  } });
});
require('wxcomponents/wux-weapp/image/index.js');
__wxRoute = 'wxcomponents/wux-weapp/index-item/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/index-item/index.js';

define('wxcomponents/wux-weapp/index-item/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../index/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-index-item' },

    name: {
      type: String,
      value: '' } },


  data: {
    index: 0,
    top: 0,
    height: 0 },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var hd = "".concat(prefixCls, "__hd");
      var bd = "".concat(prefixCls, "__bd");

      return {
        wrap: wrap,
        hd: hd,
        bd: bd };

    } },

  methods: {
    updated: function updated(index) {var _this = this;
      var className = ".".concat(this.data.prefixCls);
      wx.
      createSelectorQuery().
      in(this).
      select(className).
      boundingClientRect(function (rect) {
        if (!rect) return;

        _this.setData({
          top: rect.top,
          height: rect.height,
          index: index });

      }).
      exec();
    } } });
});
require('wxcomponents/wux-weapp/index-item/index.js');
__wxRoute = 'wxcomponents/wux-weapp/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/index/index.js';

define('wxcomponents/wux-weapp/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../index-item/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.updated);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-index' },

    height: {
      type: [String, Number],
      value: 300,
      observer: 'updateStyle' },

    showIndicator: {
      type: Boolean,
      value: true } },


  data: {
    scrollTop: 0,
    sections: [],
    moving: false,
    current: 0,
    currentName: '',
    extStyle: '' },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var nav = "".concat(prefixCls, "__nav");
      var navItem = "".concat(prefixCls, "__nav-item");
      var indicator = "".concat(prefixCls, "__indicator");

      return {
        wrap: wrap,
        nav: nav,
        navItem: navItem,
        indicator: indicator };

    } },

  methods: {
    /**
              * 更新样式
              */
    updateStyle: function updateStyle() {var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.height;
      var extStyle = (0, _styleToCssString.default)({ height: height });

      if (extStyle !== this.data.extStyle) {
        this.setData({
          extStyle: extStyle });

      }
    },
    /**
        * 更新元素
        */
    updated: function updated() {
      var elements = this.getRelationNodes('../index-item/index');

      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          element.updated(index);
        });

        this.getNavPoints();
      }

      if (this.data.sections.length !== elements.length) {
        this.setData({
          sections: elements.map(function (element) {return element.data;}) });

      }
    },
    /**
        * 设置当前激活的元素
        */
    setActive: function setActive(current, currentName) {
      if (current !== this.data.current || currentName !== this.data.currentName) {
        var target = this.data.sections.filter(function (section) {return section.index === current && section.name === currentName;})[0];
        if (target) {
          this.setData({
            current: current,
            currentName: currentName,
            scrollTop: target.top });

        }
      }

      this.triggerEvent('change', { index: current, name: currentName });
    },
    /**
        * 手指触摸动作开始
        */
    onTouchStart: function onTouchStart(e) {
      if (this.data.moving) return;var _e$target$dataset =
      e.target.dataset,index = _e$target$dataset.index,name = _e$target$dataset.name;
      this.setActive(index, name);
      this.setData({ moving: true });
    },
    /**
        * 手指触摸后移动
        */
    onTouchMove: function onTouchMove(e) {
      var target = this.getTargetFromPoint(e.changedTouches[0].pageY);

      if (target !== undefined) {var _target$dataset =
        target.dataset,index = _target$dataset.index,name = _target$dataset.name;
        this.setActive(index, name);
      }
    },
    /**
        * 手指触摸动作结束
        */
    onTouchEnd: function onTouchEnd(e) {var _this = this;
      if (!this.data.moving) return;
      setTimeout(function () {return _this.setData({ moving: false });}, 300);
    },
    /**
        * 滚动事件的回调函数
        */
    onScroll: function onScroll(e) {var _this2 = this;
      if (this.data.moving) return;var
      scrollTop = e.detail.scrollTop;
      this.data.sections.forEach(function (section, index) {
        if (scrollTop < section.top + section.height && scrollTop >= section.top) {
          if (index !== _this2.data.current || section.name !== _this2.data.currentName) {
            _this2.setData({
              current: index,
              currentName: section.name });

          }
        }
      });
    },
    /**
        * 获取右侧导航对应的坐标
        */
    getNavPoints: function getNavPoints() {var _this3 = this;
      var className = ".".concat(this.data.prefixCls, "__nav-item");
      wx.
      createSelectorQuery().
      in(this).
      selectAll(className).
      boundingClientRect(function (rects) {
        if (rects.filter(function (n) {return !n;}).length) return;
        _this3.setData({
          points: rects.map(function (n) {return _objectSpread({}, n, { offsets: [n.top, n.top + n.height] });}) });

      }).
      exec();
    },
    /**
        * 根据坐标获得对应的元素
        */
    getTargetFromPoint: function getTargetFromPoint(y) {var
      points = this.data.points;
      var target;

      for (var i = points.length - 1; i >= 0; i--) {var _points$i$offsets = _slicedToArray(
        points[i].offsets, 2),a = _points$i$offsets[0],b = _points$i$offsets[1];

        // 1.判断是否为第一个元素且大于最大坐标点
        // 2.判断是否为最后一个元素且小于最小坐标点
        // 3.判断是否包含于某个坐标系内
        if (i === points.length - 1 && y > b || i === 0 && y < a || y >= a && y <= b) {
          target = points[i];
          break;
        }
      }

      return target;
    } },

  ready: function ready() {
    this.updateStyle();
    this.getNavPoints();
  } });
});
require('wxcomponents/wux-weapp/index/index.js');
__wxRoute = 'wxcomponents/wux-weapp/input-number/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/input-number/index.js';

define('wxcomponents/wux-weapp/input-number/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames4 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var toNumberWhenUserInput = function toNumberWhenUserInput(num) {
  if (/\.\d*0$/.test(num) || num.length > 16) {
    return num;
  }

  if (isNaN(num)) {
    return num;
  }

  return Number(num);
};

var getValidValue = function getValidValue(value, min, max) {
  var val = parseFloat(value);

  if (isNaN(val)) {
    return value;
  }

  if (val < min) {
    val = min;
  }

  if (val > max) {
    val = max;
  }

  return val;
};

(0, _baseComponent.default)({
  externalClasses: ['wux-sub-class', 'wux-input-class', 'wux-add-class'],
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-input-number' },

    shape: {
      type: String,
      value: 'square' },

    min: {
      type: Number,
      value: -MAX_SAFE_INTEGER },

    max: {
      type: Number,
      value: MAX_SAFE_INTEGER },

    step: {
      type: Number,
      value: 1 },

    defaultValue: {
      type: Number,
      value: 0 },

    value: {
      type: Number,
      value: 0,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    disabled: {
      type: Boolean,
      value: true },

    longpress: {
      type: Boolean,
      value: false },

    color: {
      type: String,
      value: 'balanced' },

    controlled: {
      type: Boolean,
      value: false } },


  data: {
    inputValue: 0,
    disabledMin: false,
    disabledMax: false },

  computed: {
    classes: function classes() {var _classNames2, _classNames3;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,shape = _this$data.shape,color = _this$data.color,disabledMin = _this$data.disabledMin,disabledMax = _this$data.disabledMax;
      var wrap = (0, _classNames4.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--").concat(shape), shape));

      var sub = (0, _classNames4.default)("".concat(prefixCls, "__selector"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(
      prefixCls, "__selector--sub"), true), _defineProperty(_classNames2, "".concat(
      prefixCls, "__selector--").concat(color), color), _defineProperty(_classNames2, "".concat(
      prefixCls, "__selector--disabled"), disabledMin), _classNames2));

      var add = (0, _classNames4.default)("".concat(prefixCls, "__selector"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(
      prefixCls, "__selector--add"), true), _defineProperty(_classNames3, "".concat(
      prefixCls, "__selector--").concat(color), color), _defineProperty(_classNames3, "".concat(
      prefixCls, "__selector--disabled"), disabledMax), _classNames3));

      var icon = "".concat(prefixCls, "__icon");
      var input = "".concat(prefixCls, "__input");

      return {
        wrap: wrap,
        sub: sub,
        add: add,
        icon: icon,
        input: input };

    } },

  methods: {
    /**
              * 更新值
              */
    updated: function updated(value) {var condition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var trigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var _this$data2 =
      this.data,min = _this$data2.min,max = _this$data2.max;
      var inputValue = getValidValue(value, min, max);
      var disabledMin = inputValue <= min;
      var disabledMax = inputValue >= max;

      // 更新数值，判断最小或最大值禁用 sub 或 add 按钮
      if (condition) {
        this.setData({
          inputValue: inputValue,
          disabledMin: disabledMin,
          disabledMax: disabledMax });

      }

      // 触发事件
      if (trigger) {
        this.triggerEvent('change', { value: inputValue });
      }
    },
    /**
        * 数字计算函数
        */
    calculation: function calculation(type, meta) {var _this = this;var _this$data3 =
      this.data,disabledMax = _this$data3.disabledMax,disabledMin = _this$data3.disabledMin,inputValue = _this$data3.inputValue,step = _this$data3.step,longpress = _this$data3.longpress,controlled = _this$data3.controlled;

      // add
      if (type === 'add') {
        if (disabledMax) return false;
        this.updated(inputValue + step, !controlled, true);
      }

      // sub
      if (type === 'sub') {
        if (disabledMin) return false;
        this.updated(inputValue - step, !controlled, true);
      }

      // longpress
      if (longpress && meta) {
        this.timeout = setTimeout(function () {return _this.calculation(type, meta);}, 100);
      }
    },
    /**
        * 当键盘输入时，触发 input 事件
        */
    onInput: function onInput(e) {var _this2 = this;
      this.clearInputTimer();
      this.inputTime = setTimeout(function () {
        var value = toNumberWhenUserInput(e.detail.value);
        _this2.updated(value, !_this2.data.controlled);
        _this2.triggerEvent('change', { value: value });
      }, 300);
    },
    /**
        * 输入框聚焦时触发
        */
    onFocus: function onFocus(e) {
      this.triggerEvent('focus', e.detail);
    },
    /**
        * 输入框失去焦点时触发
        */
    onBlur: function onBlur(e) {
      // always set input value same as value
      this.setData({
        inputValue: this.data.inputValue });


      this.triggerEvent('blur', e.detail);
    },
    /**
        * 手指触摸后，超过350ms再离开
        */
    onLongpress: function onLongpress(e) {var
      type = e.currentTarget.dataset.type;var
      longpress = this.data.longpress;
      if (longpress) {
        this.calculation(type, true);
      }
    },
    /**
        * 手指触摸后马上离开
        */
    onTap: function onTap(e) {var
      type = e.currentTarget.dataset.type;var
      longpress = this.data.longpress;
      if (!longpress || longpress && !this.timeout) {
        this.calculation(type, false);
      }
    },
    /**
        * 	手指触摸动作结束
        */
    onTouchEnd: function onTouchEnd() {
      this.clearTimer();
    },
    /**
        * 手指触摸动作被打断，如来电提醒，弹窗
        */
    onTouchCancel: function onTouchCancel() {
      this.clearTimer();
    },
    /**
        * 清除长按的定时器
        */
    clearTimer: function clearTimer() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    },
    /**
        * 清除输入框的定时器
        */
    clearInputTimer: function clearInputTimer() {
      if (this.inputTime) {
        clearTimeout(this.inputTime);
        this.inputTime = null;
      }
    } },

  attached: function attached() {var _this$data4 =
    this.data,defaultValue = _this$data4.defaultValue,value = _this$data4.value,controlled = _this$data4.controlled;
    var inputValue = controlled ? value : defaultValue;

    this.updated(inputValue);
  },
  detached: function detached() {
    this.clearTimer();
    this.clearInputTimer();
  } });
});
require('wxcomponents/wux-weapp/input-number/index.js');
__wxRoute = 'wxcomponents/wux-weapp/input/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/input/index.js';

define('wxcomponents/wux-weapp/input/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-input' },

    label: {
      type: String,
      value: '' },

    extra: {
      type: String,
      value: '' },

    defaultValue: {
      type: String,
      value: '' },

    value: {
      type: String,
      value: '',
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    controlled: {
      type: Boolean,
      value: false },

    type: {
      type: String,
      value: 'text' },

    password: {
      type: Boolean,
      value: false },

    placeholder: {
      type: String,
      value: '' },

    placeholderStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    placeholderClass: {
      type: String,
      value: 'input-placeholder' },

    disabled: {
      type: Boolean,
      value: false },

    maxlength: {
      type: Number,
      value: 140 },

    cursorSpacing: {
      type: Number,
      value: 11 },

    focus: {
      type: Boolean,
      value: false },

    confirmType: {
      type: String,
      value: 'done' },

    confirmHold: {
      type: Boolean,
      value: false },

    cursor: {
      type: Number,
      value: -1 },

    selectionStart: {
      type: Number,
      value: -1 },

    selectionEnd: {
      type: Number,
      value: -1 },

    adjustPosition: {
      type: Boolean,
      value: true },

    clear: {
      type: Boolean,
      value: false },

    error: {
      type: Boolean,
      value: false } },


  data: {
    inputValue: '',
    inputFocus: false,
    extStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,disabled = _this$data.disabled,inputFocus = _this$data.inputFocus,hasError = _this$data.error;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--focus"), inputFocus), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _defineProperty(_classNames, "".concat(
      prefixCls, "--error"), hasError), _classNames));

      var label = "".concat(prefixCls, "__label");
      var control = "".concat(prefixCls, "__control");
      var item = "".concat(prefixCls, "__item");
      var clear = "".concat(prefixCls, "__clear");
      var error = "".concat(prefixCls, "__error");
      var extra = "".concat(prefixCls, "__extra");

      return {
        wrap: wrap,
        label: label,
        control: control,
        item: item,
        clear: clear,
        error: error,
        extra: extra };

    } },

  methods: {
    updated: function updated(inputValue) {
      if (this.data.inputValue !== inputValue) {
        this.setData({
          inputValue: inputValue });

      }
    },
    onChange: function onChange(e) {
      if (!this.data.controlled) {
        this.updated(e.detail.value);
      }

      this.triggerEvent('change', e.detail);
    },
    onFocus: function onFocus(e) {
      this.clearTimer();

      this.setData({
        inputFocus: true });


      this.triggerEvent('focus', e.detail);
    },
    onBlur: function onBlur(e) {
      this.setTimer();

      this.triggerEvent('blur', e.detail);
    },
    onConfirm: function onConfirm(e) {
      this.triggerEvent('confirm', e.detail);
    },
    onClear: function onClear() {var _this$data2 =
      this.data,controlled = _this$data2.controlled,inputValue = _this$data2.inputValue;

      this.setData({
        inputValue: controlled ? inputValue : '' });


      this.triggerEvent('clear', { value: '' });
    },
    onError: function onError() {
      this.triggerEvent('error', { value: this.data.inputValue });
    },
    setTimer: function setTimer() {var _this = this;
      this.clearTimer();

      this.timeout = setTimeout(function () {
        _this.setData({
          inputFocus: false });

      }, 200);
    },
    clearTimer: function clearTimer() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    } },

  attached: function attached() {var _this$data3 =
    this.data,defaultValue = _this$data3.defaultValue,value = _this$data3.value,controlled = _this$data3.controlled;
    var inputValue = controlled ? value : defaultValue;

    this.updated(inputValue);
  } });
});
require('wxcomponents/wux-weapp/input/index.js');
__wxRoute = 'wxcomponents/wux-weapp/keyboard/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/keyboard/index.js';

define('wxcomponents/wux-weapp/keyboard/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var defaults = {
  prefixCls: 'wux-keyboard',
  className: '',
  titleText: '安全键盘',
  cancelText: '取消',
  inputText: '输入数字密码',
  showCancel: true,
  disorder: false,
  password: true,
  maxlength: 6,
  onChange: function onChange(value) {},
  callback: function callback(value) {} };



/**
                                            * 给指一位数组随机生成二维数组
                                            *
                                            * @param {boolean} [isRandom=false] 是否随机
                                            * @param {array} [arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]] 默认数组
                                            * @returns
                                            */
var upsetNums = function upsetNums() {var isRandom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  if (isRandom) {
    var floor = Math.floor;
    var random = Math.random;
    var len = arr.length;
    var i,j,temp,n = floor(len / 2) + 1;
    while (n--) {
      i = floor(random() * len);
      j = floor(random() * len);
      if (i !== j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  var nums = [];

  for (var _i = 0; _i < 4; _i++) {
    nums.push(arr.slice(_i * 3, (_i + 1) * 3));
  }

  return nums;
};

(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var hd = "".concat(prefixCls, "__hd");
      var bd = "".concat(prefixCls, "__bd");
      var label = "".concat(prefixCls, "__label");
      var password = "".concat(prefixCls, "__password");
      var input = "".concat(prefixCls, "__input");
      var ft = "".concat(prefixCls, "__ft");
      var title = "".concat(prefixCls, "__title");
      var numbers = "".concat(prefixCls, "__numbers");
      var number = "".concat(prefixCls, "__number");
      var text = "".concat(prefixCls, "__text");
      var hover = "".concat(prefixCls, "__text--hover");

      return {
        wrap: wrap,
        hd: hd,
        bd: bd,
        label: label,
        password: password,
        input: input,
        ft: ft,
        title: title,
        numbers: numbers,
        number: number,
        text: text,
        hover: hover };

    } },

  methods: {
    /**
              * 隐藏
              */
    hide: function hide() {
      this.$$setData({ in: false });
    },
    /**
        * 上拉键盘组件
        * @param {Object} opts 配置项
        * @param {String} opts.className 自定义类名
        * @param {String} opts.titleText 标题
        * @param {String} opts.cancelText 取消按钮的文字
        * @param {String} opts.inputText 提示文本
        * @param {Boolean} opts.showCancel 是否显示取消按钮
        * @param {Boolean} opts.disorder 是否打乱键盘
        * @param {Boolean} opts.password 是否密码类型
        * @param {Number} opts.maxlength 最大输入长度，设置为 -1 的时候不限制最大长度
        * @param {Function} opts.onChange change 事件触发的回调函数
        * @param {Function} opts.callback 输入完成后的回调函数
        * @param {Function} opts.onClose 输入完成后的回调函数，优先级高于 callback
        */
    show: function show() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var nums = upsetNums(opts.disorder);
      var maxlength = opts.maxlength <= 0 ? -1 : opts.maxlength;
      var keys = maxlength !== -1 ? _toConsumableArray(new Array(maxlength || defaults.maxlength)).map(function () {return 1;}) : [];
      var options = this.$$mergeOptionsAndBindMethods(Object.assign({ nums: nums, keys: keys, value: '' }, defaults, opts));

      this.$$setData(_objectSpread({ in: true }, options));

      return this.hide.bind(this);
    },
    /**
        * 增加
        */
    increase: function increase(e) {
      var dataset = e.currentTarget.dataset;
      var nextValue = String(dataset.value);var _this$data =
      this.data,value = _this$data.value,maxlength = _this$data.maxlength;

      if (value.length >= maxlength && maxlength !== -1) return;

      this.updateValue(value + nextValue);
    },
    /**
        * 减少
        */
    decrease: function decrease(e) {var
      value = this.data.value;

      if (value.length === 0) return;

      this.updateValue(value.substr(0, value.length - 1));
    },
    /**
        * 更新
        */
    updateValue: function updateValue() {var _this = this;var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.$$setData({ value: value });

      // onChange
      if (typeof this.fns.onChange === 'function') {
        this.fns.onChange.call(this, value);
      }

      // onClose
      if (value.length === this.data.maxlength) {
        var preCloseCallback = this.fns.onClose || this.fns.callback;
        var performCloseDialog = function performCloseDialog() {return _this.hide();};

        if (preCloseCallback && typeof preCloseCallback === 'function') {
          var preCloseCallbackResult = preCloseCallback.call(this, value);
          if (typeof preCloseCallbackResult === 'object') {
            if (preCloseCallbackResult.closePromise) {
              preCloseCallbackResult.closePromise.then(performCloseDialog, performCloseDialog);
            } else {
              preCloseCallbackResult.then(performCloseDialog, performCloseDialog);
            }
          } else if (preCloseCallbackResult !== false) {
            performCloseDialog();
          }
        } else {
          performCloseDialog();
        }
      }
    } } });
});
require('wxcomponents/wux-weapp/keyboard/index.js');
__wxRoute = 'wxcomponents/wux-weapp/loading/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/loading/index.js';

define('wxcomponents/wux-weapp/loading/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames3 = _interopRequireDefault(require("../helpers/classNames"));
var _index = require("../index");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = {
  prefixCls: 'wux-loading',
  classNames: 'wux-animate--fadeIn',
  text: '数据加载中',
  mask: true,
  transparent: true };


(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames3.default)(prefixCls);
      var content = (0, _classNames3.default)("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(
      prefixCls, "__content--has-icon"), true));

      var icon = (0, _classNames3.default)("".concat(prefixCls, "__icon"), _defineProperty({}, "".concat(
      prefixCls, "__icon--loading"), true));

      var text = "".concat(prefixCls, "__text");

      return {
        wrap: wrap,
        content: content,
        icon: icon,
        text: text };

    } },

  methods: {
    /**
              * 隐藏
              */
    hide: function hide() {
      this.$$setData({ in: false });
      this.$wuxBackdrop && this.$wuxBackdrop.release();
    },
    /**
        * 显示
        */
    show: function show() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts));
      this.$$setData(_objectSpread({ in: true }, options));
      this.$wuxBackdrop && this.$wuxBackdrop.retain();
    } },

  created: function created() {
    if (this.data.mask) {
      this.$wuxBackdrop = (0, _index.$wuxBackdrop)('#wux-backdrop', this);
    }
  } });
});
require('wxcomponents/wux-weapp/loading/index.js');
__wxRoute = 'wxcomponents/wux-weapp/media/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/media/index.js';

define('wxcomponents/wux-weapp/media/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-media' },

    thumb: {
      type: String,
      value: '' },

    thumbStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' },

    align: {
      type: String,
      value: 'center' } },


  data: {
    extStyle: '' },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,align = _this$data.align;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--align-").concat(align), align));

      var hd = "".concat(prefixCls, "__hd");
      var thumb = "".concat(prefixCls, "__thumb");
      var bd = "".concat(prefixCls, "__bd");
      var title = "".concat(prefixCls, "__title");
      var desc = "".concat(prefixCls, "__desc");

      return {
        wrap: wrap,
        hd: hd,
        thumb: thumb,
        bd: bd,
        title: title,
        desc: desc };

    } } });
});
require('wxcomponents/wux-weapp/media/index.js');
__wxRoute = 'wxcomponents/wux-weapp/navbar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/navbar/index.js';

define('wxcomponents/wux-weapp/navbar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-navbar' },

    theme: {
      type: String,
      value: 'light' },

    title: {
      type: String,
      value: '' },

    leftText: {
      type: String,
      value: '' },

    rightText: {
      type: String,
      value: '' } },


  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,theme = _this$data.theme;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--").concat(theme), theme));

      var left = "".concat(prefixCls, "__left");
      var text = "".concat(prefixCls, "__text");
      var title = "".concat(prefixCls, "__title");
      var right = "".concat(prefixCls, "__right");

      return {
        wrap: wrap,
        left: left,
        text: text,
        title: title,
        right: right };

    } },

  methods: {
    onClick: function onClick(e) {var
      type = e.currentTarget.dataset.type;
      this.triggerEvent('click', { type: type });
    } } });
});
require('wxcomponents/wux-weapp/navbar/index.js');
__wxRoute = 'wxcomponents/wux-weapp/notice-bar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/notice-bar/index.js';

define('wxcomponents/wux-weapp/notice-bar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

var notice = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAEChJREFUeNrtnHlcVHX3xz/nDjAD5kK45IKmAyiW5JIB7lba83PPAE0zlBRlVVBRe7TcMtxQR4FENBSTUh9w7wk1ccUtMssdJJfsUdFyYy7L3PP7Q4bf7yVc7iCOoz7z/g/uuZ97vvd75t7zPd/v9wJWrFixYsWKFStWrLyosOTr03K9nZ3+elA9rdrfX6wWHO2iW71aHxX0s/Z0XNyDB0FBWm27dpb282lDlnbA3Bg7VkiiGLq5Zg0CMB51W7YsY5iLFI4pLuZFHI0Zvr4OK+JH5/y0aZOl/Tc3L2wA6GOCr7nohg6FG85jW2Ii3sF6XNRoFE/8FtV5z5kz9iPi5uY4lxMoLxgvTAAwf86AIBQMvVns0mf2bF6JsTg7Zcrj6mnUxUWSoVYtEhJWXMy9c8fS7TMXNpZ2oKqwFLy+5fqXXhJ73HyjcMvatdiKTjjcv39VdcVWqmjyqFEDwAq8wAEgWNqBx0W/K2RIU02TJmI4rhXWPnhQseP1CIELM02n3/nruXMt7b8R5gkfecyvVq0gI9jVNcrdndnXF1Cpntb1n7sA0L8fOqXZjo4dScdeKu+jRzEf5xHo4SF7wm74oZkoIgmO6DVsmDq6qFH+6ZkzLd0OY4cXdMlX56uzsyVP9ODU06fFsDodXX7MyrqXFbbDRVenjrn9eG4CwDh8Q4h0TgjevZu/w1lcqVtXzp768Sz0uH4d/cmeU95+2z4yrkF2+DffWLodRqRL9Dd/OG4cp0MN3SuvlB4oCWibNob7HLZhA0uBo9q1tbU1lx/PbAAYkzpxadAubZd581CDPiDnpCR0xCuwUatlT/wcaxH+6688SQgzfO3paW+I9cxxysy0dHsehTZImdiflydrICKDXLt2FXvbnLozPCbGXH48cwHAUsDE5gHVq4shN05pMzZv5pGUStcmTlQ8cTwHc+K2bZpocbTqRMeO9u/GrssVL12ydHvkKPi0cLPdKwsX4gE28orcXFnDVLSGLjRUrB202OXuiBFP2o9nJgDEzqEJbkeaNhVnavobVIcOYSHF0cg+fZTOo++xFuELF2pi82bkdBswgIRV88+tunfP0u1RomaHleNP+92+rZrJ66RvBgxAAor5X/fvy9nzt7QPHvHx+W6h/ZpFvfnmk/LD4gGgfy3olrZ/hw7QGD6QkjIzMQnrsOf112VPKKnY0Xk+z3tCQzUD4+5mh0+YQLRhA2AwWLo9lcVOF/9ubuLJk/wbt0PAsGHG0UoZw5JXH80yrKe3k5OZIw41irC3r+r1q1wHeLBgzFQXXZs2qmiqjeGtW/MAnEOSfHJmhJyES9zG0ZH7McMrIoLb4jO429nJ2o/DFU65dYu/ott408dHQ3GUQxkZVe+CJwOzPzdhjUacpA5UNatb135ewoqLuZcvm3q+sfQs/hDsp42cPZvPoTZlT5tWxrAfRVJoixYFy8SB6gYzZjz8Z1TU4/pd6Upg/vkgFxedl5ewiXZiUlwch2E+GrZpY7Y7u4VjeNnZs+RNW3C6b19N4zi/nMjs7MeVYw4MrL/cwUEUbWyqzX/wQNbwTZ7FrzVubH8q3iln85UrcmaF4UG7mo708JDOoI3KNj2dt9A07KxXD3dhh0579mjqOuQ5vNa3L9GCtScnVnC9Uv9KKppNbg5y2bd3L59DbQR06lTGsORJKNxAbeGAh4e6W9yFC/POnKns/TD5FVDwdsgR1+p9+tBl8kBMRobZO/4gL+a1O3eKfnbq4ve8vava8eZC2kdBwsyoqNKON1IDhTjQvbsI/en87rGxpuoRzSBAknAAPnx8xAgk80L+spzAaYoPKdLGRtqH29x/wYLH9V8xAPLdQvs1D2jQQOrJNaQb69YpDsOqyuc8irfEx2vermvbyLNXL0daQpfo77/Ndr0qwj74DtsqSDpF9sJgf3/9rpAh2sPDhpmqWxrwjuSBHV9+KWs4EYPg36uXPmHMDdeDnTtX1n/FHECI5ROGW+PHcycspVbVq8saXuYpuJ2TQ3sohSN++QW5GE5JJiRlh0jLC4qK+Lb0O5K2bLE/Fe+U0/K77zAPyKlsayyBFy2QwqOjaTo3U80bNIin4zZ0jo5l7I7zNLwRGyteDh6gjcnMNPWJpvFRry6oFRMj5hcUqyNHjoSAbynm1VfLGK4X3uX48eMf/rF/v6nuKwYAi7yAu/buDSCDTpU9Tq0wAkVr16ov5EVm3x4+nJpv2IBpBgMA0xOT9wEATlXuDAtgrDfkjwparl0dEEB6+pBcUlNhj1hk0//lWGNLfkADMBSXkpMf5vkdOjy0KCfrN95fWtTh6iK9XhwZPEE7dc4cXgoACQllDNegFhz79hWLg9drY1xcTA0w5RzAHt+SrpyIK0Fqg8mGTTrd8zoMe1KULiAJpjFwiIuTs+NN+AZNvLzE3SFDtIc/+shUffWKB/OLZyUn0yC0gPONG2UMHPE6vhcEdmZfRJiuqxwACu981S2ag99f3OnSyqJJub+v6F8TJmAZzqHOqVNydvQxp1C/OXOMoxIlXaLVdIlEEQ2xCodWrZI1nEQ1aenAgab6a/FC0IuGsaNoixQlpYWHy9lxDoJQo1GjgpWqyGoffPyxqfqGBezNjTZulDWYgY+ga9VKTA3b4aLTapX0rAFgJjT7v3rv4is//oghlAibLVtkDbfRKL4xfLipug4O8fE5OVlZ5Ii5eFe+0MT6YjskeHsr6VkDwMyQPT+QOup0csc5DkTx7dvfaxs4yi2wdm1FPWPSOBJ1cPfwYVm7ukIAtMp1GmsAmBn12jo2zol79yIKSehZTj2jJHmzK1AFs6unp6m6LPIIeGVlyR7X4jLead1aSccaAGaGhBm0l4qLEYjX8eFPP8nZSUBj6YC7u6m6QhOaw05nz8oa7OVJ/H79+oo6lr5B/zVkUS5eypGtbdEsakrv/L+VQQpI3hQizP7rL1m9WAQgvVYtJR1rADwlCLwLdnfvyh3ne6RG5woqrY+g2iIFFHeUL5FzNKbQrJdfVtKxBsDTojo6YzfJz77eZVteJF8RLENjVTvbXRXo/YVf0UeSlGSsAfCUYE9cYif5XySB1+B3+SfEoxgGGr6XIuUf8TQX27iN8iSaNQCeEjQYdSimRQtZg+G4h2L5dQePwl/iHq8uZ9LJeHwEGlOEfI5gxBoAZubuFyFHWoQ4OfFifMrJ8mv5+CVhAA7++qupuqTFG6ho1NAOJ3jutWtKOtYAMDN27phW3NzPDy2RR/3KWd+/DTvxD71eg6LR+QlHj5qqS4U0E/lt28oeP8YPkPLzz0o61gAwEw/TOSJkSClAQICs4XLY4+/0dKKEhD9H5+ebrPsVvid3Ly9ZuyJqST6//KKkZw0AM2Gc7uW5NA06+Ue/UBvt8dbKlabq6meP6e2a1769cTJJzo7ShG2C56FDSnrWAHjCsBQ4qlnTmjVpLJ+DITpazo4ScYd/OHHCLqVOYnb49u2m6gu1KEIa6OOjpKvZvyzwvGcFG06MeopXNG6ulMHQ3TDTprNyxem/hYK2Nhl0MDaWj8OT/Bs0kDWcjyLERkaWLgJVoHTdwG+0BAvlXyncm3vT9rQ0U/1VDoCb+J5XykeScF3YzeHjx5t7E+OzjvGLJJyJHtRl6FA5O9rIs5Cclqa5HLc+J2bPHlP1jesGeDGc6UOnssvn/kQ3hBsM5K+6L3gmJ5uqq7gmkK6hGlZu3crAPaDssIPnIwBH/fwKnGxq3mno7a0/HJypjT93zuQ7N5e60pL8fHwlOXJuaqp9vfjrOQWrV1etO54e4qSgINdvmjXjOxjIk+PiALRFOeunaDQGcVZenuETwxRbVUiIqfrGX35BQ3JHy3/+E0MRhBrl6KexwG6bNpn66DeiGADFg22PSVdjYlRRRbtVPQMDMQ/Dy5tk4Gu4gz+cnQEk00JnZ5Pv4DoeWdIEkHO/fvozQTrtzi5dNM3zBquPBQWRsGHjab/Cwqp0kjlhLyrkW5Mn4x9oC3WNGnJ2kprPovuoUdW6JiSc/enPP03VF6Fa7hAYFYUc2GC+fNLHq9Ad8ZXfRaz4CnhJu2RrbuL16+RGCynNzw8b4Y5w5eHKY/MqhVOPgACR6vgV+KanGwspZrteFaEgnopDFXx8KhGbuMPy5ZX96ljBV6HH3QJbtMBGcqOwCrZ+9cUBeG3e/HAHk3LW/ygmjwI0YbFBF/7cuVPajHq0v2NH6gQXdKn8BU2mZH+8rY/UoDjlyJHSG/KMQVnSHnSIjqbX0I2P/PFH6YHP0Y2Dt2/XhKo3FjhFRJiqx9Ln3JVtbPjfUoRhXFIS+qAH/l3OJtAszOQzhYXCz4YEqZMJ2+fl/K/qDSgID7JrHtC8ueSJHYaj7dsjkpw5ol499OXF9MBG9hVD+aRDes2aPAQHURgRofgZt5IVNdQdNmgxaNDDXcHp6ZX190nvDSzVLUmC759Qv39neK1a1dsu7ZUdfvNmZf0TvwieqZ0+dy5H4j+0Vv6XTz3RDdu/+EKzP84vu/nUqZW9TqnO4574pCjdbPoJdQXS0sp8MuVRSrJdwZU+ofWRkWpD7L0LB+TX3D2KuQKgyvfhxzE5rsIHH1BrQeSeGzaU2VhiZCLckHDypEZ384BdXvv2Vc2RLF4IcnCLz84OP3yYb/M83v3WW8ZChuwJ9ZEBnUol3edh/J8lS/SDQzq7DFy2zPjotHR7Kotxez39IezgxWvWyHZ8yZyB6lXBXwj4+OMnlRxbPACMGH9p6lAHqpbaqROtxqvsn5qqeOLX3AonQ0LErTcXXi3avt1YibN0e5QwrgIWxgvHgbQ0+OAMdBVsEDnG9REzcqTdhGWO539XrvGbyjMTAEaM++jVo+Oicqb5+BjfdbJfzjDSExepZc+e4mqbl2lfZqapGyMshW0P2z8MwyZMgIhm0DVpIns/Sj6BYz8vfl+23bp1T9qPZy4AShtesv69NMkZi3hqNHSoUmkag3GPuru74wdDPHsfOaLfFTLE1b1LF0u351G4Os/GmQqeVL9gGI/ftUv9/s33ssMnTTKXH89sADyKfXLcsguJKSn8szSf1nXtSp0xlqfIF1RKS6b2rJNO7twptgip76KrYFr2KSP8SEVSnUWLHh0+UhgckHjsWNFuEmx/GzzY3JtuLT4KeFzyZ43p7ZrXsKFwX/DnyZs383RkIEP5e/90kd/k7xYv5mZ0nAaNGydr+JRGASyF7XDRqdUFXfmq4NmggXqf06jznpcumTpJVFWe2wAwUlorn2wzu9q8pCSejukgX98q615R9UG4s7OD29Je2eFXr1q6nebiuRs2PYpxJQ0zEoBBg0QEsZZPn8ZfdJr+57PPZIdVCti7AIDpq3SfV56bHEAJY9JoT/GUQ9On81YMIA8fH9k9eXKU7OsnYWmv7HBrADy3OPjHXbgwLzWVTgiLBf+2bekTLOEvKlh0afzs2hXej0uffmpp/58Wz30OYCrGSqHofzPs2ihfX0RjltS9Rw/MRByN1eulIcS8b+XKal1jp+a0lN91a8WKFStWrFixYsXKc8//AmJlDtDgZF3MAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTI4VDIyOjUyOjIyKzA4OjAwyrXOLgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0yOFQyMjo1MjoyMiswODowMLvodpIAAABJdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uXzc1bWxoenVsbHc1L25vdGljZS5zdmfv4+4CAAAAAElFTkSuQmCC';
var close = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAyFJREFUeNrt3D9oE1EcB/D3ri2JdSp1kEKlhHTRyVGkuHSQRIQsLaXo0KHkD3RSRMWpk+iikKR06KBIbaEExASHbkV0c1GXSmgKFoeWIkJtUrnn0t8NKeHSNO/u/fl+tpKD/N7v9+1dyLscYwAAAAAAAAAAAAAAYDIu+w0OH2TSo2/Gx9kiHxCLS0veGw+JCX4rk4l8K17dvF8uh92IsNSvZL6MPksmxQ5fFe+LRe+FWbHPZ2dmok+LC5vT6+uy3l9+AAayD+M3trfFDvvNfg4Pey98ZxfEu6MjUeEHYm9ysv9J/nl1rFSSXY8qDuZz92IbqRRPiH4+uLLCLrNdfruvzzsgyqpsrlY7xwsffsyNjMiqwwmtA8cLpgZQQ0KrJyC+g/cOZI9ErxCy65EeADrV03/8iQMsCULbgz/uk3OJPxZOLie7LukBoGu8c1eknHIqxT6yX+xfvX7iQEODQNd4fk1UnTvLy36Dp0tiZC+/UU1XKrLrk/4ZoFVD3Bd8XuTX1th1dpH1RiJ+DdHtM4Iu6ww8ALo1yPR1hRYAXRtm2jpCDwDRtYG61k2UCQDRpaG61OlHuQAQVRusal2dUjYARJWGq1JHtykfABLWAEwdPNEmACSogZg+eKJdAIisAdkyeKJtAEi3Bmbb4In2ASCdDrDnrTvd87nRsG3wxJgAkNPuunl/t7lJY8rgiXEBIG2fEVoxfPAkvBtCJKNtaPGJx9zXU1Mt70doZsngibEBIHSNZ/vsK0+4btj1qAaXgFYsORMYFwB8CDwdYy4Bnd56ZeutakT7MwC+CDobbQOAr4K7Q7sAYDOou7QJALaD5VA+AKoMQJU6uk3ZAKjacFXr6pRyAdClwbrU6UeZAOjaUF3rJqEHQPcG6r4O/DTM8nXhx6GWrzOwAOjSENvWLX0zyGvAK15yk6WSag2Qre0bU5o2neqDubHYQiIhuz7pAfAefmTpdiuhddE6/YLg7orzTqNQkF1XeNvBlgy+WdtBCOgZQdLRY+IOo9k/8XSt9ldkb8Zfbm0FdYpTHfWhuT/e4/UAAAAAAAAAAAAAAADO4D9cvzD+Ik3LBAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNy0yOFQyMjo1MjoyMiswODowMMq1zi4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDctMjhUMjI6NTI6MjIrMDg6MDC76HaSAAAASHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl83NW1saHp1bGx3NS9jbG9zZS5zdmcxNhK3AAAAAElFTkSuQmCC';

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-notice-bar' },

    icon: {
      type: String,
      value: notice },

    content: {
      type: String,
      value: '' },

    mode: {
      type: String,
      value: '' },

    action: {
      type: String,
      value: close },

    loop: {
      type: Boolean,
      value: false },

    leading: {
      type: Number,
      value: 500 },

    trailing: {
      type: Number,
      value: 800 },

    speed: {
      type: Number,
      value: 25 } },


  data: {
    animatedWidth: 0,
    overflowWidth: 0,
    visible: true },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var hd = "".concat(prefixCls, "__hd");
      var icon = "".concat(prefixCls, "__icon");
      var bd = "".concat(prefixCls, "__bd");
      var container = "".concat(prefixCls, "__marquee-container");
      var marquee = "".concat(prefixCls, "__marquee");
      var ft = "".concat(prefixCls, "__ft");
      var action = "".concat(prefixCls, "__action");

      return {
        wrap: wrap,
        hd: hd,
        icon: icon,
        bd: bd,
        container: container,
        marquee: marquee,
        ft: ft,
        action: action };

    } },

  methods: {
    clearMarqueeTimer: function clearMarqueeTimer() {
      if (this.marqueeTimer) {
        clearTimeout(this.marqueeTimer);
        this.marqueeTimer = null;
      }
    },
    startAnimation: function startAnimation() {var _this = this;
      this.clearMarqueeTimer();var _this$data =
      this.data,overflowWidth = _this$data.overflowWidth,loop = _this$data.loop,leading = _this$data.leading,trailing = _this$data.trailing,speed = _this$data.speed;
      var isLeading = this.data.animatedWidth === 0;
      var timeout = isLeading ? leading : speed;
      var animate = function animate() {
        var animatedWidth = _this.data.animatedWidth + 1;
        var isRoundOver = animatedWidth > overflowWidth;

        // 判断是否完成一次滚动
        if (isRoundOver) {
          if (!loop) {
            return false;
          }
          // 重置初始位置
          animatedWidth = 0;
        }

        // 判断是否等待一段时间后进行下一次滚动
        if (isRoundOver && trailing) {
          setTimeout(function () {
            _this.setData({
              animatedWidth: animatedWidth });


            _this.marqueeTimer = setTimeout(animate, speed);
          }, trailing);
        } else {
          _this.setData({
            animatedWidth: animatedWidth });

          _this.marqueeTimer = setTimeout(animate, speed);
        }
      };

      if (this.data.overflowWidth !== 0) {
        this.marqueeTimer = setTimeout(animate, timeout);
      }
    },
    initAnimation: function initAnimation() {var _this2 = this;var
      prefixCls = this.data.prefixCls;
      var query = wx.createSelectorQuery().in(this);
      query.select(".".concat(prefixCls, "__marquee-container")).boundingClientRect();
      query.select(".".concat(prefixCls, "__marquee")).boundingClientRect();
      query.exec(function (rects) {
        if (rects.filter(function (n) {return !n;}).length) return;var _rects = _slicedToArray(

        rects, 2),container = _rects[0],text = _rects[1];
        var overflowWidth = text.width - container.width;

        if (overflowWidth !== _this2.data.overflowWidth) {
          _this2.setData({ overflowWidth: overflowWidth }, _this2.startAnimation);
        }
      });
    },
    onAction: function onAction() {
      if (this.data.mode === 'closable') {
        this.clearMarqueeTimer();
        this.setData({
          visible: false });

      }
      this.triggerEvent('click');
    },
    onClick: function onClick() {
      this.triggerEvent('click');
    } },

  ready: function ready() {
    this.initAnimation();
  },
  detached: function detached() {
    this.clearMarqueeTimer();
  } });
});
require('wxcomponents/wux-weapp/notice-bar/index.js');
__wxRoute = 'wxcomponents/wux-weapp/notification/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/notification/index.js';

define('wxcomponents/wux-weapp/notification/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = {
  prefixCls: 'wux-notification',
  classNames: 'wux-animate--slideInDown',
  image: '',
  title: '',
  text: '',
  duration: 3000,
  data: '',
  onClick: function onClick() {},
  onClose: function onClose() {} };


var _notification = null;

(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var content = "".concat(prefixCls, "__content");
      var hd = "".concat(prefixCls, "__hd");
      var image = "".concat(prefixCls, "__image");
      var bd = "".concat(prefixCls, "__bd");
      var title = "".concat(prefixCls, "__title");
      var text = "".concat(prefixCls, "__text");
      var ft = "".concat(prefixCls, "__ft");

      return {
        wrap: wrap,
        content: content,
        hd: hd,
        image: image,
        bd: bd,
        title: title,
        text: text,
        ft: ft };

    } },

  methods: {
    /**
              * 隐藏
              */
    hide: function hide() {
      this.$$setData({ in: false });
      if (typeof this.fns.onClose === 'function') {
        this.fns.onClose(this.data.data);
      }
    },
    /**
        * 显示
        */
    show: function show() {var _this = this;var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var closePromise = new Promise(function (resolve) {
        var options = _this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts));
        var callback = function callback() {
          _this.hide();
          return resolve(true);
        };
        _this.$$setData(_objectSpread({ in: true }, options));

        if (_notification) {
          clearTimeout(_notification.timeout);
          _notification = null;
        }

        _notification = {
          hide: _this.hide };


        _notification.timeout = setTimeout(callback, options.duration);
      });

      var result = function result() {
        if (_notification) {
          _notification.hide.call(_this);
        }
      };

      result.then = function (resolve, reject) {return closePromise.then(resolve, reject);};
      result.promise = closePromise;

      return result;
    },
    /**
        * 点击事件
        */
    onClick: function onClick() {
      if (typeof this.fns.onClick === 'function') {
        this.fns.onClick(this.data.data);
      }
    } } });
});
require('wxcomponents/wux-weapp/notification/index.js');
__wxRoute = 'wxcomponents/wux-weapp/pagination/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/pagination/index.js';

define('wxcomponents/wux-weapp/pagination/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-pagination' },

    mode: {
      type: String,
      value: 'button' },

    defaultCurrent: {
      type: Number,
      value: 1 },

    current: {
      type: Number,
      value: 1,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    controlled: {
      type: Boolean,
      value: false },

    total: {
      type: Number,
      value: 0 },

    simple: {
      type: Boolean,
      value: false } },


  data: {
    activeIndex: 1 },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);
      var prev = "".concat(prefixCls, "__prev");
      var button = "".concat(prefixCls, "__button");
      var number = "".concat(prefixCls, "__number");
      var active = "".concat(prefixCls, "__active");
      var pointer = "".concat(prefixCls, "__pointer");
      var dot = "".concat(prefixCls, "__dot");
      var next = "".concat(prefixCls, "__next");

      return {
        wrap: wrap,
        prev: prev,
        button: button,
        number: number,
        active: active,
        pointer: pointer,
        dot: dot,
        next: next };

    } },

  methods: {
    updated: function updated(activeIndex) {
      if (this.data.activeIndex !== activeIndex) {
        this.setData({
          activeIndex: activeIndex });

      }
    },
    onChange: function onChange(current, type) {
      if (!this.data.controlled) {
        this.updated(current);
      }

      this.triggerEvent('change', {
        current: current,
        type: type });

    },
    onPrev: function onPrev() {
      this.onChange(this.data.activeIndex - 1, 'prev');
    },
    onNext: function onNext() {
      this.onChange(this.data.activeIndex + 1, 'next');
    } },

  attached: function attached() {var _this$data =
    this.data,defaultCurrent = _this$data.defaultCurrent,current = _this$data.current,controlled = _this$data.controlled;
    var activeIndex = controlled ? current : defaultCurrent;

    this.updated(activeIndex);
  } });
});
require('wxcomponents/wux-weapp/pagination/index.js');
__wxRoute = 'wxcomponents/wux-weapp/popover/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/popover/index.js';

define('wxcomponents/wux-weapp/popover/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

var getPlacements = function getPlacements() {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : rects,_ref2 = _slicedToArray(_ref, 3),a = _ref2[0],s = _ref2[1],b = _ref2[2];var placement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  switch (placement) {
    case 'topLeft':
      return {
        top: s.scrollTop + a.top - b.height - 4,
        left: s.scrollLeft + a.left };

    case 'top':
      return {
        top: s.scrollTop + a.top - b.height - 4,
        left: s.scrollLeft + a.left + (a.width - b.width) / 2 };

    case 'topRight':
      return {
        top: s.scrollTop + a.top - b.height - 4,
        left: s.scrollLeft + a.left + a.width - b.width };

    case 'rightTop':
      return {
        top: s.scrollTop + a.top,
        left: s.scrollLeft + a.left + a.width + 4 };

    case 'right':
      return {
        top: s.scrollTop + a.top + (a.height - b.height) / 2,
        left: s.scrollLeft + a.left + a.width + 4 };

    case 'rightBottom':
      return {
        top: s.scrollTop + a.top + a.height - b.height,
        left: s.scrollLeft + a.left + a.width + 4 };

    case 'bottomRight':
      return {
        top: s.scrollTop + a.top + a.height + 4,
        left: s.scrollLeft + a.left + a.width - b.width };

    case 'bottom':
      return {
        top: s.scrollTop + a.top + a.height + 4,
        left: s.scrollLeft + a.left + (a.width - b.width) / 2 };

    case 'bottomLeft':
      return {
        top: s.scrollTop + a.top + a.height + 4,
        left: s.scrollLeft + a.left };

    case 'leftBottom':
      return {
        top: s.scrollTop + a.top + a.height - b.height,
        left: s.scrollLeft + a.left - b.width - 4 };

    case 'left':
      return {
        top: s.scrollTop + a.top + (a.height - b.height) / 2,
        left: s.scrollLeft + a.left - b.width - 4 };

    case 'leftTop':
      return {
        top: s.scrollTop + a.top,
        left: s.scrollLeft + a.left - b.width - 4 };

    default:
      return {
        left: 0,
        top: 0 };}


};

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-popover' },

    classNames: {
      type: null,
      value: 'wux-animate--fadeIn' },

    theme: {
      type: String,
      value: 'light' },

    title: {
      type: String,
      value: '' },

    content: {
      type: String,
      value: '' },

    placement: {
      type: String,
      value: 'top' },

    trigger: {
      type: String,
      value: 'click' },

    bodyStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    defaultVisible: {
      type: Boolean,
      value: false },

    visible: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.setData({
            popoverVisible: newVal });

        }
      } },

    controlled: {
      type: Boolean,
      value: false } },


  data: {
    extStyle: '',
    popoverStyle: '',
    popoverVisible: false },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,theme = _this$data.theme,placement = _this$data.placement;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--theme-").concat(theme), theme), _defineProperty(_classNames, "".concat(
      prefixCls, "--placement-").concat(placement), placement), _classNames));

      var content = "".concat(prefixCls, "__content");
      var arrow = "".concat(prefixCls, "__arrow");
      var inner = "".concat(prefixCls, "__inner");
      var title = "".concat(prefixCls, "__title");
      var innerContent = "".concat(prefixCls, "__inner-content");
      var element = "".concat(prefixCls, "__element");

      return {
        wrap: wrap,
        content: content,
        arrow: arrow,
        inner: inner,
        title: title,
        innerContent: innerContent,
        element: element };

    } },

  methods: {
    getPopoverStyle: function getPopoverStyle() {var _this = this;var
      prefixCls = this.data.prefixCls;
      var query = wx.createSelectorQuery().in(this);
      query.select(".".concat(prefixCls, "__element")).boundingClientRect();
      query.selectViewport().scrollOffset();
      query.select(".".concat(prefixCls)).boundingClientRect();
      query.exec(function (rects) {
        if (rects.filter(function (n) {return !n;}).length) return;

        var placements = getPlacements(rects, _this.data.placement);

        _this.setData({
          popoverStyle: (0, _styleToCssString.default)(placements) });

      });
    },
    /**
        * 当组件进入过渡的开始状态时，设置气泡框位置信息
        */
    onEnter: function onEnter() {
      this.getPopoverStyle();
    },
    fireEvents: function fireEvents() {var _this$data2 =
      this.data,popoverVisible = _this$data2.popoverVisible,controlled = _this$data2.controlled;
      var nextVisible = !popoverVisible;

      if (!controlled) {
        this.setData({
          popoverVisible: nextVisible });

      }

      this.triggerEvent('change', { visible: nextVisible });
    },
    onClick: function onClick() {
      if (this.data.trigger === 'click') {
        this.fireEvents();
      }
    } },

  attached: function attached() {var _this$data3 =
    this.data,defaultVisible = _this$data3.defaultVisible,visible = _this$data3.visible,controlled = _this$data3.controlled;
    var popoverVisible = controlled ? visible : defaultVisible;

    this.setData({
      popoverVisible: popoverVisible });

  } });
});
require('wxcomponents/wux-weapp/popover/index.js');
__wxRoute = 'wxcomponents/wux-weapp/popup/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/popup/index.js';

define('wxcomponents/wux-weapp/popup/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));
var _index = require("../index");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  externalClasses: ['wux-content-class', 'wux-header-class', 'wux-body-class', 'wux-footer-class', 'wux-close-class'],
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-popup' },

    animationPrefixCls: {
      type: String,
      value: 'wux-animate' },

    title: {
      type: String,
      value: '' },

    content: {
      type: String,
      value: '' },

    extra: {
      type: String,
      value: '' },

    position: {
      type: String,
      value: 'center',
      observer: 'getTransitionName' },

    wrapStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    closable: {
      type: Boolean,
      value: false },

    mask: {
      type: Boolean,
      value: true },

    maskClosable: {
      type: Boolean,
      value: true },

    visible: {
      type: Boolean,
      value: false,
      observer: 'setPopupVisible' },

    zIndex: {
      type: Number,
      value: 1000 } },


  data: {
    transitionName: '',
    popupVisible: false,
    extStyle: '' },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,position = _this$data.position;
      var wrap = (0, _classNames2.default)("".concat(prefixCls, "-position"), _defineProperty({}, "".concat(
      prefixCls, "-position--").concat(position), position));

      var content = "".concat(prefixCls, "__content");
      var hd = "".concat(prefixCls, "__hd");
      var title = "".concat(prefixCls, "__title");
      var bd = "".concat(prefixCls, "__bd");
      var ft = "".concat(prefixCls, "__ft");
      var extra = "".concat(prefixCls, "__extra");
      var close = "".concat(prefixCls, "__close");
      var x = "".concat(prefixCls, "__close-x");

      return {
        wrap: wrap,
        content: content,
        hd: hd,
        title: title,
        bd: bd,
        ft: ft,
        extra: extra,
        close: close,
        x: x };

    } },

  methods: {
    /**
              * 点击关闭按钮事件
              */
    close: function close() {
      this.triggerEvent('close');
    },
    /**
        * 点击蒙层事件
        */
    onMaskClick: function onMaskClick() {
      if (this.data.maskClosable) {
        this.close();
      }
    },
    /**
        * 组件关闭后的回调函数
        */
    onExited: function onExited() {
      this.triggerEvent('closed');
    },
    /**
        * 获取过渡的类名
        */
    getTransitionName: function getTransitionName() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.position;var
      animationPrefixCls = this.data.animationPrefixCls;
      var transitionName = '';

      switch (value) {
        case 'top':
          transitionName = "".concat(animationPrefixCls, "--slideInDown");
          break;
        case 'right':
          transitionName = "".concat(animationPrefixCls, "--slideInRight");
          break;
        case 'bottom':
          transitionName = "".concat(animationPrefixCls, "--slideInUp");
          break;
        case 'left':
          transitionName = "".concat(animationPrefixCls, "--slideInLeft");
          break;
        default:
          transitionName = "".concat(animationPrefixCls, "--fadeIn");
          break;}


      this.setData({ transitionName: transitionName });
    },
    /**
        * 设置 popup 组件的显示隐藏
        */
    setPopupVisible: function setPopupVisible(popupVisible) {
      if (this.data.popupVisible !== popupVisible) {
        this.setData({ popupVisible: popupVisible });
        this.setBackdropVisible(popupVisible);
      }
    },
    /**
        * 设置 backdrop 组件的显示隐藏
        */
    setBackdropVisible: function setBackdropVisible(visible) {
      if (this.data.mask && this.$wuxBackdrop) {
        this.$wuxBackdrop[visible ? 'retain' : 'release']();
      }
    } },

  created: function created() {
    if (this.data.mask) {
      this.$wuxBackdrop = (0, _index.$wuxBackdrop)('#wux-backdrop', this);
    }
  },
  attached: function attached() {
    this.setPopupVisible(this.data.visible);
    this.getTransitionName();
  } });
});
require('wxcomponents/wux-weapp/popup/index.js');
__wxRoute = 'wxcomponents/wux-weapp/progress/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/progress/index.js';

define('wxcomponents/wux-weapp/progress/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));
var _colors = require("../helpers/colors");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaultColors = {
  normal: _colors.colors.positive,
  progress: _colors.colors.positive,
  error: _colors.colors.assertive,
  success: _colors.colors.balanced };


(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-progress' },

    percent: {
      type: Number,
      value: 0,
      observer: 'updateStyle' },

    strokeWidth: {
      type: Number,
      value: 10,
      observer: 'updateStyle' },

    activeColor: {
      type: String,
      value: '',
      observer: 'updateStyle' },

    backgroundColor: {
      type: String,
      value: '#f3f3f3' },

    status: {
      type: String,
      value: 'normal',
      observer: 'updateStyle' },

    shape: {
      type: String,
      value: 'round' },

    barStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    showInfo: {
      type: Boolean,
      value: false } },


  data: {
    width: 0,
    style: '',
    extStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,shape = _this$data.shape,status = _this$data.status;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(shape), shape), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(status), status), _classNames));

      var outer = "".concat(prefixCls, "__outer");
      var inner = "".concat(prefixCls, "__inner");
      var bar = "".concat(prefixCls, "__bar");
      var text = "".concat(prefixCls, "__text");

      return {
        wrap: wrap,
        outer: outer,
        inner: inner,
        bar: bar,
        text: text };

    } },

  methods: {
    updateStyle: function updateStyle() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var _Object$assign =
      Object.assign({}, this.data, opts),percent = _Object$assign.percent,strokeWidth = _Object$assign.strokeWidth,activeColor = _Object$assign.activeColor,status = _Object$assign.status;
      var width = percent < 0 ? 0 : percent > 100 ? 100 : percent;
      var height = strokeWidth > 0 ? strokeWidth : 10;
      var backgroundColor = activeColor ? activeColor : defaultColors[status] || defaultColors['normal'];
      var style = "background-color: ".concat(backgroundColor, "; width: ").concat(width, "%; height: ").concat(height, "px;");

      this.setData({
        width: width,
        style: style });

    } },

  attached: function attached() {
    this.updateStyle();
  } });
});
require('wxcomponents/wux-weapp/progress/index.js');
__wxRoute = 'wxcomponents/wux-weapp/prompt/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/prompt/index.js';

define('wxcomponents/wux-weapp/prompt/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-prompt' },

    classNames: {
      type: null,
      value: 'wux-animate--fadeIn' },

    icon: {
      type: String,
      value: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfgCxwAHyE2vHbUAAACWUlEQVRo3u2ZP2gTcRTHP7EpBTOJWrDSxdZBxE0yCC3UdilqUBCs4B8ogVfr0EnQ6lAEsylIXR6moFA1g6IoSAct7WhxUBQFsS5aLDgWcWitLjG5y11zufxyl8Hfd8n7vd+79z738svvfkfAysrqf1fC3609jHGYtnDJJBEuHiDpU7yNAkfj6sAmH990fOV9ADTN8fjK+3VA4izvB9AfL4B3EbY67E75Vn9qHeSCHAzfgQZJIU+f7moaAPvpAC7FAKAnPJ6EprkOQFbP6OZIAbSdgna5PEf4wSt6i8O7/NRx3RZdB84B4y7PGFsrYq7RExGAppgAhnV72ScDdDFVGi7ST4s8jqoD/77/UadTvkiW0wB8pltmZX3jBEYAmizd6YSmKiYfATAStLGadWDAYQ+5p+QXF4G5oBQGANrObccwr50VAXmG5HdQFs8RQpfoKA023Ip1N5c563E/5Qrvwj3NkqGiAU2Q5gYHfCczZPio55mvtuyMADTDHbZUDdnDLOhJKbiu+1O23Qe3sGsgFVC+HFejQgLIA1ro40OVkGUO0SpTtWYM/SuQdZljL/t44jM5T5od8lzWas8XehECCLznmO7kDc6HTLcshs9lsA/IEsOO4Wg95U13whmHPV1fCiMAWWWkaOZkpQkAwP3i52S9CQwBZIUccE+WmwQA3AKu1n+5MYB8JyufmggAte96EQGYyQJYAAtgASyA90y46rC/ahM68DLiigtBAFHfdC4AQBZ4GGH5tzwL6gCc8n3paIRe01v52trQ/wuqaI0X3JQZ80RWVlYN11+uNXxr6IunHwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0xMS0yOFQwMDozMTozMyswODowMBHRiXcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMTEtMjhUMDA6MzE6MzMrMDg6MDBgjDHLAAAAAElFTkSuQmCC' },

    title: {
      type: String,
      value: '' },

    text: {
      type: String,
      value: '' },

    buttons: {
      type: Array,
      value: [] },

    visible: {
      type: Boolean,
      value: false } },


  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,btns = _this$data.buttons;
      var wrap = (0, _classNames2.default)(prefixCls);
      var button = btns.map(function (button) {var _classNames;
        var wrap = (0, _classNames2.default)("".concat(prefixCls, "__button"), (_classNames = {}, _defineProperty(_classNames, "".concat(
        prefixCls, "__button--disabled"), button.disabled), _defineProperty(_classNames, "".concat(
        button.className), button.className), _classNames));

        var hover = button.hoverClass && button.hoverClass !== 'default' ? button.hoverClass : "".concat(prefixCls, "__button--hover");

        return {
          wrap: wrap,
          hover: hover };

      });
      var bd = "".concat(prefixCls, "__bd");
      var icon = "".concat(prefixCls, "__icon");
      var title = "".concat(prefixCls, "__title");
      var buttons = "".concat(prefixCls, "__buttons");

      return {
        wrap: wrap,
        button: button,
        bd: bd,
        icon: icon,
        title: title,
        buttons: buttons };

    } },

  methods: {
    /**
              * 点击按钮触发事件
              */
    onTap: function onTap(e) {var
      buttons = this.data.buttons;var
      index = e.currentTarget.dataset.index;
      var value = this.data.buttons[index];

      if (value.disabled) return;

      this.triggerEvent('click', { index: index, value: value, buttons: buttons });
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      this.triggerEvent('getuserinfo', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindcontact: function bindcontact(e) {
      this.triggerEvent('contact', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindopensetting: function bindopensetting(e) {
      this.triggerEvent('opensetting', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    onError: function onError(e) {
      this.triggerEvent('error', _objectSpread({}, e.detail, e.currentTarget.dataset));
    } } });
});
require('wxcomponents/wux-weapp/prompt/index.js');
__wxRoute = 'wxcomponents/wux-weapp/qrcode/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/qrcode/index.js';

define('wxcomponents/wux-weapp/qrcode/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _index = _interopRequireDefault(require("./qr.js/index"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                          * 字符串转换成 UTF-8
                                                                                                                                                                          * @param {String} str 文本内容
                                                                                                                                                                          */
var utf16to8 = function utf16to8(str) {
  var len = str.length;
  var out = '';

  for (var i = 0; i < len; i++) {
    var c = str.charCodeAt(i);

    if (c >= 0x0001 && c <= 0x007F) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
      out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
      out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
    } else {
      out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
      out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
    }
  }

  return out;
};

Component({
  properties: {
    typeNumber: {
      type: Number,
      value: -1,
      observer: function observer(newVal) {
        this.draw({
          typeNumber: newVal });

      } },

    errorCorrectLevel: {
      type: Number,
      value: 2,
      observer: function observer(newVal) {
        this.draw({
          errorCorrectLevel: newVal });

      } },

    width: {
      type: Number,
      value: 200,
      observer: function observer(newVal) {
        this.draw({
          width: newVal });

      } },

    height: {
      type: Number,
      value: 200,
      observer: function observer(newVal) {
        this.draw({
          height: newVal });

      } },

    fgColor: {
      type: String,
      value: 'black',
      observer: function observer(newVal) {
        this.draw({
          fgColor: newVal });

      } },

    bgColor: {
      type: String,
      value: 'white',
      observer: function observer(newVal) {
        this.draw({
          bgColor: newVal });

      } },

    canvasId: {
      type: String,
      value: 'wux-qrcode' },

    data: {
      type: String,
      value: '',
      observer: function observer(newVal) {
        this.draw({
          data: newVal });

      } } },


  methods: {
    /**
              * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
              */
    draw: function draw() {var _this = this;var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var _Object$assign =
      Object.assign({}, this.data, opts),typeNumber = _Object$assign.typeNumber,errorCorrectLevel = _Object$assign.errorCorrectLevel,width = _Object$assign.width,height = _Object$assign.height,fgColor = _Object$assign.fgColor,bgColor = _Object$assign.bgColor,canvasId = _Object$assign.canvasId,data = _Object$assign.data;
      var qrcode = (0, _index.default)(utf16to8(data), {
        typeNumber: typeNumber,
        errorCorrectLevel: errorCorrectLevel });

      var cells = qrcode.modules;
      var tileW = width / cells.length;
      var tileH = height / cells.length;

      this.ctx = this.ctx || wx.createCanvasContext(canvasId, this);
      this.ctx.scale(1, 1);

      cells.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
          _this.ctx.setFillStyle(cell ? fgColor : bgColor);
          var w = Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW);
          var h = Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH);
          _this.ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h);
        });
      });

      this.ctx.draw();
    },
    /**
        * 手指触摸后马上离开
        */
    onTap: function onTap() {
      this.triggerEvent('click');
    } },

  attached: function attached() {
    this.draw();
  },
  detached: function detached() {
    this.ctx = null;
  } });
});
require('wxcomponents/wux-weapp/qrcode/index.js');
__wxRoute = 'wxcomponents/wux-weapp/radio-group/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/radio-group/index.js';

define('wxcomponents/wux-weapp/radio-group/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  useField: true,
  relations: {
    '../radio/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.changeValue);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-radio-group' },

    cellGroupPrefixCls: {
      type: String,
      value: 'wux-cell-group' },

    value: {
      type: String,
      value: '',
      observer: 'changeValue' },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' } },


  methods: {
    changeValue: function changeValue() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.value;
      var elements = this.getRelationNodes('../radio/index');
      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          element.changeValue(value === element.data.value, index);
        });
      }
    },
    emitEvent: function emitEvent(item) {
      this.triggerEvent('change', _objectSpread({}, item, { name: this.data.name }));
    } } });
});
require('wxcomponents/wux-weapp/radio-group/index.js');
__wxRoute = 'wxcomponents/wux-weapp/radio/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/radio/index.js';

define('wxcomponents/wux-weapp/radio/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../radio-group/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-radio' },

    cellPrefixCls: {
      type: String,
      value: 'wux-cell' },

    selectablePrefixCls: {
      type: String,
      value: 'wux-selectable' },

    thumb: {
      type: String,
      value: '' },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' },

    value: {
      type: String,
      value: '' },

    checked: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        this.setData({
          inputChecked: newVal });

      } },

    disabled: {
      type: Boolean,
      value: false },

    color: {
      type: String,
      value: 'balanced' } },


  data: {
    index: 0,
    inputChecked: false },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var cell = (0, _classNames.default)(prefixCls);
      var selectable = "".concat(prefixCls, "__selectable");

      return {
        cell: cell,
        selectable: selectable };

    } },

  methods: {
    radioChange: function radioChange(e) {var _this$data =
      this.data,value = _this$data.value,index = _this$data.index,disabled = _this$data.disabled;
      var parent = this.getRelationNodes('../radio-group/index')[0];
      var item = {
        checked: e.detail.checked,
        value: value,
        index: index };


      if (disabled) return;

      parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
    },
    changeValue: function changeValue() {var inputChecked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.setData({
        inputChecked: inputChecked,
        index: index });

    } } });
});
require('wxcomponents/wux-weapp/radio/index.js');
__wxRoute = 'wxcomponents/wux-weapp/rater/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/rater/index.js';

define('wxcomponents/wux-weapp/rater/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-rater' },

    max: {
      type: Number,
      value: 5,
      observer: function observer() {
        this.updateValue();
      } },

    icon: {
      type: String,
      value: '' },

    star: {
      type: String,
      value: '★' },

    defaultValue: {
      type: Number,
      value: 0 },

    value: {
      type: Number,
      value: 0,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updateValue(newVal);
        }
      } },

    activeColor: {
      type: String,
      value: '#ffc900' },

    margin: {
      type: Number,
      value: 2 },

    fontSize: {
      type: Number,
      value: 25 },

    disabled: {
      type: Boolean,
      value: false },

    allowHalf: {
      type: Boolean,
      value: false },

    allowClear: {
      type: Boolean,
      value: false },

    allowTouchMove: {
      type: Boolean,
      value: false },

    controlled: {
      type: Boolean,
      value: false } },


  data: {
    raterValue: 0 },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--disabled"), disabled));

      var star = "".concat(prefixCls, "__star");
      var box = "".concat(prefixCls, "__box");
      var inner = "".concat(prefixCls, "__inner");
      var outer = "".concat(prefixCls, "__outer");
      var icon = "".concat(prefixCls, "__icon");

      return {
        wrap: wrap,
        star: star,
        box: box,
        inner: inner,
        outer: outer,
        icon: icon };

    } },

  methods: {
    updateValue: function updateValue() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.raterValue;var _this$data2 =
      this.data,max = _this$data2.max,activeColor = _this$data2.activeColor;
      var stars = _toConsumableArray(new Array(max)).map(function (_, i) {return i;});
      var raterValue = value <= 0 ? 0 : value > max ? max : value;
      var colors = stars.reduce(function (a, _, i) {return [].concat(_toConsumableArray(a), [i <= value - 1 ? activeColor : '#ccc']);}, []);
      var _val = raterValue.toString().split('.');
      var sliceValue = _val.length === 1 ? [_val[0], 0] : _val;

      this.setData({
        stars: stars,
        colors: colors,
        raterValue: raterValue,
        cutIndex: sliceValue[0] * 1,
        cutPercent: sliceValue[1] * 10 });

    },
    updateHalfStarValue: function updateHalfStarValue(index, x, cb) {var _this = this;var
      prefixCls = this.data.prefixCls;
      var query = wx.createSelectorQuery().in(this);
      query.selectAll(".".concat(prefixCls, "__star")).boundingClientRect(function (rects) {
        if (rects.filter(function (n) {return !n;}).length) return;var _rects$index =
        rects[index],left = _rects$index.left,width = _rects$index.width;
        var has = x - left < width / 2;
        var value = has ? index + .5 : index + 1;
        cb.call(_this, value, index);
      }).exec();
    },
    onTap: function onTap(e) {var _this2 = this;var
      index = e.currentTarget.dataset.index;var _this$data3 =
      this.data,raterValue = _this$data3.raterValue,disabled = _this$data3.disabled,allowHalf = _this$data3.allowHalf,allowClear = _this$data3.allowClear;

      // 判断是否禁用
      if (!disabled) {
        // 判断是否支持选中半星
        if (!allowHalf) {
          var value = index + 1;
          var isReset = allowClear && value === raterValue;

          this.fireEvents(isReset ? 0 : value, index);
        } else {
          this.updateHalfStarValue(index, e.detail.x, function (value, index) {
            var isReset = allowClear && value === raterValue;

            _this2.fireEvents(isReset ? 0 : value, index);
          });
        }
      }
    },
    fireEvents: function fireEvents(value, index) {
      if (!this.data.controlled) {
        this.updateValue(value);
      }

      this.triggerEvent('change', { value: value, index: index });
    },
    onTouchMove: function onTouchMove(e) {var _this3 = this;var _this$data4 =
      this.data,disabled = _this$data4.disabled,allowHalf = _this$data4.allowHalf,allowTouchMove = _this$data4.allowTouchMove;
      if (!disabled && allowTouchMove) {
        var x = e.changedTouches[0].pageX;var
        prefixCls = this.data.prefixCls;
        var query = wx.createSelectorQuery().in(this);
        query.selectAll(".".concat(prefixCls, "__star")).boundingClientRect(function (rects) {
          if (rects.filter(function (n) {return !n;}).length) return;var _rects$ =
          rects[0],left = _rects$.left,width = _rects$.width;
          var maxWidth = rects.map(function (n) {return n.width;}).reduce(function (a, b) {return a + b;});
          var diff = x - left;
          var value = Math.ceil(diff / width);

          // 判断是否在组件宽度范围内
          if (diff > 0 && diff < maxWidth) {
            var index = value - 1;
            if (allowHalf) {
              var star = rects[index];
              var has = x - star.left < star.width / 2;
              value = has ? value - .5 : value;
            }
            _this3.fireEvents(value, index);
          }
        }).exec();
      }
    } },

  attached: function attached() {var _this$data5 =
    this.data,defaultValue = _this$data5.defaultValue,value = _this$data5.value,controlled = _this$data5.controlled;
    var raterValue = controlled ? value : defaultValue;

    this.updateValue(raterValue);
  } });
});
require('wxcomponents/wux-weapp/rater/index.js');
__wxRoute = 'wxcomponents/wux-weapp/refresher/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/refresher/index.js';

define('wxcomponents/wux-weapp/refresher/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames5 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaultStyle = 'transition: transform .4s; transform: translate3d(0px, 0px, 0px) scale(1);';

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-refresher' },

    pullingIcon: {
      type: String,
      value: '' },

    pullingText: {
      type: String,
      value: '下拉刷新' },

    refreshingIcon: {
      type: String,
      value: '' },

    refreshingText: {
      type: String,
      value: '正在刷新' },

    disablePullingRotation: {
      type: Boolean,
      value: false },

    distance: {
      type: Number,
      value: 30 },

    prefixLCls: {
      type: String,
      value: 'wux-loader' },

    isShowLoadingText: {
      type: Boolean,
      value: false },

    loadingText: {
      type: String,
      value: '正在加载' },

    loadNoDataText: {
      type: String,
      value: '没有更多数据' },

    scrollTop: {
      type: Number,
      value: 0,
      observer: function observer(n) {
        var that = this;

        // 获取节点高度
        var query = wx.createSelectorQuery();
        query.select("#".concat(this.id)).boundingClientRect(function (res) {
          that.setData({
            newContentHeight: res.height });

        }).exec();var _this$data =








        this.data,newContentHeight = _this$data.newContentHeight,oldContentHeight = _this$data.oldContentHeight,windowHeight = _this$data.windowHeight,distance = _this$data.distance,loading = _this$data.loading,noData = _this$data.noData;

        if (windowHeight && !this.isRefreshing()) {

          // 到临界点时触发上拉加载 
          // 防止节点高度一致时引发重复加载
          if (
          n > newContentHeight - windowHeight - distance * 1.5 &&
          loading === false &&
          noData === false && newContentHeight !== oldContentHeight)
          {

            this.setData({
              loading: true,
              refreshing: false,
              oldContentHeight: newContentHeight });


            this.triggerEvent('loadmore');

          } else if (
          loading === false &&
          noData === false)
          {

            // 隐藏上拉加载动画
            this.hide();

          } else if (loading === true) {

            // 如果在加载中，保持内容的高度一致，以此来防止临界点重复加载
            this.setData({
              oldContentHeight: newContentHeight });


          }

          this.deactivate();
        }
      } } },


  data: {
    style: defaultStyle,
    visible: false,
    active: false,
    refreshing: false,
    tail: false,
    lVisible: false,
    noData: false, // 是否没有更多数据
    windowHeight: 0, // 窗口高度
    newContentHeight: 0, // 新节点内容高度
    oldContentHeight: 0, // 旧节点内容高度
    loading: false // 判断是否正在加载
  },
  computed: {
    classes: function classes() {var _classNames, _classNames4;var _this$data2 =














      this.data,prefixCls = _this$data2.prefixCls,pullingText = _this$data2.pullingText,pullingIcon = _this$data2.pullingIcon,disablePullingRotation = _this$data2.disablePullingRotation,refreshingText = _this$data2.refreshingText,refreshingIcon = _this$data2.refreshingIcon,visible = _this$data2.visible,active = _this$data2.active,refreshing = _this$data2.refreshing,tail = _this$data2.tail,prefixLCls = _this$data2.prefixLCls,loading = _this$data2.loading,noData = _this$data2.noData;
      var wrap = (0, _classNames5.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--hidden"), !visible), _defineProperty(_classNames, "".concat(
      prefixCls, "--visible"), visible), _defineProperty(_classNames, "".concat(
      prefixCls, "--active"), active), _defineProperty(_classNames, "".concat(
      prefixCls, "--refreshing"), refreshing), _defineProperty(_classNames, "".concat(
      prefixCls, "--refreshing-tail"), tail), _classNames));

      var content = (0, _classNames5.default)("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(
      prefixCls, "__content--text"), pullingText || refreshingText));

      var iconPulling = (0, _classNames5.default)("".concat(prefixCls, "__icon-pulling"), _defineProperty({}, "".concat(
      prefixCls, "__icon-pulling--disabled"), disablePullingRotation));

      var textPulling = "".concat(prefixCls, "__text-pulling");
      var iconRefreshing = "".concat(prefixCls, "__icon-refreshing");
      var textRefreshing = "".concat(prefixCls, "__text-refreshing");
      var pIcon = pullingIcon || "".concat(prefixCls, "__icon--arrow-down");
      var rIcon = refreshingIcon || "".concat(prefixCls, "__icon--refresher");

      var lWrap = (0, _classNames5.default)(prefixLCls, (_classNames4 = {}, _defineProperty(_classNames4, "".concat(
      prefixLCls, "--hidden"), !loading), _defineProperty(_classNames4, "".concat(
      prefixLCls, "--visible"), loading), _defineProperty(_classNames4, "".concat(
      prefixLCls, "--end"), noData), _classNames4));

      var lContent = "".concat(prefixLCls, "__content");

      return {
        wrap: wrap,
        content: content,
        iconPulling: iconPulling,
        textPulling: textPulling,
        iconRefreshing: iconRefreshing,
        textRefreshing: textRefreshing,
        pIcon: pIcon,
        rIcon: rIcon,
        lWrap: lWrap,
        lContent: lContent };

    } },

  methods: {
    /**
              * 显示
              */
    activate: function activate() {
      this.setData({
        style: defaultStyle,
        visible: true });

    },
    /**
        * 隐藏
        */
    deactivate: function deactivate() {
      if (this.activated) this.activated = false;

      this.setData({
        style: defaultStyle,
        visible: false,
        active: false,
        refreshing: false,
        tail: false });

    },
    /**
        * 正在刷新
        */
    refreshing: function refreshing() {
      this.setData({
        style: 'transition: transform .4s; transform: translate3d(0, 50px, 0) scale(1);',
        visible: true,
        active: true,
        refreshing: true,

        // 刷新时重新初始化加载状态
        loading: false,
        noData: false,
        newContentHeight: 0,
        oldContentHeight: 0,
        lVisible: false });

    },
    /**
        * 刷新后隐藏动画
        */
    tail: function tail() {
      this.setData({
        visible: true,
        active: true,
        refreshing: true,
        tail: true });

    },
    /**
        * 加载后隐藏动画
        */
    hide: function hide() {
      this.setData({
        lVisible: false });

    },
    /**
        * 正在下拉
        * @param {Number} diffY 距离
        */
    move: function move(diffY) {
      var style = "transition-duration: 0s; transform: translate3d(0, ".concat(diffY, "px, 0) scale(1);");
      var className = diffY < this.data.distance ? 'visible' : 'active';

      this.setData(_defineProperty({
        style: style },
      className, true));

    },
    /**
        * 判断是否正在刷新
        */
    isRefreshing: function isRefreshing() {
      return this.data.refreshing;
    },
    /**
        * 判断是否正在加载
        */
    isLoading: function isLoading() {
      return this.data.loading;
    },
    /**
        * 获取触摸点坐标
        */
    getTouchPosition: function getTouchPosition(e) {
      return {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY };

    },
    /**
        * 创建定时器
        */
    requestAnimationFrame: function requestAnimationFrame(callback) {var _this = this;
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - this.lastTime));
      var timeout = setTimeout(function () {
        callback.bind(_this)(currTime + timeToCall);
      }, timeToCall);
      this.lastTime = currTime + timeToCall;
      return timeout;
    },
    /**
        * 清空定时器
        */
    cancelAnimationFrame: function cancelAnimationFrame(timeout) {
      clearTimeout(timeout);
    },
    /**
        * 下拉刷新完成后的函数
        */
    finishPullToRefresh: function finishPullToRefresh() {var _this2 = this;
      setTimeout(function () {
        _this2.requestAnimationFrame(_this2.tail);
        setTimeout(function () {return _this2.deactivate();}, 200);
      }, 200);
    },
    /**
        * 上拉加载完成后的函数
        */
    finishLoadmore: function finishLoadmore(bool) {var _this3 = this;
      if (bool === true) {
        setTimeout(function () {
          _this3.setData({
            noData: true,
            loading: false });

        }, 200);
      } else {
        setTimeout(function () {
          _this3.setData({
            loading: false });

          _this3.requestAnimationFrame(_this3.hide);
          setTimeout(function () {return _this3.deactivate();}, 200);
        }, 200);
      }
    },
    /**
        * 手指触摸动作开始
        */
    bindtouchstart: function bindtouchstart(e) {
      if (this.isRefreshing() || this.isLoading()) return false;

      var p = this.getTouchPosition(e);

      this.start = p;
      this.diffX = this.diffY = 0;

      this.activate();
    },
    /**
        * 手指触摸后移动
        */
    bindtouchmove: function bindtouchmove(e) {
      if (!this.start || this.isRefreshing() || this.isLoading()) return false;

      var p = this.getTouchPosition(e);

      this.diffX = p.x - this.start.x;
      this.diffY = p.y - this.start.y;

      if (this.diffY < 0) return false;

      this.diffY = Math.pow(this.diffY, 0.8);

      if (!this.activated && this.diffY > this.data.distance) {
        this.activated = true;
        this.triggerEvent('pulling');
      } else if (this.activated && this.diffY < this.data.distance) {
        this.activated = false;
      }

      this.move(this.diffY);
    },
    /**
        * 	手指触摸动作结束
        */
    bindtouchend: function bindtouchend(e) {
      this.start = false;

      if (this.diffY <= 0 || this.isRefreshing() || this.isLoading()) return false;

      this.deactivate();

      if (Math.abs(this.diffY) >= this.data.distance) {
        this.refreshing();
        this.triggerEvent('refresh');
      }
    } },

  created: function created() {
    this.lastTime = 0;
    this.activated = false;
  },
  attached: function attached() {
    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        that.setData({
          windowHeight: res.windowHeight });

      } });

  } });
});
require('wxcomponents/wux-weapp/refresher/index.js');
__wxRoute = 'wxcomponents/wux-weapp/result/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/result/index.js';

define('wxcomponents/wux-weapp/result/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaultIcon = {
  type: 'success',
  size: 93,
  color: '#33cd5f' };


var getIcon = function getIcon(icon) {
  if (icon !== null && typeof icon === 'object') {
    return Object.assign({}, defaultIcon, icon);
  } else if (typeof icon === 'string') {
    return Object.assign({}, defaultIcon, {
      type: icon });

  }
  return defaultIcon;
};

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-result' },

    icon: {
      type: null,
      value: defaultIcon,
      observer: function observer(newVal) {
        this.setData({
          resultIcon: getIcon(newVal) });

      } },

    title: {
      type: String,
      value: '' },

    label: {
      type: String,
      value: '' },

    buttons: {
      type: Array,
      value: [] },

    extra: {
      type: String,
      value: '' },

    fixed: {
      type: Boolean,
      value: false } },


  data: {
    resultIcon: null },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,fixed = _this$data.fixed;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--fixed"), fixed));

      var hd = "".concat(prefixCls, "__hd");
      var icon = "".concat(prefixCls, "__icon");
      var bd = "".concat(prefixCls, "__bd");
      var title = "".concat(prefixCls, "__title");
      var desc = "".concat(prefixCls, "__desc");
      var buttons = "".concat(prefixCls, "__buttons");
      var ft = "".concat(prefixCls, "__ft");

      return {
        wrap: wrap,
        hd: hd,
        icon: icon,
        bd: bd,
        title: title,
        desc: desc,
        buttons: buttons,
        ft: ft };

    } },

  methods: {
    onClick: function onClick(e) {
      this.triggerEvent('click', e.currentTarget.dataset);
    },
    bindgetuserinfo: function bindgetuserinfo(e) {
      this.triggerEvent('getuserinfo', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindcontact: function bindcontact(e) {
      this.triggerEvent('contact', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindgetphonenumber: function bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    bindopensetting: function bindopensetting(e) {
      this.triggerEvent('opensetting', _objectSpread({}, e.detail, e.currentTarget.dataset));
    },
    onError: function onError(e) {
      this.triggerEvent('error', _objectSpread({}, e.detail, e.currentTarget.dataset));
    } },

  attached: function attached() {
    this.setData({
      resultIcon: getIcon(this.data.icon) });

  } });
});
require('wxcomponents/wux-weapp/result/index.js');
__wxRoute = 'wxcomponents/wux-weapp/row/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/row/index.js';

define('wxcomponents/wux-weapp/row/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../col/index': {
      type: 'child',
      observer: function observer() {
        this.updateStyle();
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-row' },

    gutter: {
      value: 0,
      type: Number,
      observer: 'updateStyle' } },


  data: {
    rowStyle: '' },

  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);

      return {
        wrap: wrap };

    } },

  methods: {
    updateStyle: function updateStyle() {var gutter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.gutter;
      var elements = this.getRelationNodes('../col/index');
      var rowStyle = gutter > 0 ? "margin-left: ".concat(gutter / -2, "px; margin-right: ").concat(gutter / -2, "px") : '';
      var colStyle = gutter > 0 ? "padding-left: ".concat(gutter / 2, "px; padding-right: ").concat(gutter / 2, "px") : '';

      if (elements.length > 0) {
        elements.forEach(function (element) {
          element.updateStyle(colStyle);
        });
      }

      this.setData({
        rowStyle: rowStyle });

    } } });
});
require('wxcomponents/wux-weapp/row/index.js');
__wxRoute = 'wxcomponents/wux-weapp/search-bar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/search-bar/index.js';

define('wxcomponents/wux-weapp/search-bar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-search-bar' },

    defaultValue: {
      type: String,
      value: '' },

    value: {
      type: String,
      value: '',
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    placeholder: {
      type: String,
      value: '搜索' },

    placeholderStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    placeholderClass: {
      type: String,
      value: 'input-placeholder' },

    disabled: {
      type: Boolean,
      value: false },

    maxlength: {
      type: Number,
      value: 140 },

    cursorSpacing: {
      type: Number,
      value: 11 },

    focus: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        this.setData({
          inputFocus: newVal });

      } },

    confirmType: {
      type: String,
      value: 'search' },

    confirmHold: {
      type: Boolean,
      value: false },

    cursor: {
      type: Number,
      value: -1 },

    selectionStart: {
      type: Number,
      value: -1 },

    selectionEnd: {
      type: Number,
      value: -1 },

    adjustPosition: {
      type: Boolean,
      value: true },

    clear: {
      type: Boolean,
      value: false },

    cancelText: {
      type: String,
      value: '取消' },

    showCancel: {
      type: Boolean,
      value: false },

    controlled: {
      type: Boolean,
      value: false } },


  data: {
    inputValue: '',
    inputFocus: false,
    extStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,disabled = _this$data.disabled,inputFocus = _this$data.inputFocus;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--focus"), inputFocus), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var form = "".concat(prefixCls, "__form");
      var box = "".concat(prefixCls, "__box");
      var search = "".concat(prefixCls, "__search");
      var input = "".concat(prefixCls, "__input");
      var clear = "".concat(prefixCls, "__clear");
      var label = "".concat(prefixCls, "__label");
      var icon = "".concat(prefixCls, "__icon");
      var text = "".concat(prefixCls, "__text");
      var cancel = "".concat(prefixCls, "__cancel");

      return {
        wrap: wrap,
        form: form,
        box: box,
        search: search,
        input: input,
        clear: clear,
        label: label,
        icon: icon,
        text: text,
        cancel: cancel };

    } },

  methods: {
    updated: function updated(inputValue) {
      if (this.data.inputValue !== inputValue) {
        this.setData({
          inputValue: inputValue });

      }
    },
    onChange: function onChange(e) {
      if (!this.data.controlled) {
        this.updated(e.detail.value);
      }

      if (!this.data.inputFocus) {
        this.setData({
          inputFocus: true });

      }

      this.triggerEvent('change', e.detail);
    },
    onFocus: function onFocus(e) {
      this.setData({
        inputFocus: true });


      this.triggerEvent('focus', e.detail);
    },
    onBlur: function onBlur(e) {
      this.setData({
        inputFocus: false });


      this.triggerEvent('blur', e.detail);
    },
    onConfirm: function onConfirm(e) {
      this.triggerEvent('confirm', e.detail);
    },
    onClear: function onClear() {var _this$data2 =
      this.data,controlled = _this$data2.controlled,inputValue = _this$data2.inputValue;

      this.setData({
        inputValue: controlled ? inputValue : '',
        inputFocus: true });


      this.triggerEvent('clear', { value: '' });
    },
    onCancel: function onCancel() {
      this.triggerEvent('cancel', { value: this.data.inputValue });
    },
    onClick: function onClick() {
      if (this.data.disabled) return;

      this.setData({
        inputFocus: true });

    } },

  attached: function attached() {var _this$data3 =
    this.data,defaultValue = _this$data3.defaultValue,value = _this$data3.value,controlled = _this$data3.controlled;
    var inputValue = controlled ? value : defaultValue;

    this.updated(inputValue);
  } });
});
require('wxcomponents/wux-weapp/search-bar/index.js');
__wxRoute = 'wxcomponents/wux-weapp/segmented-control/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/segmented-control/index.js';

define('wxcomponents/wux-weapp/segmented-control/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-segment' },

    theme: {
      type: String,
      value: 'balanced' },

    defaultCurrent: {
      type: Number,
      value: 0 },

    current: {
      type: Number,
      value: 0,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.setData({
            activeKey: newVal });

        }
      } },

    values: {
      type: Array,
      value: [] },

    disabled: {
      type: Boolean,
      value: false },

    controlled: {
      type: Boolean,
      value: false } },


  data: {
    activeKey: 0 },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,theme = _this$data.theme,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(theme), theme), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var item = "".concat(prefixCls, "__item");

      return {
        wrap: wrap,
        item: item };

    } },

  methods: {
    onTap: function onTap(e) {
      if (this.data.disabled) return;
      this.setActiveKey(e.currentTarget.dataset.index);
    },
    emitEvent: function emitEvent(key) {
      this.triggerEvent('change', {
        key: key,
        values: this.data.values });

    },
    setActiveKey: function setActiveKey(activeKey) {
      if (this.data.activeKey !== activeKey) {
        if (!this.data.controlled) {
          this.setData({
            activeKey: activeKey });

        }
      }

      this.emitEvent(activeKey);
    } },

  attached: function attached() {var _this$data2 =
    this.data,defaultCurrent = _this$data2.defaultCurrent,current = _this$data2.current,controlled = _this$data2.controlled;
    var activeKey = controlled ? current : defaultCurrent;

    if (this.data.activeKey !== activeKey) {
      this.setData({
        activeKey: activeKey });

    }
  } });
});
require('wxcomponents/wux-weapp/segmented-control/index.js');
__wxRoute = 'wxcomponents/wux-weapp/select/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/select/index.js';

define('wxcomponents/wux-weapp/select/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames3 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = {
  prefixCls: 'wux-select',
  value: '',
  options: [],
  multiple: false,
  max: -1,
  toolbar: {
    title: '请选择',
    cancelText: '取消',
    confirmText: '确定' },

  onChange: function onChange() {},
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {} };


var getSelectIndex = function getSelectIndex(_ref) {var _ref$value = _ref.value,value = _ref$value === void 0 ? '' : _ref$value,_ref$options = _ref.options,options = _ref$options === void 0 ? [] : _ref$options,_ref$multiple = _ref.multiple,multiple = _ref$multiple === void 0 ? false : _ref$multiple;
  var origins = options.map(function (n) {return n.value || n;});

  if (!multiple) {
    return origins.indexOf(value);
  }

  return (value || []).map(function (n) {return origins.indexOf(n);});
};

(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames3.default)(prefixCls);
      var toolbar = "".concat(prefixCls, "__toolbar");
      var inner = "".concat(prefixCls, "__inner");
      var cancel = (0, _classNames3.default)("".concat(prefixCls, "__button"), _defineProperty({}, "".concat(
      prefixCls, "__button--cancel"), true));

      var confirm = (0, _classNames3.default)("".concat(prefixCls, "__button"), _defineProperty({}, "".concat(
      prefixCls, "__button--confirm"), true));

      var hover = "".concat(prefixCls, "__button--hover");
      var title = "".concat(prefixCls, "__title");
      var scrollView = "".concat(prefixCls, "__scroll-view");

      return {
        wrap: wrap,
        toolbar: toolbar,
        inner: inner,
        cancel: cancel,
        confirm: confirm,
        hover: hover,
        title: title,
        scrollView: scrollView };

    } },

  methods: {
    /**
              * 打开
              */
    open: function open() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts, {
        max: parseInt(opts.max) }));

      var index = getSelectIndex(options);

      // scroll into view
      var activeIndex = Array.isArray(index) ? index[index.length - 1] : index;
      if (activeIndex === -1 || activeIndex === undefined) {
        activeIndex = 0;
      }
      activeIndex = "select-".concat(activeIndex);

      this.$$setData(_objectSpread({ in: true }, options, { index: index, activeIndex: activeIndex }));
    },
    /**
        * 关闭
        */
    close: function close(callback) {
      this.$$setData({ in: false });

      if (typeof callback === 'function') {var _this$data =
        this.data,value = _this$data.value,index = _this$data.index,options = _this$data.options;
        callback.call(this, value, index, options);
      }
    },
    /**
        * 点击确定按钮时的回调函数
        */
    onConfirm: function onConfirm() {
      this.close(this.fns.onConfirm);
    },
    /**
        * 点击取消按钮时的回调函数
        */
    onCancel: function onCancel(e) {
      this.close(this.fns.onCancel);
    },
    /**
        * checkbox change 事件触发的回调函数
        */
    onCheckboxChange: function onCheckboxChange(e) {
      var oldValue = this.data.value;var _e$detail =
      e.detail,newValue = _e$detail.value,checked = _e$detail.checked;
      var value = checked ? [].concat(_toConsumableArray(oldValue), [newValue]) : oldValue.filter(function (n) {return n !== newValue;});
      var index = getSelectIndex(_objectSpread({}, this.data, { value: value }));

      this.onChange(value, index);
    },
    /**
        * radio change 事件触发的回调函数
        */
    onRadioChange: function onRadioChange(e) {var _e$detail2 =
      e.detail,value = _e$detail2.value,index = _e$detail2.index;

      this.onChange(value, index);
    },
    /**
        * 选择完成后的回调函数
        */
    onChange: function onChange(value, index) {var _this$data2 =
      this.data,options = _this$data2.options,max = _this$data2.max,multiple = _this$data2.multiple;

      // 限制最多选择几项
      if (multiple && max >= 1 && max < value.length) return;

      this.$$setData({ value: value, index: index });

      if (typeof this.fns.onChange === 'function') {
        this.fns.onChange.call(this, value, index, options);
      }
    } } });
});
require('wxcomponents/wux-weapp/select/index.js');
__wxRoute = 'wxcomponents/wux-weapp/selectable/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/selectable/index.js';

define('wxcomponents/wux-weapp/selectable/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));
var _colors = require("../helpers/colors");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  externalClasses: ['wux-input-class'],
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-selectable' },

    type: {
      type: String,
      value: 'checkbox' },

    value: {
      type: String,
      value: '' },

    defaultChecked: {
      type: Boolean,
      value: false },

    checked: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    disabled: {
      type: Boolean,
      value: false },

    color: {
      type: String,
      value: 'balanced',
      observer: function observer(newVal) {
        this.setData({
          inputColor: (0, _colors.isPresetColor)(newVal) });

      } },

    controlled: {
      type: Boolean,
      value: false },

    wrapStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } } },


  data: {
    inputChecked: false,
    inputColor: '',
    extStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,inputChecked = _this$data.inputChecked,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--checked"), inputChecked), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var input = "".concat(prefixCls, "__input");
      var icon = "".concat(prefixCls, "__icon");

      return {
        wrap: wrap,
        input: input,
        icon: icon };

    } },

  methods: {
    updated: function updated(inputChecked) {
      if (this.data.inputChecked !== inputChecked) {
        this.setData({
          inputChecked: inputChecked });

      }
    },
    onChange: function onChange() {var _this$data2 =
      this.data,value = _this$data2.value,inputChecked = _this$data2.inputChecked,disabled = _this$data2.disabled,controlled = _this$data2.controlled;
      var item = {
        checked: !inputChecked,
        value: value };


      if (disabled) return;

      if (!controlled) {
        this.updated(!inputChecked);
      }

      this.triggerEvent('change', item);
    } },

  attached: function attached() {var _this$data3 =
    this.data,defaultChecked = _this$data3.defaultChecked,checked = _this$data3.checked,controlled = _this$data3.controlled;
    var inputChecked = controlled ? checked : defaultChecked;
    var inputColor = (0, _colors.isPresetColor)(this.data.color);

    this.setData({
      inputChecked: inputChecked,
      inputColor: inputColor });

  } });
});
require('wxcomponents/wux-weapp/selectable/index.js');
__wxRoute = 'wxcomponents/wux-weapp/skeleton-avatar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/skeleton-avatar/index.js';

define('wxcomponents/wux-weapp/skeleton-avatar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../skeleton/index': {
      type: 'ancestor' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-skeleton-avatar' },

    size: {
      type: String,
      value: 'default' },

    shape: {
      type: String,
      value: 'circle' } },


  data: {
    active: false },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,active = _this$data.active,size = _this$data.size,shape = _this$data.shape;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--active"), active), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(size), size), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(shape), shape), _classNames));


      return {
        wrap: wrap };

    } },

  methods: {
    updated: function updated(active) {
      if (this.data.active !== active) {
        this.setData({
          active: active });

      }
    } } });
});
require('wxcomponents/wux-weapp/skeleton-avatar/index.js');
__wxRoute = 'wxcomponents/wux-weapp/skeleton-paragraph/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/skeleton-paragraph/index.js';

define('wxcomponents/wux-weapp/skeleton-paragraph/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../skeleton/index': {
      type: 'ancestor' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-skeleton-paragraph' },

    rows: {
      type: Number,
      value: 3 },

    rounded: {
      type: Boolean,
      value: false } },


  data: {
    active: false,
    rowList: [] },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,active = _this$data.active,rounded = _this$data.rounded;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--active"), active), _defineProperty(_classNames, "".concat(
      prefixCls, "--rounded"), rounded), _classNames));

      var row = "".concat(prefixCls, "__row");

      return {
        wrap: wrap,
        row: row };

    } },

  methods: {
    updated: function updated(active) {
      if (this.data.active !== active) {
        this.setData({
          active: active });

      }
    },
    updateRows: function updateRows() {var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.rows;
      this.setData({
        rowList: _toConsumableArray(Array(rows)).map(function (_, index) {return index;}) });

    } },

  attached: function attached() {
    this.updateRows();
  } });
});
require('wxcomponents/wux-weapp/skeleton-paragraph/index.js');
__wxRoute = 'wxcomponents/wux-weapp/skeleton/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/skeleton/index.js';

define('wxcomponents/wux-weapp/skeleton/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../skeleton-avatar/index': {
      type: 'descendant',
      observer: function observer() {
        this.debounce(this.updated);
      } },

    '../skeleton-paragraph/index': {
      type: 'descendant',
      observer: function observer() {
        this.debounce(this.updated);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-skeleton' },

    active: {
      type: Boolean,
      value: false,
      observer: 'updated' } },


  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,active = _this$data.active;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--active"), active));


      return {
        wrap: wrap };

    } },

  methods: {
    updated: function updated() {var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.active;
      var avatar = this.getRelationNodes('../skeleton-avatar/index');
      var paragraph = this.getRelationNodes('../skeleton-paragraph/index');

      if (avatar.length > 0) {
        avatar.forEach(function (element) {
          element.updated(active);
        });
      }

      if (paragraph.length > 0) {
        paragraph.forEach(function (element) {
          element.updated(active);
        });
      }
    } } });
});
require('wxcomponents/wux-weapp/skeleton/index.js');
__wxRoute = 'wxcomponents/wux-weapp/slider/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/slider/index.js';

define('wxcomponents/wux-weapp/slider/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));
var _gestures = require("../helpers/gestures");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 获取小数位数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */
var getPrecision = function getPrecision(step) {
  var stepString = step.toString();
  return stepString.indexOf('.') >= 0 ? stepString.length - stepString.indexOf('.') - 1 : 0;
};

/**
    * 返回精度正确的值
    */
var checkValuePrecision = function checkValuePrecision(val, step, min) {
  var closestStep = Math.round((val - min) / step) * step + min;
  var precision = getPrecision(step);
  return parseFloat(closestStep.toFixed(precision));
};

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-slider' },

    min: {
      type: Number,
      value: 0,
      observer: 'getMarks' },

    max: {
      type: Number,
      value: 100,
      observer: 'getMarks' },

    step: {
      type: Number,
      value: 1,
      observer: 'getMarks' },

    defaultValue: {
      type: Array,
      value: [0] },

    value: {
      type: Array,
      value: [0],
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    controlled: {
      type: Boolean,
      value: false },

    disabled: {
      type: Boolean,
      value: false },

    showMark: {
      type: Boolean,
      value: false },

    showValue: {
      type: [Boolean, Object],
      value: false },

    markStyle: {
      type: [String, Object, Array],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extMarkStyle: Array.isArray(newVal) ? newVal.map(function (n) {return (0, _styleToCssString.default)(n);}) : (0, _styleToCssString.default)(newVal) });

      } },

    handleStyle: {
      type: [String, Object, Array],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extHandleStyle: Array.isArray(newVal) ? newVal.map(function (n) {return (0, _styleToCssString.default)(n);}) : (0, _styleToCssString.default)(newVal) });

      } },

    trackStyle: {
      type: [String, Object, Array],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extTrackStyle: Array.isArray(newVal) ? newVal.map(function (n) {return (0, _styleToCssString.default)(n);}) : (0, _styleToCssString.default)(newVal) });

      } },

    railStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extRailStyle: (0, _styleToCssString.default)(newVal) });

      } },

    wrapStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extWrapStyle: (0, _styleToCssString.default)(newVal) });

      } } },


  data: {
    offsets: [],
    sliderValue: [],
    extMarkStyle: '',
    extHandleStyle: '',
    extTrackStyle: '',
    extRailStyle: '',
    extWrapStyle: '' },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--disabled"), disabled));

      var min = "".concat(prefixCls, "__min");
      var rail = "".concat(prefixCls, "__rail");
      var mark = "".concat(prefixCls, "__mark");
      var track = "".concat(prefixCls, "__track");
      var handle = "".concat(prefixCls, "__handle");
      var max = "".concat(prefixCls, "__max");

      return {
        wrap: wrap,
        min: min,
        rail: rail,
        mark: mark,
        track: track,
        handle: handle,
        max: max };

    } },

  methods: {
    /**
              * 更新选中值及偏移量
              */
    updated: function updated(sliderValue) {var _this = this;
      var offsets = sliderValue.map(function (value) {return _this.calcOffset(_this.checkValue(value));});
      this.setData({ offsets: offsets, sliderValue: sliderValue });
    },
    /**
        * 手指触摸动作开始
        */
    onTouchStart: function onTouchStart(e) {
      if (this.data.disabled || (0, _gestures.getPointsNumber)(e) > 1) return;var
      index = e.currentTarget.dataset.index;
      this.isMoved = false;
      this.startX = (0, _gestures.getTouchPoints)(e).x;
      this.moveX = 0;
      // 记录选中值发生改变时的初始偏移量
      this.startPos = this.data.offsets[index] || 0;
      // 记录最后一次选中项
      this.setData({ last: index });
    },
    /**
        * 手指触摸后移动
        */
    onTouchMove: function onTouchMove(e) {var _this2 = this;
      if (this.data.disabled || (0, _gestures.getPointsNumber)(e) > 1) return;var
      index = e.currentTarget.dataset.index;var
      prefixCls = this.data.prefixCls;

      this.isMoved = true;
      this.moveX = (0, _gestures.getTouchPoints)(e).x;

      this.getRect(".".concat(prefixCls, "__rail")).then(function (rect) {
        if (!rect || !_this2.isMoved) return;

        var diffX = (_this2.moveX - _this2.startX) / rect.width * (_this2.data.max - _this2.data.min);
        var nextOffsets = _toConsumableArray(_this2.data.offsets);
        var offset = _this2.checkValue(_this2.startPos + diffX, 0, 100);var
        sliderValue = _this2.data.sliderValue;
        var currentValue = _this2.calcValue(offset);
        var prevValue = sliderValue[index - 1];
        var nextValue = sliderValue[index + 1];

        // 通过合法的当前值反算偏移量
        nextOffsets[index] = _this2.calcOffset(currentValue);

        // 判断当前值是否小于前一值，是则重新计算偏移量
        if (prevValue && prevValue > currentValue) {
          nextOffsets[index] = _this2.calcOffset(prevValue);
        }

        // 判断当前值是否大于后一值，是则重新计算偏移量
        if (nextValue && nextValue < currentValue) {
          nextOffsets[index] = _this2.calcOffset(nextValue);
        }

        // 判断当前值是否发生变化，是则触发 change 事件
        if (sliderValue[index] !== currentValue) {
          var value = _this2.getValue(nextOffsets);

          if (!_this2.data.controlled) {
            _this2.setData({ offsets: nextOffsets, sliderValue: value });
          }

          _this2.triggerEvent('change', { offsets: nextOffsets, value: value });
        }
      });
    },
    /**
        * 手指触摸动作结束
        */
    onTouchEnd: function onTouchEnd(e) {
      if (this.data.disabled || (0, _gestures.getPointsNumber)(e) > 1) return;
      this.isMoved = false;var
      offsets = this.data.offsets;
      var value = this.getValue(offsets);
      this.triggerEvent('afterChange', { offsets: offsets, value: value });
    },
    /**
        * 获取界面上的节点信息
        */
    getRect: function getRect(selector, all) {var _this3 = this;
      return new Promise(function (resolve) {
        wx.
        createSelectorQuery().
        in(_this3)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    /**
        * 计算选中值
        */
    calcValue: function calcValue(ratio) {var _this$data2 =
      this.data,min = _this$data2.min,max = _this$data2.max;
      return this.trimValue(ratio * (max - min) / 100 + min);
    },
    /**
        * 计算偏移量
        */
    calcOffset: function calcOffset(value) {var _this$data3 =
      this.data,min = _this$data3.min,max = _this$data3.max;
      var ratio = (value - min) / (max - min);
      return ratio * 100;
    },
    /**
        * 判断元素是否在指定的范围内
        */
    checkValue: function checkValue(val) {var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.data.min;var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data.max;
      if (val <= min) {
        return min;
      }

      if (val >= max) {
        return max;
      }

      return val;
    },
    /**
        * 验证选中值
        */
    trimValue: function trimValue(val) {
      return checkValuePrecision(this.checkValue(val), this.data.step, this.data.min);
    },
    /**
        * 获取选中值
        */
    getValue: function getValue() {var _this4 = this;var offsets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.offsets;
      return offsets.map(function (offset) {return _this4.calcValue(offset);});
    },
    /**
        * 获取间断点位置
        */
    getMarks: function getMarks() {
      if (!this.data.showMark) return;var _this$data4 =

      this.data,min = _this$data4.min,max = _this$data4.max,step = _this$data4.step;
      var count = (max - min) / step;
      var marks = [];
      var offset = 100 * step / (max - min);

      for (var i = 1; i < count; i++) {
        marks.push(i * offset);
      }

      this.setData({ marks: marks });
    } },

  attached: function attached() {var _this$data5 =
    this.data,defaultValue = _this$data5.defaultValue,value = _this$data5.value,controlled = _this$data5.controlled;
    var sliderValue = controlled ? value : defaultValue;

    this.updated(sliderValue);
    this.getMarks();
  } });
});
require('wxcomponents/wux-weapp/slider/index.js');
__wxRoute = 'wxcomponents/wux-weapp/spin/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/spin/index.js';

define('wxcomponents/wux-weapp/spin/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames3 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-spin' },

    classNames: {
      type: null,
      value: 'wux-animate--fadeIn' },

    tip: {
      type: String,
      value: '' },

    size: {
      type: String,
      value: 'default' },

    spinning: {
      type: Boolean,
      value: true,
      observer: 'updated' },

    nested: {
      type: Boolean,
      value: false } },


  data: {
    spinVisible: true },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,size = _this$data.size,nested = _this$data.nested,showText = _this$data.tip,spinVisible = _this$data.spinVisible;
      var wrap = (0, _classNames3.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(size), size), _defineProperty(_classNames, "".concat(
      prefixCls, "--nested"), nested), _defineProperty(_classNames, "".concat(
      prefixCls, "--show-text"), showText), _classNames));

      var anim = !nested ? "".concat(prefixCls, "__spinning") : "".concat(prefixCls, "__spinning--nested");
      var dots = "".concat(prefixCls, "__dots");
      var dot = "".concat(prefixCls, "__dot");
      var tip = "".concat(prefixCls, "__tip");
      var container = (0, _classNames3.default)("".concat(prefixCls, "__container"), _defineProperty({}, "".concat(
      prefixCls, "__container--blur"), spinVisible));


      return {
        wrap: wrap,
        anim: anim,
        dots: dots,
        dot: dot,
        tip: tip,
        container: container };

    } },

  methods: {
    updated: function updated(spinVisible) {
      if (this.data.nested) {
        this.setData({
          spinVisible: spinVisible });

      }
    } } });
});
require('wxcomponents/wux-weapp/spin/index.js');
__wxRoute = 'wxcomponents/wux-weapp/step/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/step/index.js';

define('wxcomponents/wux-weapp/step/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaultStatus = ['wait', 'process', 'finish', 'error'];
var defaultIcon = 'ios-checkmark';

(0, _baseComponent.default)({
  relations: {
    '../steps/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-step' },

    status: {
      type: String,
      value: '' },

    title: {
      type: String,
      value: '' },

    content: {
      type: String,
      value: '' },

    icon: {
      type: String,
      value: '' } },


  data: {
    width: '100%',
    length: 1,
    index: 0,
    current: 0,
    direction: 'horizontal' },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,direction = _this$data.direction;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--").concat(direction), direction));

      var hd = "".concat(prefixCls, "__hd");
      var icon = "".concat(prefixCls, "__icon");
      var thumb = "".concat(prefixCls, "__thumb");
      var bd = "".concat(prefixCls, "__bd");
      var title = "".concat(prefixCls, "__title");
      var content = "".concat(prefixCls, "__content");
      var ft = "".concat(prefixCls, "__ft");

      return {
        wrap: wrap,
        hd: hd,
        icon: icon,
        thumb: thumb,
        bd: bd,
        title: title,
        content: content,
        ft: ft };

    } },

  methods: {
    updateCurrent: function updateCurrent() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var width = opts.direction === 'horizontal' ? 100 / opts.length + '%' : '100%';
      var index = defaultStatus.indexOf(this.data.status);
      var hasIcon = opts.index < opts.current || this.data.icon;
      var thumb = this.data.icon || defaultIcon;
      var suffix = index !== -1 ? defaultStatus[index] : opts.index < opts.current ? 'finish' : opts.index === opts.current ? 'process' : '';
      var className = "".concat(this.data.prefixCls, "--").concat(suffix);
      var options = Object.assign({
        width: width,
        className: className,
        hasIcon: hasIcon,
        thumb: thumb },
      opts);

      this.setData(options);
    } },

  attached: function attached() {
    this.updateCurrent(this.data);
  } });
});
require('wxcomponents/wux-weapp/step/index.js');
__wxRoute = 'wxcomponents/wux-weapp/steps/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/steps/index.js';

define('wxcomponents/wux-weapp/steps/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../step/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.updateCurrent);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-steps' },

    current: {
      type: Number,
      value: 0,
      observer: 'updateCurrent' },

    // status: {
    //     type: String,
    //     value: '',
    // },
    direction: {
      type: String,
      value: 'horizontal' } },


  methods: {
    updateCurrent: function updateCurrent() {
      var elements = this.getRelationNodes('../step/index');var _this$data =
      this.data,current = _this$data.current,direction = _this$data.direction;

      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          element.updateCurrent({
            length: elements.length,
            index: index,
            current: current,
            direction: direction });

        });
      }
    } } });
});
require('wxcomponents/wux-weapp/steps/index.js');
__wxRoute = 'wxcomponents/wux-weapp/sticky-item/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/sticky-item/index.js';

define('wxcomponents/wux-weapp/sticky-item/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../sticky/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-sticky-item' },

    title: {
      type: String,
      value: '' },

    content: {
      type: String,
      value: '' } },


  data: {
    isFixed: false,
    index: 0,
    top: 0,
    height: 0 },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,isFixed = _this$data.isFixed;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--fixed"), isFixed));

      var hd = "".concat(prefixCls, "__hd");
      var title = "".concat(prefixCls, "__title");
      var bd = "".concat(prefixCls, "__bd");
      var content = "".concat(prefixCls, "__content");

      return {
        wrap: wrap,
        hd: hd,
        title: title,
        bd: bd,
        content: content };

    } },

  methods: {
    onScroll: function onScroll(scrollTop) {var _this$data2 =
      this.data,top = _this$data2.top,height = _this$data2.height;
      var isFixed = scrollTop >= top && scrollTop < top + height;

      if (isFixed !== this.data.isFixed) {
        this.setData({
          isFixed: isFixed });

      }
    },
    updated: function updated(index) {var _this = this;
      var className = ".".concat(this.data.prefixCls);
      wx.
      createSelectorQuery().
      in(this).
      select(className).
      boundingClientRect(function (rect) {
        if (!rect) return;

        _this.setData({
          top: rect.top,
          height: rect.height,
          index: index });

      }).
      exec();
    } } });
});
require('wxcomponents/wux-weapp/sticky-item/index.js');
__wxRoute = 'wxcomponents/wux-weapp/sticky/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/sticky/index.js';

define('wxcomponents/wux-weapp/sticky/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../sticky-item/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.updated);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-sticky' },

    scrollTop: {
      type: Number,
      value: 0,
      observer: 'onScroll' } },


  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var wrap = (0, _classNames.default)(prefixCls);

      return {
        wrap: wrap };

    } },

  methods: {
    onScroll: function onScroll() {var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.scrollTop;
      var elements = this.getRelationNodes('../sticky-item/index');
      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          element.onScroll(scrollTop);
        });
      }
    },
    updated: function updated() {
      var elements = this.getRelationNodes('../sticky-item/index');
      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          element.updated(index);
        });
      }
    } } });
});
require('wxcomponents/wux-weapp/sticky/index.js');
__wxRoute = 'wxcomponents/wux-weapp/swipe-action-group/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/swipe-action-group/index.js';

define('wxcomponents/wux-weapp/swipe-action-group/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../swipe-action/index': {
      type: 'descendant',
      observer: function observer() {
        this.debounce(this.updated);
      } } },


  methods: {
    updated: function updated() {
      var elements = this.getRelationNodes('../swipe-action/index');
      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          element.updated(index);
        });
      }
    },
    onCloseSwipe: function onCloseSwipe(current) {
      var elements = this.getRelationNodes('../swipe-action/index');
      if (elements.length > 0) {
        elements.forEach(function (element, index) {
          if (current !== index) {
            element.onClose();
          }
        });
      }
    } } });
});
require('wxcomponents/wux-weapp/swipe-action-group/index.js');
__wxRoute = 'wxcomponents/wux-weapp/swipe-action/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/swipe-action/index.js';

define('wxcomponents/wux-weapp/swipe-action/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames4 = _interopRequireDefault(require("../helpers/classNames"));
var _gestures = require("../helpers/gestures");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../swipe-action-group/index': {
      type: 'ancestor' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-swipe' },

    autoClose: {
      type: Boolean,
      value: false },

    disabled: {
      type: Boolean,
      value: false },

    left: {
      type: Array,
      value: [],
      observer: 'updateBtns' },

    right: {
      type: Array,
      value: [],
      observer: 'updateBtns' },

    useSlots: {
      type: Boolean,
      value: false } },


  data: {
    index: 0,
    swiping: false,
    showCover: false,
    offsetStyle: '' },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,swiping = _this$data.swiping;
      var wrap = (0, _classNames4.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--swiping"), swiping));

      var cover = "".concat(prefixCls, "__cover");
      var left = (0, _classNames4.default)("".concat(prefixCls, "__actions"), _defineProperty({}, "".concat(
      prefixCls, "__actions--left"), true));

      var right = (0, _classNames4.default)("".concat(prefixCls, "__actions"), _defineProperty({}, "".concat(
      prefixCls, "__actions--right"), true));

      var action = "".concat(prefixCls, "__action");
      var text = "".concat(prefixCls, "__text");
      var content = "".concat(prefixCls, "__content");

      return {
        wrap: wrap,
        cover: cover,
        left: left,
        right: right,
        action: action,
        text: text,
        content: content };

    } },

  methods: {
    updated: function updated(index) {
      if (this.data.index !== index) {
        this.setData({ index: index });
      }
    },
    onCloseSwipe: function onCloseSwipe() {
      var parent = this.getRelationNodes('../swipe-action-group/index')[0];

      if (parent) {
        parent.onCloseSwipe(this.data.index);
      }
    },
    getContentEasing: function getContentEasing(value, limit) {
      // limit content style left when value > actions width
      var delta = Math.abs(value) - Math.abs(limit);
      var isOverflow = delta > 0;
      var factor = limit > 0 ? 1 : -1;

      if (isOverflow) {
        value = limit + Math.pow(delta, 0.85) * factor;
        return Math.abs(value) > Math.abs(limit) ? limit : value;
      }

      return value;
    },
    setStyle: function setStyle(value) {
      var limit = value > 0 ? this.btnsLeftWidth : -this.btnsRightWidth;
      var left = this.getContentEasing(value, limit);
      var offsetStyle = "left: ".concat(left, "px");
      var showCover = Math.abs(value) > 0;

      if (this.data.offsetStyle !== offsetStyle || this.data.showCover !== showCover) {
        this.setData({ offsetStyle: offsetStyle, showCover: showCover });
      }
    },
    updateBtns: function updateBtns() {var _this = this;var
      prefixCls = this.data.prefixCls;
      var query = wx.createSelectorQuery().in(this);
      query.select(".".concat(prefixCls, "__actions--left")).boundingClientRect();
      query.select(".".concat(prefixCls, "__actions--right")).boundingClientRect();
      query.exec(function (rects) {var _rects = _slicedToArray(
        rects, 2),left = _rects[0],right = _rects[1];
        _this.btnsLeftWidth = left ? left.width : 0;
        _this.btnsRightWidth = right ? right.width : 0;
      });
    },
    onTap: function onTap(e) {var _e$currentTarget$data =
      e.currentTarget.dataset,index = _e$currentTarget$data.index,value = _e$currentTarget$data.value,type = _e$currentTarget$data.type;
      var params = {
        index: index,
        value: value,
        type: type,
        buttons: this.data[type] };


      if (this.data.autoClose) {
        this.onClose();
      }

      this.triggerEvent('click', params);
    },
    onAcitons: function onAcitons() {
      if (this.data.autoClose) {
        this.onClose();
      }
    },
    onOpen: function onOpen(value, openedLeft, openedRight) {
      if (!this.openedLeft && !this.openedRight) {
        this.triggerEvent('open');
      }

      this.openedLeft = openedLeft;
      this.openedRight = openedRight;
      this.setStyle(value);
    },
    onClose: function onClose() {
      if (this.openedLeft || this.openedRight) {
        this.triggerEvent('close');
      }

      this.openedLeft = false;
      this.openedRight = false;
      this.setStyle(0);
    },
    onOpenLeft: function onOpenLeft() {
      this.onOpen(this.btnsLeftWidth, true, false);
    },
    onOpenRight: function onOpenRight() {
      this.onOpen(-this.btnsRightWidth, true, false);
    },
    onTouchStart: function onTouchStart(e) {
      if (this.data.disabled || (0, _gestures.getPointsNumber)(e) > 1) return;
      this.start = (0, _gestures.getTouchPoints)(e);
      this.onCloseSwipe();
    },
    onTouchMove: function onTouchMove(e) {
      if (this.data.disabled || (0, _gestures.getPointsNumber)(e) > 1) return;

      this.move = (0, _gestures.getTouchPoints)(e);

      var deltaX = this.move.x - this.start.x;
      var direction = (0, _gestures.getSwipeDirection)(this.start.x, this.move.x, this.start.y, this.move.y);
      var isLeft = direction === 'Left';
      var isRight = direction === 'Right';

      if (!isLeft && !isRight) return;var _this$data2 =

      this.data,left = _this$data2.left,right = _this$data2.right,useSlots = _this$data2.useSlots;

      this.needShowRight = isLeft && (useSlots || right.length > 0);
      this.needShowLeft = isRight && (useSlots || left.length > 0);

      if (this.needShowLeft || this.needShowRight) {
        this.swiping = true;
        this.setData({ swiping: true });
        this.setStyle(deltaX);
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      if (this.data.disabled || (0, _gestures.getPointsNumber)(e) > 1 || !this.swiping) return;

      this.end = (0, _gestures.getTouchPoints)(e);

      var deltaX = this.end.x - this.start.x;
      var needOpenRight = this.needShowRight && Math.abs(deltaX) > this.btnsRightWidth / 2;
      var needOpenLeft = this.needShowLeft && Math.abs(deltaX) > this.btnsLeftWidth / 2;

      if (needOpenRight) {
        this.onOpenRight();
      } else if (needOpenLeft) {
        this.onOpenLeft();
      } else {
        this.onClose();
      }

      this.swiping = false;
      this.setData({ swiping: false });

      this.needShowLeft = false;
      this.needShowRight = false;
    } },

  created: function created() {
    this.btnsLeftWidth = 0;
    this.btnsRightWidth = 0;
    this.openedLeft = false;
    this.openedRight = false;
    this.needShowLeft = false;
    this.needShowRight = false;
  },
  ready: function ready() {
    this.updateBtns();
  } });
});
require('wxcomponents/wux-weapp/swipe-action/index.js');
__wxRoute = 'wxcomponents/wux-weapp/switch/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/switch/index.js';

define('wxcomponents/wux-weapp/switch/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _colors = require("../helpers/colors");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  useField: true,
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-switch' },

    value: {
      type: Boolean,
      value: false },

    disabled: {
      type: Boolean,
      value: false },

    color: {
      type: String,
      value: 'balanced',
      observer: 'updateStyle' } },


  data: {
    style: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,value = _this$data.value,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls);
      var input = (0, _classNames2.default)("".concat(prefixCls, "__input"), (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "__input--checked"), value), _defineProperty(_classNames, "".concat(
      prefixCls, "__input--disabled"), disabled), _classNames));


      return {
        wrap: wrap,
        input: input };

    } },

  methods: {
    onTap: function onTap(e) {var _this$data2 =
      this.data,value = _this$data2.value,disabled = _this$data2.disabled;

      if (disabled) return;

      this.triggerEvent('change', {
        value: !value });

    },
    updateStyle: function updateStyle() {var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.color;
      var newColor = (0, _colors.isPresetColor)(color);
      this.setData({
        style: "border-color: ".concat(newColor, "; background-color: ").concat(newColor, ";") });

    } },

  attached: function attached() {
    this.updateStyle();
  } });
});
require('wxcomponents/wux-weapp/switch/index.js');
__wxRoute = 'wxcomponents/wux-weapp/tab/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/tab/index.js';

define('wxcomponents/wux-weapp/tab/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../tabs/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-tabs__tab' },

    key: {
      type: String,
      value: '' },

    title: {
      type: String,
      value: '' },

    disabled: {
      type: Boolean,
      value: false } },


  data: {
    current: false,
    scroll: false },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,direction = _this$data.direction,scroll = _this$data.scroll,theme = _this$data.theme,current = _this$data.current,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(direction), direction), _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(theme), theme), _defineProperty(_classNames, "".concat(
      prefixCls, "--scroll"), scroll), _defineProperty(_classNames, "".concat(
      prefixCls, "--current"), current), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var title = "".concat(prefixCls, "-title");
      var bar = "".concat(prefixCls, "-bar");

      return {
        wrap: wrap,
        title: title,
        bar: bar };

    } },

  methods: {
    changeCurrent: function changeCurrent(_ref) {var current = _ref.current,scroll = _ref.scroll,theme = _ref.theme,direction = _ref.direction;
      this.setData({
        current: current,
        scroll: scroll,
        theme: theme,
        direction: direction });

    },
    onTap: function onTap() {var _this$data2 =
      this.data,key = _this$data2.key,disabled = _this$data2.disabled;
      var parent = this.getRelationNodes('../tabs/index')[0];

      if (disabled || !parent) return;

      this.triggerEvent('click', { key: key });

      parent.setActiveKey(key);
    } } });
});
require('wxcomponents/wux-weapp/tab/index.js');
__wxRoute = 'wxcomponents/wux-weapp/tabbar-item/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/tabbar-item/index.js';

define('wxcomponents/wux-weapp/tabbar-item/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../tabbar/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-tabbar-item' },

    key: {
      type: String,
      value: '' },

    title: {
      type: String,
      value: '' },

    disabled: {
      type: Boolean,
      value: false } },


  data: {
    width: '100%',
    current: false,
    index: '0' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,theme = _this$data.theme,current = _this$data.current,disabled = _this$data.disabled;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(theme), theme), _defineProperty(_classNames, "".concat(
      prefixCls, "--current"), current), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var icon = "".concat(prefixCls, "__icon");
      var title = "".concat(prefixCls, "__title");

      return {
        wrap: wrap,
        icon: icon,
        title: title };

    } },

  methods: {
    changeCurrent: function changeCurrent(current, index, theme, length) {
      var width = 100 / length + '%';

      this.setData({
        width: width,
        current: current,
        theme: theme,
        index: index });

    },
    onTap: function onTap() {var _this$data2 =
      this.data,index = _this$data2.index,disabled = _this$data2.disabled;
      var parent = this.getRelationNodes('../tabbar/index')[0];

      if (disabled || !parent) {
        return false;
      }

      this.triggerEvent('click', { index: index });

      parent.setActiveKey(index);
    } } });
});
require('wxcomponents/wux-weapp/tabbar-item/index.js');
__wxRoute = 'wxcomponents/wux-weapp/tabbar/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/tabbar/index.js';

define('wxcomponents/wux-weapp/tabbar/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _checkIPhoneX = require("../helpers/checkIPhoneX");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../tabbar-item/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.changeCurrent);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-tabbar' },

    defaultCurrent: {
      type: String,
      value: '' },

    current: {
      type: String,
      value: '',
      observer: 'changeCurrent' },

    controlled: {
      type: Boolean,
      value: false },

    theme: {
      type: String,
      value: 'balanced' },

    position: {
      type: String,
      value: '' },

    safeArea: {
      type: Boolean,
      value: false } },


  data: {
    tabbarStyle: '',
    activeKey: '',
    keys: [] },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,position = _this$data.position;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--").concat(position), position));


      return {
        wrap: wrap };

    } },

  methods: {
    updated: function updated(activeKey, condition) {var _this = this;
      var elements = this.getRelationNodes('../tabbar-item/index');

      if (elements.length > 0) {
        if (condition) {
          this.setData({
            activeKey: activeKey });


          elements.forEach(function (element, index) {
            var key = element.data.key || String(index);
            var current = key === activeKey;

            element.changeCurrent(current, key, _this.data.theme, elements.length);
          });
        }
      }

      if (this.data.keys.length !== elements.length) {
        this.setData({
          keys: elements.map(function (element) {return element.data;}) });

      }
    },
    changeCurrent: function changeCurrent() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
      this.updated(value, this.data.controlled);
    },
    emitEvent: function emitEvent(key) {
      this.triggerEvent('change', {
        key: key,
        keys: this.data.keys });

    },
    setActiveKey: function setActiveKey(activeKey) {
      if (this.data.activeKey !== activeKey) {
        this.updated(activeKey, !this.data.controlled);
      }

      this.emitEvent(activeKey);
    },
    applyIPhoneXShim: function applyIPhoneXShim() {var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.position;
      if ((0, _checkIPhoneX.checkIPhoneX)()) {
        if (position === 'bottom' || position === 'top') {
          this.setData({ tabbarStyle: "".concat(position, ": ").concat(_checkIPhoneX.safeAreaInset[position], "px") });
        }
      }
    } },

  ready: function ready() {var _this$data2 =
    this.data,defaultCurrent = _this$data2.defaultCurrent,current = _this$data2.current,controlled = _this$data2.controlled;
    var activeKey = controlled ? current : defaultCurrent;

    this.updated(activeKey, true);
    this.applyIPhoneXShim();
  } });
});
require('wxcomponents/wux-weapp/tabbar/index.js');
__wxRoute = 'wxcomponents/wux-weapp/tabs/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/tabs/index.js';

define('wxcomponents/wux-weapp/tabs/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var getDefaultActiveKey = function getDefaultActiveKey(elements) {
  var target = elements.filter(function (element) {return !element.data.disabled;})[0];
  if (target) {
    return target.data.key;
  }
  return null;
};

var activeKeyIsValid = function activeKeyIsValid(elements, key) {
  return elements.map(function (element) {return element.data.key;}).includes(key);
};

var getActiveKey = function getActiveKey(elements, activeKey) {
  var defaultActiveKey = getDefaultActiveKey(elements);
  return !activeKey ? defaultActiveKey : !activeKeyIsValid(elements, activeKey) ? defaultActiveKey : activeKey;
};

(0, _baseComponent.default)({
  relations: {
    '../tab/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.changeCurrent);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-tabs' },

    defaultCurrent: {
      type: String,
      value: '' },

    current: {
      type: String,
      value: '',
      observer: 'changeCurrent' },

    scroll: {
      type: Boolean,
      value: false },

    controlled: {
      type: Boolean,
      value: false },

    theme: {
      type: String,
      value: 'balanced' },

    direction: {
      type: String,
      value: 'horizontal' } },


  data: {
    activeKey: '',
    keys: [] },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,direction = _this$data.direction,scroll = _this$data.scroll;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(direction), direction), _defineProperty(_classNames, "".concat(
      prefixCls, "--scroll"), scroll), _classNames));


      return {
        wrap: wrap };

    } },

  methods: {
    updated: function updated(value, condition) {
      var elements = this.getRelationNodes('../tab/index');
      var activeKey = getActiveKey(elements, value);var _this$data2 =
      this.data,scroll = _this$data2.scroll,theme = _this$data2.theme,direction = _this$data2.direction;

      if (elements.length > 0) {
        if (condition) {
          this.setData({
            activeKey: activeKey });


          elements.forEach(function (element) {
            element.changeCurrent({
              current: element.data.key === activeKey,
              scroll: scroll,
              theme: theme,
              direction: direction });

          });
        }
      }

      if (this.data.keys.length !== elements.length) {
        this.setData({
          keys: elements.map(function (element) {return element.data;}) });

      }
    },
    changeCurrent: function changeCurrent() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;
      this.updated(value, this.data.controlled);
    },
    emitEvent: function emitEvent(key) {
      this.triggerEvent('change', {
        key: key,
        keys: this.data.keys });

    },
    setActiveKey: function setActiveKey(activeKey) {
      if (this.data.activeKey !== activeKey) {
        this.updated(activeKey, !this.data.controlled);
      }

      this.emitEvent(activeKey);
    } },

  ready: function ready() {var _this$data3 =
    this.data,defaultCurrent = _this$data3.defaultCurrent,current = _this$data3.current,controlled = _this$data3.controlled;
    var activeKey = controlled ? current : defaultCurrent;

    this.updated(activeKey, true);
  } });
});
require('wxcomponents/wux-weapp/tabs/index.js');
__wxRoute = 'wxcomponents/wux-weapp/tag/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/tag/index.js';

define('wxcomponents/wux-weapp/tag/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                          * 判断是否预设的颜色值
                                                                                                                                                                          * @param {String} color 颜色值
                                                                                                                                                                          */
var isPresetColor = function isPresetColor(color) {
  if (!color) {
    return false;
  }
  return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
};

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-tag' },

    hoverClass: {
      type: String,
      value: 'default' },

    color: {
      type: String,
      value: '',
      observer: 'updateStyle' },

    closable: {
      type: Boolean,
      value: false },

    defaultVisible: {
      type: Boolean,
      value: true },

    visible: {
      type: Boolean,
      value: true,
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    controlled: {
      type: Boolean,
      value: false } },


  data: {
    className: '',
    tagStyle: '',
    tagVisible: true },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,hoverClass = _this$data.hoverClass;
      var wrap = (0, _classNames.default)(prefixCls);
      var icon = "".concat(prefixCls, "__icon");
      var hover = hoverClass && hoverClass !== 'default' ? hoverClass : "".concat(prefixCls, "--hover");

      return {
        wrap: wrap,
        icon: icon,
        hover: hover };

    } },

  methods: {
    /**
              * 控制组件显示或隐藏
              */
    updated: function updated(tagVisible) {
      if (this.data.tagVisible !== tagVisible) {
        this.setData({
          tagVisible: tagVisible });

      }
    },
    /**
        * 更新组件样式
        */
    updateStyle: function updateStyle(color) {var
      prefixCls = this.data.prefixCls;
      var isPreset = isPresetColor(color);
      var className = isPreset ? "".concat(prefixCls, "--").concat(color) : '';
      var tagStyle = !isPreset ? "background-color: ".concat(color, "; color: #fff") : '';

      this.setData({
        className: className,
        tagStyle: tagStyle });

    },
    /**
        * 显示隐藏的回调
        */
    onChange: function onChange(tagVisible) {
      if (!this.data.controlled) {
        this.updated(tagVisible);
      }

      this.triggerEvent('change', { value: tagVisible });
    },
    /**
        * 点击事件
        */
    onClick: function onClick() {
      this.triggerEvent('click');
    },
    /**
        * 关闭时触发的回调函数
        */
    onClose: function onClose() {
      if (this.data.closable) {
        this.triggerEvent('close');
        this.onChange(false);
      }
    } },

  attached: function attached() {var _this$data2 =
    this.data,defaultVisible = _this$data2.defaultVisible,visible = _this$data2.visible,controlled = _this$data2.controlled;
    var tagVisible = controlled ? visible : defaultVisible;

    this.updated(tagVisible);
  } });
});
require('wxcomponents/wux-weapp/tag/index.js');
__wxRoute = 'wxcomponents/wux-weapp/textarea/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/textarea/index.js';

define('wxcomponents/wux-weapp/textarea/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-textarea' },

    label: {
      type: String,
      value: '' },

    extra: {
      type: String,
      value: '' },

    defaultValue: {
      type: String,
      value: '' },

    value: {
      type: String,
      value: '',
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.updated(newVal);
        }
      } },

    controlled: {
      type: Boolean,
      value: false },

    placeholder: {
      type: String,
      value: '' },

    placeholderStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    placeholderClass: {
      type: String,
      value: 'textarea-placeholder' },

    disabled: {
      type: Boolean,
      value: false },

    maxlength: {
      type: Number,
      value: 140 },

    autoHeight: {
      type: Boolean,
      value: false },

    cursorSpacing: {
      type: Number,
      value: 11 },

    focus: {
      type: Boolean,
      value: false },

    cursor: {
      type: Number,
      value: -1 },

    showConfirmBar: {
      type: Boolean,
      value: true },

    selectionStart: {
      type: Number,
      value: -1 },

    selectionEnd: {
      type: Number,
      value: -1 },

    adjustPosition: {
      type: Boolean,
      value: true },

    rows: {
      type: Number,
      value: 1,
      observer: 'updateHeight' },

    hasCount: {
      type: Boolean,
      value: false },

    clear: {
      type: Boolean,
      value: false },

    error: {
      type: Boolean,
      value: false } },


  data: {
    inputValue: '',
    inputFocus: false,
    inputRows: 1,
    inputHeight: '',
    extStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,disabled = _this$data.disabled,inputFocus = _this$data.inputFocus,hasError = _this$data.error,hasCount = _this$data.hasCount;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--focus"), inputFocus), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _defineProperty(_classNames, "".concat(
      prefixCls, "--error"), hasError), _defineProperty(_classNames, "".concat(
      prefixCls, "--has-count"), hasCount), _classNames));

      var label = "".concat(prefixCls, "__label");
      var control = "".concat(prefixCls, "__control");
      var item = "".concat(prefixCls, "__item");
      var clear = "".concat(prefixCls, "__clear");
      var error = "".concat(prefixCls, "__error");
      var extra = "".concat(prefixCls, "__extra");
      var count = "".concat(prefixCls, "__count");
      var current = "".concat(prefixCls, "__current");

      return {
        wrap: wrap,
        label: label,
        control: control,
        item: item,
        clear: clear,
        error: error,
        extra: extra,
        count: count,
        current: current };

    } },

  methods: {
    updateHeight: function updateHeight() {var _this = this;var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.rows;
      // rows 取值为大于或等于 1 的正整数
      var rows = Math.max(1, parseInt(val));var _this$data2 =
      this.data,prefixCls = _this$data2.prefixCls,inputRows = _this$data2.inputRows;

      if (inputRows !== rows) {
        wx.
        createSelectorQuery().
        in(this).select(".".concat(prefixCls, "__item")).
        boundingClientRect(function (rect) {
          if (rect) {
            var lineHeight = inputRows > 1 ? rect.height / inputRows : rect.height;
            var inputHeight = lineHeight * rows;

            _this.setData({
              inputRows: rows,
              inputHeight: inputHeight });

          }
        }).
        exec();
      }
    },
    updated: function updated(inputValue) {
      if (this.data.inputValue !== inputValue) {
        this.setData({
          inputValue: inputValue });

      }
    },
    onChange: function onChange(e) {
      if (!this.data.controlled) {
        this.updated(e.detail.value);
      }

      this.triggerEvent('change', e.detail);
    },
    onFocus: function onFocus(e) {
      this.clearTimer();

      this.setData({
        inputFocus: true });


      this.triggerEvent('focus', e.detail);
    },
    onBlur: function onBlur(e) {
      this.setTimer();

      this.triggerEvent('blur', e.detail);
    },
    onConfirm: function onConfirm(e) {
      this.triggerEvent('confirm', e.detail);
    },
    onClear: function onClear() {var _this$data3 =
      this.data,controlled = _this$data3.controlled,inputValue = _this$data3.inputValue;

      this.setData({
        inputValue: controlled ? inputValue : '' });


      this.triggerEvent('clear', { value: '' });
    },
    onError: function onError() {
      this.triggerEvent('error', { value: this.data.inputValue });
    },
    onLineChange: function onLineChange(e) {
      this.triggerEvent('linechange', e.detail);
    },
    setTimer: function setTimer() {var _this2 = this;
      this.clearTimer();

      this.timeout = setTimeout(function () {
        _this2.setData({
          inputFocus: false });

      }, 200);
    },
    clearTimer: function clearTimer() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    } },

  attached: function attached() {var _this$data4 =
    this.data,defaultValue = _this$data4.defaultValue,value = _this$data4.value,controlled = _this$data4.controlled;
    var inputValue = controlled ? value : defaultValue;

    this.updated(inputValue);
  },
  ready: function ready() {
    this.updateHeight();
  } });
});
require('wxcomponents/wux-weapp/textarea/index.js');
__wxRoute = 'wxcomponents/wux-weapp/timeago/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/timeago/index.js';

define('wxcomponents/wux-weapp/timeago/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));
var _index = require("./core/index");
var _index2 = _interopRequireDefault(require("./locales/index"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-timeago' },

    to: {
      type: null,
      value: null,
      observer: function observer(newVal) {var _this$data =
        this.data,from = _this$data.from,lang = _this$data.lang;
        this.updated(newVal, from, lang);
      } },

    from: {
      type: null,
      value: null,
      observer: function observer(newVal) {var _this$data2 =
        this.data,to = _this$data2.to,lang = _this$data2.lang;
        this.updated(to, newVal, lang);
      } },

    refreshable: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {var _this$data3 =
        this.data,to = _this$data3.to,from = _this$data3.from,lang = _this$data3.lang;
        this.updated(to, from, lang, true);
      } },

    lang: {
      type: String,
      value: 'zh_CN',
      observer: function observer(newVal) {var _this$data4 =
        this.data,to = _this$data4.to,from = _this$data4.from;
        this.updated(to, from, newVal, true);
      } } },


  data: {
    currentTo: null,
    currentFrom: null,
    timeago: null },

  methods: {
    /**
              * 更新时间
              * @param {Any} currentTo   当前开始时间
              * @param {Any} currentFrom 当前截止时间
              * @param {String} lang     返回文本的语言，可选值为 en、zh_CN、zh_TW
              * @param {Boolean} isForce 是否强制更新
              */
    updated: function updated(currentTo, currentFrom, lang, isForce) {var _this = this;
      // clearTimeout
      this.clearTimer();

      // check datetime
      if (currentTo !== this.data.currentTo || currentFrom !== this.data.currentFrom || isForce) {
        var diffTime = (0, _index.diff)(currentTo, currentFrom);
        var timeago = (0, _index.format)(diffTime, _index2.default[lang]);
        this.setData({ currentTo: currentTo, currentFrom: currentFrom, timeago: timeago }, function () {
          // check refreshable
          if (_this.data.refreshable && !_this.data.from) {
            var howOld = (0, _index.diff)(currentTo, currentFrom, 'minute');
            var secondsUntilUpdate = howOld < 1 && 1 || howOld < 60 && 30 || howOld < 180 && 300 || 3600;
            // setTimeout
            _this.timeout = setTimeout(function () {
              _this.updated(currentTo, _this.getNow(), lang);
            }, secondsUntilUpdate * 1000);
          }
        });
      }
    },
    /**
        * 清除定时器
        */
    clearTimer: function clearTimer() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    },
    /**
        * 获取当前截止时间
        */
    getNow: function getNow() {var
      from = this.data.from;
      return from ? from && (0, _index.parse)(from) : new Date();
    } },

  detached: function detached() {
    this.clearTimer();
  } });
});
require('wxcomponents/wux-weapp/timeago/index.js');
__wxRoute = 'wxcomponents/wux-weapp/timeline-item/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/timeline-item/index.js';

define('wxcomponents/wux-weapp/timeline-item/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames4 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  relations: {
    '../timeline/index': {
      type: 'parent' } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-timeline-item' },

    content: {
      type: String,
      value: '' },

    dotStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } },

    custom: {
      type: Boolean,
      value: false } },


  data: {
    isLast: false,
    isPending: false,
    pending: false,
    className: '',
    extStyle: '' },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,isLast = _this$data.isLast,pending = _this$data.pending,isPending = _this$data.isPending,custom = _this$data.custom;
      var wrap = (0, _classNames4.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--last"), isLast), _defineProperty(_classNames, "".concat(
      prefixCls, "--pending"), pending), _classNames));

      var tail = (0, _classNames4.default)("".concat(prefixCls, "__tail"), _defineProperty({}, "".concat(
      prefixCls, "__tail--pending"), isPending));

      var dot = (0, _classNames4.default)("".concat(prefixCls, "__dot"), _defineProperty({}, "".concat(
      prefixCls, "__dot--custom"), custom));

      var content = "".concat(prefixCls, "__content");

      return {
        wrap: wrap,
        tail: tail,
        dot: dot,
        content: content };

    } },

  methods: {
    updateIsLastElement: function updateIsLastElement(_ref) {var index = _ref.index,isLast = _ref.isLast,isPending = _ref.isPending,pending = _ref.pending,position = _ref.position;var
      prefixCls = this.data.prefixCls;
      var className = position === 'alternate' ? index % 2 === 0 ? "".concat(prefixCls, "--alternate ").concat(prefixCls, "--left") : "".concat(prefixCls, "--alternate ").concat(prefixCls, "--right") : position === 'right' ? "".concat(prefixCls, "--right") : '';
      this.setData({ isLast: isLast, isPending: isPending, pending: pending, className: className });
    } } });
});
require('wxcomponents/wux-weapp/timeline-item/index.js');
__wxRoute = 'wxcomponents/wux-weapp/timeline/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/timeline/index.js';

define('wxcomponents/wux-weapp/timeline/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _baseComponent.default)({
  relations: {
    '../timeline-item/index': {
      type: 'child',
      observer: function observer() {
        this.debounce(this.updateIsLastElement);
      } } },


  properties: {
    prefixCls: {
      type: String,
      value: 'wux-timeline' },

    pending: {
      type: Boolean,
      value: false },

    position: {
      type: String,
      value: 'left' } },


  methods: {
    updateIsLastElement: function updateIsLastElement() {
      var elements = this.getRelationNodes('../timeline-item/index');
      if (elements.length > 0) {
        var lastIndex = elements.length - 1;var _this$data =
        this.data,pending = _this$data.pending,position = _this$data.position;
        elements.forEach(function (element, index) {
          var isLast = pending ? index === Math.max(0, lastIndex - 1) : index === lastIndex;
          var isPending = pending && index === lastIndex;
          element.updateIsLastElement({
            index: index,
            isLast: isLast,
            isPending: isPending,
            pending: pending,
            position: position });

        });
      }
    } } });
});
require('wxcomponents/wux-weapp/timeline/index.js');
__wxRoute = 'wxcomponents/wux-weapp/toast/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/toast/index.js';

define('wxcomponents/wux-weapp/toast/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _index = require("../index");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = {
  prefixCls: 'wux-toast',
  classNames: 'wux-animate--fadeIn',
  type: 'default',
  duration: 1500,
  color: '#fff',
  text: '',
  icon: '',
  mask: true,
  transparent: true,
  success: function success() {} };


var iconTypes = {
  success: 'ios-checkmark-circle-outline',
  cancel: 'ios-close-circle-outline',
  forbidden: 'ios-alert',
  text: '',
  'default': '' };


var _toast = null;

(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,hasIcon = _this$data.icon;
      var wrap = (0, _classNames2.default)(prefixCls);
      var content = (0, _classNames2.default)("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(
      prefixCls, "__content--has-icon"), hasIcon));

      var icon = "".concat(prefixCls, "__icon");
      var text = "".concat(prefixCls, "__text");

      return {
        wrap: wrap,
        content: content,
        icon: icon,
        text: text };

    } },

  methods: {
    /**
              * 隐藏
              */
    hide: function hide() {
      if (this.removed) return false;
      this.removed = true;
      if (_toast) {
        clearTimeout(_toast.timeout);
        _toast = null;
      }
      this.$$setData({ in: false });
      this.$wuxBackdrop && this.$wuxBackdrop.release();
      if (typeof this.fns.success === 'function') {
        this.fns.success();
      }
    },
    /**
        * 显示
        */
    show: function show(opts) {var _this = this;
      if (typeof opts === 'string') {
        opts = Object.assign({}, {
          text: arguments[0] },
        arguments[1]);
      }

      var closePromise = new Promise(function (resolve) {
        var options = _this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts));
        var iconType = iconTypes[options.type] || options.icon;
        var callback = function callback() {
          _this.hide();
          return resolve(true);
        };

        options.icon = iconType;

        _this.removed = false;
        _this.$$setData(_objectSpread({ in: true }, options));
        _this.$wuxBackdrop && _this.$wuxBackdrop.retain();

        if (_toast) {
          clearTimeout(_toast.timeout);
          _toast = null;
        }

        _toast = {
          hide: _this.hide };


        _toast.timeout = setTimeout(callback, Math.max(0, options.duration));
      });

      var result = function result() {
        if (_toast) {
          _toast.hide.call(_this);
        }
      };

      result.then = function (resolve, reject) {return closePromise.then(resolve, reject);};
      result.promise = closePromise;

      return result;
    },
    /**
        * 成功提示
        */
    success: function success(opts) {
      if (typeof opts === 'string') {
        opts = Object.assign({}, {
          text: arguments[0] },
        arguments[1]);
      }

      return this.show(Object.assign({
        type: 'success' },
      opts));
    },
    /**
        * 警告提示
        */
    warning: function warning(opts) {
      if (typeof opts === 'string') {
        opts = Object.assign({}, {
          text: arguments[0] },
        arguments[1]);
      }

      return this.show(Object.assign({
        type: 'forbidden' },
      opts));
    },
    /**
        * 错误提示
        */
    error: function error(opts) {
      if (typeof opts === 'string') {
        opts = Object.assign({}, {
          text: arguments[0] },
        arguments[1]);
      }

      return this.show(Object.assign({
        type: 'cancel' },
      opts));
    },
    /**
        * 文本提示
        */
    info: function info(opts) {
      if (typeof opts === 'string') {
        opts = Object.assign({}, {
          text: arguments[0] },
        arguments[1]);
      }

      return this.show(Object.assign({
        type: 'text' },
      opts));
    } },

  created: function created() {
    if (this.data.mask) {
      this.$wuxBackdrop = (0, _index.$wuxBackdrop)('#wux-backdrop', this);
    }
  } });
});
require('wxcomponents/wux-weapp/toast/index.js');
__wxRoute = 'wxcomponents/wux-weapp/toptips/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/toptips/index.js';

define('wxcomponents/wux-weapp/toptips/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var defaults = {
  prefixCls: 'wux-toptips',
  classNames: 'wux-animate--slideInDown',
  icon: 'cancel',
  hidden: false,
  text: '',
  duration: 3000,
  success: function success() {} };


var _toptips = null;

(0, _baseComponent.default)({
  useFunc: true,
  data: defaults,
  computed: {
    classes: function classes() {var
      prefixCls = this.data.prefixCls;
      var ico = this.data.icon ? this.data.icon : 'cancel';
      var wrap = (0, _classNames2.default)(prefixCls);
      var content = (0, _classNames2.default)("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(
      prefixCls, "__content--").concat(ico), ico));

      var icon = "".concat(prefixCls, "__icon");

      return {
        wrap: wrap,
        content: content,
        icon: icon };

    } },

  methods: {
    /**
              * 隐藏
              */
    hide: function hide() {
      if (this.removed) return false;
      this.removed = true;
      if (_toptips) {
        clearTimeout(_toptips.timeout);
        _toptips = null;
      }
      this.$$setData({ in: false });
      if (typeof this.fns.success === 'function') {
        this.fns.success();
      }
    },
    /**
        * 显示
        */
    show: function show() {var _this = this;var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var closePromise = new Promise(function (resolve) {
        var options = _this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, opts));
        var callback = function callback() {
          _this.hide();
          return resolve(true);
        };
        _this.removed = false;
        _this.$$setData(_objectSpread({ in: true }, options));

        if (_toptips) {
          clearTimeout(_toptips.timeout);
          _toptips = null;
        }

        _toptips = {
          hide: _this.hide };


        _toptips.timeout = setTimeout(callback, options.duration);
      });

      var result = function result() {
        if (_toptips) {
          _toptips.hide.call(_this);
        }
      };

      result.then = function (resolve, reject) {return closePromise.then(resolve, reject);};
      result.promise = closePromise;

      return result;
    },
    success: function success() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.show(Object.assign({
        icon: 'success' },
      opts));
    },
    info: function info() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.show(Object.assign({
        icon: 'info' },
      opts));
    },
    warn: function warn() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.show(Object.assign({
        icon: 'warn' },
      opts));
    },
    error: function error() {var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.show(Object.assign({
        icon: 'cancel' },
      opts));
    } } });
});
require('wxcomponents/wux-weapp/toptips/index.js');
__wxRoute = 'wxcomponents/wux-weapp/upload/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/upload/index.js';

define('wxcomponents/wux-weapp/upload/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-upload' },

    max: {
      type: Number,
      value: -1,
      observer: 'updated' },

    count: {
      type: Number,
      value: 9,
      observer: 'updated' },

    defaultFileType: {
      type: String,
      value: 'image' },

    compressed: {
      type: Boolean,
      value: true },

    maxDuration: {
      type: Number,
      value: 60 },

    camera: {
      type: String,
      value: 'back' },

    sizeType: {
      type: Array,
      value: ['original', 'compressed'] },

    sourceType: {
      type: Array,
      value: ['album', 'camera'] },

    url: {
      type: String,
      value: '' },

    name: {
      type: String,
      value: 'file' },

    header: {
      type: Object,
      value: {} },

    formData: {
      type: Object,
      value: {} },

    uploaded: {
      type: Boolean,
      value: true },

    disabled: {
      type: Boolean,
      value: false },

    progress: {
      type: Boolean,
      value: false },

    listType: {
      type: String,
      value: 'text' },

    defaultFileList: {
      type: Array,
      value: [] },

    fileList: {
      type: Array,
      value: [],
      observer: function observer(newVal) {
        if (this.data.controlled) {
          this.setData({
            uploadFileList: newVal });

        }
      } },

    controlled: {
      type: Boolean,
      value: false },

    showUploadList: {
      type: Boolean,
      value: true },

    showRemoveIcon: {
      type: Boolean,
      value: true } },


  data: {
    uploadMax: -1,
    uploadCount: 9,
    uploadFileList: [],
    isVideo: false },

  computed: {
    classes: function classes() {var _classNames;var _this$data =
      this.data,prefixCls = _this$data.prefixCls,disabled = _this$data.disabled,listType = _this$data.listType;
      var wrap = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(
      prefixCls, "--").concat(listType), listType), _defineProperty(_classNames, "".concat(
      prefixCls, "--disabled"), disabled), _classNames));

      var files = "".concat(prefixCls, "__files");
      var file = "".concat(prefixCls, "__file");
      var thumb = "".concat(prefixCls, "__thumb");
      var remove = "".concat(prefixCls, "__remove");
      var select = "".concat(prefixCls, "__select");
      var button = "".concat(prefixCls, "__button");

      return {
        wrap: wrap,
        files: files,
        file: file,
        thumb: thumb,
        remove: remove,
        select: select,
        button: button };

    } },

  methods: {
    /**
              * 计算最多可以选择的图片张数
              */
    updated: function updated() {var _this$data2 =
      this.data,count = _this$data2.count,max = _this$data2.max;var _this$calcValue =
      this.calcValue(count, max),uploadMax = _this$calcValue.uploadMax,uploadCount = _this$calcValue.uploadCount;

      // 判断是否需要更新
      if (this.data.uploadMax !== uploadMax || this.data.uploadCount !== uploadCount) {
        this.setData({
          uploadMax: uploadMax,
          uploadCount: uploadCount });

      }
    },
    /**
        * 计算最多可以选择的图片张数
        */
    calcValue: function calcValue(count, max) {
      var realCount = parseInt(count);
      var uploadMax = parseInt(max) > -1 ? parseInt(max) : -1;
      var uploadCount = realCount;

      // 限制总数时
      if (uploadMax !== -1 && uploadMax <= 9 && realCount > uploadMax) {
        uploadCount = uploadMax;
      }

      return {
        uploadMax: uploadMax,
        uploadCount: uploadCount };

    },
    /**
        * 从本地相册选择图片或使用相机拍照
        */
    onSelect: function onSelect() {var _this = this;var _this$data3 =












      this.data,uploadCount = _this$data3.uploadCount,uploadMax = _this$data3.uploadMax,sizeType = _this$data3.sizeType,sourceType = _this$data3.sourceType,uploaded = _this$data3.uploaded,disabled = _this$data3.disabled,fileList = _this$data3.uploadFileList,isVideo = _this$data3.isVideo,compressed = _this$data3.compressed,maxDuration = _this$data3.maxDuration,camera = _this$data3.camera;var _this$calcValue2 =
      this.calcValue(uploadCount, uploadMax - fileList.length),count = _this$calcValue2.uploadCount;
      var success = function success(res) {
        res.tempFilePaths = res.tempFilePaths || [res.tempFilePath];
        _this.tempFilePaths = res.tempFilePaths.map(function (item) {return { url: item, uid: _this.getUid() };});
        _this.triggerEvent('before', _objectSpread({}, res, { fileList: fileList }));

        // 判断是否取消默认的上传行为
        if (uploaded) {
          _this.uploadFile();
        }
      };

      // disabled
      if (disabled) return;

      // choose video
      if (isVideo) {
        wx.chooseVideo({
          sourceType: sourceType,
          compressed: compressed,
          maxDuration: maxDuration,
          camera: camera,
          success: success });


        return;
      }

      // choose image
      wx.chooseImage({
        count: count,
        sizeType: sizeType,
        sourceType: sourceType,
        success: success });

    },
    /**
        * 上传文件改变时的回调函数
        * @param {Object} info 文件信息
        */
    onChange: function onChange() {var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.data.controlled) {
        this.setData({
          uploadFileList: info.fileList });

      }

      this.triggerEvent('change', info);
    },
    /**
        * 开始上传文件的回调函数
        * @param {Object} file 文件对象
        */
    onStart: function onStart(file) {
      var targetItem = _objectSpread({},
      file, {
        status: 'uploading' });


      this.onChange({
        file: targetItem,
        fileList: [].concat(_toConsumableArray(this.data.uploadFileList), [targetItem]) });

    },
    /**
        * 上传文件成功时的回调函数
        * @param {Object} file 文件对象
        * @param {Object} res 请求响应对象
        */
    onSuccess: function onSuccess(file, res) {
      var fileList = _toConsumableArray(this.data.uploadFileList);
      var index = fileList.map(function (item) {return item.uid;}).indexOf(file.uid);

      if (index !== -1) {
        var targetItem = _objectSpread({},
        file, {
          status: 'done',
          res: res });

        var info = {
          file: targetItem,
          fileList: fileList


          // replace
        };fileList.splice(index, 1, targetItem);

        this.triggerEvent('success', info);

        this.onChange(info);
      }
    },
    /**
        * 上传文件失败时的回调函数
        * @param {Object} file 文件对象
        * @param {Object} res 请求响应对象
        */
    onFail: function onFail(file, res) {
      var fileList = _toConsumableArray(this.data.uploadFileList);
      var index = fileList.map(function (item) {return item.uid;}).indexOf(file.uid);

      if (index !== -1) {
        var targetItem = _objectSpread({},
        file, {
          status: 'error',
          res: res });

        var info = {
          file: targetItem,
          fileList: fileList


          // replace
        };fileList.splice(index, 1, targetItem);

        this.triggerEvent('fail', info);

        this.onChange(info);
      }
    },
    /**
        * 监听上传进度变化的回调函数
        * @param {Object} file 文件对象
        * @param {Object} res 请求响应对象
        */
    onProgress: function onProgress(file, res) {
      var fileList = _toConsumableArray(this.data.uploadFileList);
      var index = fileList.map(function (item) {return item.uid;}).indexOf(file.uid);

      if (index !== -1) {
        var targetItem = _objectSpread({},
        file, {
          progress: res.progress,
          res: res });

        var info = {
          file: targetItem,
          fileList: fileList


          // replace
        };fileList.splice(index, 1, targetItem);

        this.triggerEvent('progress', info);

        this.onChange(info);
      }
    },
    /**
        * 上传文件，支持多图递归上传
        */
    uploadFile: function uploadFile() {var _this2 = this;
      if (!this.tempFilePaths.length) return;var _this$data4 =

      this.data,url = _this$data4.url,name = _this$data4.name,header = _this$data4.header,formData = _this$data4.formData,disabled = _this$data4.disabled,progress = _this$data4.progress;
      var file = this.tempFilePaths.shift();var
      uid = file.uid,filePath = file.url;

      if (!url || !filePath || disabled) return;

      this.onStart(file);

      this.uploadTask[uid] = wx.uploadFile({
        url: url,
        filePath: filePath,
        name: name,
        header: header,
        formData: formData,
        success: function success(res) {return _this2.onSuccess(file, res);},
        fail: function fail(res) {return _this2.onFail(file, res);},
        complete: function complete(res) {
          delete _this2.uploadTask[uid];
          _this2.triggerEvent('complete', res);
          _this2.uploadFile();
        } });


      // 判断是否监听上传进度变化
      if (progress) {
        this.uploadTask[uid].onProgressUpdate(function (res) {return _this2.onProgress(file, res);});
      }
    },
    /**
        * 点击文件时的回调函数
        * @param {Object} e 参数对象
        */
    onPreview: function onPreview(e) {
      this.triggerEvent('preview', _objectSpread({}, e.currentTarget.dataset, { fileList: this.data.uploadFileList }));
    },
    /**
        * 点击删除图标时的回调函数
        * @param {Object} e 参数对象
        */
    onRemove: function onRemove(e) {var
      file = e.currentTarget.dataset.file;
      var fileList = _toConsumableArray(this.data.uploadFileList);
      var index = fileList.map(function (item) {return item.uid;}).indexOf(file.uid);

      if (index !== -1) {
        var targetItem = _objectSpread({},
        file, {
          status: 'remove' });

        var info = {
          file: targetItem,
          fileList: fileList


          // delete
        };fileList.splice(index, 1);

        this.triggerEvent('remove', _objectSpread({}, e.currentTarget.dataset, info));

        this.onChange(info);
      }
    },
    /**
        * 中断上传任务
        * @param {String} uid 文件唯一标识
        */
    abort: function abort(uid) {var
      uploadTask = this.uploadTask;

      if (uid) {
        if (uploadTask[uid]) {
          uploadTask[uid].abort();
          delete uploadTask[uid];
        }
      } else {
        Object.keys(uploadTask).forEach(function (uid) {
          if (uploadTask[uid]) {
            uploadTask[uid].abort();
            delete uploadTask[uid];
          }
        });
      }
    } },

  /**
          * 组件生命周期函数，在组件实例进入页面节点树时执行
          */
  created: function created() {var _this3 = this;
    this.index = 0;
    this.createdAt = Date.now();
    this.getUid = function () {return "wux-upload--".concat(_this3.createdAt, "-").concat(++_this3.index);};
    this.uploadTask = {};
    this.tempFilePaths = [];
  },
  /**
      * 组件生命周期函数，在组件实例进入页面节点树时执
      */
  attached: function attached() {var _this$data5 =
    this.data,defaultFileType = _this$data5.defaultFileType,defaultFileList = _this$data5.defaultFileList,fileList = _this$data5.fileList,controlled = _this$data5.controlled;
    var uploadFileList = controlled ? fileList : defaultFileList;
    var isVideo = defaultFileType === 'video';

    this.setData({ uploadFileList: uploadFileList, isVideo: isVideo });
  },
  /**
      * 组件生命周期函数，在组件实例被从页面节点树移除时执行
      */
  detached: function detached() {
    this.abort();
  } });
});
require('wxcomponents/wux-weapp/upload/index.js');
__wxRoute = 'wxcomponents/wux-weapp/vcode/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/vcode/index.js';

define('wxcomponents/wux-weapp/vcode/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict"; /**
               * 获取范围内的随机数
               * @param {Number} min 最小值
               * @param {Number} max 最大值
               */
var randomNum = function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
    * 获取范围内的随机颜色值
    * @param {Number} min 最小值
    * @param {Number} max 最大值
    */
var randomColor = function randomColor(min, max) {
  var _r = randomNum(min, max);
  var _g = randomNum(min, max);
  var _b = randomNum(min, max);
  return "rgb(".concat(_r, ", ").concat(_g, ", ").concat(_b, ")");
};

/**
    * 创建 canvas 绘图上下文
    * @param {Object} ctx canvas 绘图上下文
    * @param {Object} opts 配置项
    * @param {String} opts.str 验证码范围
    * @param {Number} opts.num 验证码长度，默认值 6
    * @param {Number} opts.width 画布宽度，默认值 120
    * @param {Number} opts.height 画布高度，默认值 40
    * @param {String} opts.bgColor 画布背景色
    * @param {String} opts.fontColor 画布字体颜色
    * @param {Boolean} opts.hasPoint 是否显示干扰点，默认 true
    * @param {Boolean} opts.hasLine 是否显示干扰线，默认 true
    */
var render = function render(ctx) {var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var
  str = opts.str,num = opts.num,width = opts.width,height = opts.height,bgColor = opts.bgColor,fontColor = opts.fontColor,hasPoint = opts.hasPoint,hasLine = opts.hasLine;
  var vcode = '';

  if (typeof ctx.setTextBaseline === 'function') {
    ctx.setTextBaseline('bottom');
  }

  // 绘制矩形，并设置填充色
  ctx.setFillStyle(bgColor ? bgColor : randomColor(180, 240));
  ctx.fillRect(0, 0, width, height);

  // 绘制随机生成 n 位的验证码
  for (var i = 0; i < num; i++) {
    var x = (width - 10) / num * i + 10;
    var y = randomNum(height / 2, height);
    var deg = randomNum(-45, 45);
    var txt = str[randomNum(0, str.length)];
    var fontSize = randomNum(16, 40);
    var halfHeight = parseInt(height / 2);

    vcode += txt;
    ctx.setFillStyle(fontColor ? fontColor : randomColor(10, 100));
    ctx.setFontSize(fontSize > halfHeight ? halfHeight : fontSize);
    ctx.translate(x, y);
    ctx.rotate(deg * Math.PI / 180);
    ctx.fillText(txt, 0, 0);
    ctx.rotate(-deg * Math.PI / 180);
    ctx.translate(-x, -y);
  }

  // 绘制干扰线
  if (!!hasLine) {
    for (var _i = 0; _i < num; _i++) {
      ctx.setStrokeStyle(randomColor(90, 180));
      ctx.beginPath();
      ctx.moveTo(randomNum(0, width), randomNum(0, height));
      ctx.lineTo(randomNum(0, width), randomNum(0, height));
      ctx.stroke();
    }
  }

  // 绘制干扰点
  if (!!hasPoint) {
    for (var _i2 = 0; _i2 < num * 10; _i2++) {
      ctx.setFillStyle(randomColor(0, 255));
      ctx.beginPath();
      ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  return vcode;
};

Component({
  properties: {
    str: {
      type: String,
      value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },

    num: {
      type: Number,
      value: 6 },

    width: {
      type: Number,
      value: 120 },

    height: {
      type: Number,
      value: 40 },

    bgColor: {
      type: String,
      value: '' },

    fontColor: {
      type: String,
      value: '' },

    hasPoint: {
      type: Boolean,
      value: true },

    hasLine: {
      type: Boolean,
      value: true },

    canvasId: {
      type: String,
      value: 'wux-vcode' } },


  methods: {
    /**
              * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
              */
    draw: function draw() {var _this = this;var _this$data =
      this.data,width = _this$data.width,height = _this$data.height,canvasId = _this$data.canvasId;
      this.ctx = this.ctx || wx.createCanvasContext(canvasId, this);
      this.ctx.clearRect(0, 0, width, height);
      var value = render(this.ctx, this.data);
      this.ctx.draw(false, function () {return _this.triggerEvent('change', { value: value });});
    } },

  attached: function attached() {
    this.draw();
  },
  detached: function detached() {
    this.ctx = null;
  } });
});
require('wxcomponents/wux-weapp/vcode/index.js');
__wxRoute = 'wxcomponents/wux-weapp/white-space/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/white-space/index.js';

define('wxcomponents/wux-weapp/white-space/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-whitespace' },

    size: {
      type: String,
      value: 'default' },

    bodyStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } } },


  data: {
    extStyle: '' },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,size = _this$data.size;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--").concat(size), size));


      return {
        wrap: wrap };

    } },

  methods: {
    onTap: function onTap() {
      this.triggerEvent('click');
    } } });
});
require('wxcomponents/wux-weapp/white-space/index.js');
__wxRoute = 'wxcomponents/wux-weapp/wing-blank/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'wxcomponents/wux-weapp/wing-blank/index.js';

define('wxcomponents/wux-weapp/wing-blank/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent"));
var _classNames2 = _interopRequireDefault(require("../helpers/classNames"));
var _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: 'wux-wingblank' },

    size: {
      type: String,
      value: 'default' },

    bodyStyle: {
      type: [String, Object],
      value: '',
      observer: function observer(newVal) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(newVal) });

      } } },


  data: {
    extStyle: '' },

  computed: {
    classes: function classes() {var _this$data =
      this.data,prefixCls = _this$data.prefixCls,size = _this$data.size;
      var wrap = (0, _classNames2.default)(prefixCls, _defineProperty({}, "".concat(
      prefixCls, "--").concat(size), size));


      return {
        wrap: wrap };

    } } });
});
require('wxcomponents/wux-weapp/wing-blank/index.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0253":function(t,e,a){"use strict";var s=a("d64e"),i=a.n(s);i.a},"1cb1":function(t,e,a){"use strict";a.r(e);var s=a("6fb1"),i=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);e["default"]=i.a},"444c":function(t,e,a){"use strict";a("ce60");var s=o(a("b0ce")),i=o(a("cf93"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},"6d90":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"pub_wrap"},[a("view",{staticClass:"content"},[a("view",{staticClass:"search",attrs:{eventid:"26cf05aa-0"},on:{click:t.goSearch}},[a("image",{attrs:{src:"../../static/image/search.png"}}),a("text",[t._v("去你想去的地方")])]),a("view",{staticClass:"banner"},[a("swiper",{staticClass:"swiper",attrs:{circular:"","indicator-dots":!0,"indicator-color":"#ffffff","indicator-active-color":"#02a9f0",autoplay:!0,interval:3e3,duration:500}},t._l(t.banner,function(e,s){return a("swiper-item",{key:s,staticClass:"swiper-item",attrs:{eventid:"26cf05aa-1-"+s,mpcomid:"26cf05aa-0-"+s},on:{click:t.goToWhat}},[a("image",{staticClass:"img bannerImg",attrs:{mode:"aspectFill",src:e.photo}})])}))],1),a("view",{staticClass:"line"}),a("view",{staticClass:"main"},[a("view",{staticClass:"tbs"},[a("van-tabs",{attrs:{"custom-class":"gen-tab",border:!1,"nav-class":"nav-tab","tab-class":"tab-tab",active:t.tbsActive,sticky:"",eventid:"26cf05aa-8",mpcomid:"26cf05aa-13"},on:{change:t.handleTabsChange}},[a("van-tab",{attrs:{title:"人气景区",mpcomid:"26cf05aa-2"}},[a("scroll-view",{staticClass:"tbs-box"},[t._l(t.hotPage.scHotList,function(e,s){return a("view",{key:s,staticClass:"sc-list-item",attrs:{eventid:"26cf05aa-2-"+s},on:{click:function(a){t.getScDetail(e)}}},[a("view",{staticClass:"sc-list-img"},[a("image",{attrs:{src:e.photo,mode:"aspectFill","lazy-load":""}}),a("view",{staticClass:"sc-list-name"},[a("text",[t._v(t._s(e.scenicName))])]),a("view",{staticClass:"info"},[e.voiceTotal?a("text",[t._v("讲解："+t._s(e.voiceTotal)+"个景点")]):t._e(),e.narratorPrice?a("text",[t._v(t._s(e.narratorPrice)+"元/份")]):t._e()])]),e.popularityTotal?a("view",{staticClass:"pop"},[a("image",{attrs:{src:"../../static/image/hot.png","lazy-load":""}}),a("view",{staticClass:"pop-text"},[a("text",[t._v("人气："+t._s(e.popularityTotal))])])]):t._e(),e.address?a("view",{staticClass:"sc-list-site"},[a("image",{attrs:{src:"../../static/image/posi.png"}}),a("text",[t._v(t._s(e.address))])]):t._e(),a("view",{staticClass:"sc-list-info"},[a("text",[t._v(t._s(e.summary))])]),a("view",{staticClass:"sc-list-tag"},t._l(e.scenicTags,function(e,s){return a("text",{key:s},[t._v(t._s(e))])}))])}),a("wux-divider",{attrs:{mpcomid:"26cf05aa-1"}},[t._v(t._s(t.hotPage.rqStatus))])],2)],1),a("van-tab",{attrs:{title:"附近景区",mpcomid:"26cf05aa-10"}},[0!=t.nearbyTags.length&&t.locationAuth?a("view",{staticClass:"scroll-tags-box"},[a("scroll-view",{staticClass:"scroll-tags",attrs:{"scroll-x":""}},t._l(t.nearbyTags,function(e,s){return a("view",{key:e.id,staticClass:"scroll-tag",class:e.id==t.norPage.nearbyActive?"scroll-tag-active":"",attrs:{eventid:"26cf05aa-3-"+s},on:{click:function(a){t.setNearbyActive(e)}}},[a("text",[t._v(t._s(e.typeName))])])}))],1):t._e(),t.locationAuth?t._e():[a("view",{staticClass:"locationAuth"},[a("image",{attrs:{src:"../../static/image/loca.png",mode:""}}),a("text",[t._v("您还未授权地理定位")]),a("text",[t._v("无法获取附近景区")]),a("view",{staticClass:"btn",staticStyle:{position:"relative"},attrs:{"open-type":"openSetting"}},[t._v("去授权"),a("button",{staticStyle:{width:"100%",height:"100%",opacity:"0",position:"absolute",top:"0",left:"0"},attrs:{"open-type":"openSetting"}},[t._v("打开授权设置页")])],1)])],t.locationAuth?[a("view",{staticClass:"showMap"},[a("view",{staticClass:"map"},[a("map",{directives:[{name:"show",rawName:"v-show",value:"附近景区"==t.tbsActiveDataType,expression:"tbsActiveDataType == '附近景区'"}],staticStyle:{width:"100%",height:"100%"},attrs:{id:"map","show-location":"",latitude:t.center.latitude,markers:t.norPage.markers,longitude:t.center.longitude,eventid:"26cf05aa-5"},on:{tap:t.handleTabMap,markertap:t.handleScMark}},[t.norPage.scMarkObj.show?a("cover-view",{staticClass:"siteInfo",attrs:{eventid:"26cf05aa-4",mpcomid:"26cf05aa-8"},on:{click:t.goMapDetail}},[a("cover-image",{attrs:{src:t.norPage.scMarkObj.info["photo"],mpcomid:"26cf05aa-4"}}),a("cover-view",{staticClass:"siteTextInfo",attrs:{mpcomid:"26cf05aa-7"}},[a("cover-view",{staticClass:"siteInfo-name els",attrs:{mpcomid:"26cf05aa-5"}},[t._v(t._s(t.norPage.scMarkObj.info["scenicName"]))]),a("cover-view",{staticClass:"siteInfo-site",attrs:{mpcomid:"26cf05aa-6"}},[t._v("距您 "+t._s(t.norPage.scMarkObj.info["distance"])+" km | "+t._s(t.norPage.scMarkObj.info["address"]))])],1)],1):t._e()],1)],1)])]:t._e()],2),a("van-tab",{attrs:{title:"更多景区",mpcomid:"26cf05aa-12"}},[0!=t.nearbyTags.length?a("view",{staticClass:"scroll-tags-box"},[a("scroll-view",{staticClass:"scroll-tags",attrs:{"scroll-x":""}},t._l(t.nearbyTags,function(e,s){return a("view",{key:e.id,staticClass:"scroll-tag",class:e.id==t.morePage.nearbyActive?"scroll-tag-active":"",attrs:{eventid:"26cf05aa-6-"+s},on:{click:function(a){t.setNearbyActive2(e)}}},[a("text",[t._v(t._s(e.typeName))])])}))],1):t._e(),a("scroll-view",{staticClass:"tbs-box"},[t._l(t.morePage.moreSpotList,function(e,s){return a("view",{key:s,staticClass:"sc-list-item2",attrs:{eventid:"26cf05aa-7-"+s},on:{click:function(a){t.getScDetail(e)}}},[a("view",{staticClass:"sc-list-img"},[a("image",{staticClass:"bf",attrs:{src:"../../static/image/bf.png"}}),a("image",{attrs:{src:e.photo,mode:"aspectFill","lazy-load":""}}),a("view",{staticClass:"sc-list-name els"},[a("text",[t._v(t._s(e.scenicName))])]),a("view",{staticClass:"info"},[e.voiceTotal?a("text",[t._v("讲解："+t._s(e.voiceTotal)+"个景点")]):t._e(),a("text",[t._v("收听量："+t._s(e.listenTotal))]),e.narratorPrice?a("text",[t._v(t._s(e.narratorPrice)+"元/份")]):t._e()]),a("view",{staticClass:"sc-list-site"},[a("image",{attrs:{src:"../../static/image/posi.png"}}),a("text",{staticClass:"els"},[t._v(t._s(e.address))])]),a("view",{staticClass:"sc-list-info"},[a("text",[t._v(t._s(e.summary))]),a("view",{staticClass:"sc-list-info-opc"})]),a("view",{staticClass:"sc-list-tag"},t._l(e.scenicTags,function(e,s){return a("text",{key:s},[t._v(t._s(e))])}))])])}),a("wux-divider",{attrs:{mpcomid:"26cf05aa-11"}},[t._v(t._s(t.morePage.rqStatus))])],2)],1)],1)],1)]),a("view",{staticClass:"goToMe",attrs:{eventid:"26cf05aa-9"},on:{click:t.goToMe}},[a("image",{attrs:{src:"../../static/image/circle.png"}})])])])},i=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},"6fb1":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(a("a34a")),i=n(a("784f")),o=n(a("65d7"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,s,i,o,n){try{var r=t[o](n),c=r.value}catch(l){return void a(l)}r.done?e(c):Promise.resolve(c).then(s,i)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(s,i){var o=t.apply(e,a);function n(t){r(o,s,i,n,c,"next",t)}function c(t){r(o,s,i,n,c,"throw",t)}n(void 0)})}}var l=a("bec1"),u={data:function(){return{banner:[],locationAuth:!1,tbsActive:"人气景区",tbsActiveDataType:"人气景区",hotPage:{scHotList:[],pageNumber:1,pageSize:10,rqStatus:"上拉加载更多"},morePage:{moreSpotList:[],nearbyActive:"",pageNumber:1,pageSize:10,rqStatus:"上拉加载更多"},norPage:{nearbyActive:"",markers:[],scMarkObj:{show:!1,info:{}}},nearbyTags:[],center:{longitude:106.63,latitude:26.65},httpCount:0}},onPullDownRefresh:function(){this.banner=[],"人气景区"==this.tbsActiveDataType&&(this.hotPage={scHotList:[],pageNumber:1,pageSize:10,rqStatus:"上拉加载更多"},this.getBanner(),this.getScHotList()),"附近景区"==this.tbsActiveDataType&&(this.nearbyTags=[],this.norPage={nearbyActive:"",markers:[],scMarkObj:{show:!1,info:{}}},this.getScTypes(),this.getBanner(),this.getLocationAuth()),"更多景区"==this.tbsActiveDataType&&(this.nearbyTags=[],this.morePage={moreSpotList:[],nearbyActive:"",pageNumber:1,pageSize:10,rqStatus:"上拉加载更多"},this.getScTypes(),this.getBanner(),this.getMoreSpotList())},onReachBottom:function(){"人气景区"==this.tbsActiveDataType?(this.hotPage.pageNumber=this.hotPage.pageNumber+1,this.getScHotList()):"更多景区"==this.tbsActiveDataType&&(this.morePage.pageNumber=this.morePage.pageNumber+1,this.getMoreSpotList())},onLoad:function(){var e=c(s.default.mark(function e(){var a,i,o,n;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.isLogin();case 2:if(a=e.sent,a){e.next=8;break}return e.next=6,l.logining();case 6:i=e.sent,i||(o=getCurrentPages(),n=o[o.length-1].route.slice(o[o.length-1].route.lastIndexOf("/")+1),t.redirectTo({url:"../userInfoAuth/userInfoAuth?goBack="+n}));case 8:this.getBanner(),this.getScHotList(),this.getScTypes();case 11:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),onShow:function(){var t=c(s.default.mark(function t(){return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{setNearbyActive:function(t){this.norPage.markers=[],this.norPage.nearbyActive==t.id?this.norPage.nearbyActive="":this.norPage.nearbyActive=t.id,this.getScMarks()},setNearbyActive2:function(t){this.morePage.nearbyActive==t.id?this.morePage.nearbyActive="":(this.morePage.pageNumber=1,this.morePage.pageSize=10,this.morePage.nearbyActive=t.id),this.morePage.moreSpotList=[],this.morePage.rqStatus="上拉加载更多",this.getMoreSpotList()},getBanner:function(){var e=this;this.httpCount++,o.default.rq({url:i.default.banner}).then(function(a){e.httpCount--,e.httpCount<0?e.httpCount=0:0==e.httpCount&&t.stopPullDownRefresh(),200===a.code?e.banner=a.data:e.banner=[]})},getScTypes:function(){var e=this;this.httpCount++,o.default.rq({url:i.default.getScType}).then(function(a){e.httpCount--,e.httpCount<0?e.httpCount=0:0==e.httpCount&&t.stopPullDownRefresh(),200===a.code?e.nearbyTags=a.data:e.nearbyTags=[]})},getMoreSpotList:function(){var e=this;this.httpCount++,this.morePage.rqStatus="加载中...",o.default.rq({url:i.default.moreSpotList,data:{pageNumber:this.morePage.pageNumber,pageSize:this.morePage.pageSize,scenicTypeId:this.morePage.nearbyActive}}).then(function(a){e.httpCount--,e.httpCount<0?e.httpCount=0:0==e.httpCount&&t.stopPullDownRefresh(),200===a.code?(a.data.forEach(function(t){t["scenicTags"]=t.tag?t.tag.split(","):[],t["popularityTotal"]=l.handleNumber(t["popularityTotal"]),t["listenTotal"]=l.handleNumber(t["listenTotal"])}),e.morePage.moreSpotList=e.morePage.moreSpotList.concat(a.data),e.morePage.moreSpotList.length>=a.total?e.morePage.rqStatus="没有更多了":e.morePage.rqStatus="上拉加载更多"):(e.morePage.pageNumber>1&&(e.morePage.pageNumber=e.morePage.pageNumber-1),e.morePage.rqStatus="没有更多了")})},getScHotList:function(){var e=this;this.httpCount++,this.hotPage.rqStatus="加载中...",o.default.rq({url:i.default.scHotList,data:{pageNumber:this.hotPage.pageNumber,pageSize:this.hotPage.pageSize}}).then(function(a){e.httpCount--,e.httpCount<0?e.httpCount=0:0==e.httpCount&&t.stopPullDownRefresh(),200===a.code?(a.data.forEach(function(t){t["scenicTags"]=t.tag?t.tag.split(","):[],t["popularityTotal"]=l.handleNumber(t["popularityTotal"])}),e.hotPage.scHotList=e.hotPage.scHotList.concat(a.data),e.hotPage.scHotList.length>=a.total?e.hotPage.rqStatus="没有更多了":e.hotPage.rqStatus="上拉加载更多"):(e.hotPage.pageNumber>1&&(e.hotPage.pageNumber=e.hotPage.pageNumber-1),e.hotPage.rqStatus="没有更多了")})},goSearch:function(){t.navigateTo({url:"../search/search"})},goToMe:function(){t.navigateTo({url:"../my/my"})},handleTabsChange:function(t){var e=t.detail;this.tbsActiveDataType=e.title,"附近景区"==e.title&&(this.norPage={nearbyActive:"",markers:[],scMarkObj:{show:!1,info:{}}},this.getLocationAuth()),"更多景区"==e.title&&0==this.morePage.moreSpotList.length&&this.getMoreSpotList()},getLocationAuth:function(){var e=this;t.authorize({scope:"scope.userLocation",success:function(){e.locationAuth=!0,e.getlocation()},fail:function(){e.locationAuth=!1}})},getlocation:function(){var e=this;t.getLocation({success:function(a){e.center["longitude"]=a.longitude,e.center["latitude"]=a.latitude,e.getScMarks();var s=t.createSelectorQuery();s.select(".content").boundingClientRect(),s.selectViewport().scrollOffset(),s.exec(function(e){t.pageScrollTo({scrollTop:e[0].bottom,duration:300})})},fail:function(){}})},getScMarks:function(){var e=this,a=t.createMapContext("map",this);this.httpCount++,o.default.rq({url:i.default.getNearbySc,data:{pageNumber:1,pageSize:1e3,lat:this.center["latitude"],lon:this.center["longitude"],scenicTypeId:this.norPage.nearbyActive}}).then(function(s){if(e.httpCount--,e.httpCount<0?e.httpCount=0:0==e.httpCount&&t.stopPullDownRefresh(),200===s.code){var i=[];s.data.forEach(function(t){e.norPage.markers.push({id:t.id,latitude:t.lat,longitude:t.lon,iconPath:"../../static/image/xuanzhong.png",width:30,height:40,scenicName:t.scenicName,photo:t.photo,distance:(t.distance/1e3).toFixed(1),address:t.address}),i.push({latitude:t.lat,longitude:t.lon})}),i.push(e.center),a.includePoints({points:i,padding:[40,40,40,40]})}else e.norPage.markers=[]})},handleScMark:function(t){var e=this,a=t.mp;this.norPage.markers.forEach(function(t){t.id==a.markerId&&(e.norPage.scMarkObj={show:!0,info:t})})},handleTabMap:function(){this.norPage.scMarkObj={show:!1,info:{}}},goMapDetail:function(){t.navigateTo({url:"../scMapDetail/scMapDetail?id="+this.norPage.scMarkObj.info["id"]})},getScDetail:function(e){t.navigateTo({url:"../scMapDetail/scMapDetail?id="+e.id})},goToWhat:function(){t.navigateTo({url:"../banner/banner"})}}};e.default=u}).call(this,a("649d")["default"])},cf93:function(t,e,a){"use strict";a.r(e);var s=a("6d90"),i=a("1cb1");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("0253");var n=a("2877"),r=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports},d64e:function(t,e,a){}},[["444c","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"24fc":function(t,e,a){"use strict";var s=a("ef44"),i=a.n(s);i.a},"9d61":function(t,e,a){"use strict";a.r(e);var s=a("ad37"),i=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);e["default"]=i.a},ad37:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(a("a34a")),i=c(a("784f")),r=c(a("65d7"));function c(t){return t&&t.__esModule?t:{default:t}}function n(t,e,a,s,i,r,c){try{var n=t[r](c),o=n.value}catch(l){return void a(l)}n.done?e(o):Promise.resolve(o).then(s,i)}function o(t){return function(){var e=this,a=arguments;return new Promise(function(s,i){var r=t.apply(e,a);function c(t){n(r,s,i,c,o,"next",t)}function o(t){n(r,s,i,c,o,"throw",t)}c(void 0)})}}var l=a("bec1"),u={data:function(){return{searching:"noSearch",searchVal:"",hotTags:[],historyTags:[],searchResult:[],popData:[{popularity:99,photo:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",scenicName:"玉舍国家森林公园",site:"贵州省贵阳市花溪区青岩镇",summary:"具有东方威尼斯之称，夜景十分的漂亮",scenicTags:["#宗教场所","#历史景观","#红色旅游","#自然景观"],scCount:27,voicePrice:8}],pageSize:30,pageNumber:1,rqStatus:"上拉加载更多"}},onLoad:function(){var e=o(s.default.mark(function e(){var a,i,r,c,n;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.isLogin();case 2:if(a=e.sent,a){e.next=8;break}return e.next=6,l.logining();case 6:i=e.sent,i||(r=getCurrentPages(),c=r[r.length-1].route.slice(r[r.length-1].route.lastIndexOf("/")+1),t.redirectTo({url:"../userInfoAuth/userInfoAuth?goBack="+c}));case 8:this.getSeach(),n=t.getStorageSync("search_list"),n&&(this.historyTags=n);case 11:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),onShow:function(){var t=o(s.default.mark(function t(){return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{clickTag:function(t){this.searchVal=t,this.search()},search:function(){var e=this,a=t.getStorageSync("search_list");if(a){for(var s=0;s<a.length;s++)if(a[s]==this.searchVal){a.splice(s,1);break}a.push(this.searchVal),a.reverse(),a.length>10&&(a.length=10),a.reverse(),t.setStorageSync("search_list",a),this.historyTags=a}else t.setStorageSync("search_list",[this.searchVal]),this.historyTags=[this.searchVal];this.searching="searching";var c={pageSize:this.pageSize,pageNumber:this.pageNumber,scenicName:this.searchVal};r.default.rq({url:i.default.search,data:c}).then(function(t){e.searching="search",200===t.code&&(t.data.recommend.forEach(function(t){t["scenicTags"]=t.tag?t.tag.split(","):[],t["popularityTotal"]=l.handleNumber(t["popularityTotal"])}),t.data.scenic.forEach(function(t){t["scenicTags"]=t.tag?t.tag.split(","):[],t["popularityTotal"]=l.handleNumber(t["popularityTotal"])}),e.searchResult=t.data.scenic,e.popData=t.data.recommend)})},getSeach:function(){var t=this;r.default.rq({url:i.default.searchList}).then(function(e){200===e.code?t.hotTags=e.data:t.hotTags=[]})},clearHistory:function(){t.removeStorageSync("search_list"),this.historyTags=[]},handleSearch:function(){""!==this.searchVal&&this.search()},getScDetail:function(e){t.navigateTo({url:"../scMapDetail/scMapDetail?id="+e.id})}},watch:{searchVal:function(t){""===t&&(this.searching="noSearch",this.popData=[],this.searchResult=[])}}};e.default=u}).call(this,a("649d")["default"])},d8f4:function(t,e,a){"use strict";a("ce60");var s=r(a("b0ce")),i=r(a("da16"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},da16:function(t,e,a){"use strict";a.r(e);var s=a("ffa5"),i=a("9d61");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("24fc");var c=a("2877"),n=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=n.exports},ef44:function(t,e,a){},ffa5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"search"},[a("image",{attrs:{src:"../../static/image/search.png"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],staticClass:"uni-input",attrs:{"confirm-type":"search",placeholder:"去你想去的地方",eventid:"68014704-0"},domProps:{value:t.searchVal},on:{confirm:t.handleSearch,input:function(e){e.target.composing||(t.searchVal=e.target.value)}}})]),"search"==t.searching?[a("view",[a("view",{directives:[{name:"show",rawName:"v-show",value:0===t.searchResult.length,expression:"searchResult.length === 0"}],staticClass:"no-find"},[a("image",{attrs:{src:"../../static/image/nosc.png"}}),a("text",[t._v("抱歉，没有您想找的景区")]),a("text",[t._v("你可以看看其他景区")])]),a("view",{directives:[{name:"show",rawName:"v-show",value:0!=t.searchResult.length,expression:"searchResult.length != 0"}],staticClass:"tip search-result"},t._l(t.searchResult,function(e,s){return a("view",{key:s,staticClass:"sc-list-item",attrs:{eventid:"68014704-1-"+s},on:{click:function(a){t.getScDetail(e)}}},[a("view",{staticClass:"sc-list-img"},[a("image",{attrs:{src:e.photo,mode:"aspectFill","lazy-load":""}}),a("view",{staticClass:"sc-list-name"},[a("text",[t._v(t._s(e.scenicName))])]),a("view",{staticClass:"info"},[e.voiceTotal?a("text",[t._v("讲解："+t._s(e.voiceTotal)+"个景点")]):t._e(),e.narratorPrice?a("text",[t._v(t._s(e.narratorPrice)+"元/份")]):t._e()])]),e.popularityTotal?a("view",{staticClass:"pop"},[a("image",{attrs:{src:"../../static/image/hot.png","lazy-load":""}}),a("view",{staticClass:"pop-text"},[a("text",[t._v("人气："+t._s(e.popularityTotal))])])]):t._e(),e.address?a("view",{staticClass:"sc-list-site"},[a("image",{attrs:{src:"../../static/image/posi.png"}}),a("text",[t._v(t._s(e.address)+"Asdas奥术大师大所大所大所大所大所大所大所")])]):t._e(),a("view",{staticClass:"sc-list-info"},[a("text",[t._v(t._s(e.summary))])]),a("view",{staticClass:"sc-list-tag"},t._l(e.scenicTags,function(e,s){return a("text",{key:s},[t._v(t._s(e))])}))])})),a("view",{directives:[{name:"show",rawName:"v-show",value:0!=t.popData.length,expression:"popData.length != 0"}],staticClass:"tip"},[t._m(0),t._l(t.popData,function(e,s){return a("view",{key:s,staticClass:"sc-list-item",attrs:{eventid:"68014704-2-"+s},on:{click:function(a){t.getScDetail(e)}}},[a("view",{staticClass:"sc-list-img"},[a("image",{attrs:{src:e.photo,mode:"aspectFill","lazy-load":""}}),a("view",{staticClass:"sc-list-name"},[a("text",[t._v(t._s(e.scenicName))])]),a("view",{staticClass:"info"},[e.voiceTotal?a("text",[t._v("讲解："+t._s(e.voiceTotal)+"个景点")]):t._e(),e.narratorPrice?a("text",[t._v(t._s(e.narratorPrice)+"元/份")]):t._e()])]),e.popularityTotal?a("view",{staticClass:"pop"},[a("image",{attrs:{src:"../../static/image/hot.png","lazy-load":""}}),a("view",{staticClass:"pop-text"},[a("text",[t._v("人气："+t._s(e.popularityTotal))])])]):t._e(),e.address?a("view",{staticClass:"sc-list-site"},[a("image",{attrs:{src:"../../static/image/posi.png"}}),a("text",[t._v(t._s(e.address)+"Asdas奥术大师大所大所大所大所大所大所大所")])]):t._e(),a("view",{staticClass:"sc-list-info"},[a("text",[t._v(t._s(e.summary))])]),a("view",{staticClass:"sc-list-tag"},t._l(e.scenicTags,function(e,s){return a("text",{key:s},[t._v(t._s(e))])}))])})],2)])]:t._e(),"noSearch"==t.searching?[a("view",[a("view",{directives:[{name:"show",rawName:"v-show",value:0!=t.hotTags.length,expression:"hotTags.length != 0"}],staticClass:"card"},[t._m(1),a("view",{staticClass:"sc-list-tag"},t._l(t.hotTags,function(e,s){return a("text",{key:e.id,attrs:{eventid:"68014704-3-"+s},on:{click:function(a){t.clickTag(e.keyWords)}}},[t._v(t._s(e.keyWords))])}))]),a("view",{directives:[{name:"show",rawName:"v-show",value:0!=t.historyTags.length,expression:"historyTags.length != 0"}],staticClass:"card"},[a("view",{staticClass:"card-header"},[a("text",[t._v("历史搜索")]),a("image",{staticClass:"card-header-del",attrs:{src:"../../static/image/del.png",eventid:"68014704-4"},on:{click:t.clearHistory}})]),a("view",{staticClass:"sc-list-tag"},t._l(t.historyTags,function(e,s){return a("text",{key:s,attrs:{eventid:"68014704-5-"+s},on:{click:function(a){t.clickTag(e)}}},[t._v(t._s(e))])}))])])]:t._e()],2)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"tip-header"},[a("image",{attrs:{src:"../../static/image/tj.png"}}),a("text",[t._v("为您推荐的景区")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"card-header"},[a("text",[t._v("热门搜索")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})}},[["d8f4","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/userInfoAuth/userInfoAuth';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userInfoAuth/userInfoAuth.js';

define('pages/userInfoAuth/userInfoAuth.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userInfoAuth/userInfoAuth"],{"161c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("image",{attrs:{src:"../../static/image/authbg.png",mode:""}}),t._m(0),n("button",{staticClass:"btn",attrs:{"open-type":"getUserInfo",eventid:"3b489a38-0"},on:{getuserinfo:t.isUserInfo}},[t._v("授权登录")])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticStyle:{"text-align":"center"}},[n("text",[t._v("点击授权获取微信用户信息")])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"2a56":function(t,e,n){"use strict";n.r(e);var a=n("161c"),r=n("b09c");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("3307");var o=n("2877"),c=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"2faf":function(t,e,n){"use strict";n("ce60");var a=i(n("b0ce")),r=i(n("2a56"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(r.default))},3307:function(t,e,n){"use strict";var a=n("ab15"),r=n.n(a);r.a},8688:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));r(n("784f"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,o){try{var c=t[i](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(a,r)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var o=t.apply(e,n);function c(t){i(o,a,r,c,u,"next",t)}function u(t){i(o,a,r,c,u,"throw",t)}c(void 0)})}}var c=n("bec1"),u={data:function(){return{goBack:"",goBackWithParmas:{}}},onLoad:function(t){t.goBack&&(this.goBack=t.goBack),t.goBackWithParmas&&(this.goBackWithParmas=JSON.parse(t.goBackWithParmas))},onShow:function(){},methods:{isUserInfo:function(){var e=o(a.default.mark(function e(n){var r,i,o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n.detail.rawData){e.next=9;break}return t.showLoading({title:"登录中"}),e.next=4,c.registering();case 4:if(r=e.sent,r)if(0!=Object.keys(this.goBackWithParmas).length){for(o in i="?",this.goBackWithParmas)i+=o+"="+this.goBackWithParmas[o]+"&";i=i.substring(0,i.length),t.redirectTo({url:"../"+this.goBack+"/"+this.goBack+i})}else t.redirectTo({url:"../"+this.goBack+"/"+this.goBack});t.hideLoading(),e.next=10;break;case 9:t.showToast({title:"需要授权才能登录。",duration:2e3,icon:"none"});case 10:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()}};e.default=u}).call(this,n("649d")["default"])},ab15:function(t,e,n){},b09c:function(t,e,n){"use strict";n.r(e);var a=n("8688"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a}},[["2faf","common/runtime","common/vendor"]]]);
});
require('pages/userInfoAuth/userInfoAuth.js');
__wxRoute = 'pages/scMapDetail/scMapDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/scMapDetail/scMapDetail.js';

define('pages/scMapDetail/scMapDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scMapDetail/scMapDetail"],{"32c7":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"content"},[e("view",{directives:[{name:"show",rawName:"v-show",value:!t.showRead&&!t.drawerShow&&!t.markPayShow,expression:"!showRead && !drawerShow && !markPayShow"}],staticClass:"map"},[e("map",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"map","show-location":t.isUnloack,latitude:t.center.latitude,markers:t.markers,longitude:t.center.longitude,eventid:"15b6f680-7"},on:{markertap:t.handleScMark}},[t.player.playerShow?e("cover-view",{staticClass:"player-lock",attrs:{eventid:"15b6f680-0",mpcomid:"15b6f680-0"},on:{click:t.closePlayer}}):t._e(),t.isUnloack?t._e():e("cover-view",{staticClass:"lock",attrs:{mpcomid:"15b6f680-1"}}),!t.isUnloack&&t.detail.voiceTotal&&t.detail.narratorPrice?e("cover-view",{staticClass:"scInfo",attrs:{mpcomid:"15b6f680-2"}},[t._v("共"+t._s(t.detail.voiceTotal)+"个景点讲解 "+t._s(t.detail.narratorPrice)+"元/份")]):t._e(),e("cover-view",{staticClass:"drawerBtn",attrs:{src:"../../static/image/xz.png",eventid:"15b6f680-1",mpcomid:"15b6f680-3"},on:{click:t.showDrawer}},[t._v("景区详情")]),t.isUnloack?t._e():e("cover-view",{staticClass:"unlock",attrs:{eventid:"15b6f680-2",mpcomid:"15b6f680-4"},on:{click:t.showPay}},[t._v("尚未解锁该景区，去解锁")]),e("cover-view",{directives:[{name:"show",rawName:"v-show",value:t.drawerShow||t.payDialogShow,expression:"drawerShow || payDialogShow"}],staticClass:"cust-drawer-zz",attrs:{eventid:"15b6f680-3",mpcomid:"15b6f680-5"},on:{click:function(a){a.stopPropagation(),t.closeDrawer(a)}}}),t.payDialogShow?e("cover-view",{staticClass:"cust-pay",attrs:{mpcomid:"15b6f680-13"}},[e("cover-view",{staticClass:"cust-pay-title",attrs:{mpcomid:"15b6f680-6"}},[t._v("解锁提示")]),e("cover-view",{staticClass:"cust-pay-p",attrs:{mpcomid:"15b6f680-7"}},[t._v("你尚未解锁该景区语音讲解")]),e("cover-view",{staticClass:"cust-pay-p",attrs:{mpcomid:"15b6f680-8"}},[t._v("支付"+t._s(t.detail.narratorPrice)+"元后可解锁改景区")]),e("cover-view",{staticClass:"cust-pay-btn",attrs:{eventid:"15b6f680-4",mpcomid:"15b6f680-9"},on:{click:t.mackPay}},[t._v("去支付")]),e("cover-view",{staticClass:"cust-pay-xy",attrs:{eventid:"15b6f680-5",mpcomid:"15b6f680-12"},on:{click:t.read}},[e("cover-image",{attrs:{src:t.isXy?"../../static/image/sleing.png":"../../static/image/noslecing.png",mpcomid:"15b6f680-10"}}),e("cover-view",{attrs:{mpcomid:"15b6f680-11"}},[t._v("《用户购买协议》")])],1)],1):t._e(),t.player.playerShow?e("cover-view",{staticClass:"player",attrs:{mpcomid:"15b6f680-18"}},[e("cover-view",{staticClass:"player-top",attrs:{mpcomid:"15b6f680-16"}},[e("cover-image",{staticClass:"player-bg",attrs:{src:t.player.img,mpcomid:"15b6f680-14"}}),e("cover-image",{staticClass:"player-btn",attrs:{src:1===t.player["play"]?"../../static/image/play.png":"../../static/image/stop.png",eventid:"15b6f680-6",mpcomid:"15b6f680-15"},on:{click:t.audioPlay}})],1),e("cover-view",{staticClass:"player-bottom els",attrs:{mpcomid:"15b6f680-17"}},[t._v(t._s(t.player.spotName))])],1):t._e()],1)],1),e("van-popup",{attrs:{show:t.markPayShow,position:"right",mpcomid:"15b6f680-19"}},[e("view",{staticClass:"cust-drawer"},[e("form",{attrs:{"report-submit":!0,eventid:"15b6f680-9"},on:{submit:t.formSubmit}},[e("view",{staticClass:"btn-area"},[e("button",{attrs:{formType:"submit"}},[t._v("支付")]),e("button",{attrs:{eventid:"15b6f680-8"},on:{click:function(a){t.markPayShow=!1}}},[t._v("关闭")])],1)])],1)]),e("van-popup",{attrs:{show:t.drawerShow,position:"right",mpcomid:"15b6f680-20"}},[e("view",{staticClass:"cust-drawer"},[e("view",{staticClass:"introduce"},[e("image",{staticClass:"introduce-close",attrs:{src:"../../static/image/close2.png",mode:"",eventid:"15b6f680-10"},on:{click:function(a){t.drawerShow=!1}}}),e("view",{staticClass:"introduce-cap"},[e("view",{staticClass:"introduce-cap-icon"}),e("view",{staticClass:"introduce-cap-txt"},[t._v("景区介绍")])]),e("view",{staticClass:"introduce-txt"},[e("text",{staticClass:"introduce-txt-p"},[t._v(t._s(t.detail.introduction))])]),e("view",{staticClass:"introduce-cap"},[e("view",{staticClass:"introduce-cap-icon"}),e("view",{staticClass:"introduce-cap-txt"},[t._v("开放时间")])]),e("view",{staticClass:"introduce-txt"},[e("text",{staticClass:"introduce-txt-p"},[t._v(t._s(t.detail.openTime))])]),e("view",{staticClass:"introduce-cap"},[e("view",{staticClass:"introduce-cap-icon"}),e("view",{staticClass:"introduce-cap-txt"},[t._v("门票售价")])]),e("view",{staticClass:"introduce-txt"},[e("text",{staticClass:"introduce-txt-p"},[t._v(t._s(t.detail.ticketPrice)+"元/人")])]),t.detail.busRoutes?e("view",{staticClass:"introduce-cap"},[e("view",{staticClass:"introduce-cap-icon"}),e("view",{staticClass:"introduce-cap-txt"},[t._v("公交路线")])]):t._e(),t.detail.busRoutes?e("view",{staticClass:"introduce-txt"},[e("text",{staticClass:"introduce-txt-p"},[t._v(t._s(t.detail.busRoutes)+"啊实打实大所大所大所大所大所大所大所大所大所大所大")])]):t._e()])])]),e("van-popup",{attrs:{show:t.showRead,position:"right",mpcomid:"15b6f680-21"}},[e("view",{staticClass:"xy-container"},[e("view",{staticClass:"article"},[e("view",{staticClass:"bigCap"},[t._v("知四方用户服务协议")]),e("view",[e("view",{staticClass:"txt suojin"},[t._v("欢迎您注册并使用贵州紫光科技有限公司提供的服务，本协议由贵州紫光科技有限公司（以下简称我公司）与用户（指注册、登录、使用本服务的个人，以下简称为“您”）就知四方平台（以下简称“本产品”）提供的服务所订立的相关权利义务规范。请您认真阅读此服务协议的内容（特别是粗体、下划线标注内容）。如不同意此服务协议，请勿使用或注册该服务。用户在注册过程中勾选“我已认真阅读并接受用户服务协议”，并填写用户信息完成注册。即表示用户完全接受本协议中的全部内容，此后，用户不得以未阅读本服务条款内容作任何形式的抗辩。除非另有明确规定，本产品所推出的新功能、新服务，均无条件的使用本协议。")])]),e("view",{staticClass:"cap"},[t._v("一、用户注册")]),e("view",[e("text",{staticClass:"txt"},[t._v("1、用户使用本产品的前提是认真阅读本协议并通过注册。用户注册是指用户登录本平台，按用户注册流程要求填写相关信息并同意接受本服务协议的过程。")])]),e("view",[e("text",{staticClass:"txt"},[t._v("2、使用该服务的用户必须是完全民事行为能力人，具备相应的权利能力和行为能力，能够独立承担法律责任。限制民事行为能力人和无民事行为能力人不能注册或使用该服务。如经发现，本产品有权立即停止与该用户的交易、注销该用户账户。")])]),e("view",[e("text",{staticClass:"txt"},[t._v("3、用户在注册时需要完善个人资料，保证遵守法律法规、社会主义制度、国家利益、公民合法权益、公共秩序、社会道德风尚和信息真实，不得在资料中出现违法和不良信息。若用户注册资料存在违法和不良信息的，本平台有权采取通知限期改正、暂停使用、注销用户、向政府主管部门报告等措施。")])]),e("view",[e("text",{staticClass:"txt"},[t._v("4、用户应提供真实有效的个人信息并进行实名认证，未经实名认证，不能使用本产品服务。")])]),e("view",{staticClass:"cap"},[t._v("二、账号和密码安全")]),e("view",[e("text",{staticClass:"txt"},[t._v("1、用户应负责保管其账号和密码，对该账户下的所有活动和时间负全部责任。如果用户未保管好自己的账号和密码而对用户本人、本产品或第三方造成损害，用户承担全部责任。")])]),e("view",[e("text",{staticClass:"txt"},[t._v("2、用户同意若发现任何非法使用用户账号或安全漏洞的情况，应立即通知我们。")])]),e("view",{staticClass:"cap"},[t._v("三、账号和密码安全")]),e("view",[e("text",{staticClass:"txt"},[t._v("1、本服务的具体内容由本产品根据实际情况提供，包括但不限于用户使用本产品的景点介绍、语音讲解等。本产品可以对提供的服务予以变更，且本产品提供的服务内容可随时变更，用户将会受到关于服务变更的通知。")])]),e("view",[e("text",{staticClass:"txt"},[t._v("2、除非本协议另有其他明示规定，本公司推出的新产品、新功能、新服务，均受到本协议条款之规范。")])]),e("view",{staticClass:"cap"},[t._v("四、账号和密码安全")]),e("view",[e("text",{staticClass:"txt"},[t._v("1、如系统发生故障影响到用户服务的正常运行，我公司承诺及时处理进行修复。但用户因此而产生的损失，本公司不承担责任。")])]),e("view",[e("text",{staticClass:"txt"},[t._v("2、涉及到互联网服务，可能会受到各个环节不稳定因素的影响，存在因不可抗力、计算机病毒、黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何网络、技术、通信线路等原因造成的服务中断或不能满足用户要求的风险，用户须自行承担以上风险，本公司不承担任何责任。")])]),e("view",[e("text",{staticClass:"txt"},[t._v("3、用户明确同意使用本产品服务的风险由用户个人承担。本公司明确表示不提供任何类型的担保，不论是明确的或隐含的。用户理解并接受由其承担系统受损、资料丢失以及其它任何风险。")])]),e("view",[e("view",{staticClass:"txt"},[t._v("4、用户享有言论自由权利，但用户在本产品中不得发表含有如下内容的言论，否则本产品有权删除用户所发言论，并有权采取停止用户服务、拒绝用户参加所有抢宝商品项目等措施："),e("view",[e("text",{staticClass:"txt"},[t._v("（1）反对宪法所确定的基本原则，煽动、抗拒、破坏宪法和法律、行政法规的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（2）煽动颠覆国家政权，推翻社会主义制度，煽动、分裂国家，破坏国家统一的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（3）损害国家荣誉和利益的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（4）煽动民族仇恨、民族歧视，破坏民族团结的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（5）任何包含对种族、性别、宗教、地域内容等歧视的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（6）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（7）宣扬封建迷信、邪教、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（8）公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（9）损害国家机关信誉的；")])]),e("view",[e("text",{staticClass:"txt"},[t._v("（10）其他违反宪法和法律行政法规的。")])])])]),e("view",{staticClass:"cap"},[t._v("五、服务条款的变更与修订")]),e("view",[e("text",{staticClass:"txt"},[t._v("我公司保留在任何时候修改本协议条款的权利，且无需另行通知。我公司修改协议条款后，如果您不接受修改后的条款，请立即停止使用本产品提供的服务，继续使用本产品提供的服务将被视为接受修改后的协议。用户在享受该服务时，应当及时查阅了解修改的内容，并自觉遵守本服务协议。")])]),e("view",{staticClass:"btns"},[e("button",{attrs:{size:"mini",plain:"",type:"primary",eventid:"15b6f680-11"},on:{click:function(a){t.agree("no")}}},[t._v("拒绝")]),e("button",{attrs:{size:"mini",type:"primary",eventid:"15b6f680-12"},on:{click:function(a){t.agree("yes")}}},[t._v("同意")])],1)])])])],1)},s=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return s})},3699:function(t,a,e){"use strict";var i=e("fd08"),s=e.n(i);s.a},8050:function(t,a,e){"use strict";e.r(a);var i=e("32c7"),s=e("9e72");for(var o in s)"default"!==o&&function(t){e.d(a,t,function(){return s[t]})}(o);e("3699");var c=e("2877"),r=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);a["default"]=r.exports},"9e72":function(t,a,e){"use strict";e.r(a);var i=e("b99b"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=s.a},b99b:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=c(e("a34a")),s=c(e("784f")),o=c(e("65d7"));function c(t){return t&&t.__esModule?t:{default:t}}function r(t,a,e,i,s,o,c){try{var r=t[o](c),n=r.value}catch(l){return void e(l)}r.done?a(n):Promise.resolve(n).then(i,s)}function n(t){return function(){var a=this,e=arguments;return new Promise(function(i,s){var o=t.apply(a,e);function c(t){r(o,i,s,c,n,"next",t)}function n(t){r(o,i,s,c,n,"throw",t)}c(void 0)})}}var l=e("bec1"),d={data:function(){return{isUnloack:!1,mapId:"",center:{longitude:106.63,latitude:26.65},payDialogShow:!1,drawerShow:!1,isXy:!0,markers:[],showRead:!1,detail:{},markPayShow:!1,player:{id:"",playerShow:!1,play:1,img:"",spotName:"",voiceUrl:"",voiceName:""},audio:t.getBackgroundAudioManager()}},onLoad:function(){var a=n(i.default.mark(function a(e){var s,o,c,r;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l.isLogin();case 2:if(s=a.sent,s){a.next=8;break}return a.next=6,l.logining();case 6:o=a.sent,o||(c=getCurrentPages(),r=c[c.length-1].route.slice(c[c.length-1].route.lastIndexOf("/")+1),t.redirectTo({url:"../userInfoAuth/userInfoAuth?goBack="+r}));case 8:this.mapId=e.id,this.mapId&&this.getDetail();case 10:case"end":return a.stop()}},a,this)}));function e(t){return a.apply(this,arguments)}return e}(),onShow:function(){var t=n(i.default.mark(function t(){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),onUnload:function(){this.audio.stop(),this.player={id:"",playerShow:!1,play:1,img:"",spotName:"",voiceUrl:"",voiceName:""}},onHide:function(){},methods:{audioPlay:function(){var a=this;if(console.log(this.audio.paused),!1===this.audio.paused)return this.audio.stop(),void(this.player["play"]=1);void 0!==this.audio.paused&&!0!==this.audio.paused||(this.audio.src=this.player.voiceUrl,this.audio.title=this.player.voiceName,this.audio.play(),this.audio.onPlay(function(){a.player["play"]=2}),this.audio.onError(function(e){t.showToast({title:"播放错误",icon:"none"}),a.player["play"]=1}),this.audio.onEnded(function(t){a.player["play"]=1}))},closePlayer:function(){this.player["playerShow"]=!1,this.audio.stop(),this.player={id:"",playerShow:!1,play:1,img:"",spotName:"",voiceUrl:"",voiceName:""}},read:function(){this.isXy=!0,this.showRead=!0},getDetail:function(){var a=this,e=t.createMapContext("map",this);this.markers=[],o.default.rq({url:s.default.moreSpotList+"/"+this.mapId}).then(function(i){if(200===i.code){a.detail=i.data,a.isUnloack=!!a.detail.orderId,a.center["longitude"]=i.data.lon,a.center["latitude"]=i.data.lat;var s=[{latitude:i.data.lat,longitude:i.data.lon}];i.data.scenicSpotList.forEach(function(t){a.markers.push({latitude:t.lat,longitude:t.lon,id:t.id,iconPath:"../../static/image/spot.png",width:40,height:48,photo:t.photo,spotName:t.spotName,label:{content:t.spotName,anchorX:-16*(t.spotName.length/2).toFixed(2),fontSize:12,borderWidth:1,borderColor:"#019ce4",padding:4,bgColor:"#fff",color:"#019ce4",borderRadius:10,textAlign:"center"}}),s.push({latitude:t.lat,longitude:t.lon})}),e.includePoints({points:s,padding:[40,40,40,40]})}else t.showToast({title:i.message,icon:"none"}),a.isUnloack=!1,a.detail={}})},showDrawer:function(){this.drawerShow=!0},showPay:function(){this.payDialogShow=!0},closeDrawer:function(){this.drawerShow=!1,this.payDialogShow=!1},handleScMark:function(a){var e=this,i=a.mp;o.default.rq({url:s.default.voice,data:{scenicId:this.detail.id,spotId:i.markerId,narratorId:this.detail.narratorId},header:{"content-type":"application/x-www-form-urlencoded",token:t.getStorageSync("login-token")},goBackWithParmas:{id:this.mapId},loading:!0}).then(function(a){if(200===a.code){if(!a.data)return void t.showToast({title:"没有语音",icon:"none"});e.player["id"]=a.data.id,e.player["voiceUrl"]=a.data.voiceUrl,e.player["voiceName"]=a.data.voiceName,e.markers.forEach(function(t){t.id===i.markerId&&(e.player["img"]=t.photo,e.player["spotName"]=t.spotName)}),e.player["playerShow"]=!0}else t.showToast({title:a.message,icon:"none"})})},agree:function(t){this.isXy="yes"==t,this.showRead=!1},mackPay:function(){this.isXy?(this.payDialogShow=!1,this.markPayShow=!0):t.showToast({title:"请阅读协议并同意",icon:"none"})},formSubmit:function(a){var e=this,i={formId:a.detail.formId,narratorId:this.detail.narratorId,scenicId:this.detail.id};t.showLoading({title:"生成订单中"}),o.default.rq({url:s.default.localCreateOrder,method:"POST",data:i}).then(function(a){t.hideLoading(),200===a.code?(t.showLoading({title:"支付中"}),o.default.rq({url:s.default.payOrder,method:"POST",data:a.data}).then(function(a){t.hideLoading(),200===a.code?(t.showToast({title:"支付成功",icon:"none"}),e.markPayShow=!1,e.payDialogShow=!1,e.getDetail()):t.showToast({title:"支付失败",icon:"none"})})):t.showToast({title:a.message,icon:"none"})})},requestOrder:function(){var a={};t.request({url:s.default.localCreateOrder,method:"POST",data:a,header:{"content-type":"application/x-www-form-urlencoded",token:t.getStorageSync("login-token")},success:function(a){if(a.data.code,214===a.data.code){t.showToast({title:"登录过期，请重新登录",duration:2e3,icon:"none"});var e=getCurrentPages(),i=e[e.length-1].route.slice(e[e.length-1].route.lastIndexOf("/")+1);t.navigateTo({url:"../userInfoAuth/userInfoAuth?goBack="+i})}},fail:function(t){}})}},watch:{payDialogShow:function(t){!0===t&&(this.isXy=!0)}}};a.default=d}).call(this,e("649d")["default"])},d78e:function(t,a,e){"use strict";e("ce60");var i=o(e("b0ce")),s=o(e("8050"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},fd08:function(t,a,e){}},[["d78e","common/runtime","common/vendor"]]]);
});
require('pages/scMapDetail/scMapDetail.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0353":function(t,e,a){"use strict";a.r(e);var n=a("ccba"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},4818:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"nickname"},[a("view",{directives:[{name:"show",rawName:"v-show",value:t.role,expression:"role"}],staticClass:"tou"},[a("image",{attrs:{src:t.userInfo.avatarUrl}})]),t.role?t._e():a("view",{staticClass:"getRole"},[a("button",{staticStyle:{width:"100%",height:"100%",opacity:"0",position:"absolute",top:"0",left:"0"},attrs:{"open-type":"getUserInfo",lang:"zh_CN",eventid:"1bd58df8-0"},on:{getuserinfo:t.onGotUserInfo}}),a("image",{attrs:{src:"../../static/image/getTou.png"}})],1),a("text",{directives:[{name:"show",rawName:"v-show",value:t.role,expression:"role"}]},[t._v(t._s(t.userInfo.nickName))]),a("view",{staticClass:"concat",attrs:{eventid:"1bd58df8-1"},on:{click:t.goTel}},[a("image",{attrs:{src:"../../static/image/ipone.png"}}),a("text",[t._v("联系我们")])])]),a("view",{staticClass:"tip"},[t._m(0),0==t.popData.length?a("view",{staticClass:"noloack"},[a("image",{attrs:{src:"../../static/image/jqjs.png",mode:""}}),a("text",[t._v("目前还没有解锁景区")])]):t._e(),t._l(t.popData,function(e,n){return a("view",{key:n,staticClass:"sc-list-item2",attrs:{eventid:"1bd58df8-2-"+n},on:{click:function(a){t.getScDetail(e)}}},[a("view",{staticClass:"sc-list-img"},[a("image",{staticClass:"bf",attrs:{src:"../../static/image/bf.png"}}),a("image",{attrs:{src:e.photo,mode:"aspectFill","lazy-load":""}}),a("view",{staticClass:"sc-list-name els"},[a("text",[t._v(t._s(e.scenicName))])]),a("view",{staticClass:"info"},[e.voiceTotal?a("text",[t._v("讲解："+t._s(e.voiceTotal)+"个景点")]):t._e(),a("text",[t._v("收听量："+t._s(e.listenTotal))]),e.narratorPrice?a("text",[t._v(t._s(e.narratorPrice)+"元/份")]):t._e()]),a("view",{staticClass:"sc-list-site"},[a("image",{attrs:{src:"../../static/image/posi.png"}}),a("text",{staticClass:"els"},[t._v(t._s(e.address))])]),a("view",{staticClass:"sc-list-info"},[a("text",[t._v(t._s(e.summary))]),a("view",{staticClass:"sc-list-info-opc"})]),a("view",{staticClass:"sc-list-tag"},t._l(e.scenicTags,function(e,n){return a("text",{key:n},[t._v(t._s(e))])}))])])})],2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"tip-header"},[a("image",{attrs:{src:"../../static/image/lock.png"}}),a("text",[t._v("已解锁景区")])])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"89c5":function(t,e,a){"use strict";var n=a("9e59"),s=a.n(n);s.a},"9e59":function(t,e,a){},a05e:function(t,e,a){"use strict";a.r(e);var n=a("4818"),s=a("0353");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("89c5");var r=a("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},ccba:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("a34a")),s=r(a("784f")),i=r(a("65d7"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,a,n,s,i,r){try{var o=t[i](r),c=o.value}catch(u){return void a(u)}o.done?e(c):Promise.resolve(c).then(n,s)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(n,s){var i=t.apply(e,a);function r(t){o(i,n,s,r,c,"next",t)}function c(t){o(i,n,s,r,c,"throw",t)}r(void 0)})}}var u=a("bec1"),l={data:function(){return{popData:[],userInfo:{},role:!0}},onPullDownRefresh:function(){this.getData()},onLoad:function(){var e=c(n.default.mark(function e(){var a,s,i,r,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.isLogin();case 2:if(a=e.sent,a){e.next=8;break}return e.next=6,u.logining();case 6:s=e.sent,s||(i=getCurrentPages(),r=i[i.length-1].route.slice(i[i.length-1].route.lastIndexOf("/")+1),t.redirectTo({url:"../userInfoAuth/userInfoAuth?goBack="+r}));case 8:this.getData(),o=this,t.getUserInfo({success:function(t){o.userInfo=t.userInfo},fail:function(t){console.log(t,"err")}});case 11:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),onShow:function(){var e=c(n.default.mark(function e(){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this,t.getSetting({success:function(t){t.authSetting["scope.userInfo"]?a.role=!0:a.role=!1},fail:function(){a.role=!1}});case 2:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),methods:{goTel:function(){t.navigateTo({url:"../tel/tel"})},getData:function(){var e=this,a={pageNumber:1,pageSize:1e4};i.default.rq({url:s.default.unlockScenic,data:a,loading:!0}).then(function(a){t.stopPullDownRefresh(),200===a.code?e.popData=a.data:e.popData=[]})},getScDetail:function(e){t.navigateTo({url:"../scMapDetail/scMapDetail?id="+e.id})},onGotUserInfo:function(t){t.detail.userInfo?(this.userInfo=t.detail.userInfo,this.role=!0):this.role=!1}},watch:{}};e.default=l}).call(this,a("649d")["default"])},da7e:function(t,e,a){"use strict";a("ce60");var n=i(a("b0ce")),s=i(a("a05e"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))}},[["da7e","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
__wxRoute = 'pages/tel/tel';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tel/tel.js';

define('pages/tel/tel.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tel/tel"],{"0045":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},onLoad:function(){},onShow:function(){},methods:{},watch:{}};e.default=a},"06bd":function(t,e,n){"use strict";n.r(e);var a=n("0045"),c=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=c.a},"802a":function(t,e,n){},"9c39":function(t,e,n){"use strict";var a=n("802a"),c=n.n(a);c.a},bbd7:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"card"},[n("image",{attrs:{src:"../../static/image/kf.png",mode:""}}),n("view",{staticClass:"card-right"},[n("text",[t._v("微信客服：点击可直接联系知四方客服")])])]),n("view",{staticClass:"card"},[n("image",{attrs:{src:"../../static/image/kf2.png",mode:""}}),n("view",{staticClass:"card-right"},[n("text",[t._v("客服热线：0854-235498787")]),n("text",[t._v("工作时间：9：00-17：00")])])])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c})},bd4e:function(t,e,n){"use strict";n.r(e);var a=n("bbd7"),c=n("06bd");for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);n("9c39");var u=n("2877"),i=Object(u["a"])(c["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},f0d5:function(t,e,n){"use strict";n("ce60");var a=r(n("b0ce")),c=r(n("bd4e"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(c.default))}},[["f0d5","common/runtime","common/vendor"]]]);
});
require('pages/tel/tel.js');
__wxRoute = 'pages/banner/banner';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/banner/banner.js';

define('pages/banner/banner.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/banner/banner"],{"0748":function(t,n,e){"use strict";e.r(n);var a=e("6e61"),u=e("5465");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("5ae6");var c=e("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},2444:function(t,n,e){"use strict";e("ce60");var a=r(e("b0ce")),u=r(e("0748"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(u.default))},5465:function(t,n,e){"use strict";e.r(n);var a=e("b720"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=u.a},"5ae6":function(t,n,e){"use strict";var a=e("a541"),u=e.n(a);u.a},"6e61":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[e("image",{attrs:{src:"../../static/image/whatzsf.jpg",mode:"scaleToFill"}})])}];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},a541:function(t,n,e){},b720:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},onLoad:function(){},onShow:function(){},methods:{},watch:{}};n.default=a}},[["2444","common/runtime","common/vendor"]]]);
});
require('pages/banner/banner.js');

