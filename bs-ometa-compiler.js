{BSOMetaParser=Parser.delegated({
"fromTo":function(){var $elf=this,x,y;return (function(){x=$elf._apply("anything");y=$elf._apply("anything");$elf._applyWithArgs("seq",x);$elf._many(function(){return (function(){$elf._not(function(){return $elf._applyWithArgs("seq",y)});return $elf._apply("char")})()});return $elf._applyWithArgs("seq",y)})()},
"space":function(){var $elf=this;return $elf._or((function(){return Parser._superApplyWithArgs($elf,'space')}),(function(){return $elf._applyWithArgs("fromTo","//","\n")}),(function(){return $elf._applyWithArgs("fromTo","/*","*/")}))},
"nameFirst":function(){var $elf=this;return $elf._or((function(){return (({"_":function(){return "_"},"$":function(){return "$"}})[$elf._apply('anything')]||function(){throw fail})()}),(function(){return $elf._apply("letter")}))},
"nameRest":function(){var $elf=this;return $elf._or((function(){return $elf._apply("nameFirst")}),(function(){return $elf._apply("digit")}))},
"tsName":function(){var $elf=this,xs;return (function(){xs=$elf._applyWithArgs("firstAndRest","nameFirst","nameRest");return xs.join("")})()},
"name":function(){var $elf=this;return (function(){$elf._apply("spaces");return $elf._apply("tsName")})()},
"eChar":function(){var $elf=this,c;return $elf._or((function(){return (({"\\":function(){return (function(){c=$elf._apply("char");return unescape(("\\" + c))})()}})[$elf._apply('anything')]||function(){throw fail})()}),(function(){return $elf._apply("char")}))},
"tsString":function(){var $elf=this,xs;return (function(){$elf._applyWithArgs("exactly","\'");xs=$elf._many(function(){return (function(){$elf._not(function(){return $elf._applyWithArgs("exactly","\'")});return $elf._apply("eChar")})()});$elf._applyWithArgs("exactly","\'");return xs.join("")})()},
"characters":function(){var $elf=this,xs;return (function(){$elf._applyWithArgs("exactly","`");$elf._applyWithArgs("exactly","`");xs=$elf._many(function(){return (function(){$elf._not(function(){return (function(){$elf._applyWithArgs("exactly","\'");return $elf._applyWithArgs("exactly","\'")})()});return $elf._apply("eChar")})()});$elf._applyWithArgs("exactly","\'");$elf._applyWithArgs("exactly","\'");return ["App","seq",xs.join("").toProgramString()]})()},
"sCharacters":function(){var $elf=this,xs;return (function(){$elf._applyWithArgs("exactly","\"");xs=$elf._many(function(){return (function(){$elf._not(function(){return $elf._applyWithArgs("exactly","\"")});return $elf._apply("eChar")})()});$elf._applyWithArgs("exactly","\"");return ["App","token",xs.join("").toProgramString()]})()},
"string":function(){var $elf=this,xs;return (function(){xs=$elf._or((function(){return (function(){(({"#":function(){return "#"},"`":function(){return "`"}})[$elf._apply('anything')]||function(){throw fail})();return $elf._apply("tsName")})()}),(function(){return $elf._apply("tsString")}));return ["App","exactly",xs.toProgramString()]})()},
"number":function(){var $elf=this,sign,ds;return (function(){sign=$elf._or((function(){return (({"-":function(){return "-"}})[$elf._apply('anything')]||function(){throw fail})()}),(function(){return (function(){$elf._apply("empty");return ""})()}));ds=$elf._many1(function(){return $elf._apply("digit")});return ["App","exactly",(sign + ds.join(""))]})()},
"keyword":function(){var $elf=this,xs;return (function(){xs=$elf._apply("anything");$elf._applyWithArgs("token",xs);$elf._not(function(){return $elf._apply("letterOrDigit")});return xs})()},
"args":function(){var $elf=this,xs;return $elf._or((function(){return (({"(":function(){return (function(){xs=$elf._applyWithArgs("listOf","hostExpr",",");$elf._applyWithArgs("token",")");return xs})()}})[$elf._apply('anything')]||function(){throw fail})()}),(function(){return (function(){$elf._apply("empty");return []})()}))},
"application":function(){var $elf=this,rule,as,grm,rule,as,rule,as;return $elf._or((function(){return (function(){$elf._applyWithArgs("token","^");rule=$elf._apply("name");as=$elf._apply("args");return ["App","super",(("\'" + rule) + "\'")].concat(as)})()}),(function(){return (function(){grm=$elf._apply("name");$elf._applyWithArgs("token",".");rule=$elf._apply("name");as=$elf._apply("args");return ["App","foreign",grm,(("\'" + rule) + "\'")].concat(as)})()}),(function(){return (function(){rule=$elf._apply("name");as=$elf._apply("args");return ["App",rule].concat(as)})()}))},
"hostExpr":function(){var $elf=this,r;return (function(){r=$elf._applyWithArgs("foreign",BSJSParser,'expr');return $elf._applyWithArgs("foreign",BSJSTranslator,'trans',r)})()},
"atomicHostExpr":function(){var $elf=this,r;return (function(){r=$elf._applyWithArgs("foreign",BSJSParser,'semAction');return $elf._applyWithArgs("foreign",BSJSTranslator,'trans',r)})()},
"curlyHostExpr":function(){var $elf=this,r;return (function(){r=$elf._applyWithArgs("foreign",BSJSParser,'curlySemAction');return $elf._applyWithArgs("foreign",BSJSTranslator,'trans',r)})()},
"semAction":function(){var $elf=this,x,x;return $elf._or((function(){return (function(){$elf._or((function(){return $elf._applyWithArgs("token","!")}),(function(){return $elf._applyWithArgs("token","->")}));x=$elf._apply("atomicHostExpr");return ["Act",x]})()}),(function(){return (function(){x=$elf._apply("curlyHostExpr");return ["Act",x]})()}))},
"semPred":function(){var $elf=this,x;return (function(){$elf._applyWithArgs("token","?");x=$elf._apply("atomicHostExpr");return ["Pred",x]})()},
"expr":function(){var $elf=this,xs;return (function(){xs=$elf._applyWithArgs("listOf","expr4","|");return ["Or"].concat(xs)})()},
"expr4":function(){var $elf=this,xs;return (function(){xs=$elf._many(function(){return $elf._apply("expr3")});return ["And"].concat(xs)})()},
"optIter":function(){var $elf=this,x;return (function(){x=$elf._apply("anything");return $elf._or((function(){return (function(){$elf._applyWithArgs("token","*");return ["Many",x]})()}),(function(){return (function(){$elf._applyWithArgs("token","+");return ["Many1",x]})()}),(function(){return (function(){$elf._apply("empty");return x})()}))})()},
"expr3":function(){var $elf=this,x,x,n,n;return $elf._or((function(){return (function(){x=$elf._apply("expr2");x=$elf._applyWithArgs("optIter",x);return $elf._or((function(){return (({":":function(){return (function(){n=$elf._apply("name");return (function (){$elf["locals"].push(n);return ["Set",n,x]})()})()}})[$elf._apply('anything')]||function(){throw fail})()}),(function(){return (function(){$elf._apply("empty");return x})()}))})()}),(function(){return (function(){$elf._applyWithArgs("token",":");n=$elf._apply("name");return (function (){$elf["locals"].push(n);return ["Set",n,["App","anything"]]})()})()}))},
"expr2":function(){var $elf=this,x,x;return $elf._or((function(){return (function(){$elf._applyWithArgs("token","~");x=$elf._apply("expr2");return ["Not",x]})()}),(function(){return (function(){$elf._applyWithArgs("token","&");x=$elf._apply("expr1");return ["Lookahead",x]})()}),(function(){return $elf._apply("expr1")}))},
"expr1":function(){var $elf=this,x,x,x;return $elf._or((function(){return $elf._apply("application")}),(function(){return $elf._apply("semAction")}),(function(){return $elf._apply("semPred")}),(function(){return (function(){x=$elf._or((function(){return $elf._applyWithArgs("keyword","undefined")}),(function(){return $elf._applyWithArgs("keyword","nil")}),(function(){return $elf._applyWithArgs("keyword","true")}),(function(){return $elf._applyWithArgs("keyword","false")}));return ["App","exactly",x]})()}),(function(){return (function(){$elf._apply("spaces");return $elf._or((function(){return $elf._apply("characters")}),(function(){return $elf._apply("sCharacters")}),(function(){return $elf._apply("string")}),(function(){return $elf._apply("number")}))})()}),(function(){return (function(){$elf._applyWithArgs("token","[");x=$elf._apply("expr");$elf._applyWithArgs("token","]");return ["Form",x]})()}),(function(){return (function(){$elf._applyWithArgs("token","(");x=$elf._apply("expr");$elf._applyWithArgs("token",")");return x})()}))},
"ruleName":function(){var $elf=this;return $elf._or((function(){return $elf._apply("name")}),(function(){return (function(){$elf._apply("spaces");return $elf._apply("tsString")})()}))},
"rule":function(){var $elf=this,n,x,xs;return (function(){$elf._lookahead(function(){return n=$elf._apply("ruleName")});($elf["locals"]=["$elf=this"]);x=$elf._applyWithArgs("rulePart",n);xs=$elf._many(function(){return (function(){$elf._applyWithArgs("token",",");return $elf._applyWithArgs("rulePart",n)})()});return ["Rule",n,$elf["locals"],["Or",x].concat(xs)]})()},
"rulePart":function(){var $elf=this,rn,n,b1,b2;return (function(){rn=$elf._apply("anything");n=$elf._apply("ruleName");$elf._pred((n == rn));b1=$elf._apply("expr4");return $elf._or((function(){return (function(){$elf._applyWithArgs("token","=");b2=$elf._apply("expr");return ["And",b1,b2]})()}),(function(){return (function(){$elf._apply("empty");return b1})()}))})()},
"grammar":function(){var $elf=this,n,sn,rs;return (function(){$elf._applyWithArgs("keyword","ometa");n=$elf._apply("name");sn=$elf._or((function(){return (function(){$elf._applyWithArgs("token","<:");return $elf._apply("name")})()}),(function(){return (function(){$elf._apply("empty");return "OMeta"})()}));$elf._applyWithArgs("token","{");rs=$elf._applyWithArgs("listOf","rule",",");$elf._applyWithArgs("token","}");return $elf._applyWithArgs("foreign",BSOMetaOptimizer,'optimizeGrammar',["Grammar",n,sn].concat(rs))})()}});BSOMetaTranslator=OMeta.delegated({
"trans":function(){var $elf=this,t,ans;return (function(){$elf._form(function(){return (function(){t=$elf._apply("anything");return ans=$elf._applyWithArgs("apply",t)})()});return ans})()},
"App":function(){var $elf=this,args,rule,args,rule;return $elf._or((function(){return (({"super":function(){return (function(){args=$elf._many1(function(){return $elf._apply("anything")});return [$elf["sName"],"._superApplyWithArgs($elf,",args.join(","),")"].join("")})()}})[$elf._apply('anything')]||function(){throw fail})()}),(function(){return (function(){rule=$elf._apply("anything");args=$elf._many1(function(){return $elf._apply("anything")});return ["$elf._applyWithArgs(\"",rule,"\",",args.join(","),")"].join("")})()}),(function(){return (function(){rule=$elf._apply("anything");return ["$elf._apply(\"",rule,"\")"].join("")})()}))},
"Act":function(){var $elf=this,expr;return (function(){expr=$elf._apply("anything");return expr})()},
"Pred":function(){var $elf=this,expr;return (function(){expr=$elf._apply("anything");return ["$elf._pred(",expr,")"].join("")})()},
"Or":function(){var $elf=this,xs;return (function(){xs=$elf._many(function(){return $elf._apply("transFn")});return ["$elf._or(",xs.join(","),")"].join("")})()},
"And":function(){var $elf=this,xs,y;return $elf._or((function(){return (function(){xs=$elf._many(function(){return $elf._applyWithArgs("notLast","trans")});y=$elf._apply("trans");return (function (){xs.push(("return " + y));return ["(function(){",xs.join(";"),"})()"].join("")})()})()}),(function(){return "(function(){})"}))},
"Many":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["$elf._many(function(){return ",x,"})"].join("")})()},
"Many1":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["$elf._many1(function(){return ",x,"})"].join("")})()},
"Set":function(){var $elf=this,n,v;return (function(){n=$elf._apply("anything");v=$elf._apply("trans");return [n,"=",v].join("")})()},
"Not":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["$elf._not(function(){return ",x,"})"].join("")})()},
"Lookahead":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["$elf._lookahead(function(){return ",x,"})"].join("")})()},
"Form":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["$elf._form(function(){return ",x,"})"].join("")})()},
"JumpTable":function(){var $elf=this,cases;return (function(){cases=$elf._many(function(){return $elf._apply("jtCase")});return $elf.jumpTableCode(cases)})()},
"Rule":function(){var $elf=this,name,ls,body;return (function(){name=$elf._apply("anything");($elf["rName"]=name);ls=$elf._apply("locals");body=$elf._apply("trans");return ["\n\"",name,"\":function(){",ls,"return ",body,"}"].join("")})()},
"Grammar":function(){var $elf=this,name,sName,rules;return (function(){name=$elf._apply("anything");sName=$elf._apply("anything");($elf["name"]=name);($elf["sName"]=sName);rules=$elf._many(function(){return $elf._apply("trans")});return [name,"=",sName,".delegated({",rules.join(","),"})"].join("")})()},
"jtCase":function(){var $elf=this,x,e;return (function(){$elf._form(function(){return (function(){x=$elf._apply("anything");return e=$elf._apply("trans")})()});return [x.toProgramString(),e]})()},
"locals":function(){var $elf=this,vs;return $elf._or((function(){return (function(){$elf._form(function(){return vs=$elf._many1(function(){return $elf._apply("string")})});return ["var ",vs.join(","),";"].join("")})()}),(function(){return (function(){$elf._form(function(){return (function(){})});return ""})()}))},
"transFn":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["(function(){return ",x,"})"].join("")})()}});(BSOMetaTranslator["jumpTableCode"]=(function (cases){var buf=new StringBuffer();buf.nextPutAll("(function(){switch($elf._apply(\'anything\')){");for(var i=(0);(i < cases["length"]);(i+=(1))){buf.nextPutAll((((("case " + cases[i][(0)]) + ":return ") + cases[i][(1)]) + ";"))};buf.nextPutAll("default: throw fail}})()");return buf.contents()}))}
