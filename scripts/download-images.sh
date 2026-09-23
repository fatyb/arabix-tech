#!/bin/bash
OUT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/public/images/commons"
mkdir -p "$OUT_DIR"

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
REF="https://commons.wikimedia.org/"

# 1280px thumbnails (much smaller than originals) via thumb.wikimedia.org
declare -a IMAGES=(
"led-display-macro.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/LED_display.jpg/1280px-LED_display.jpg"
"control-room-vlt.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Calibrating_instruments_in_the_VLT_control_room_%28paranal-instr%29.jpg/1280px-Calibrating_instruments_in_the_VLT_control_room_%28paranal-instr%29.jpg"
"control-room-alcator.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Alcator_C-Mod_graduate_students_in_control_room.jpg/1280px-Alcator_C-Mod_graduate_students_in_control_room.jpg"
"control-room-b-reactor.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/B_reactor_control_room_2018.jpeg/1280px-B_reactor_control_room_2018.jpeg"
"billboard-shanghai.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Billboard_Lake_Malaren_Shanghai_Masters_2011.jpg/1280px-Billboard_Lake_Malaren_Shanghai_Masters_2011.jpg"
"billboard-honiara.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Australian_aid_billboard_in_Honiara%2C_Solomon_Islands%2C_2012._Photo-_Yvonne_Green_-_DFAT_%2812783782273%29.jpg/1280px-Australian_aid_billboard_in_Honiara%2C_Solomon_Islands%2C_2012._Photo-_Yvonne_Green_-_DFAT_%2812783782273%29.jpg"
"jumbotron-rogers-centre.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Jumbotron_video_board_in_Rogers_Centre.jpg/1280px-Jumbotron_video_board_in_Rogers_Centre.jpg"
"jumbotron-first-niagara.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/First_Niagara_Center_jumbotron.jpg/1280px-First_Niagara_Center_jumbotron.jpg"
"jumbotron-fare-thee-well.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Fare_Thee_Well%2C_July_3%2C_2015_-_Mickey_Hart_on_the_Jumbotron_%281%29.jpg/1280px-Fare_Thee_Well%2C_July_3%2C_2015_-_Mickey_Hart_on_the_Jumbotron_%281%29.jpg"
"jumbotron-aggievision.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Aggievision_Jumbotron_in_2010.jpg/1280px-Aggievision_Jumbotron_in_2010.jpg"
"stage-screen-hoffnungsfestival.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/HoffnungsFestival_25KA_RundBuehne_CGC-HGMM.jpg/1280px-HoffnungsFestival_25KA_RundBuehne_CGC-HGMM.jpg"
"stage-screen-ultimate-tour.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Ultimate_tour1.jpg/1280px-Ultimate_tour1.jpg"
"transparent-oled-samsung.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Samsung_Transparent_OLED_Display_%2824182257080%29.jpg/1280px-Samsung_Transparent_OLED_Display_%2824182257080%29.jpg"
"transparent-led-rotating.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Rotating_arms_with_LED%2C_forming_a_round_transparent-looking_screen.jpg/1280px-Rotating_arms_with_LED%2C_forming_a_round_transparent-looking_screen.jpg"
"led-curtain-jrw205.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/JRW205_LED_Display_curtain.jpg/1280px-JRW205_LED_Display_curtain.jpg"
"video-wall-kkmt.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/KKMT_FZ-409_end%2C_Proware_Multimedia_cashier_and_MegaRidge_video_wall_20240729.jpg/1280px-KKMT_FZ-409_end%2C_Proware_Multimedia_cashier_and_MegaRidge_video_wall_20240729.jpg"
"video-wall-bandai-namco.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Bandai_Namco_logos_and_video_wall_20260201.jpg/1280px-Bandai_Namco_logos_and_video_wall_20260201.jpg"
"signage-kiosk-kriesten.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Digital_Signage_Infoterminal_l_Photo_by_Kriesten_objekt_design_GmbH.jpg/1280px-Digital_Signage_Infoterminal_l_Photo_by_Kriesten_objekt_design_GmbH.jpg"
"signage-retail-handel.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Digital_Signage_im_Handel.jpg/1280px-Digital_Signage_im_Handel.jpg"
"interactive-whiteboard-3.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Interactive_whiteboard3.JPG/1280px-Interactive_whiteboard3.JPG"
"interactive-panel-class.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Interactive_Panel_in_6B_Class.jpg/1280px-Interactive_Panel_in_6B_Class.jpg"
"interactive-whiteboard-julong.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Julong_Interactive_whiteboard.jpg/1280px-Julong_Interactive_whiteboard.jpg"
"dubai-mall-14.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AF%D8%A8%DB%8C_%D9%85%D8%A7%D9%84%D8%8C_%D8%A8%D8%B2%D8%B1%DA%AF%D8%AA%D8%B1%DB%8C%D9%86_%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AC%D9%87%D8%A7%D9%86_The_Dubai_Mall_14.jpg/1280px-%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AF%D8%A8%DB%8C_%D9%85%D8%A7%D9%84%D8%8C_%D8%A8%D8%B2%D8%B1%DA%AF%D8%AA%D8%B1%DB%8C%D9%86_%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AC%D9%87%D8%A7%D9%86_The_Dubai_Mall_14.jpg"
"dubai-mall-30.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AF%D8%A8%DB%8C_%D9%85%D8%A7%D9%84%D8%8C_%D8%A8%D8%B2%D8%B1%DA%AF%D8%AA%D8%B1%DB%8C%D9%86_%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AC%D9%87%D8%A7%D9%86_The_Dubai_Mall_30.jpg/1280px-%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AF%D8%A8%DB%8C_%D9%85%D8%A7%D9%84%D8%8C_%D8%A8%D8%B2%D8%B1%DA%AF%D8%AA%D8%B1%DB%8C%D9%86_%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AC%D9%87%D8%A7%D9%86_The_Dubai_Mall_30.jpg"
"dubai-mall-31.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AF%D8%A8%DB%8C_%D9%85%D8%A7%D9%84%D8%8C_%D8%A8%D8%B2%D8%B1%DA%AF%D8%AA%D8%B1%DB%8C%D9%86_%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AC%D9%87%D8%A7%D9%86_The_Dubai_Mall_31.jpg/1280px-%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AF%D8%A8%DB%8C_%D9%85%D8%A7%D9%84%D8%8C_%D8%A8%D8%B2%D8%B1%DA%AF%D8%AA%D8%B1%DB%8C%D9%86_%D9%85%D8%B1%DA%A9%D8%B2_%D8%AE%D8%B1%DB%8C%D8%AF_%D8%AC%D9%87%D8%A7%D9%86_The_Dubai_Mall_31.jpg"
"lobby-car-display-renaissance.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Lobby_Car_Display%2C_Renaissance_Center%2C_Jefferson_Avenue%2C_Detroit%2C_MI.jpg/1280px-Lobby_Car_Display%2C_Renaissance_Center%2C_Jefferson_Avenue%2C_Detroit%2C_MI.jpg"
"metro-seoul-sinchon.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Seoul-metro-240-Sinchon-station-platform-20181121-081828.jpg/1280px-Seoul-metro-240-Sinchon-station-platform-20181121-081828.jpg"
"metro-seoul-jegidong.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Seoul-metro-125-Jegidong-station-platform-20181122-121456.jpg/1280px-Seoul-metro-125-Jegidong-station-platform-20181122-121456.jpg"
"metro-seoul-hansung.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Seoul-metro-419-Hansung-university-station-platform-20181126-091736.jpg/1280px-Seoul-metro-419-Hansung-university-station-platform-20181126-091736.jpg"
"hotel-lobby-royal-hawaiian.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Lobby%2C_Royal_Hawaiian_Hotel%2C_Kalakaua_Avenue%2C_Waikiki%2C_Honolulu%2C_HI.jpg/1280px-Lobby%2C_Royal_Hawaiian_Hotel%2C_Kalakaua_Avenue%2C_Waikiki%2C_Honolulu%2C_HI.jpg"
"hotel-lobby-amantaka.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Entrance_lobby_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/1280px-Entrance_lobby_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg"
"facade-shinjuku-neon.jpg|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Buildings_with_colorful_neon_street_signs_at_blue_hour%2C_Shinjuku%2C_Tokyo.jpg/1280px-Buildings_with_colorful_neon_street_signs_at_blue_hour%2C_Shinjuku%2C_Tokyo.jpg"
)

ok=0
fail=0
for entry in "${IMAGES[@]}"; do
  name="${entry%%|*}"
  url="${entry#*|}"
  target="$OUT_DIR/$name"
  if [ -f "$target" ]; then
    echo "SKIP $name (exists)"
    ok=$((ok+1))
    continue
  fi
  success=0
  for attempt in 1 2 3 4 5; do
    if curl -sS -f -A "$UA" -e "$REF" -o "$target" "$url"; then
      success=1
      break
    fi
    rm -f "$target"
    sleep $((attempt * 3))
  done
  if [ "$success" = "1" ]; then
    size=$(stat -c%s "$target" 2>/dev/null || stat -f%z "$target")
    echo "OK   $name ($size bytes)"
    ok=$((ok+1))
  else
    echo "FAIL $name"
    fail=$((fail+1))
  fi
  sleep 1.5
done

echo ""
echo "Done. $ok succeeded, $fail failed."
