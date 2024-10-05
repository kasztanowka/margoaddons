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
    let a = [], b = ![];
    const c = '1.0.0', d = '2024.10.05';
    console['log']('[Ikony\x20kamyków]\x20Załadowano\x20poprawnie\x20dodatek');
    function e() {
        const k = document['querySelectorAll']('.inner-grid'), l = [];
        k['forEach'](m => {
            const n = m['querySelectorAll']('div[data-name*=\x22Kamień\x20Czerwonego\x20Smoka\x22]');
            n['forEach'](o => {
                l['push'](o);
            });
        }), (l['length'] !== a['length'] || !l['every'](m => a['includes'](m))) && (a = l, b && h());
    }
    function f() {
        if (document['getElementById']('kamien-menu'))
            return;
        const k = document['createElement']('div');
        k['id'] = 'kamien-menu', k['style']['position'] = 'fixed', k['style']['top'] = localStorage['getItem']('menuTop') || '20%', k['style']['left'] = localStorage['getItem']('menuLeft') || '30%', k['style']['width'] = '255px', k['style']['padding'] = '10px', k['style']['color'] = 'rgba(245,\x2013,\x20255,\x200.8)', k['style']['backgroundColor'] = 'rgba(0,\x200,\x200,\x200.8)', k['style']['border'] = '2px\x20solid\x20rgba(245,\x2013,\x20255,\x200.8)', k['style']['zIndex'] = '1000', k['style']['display'] = 'none';
        const l = document['createElement']('h2');
        l['textContent'] = 'Kamienie\x20w\x20ekwipunku', k['appendChild'](l);
        const m = document['createElement']('div');
        m['id'] = 'kamienie-list', k['appendChild'](m), document['body']['appendChild'](k), h(), g(k);
    }
    function g(k) {
        let l = ![], m = {
                'x': 0x0,
                'y': 0x0
            };
        k['addEventListener']('mousedown', function (n) {
            l = !![], m['x'] = n['clientX'] - k['getBoundingClientRect']()['left'], m['y'] = n['clientY'] - k['getBoundingClientRect']()['top'], k['style']['cursor'] = 'grabbing';
        }), document['addEventListener']('mousemove', function (n) {
            l && (k['style']['left'] = n['clientX'] - m['x'] + 'px', k['style']['top'] = n['clientY'] - m['y'] + 'px');
        }), document['addEventListener']('mouseup', function () {
            l && (l = ![], k['style']['cursor'] = 'grab', localStorage['setItem']('menuTop', k['style']['top']), localStorage['setItem']('menuLeft', k['style']['left']));
        }), k['style']['cursor'] = 'grab';
    }
    function h() {
        const k = document['getElementById']('kamienie-list');
        k['innerHTML'] = '';
        const l = [
            {
                'name': 'Brak',
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
            }
        ];
        a['forEach'](n => {
            const o = n['getAttribute']('data-name'), p = n['getAttribute']('tip-id'), q = document['createElement']('div');
            q['style']['marginBottom'] = '15px';
            const r = document['createElement']('p');
            r['textContent'] = o, q['appendChild'](r);
            const s = document['createElement']('select');
            l['forEach'](u => {
                const v = document['createElement']('option');
                v['value'] = u['src'], v['textContent'] = u['name'], s['appendChild'](v);
            }), q['appendChild'](s);
            const t = localStorage['getItem'](p);
            t && (s['value'] = t, i(n, t)), s['addEventListener']('change', function () {
                const u = s['value'];
                i(n, u), localStorage['setItem'](p, u);
            }), k['appendChild'](q);
        });
        const m = document['createElement']('div');
        m['style']['marginTop'] = '20px', m['style']['color'] = 'rgba(255,\x20255,\x20255,\x200.8)', m['innerHTML'] = '<p>Wersja\x20skryptu:\x20<strong>' + c + '</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Wersja\x20buildu:\x20<strong>' + d + '</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Autor:\x20<strong>Kasztanowka</strong></p>', k['appendChild'](m);
    }
    function i(k, l) {
        const m = k['querySelector']('canvas.icon.canvas-icon');
        if (m) {
            const n = m['getContext']('2d'), o = new Image();
            o['src'] = l, o['onload'] = function () {
                n['clearRect'](0x0, 0x0, m['width'], m['height']), n['drawImage'](o, 0x0, 0x0, m['width'], m['height']);
            };
        }
    }
    document['addEventListener']('keydown', function (k) {
        if (k['shiftKey'] && k['key'] === 'Z') {
            const l = document['getElementById']('kamien-menu');
            !l && f(), l['style']['display'] = l['style']['display'] === 'none' ? 'block' : 'none', b = l['style']['display'] === 'block';
        }
    }), setInterval(e, 0x3e8), setInterval(j, 0x3e8);
    function j() {
        a['forEach'](k => {
            const l = k['getAttribute']('tip-id'), m = localStorage['getItem'](l);
            m && i(k, m);
        });
    }
}());