<?php

function twitter() {

    $ch = curl_init(FEED);
    curl_setopt($ch, CURLOPT_HEADER, 1);
    curl_setopt($ch,CURLOPT_TIMEOUT, 30);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);
    $result=curl_exec ($ch);
    $data = strstr($result, '<?');

    return $data;
}

function write_feed(){

    global $count;

    $xml = twitter();
    $xml_check = simplexml_load_string($xml);
    if($xml_check) {
        file_put_contents(OUTPUT, $xml);
        exit(0);
    }
    else {
        ++$count;
//        echo "count: $count";
        if($count>COUNTMAX) exit(1);
        sleep(TIMEOUT);
        write_feed();
    }
}

// 2012-10-19 vaihdoin uuden urlin --> etusivun twitter-feed toimii taas, t. tuomas :-)
// define('FEED', 'http://twitter.com/statuses/user_timeline.rss?screen_name=kayttajanystava&count=3');
define('FEED', 'http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=kayttajanystava&count=3');
define('OUTPUT', '/home/kay/www-data/twitterxml/twitter.xml');
define('TIMEOUT',  15);
define('COUNTMAX', 5);

$count = 0;
write_feed();

?>

