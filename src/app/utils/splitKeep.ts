
export const splitKeep = function (data, regEx) {

        let matches = [];
           
        data.replace(regEx, (m, i) => {
            matches.push({ value: m, index: i });
            return getSubst(m);
        });

        let result = []; 

        var lastIndex = 0;
        for(var i=0; i<matches.length; i++){
            var m = matches[i];
            var nextIndex = m.index + m.value.length;
            if(nextIndex != lastIndex) {
                var part = data.substring(lastIndex, nextIndex);
                result.push(part);
                lastIndex = nextIndex;
            }
        }

        if(lastIndex < data.length){
            var part = data.substring(lastIndex, data.length);
            result.push(part);
        }

        function getSubst(value) {
            var substChar = value[0] == '0' ? '1' : '0';
            var subst = '';
            for (var i = 0; i < value.length; i++) {
                subst += substChar;
            }
            return subst;
        };
        return result;
};