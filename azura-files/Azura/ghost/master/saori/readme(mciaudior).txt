mciaudior.dll

���T�v
�@MCI ���g���� MID/WAV/MP3/WMA/AU �t�@�C�������t���� SAORI �v���O�C���ł��B
�@MIY����� mciaudio.dll �ƌ݊���������܂��i���S�݊��ł͂���܂���j�B

�@���܂��@�\�Ƃ��� Ogg �t�@�C���̍Đ��ɂ��Ή����Ă��܂��B

���g������

�@�E�ȃ��[�h
�@Argument0 load
�@Argument1 �t�@�C����
�@�@�t�@�C����mciaudior.dll����̑��΃p�X�w��A�������͐�΃p�X�w��B

�@�E���t�J�n
�@Argument0 play
�@�@���t�I����ɍēx���o�����ĉ��t����ꍇ�͈�U stop �����s���邱�ƁB

�@�E���[�v���t�J�n
�@Argument0 loop
�@�@���t�I����ɍēx���o�����ĉ��t����ꍇ�͈�U stop �����s���邱�ƁB

�@�E���t��~
�@Argument0 stop

�@----

�@���t���� play/loop �𑗂�ƈꎞ��~���܂��B�ēx play/loop �𑗂�Ɖ��t���ĊJ���܂��B
�@play �ŉ��t���n�߂� loop �ōĊJ����ƈȍ~�̓��[�v���t�ƂȂ�܂��B�t�̃p�^�[�������l�ł��B

�@�������AOgg �t�@�C���ł͈ꎞ��~�͂ł��܂���B


���C�x���g�ʒm

���t�I�����i���[�v���t���ɂ� 1 ���[�v�I�����ċȓ��ɖ߂������j�Ɉȉ��̃C�x���g���ʒm����܂��B

�@�E���t�I��
	OnMAAPlayFinish
		Reference0 �t�@�C����
		Reference1 ���̋Ȃ̉��t�ɗv�������ԁA�P�ʕb

�@�E1 ���[�v�I�����ċȓ��ɖ߂���
	OnMAAPlayLoop
		Reference0 �t�@�C����
		Reference1 1 ���[�v���t�ɗv�������ԁA�P�ʕb


���ݒ�t�@�C��

mciaudior.dll�Ɠ��K�w��mciaudior.txt�Ƃ����t�@�C����z�u����ƁAmciaudior.dll��load����
���̃t�@�C���ɋL�q���ꂽ�ݒ��ǂݍ���œK�p���܂��B
mciaudior.txt�͖����Ă����܂��܂���B���̏ꍇ�̓f�t�H���g�̐ݒ�œ��삵�܂��B

�ݒ荀�ڂ͂��܂̂Ƃ��� ogg.mode �݂̂ł��B

ogg.mode,<playsound|mci>
Ogg Vorbis�̍Đ����[�h��ݒ肵�܂��B
ogg.mode,playsound�Ƃ���ƁAmciaudior�̓f�[�^����������ɓW�J���A�����API PlaySound�ōĐ����܂��B
�f�t�H���g�̓���ł��B
�����̓t�@�C���A�N�Z�X���Ԃ��ŒZ�ł��邱�ƁB�Z���͑���PlaySound���g�p���Ă���SAORI�������݂���
����ƍĐ����s�Ȃ��Ȃ��ꍇ�����邱�ƁB
ogg.mode,mci�Ƃ���ƁAmciaudior��Ogg��wav�t�@�C���ɕϊ����ĉ��t�@�C���ɓf���o���A�����MCI�ōĐ�
���܂��B������PlaySound�̏Փ˂��������ƂƁAOgg�ł��ꎞ��~�@�\���g���邱�ƁB�Z���͍Đ��J�n����
�t�@�C���A�N�Z�X���������ƁB
�Ȃ����t�@�C���͓K�X�����I�ɍ폜����܂��̂Ńf�B�X�N��ɂ͎c��܂���B

�ȏ�̐������ǂ��킩��Ȃ��Ƃ������͂��܂�C�ɂ��Ȃ��Ă����ł��B


��mciaudio.dll �Ƃ̍���

�@�����ƌ������@�\�ǉ����������ł��B
�@������������܂��B

�@(1) load �t�@�C�����΃p�X�w�莞�̊�ʒu���Ⴄ
�@�@�@mciaudio �� \ghost\master
�@�@�@mciaucior �� mciaudior.dll �̈ʒu
�@�@�@�]���āAmciaudior �� \ghost\master �ɔz�u�����ꍇ�A���҂ɍ����͂���܂���B

�@(2) load �t�@�C���̐�΃p�X�w�肪�\

�@(3) WMA/AU�A����� Ogg �̉��t���\

�@(4) ���[�v���t���\

�@(5) ���t�I����ɓ����t�@�C�����ĉ��t����ہAstop ����ꂸ�ɑ� play �ł���

�@(6) ���t�I���^ 1 ���[�v�I���� DirectSSTP �C�x���g�ʒm������


��version information
�@20030215 - construction 0
�@20030224 - construction 1
	�E�g���q�����ăf�o�C�X�^�C�v�𖾎��I�Ɏw��
	�@MID(Sequencer)/WAV(wavaudio)/MP3(MPEGAudio)/WMA(MPEGVideo2)/AU(MPEGVideo)
	�@au�g���ЂƂ͂��܂苏�Ȃ��ł��傤���ǈꉞ�B
�@20030301 - construction 2
	�E���[�v���t
	�E�g���q�t�B���^�����O�iMID/WAV/MP3/WMA/AU�j
	�@�O�ł܂ł͂Ƃɂ����R�}���h�𑗂�Ƃ��܂ł͎��s���Ă����B
�@20030314 - construction 3
	�Eunload ���ɏ������݈ᔽ����������\������������C��
�@20030418 - construction 4
	�E�����J
�@20030420 - construction 5
	�E������萫����
�@20030427 - construction 7
	�Eplay �I����ɍēx���o�����ĉ��t����ꍇ�Astop�𗪂��Ă��� play �ł���
	�E���t�I���^ 1 ���[�v�I���� DirectSSTP �C�x���g�ʒm
�@20030825 - construction 8
	�Estop ���w�����Ă����t����~���Ȃ��ꍇ����������C��
�@20030826 - construction 10
	�EOnMAAPlayFinish / OnMAAPlayLoop �� Reference1 ����� 0 �ƂȂ�����C��
	�EOgg Vorbis �Đ�
	�@���܂��Bload ���� WAV �֕ϊ����ď������Ă��܂��B���������āA�ϊ�������
	�@�኱���Ԃ�������܂��B�����������Ȃ�K�v�ł��B
	�@�܂��A�Đ��̈ꎞ��~�͂ł��܂���B
�@20030830 - construction 14
	�E�������x����
�@20030904 - construction 19
	�EDirectSSTP �C�x���g���ʒm����Ȃ��ꍇ����������C��
�@20030906 - construction 20
	�EDirectSSTP �C�x���g���ŏ��̈�x�����ʒm����Ȃ������C��
�@20031209 - construction 21
	�EOgg�Đ����[�h�ݒ�@�\�ǉ�
�@20031221 - construction 22
	�EOgg��ogg.mode,mci���[�h�ōĐ�����ƃ�������H���Ԃ������C��
�@20050524 - construction 24
	�EOgg Vorbis�ō��E�p���j���O���t�������s����C��


��Ogg Vorbis�֘A�����N
�ȉ��̃T�C�g������𓾂܂����B���ӂ��܂��B

Vorbis.com
	http://www.vorbis.com/
����
	http://f16.aaacafe.ne.jp/~mtweb/

