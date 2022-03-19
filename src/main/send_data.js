send = (level_platform,who,data) => {
   switch (who) {
      case "employer":
         fetch(".auth", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json;charset=utf8'
            },
            body: JSON.stringify({
               level_platform: level_platform,
               who: who,
               date:date
            })
         })
         break;
      case "specialist":
      fetch("/auth", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf8'
         },
         body: JSON.stringify({
            level_platform: level_platform,
            who:who,
            data:data
         })
      })
         break;
      case "team_member":
      fetch("/auth", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf8'
         },
         body: JSON.stringify({
            level_platform: level_platform,
            who: who,
            data: data 
         })
      })
      break;
   }
   
}