// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



function domainName(url){
    let dm = ""
    if((url.search("www")) != -1){
        dm = url.slice(url.indexOf(".")+1,url.indexOf(".",url.indexOf(".")+1 ))
        return dm;
    }
    else if((url.search("//")) !=-1){
        dm = url.slice(url.indexOf("/")+2,url.indexOf(".", url.indexOf("/")+2 ))
        return dm;
    }
    else {
        dm = url.slice(0,url.indexOf("."))
        return dm;
    }
  }

