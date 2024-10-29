// ==UserScript==
// @name         [NI] Dodatek na zmiane ikonek kamykow
// @version      1.0.0
// @author       kasztanowka
// @updateURL    https://github.com/kasztanowka/margoaddons/raw/refs/heads/main/zmiana_ikon_kamieni.user.js
// @description  Dodatek pozwala zmienic ikonke kamienia czerwonego smoka na ikonke elity II
// @match        https://**.margonem.pl/
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    let _0x3727cc = [], _0x1b535c = ![];
    const _0x15e7dc = '1.0.1', _0x31ded4 = '2024.10.29';
    console['log']('[Ikony\x20kamyków]\x20Załadowano\x20poprawnie\x20dodatek');
    function _0x2f1aba() {
        const _0x4ed888 = document['querySelectorAll']('.inner-grid'), _0x3bc6ee = [];
        _0x4ed888['forEach'](_0x1ce73f => {
            const _0x325b75 = _0x1ce73f['querySelectorAll']('div[data-name*=\x22Kamień\x20Czerwonego\x20Smoka\x22]');
            _0x325b75['forEach'](_0x271a12 => {
                _0x3bc6ee['push'](_0x271a12);
            });
        }), (_0x3bc6ee['length'] !== _0x3727cc['length'] || !_0x3bc6ee['every'](_0x310938 => _0x3727cc['includes'](_0x310938))) && (_0x3727cc = _0x3bc6ee, _0x1b535c && _0x1c9701());
    }
    function _0x33f65c() {
        if (document['getElementById']('kamien-menu'))
            return;
        const _0x1e9c5e = document['createElement']('div');
        _0x1e9c5e['id'] = 'kamien-menu', _0x1e9c5e['style']['position'] = 'fixed', _0x1e9c5e['style']['top'] = localStorage['getItem']('menuTop') || '20%', _0x1e9c5e['style']['left'] = localStorage['getItem']('menuLeft') || '30%', _0x1e9c5e['style']['width'] = '255px', _0x1e9c5e['style']['padding'] = '10px', _0x1e9c5e['style']['color'] = 'rgba(245,\x2013,\x20255,\x200.8)', _0x1e9c5e['style']['backgroundColor'] = 'rgba(0,\x200,\x200,\x200.8)', _0x1e9c5e['style']['border'] = '2px\x20solid\x20rgba(245,\x2013,\x20255,\x200.8)', _0x1e9c5e['style']['zIndex'] = '1000', _0x1e9c5e['style']['display'] = 'none';
        const _0x1a3196 = document['createElement']('h2');
        _0x1a3196['textContent'] = 'Kamienie\x20w\x20ekwipunku', _0x1e9c5e['appendChild'](_0x1a3196);
        const _0x5c7933 = document['createElement']('div');
        _0x5c7933['id'] = 'kamienie-list', _0x1e9c5e['appendChild'](_0x5c7933), document['body']['appendChild'](_0x1e9c5e), _0x1c9701(), _0x39787c(_0x1e9c5e);
    }
    function _0x39787c(_0x30fcac) {
        let _0x498b60 = ![], _0x1c8974 = {
                'x': 0x0,
                'y': 0x0
            };
        _0x30fcac['addEventListener']('mousedown', function (_0x1c3efe) {
            _0x498b60 = !![], _0x1c8974['x'] = _0x1c3efe['clientX'] - _0x30fcac['getBoundingClientRect']()['left'], _0x1c8974['y'] = _0x1c3efe['clientY'] - _0x30fcac['getBoundingClientRect']()['top'], _0x30fcac['style']['cursor'] = 'grabbing';
        }), document['addEventListener']('mousemove', function (_0x5ebfbc) {
            _0x498b60 && (_0x30fcac['style']['left'] = _0x5ebfbc['clientX'] - _0x1c8974['x'] + 'px', _0x30fcac['style']['top'] = _0x5ebfbc['clientY'] - _0x1c8974['y'] + 'px');
        }), document['addEventListener']('mouseup', function () {
            _0x498b60 && (_0x498b60 = ![], _0x30fcac['style']['cursor'] = 'grab', localStorage['setItem']('menuTop', _0x30fcac['style']['top']), localStorage['setItem']('menuLeft', _0x30fcac['style']['left']));
        }), _0x30fcac['style']['cursor'] = 'grab';
    }
    function _0x1c9701() {
        const _0x3d2c49 = document['getElementById']('kamienie-list');
        _0x3d2c49['innerHTML'] = '';
        const _0x46bd22 = [
            {
                'name': 'Brak',
                'src': ''
            },
            {
                'name': '--\x20Elity\x20II\x20--',
                'src': ''
            },
            {
                'name': 'Mushita\x20(23lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/st-puma.gif'
            },
            {
                'name': 'Kotołak\x20Tropiciel\x20(27lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e1/kotolak_lowca.gif'
            },
            {
                'name': 'Shae\x20Phu\x20(30lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/demonszef.gif'
            },
            {
                'name': 'Zorg\x20Jednooki\x20Baron\x20(33lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-e2-zorg.gif'
            },
            {
                'name': 'Władca\x20rzek\x20(37lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobmag2.gif'
            },
            {
                'name': 'Gobbos\x20(40lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobsamurai.gif'
            },
            {
                'name': 'Tyrtajos\x20(42lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/dzik.gif'
            },
            {
                'name': 'Tollok\x20Shimger\x20(47lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_shimger.gif'
            },
            {
                'name': 'Szczęt\x20alias\x20Gładki\x20(47lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-szczet.gif'
            },
            {
                'name': 'Razuglag\x20Oklash\x20(50lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/razuglag.gif'
            },
            {
                'name': 'Agar\x20(51lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/glut_agar.gif'
            },
            {
                'name': 'Foverk\x20Turrim\x20(57lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/kobold07.gif'
            },
            {
                'name': 'Owadzia\x20Matka\x20(58lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/zadlak-e2-owadzia-matka.gif'
            },
            {
                'name': 'Vari\x20Kruger\x20(65lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll11.gif'
            },
            {
                'name': 'Furruk\x20Kozug\x20(66lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll12.gif'
            },
            {
                'name': 'Jotun\x20(70lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/kam_olbrzym-b.gif'
            },
            {
                'name': 'Tollok\x20Utumutu\x20(73lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_jask_utumatu.gif'
            },
            {
                'name': 'Tollok\x20Atamatu\x20(73lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_jask_atamatu.gif'
            },
            {
                'name': 'Lisz\x20(75lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/lisz_demilisze.gif'
            },
            {
                'name': 'Grabarz\x20świątynny\x20(80lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/nieu_mnich_grabarz.gif'
            },
            {
                'name': 'Wielka\x20Stopa\x20(82lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/wlochacze_wielka_stopa.gif'
            },
            {
                'name': 'Podły\x20zbrojmistrz\x20(82lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/magaz_zbrojmistrz.gif'
            },
            {
                'name': 'Choukker\x20(84lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/dlawiciel5.gif'
            },
            {
                'name': 'Nadzorczyni\x20krasnoludów\x20(88lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/nadzorczyni_krasnoludow.gif'
            },
            {
                'name': 'Morthen\x20(89lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/krasnolud_boss.gif'
            },
            {
                'name': 'Leśne\x20Widmo\x20(92lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/lesne_widmo.gif'
            },
            {
                'name': 'Żelazoręki\x20Ohydziarz\x20(92lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/ugrape2.gif'
            },
            {
                'name': 'Goplana\x20(93lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/goplana.gif'
            },
            {
                'name': 'Gnom\x20Figlid\x20(96lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnom_figlid.gif'
            },
            {
                'name': 'Centaur\x20Zyfryd\x20(99lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/cent-zyfryd.gif'
            },
            {
                'name': 'Kambion\x20(101lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/kambion.gif'
            },
            {
                'name': 'Jertek\x20Moxos\x20(105lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/moloch-jertek.gif'
            },
            {
                'name': 'Miłośnik\x20rycerzy\x20(108lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_rycerzy.gif'
            },
            {
                'name': 'Miłośnik\x20magii\x20(108lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_magii.gif'
            },
            {
                'name': 'Miłośnik\x20łowców\x20(108lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_lowcow.gif'
            },
            {
                'name': 'Łowca\x20czaszek\x20(112lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/alghul-czaszka-1a.gif'
            },
            {
                'name': 'Ozirus\x20Władca\x20Hieroglifów\x20(115lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/mumia-ozirus.gif'
            },
            {
                'name': 'Wójt\x20Fistuła\x20(118lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral05.gif'
            },
            {
                'name': 'Krab\x20pustelnik\x20(124lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/krab_big3.gif'
            },
            {
                'name': 'Królowa\x20Śniegu\x20(124lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolowa-sniegu.gif'
            },
            {
                'name': 'Teściowa\x20Rumcajsa\x20(125lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral08.gif'
            },
            {
                'name': 'Ifryt\x20(128lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/magradit_ifryt.gif'
            },
            {
                'name': 'Młody\x20Jack\x20Truciciel\x20(131lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat01.gif'
            },
            {
                'name': 'Helga\x20Opiekunka\x20Rumu\x20(131lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat-2b.gif'
            },
            {
                'name': 'Henry\x20Kaprawe\x20Oko\x20(131lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e1/pirat5b.gif'
            },
            {
                'name': 'Burkog\x20Lorulk\x20(135lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/orkczd.gif'
            },
            {
                'name': 'Sheba\x20Orcza\x20Szamanka\x20(135lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/r_orc_sheba.gif'
            },
            {
                'name': 'Grubber\x20Ochlaj\x20(136lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/grubber-ochlaj.gif'
            },
            {
                'name': 'Berserker\x20Amuno\x20(139lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif'
            },
            {
                'name': 'Stworzyciel\x20(144lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/stworzyciel.gif'
            },
            {
                'name': 'Fodug\x20Zolash\x20(145lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/fodug_zolash.gif'
            },
            {
                'name': 'Mistrz\x20Worundriel\x20(148lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/worundriel02.gif'
            },
            {
                'name': 'Goons\x20Asterus\x20(150lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/mechgoblin4.gif'
            },
            {
                'name': 'Adariel\x20(155lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri_adariel.gif'
            },
            {
                'name': 'Duch\x20Władcy\x20Klanów\x20(160lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/duch_wladcy_kl.gif'
            },
            {
                'name': 'Ogr\x20Stalowy\x20Pazur\x20(165lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/ogr_drapak.gif'
            },
            {
                'name': 'Bragarth\x20Myśliwy\x20Dusz\x20(170lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_low_elita.gif'
            },
            {
                'name': 'Fursharag\x20Pożeracz\x20Umysłów\x20(170lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_mag_elita.gif'
            },
            {
                'name': 'Ziuggrael\x20Strażnik\x20Królowej\x20(170lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_woj_elita.gif'
            },
            {
                'name': 'Lusgrathera\x20Królowa\x20Pramatka\x20(175lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/prakrolowa.gif'
            },
            {
                'name': 'Borgoros\x20Garamir\x20III\x20(175lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/minotaur-elita.gif'
            },
            {
                'name': 'Chryzoprenia\x20(178lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/chryzoprenia.gif'
            },
            {
                'name': 'Cerasus\x20(180lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/drzewoe2.gif'
            },
            {
                'name': 'Czempion\x20Furboli\x20(183lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/forbol03.gif'
            },
            {
                'name': 'Torunia\x20Ankelwald\x20(186lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/thuz-patr1.gif'
            },
            {
                'name': 'Breheret\x20Żelazny\x20Łeb\x20(192lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/draki-breheret-1b.gif'
            },
            {
                'name': 'Mysiur\x20Myświórowy\x20Król\x20(193lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolszczur.gif'
            },
            {
                'name': 'Sadolia\x20Nadzorczyni\x20Hurys\x20(197lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sadolia.gif'
            },
            {
                'name': 'Gothardus\x20Kolekcjoner\x20Głów\x20(200lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-gothardus.gif'
            },
            {
                'name': 'Annaniel\x20Wysysacz\x20Marzeń\x20(200lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-annaniel.gif'
            },
            {
                'name': 'Sataniel\x20Skrytobójca\x20(200lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sataniel.gif'
            },
            {
                'name': 'Bergermona\x20Krwawa\x20Hrabina\x20(200lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-bergermona.gif'
            },
            {
                'name': 'Zufulus\x20Smakosz\x20Serc\x20(205lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-zufulus.gif'
            },
            {
                'name': 'Marlloth\x20Malignitas\x20(214lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/marlloth.gif'
            },
            {
                'name': 'Mocny\x20Maddoks\x20(218lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok5.gif'
            },
            {
                'name': 'Arachniregina\x20Colosseus\x20(220lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/regina-e2.gif'
            },
            {
                'name': 'Pancerny\x20Maddok\x20(226lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok_roz.gif'
            },
            {
                'name': 'Silvanasus\x20(235lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/silvanasus.gif'
            },
            {
                'name': 'Dendroculus\x20(240lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/dendroculus.gif'
            },
            {
                'name': 'Tolypeutes\x20(245lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/bolita.gif'
            },
            {
                'name': 'Cuaitl\x20Citlalin\x20(250lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/maho-cuaitl.gif'
            },
            {
                'name': 'Pogardliwa\x20Sybilla\x20(255lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri2_witch_e2.gif'
            },
            {
                'name': 'Yaotl\x20(258lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/mahoplowca.gif'
            },
            {
                'name': 'Quetzalcoatl\x20(260lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/quetzalcoatl.gif'
            },
            {
                'name': 'Chopesz\x20(267lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/chopesh2.gif'
            },
            {
                'name': 'Neferkar\x20Set\x20(274lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/szkiel_set.gif'
            },
            {
                'name': 'Terrozaur\x20(280lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/terrorzaur_pus.gif'
            },
            {
                'name': 'Vaenra\x20Charkhaam\x20(280lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smoczyca.gif'
            },
            {
                'name': 'Chaegd\x20Agnrakh\x20(280lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smokoszef.gif'
            },
            {
                'name': 'Nymphemonia\x20(287lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/nymphemonia.gif'
            },
            {
                'name': 'Artenius\x20(300lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu03.gif'
            },
            {
                'name': 'Furion\x20(300lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu02.gif'
            },
            {
                'name': 'Zorin\x20(300lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu01.gif'
            },
            {
                'name': '--\x20Kolosi\x20--',
                'src': ''
            },
            {
                'name': 'Mamlambo\x20(36lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/mamlambo_final2.gif'
            },
            {
                'name': 'Regulus\x20Mętnooki\x20(63lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/bazyliszek.gif'
            },
            {
                'name': 'Umibozu\x20(90lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wodnik.gif'
            },
            {
                'name': 'Amaimon\x20Soploręki\x20(117lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/soploreki.gif'
            },
            {
                'name': 'Hydrokora\x20Chimeryczna\x20(144lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif'
            },
            {
                'name': 'Lulukav\x20(198lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolkrucz.gif'
            },
            {
                'name': 'Arachin\x20Podstępny\x20(225lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-pajak.gif'
            },
            {
                'name': 'Reuzen\x20(252lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-dendro.gif'
            },
            {
                'name': 'Wernoradzki\x20Drakolisz\x20(279lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-drakolisz.gif'
            },
            {
                'name': '--\x20Tytani\x20--',
                'src': ''
            },
            {
                'name': 'Dziewicza\x20Orlica\x20(51lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/dziewicza_orlica.gif'
            },
            {
                'name': 'Zabójczy\x20Królik\x20(70lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/zabojczy_krolik.gif'
            },
            {
                'name': 'Renegat\x20Baulus\x20(101lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/renegat_baulus.gif'
            },
            {
                'name': 'Piekielny\x20Arcymag\x20(131lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/archdemon.gif'
            },
            {
                'name': 'Versus\x20Zoons\x20(154lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/titangoblin.gif'
            },
            {
                'name': 'Łowczyni\x20Wspomnień\x20(177lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/lowcz-wspo-driady.gif'
            },
            {
                'name': 'Przyzywacz\x20Demonów\x20(204lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/przyz_demon_sekta.gif'
            },
            {
                'name': 'Maddok\x20Magua\x20(231lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/maddok-tytan.gif'
            },
            {
                'name': 'Tezcatlipoca\x20(258lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/tezcatlipoca.gif'
            },
            {
                'name': 'Barbatos\x20Smoczy\x20Strażnik\x20(285lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/hebrehoth_smokoludzie.gif'
            },
            {
                'name': 'Tanroth\x20(300lvl)',
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/tyt/ice_king.gif'
            }
        ];
        _0x3727cc['forEach'](_0x3b792b => {
            const _0x2d3702 = _0x3b792b['getAttribute']('data-name'), _0x159900 = _0x3b792b['getAttribute']('tip-id'), _0xf978b1 = document['createElement']('div');
            _0xf978b1['style']['marginBottom'] = '15px';
            const _0x2f5098 = document['createElement']('p');
            _0x2f5098['textContent'] = _0x2d3702, _0xf978b1['appendChild'](_0x2f5098);
            const _0x23a987 = document['createElement']('select');
            _0x46bd22['forEach'](_0x4bf758 => {
                const _0x3893c6 = document['createElement']('option');
                _0x3893c6['value'] = _0x4bf758['src'], _0x3893c6['textContent'] = _0x4bf758['name'], _0x23a987['appendChild'](_0x3893c6);
            }), _0xf978b1['appendChild'](_0x23a987);
            const _0x32e7c0 = localStorage['getItem'](_0x159900);
            _0x32e7c0 && (_0x23a987['value'] = _0x32e7c0, _0x2a40f7(_0x3b792b, _0x32e7c0)), _0x23a987['addEventListener']('change', function () {
                const _0x1a2493 = _0x23a987['value'];
                _0x2a40f7(_0x3b792b, _0x1a2493), localStorage['setItem'](_0x159900, _0x1a2493);
            }), _0x3d2c49['appendChild'](_0xf978b1);
        });
        const _0x4bdbb6 = document['createElement']('div');
        _0x4bdbb6['style']['marginTop'] = '20px', _0x4bdbb6['style']['color'] = 'rgba(255,\x20255,\x20255,\x200.8)', _0x4bdbb6['innerHTML'] = '<p>Wersja\x20skryptu:\x20<strong>' + _0x15e7dc + '</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Wersja\x20buildu:\x20<strong>' + _0x31ded4 + '</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Autor:\x20<strong>Kasztanowka</strong></p>', _0x3d2c49['appendChild'](_0x4bdbb6);
    }
    function _0x2a40f7(_0x20bca3, _0x44fcef) {
        const _0x43990a = _0x20bca3['querySelector']('canvas.icon.canvas-icon');
        if (_0x43990a) {
            const _0x2d8d99 = _0x43990a['getContext']('2d'), _0x4f6168 = new Image();
            _0x4f6168['src'] = _0x44fcef, _0x4f6168['onload'] = function () {
                _0x2d8d99['clearRect'](0x0, 0x0, _0x43990a['width'], _0x43990a['height']);
                const _0x5ae3dd = Math['min'](_0x43990a['width'] / _0x4f6168['width'], _0x43990a['height'] / _0x4f6168['height']), _0xceac25 = _0x4f6168['width'] * _0x5ae3dd, _0x3bd0a9 = _0x4f6168['height'] * _0x5ae3dd, _0x38befa = (_0x43990a['width'] - _0xceac25) / 0x2, _0x3197e4 = (_0x43990a['height'] - _0x3bd0a9) / 0x2;
                _0x2d8d99['drawImage'](_0x4f6168, _0x38befa, _0x3197e4, _0xceac25, _0x3bd0a9);
            };
        }
    }
    document['addEventListener']('keydown', function (_0xa6f5f5) {
        if (_0xa6f5f5['key'] === ']') {
            const _0x5bd396 = document['getElementById']('kamien-menu');
            !_0x5bd396 && _0x33f65c(), _0x5bd396['style']['display'] = _0x5bd396['style']['display'] === 'none' ? 'block' : 'none', _0x1b535c = _0x5bd396['style']['display'] === 'block';
        }
    }), setInterval(_0x2f1aba, 0x3e8), setInterval(_0xf225ba, 0x3e8);
    function _0xf225ba() {
        _0x3727cc['forEach'](_0x42ccd4 => {
            const _0x171a9e = _0x42ccd4['getAttribute']('tip-id'), _0x2056b2 = localStorage['getItem'](_0x171a9e);
            _0x2056b2 && _0x2a40f7(_0x42ccd4, _0x2056b2);
        });
    }
}());
