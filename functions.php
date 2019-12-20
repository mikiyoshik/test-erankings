<?php

/**
 * Return a link to www.escortrankings.uk
 * 
 * Add some query parameters.
 *
 * @return string
 */
function escortrankingsQueryString() {
    $params = [
        'utm_source' => 'erankings',
        'utm_medium' => 'website',
        'utm_campaign' => 'erankings',
    ];
    if (isset($_GET['r'])) {
        $params['utm_source'] = 'Mccoys';
    }
    return '?' . http_build_query($params);
}


