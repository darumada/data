(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{h86J:function(e,t,n){"use strict";n.r(t),n.d(t,"AmountModule",(function(){return h}));var c=n("SVse"),o=n("s7LF"),r=n("iInd"),s=n("e1JD"),a=n("mrSG"),u=n("zPnM"),b=n("PZpb"),i=n("8Y7J");let p=(()=>{let e=class extends b.b{setPrice(e){this.setState(parseFloat(e))}};return e.\u0275fac=function(t){return l(t||e)},e.\u0275prov=i.Mb({token:e,factory:e.\u0275fac}),e=Object(a.a)([Object(u.g)(),Object(s.e)({name:"price",defaults:10})],e),e})();const l=i.Yb(p);let d=(()=>{let e=class extends b.b{constructor(e){super(),this.price=e}get sum(){return this.snapshot+this.price.snapshot}setAmount(e){this.setState(parseFloat(e))}};return e.\u0275fac=function(t){return new(t||e)(i.ac(p))},e.\u0275prov=i.Mb({token:e,factory:e.\u0275fac}),Object(a.a)([Object(u.a)(),Object(a.b)("design:type",Number),Object(a.b)("design:paramtypes",[])],e.prototype,"sum",null),e=Object(a.a)([Object(u.g)(),Object(s.e)({name:"amount",defaults:20})],e),e})(),m=(()=>{class e{constructor(e,t){this.price=e,this.amount=t}}return e.\u0275fac=function(t){return new(t||e)(i.Qb(p),i.Qb(d))},e.\u0275cmp=i.Kb({type:e,selectors:[["amount"]],decls:15,vars:3,consts:[["placeholder","Price",3,"ngModel","ngModelChange"],["placeholder","Amount",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(i.Wb(0,"label"),i.wc(1,"\n    "),i.Wb(2,"input",0),i.cc("ngModelChange",(function(e){return t.price.setPrice(e)})),i.Vb(),i.wc(3,"\n"),i.Vb(),i.wc(4,"\n"),i.Rb(5,"br"),i.wc(6,"\n\n"),i.Wb(7,"label"),i.wc(8,"\n    "),i.Wb(9,"input",1),i.cc("ngModelChange",(function(e){return t.amount.setAmount(e)})),i.Vb(),i.wc(10,"\n"),i.Vb(),i.wc(11,"\n\n"),i.Wb(12,"p"),i.wc(13),i.Vb(),i.wc(14,"\n")),2&e&&(i.Gb(2),i.jc("ngModel",t.price.snapshot),i.Gb(7),i.jc("ngModel",t.amount.snapshot),i.Gb(4),i.yc("Sum: ",t.amount.sum,""))},directives:[o.a,o.g,o.j],encapsulation:2,changeDetection:0}),e})(),h=(()=>{class e{}return e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({factory:function(t){return new(t||e)},imports:[[o.e,c.c,s.c.forFeature([d,p]),r.b.forChild([{path:"",component:m}])]]}),e})()}}]);