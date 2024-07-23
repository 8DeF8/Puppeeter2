Feature: Cinema
    Scenario: Buy One ticket
        Given The user is on the page "http://qamid.tmweb.ru/client/index.php"
        When The user choose date
        When The user choose time of a movie
        When The user choose a sit
        When The user click on the booking button
        When The user click on the button to get booking code
        Then The user get the code and text "Электронный билет"

    Scenario: Buy Several tickets
        Given The user is on the page "http://qamid.tmweb.ru/client/index.php"
        When The user choose date
        When The user choose time of a movie
        When The user choose a first sit
        When The user choose a second sit
        When The user click on the booking button
        When The user click on the button to get booking code
        Then The user get the code and text "Электронный билет"

    Scenario: Buy a ticket for a occupied seat
        Given The user is on the page "http://qamid.tmweb.ru/client/index.php"
        When The user choose date that has been choosen earlier
        When The user choose time of a movie that has been choosen earlier
        When The user choose a sit that has been choosen earlier
        When The user click on the booking button
        Then button for booking is inactive "true"