Search.setIndex({"docnames": ["ROC-AUC", "classification", "cross_val", "cross_val_init", "hyperparameters", "metrics", "regression"], "filenames": ["ROC-AUC.ipynb", "classification.ipynb", "cross_val.ipynb", "cross_val_init.ipynb", "hyperparameters.ipynb", "metrics.md", "regression.ipynb"], "titles": ["ROC-AUC", "Classification Metrics", "Team Members:", "Cross-validation", "Hyperparameters tuning", "Evaluation Metrics", "Regression metrics"], "terms": {"Is": 0, "binari": [0, 1, 2], "classifi": [0, 1], "predict": [0, 1, 2, 3, 6], "probabl": 0, "widehat": [0, 1, 6], "y": [0, 1, 2, 3, 6], "0": [0, 1, 2, 3, 6], "1": [0, 1, 2, 3, 6], "posit": [0, 1], "class": [0, 1, 2, 3, 6], "label": [0, 1, 2, 6], "usual": [0, 1, 6], "can": [0, 1, 2, 5, 6], "obtain": 0, "mathbb": [0, 1, 6], "i": [0, 1, 2, 6], "5": [0, 2, 3, 6], "begin": 0, "case": [0, 1, 2, 3], "text": [0, 1], "leqslant": 0, "end": 0, "valu": [0, 1, 2, 6], "plai": 0, "role": 0, "threshold": 0, "here": [0, 4, 5], "actual": [0, 1, 6], "ani": [0, 1], "number": [0, 1, 2, 3], "t": [0, 2, 6], "how": [0, 1, 2, 6], "doe": [0, 6], "perform": [0, 1, 3, 6], "depend": [0, 2, 6], "One": 0, "popular": 0, "metric": [0, 2, 3], "receiv": 0, "oper": [0, 6], "characterist": [0, 2], "area": 0, "under": [0, 2], "score": [0, 2, 3], "quantifi": 0, "which": [0, 1, 2, 6], "plot": [0, 6], "true": [0, 1, 2, 3], "rate": [0, 1], "tpr": 0, "against": 0, "fals": [0, 1, 2, 3, 6], "fpr": 0, "variou": [0, 2], "classif": [0, 2], "coupl": 0, "addit": 0, "form": [0, 1], "confus": 0, "matrix": 0, "frac": [0, 1, 6], "tp": [0, 1], "fn": [0, 1], "fp": [0, 1, 3], "tn": [0, 1], "To": [0, 2, 6], "build": 0, "precis": [0, 2], "do": [0, 2], "follow": [0, 1, 2], "step": [0, 2], "rearrang": 0, "increas": 0, "order": [0, 2], "y_": 0, "2": [0, 1, 2, 3], "ldot": 0, "n": [0, 1, 2, 3, 6], "For": [0, 1], "each": [0, 2, 3], "quad": [0, 1], "make": [0, 1, 2, 6], "formula": [0, 1], "y_i": [0, 1, 6], "calcul": [0, 1, 6], "p_t": 0, "r_t": 0, "connect": 0, "point": [0, 2, 6], "line": [0, 1, 2, 3, 6], "segment": 0, "greater": [0, 6], "better": [0, 2, 6], "import": [0, 1, 2, 3, 6], "matplotlib": [0, 6], "pyplot": [0, 6], "plt": [0, 2, 6], "numpi": [0, 3, 6], "np": [0, 2, 3, 6], "from": [0, 1, 2, 3, 5, 6], "sklearn": [0, 1, 2, 3, 6], "precisionrecalldisplai": 0, "average_precision_scor": 0, "def": [0, 2], "sim_labels_and_prob": 0, "size": [0, 2], "int": 0, "prob": 0, "sort": [0, 2], "round": 0, "rand": 0, "clip": 0, "normal": 0, "loc": [0, 2], "scale": [0, 6], "return": [0, 1, 3], "y_true": 0, "y_hat": [0, 6], "print": [0, 1, 2, 3, 6], "47": 0, "52": 0, "82": [0, 2], "87": 0, "from_predict": 0, "lw": [0, 6], "c": [0, 2, 6], "r": [0, 1, 3], "marker": [0, 2], "o": 0, "markeredgecolor": 0, "b": [0, 1, 3, 6], "config": [0, 6], "inlinebackend": [0, 6], "figure_format": [0, 6], "svg": [0, 6], "titl": [0, 2], "grid": [0, 6], "ls": [0, 6], "q": [0, 1, 2, 6], "what": [0, 1, 2], "ar": [0, 1, 2, 6], "left": [0, 2], "most": [0, 1, 2, 3], "right": 0, "pr": 0, "tpr_t": 0, "fpr_t": 0, "roccurvedisplai": 0, "suppos": 0, "less": [0, 2, 6], "than": [0, 6], "we": [0, 1, 2], "easili": 0, "improv": 0, "thi": [0, 1, 2, 5, 6], "panda": [0, 1, 2, 3], "pd": [0, 1, 2, 3], "dummi": [0, 1], "dummyclassifi": [0, 1], "model_select": [0, 1, 2, 3], "train_test_split": [0, 1, 2, 3], "roc_auc_scor": 0, "credit_df": [0, 1, 3], "read_csv": [0, 1, 2, 3], "islp_datset": [0, 1, 3], "creditcard": [0, 1, 3], "csv": [0, 1, 2, 3], "zip": [0, 1, 3], "x": [0, 1, 2, 3], "drop": [0, 1, 3], "axi": [0, 1, 2, 3], "x_train": [0, 1, 2, 3], "x_test": [0, 1, 2, 3], "y_train": [0, 1, 2, 3], "y_test": [0, 1, 2, 3], "dc_mf": [0, 1], "strategi": [0, 1], "most_frequ": [0, 1], "fit": [0, 1, 2, 6], "filenotfounderror": [0, 1, 3], "traceback": [0, 1, 3], "recent": [0, 1, 3], "call": [0, 1, 2, 3], "last": [0, 1, 3], "cell": [0, 1, 3], "In": [0, 1, 2, 3, 5], "4": [0, 1, 2, 3, 6], "6": [0, 2, 3], "3": [0, 1, 2, 3], "7": [0, 2, 3, 6], "8": [0, 2, 3], "file": [0, 1, 3], "anaconda3": [0, 1, 3], "lib": [0, 1, 3], "python3": [0, 1, 3], "11": [0, 1, 3], "site": [0, 1, 3], "packag": [0, 1, 3], "io": [0, 1, 3], "parser": [0, 1, 3], "reader": [0, 1, 3], "py": [0, 1, 3], "912": [0, 1, 3], "filepath_or_buff": [0, 1, 3], "sep": [0, 1, 3], "delimit": [0, 1, 3], "header": [0, 1, 3], "name": [0, 1, 2, 3], "index_col": [0, 1, 3], "usecol": [0, 1, 3], "dtype": [0, 1, 2, 3], "engin": [0, 1, 3], "convert": [0, 1, 3], "true_valu": [0, 1, 3], "false_valu": [0, 1, 3], "skipinitialspac": [0, 1, 3], "skiprow": [0, 1, 3], "skipfoot": [0, 1, 3], "nrow": [0, 1, 3], "na_valu": [0, 1, 3], "keep_default_na": [0, 1, 3], "na_filt": [0, 1, 3], "verbos": [0, 1, 3], "skip_blank_lin": [0, 1, 3], "parse_d": [0, 1, 3], "infer_datetime_format": [0, 1, 3], "keep_date_col": [0, 1, 3], "date_pars": [0, 1, 3], "date_format": [0, 1, 3], "dayfirst": [0, 1, 3], "cache_d": [0, 1, 3], "iter": [0, 1, 2, 3], "chunksiz": [0, 1, 3], "compress": [0, 1, 3], "thousand": [0, 1, 2, 3], "decim": [0, 1, 3], "linetermin": [0, 1, 3], "quotechar": [0, 1, 3], "quot": [0, 1, 3], "doublequot": [0, 1, 3], "escapechar": [0, 1, 3], "comment": [0, 1, 2, 3], "encod": [0, 1, 3], "encoding_error": [0, 1, 3], "dialect": [0, 1, 3], "on_bad_lin": [0, 1, 3], "delim_whitespac": [0, 1, 3], "low_memori": [0, 1, 3], "memory_map": [0, 1, 3], "float_precis": [0, 1, 3], "storage_opt": [0, 1, 3], "dtype_backend": [0, 1, 3], "899": [0, 1, 3], "kwds_default": [0, 1, 3], "_refine_defaults_read": [0, 1, 3], "900": [0, 1, 3], "901": [0, 1, 3], "908": [0, 1, 3], "909": [0, 1, 3], "910": [0, 1, 3], "kwd": [0, 1, 3], "updat": [0, 1, 3], "_read": [0, 1, 3], "577": [0, 1, 3], "574": [0, 1, 3], "_validate_nam": [0, 1, 3], "get": [0, 1, 2, 3], "none": [0, 1, 2, 3, 6], "576": [0, 1, 3], "creat": [0, 1, 3], "textfileread": [0, 1, 3], "579": [0, 1, 3], "580": [0, 1, 3], "1407": [0, 1, 3], "__init__": [0, 1, 3], "self": [0, 1, 3], "f": [0, 2, 3, 6], "1404": [0, 1, 3], "option": [0, 1, 3], "has_index_nam": [0, 1, 3], "1406": [0, 1, 3], "handl": [0, 1, 3], "iohandl": [0, 1, 3], "_engin": [0, 1, 3], "_make_engin": [0, 1, 3], "1661": [0, 1, 3], "1659": [0, 1, 3], "mode": [0, 1, 2, 3], "1660": [0, 1, 3], "get_handl": [0, 1, 3], "1662": [0, 1, 3], "1663": [0, 1, 3], "1664": [0, 1, 3], "1665": [0, 1, 3], "1666": [0, 1, 3], "1667": [0, 1, 3], "is_text": [0, 1, 3], "1668": [0, 1, 3], "error": [0, 1, 2, 3], "strict": [0, 1, 3], "1669": [0, 1, 3], "1670": [0, 1, 3], "1671": [0, 1, 3], "assert": [0, 1, 3], "1672": [0, 1, 3], "common": [0, 1, 2, 3], "782": [0, 1, 3], "path_or_buf": [0, 1, 3], "777": [0, 1, 3], "778": [0, 1, 3], "elif": [0, 1, 3], "779": [0, 1, 3], "argument": [0, 1, 3], "_byteszipfil": [0, 1, 3], "ha": [0, 1, 2, 3], "incompat": [0, 1, 3], "type": [0, 1, 3], "780": [0, 1, 3], "union": [0, 1, 3], "str": [0, 1, 3], "basebuff": [0, 1, 3], "expect": [0, 1, 3], "pathlik": [0, 1, 3], "781": [0, 1, 3], "readbuff": [0, 1, 3], "byte": [0, 1, 3], "writebuff": [0, 1, 3], "783": [0, 1, 3], "ioarg": [0, 1, 3], "compression_arg": [0, 1, 3], "ignor": [0, 1, 3], "arg": [0, 1, 3], "784": [0, 1, 3], "785": [0, 1, 3], "buffer": [0, 1, 3], "786": [0, 1, 3], "append": [0, 1, 2, 3], "1025": [0, 1, 3], "archive_nam": [0, 1, 3], "kwarg": [0, 1, 3], "1021": [0, 1, 3], "setdefault": [0, 1, 3], "zipfil": [0, 1, 3], "zip_defl": [0, 1, 3], "1022": [0, 1, 3], "1023": [0, 1, 3], "1024": [0, 1, 3], "1284": [0, 1, 3], "allowzip64": [0, 1, 3], "compresslevel": [0, 1, 3], "strict_timestamp": [0, 1, 3], "metadata_encod": [0, 1, 3], "1282": [0, 1, 3], "while": [0, 1, 2, 3, 6], "1283": [0, 1, 3], "try": [0, 1, 3, 6], "open": [0, 1, 3], "filemod": [0, 1, 3], "1285": [0, 1, 3], "except": [0, 1, 3], "oserror": [0, 1, 3], "1286": [0, 1, 3], "modedict": [0, 1, 3], "errno": [0, 1, 3], "No": [0, 1, 3], "directori": [0, 1, 3], "train": [0, 1, 3], "predict_proba": 0, "ap": 0, "test": [0, 1, 3], "0018211184195126519": 0, "0014465885789725008": 0, "linear_model": [0, 1, 3, 6], "logisticregress": [0, 1, 2, 3], "log_reg": [0, 1], "max_it": [0, 1, 3], "10000": [0, 1], "jupyt": [0, 1], "environ": [0, 1], "pleas": [0, 1], "rerun": [0, 1], "show": [0, 1, 2, 6], "html": [0, 1], "represent": [0, 1], "trust": [0, 1], "notebook": [0, 1, 2], "On": [0, 1, 3], "github": [0, 1], "unabl": [0, 1], "render": [0, 1, 2], "load": [0, 1], "page": [0, 1], "nbviewer": [0, 1], "org": [0, 1], "logisticregressionlogisticregress": [0, 1], "logist": [0, 1, 3], "regress": [0, 1, 3], "9425492263032587": 0, "6635935420107146": 0, "9505265255051857": 0, "6253817235944542": 0, "note": 0, "much": 0, "an": [0, 1, 2, 5, 6], "unbalanc": [0, 1, 2, 3], "averag": [0, 1, 2, 6], "us": [1, 2, 3, 5, 6], "evalu": [1, 2, 3, 6], "model": [1, 3, 5, 6], "machin": [1, 3, 5, 6], "learn": [1, 3, 5, 6], "categor": 1, "input": 1, "data": [1, 2, 3, 6], "The": [1, 3, 6], "multiclass": 1, "fraction": 1, "correct": [1, 3], "total": 1, "more": [1, 2, 3, 5, 6], "formal": 1, "mathcal": [1, 6], "d": [1, 6], "boldsymbol": [1, 6], "x_i": [1, 6], "_": [1, 3, 6], "defin": [1, 2], "mathrm": [1, 6], "acc": 1, "1n": [1, 6], "sum": [1, 6], "limits_": [1, 6], "missclassificaton": 1, "mi": 1, "similar": [1, 2], "equal": [1, 2], "If": [1, 2, 3], "four": 1, "possibilit": 1, "relat": 1, "ground": [1, 6], "truth": [1, 6], "neg": 1, "first": 1, "word": 1, "whether": 1, "second": 1, "one": [1, 2, 6], "indic": [1, 6], "These": 1, "aggreg": [1, 3], "whole": [1, 2], "e": [1, 2], "repres": 1, "correctli": 1, "instanc": [1, 2], "were": 1, "load_breast_canc": 1, "should": [1, 2], "benign": 1, "malign": 1, "relabeled_target": 1, "target": [1, 2, 3, 6], "target_nam": 1, "arrai": [1, 3], "u9": 1, "confusion_matrix": 1, "3000": 1, "9530516431924883": 1, "257": 1, "9": [1, 3], "149": 1, "965034965034965": 1, "90": 1, "48": 1, "k": 1, "shape": [1, 2], "time": [1, 2, 6], "mnist": 1, "had": 1, "10": [1, 2, 6], "row": 1, "column": 1, "poor": 1, "peopl": 1, "realli": 1, "sick": 1, "alwai": 1, "patient": 1, "healthi": 1, "would": 1, "give": [1, 2, 6], "99": 1, "Of": 1, "cours": 1, "useless": 1, "also": [1, 2], "known": 1, "measur": [1, 2, 6], "proport": [1, 3, 6], "among": 1, "all": [1, 2], "made": 1, "It": [1, 2, 6], "when": [1, 3, 6], "minim": 1, "prioriti": 1, "particularli": 1, "crucial": 1, "relev": 1, "covid": 1, "19": 1, "other": [1, 2, 6], "danger": 1, "contagi": 1, "deseas": 1, "nuclear": 1, "warn": 1, "system": 1, "decis": 1, "launch": 1, "missl": 1, "respons": 1, "f_1": 1, "harmon": 1, "mean": [1, 2], "provid": [1, 6], "balanc": [1, 2], "between": [1, 2, 5, 6], "especi": [1, 6], "imbal": 1, "presis": 1, "cdot": 1, "f_": 1, "beta": 1, "gener": [1, 3], "happen": 1, "infti": 1, "tabl": 1, "fraud": [1, 3], "non": [1, 2], "head": [1, 2], "value_count": [1, 3], "284315": 1, "492": 1, "count": [1, 2, 3], "int64": [1, 2, 3], "ideal": 1, "distribut": [1, 2], "accuracy_scor": 1, "precision_scor": 1, "recall_scor": 1, "f1_score": [1, 3], "71077": 1, "125": 1, "f1": [1, 3], "9982444313361984": 1, "librari": 1, "framework": 1, "python": 1, "version": [1, 2, 3, 6], "_classif": 1, "1469": 1, "undefinedmetricwarn": 1, "ill": 1, "being": [1, 2], "set": [1, 2, 3], "due": [1, 2], "sampl": [1, 2, 3], "zero_divis": 1, "paramet": [1, 2], "control": 1, "behavior": 1, "_warn_prf": 1, "modifi": 1, "msg_start": 1, "len": [1, 2, 6], "result": [1, 2, 3], "let": [1, 6], "s": [1, 2, 3, 6], "9992135052386169": 1, "7870370370370371": 1, "7203389830508474": 1, "752212389380531": 1, "w3sicxvlc3rpb24ioiaiv2hhdcbpcyb0agugchvycg9zzsbvzibjcm9zcy12ywxpzgf0aw9uigluig1hy2hpbmugbgvhcm5pbmc": 2, "iiwginr5cguioiaibwfuev9jag9py2uilcaiyw5zd2vycyi6ift7imfuc3dlcii6icjubyb0cmfpbibtb2rlbhmgzmfzdgvyiiwgimnvcnjly3qioibmywxzzswgimzlzwriywnrijogiknyb3nzlxzhbglkyxrpb24gaxnuj3qgchjpbwfyawx5ihvzzwqgdg8gdhjhaw4gbw9kzwxzigzhc3rlci4gsxrzihbyaw1hcnkgchvycg9zzsbsawvzigluigfzc2vzc2luzyb0agugbw9kzwwncybwzxjmb3jtyw5jzsbyyxrozxigdghhbiblehblzgl0aw5nihrozsb0cmfpbmluzybwcm9jzxnzlij9lcb7imfuc3dlcii6icjubybhc3nlc3mgysbtb2rlbcdzihblcmzvcm1hbmnliiwgimnvcnjly3qioib0cnvllcaizmvlzgjhy2sioiaiq3jvc3mgvmfsawrhdglvbibhawrzigluigvzdgltyxrpbmcgdghlig1vzgvsj3mgcgvyzm9ybwfuy2ugb24gdw5zzwvuigrhdgegyw5kihbyzxzlbnrzig92zxjmaxr0aw5nig9yihvuzgvyzml0dgluzy4ifswgeyjhbnn3zxiioiaivg8gcmvkdwnlihrozsbudw1izxigb2ygzmvhdhvyzxmilcaiy29ycmvjdci6igzhbhnllcaizmvlzgjhy2sioiaiq3jvc3mtdmfsawrhdglvbibkb2vzblx1mjaxoxqgzglyzwn0bhkgzm9jdxmgb24gcmvkdwnpbmcgdghlig51bwjlcibvzibmzwf0dxjlcy4grmvhdhvyzsbzzwxly3rpb24gb3igzgltzw5zaw9uywxpdhkgcmvkdwn0aw9uihrly2huaxf1zxmgyxjlihnwzwnpzmljywxsesblbxbsb3llzcbmb3igdghpcybwdxjwb3nlliaifswgeyjhbnn3zxiioiaivg8gaw5jcmvhc2ugbw9kzwwgy29tcgxlegl0esisicjjb3jyzwn0ijogzmfsc2usicjmzwvkymfjayi6icjdcm9zcy12ywxpzgf0aw9uigrvzxnuj3qgywltihrvigluy3jlyxnlig1vzgvsignvbxbszxhpdhkuieluigzhy3qsigl0ighlbhbzigluihbyzxzlbnrpbmcgb3zlcmx5ignvbxbszxggbw9kzwxzigj5igfzc2vzc2luzyb0agvpcibwzxjmb3jtyw5jzsbvbibkawzmzxjlbnqgc3vic2v0cybvzibkyxrhlij9xx1d": 2, "alua": 2, "onayeva": 2, "aslan": 2, "askarbek": 2, "rakhat": 2, "zhangabai": 2, "At": 2, "stage": 2, "have": [2, 6], "acquir": 2, "necessari": [2, 6], "preliminari": 2, "idea": [2, 3], "about": 2, "you": 2, "intend": 2, "implement": 2, "might": 2, "contempl": 2, "take": [2, 6], "next": 2, "ensur": 2, "your": 2, "isn": 2, "mere": 2, "consequ": 2, "chanc": 2, "select": 2, "process": 2, "determin": [2, 6], "outperform": 2, "addition": 2, "consid": 2, "avail": 2, "limit": 2, "potenti": 2, "lead": 2, "overfit": 2, "answer": 2, "question": 2, "simpl": 2, "basic": [2, 3], "randomli": 2, "divid": [2, 3], "dataset": [2, 3, 6], "group": 2, "piec": 2, "anoth": [2, 6], "repeat": 2, "sever": 2, "avarag": 2, "work": 2, "both": [2, 3], "problem": 2, "choos": 2, "account": 2, "small": 2, "larg": [2, 6], "seri": [2, 6], "sinc": 2, "estim": 2, "abil": 2, "unseen": 2, "singl": 2, "hyperparamet": 2, "through": 2, "seen": 2, "across": 2, "help": 2, "identifi": 2, "avoid": 2, "without": 2, "specif": 2, "mitig": 2, "risk": 2, "subset": [2, 3], "same": [2, 6], "qualiti": 2, "resist": 2, "check": [2, 6], "choic": 2, "quick": [2, 4], "go": 2, "method": 2, "commonli": [2, 6], "80": 2, "20": [2, 6], "70": 2, "30": 2, "howev": [2, 5], "major": 2, "weak": 2, "direct": 2, "wa": 2, "includ": 2, "solv": 2, "disast": 2, "inform": 2, "ag": 2, "gender": 2, "height": 2, "weight": [2, 6], "blood": 2, "pressur": 2, "cholesterol": 2, "level": 2, "glucos": 2, "smoke": 2, "habit": 2, "alcohol": 2, "consumpt": 2, "over": 2, "individu": 2, "df": 2, "sex": 2, "appli": [2, 3], "lambda": 2, "male": 2, "els": 2, "isna": 2, "pclass": 2, "sibsp": 2, "parch": 2, "fare": 2, "surviv": 2, "test_siz": [2, 3], "random_st": [2, 3], "51": 2, "712": 2, "179": 2, "passengerid": 2, "ticket": 2, "cabin": 2, "embark": 2, "braund": 2, "mr": 2, "owen": 2, "harri": 2, "22": 2, "A": [2, 3], "21171": 2, "2500": 2, "nan": 2, "cume": 2, "john": 2, "bradlei": 2, "florenc": 2, "brigg": 2, "th": 2, "38": 2, "pc": 2, "17599": 2, "71": 2, "2833": 2, "c85": 2, "heikkinen": 2, "miss": 2, "laina": 2, "26": 2, "ston": 2, "o2": 2, "3101282": 2, "9250": 2, "futrel": 2, "jacqu": 2, "heath": 2, "lili": 2, "mai": 2, "peel": 2, "35": 2, "113803": 2, "53": 2, "1000": 2, "c123": 2, "allen": 2, "william": 2, "henri": 2, "373450": 2, "0500": 2, "As": [2, 6], "see": [2, 4, 5], "below": 2, "approxim": 2, "thu": [2, 6], "549": 2, "342": 2, "part": 2, "partit": 2, "everi": 2, "techniqu": [2, 3], "until": 2, "onc": [2, 6], "observ": 2, "standard": [2, 6], "suitabl": [2, 6], "imbalanc": 2, "properli": 2, "ow": 2, "proper": 2, "ratio": 2, "issu": [2, 6], "could": 2, "resolv": 2, "kf": [2, 3], "n_split": [2, 3], "shuffl": [2, 3], "42": 2, "train_index": [2, 3], "test_index": [2, 3], "713": 2, "178": 2, "now": [2, 6], "differ": [2, 3, 5, 6], "accuraci": [2, 6], "output": 2, "cross_val_scor": [2, 3], "cv": [2, 3], "2f": 2, "format": 2, "78212291": 2, "78089888": 2, "83146067": 2, "76404494": 2, "79213483": 2, "79": 2, "signific": 2, "variat": 2, "76": 2, "83": 2, "imagin": 2, "randomforestclassifi": 2, "83240223": 2, "79775281": 2, "81460674": 2, "80337079": 2, "83707865": 2, "gradientboostingclassifi": 2, "80446927": 2, "87078652": 2, "78651685": 2, "82022472": 2, "why": [2, 6], "algorithm": [2, 6], "tend": 2, "rapidli": 2, "previou": 2, "reduc": 2, "meet": 2, "stop": 2, "criterion": 2, "best": 2, "w3sicxvlc3rpb24ioiaiv2hhdcbkb2vzihrozsb0zxjticdljybyzxbyzxnlbnqgaw4gsy1gb2xkienyb3nzlvzhbglkyxrpb24": 2, "iiwginr5cguioiaibwfuev9jag9py2uilcaiyw5zd2vycyi6ift7imfuc3dlcii6icjuagugbnvtymvyig9migzlyxr1cmvzigluihrozsbkyxrhc2v0iiwgimnvcnjly3qioibmywxzzswgimzlzwriywnrijogildyb25noigifswgeyjhbnn3zxiioiaivghlig51bwjlcibvzib0aw1lcyb0agugbw9kzwwgaxmgdhjhaw5lzcisicjjb3jyzwn0ijogzmfsc2usicjmzwvkymfjayi6icjxcm9uzzooin0sihsiyw5zd2vyijogilrozsbudw1izxigb2ygc3vic2v0cybpbnrvihdoawnoihrozsbkyxrhiglzigrpdmlkzwqilcaiy29ycmvjdci6ihrydwusicjmzwvkymfjayi6icjsawdodceifswgeyjhbnn3zxiioiaivghlig51bwjlcibvziblcg9jahmgzhvyaw5nig1vzgvsihryywluaw5niiwgimnvcnjly3qioibmywxzzswgimzlzwriywnrijogildyb25noigifv19xq": 2, "w3sicxvlc3rpb24ioiaisw4gysaxmc1mb2xkignyb3nzlxzhbglkyxrpb24gb24gysbkyxrhc2v0ihdpdgggmtawmcbzyw1wbgvzlcbob3cgbwfuesbzyw1wbgvzigfyzsb1c2vkigzvcib2ywxpzgf0aw9uigluigvhy2ggzm9szd8ilcaidhlwzsi6icjtyw55x2nob2ljzsisicjhbnn3zxjzijogw3siyw5zd2vyijogijewiiwgimnvcnjly3qioibmywxzzswgimzlzwriywnrijogildyb25noigifswgeyjhbnn3zxiioiaiotailcaiy29ycmvjdci6igzhbhnllcaizmvlzgjhy2sioiaiv3jvbmc6kcj9lcb7imfuc3dlcii6icixmdailcaiy29ycmvjdci6ihrydwusicjmzwvkymfjayi6icjsawdodcegsw4gmtatzm9szcbjcm9zcy12ywxpzgf0aw9ulcb0agugzgf0yxnldcbpcybkaxzpzgvkigludg8gmtagzxf1ywwgcgfydhmgb3igzm9szhmuier1cmluzyblywnoigl0zxjhdglvbiwgb25ligzvbgqgaxmgdxnlzcbmb3igdmfsawrhdglvbiwgd2hpbgugdghlihjlbwfpbmluzybuaw5ligzvbgrzigfyzsb1c2vkigzvcib0cmfpbmluzyb0agugbw9kzwwuicj9lcb7imfuc3dlcii6icixmtailcaiy29ycmvjdci6igzhbhnllcaizmvlzgjhy2sioiaiv3jvbmc6kcj9xx1d": 2, "newton": 2, "cg": 2, "790": 2, "lbfg": 2, "liblinear": 2, "792": 2, "sag": 2, "725": 2, "saga": 2, "708": 2, "maximum": 2, "leaf": 2, "node": 2, "817": 2, "800": 2, "811": 2, "15": 2, "815": 2, "param": 2, "n_estim": 2, "50": 2, "100": [2, 6], "max_depth": 2, "grid_search": 2, "gridsearchcv": 2, "best_param": 2, "best_params_": 2, "best_model": 2, "best_estimator_": 2, "term": 2, "stratum": 2, "subject": 2, "subgroup": 2, "strata": 2, "base": 2, "thei": 2, "share": 2, "g": [2, 3], "race": 2, "educ": 2, "attain": 2, "enhanc": 2, "although": 2, "too": 2, "variabl": [2, 6], "complet": [2, 6], "enabl": 2, "perfectli": 2, "skf": 2, "stratifiedkfold": 2, "kfold_scor": 2, "stratified_kfold_scor": 2, "fig": 2, "ax": 2, "subplot": 2, "figsiz": 2, "bar_width": 2, "bar_positions_kfold": 2, "arang": [2, 3], "bar_positions_stratified_kfold": 2, "bar": 2, "set_xtick": 2, "set_xticklabel": 2, "set_xlabel": 2, "set_ylabel": 2, "set_titl": 2, "legend": [2, 6], "autolabel": 2, "get_height": 2, "annot": 2, "xy": 2, "get_x": 2, "get_width": 2, "xytext": 2, "textcoord": 2, "offset": 2, "center": 2, "va": 2, "bottom": 2, "patch": 2, "guess": 2, "veri": 2, "scroll": 2, "up": 2, "60": [2, 3], "40": 2, "therefor": 2, "featur": 2, "longer": 2, "need": 2, "complic": 2, "still": [2, 6], "senc": 2, "w3sicxvlc3rpb24ioiaiv2hpy2ggb2ygdghligzvbgxvd2luzybzdgf0zw1lbnrzigfib3v0ifn0cmf0awzpzwqgsy1gb2xkienyb3nzlvzhbglkyxrpb24gaxmgdhj1zt8ilcaidhlwzsi6icjtyw55x2nob2ljzsisicjhbnn3zxjzijogw3siyw5zd2vyijogikl0ihnodwzmbgvzihrozsbkyxrhigjlzm9yzsbzcgxpdhrpbmcgaw50bybmb2xkcyisicjjb3jyzwn0ijogzmfsc2usicjmzwvkymfjayi6icjtahvmzmxpbmcgy2fuigjligvtcgxvewvkigluihzhcmlvdxmgy3jvc3mtdmfsawrhdglvbibtzxrob2rzlcbidxqgaxqncybub3qgaw5ozxjlbnqgdg8gdghligrlzmluaxrpb24gb2ygu3ryyxrpzmllzcblluzvbgquin0sihsiyw5zd2vyijogikl0ihbyzxnlcnzlcyb0agugcgvyy2vudgfnzsbvzibzyw1wbgvzigzvciblywnoignsyxnzigluigv2zxj5igzvbgqilcaiy29ycmvjdci6ihrydwusicjmzwvkymfjayi6icjtdhjhdglmawvkiestrm9szcbdcm9zcy1wywxpzgf0aw9uigvuc3vyzxmgdghhdcblywnoigzvbgqgb2ygdghlignyb3nzlxzhbglkyxrpb24gcmv0ywlucyb0agugc2ftzsbjbgfzcybkaxn0cmlidxrpb24gyxmgdghlig9yawdpbmfsigrhdgfzzxquicj9lcb7imfuc3dlcii6icjjdcbvbmx5ihdvcmtzihdpdgggcmvncmvzc2lvbibwcm9ibgvtcyisicjjb3jyzwn0ijogzmfsc2usicjmzwvkymfjayi6icjtdhjhdglmawvkiestrm9szcbdcm9zcy1wywxpzgf0aw9uiglzignvbw1vbmx5ihvzzwqgaw4gy2xhc3npzmljyxrpb24gdgfza3muin0sihsiyw5zd2vyijogikl0ihjhbmrvbwx5ihnlbgvjdhmgysbzaw5nbgugc2ftcgxligfzihrozsb2ywxpzgf0aw9uihnldcisicjjb3jyzwn0ijogzmfsc2usicjmzwvkymfjayi6icjtdhjhdglmawvkiestrm9szcbdcm9zcy1wywxpzgf0aw9uigrvzxmgbm90ihjhbmrvbwx5ihnlbgvjdcbhihnpbmdszsbzyw1wbgugzm9yihzhbglkyxrpb24uin1dfv0": 2, "fact": 2, "even": [2, 5], "sai": 2, "loocv": 2, "ident": 2, "mention": 2, "intuit": 2, "p": 2, "specifi": 2, "themselv": 2, "accord": 2, "itself": 2, "w3sicxvlc3rpb24ioiaiv2hhdcbpcyb0agugbwfpbibkaxnhzhzhbnrhz2ugb2ygtgvhdmutt25llu91dcbdcm9zcy1wywxpzgf0aw9uignvbxbhcmvkihrvig90agvyignyb3nzlxzhbglkyxrpb24gbwv0ag9kcz8ilcaidhlwzsi6icjtyw55x2nob2ljzsisicjhbnn3zxjzijogw3siyw5zd2vyijogikl0ihjlcxvpcmvzig1vcmugy29tchv0yxrpb25hbcbyzxnvdxjjzxmilcaiy29ycmvjdci6ihrydwusicjmzwvkymfjayi6icjsawdodcegte9pq1ygaw52b2x2zxmgy3jlyxrpbmcgyxmgbwfuesbmb2xkcybhcyb0agvyzsbhcmugc2ftcgxlcybpbib0agugzgf0yxnldcwgcmvzdwx0aw5nigluigegbgfyz2ugbnvtymvyig9mig1vzgvsigzpdhmuicj9lcb7imfuc3dlcii6icjjdcb0zw5kcyb0bybvdmvyzml0ihrozsbtb2rlbcisicjjb3jyzwn0ijogzmfsc2usicjmzwvkymfjayi6icjmt09dvibkb2vzig5vdcbpbmhlcmvudgx5igxlywqgdg8gb3zlcmzpdhrpbmcuin0sihsiyw5zd2vyijogikl0iglzigjpyxnlzcb0b3dhcmrzihntywxszxigzgf0yxnldhmilcaiy29ycmvjdci6igzhbhnllcaizmvlzgjhy2sioiaite9pq1ygaxnuj3qgcgfydgljdwxhcmx5igjpyxnlzcb0b3dhcmrzihntywxszxigzgf0yxnldhmuicj9lcb7imfuc3dlcii6icjjdcbjyw4gymugy29tchv0yxrpb25hbgx5ihnsb3cgzm9yigxhcmdligrhdgfzzxrziiwgimnvcnjly3qioibmywxzzswgimzlzwriywnrijogiml0j3mgdhj1zsb0agf0iexpt0nwignhbibizsbjb21wdxrhdglvbmfsbhkgc2xvdywgzxnwzwnpywxsesbmb3igbgfyz2vyigrhdgfzzxrzlcb0aglziglzbid0igl0cybwcmltyxj5igrpc2fkdmfudgfnzs4ifv19xq": 2, "plot_learning_curv": 2, "n_job": 2, "train_siz": 2, "linspac": [2, 6], "color": 2, "blue": 2, "green": 2, "red": 2, "color_index": 2, "item": 2, "train_scor": 2, "test_scor": 2, "learning_curv": 2, "train_scores_mean": 2, "train_scores_std": 2, "std": 2, "test_scores_mean": 2, "test_scores_std": 2, "trace1": 2, "scatter": [2, 6], "dict": 2, "trace2": 2, "trace3": 2, "concaten": 2, "fill": 2, "tozerox": 2, "fillcolor": 2, "rgba": 2, "255": 2, "showlegend": 2, "trace4": 2, "140": [2, 3], "extend": 2, "layout": 2, "xaxi": 2, "exampl": [2, 5], "yaxi": 2, "figur": 2, "graph": 2, "chang": [2, 6], "amount": 2, "converg": 2, "execut": 2, "speed": 2, "effici": 2, "wide": 3, "statist": 3, "assess": 3, "split": 3, "multipl": 3, "combin": 3, "comprehens": 3, "good": [3, 6], "sourc": 3, "russian": 3, "ml": [3, 5], "handbook": 3, "chapter": 3, "verifi": 3, "fetch_openml": 3, "credit_g": 3, "credit": 3, "auto": 3, "700": 3, "bad": 3, "300": 3, "151": 3, "49": 3, "add": [3, 6], "stratif": 3, "kfold": 3, "27": 3, "reshap": 3, "credict": 3, "card": 3, "clf": 3, "5000": 3, "73529412": 3, "66666667": 3, "672": 3, "75590551": 3, "76335878": 3, "special": 3, "element": 3, "onli": 3, "leaveoneout": 3, "loo": 3, "start": 4, "loss": 5, "function": 5, "typic": 5, "quit": 5, "busi": 5, "earn": 5, "monei": 5, "There": 5, "hierarchi": 5, "proxi": 5, "continu": 6, "numer": 6, "rather": 6, "discret": 6, "denot": 6, "some": 6, "sum_": 6, "hat": 6, "_i": 6, "compar": 6, "smaller": 6, "becaus": 6, "advantag": 6, "task": 6, "smooth": 6, "gradient": 6, "optim": 6, "mathemat": 6, "conveni": 6, "disadvantag": 6, "highli": 6, "sensit": 6, "outlier": 6, "invari": 6, "hurt": 6, "interpret": 6, "place": 6, "emphasi": 6, "larger": 6, "sqrt": 6, "deviat": 6, "unit": 6, "overcom": 6, "flaw": 6, "coeffici": 6, "overlin": 6, "varianc": 6, "explain": 6, "exce": 6, "far": 6, "off": 6, "vert": 6, "straightforward": 6, "understand": 6, "like": 6, "doesn": 6, "differenti": 6, "zero": 6, "caus": 6, "immun": 6, "influenc": 6, "extrem": 6, "notic": 6, "impact": 6, "percentag": 6, "forecast": 6, "demand": 6, "undefind": 6, "sometim": 6, "symmetr": 6, "smape": 6, "2n": 6, "belong": 6, "interv": 6, "random": 6, "nois": 6, "xs": 6, "num": 6, "endpoint": 6, "randn": 6, "linear": 6, "linearregress": 6, "mean_absolute_error": 6, "mean_squared_error": 6, "mean_absolute_percentage_error": 6, "r2_score": 6, "lin_reg": 6, "bia": 6, "intercept_": 6, "slope": 6, "coef_": 6, "r2": 6, "4f": 6, "8773606429559861": 6, "933202846973627": 6, "3860": 6, "2327": 6, "4823": 6, "2377": 6, "4841": 6, "m": 6, "randint": 6, "again": 6, "07142004889658": 6, "9212016468536152": 6, "6121": 6, "1519": 6, "0376": 6, "0167": 6, "5903": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"roc": 0, "auc": 0, "presicion": 0, "recal": [0, 1], "curv": [0, 2], "A": 0, "random": [0, 2, 4], "exampl": [0, 1, 6], "The": [0, 2], "same": 0, "credit": 0, "dataset": [0, 1], "classif": 1, "metric": [1, 5, 6], "accuraci": 1, "confus": 1, "matrix": 1, "breast": 1, "cancer": 1, "precis": 1, "f": 1, "score": [1, 6], "imbalanc": 1, "team": 2, "member": 2, "cross": [2, 3], "valid": [2, 3], "main": 2, "purpos": 2, "train": 2, "test": 2, "split": 2, "type": 2, "k": [2, 3], "fold": [2, 3], "logist": 2, "regress": [2, 6], "forest": 2, "gradient": 2, "boost": 2, "kfold": 2, "model": 2, "tune": [2, 4], "stratifi": [2, 3], "perform": 2, "comparison": 2, "leav": [2, 3], "One": 2, "out": [2, 3], "learn": 2, "gener": 2, "note": 2, "compar": 2, "abov": 2, "approach": 2, "hold": 3, "one": 3, "hyperparamet": 4, "grid": 4, "search": 4, "bayesian": 4, "optim": 4, "evalu": 5, "mean": 6, "squar": 6, "error": 6, "mse": 6, "root": 6, "rmse": 6, "r": 6, "2": 6, "absolut": 6, "mae": 6, "mape": 6, "simul": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})