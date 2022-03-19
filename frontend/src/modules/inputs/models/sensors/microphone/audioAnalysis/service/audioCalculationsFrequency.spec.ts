import {
  AudioCalculationsFrequency
} from '@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsFrequency'

describe('AudioCalculationsFrequency', () => {
  describe('calcFrequencyResolution', () => {
    it('should return 21.5332 if sample rate is 44100 and buffer size is 2048', () => {
      expect(AudioCalculationsFrequency._frequencyResolution(44100, 2048)).toBe(21.5332)
    })
    it('should return 43.0664 if sample rate is 44100 and buffer size is 1024', () => {
      expect(AudioCalculationsFrequency._frequencyResolution(44100, 1024)).toBe(43.0664)
    })
    it('should return 46.875 if sample rate is 48000 and buffer size is 1024', () => {
      expect(AudioCalculationsFrequency._frequencyResolution(48000, 1024)).toBe(46.875)
    })
    it('should return 172.2656 if sample rate is 44100 and buffer size is 256', () => {
      expect(AudioCalculationsFrequency._frequencyResolution(44100, 256)).toBe(172.2656)
    })
    it('should return 2.6916 if sample rate is 44100 and buffer size is 16384', () => {
      expect(AudioCalculationsFrequency._frequencyResolution(44100, 16384)).toBe(2.6917)
    })
  })
  describe('calcFrequency', () => {
    it('should return 0 if bin index is 0 and frequency resolution is 43.0664', () => {
      expect(AudioCalculationsFrequency._frequency(0, 43.0664)).toBe(0)
    })
    it('should return 43.0664 if bin index is 1 and frequency resolution is 43.0664', () => {
      expect(AudioCalculationsFrequency._frequency(1, 43.0664)).toBe(43.0664)
    })
    it('should return 44099.9936 if bin index is 1024 and frequency resolution is 43.0664', () => {
      expect(AudioCalculationsFrequency._frequency(1024, 43.0664)).toBe(44099.9936)
    })
  })
  describe('calcFrequenciesUsingFrequencyResolution', () => {
    it('should return the correct result', () => {
      const expected = [0, 43.0664, 86.1328, 129.1992, 172.2656, 215.332, 258.3984, 301.4648, 344.5312, 387.5976, 430.664, 473.7304, 516.7968, 559.8632, 602.9296, 645.996]
      expect(AudioCalculationsFrequency._frequenciesUsingFrequencyResolution(43.0664, 32)).toStrictEqual(expected)
    })
  })
  describe('calcFrequencies', () => {
    it('should return 21.5332 if sample rate is 44100 and buffer size is 2048', () => {
      const expected = [
        0,
        43.0664,
        86.1328,
        129.1992,
        172.2656,
        215.332,
        258.3984,
        301.4648,
        344.5312,
        387.5976,
        430.664,
        473.7304,
        516.7968,
        559.8632,
        602.9296,
        645.996,
        689.0624,
        732.1288,
        775.1952,
        818.2616,
        861.328,
        904.3944,
        947.4608,
        990.5272,
        1033.5936,
        1076.66,
        1119.7264,
        1162.7928,
        1205.8592,
        1248.9256,
        1291.992,
        1335.0584,
        1378.1248,
        1421.1912,
        1464.2576,
        1507.324,
        1550.3904,
        1593.4568,
        1636.5232,
        1679.5896,
        1722.656,
        1765.7224,
        1808.7888,
        1851.8552,
        1894.9216,
        1937.988,
        1981.0544,
        2024.1208,
        2067.1872,
        2110.2536,
        2153.32,
        2196.3864,
        2239.4528,
        2282.5192,
        2325.5856,
        2368.652,
        2411.7184,
        2454.7848,
        2497.8512,
        2540.9176,
        2583.984,
        2627.0504,
        2670.1168,
        2713.1832,
        2756.2496,
        2799.316,
        2842.3824,
        2885.4488,
        2928.5152,
        2971.5816,
        3014.648,
        3057.7144,
        3100.7808,
        3143.8472,
        3186.9136,
        3229.98,
        3273.0464,
        3316.1128,
        3359.1792,
        3402.2456,
        3445.312,
        3488.3784,
        3531.4448,
        3574.5112,
        3617.5776,
        3660.644,
        3703.7104,
        3746.7768,
        3789.8432,
        3832.9096,
        3875.976,
        3919.0424,
        3962.1088,
        4005.1752,
        4048.2416,
        4091.308,
        4134.3744,
        4177.4408,
        4220.5072,
        4263.5736,
        4306.64,
        4349.7064,
        4392.7728,
        4435.8392,
        4478.9056,
        4521.972,
        4565.0384,
        4608.1048,
        4651.1712,
        4694.2376,
        4737.304,
        4780.3704,
        4823.4368,
        4866.5032,
        4909.5696,
        4952.636,
        4995.7024,
        5038.7688,
        5081.8352,
        5124.9016,
        5167.968,
        5211.0344,
        5254.1008,
        5297.1672,
        5340.2336,
        5383.3,
        5426.3664,
        5469.4328,
        5512.4992,
        5555.5656,
        5598.632,
        5641.6984,
        5684.7648,
        5727.8312,
        5770.8976,
        5813.964,
        5857.0304,
        5900.0968,
        5943.1632,
        5986.2296,
        6029.296,
        6072.3624,
        6115.4288,
        6158.4952,
        6201.5616,
        6244.628,
        6287.6944,
        6330.7608,
        6373.8272,
        6416.8936,
        6459.96,
        6503.0264,
        6546.0928,
        6589.1592,
        6632.2256,
        6675.292,
        6718.3584,
        6761.4248,
        6804.4912,
        6847.5576,
        6890.624,
        6933.6904,
        6976.7568,
        7019.8232,
        7062.8896,
        7105.956,
        7149.0224,
        7192.0888,
        7235.1552,
        7278.2216,
        7321.288,
        7364.3544,
        7407.4208,
        7450.4872,
        7493.5536,
        7536.62,
        7579.6864,
        7622.7528,
        7665.8192,
        7708.8856,
        7751.952,
        7795.0184,
        7838.0848,
        7881.1512,
        7924.2176,
        7967.284,
        8010.3504,
        8053.4168,
        8096.4832,
        8139.5496,
        8182.616,
        8225.6824,
        8268.7488,
        8311.8152,
        8354.8816,
        8397.948,
        8441.0144,
        8484.0808,
        8527.1472,
        8570.2136,
        8613.28,
        8656.3464,
        8699.4128,
        8742.4792,
        8785.5456,
        8828.612,
        8871.6784,
        8914.7448,
        8957.8112,
        9000.8776,
        9043.944,
        9087.0104,
        9130.0768,
        9173.1432,
        9216.2096,
        9259.276,
        9302.3424,
        9345.4088,
        9388.4752,
        9431.5416,
        9474.608,
        9517.6744,
        9560.7408,
        9603.8072,
        9646.8736,
        9689.94,
        9733.0064,
        9776.0728,
        9819.1392,
        9862.2056,
        9905.272,
        9948.3384,
        9991.4048,
        10034.4712,
        10077.5376,
        10120.604,
        10163.6704,
        10206.7368,
        10249.8032,
        10292.8696,
        10335.936,
        10379.0024,
        10422.0688,
        10465.1352,
        10508.2016,
        10551.268,
        10594.3344,
        10637.4008,
        10680.4672,
        10723.5336,
        10766.6,
        10809.6664,
        10852.7328,
        10895.7992,
        10938.8656,
        10981.932,
        11024.9984,
        11068.0648,
        11111.1312,
        11154.1976,
        11197.264,
        11240.3304,
        11283.3968,
        11326.4632,
        11369.5296,
        11412.596,
        11455.6624,
        11498.7288,
        11541.7952,
        11584.8616,
        11627.928,
        11670.9944,
        11714.0608,
        11757.1272,
        11800.1936,
        11843.26,
        11886.3264,
        11929.3928,
        11972.4592,
        12015.5256,
        12058.592,
        12101.6584,
        12144.7248,
        12187.7912,
        12230.8576,
        12273.924,
        12316.9904,
        12360.0568,
        12403.1232,
        12446.1896,
        12489.256,
        12532.3224,
        12575.3888,
        12618.4552,
        12661.5216,
        12704.588,
        12747.6544,
        12790.7208,
        12833.7872,
        12876.8536,
        12919.92,
        12962.9864,
        13006.0528,
        13049.1192,
        13092.1856,
        13135.252,
        13178.3184,
        13221.3848,
        13264.4512,
        13307.5176,
        13350.584,
        13393.6504,
        13436.7168,
        13479.7832,
        13522.8496,
        13565.916,
        13608.9824,
        13652.0488,
        13695.1152,
        13738.1816,
        13781.248,
        13824.3144,
        13867.3808,
        13910.4472,
        13953.5136,
        13996.58,
        14039.6464,
        14082.7128,
        14125.7792,
        14168.8456,
        14211.912,
        14254.9784,
        14298.0448,
        14341.1112,
        14384.1776,
        14427.244,
        14470.3104,
        14513.3768,
        14556.4432,
        14599.5096,
        14642.576,
        14685.6424,
        14728.7088,
        14771.7752,
        14814.8416,
        14857.908,
        14900.9744,
        14944.0408,
        14987.1072,
        15030.1736,
        15073.24,
        15116.3064,
        15159.3728,
        15202.4392,
        15245.5056,
        15288.572,
        15331.6384,
        15374.7048,
        15417.7712,
        15460.8376,
        15503.904,
        15546.9704,
        15590.0368,
        15633.1032,
        15676.1696,
        15719.236,
        15762.3024,
        15805.3688,
        15848.4352,
        15891.5016,
        15934.568,
        15977.6344,
        16020.7008,
        16063.7672,
        16106.8336,
        16149.9,
        16192.9664,
        16236.0328,
        16279.0992,
        16322.1656,
        16365.232,
        16408.2984,
        16451.3648,
        16494.4312,
        16537.4976,
        16580.564,
        16623.6304,
        16666.6968,
        16709.7632,
        16752.8296,
        16795.896,
        16838.9624,
        16882.0288,
        16925.0952,
        16968.1616,
        17011.228,
        17054.2944,
        17097.3608,
        17140.4272,
        17183.4936,
        17226.56,
        17269.6264,
        17312.6928,
        17355.7592,
        17398.8256,
        17441.892,
        17484.9584,
        17528.0248,
        17571.0912,
        17614.1576,
        17657.224,
        17700.2904,
        17743.3568,
        17786.4232,
        17829.4896,
        17872.556,
        17915.6224,
        17958.6888,
        18001.7552,
        18044.8216,
        18087.888,
        18130.9544,
        18174.0208,
        18217.0872,
        18260.1536,
        18303.22,
        18346.2864,
        18389.3528,
        18432.4192,
        18475.4856,
        18518.552,
        18561.6184,
        18604.6848,
        18647.7512,
        18690.8176,
        18733.884,
        18776.9504,
        18820.0168,
        18863.0832,
        18906.1496,
        18949.216,
        18992.2824,
        19035.3488,
        19078.4152,
        19121.4816,
        19164.548,
        19207.6144,
        19250.6808,
        19293.7472,
        19336.8136,
        19379.88,
        19422.9464,
        19466.0128,
        19509.0792,
        19552.1456,
        19595.212,
        19638.2784,
        19681.3448,
        19724.4112,
        19767.4776,
        19810.544,
        19853.6104,
        19896.6768,
        19939.7432,
        19982.8096,
        20025.876,
        20068.9424,
        20112.0088,
        20155.0752,
        20198.1416,
        20241.208,
        20284.2744,
        20327.3408,
        20370.4072,
        20413.4736,
        20456.54,
        20499.6064,
        20542.6728,
        20585.7392,
        20628.8056,
        20671.872,
        20714.9384,
        20758.0048,
        20801.0712,
        20844.1376,
        20887.204,
        20930.2704,
        20973.3368,
        21016.4032,
        21059.4696,
        21102.536,
        21145.6024,
        21188.6688,
        21231.7352,
        21274.8016,
        21317.868,
        21360.9344,
        21404.0008,
        21447.0672,
        21490.1336,
        21533.2,
        21576.2664,
        21619.3328,
        21662.3992,
        21705.4656,
        21748.532,
        21791.5984,
        21834.6648,
        21877.7312,
        21920.7976,
        21963.864,
        22006.9304
      ]
      expect(AudioCalculationsFrequency.frequenciesUsingSampleRateBufferSize(44100, 1024)).toStrictEqual(expected)
    })
  })
  describe('calcLowestAudibleBin', () => {
    it('should return 0 when lowest audible frequency is 0 Hz', () => {
      expect(AudioCalculationsFrequency.lowestAudibleBin(21.5332, 0)).toBe(0)
    })
    it('should return 1 when lowest audible frequency is 1 Hz', () => {
      expect(AudioCalculationsFrequency.lowestAudibleBin(21.5332, 1)).toBe(1)
    })
    it('should return 2 when lowest audible frequency is 25 Hz', () => {
      expect(AudioCalculationsFrequency.lowestAudibleBin(21.5332, 25)).toBe(2)
    })
  })
  describe('calcHighestAudibleBin', () => {
    it('should return 0 when highest audible frequency is 0 Hz', () => {
      expect(AudioCalculationsFrequency.highestAudibleBin(21.5332, 0)).toBe(0)
    })
    it('should return 0 when highest audible frequency is 1 Hz', () => {
      expect(AudioCalculationsFrequency.highestAudibleBin(21.5332, 1)).toBe(0)
    })
    it('should return 1 when highest audible frequency is 25 Hz', () => {
      expect(AudioCalculationsFrequency.highestAudibleBin(21.5332, 25)).toBe(1)
    })
  })
})
