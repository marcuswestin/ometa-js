{BSNullOptimization=OMeta.delegated({
"setHelped":function(){var $elf=this;return ($elf["_didSomething"]=true)},
"helped":function(){var $elf=this;return $elf._pred($elf["_didSomething"])},
"trans":function(){var $elf=this,t,ans;return (function(){$elf._form(function(){return (function(){t=$elf._apply("anything");$elf._pred($elf.hasProperty(t));return ans=$elf._applyWithArgs("apply",t)})()});return ans})()},
"optimize":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");$elf._apply("helped");return x})()},
"App":function(){var $elf=this,rule,args;return (function(){rule=$elf._apply("anything");args=$elf._many(function(){return $elf._apply("anything")});return ["App",rule].concat(args)})()},
"Act":function(){var $elf=this,expr;return (function(){expr=$elf._apply("anything");return ["Act",expr]})()},
"Pred":function(){var $elf=this,expr;return (function(){expr=$elf._apply("anything");return ["Pred",expr]})()},
"Or":function(){var $elf=this,xs;return (function(){xs=$elf._many(function(){return $elf._apply("trans")});return ["Or"].concat(xs)})()},
"XOr":function(){var $elf=this,xs;return (function(){xs=$elf._many(function(){return $elf._apply("trans")});return ["XOr"].concat(xs)})()},
"And":function(){var $elf=this,xs;return (function(){xs=$elf._many(function(){return $elf._apply("trans")});return ["And"].concat(xs)})()},
"Many":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Many",x]})()},
"Many1":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Many1",x]})()},
"Set":function(){var $elf=this,n,v;return (function(){n=$elf._apply("anything");v=$elf._apply("trans");return ["Set",n,v]})()},
"Not":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Not",x]})()},
"Lookahead":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Lookahead",x]})()},
"Form":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Form",x]})()},
"JumpTable":function(){var $elf=this,c,e,ces;return (function(){ces=$elf._many(function(){return (function(){$elf._form(function(){return (function(){c=$elf._apply("anything");return e=$elf._apply("trans")})()});return [c,e]})()});return ["JumpTable"].concat(ces)})()},
"Rule":function(){var $elf=this,name,ls,body;return (function(){name=$elf._apply("anything");ls=$elf._apply("anything");body=$elf._apply("trans");return ["Rule",name,ls,body]})()}});(BSNullOptimization["initialize"]=(function (){(this["_didSomething"]=false)}));BSAssociativeOptimization=BSNullOptimization.delegated({
"And":function(){var $elf=this,x,xs;return $elf._or((function(){return (function(){x=$elf._apply("trans");$elf._apply("end");$elf._apply("setHelped");return x})()}),(function(){return (function(){xs=$elf._applyWithArgs("transInside","And");return ["And"].concat(xs)})()}))},
"Or":function(){var $elf=this,x,xs;return $elf._or((function(){return (function(){x=$elf._apply("trans");$elf._apply("end");$elf._apply("setHelped");return x})()}),(function(){return (function(){xs=$elf._applyWithArgs("transInside","Or");return ["Or"].concat(xs)})()}))},
"XOr":function(){var $elf=this,x,xs;return $elf._or((function(){return (function(){x=$elf._apply("trans");$elf._apply("end");$elf._apply("setHelped");return x})()}),(function(){return (function(){xs=$elf._applyWithArgs("transInside","XOr");return ["XOr"].concat(xs)})()}))},
"transInside":function(){var $elf=this,t,xs,ys,x,xs;return (function(){t=$elf._apply("anything");return $elf._or((function(){return (function(){$elf._form(function(){return (function(){$elf._applyWithArgs("exactly",t);return xs=$elf._applyWithArgs("transInside",t)})()});ys=$elf._applyWithArgs("transInside",t);$elf._apply("setHelped");return xs.concat(ys)})()}),(function(){return (function(){x=$elf._apply("trans");xs=$elf._applyWithArgs("transInside",t);return [x].concat(xs)})()}),(function(){return []}))})()}});BSSeqInliner=BSNullOptimization.delegated({
"App":function(){var $elf=this,s,cs,rule,args;return $elf._or((function(){return (function(){switch($elf._apply('anything')){case "seq":return (function(){s=$elf._apply("anything");$elf._apply("end");cs=$elf._applyWithArgs("seqString",s);$elf._apply("setHelped");return ["And"].concat(cs).concat([["Act",s]])})();default: throw fail}})()}),(function(){return (function(){rule=$elf._apply("anything");args=$elf._many(function(){return $elf._apply("anything")});return ["App",rule].concat(args)})()}))},
"inlineChar":function(){var $elf=this,c;return (function(){c=$elf._applyWithArgs("foreign",BSOMetaParser,'eChar');$elf._not(function(){return $elf._apply("end")});return ["App","exactly",c.toProgramString()]})()},
"seqString":function(){var $elf=this,s,cs,cs;return (function(){$elf._lookahead(function(){return (function(){s=$elf._apply("anything");return $elf._pred(((typeof s) === "string"))})()});return $elf._or((function(){return (function(){$elf._form(function(){return (function(){$elf._applyWithArgs("exactly","\"");cs=$elf._many(function(){return $elf._apply("inlineChar")});return $elf._applyWithArgs("exactly","\"")})()});return cs})()}),(function(){return (function(){$elf._form(function(){return (function(){$elf._applyWithArgs("exactly","\'");cs=$elf._many(function(){return $elf._apply("inlineChar")});return $elf._applyWithArgs("exactly","\'")})()});return cs})()}))})()}});(JumpTable=(function (choiceOp,choice){(this["choiceOp"]=choiceOp);(this["choices"]=({}));this.add(choice)}));(JumpTable["prototype"]["add"]=(function (choice){{var c=choice[(0)];var t=choice[(1)]};if(this["choices"][c]){if((this["choices"][c][(0)] == this["choiceOp"])){this["choices"][c].push(t)}else{(this["choices"][c]=[this["choiceOp"],this["choices"][c],t])}}else{(this["choices"][c]=t)}}));(JumpTable["prototype"]["toTree"]=(function (){{var r=["JumpTable"];var choiceKeys=this["choices"].ownPropertyNames()};for(var i=(0);(i < choiceKeys["length"]);(i+=(1))){r.push([choiceKeys[i],this["choices"][choiceKeys[i]]])};return r}));BSJumpTableOptimization=BSNullOptimization.delegated({
"Or":function(){var $elf=this,cs;return (function(){cs=$elf._many(function(){return $elf._or((function(){return $elf._applyWithArgs("jtChoices","Or")}),(function(){return $elf._apply("trans")}))});return ["Or"].concat(cs)})()},
"XOr":function(){var $elf=this,cs;return (function(){cs=$elf._many(function(){return $elf._or((function(){return $elf._applyWithArgs("jtChoices","XOr")}),(function(){return $elf._apply("trans")}))});return ["XOr"].concat(cs)})()},
"quotedString":function(){var $elf=this,c,cs,c,cs;return (function(){$elf._lookahead(function(){return $elf._apply("string")});$elf._form(function(){return (function(){switch($elf._apply('anything')){case "\"":return (function(){cs=$elf._many(function(){return (function(){c=$elf._applyWithArgs("foreign",BSOMetaParser,'eChar');$elf._not(function(){return $elf._apply("end")});return c})()});return $elf._applyWithArgs("exactly","\"")})();case "\'":return (function(){cs=$elf._many(function(){return (function(){c=$elf._applyWithArgs("foreign",BSOMetaParser,'eChar');$elf._not(function(){return $elf._apply("end")});return c})()});return $elf._applyWithArgs("exactly","\'")})();default: throw fail}})()});return cs.join("")})()},
"jtChoice":function(){var $elf=this,x,rest,x;return $elf._or((function(){return (function(){$elf._form(function(){return (function(){$elf._applyWithArgs("exactly","And");$elf._form(function(){return (function(){$elf._applyWithArgs("exactly","App");$elf._applyWithArgs("exactly","exactly");return x=$elf._apply("quotedString")})()});return rest=$elf._many(function(){return $elf._apply("anything")})})()});return [x,["And"].concat(rest)]})()}),(function(){return (function(){$elf._form(function(){return (function(){$elf._applyWithArgs("exactly","App");$elf._applyWithArgs("exactly","exactly");return x=$elf._apply("quotedString")})()});return [x,["Act",x.toProgramString()]]})()}))},
"jtChoices":function(){var $elf=this,op,c,jt,c;return (function(){op=$elf._apply("anything");c=$elf._apply("jtChoice");jt=new JumpTable(op,c);$elf._many(function(){return (function(){c=$elf._apply("jtChoice");return jt.add(c)})()});$elf._apply("setHelped");return jt.toTree()})()}});BSOMetaOptimizer=OMeta.delegated({
"optimizeGrammar":function(){var $elf=this,n,sn,rs;return (function(){$elf._form(function(){return (function(){$elf._applyWithArgs("exactly","Grammar");n=$elf._apply("anything");sn=$elf._apply("anything");return rs=$elf._many(function(){return $elf._apply("optimizeRule")})})()});return ["Grammar",n,sn].concat(rs)})()},
"optimizeRule":function(){var $elf=this,r,r,r,r;return (function(){r=$elf._apply("anything");$elf._or((function(){return r=$elf._applyWithArgs("foreign",BSSeqInliner,'optimize',r)}),(function(){return $elf._apply("empty")}));$elf._many(function(){return $elf._or((function(){return r=$elf._applyWithArgs("foreign",BSAssociativeOptimization,'optimize',r)}),(function(){return r=$elf._applyWithArgs("foreign",BSJumpTableOptimization,'optimize',r)}))});return r})()}})}
