import { Text, View, StyleSheet } from 'react-native';

export default function Smierc() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>
            Jan Paweł II od 1992 cierpiał na postępującą chorobę Parkinsona. Mimo licznych spekulacji i sugestii ustąpienia z funkcji, które nasilały się w mediach zwłaszcza podczas kolejnych pobytów papieża w szpitalu, pełnił ją aż do śmierci. W lipcu 1992 przeszedł operację w celu usunięcia guza nowotworowego na jelicie grubym. Jego długoletnie zmagania z chorobą i ze starością były osobistym przykładem głoszonych na ten temat poglądów, w których podkreślał godność ludzkiego cierpienia i odnosił je do męki Chrystusa. 13 maja 1992 papież, w 11. rocznicę zamachu, ustanowił Światowy Dzień Chorego.
Nagłe pogorszenie stanu zdrowia papieża rozpoczęło się 1 lutego 2005. Przez ostatnie dwa miesiące życia Jan Paweł II wiele dni spędził w szpitalu i nie udzielał się publicznie. Przeszedł grypę oraz zabieg tracheotomii, wykonany z powodu niewydolności oddechowej.
W czwartek 31 marca tuż po godzinie 11, gdy Jan Paweł II udał się do swej prywatnej kaplicy, wystąpiły u niego silne dreszcze, ze wzrostem temperatury ciała do 39,6 °C. Był to początek wstrząsu septycznego połączonego z zapaścią sercowo-naczyniową. Czynnikiem wywołującym była infekcja dróg moczowych w osłabionym chorobą Parkinsona i niewydolnością oddechową organizmie.
Uszanowano wolę papieża, który chciał pozostać w domu. Podczas mszy przy jego łożu, którą Jan Paweł II koncelebrował z przymkniętymi oczyma, kardynał Marian Jaworski udzielił mu sakramentu namaszczenia. 2 kwietnia, w dniu śmierci, o godzinie 7:30 rano, papież zaczął tracić przytomność, a późnym porankiem przyjął jeszcze watykańskiego sekretarza stanu kardynała Angela Sodano. Później tego samego dnia doszło do gwałtownego wzrostu temperatury. Około godziny 15:30 bardzo słabym głosem papież powiedział: Pozwólcie mi iść do domu Ojca. O godzinie 19 wszedł w stan śpiączki, a monitor wykazał postępujący zanik funkcji życiowych. Osobisty lekarz papieski Renato Buzzonetti stwierdził śmierć papieża Jana Pawła II o godzinie 21:37 czasu miejscowego, a elektrokardiograf wyłączono po 20 minutach od tej chwili. Zmarł po zakończeniu Apelu jasnogórskiego, w pierwszą sobotę miesiąca i wigilię Święta Miłosierdzia Bożego, w 9666. dniu swojego pontyfikatu. Informację o śmierci papieża podał na placu świętego Piotra abp Leonardo Sandri, mówiąc: Najdrożsi bracia i siostry, o godz. 21.37 nasz ukochany Ojciec Święty powrócił do Domu Ojca. Módlmy się za niego. W ciągu ostatnich dwóch dni życia nieustannie towarzyszyli mu wierni z całego świata, śledząc na bieżąco wiadomości dochodzące z Watykanu oraz trwając na modlitwie w jego intencji.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        width: "95vw",
        maxWidth: "600px",
        textAlign: "justify"
    }
});