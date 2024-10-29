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
    let _0x1c56a9 = [], _0x394c62 = ![];
    const _0x4ec51c = '1.0.1', _0x585559 = '2024.10.29';
    console['log']('[Ikony\x20kamyków]\x20Załadowano\x20poprawnie\x20dodatek');
    function _0x1a0ed0() {
        const _0x44f9db = document['querySelectorAll']('.inner-grid'), _0x5ec023 = [];
        _0x44f9db['forEach'](_0x1ea890 => {
            const _0x59a77c = _0x1ea890['querySelectorAll']('div[data-name*=\x22Kamień\x20Czerwonego\x20Smoka\x22]');
            _0x59a77c['forEach'](_0x3d2117 => {
                _0x5ec023['push'](_0x3d2117);
            });
        }), (_0x5ec023['length'] !== _0x1c56a9['length'] || !_0x5ec023['every'](_0x251650 => _0x1c56a9['includes'](_0x251650))) && (_0x1c56a9 = _0x5ec023, _0x394c62 && _0x387242());
    }
    function _0x122373() {
        if (document['getElementById']('kamien-menu'))
            return;
        const _0x4ed9c5 = document['createElement']('div');
        _0x4ed9c5['id'] = 'kamien-menu', _0x4ed9c5['style']['position'] = 'fixed', _0x4ed9c5['style']['top'] = localStorage['getItem']('menuTop') || '20%', _0x4ed9c5['style']['left'] = localStorage['getItem']('menuLeft') || '30%', _0x4ed9c5['style']['width'] = '255px', _0x4ed9c5['style']['padding'] = '10px', _0x4ed9c5['style']['color'] = 'rgba(245,\x2013,\x20255,\x200.8)', _0x4ed9c5['style']['backgroundColor'] = 'rgba(0,\x200,\x200,\x200.8)', _0x4ed9c5['style']['border'] = '2px\x20solid\x20rgba(245,\x2013,\x20255,\x200.8)', _0x4ed9c5['style']['zIndex'] = '1000', _0x4ed9c5['style']['display'] = 'none';
        const _0x316c3d = document['createElement']('h2');
        _0x316c3d['textContent'] = 'Kamienie\x20w\x20ekwipunku', _0x4ed9c5['appendChild'](_0x316c3d);
        const _0xc30640 = document['createElement']('div');
        _0xc30640['id'] = 'kamienie-list', _0x4ed9c5['appendChild'](_0xc30640), document['body']['appendChild'](_0x4ed9c5), _0x387242(), _0x289f88(_0x4ed9c5);
    }
    function _0x289f88(_0x48eae0) {
        let _0x4c401f = ![], _0x716cfa = {
                'x': 0x0,
                'y': 0x0
            };
        _0x48eae0['addEventListener']('mousedown', function (_0x2ab29e) {
            _0x4c401f = !![], _0x716cfa['x'] = _0x2ab29e['clientX'] - _0x48eae0['getBoundingClientRect']()['left'], _0x716cfa['y'] = _0x2ab29e['clientY'] - _0x48eae0['getBoundingClientRect']()['top'], _0x48eae0['style']['cursor'] = 'grabbing';
        }), document['addEventListener']('mousemove', function (_0x1ad507) {
            _0x4c401f && (_0x48eae0['style']['left'] = _0x1ad507['clientX'] - _0x716cfa['x'] + 'px', _0x48eae0['style']['top'] = _0x1ad507['clientY'] - _0x716cfa['y'] + 'px');
        }), document['addEventListener']('mouseup', function () {
            _0x4c401f && (_0x4c401f = ![], _0x48eae0['style']['cursor'] = 'grab', localStorage['setItem']('menuTop', _0x48eae0['style']['top']), localStorage['setItem']('menuLeft', _0x48eae0['style']['left']));
        }), _0x48eae0['style']['cursor'] = 'grab';
    }
    function _0x387242() {
        const _0x3daa06 = document['getElementById']('kamienie-list');
        _0x3daa06['innerHTML'] = '';
        const _0x1fa102 = [
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
                'src': 'https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wazka.gif'
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
        _0x1c56a9['forEach'](_0x12e15c => {
            const _0x57d726 = _0x12e15c['getAttribute']('data-name'), _0x3fc202 = _0x12e15c['getAttribute']('tip-id'), _0x2c6f24 = document['createElement']('div');
            _0x2c6f24['style']['marginBottom'] = '15px';
            const _0x2c8c0d = document['createElement']('p');
            _0x2c8c0d['textContent'] = _0x57d726, _0x2c6f24['appendChild'](_0x2c8c0d);
            const _0x4ce8da = document['createElement']('select');
            _0x1fa102['forEach'](_0x3d3839 => {
                const _0x197105 = document['createElement']('option');
                _0x197105['value'] = _0x3d3839['src'], _0x197105['textContent'] = _0x3d3839['name'], _0x4ce8da['appendChild'](_0x197105);
            }), _0x2c6f24['appendChild'](_0x4ce8da);
            const _0xe3061b = localStorage['getItem'](_0x3fc202);
            _0xe3061b && (_0x4ce8da['value'] = _0xe3061b, _0x5cb9cd(_0x12e15c, _0xe3061b)), _0x4ce8da['addEventListener']('change', function () {
                const _0xc76fb0 = _0x4ce8da['value'];
                _0x5cb9cd(_0x12e15c, _0xc76fb0), localStorage['setItem'](_0x3fc202, _0xc76fb0);
            }), _0x3daa06['appendChild'](_0x2c6f24);
        });
        const _0x17ec0d = document['createElement']('div');
        _0x17ec0d['style']['marginTop'] = '20px', _0x17ec0d['style']['color'] = 'rgba(255,\x20255,\x20255,\x200.8)', _0x17ec0d['innerHTML'] = '<p>Wersja\x20skryptu:\x20<strong>' + _0x4ec51c + '</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Wersja\x20buildu:\x20<strong>' + _0x585559 + '</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Autor:\x20<strong>Kasztanowka</strong></p>', _0x3daa06['appendChild'](_0x17ec0d);
    }
    function _0x5cb9cd(_0x4163a1, _0x372795) {
        const _0x270ed2 = _0x4163a1['querySelector']('canvas.icon.canvas-icon');
        if (_0x270ed2) {
            const _0x2e57ef = _0x270ed2['getContext']('2d'), _0x25dd27 = new Image();
            _0x25dd27['src'] = _0x372795, _0x25dd27['onload'] = function () {
                _0x2e57ef['clearRect'](0x0, 0x0, _0x270ed2['width'], _0x270ed2['height']);
                const _0x59082e = Math['min'](_0x270ed2['width'] / _0x25dd27['width'], _0x270ed2['height'] / _0x25dd27['height']), _0x22b1e6 = _0x25dd27['width'] * _0x59082e, _0x852ace = _0x25dd27['height'] * _0x59082e, _0x55c307 = (_0x270ed2['width'] - _0x22b1e6) / 0x2, _0x1dce2c = (_0x270ed2['height'] - _0x852ace) / 0x2;
                _0x2e57ef['drawImage'](_0x25dd27, _0x55c307, _0x1dce2c, _0x22b1e6, _0x852ace);
            };
        }
    }
    document['addEventListener']('keydown', function (_0x2ec636) {
        if (_0x2ec636['key'] === ']') {
            const _0x84e53e = document['getElementById']('kamien-menu');
            !_0x84e53e && _0x122373(), _0x84e53e['style']['display'] = _0x84e53e['style']['display'] === 'none' ? 'block' : 'none', _0x394c62 = _0x84e53e['style']['display'] === 'block';
        }
    }), setInterval(_0x1a0ed0, 0x3e8), setInterval(_0x4d3dee, 0x3e8);
    function _0x4d3dee() {
        _0x1c56a9['forEach'](_0x451a3e => {
            const _0x48326e = _0x451a3e['getAttribute']('tip-id'), _0x37f732 = localStorage['getItem'](_0x48326e);
            _0x37f732 && _0x5cb9cd(_0x451a3e, _0x37f732);
        });
    }
}());
