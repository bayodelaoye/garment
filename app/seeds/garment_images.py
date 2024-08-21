from sqlalchemy.sql import text

from app.models import SCHEMA, GarmentImage, db, environment


# Adds a demo user, you can add other users here if you want
def seed_garment_images():
    for garment_image in [
        {
            "garment_id": 1,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256276/product_13_n25hun.png",
            "preview": True,
        },
        {
            "garment_id": 1,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256276/product_13_n25hun.png",
            "preview": False,
        },
        {
            "garment_id": 1,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256276/product_13_n25hun.png",
            "preview": False,
        },
        {
            "garment_id": 1,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256276/product_13_n25hun.png",
            "preview": False,
        },
        {
            "garment_id": 2,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256301/product_14_oydkep.png",
            "preview": True,
        },
        {
            "garment_id": 2,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256301/product_14_oydkep.png",
            "preview": False,
        },
        {
            "garment_id": 2,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256301/product_14_oydkep.png",
            "preview": False,
        },
        {
            "garment_id": 2,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256301/product_14_oydkep.png",
            "preview": False,
        },
        {
            "garment_id": 3,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256348/product_15_j6xvga.png",
            "preview": True,
        },
        {
            "garment_id": 3,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256348/product_15_j6xvga.png",
            "preview": False,
        },
        {
            "garment_id": 3,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256348/product_15_j6xvga.png",
            "preview": False,
        },
        {
            "garment_id": 3,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256348/product_15_j6xvga.png",
            "preview": False,
        },
        {
            "garment_id": 4,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_16_yi5cua.png",
            "preview": True,
        },
        {
            "garment_id": 4,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_16_yi5cua.png",
            "preview": False,
        },
        {
            "garment_id": 4,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_16_yi5cua.png",
            "preview": False,
        },
        {
            "garment_id": 4,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_16_yi5cua.png",
            "preview": False,
        },
        {
            "garment_id": 5,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_17_sgdzlb.png",
            "preview": True,
        },
        {
            "garment_id": 5,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_17_sgdzlb.png",
            "preview": False,
        },
        {
            "garment_id": 5,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_17_sgdzlb.png",
            "preview": False,
        },
        {
            "garment_id": 5,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_17_sgdzlb.png",
            "preview": False,
        },
        {
            "garment_id": 6,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_18_uskofx.png",
            "preview": True,
        },
        {
            "garment_id": 6,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_18_uskofx.png",
            "preview": False,
        },
        {
            "garment_id": 6,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_18_uskofx.png",
            "preview": False,
        },
        {
            "garment_id": 6,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256349/product_18_uskofx.png",
            "preview": False,
        },
        {
            "garment_id": 7,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256350/product_19_gea6mw.png",
            "preview": True,
        },
        {
            "garment_id": 7,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256350/product_19_gea6mw.png",
            "preview": False,
        },
        {
            "garment_id": 7,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256350/product_19_gea6mw.png",
            "preview": False,
        },
        {
            "garment_id": 7,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256350/product_19_gea6mw.png",
            "preview": False,
        },
        {
            "garment_id": 8,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256350/product_20_fqwtwo.png",
            "preview": True,
        },
        {
            "garment_id": 8,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256350/product_20_fqwtwo.png",
            "preview": False,
        },
        {
            "garment_id": 8,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256350/product_20_fqwtwo.png",
            "preview": False,
        },
        {
            "garment_id": 8,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256350/product_20_fqwtwo.png",
            "preview": False,
        },
        {
            "garment_id": 9,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256351/product_21_yvnwli.png",
            "preview": True,
        },
        {
            "garment_id": 9,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256351/product_21_yvnwli.png",
            "preview": False,
        },
        {
            "garment_id": 9,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256351/product_21_yvnwli.png",
            "preview": False,
        },
        {
            "garment_id": 9,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256351/product_21_yvnwli.png",
            "preview": False,
        },
        {
            "garment_id": 10,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256352/product_22_e27mnq.png",
            "preview": True,
        },
        {
            "garment_id": 10,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256352/product_22_e27mnq.png",
            "preview": False,
        },
        {
            "garment_id": 10,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256352/product_22_e27mnq.png",
            "preview": False,
        },
        {
            "garment_id": 10,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256352/product_22_e27mnq.png",
            "preview": False,
        },
        {
            "garment_id": 11,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256352/product_23_bd8aia.png",
            "preview": True,
        },
        {
            "garment_id": 11,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256352/product_23_bd8aia.png",
            "preview": False,
        },
        {
            "garment_id": 11,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256352/product_23_bd8aia.png",
            "preview": False,
        },
        {
            "garment_id": 11,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256352/product_23_bd8aia.png",
            "preview": False,
        },
        {
            "garment_id": 12,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256353/product_24_mvpa9b.png",
            "preview": True,
        },
        {
            "garment_id": 12,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256353/product_24_mvpa9b.png",
            "preview": False,
        },
        {
            "garment_id": 12,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256353/product_24_mvpa9b.png",
            "preview": False,
        },
        {
            "garment_id": 12,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256353/product_24_mvpa9b.png",
            "preview": False,
        },
        {
            "garment_id": 13,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256832/product_1_joinje.png",
            "preview": True,
        },
        {
            "garment_id": 13,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256832/product_1_joinje.png",
            "preview": False,
        },
        {
            "garment_id": 13,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256832/product_1_joinje.png",
            "preview": False,
        },
        {
            "garment_id": 13,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256832/product_1_joinje.png",
            "preview": False,
        },
        {
            "garment_id": 14,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256832/product_2_qxdmpf.png",
            "preview": True,
        },
        {
            "garment_id": 14,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256832/product_2_qxdmpf.png",
            "preview": False,
        },
        {
            "garment_id": 14,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256832/product_2_qxdmpf.png",
            "preview": False,
        },
        {
            "garment_id": 14,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256832/product_2_qxdmpf.png",
            "preview": False,
        },
        {
            "garment_id": 15,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256834/product_3_juiy4s.png",
            "preview": True,
        },
        {
            "garment_id": 15,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256834/product_3_juiy4s.png",
            "preview": False,
        },
        {
            "garment_id": 15,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256834/product_3_juiy4s.png",
            "preview": False,
        },
        {
            "garment_id": 15,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256834/product_3_juiy4s.png",
            "preview": False,
        },
        {
            "garment_id": 16,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256835/product_4_tt3a3z.png",
            "preview": True,
        },
        {
            "garment_id": 16,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256835/product_4_tt3a3z.png",
            "preview": False,
        },
        {
            "garment_id": 16,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256835/product_4_tt3a3z.png",
            "preview": False,
        },
        {
            "garment_id": 16,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256835/product_4_tt3a3z.png",
            "preview": False,
        },
        {
            "garment_id": 17,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256836/product_5_lkm6gm.png",
            "preview": True,
        },
        {
            "garment_id": 17,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256836/product_5_lkm6gm.png",
            "preview": False,
        },
        {
            "garment_id": 17,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256836/product_5_lkm6gm.png",
            "preview": False,
        },
        {
            "garment_id": 17,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256836/product_5_lkm6gm.png",
            "preview": False,
        },
        {
            "garment_id": 18,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256837/product_6_p5hedl.png",
            "preview": True,
        },
        {
            "garment_id": 18,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256837/product_6_p5hedl.png",
            "preview": False,
        },
        {
            "garment_id": 18,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256837/product_6_p5hedl.png",
            "preview": False,
        },
        {
            "garment_id": 18,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256837/product_6_p5hedl.png",
            "preview": False,
        },
        {
            "garment_id": 19,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256838/product_7_krzkw8.png",
            "preview": True,
        },
        {
            "garment_id": 19,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256838/product_7_krzkw8.png",
            "preview": False,
        },
        {
            "garment_id": 19,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256838/product_7_krzkw8.png",
            "preview": False,
        },
        {
            "garment_id": 19,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256838/product_7_krzkw8.png",
            "preview": False,
        },
        {
            "garment_id": 20,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256840/product_8_yifil9.png",
            "preview": True,
        },
        {
            "garment_id": 20,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256840/product_8_yifil9.png",
            "preview": False,
        },
        {
            "garment_id": 20,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256840/product_8_yifil9.png",
            "preview": False,
        },
        {
            "garment_id": 20,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256840/product_8_yifil9.png",
            "preview": False,
        },
        {
            "garment_id": 21,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256841/product_9_jynnkt.png",
            "preview": True,
        },
        {
            "garment_id": 21,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256841/product_9_jynnkt.png",
            "preview": False,
        },
        {
            "garment_id": 21,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256841/product_9_jynnkt.png",
            "preview": False,
        },
        {
            "garment_id": 21,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256841/product_9_jynnkt.png",
            "preview": False,
        },
        {
            "garment_id": 22,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256842/product_10_scy1an.png",
            "preview": True,
        },
        {
            "garment_id": 22,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256842/product_10_scy1an.png",
            "preview": False,
        },
        {
            "garment_id": 22,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256842/product_10_scy1an.png",
            "preview": False,
        },
        {
            "garment_id": 22,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256842/product_10_scy1an.png",
            "preview": False,
        },
        {
            "garment_id": 23,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256844/product_11_z8xuph.png",
            "preview": True,
        },
        {
            "garment_id": 23,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256844/product_11_z8xuph.png",
            "preview": False,
        },
        {
            "garment_id": 23,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256844/product_11_z8xuph.png",
            "preview": False,
        },
        {
            "garment_id": 23,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256844/product_11_z8xuph.png",
            "preview": False,
        },
        {
            "garment_id": 24,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256845/product_12_rfs9fv.png",
            "preview": True,
        },
        {
            "garment_id": 24,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256845/product_12_rfs9fv.png",
            "preview": False,
        },
        {
            "garment_id": 24,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256845/product_12_rfs9fv.png",
            "preview": False,
        },
        {
            "garment_id": 24,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724256845/product_12_rfs9fv.png",
            "preview": False,
        },
        {
            "garment_id": 25,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257085/product_25_k316t5.png",
            "preview": True,
        },
        {
            "garment_id": 25,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257085/product_25_k316t5.png",
            "preview": False,
        },
        {
            "garment_id": 25,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257085/product_25_k316t5.png",
            "preview": False,
        },
        {
            "garment_id": 25,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257085/product_25_k316t5.png",
            "preview": False,
        },
        {
            "garment_id": 26,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257087/product_26_qom9eu.png",
            "preview": True,
        },
        {
            "garment_id": 26,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257087/product_26_qom9eu.png",
            "preview": False,
        },
        {
            "garment_id": 26,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257087/product_26_qom9eu.png",
            "preview": False,
        },
        {
            "garment_id": 26,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257087/product_26_qom9eu.png",
            "preview": False,
        },
        {
            "garment_id": 27,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257088/product_27_du7kte.png",
            "preview": True,
        },
        {
            "garment_id": 27,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257088/product_27_du7kte.png",
            "preview": False,
        },
        {
            "garment_id": 27,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257088/product_27_du7kte.png",
            "preview": False,
        },
        {
            "garment_id": 27,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257088/product_27_du7kte.png",
            "preview": False,
        },
        {
            "garment_id": 28,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257090/product_28_jmzy9k.png",
            "preview": True,
        },
        {
            "garment_id": 28,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257090/product_28_jmzy9k.png",
            "preview": False,
        },
        {
            "garment_id": 28,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257090/product_28_jmzy9k.png",
            "preview": False,
        },
        {
            "garment_id": 28,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257090/product_28_jmzy9k.png",
            "preview": False,
        },
        {
            "garment_id": 29,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257092/product_29_wfd9uy.png",
            "preview": True,
        },
        {
            "garment_id": 29,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257092/product_29_wfd9uy.png",
            "preview": False,
        },
        {
            "garment_id": 29,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257092/product_29_wfd9uy.png",
            "preview": False,
        },
        {
            "garment_id": 29,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257092/product_29_wfd9uy.png",
            "preview": False,
        },
        {
            "garment_id": 30,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257094/product_30_znigqt.png",
            "preview": True,
        },
        {
            "garment_id": 30,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257094/product_30_znigqt.png",
            "preview": False,
        },
        {
            "garment_id": 30,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257094/product_30_znigqt.png",
            "preview": False,
        },
        {
            "garment_id": 30,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257094/product_30_znigqt.png",
            "preview": False,
        },
        {
            "garment_id": 31,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257095/product_31_hhu5ao.png",
            "preview": True,
        },
        {
            "garment_id": 31,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257095/product_31_hhu5ao.png",
            "preview": False,
        },
        {
            "garment_id": 31,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257095/product_31_hhu5ao.png",
            "preview": False,
        },
        {
            "garment_id": 31,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257095/product_31_hhu5ao.png",
            "preview": False,
        },
        {
            "garment_id": 32,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257097/product_32_b1d4dl.png",
            "preview": True,
        },
        {
            "garment_id": 32,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257097/product_32_b1d4dl.png",
            "preview": False,
        },
        {
            "garment_id": 32,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257097/product_32_b1d4dl.png",
            "preview": False,
        },
        {
            "garment_id": 32,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257097/product_32_b1d4dl.png",
            "preview": False,
        },
        {
            "garment_id": 33,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257099/product_33_ynhzay.png",
            "preview": True,
        },
        {
            "garment_id": 33,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257099/product_33_ynhzay.png",
            "preview": False,
        },
        {
            "garment_id": 33,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257099/product_33_ynhzay.png",
            "preview": False,
        },
        {
            "garment_id": 33,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257099/product_33_ynhzay.png",
            "preview": False,
        },
        {
            "garment_id": 34,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257100/product_34_wpwrnm.png",
            "preview": True,
        },
        {
            "garment_id": 34,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257100/product_34_wpwrnm.png",
            "preview": False,
        },
        {
            "garment_id": 34,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257100/product_34_wpwrnm.png",
            "preview": False,
        },
        {
            "garment_id": 34,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257100/product_34_wpwrnm.png",
            "preview": False,
        },
        {
            "garment_id": 35,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257102/product_35_qqttho.png",
            "preview": True,
        },
        {
            "garment_id": 35,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257102/product_35_qqttho.png",
            "preview": False,
        },
        {
            "garment_id": 35,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257102/product_35_qqttho.png",
            "preview": False,
        },
        {
            "garment_id": 35,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257102/product_35_qqttho.png",
            "preview": False,
        },
        {
            "garment_id": 36,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257104/product_36_xedhmb.png",
            "preview": True,
        },
        {
            "garment_id": 36,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257104/product_36_xedhmb.png",
            "preview": False,
        },
        {
            "garment_id": 36,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257104/product_36_xedhmb.png",
            "preview": False,
        },
        {
            "garment_id": 36,
            "url": "https://res.cloudinary.com/dsb4nx6zn/image/upload/v1724257104/product_36_xedhmb.png",
            "preview": False,
        },
    ]:
        db.session.add(GarmentImage(**garment_image))
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_garment_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.garment_images RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM garment_images"))

    db.session.commit()
